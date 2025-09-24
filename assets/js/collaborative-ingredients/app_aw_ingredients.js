/**
 * app.js
 * Application Vue.js collaborative pour la gestion des listes d'ingrédients
 * Utilise Appwrite pour la persistance et la synchronisation temps réel
 * Architecture refactorisée avec services centralisés et composants stupides
 */

import { unitsManager } from "./UnitsManager.js";
import { IngredientCalculator } from "./services/IngredientCalculator.js";
import { DataTransformer } from "./services/DataTransformer.js";
import {
  getAccount,
  isAuthenticatedCms,
  getUserEmail,
  getUserName,
  getDatabases,
  subscribeToCollections,
  APPWRITE_CONFIG,
} from "../appwrite-client.js";

export function createCollaborativeApp() {
  const app = Vue.createApp({
    // L'application utilisera le contenu existant du div #collaborativeApp
    delimiters: ["[[", "]]"],
    components: {
      // Les composants sont maintenant intégrés dans les partials Hugo → `layouts/partials/aw_app_ingredients/
    },

    data() {
      return {
        // Configuration
        listId: null,
        unitsManager,

        // État de l'application
        isLoading: true,
        error: null,
        realtimeStatus: "connecting",
        showUpdatePrompt: false,
        unsubscribeRealtime: () => {},

        // Données Appwrite brutes
        event: null, // Document depuis la collection 'evenements (ingredient_lists)'
        ingredients: [], // Documents depuis la collection 'ingredients'
        purchases: [], // Documents depuis la collection 'purchase'

        // Données transformées pour l'UI
        transformedIngredients: [],

        // Filtrage et recherche
        searchQuery: "",
        selectedTypeFilter: "",
        selectedStatusFilter: "",
        selectedStoreFilter: "",
        selectedPersonFilter: "",

        // Tri
        sortField: "ingredientName",
        sortDirection: "asc",

        // Sélection
        selectedIngredients: [],
        selectAllChecked: false,

        // Modals
        showPurchaseModal: false,
        showDetailsModal: false,
        showSnapshotsModal: false,
        editingIngredient: null,
        modalType: "purchase", // 'purchase' ou 'stock'

        // Données pour les modals
        purchaseForm: {
          quantity: null,
          unit: "",
          store: "",
          who: "",
          price: null,
          date: new Date().toISOString().split("T")[0],
          notes: "",
        },
        snapshots: [],
        isLoadingSnapshots: false,
        isRestoring: null,
        isDeleting: null,

        // Données pour le mandatement
        showVolunteerPopover: false,
        currentVolunteerIngredient: null,
        volunteerName: "",
        deletedVolunteers: new Set(), // Volontaires marqués pour suppression

        // Données pour l'édition des magasins
        showStorePopover: false,
        currentStoreIngredient: null,
        storeInput: "",
        availableStoresSuggestions: [],
        deletedStores: new Set(), // Magasins marqués pour suppression

        // Actions et historique
        isCreatingSnapshot: false,
      };
    },

    computed: {
      // Ingrédients filtrés et triés (utilisent les données pré-transformées)
      filteredIngredients() {
        const filtered = this.transformedIngredients
          .filter((ingredient) => {
            // Filtre par recherche
            if (this.searchQuery.trim()) {
              const query = this.searchQuery.toLowerCase().trim();
              if (!ingredient.ingredientName.toLowerCase().includes(query)) {
                return false;
              }
            }

            // Filtre par type
            if (
              this.selectedTypeFilter &&
              ingredient.ingType !== this.selectedTypeFilter
            ) {
              return false;
            }

            // Filtre par statut
            if (this.selectedStatusFilter) {
              if (ingredient.status !== this.selectedStatusFilter) {
                return false;
              }
            }

            // Filtre par magasin
            if (this.selectedStoreFilter) {
              if (ingredient.storesDisplay !== this.selectedStoreFilter) {
                return false;
              }
            }

            // Filtre par personne
            if (this.selectedPersonFilter) {
              if (ingredient.responsibleDisplay !== this.selectedPersonFilter) {
                return false;
              }
            }

            return true;
          })
          .sort((a, b) => {
            let aVal, bVal;

            switch (this.sortField) {
              case "ingredientName":
                aVal = a.ingredientName.toLowerCase();
                bVal = b.ingredientName.toLowerCase();
                break;
              case "ingType":
                aVal = a.ingType;
                bVal = b.ingType;
              default:
                aVal = a[this.sortField];
                bVal = b[this.sortField];
            }

            if (aVal < bVal) return this.sortDirection === "asc" ? -1 : 1;
            if (aVal > bVal) return this.sortDirection === "asc" ? 1 : -1;
            return 0;
          });

        // Log de débogage pour voir le filtrage
        console.log("[Collaborative App] Filtrage:", {
          totalIngredients: this.transformedIngredients.length,
          filteredCount: filtered.length,
          activeFilters: {
            search: this.searchQuery,
            type: this.selectedTypeFilter,
            status: this.selectedStatusFilter,
            store: this.selectedStoreFilter,
            person: this.selectedPersonFilter,
          },
        });

        return filtered;
      },

      // Types disponibles pour les filtres
      availableTypes() {
        const types = [
          ...new Set(this.transformedIngredients.map((ing) => ing.ingType)),
        ];
        return types.sort();
      },

      // Magasins disponibles pour les filtres
      availableStores() {
        const stores = new Set();
        this.transformedIngredients.forEach((ing) => {
          if (ing.storesDisplay && ing.storesDisplay !== "-") {
            stores.add(ing.storesDisplay);
          }
        });
        return Array.from(stores).sort();
      },

      // Personnes disponibles pour les filtres
      availablePeople() {
        const people = new Set();
        this.transformedIngredients.forEach((ing) => {
          if (ing.responsibleDisplay && ing.responsibleDisplay !== "-") {
            people.add(ing.responsibleDisplay);
          }
        });
        return Array.from(people).sort();
      },

      // Statistiques calculées à partir des données transformées
      totalIngredients() {
        return this.transformedIngredients.length;
      },

      missingIngredients() {
        return this.transformedIngredients.filter(
          (ing) => ing.status === "missing",
        ).length;
      },

      completeIngredients() {
        return this.transformedIngredients.filter(
          (ing) => ing.status === "sufficient",
        ).length;
      },

      modifiedIngredients() {
        return this.transformedIngredients.filter((ing) => ing.isModified)
          .length;
      },

      // Données calculées pour les modals
      suggestedUnits() {
        if (!this.editingIngredient) return ["gr.", "kg", "ml", "l.", "unité"];
        return this.unitsManager.getSuggestedUnits(
          this.editingIngredient.ingType,
        );
      },

      commonStores() {
        return [
          "Monoprix",
          "Carrefour",
          "Leclerc",
          "Biocoop",
          "Marché local",
          "Lidl",
          "Aldi",
        ];
      },

      commonPeople() {
        return ["Alice", "Bob", "Charlie", "Diana", "Éric", "Sophie"];
      },

      isPurchaseFormValid() {
        return this.purchaseForm.quantity > 0 && this.purchaseForm.unit;
      },
    },

    mounted() {
      this.initializeApp();
    },

    methods: {
      // === MÉTHODES D'INITIALISATION ===

      async initializeApp() {
        try {
          console.log("[Collaborative App] Initialisation...");
          // 1. Récupérer l'ID de la liste depuis l'URL
          const urlParams = new URLSearchParams(window.location.search);
          this.listId = urlParams.get("listId");
          if (!this.listId) {
            throw new Error("ID de liste manquant dans l'URL (?listId=...).");
          }
          // 2. Obtenir l'instance de la base de données depuis notre client central
          this.database = await getDatabases();

          // 3. Charger les données initiales
          await this.loadInitialData();

          // 4. Configurer la synchronisation temps réel
          this.setupRealtime();

          this.isLoading = false;
          console.log(
            "[Collaborative App] Application initialisée avec succès",
          );
        } catch (error) {
          console.error(
            "[Collaborative App] Erreur lors de l'initialisation:",
            error,
          );
          this.error = "Erreur lors de l'initialisation: " + error.message;
          this.isLoading = false;
        }
      },

      async loadInitialData() {
        console.log("[Collaborative App] Chargement des données initiales...");
        try {
          const db = this.database;
          const dbId = APPWRITE_CONFIG.databaseId;
          const collections = APPWRITE_CONFIG.collections;

          // Utiliser Promise.all pour charger les données en parallèle (plus rapide)
          const [eventResponse, ingredientsResponse, purchasesResponse] =
            await Promise.all([
              db.getDocument(dbId, collections.events, this.listId),
              db.listDocuments(dbId, collections.ingredients, [
                Appwrite.Query.equal("ingredientLists", this.listId),
                Appwrite.Query.limit(800),
              ]),
              db.listDocuments(dbId, collections.purchases, [
                Appwrite.Query.equal("list", this.listId),
                Appwrite.Query.limit(2000), // Augmenter la limite pour les achats
              ]),
            ]);

          this.event = eventResponse;
          this.ingredients = ingredientsResponse.documents;
          this.purchases = purchasesResponse.documents; // Structure plus simple

          // Transformer les données pour l'UI
          this.transformDataForUI();
        } catch (error) {
          console.error(
            "[Collaborative App] Erreur lors du chargement des données:",
            error,
          );
          if (error.code === 404) {
            this.error =
              "Cette liste collaborative n'existe pas ou vous n'y avez pas accès.";
          }
          throw error;
        }
      },

      async transformDataForUI() {
        console.log(
          "[Collaborative App] Transformation des données pour l'UI...",
        );

        try {
          // Utiliser IngredientCalculator pour calculer l'équilibre des ingrédients
          const calculatedIngredients =
            IngredientCalculator.calculateIngredientsBalance(
              this.ingredients,
              this.purchases || [],
            );

          // Utiliser le service DataTransformer pour préparer les données pour l'UI
          this.transformedIngredients = DataTransformer.transformForUI(
            calculatedIngredients,
            {
              // Keep only purchases ?
              unitsManager: this.unitsManager,
              includeRecipeDetails: true,
              includeCalculations: true,
              purchases: this.purchases || [],
            },
          );

          // Collecter les magasins existants pour les suggestions
          this.collectAvailableStores();

          console.log(
            "[Collaborative App] Données transformées:",
            this.transformedIngredients.length,
            "ingrédients",
          );
        } catch (error) {
          console.error(
            "[Collaborative App] Erreur lors de la transformation des données:",
            error,
          );
          throw error;
        }
      },

      // === MÉTHODES DE SYNCHRONISATION TEMPS RÉEL ===

      setupRealtime() {
        try {
          this.unsubscribeRealtime = subscribeToCollections(
            ["ingredients", "purchases"],
            (response) => {
              console.log(
                "[Collaborative App] Mise à jour temps réel reçue:",
                response,
              );
              this.handleRealtimeUpdate(response);
            },
          );
          this.realtimeStatus = "connected";
        } catch (error) {
          console.error("[Collaborative App] Erreur realtime:", error);
          this.realtimeStatus = "disconnected";

          // Retry connection after 5 seconds
          console.log(
            "[Collaborative App] Tentative de reconnexion dans 5 secondes...",
          );
          setTimeout(() => this.setupRealtime(), 5000);
        }
      },

      handleRealtimeUpdate(response) {
        const { payload } = response;
        const collectionName = response.events[0].split(".")[3]; // ex: "ingredients" ou "purchase"
        const eventType = response.events[0].split(".")[6]; // "create", "update", "delete". L'index "5" ne correspond pas à l'événement: preserver index 6.

        if (collectionName === APPWRITE_CONFIG.collections.ingredients) {
          this._updateLocalCollection(this.ingredients, payload, eventType);
        } else if (collectionName === APPWRITE_CONFIG.collections.purchases) {
          this._updateLocalCollection(this.purchases, payload, eventType);
        }
        this.transformDataForUI();
      },

      _updateLocalCollection(collection, payload, eventType) {
        const index = collection.findIndex((doc) => doc.$id === payload.$id);

        if (eventType === "create" && index === -1) {
          collection.push(payload);
        } else if (eventType === "update" && index !== -1) {
          collection.splice(index, 1, payload);
        } else if (eventType === "delete" && index !== -1) {
          collection.splice(index, 1);
        }
      },

      // === MÉTHODES DE FILTRAGE ET TRI ===

      clearFilters() {
        this.searchQuery = "";
        this.selectedTypeFilter = "";
        this.selectedStatusFilter = "";
        this.selectedStoreFilter = "";
        this.selectedPersonFilter = "";
      },

      sortBy(field) {
        if (this.sortField === field) {
          this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
        } else {
          this.sortField = field;
          this.sortDirection = "asc";
        }
      },

      getSortClass(field) {
        return this.sortField === field ? "active-sort" : "";
      },

      getSortIcon(field) {
        if (this.sortField !== field) return "";
        return this.sortDirection === "asc" ? "↑" : "↓";
      },

      // === MÉTHODES DE SÉLECTION ===

      handleSelectAll(event) {
        const isChecked = event.target.checked;
        if (isChecked) {
          this.selectedIngredients = this.filteredIngredients.map(
            (ing) => ing.$id,
          );
        } else {
          this.selectedIngredients = [];
        }
        this.selectAllChecked = isChecked;
      },

      handleIngredientSelect(ingredientId) {
        const index = this.selectedIngredients.indexOf(ingredientId);
        if (index > -1) {
          this.selectedIngredients.splice(index, 1);
        } else {
          this.selectedIngredients.push(ingredientId);
        }
        this.selectAllChecked =
          this.selectedIngredients.length === this.filteredIngredients.length;
      },

      // === MÉTHODES D'ÉDITION ===

      handleEditStock(ingredient) {
        this.editingIngredient = ingredient;
        this.modalType = "stock";
        this.showPurchaseModal = true;
      },

      handleEditPurchases(ingredient) {
        this.editingIngredient = ingredient;
        this.modalType = "purchase";
        this.showPurchaseModal = true;
      },

      handleShowDetails(ingredient) {
        this.editingIngredient = ingredient;
        this.showDetailsModal = true;
      },

      // === MÉTHODES DES MODALS ===

      closePurchaseModal() {
        this.showPurchaseModal = false;
        this.editingIngredient = null;
        this.resetPurchaseForm();
      },

      closeDetailsModal() {
        this.showDetailsModal = false;
        this.editingIngredient = null;
      },

      resetPurchaseForm() {
        this.purchaseForm = {
          quantity: null,
          unit: "",
          store: "",
          who: "",
          price: null,
          date: new Date().toISOString().split("T")[0],
          notes: "",
        };
      },

      async submitPurchaseForm() {
        if (!this.isPurchaseFormValid) return;

        try {
          // Obtenir les infos de l'utilisateur via appwrite-client.js
          const userEmail = getUserEmail();
          const userName = getUserName();

          // Créer l'achat/stock avec le bon schéma
          // FIXIT: gestion du puchase vs stock
          const purchaseData = {
            list: this.listId,
            listIngredient: this.editingIngredient.$id, // Utiliser l'ID Appwrite de l'ingrédient
            quantity: parseFloat(this.purchaseForm.quantity.toString()),
            unit: this.purchaseForm.unit,
            who: this.purchaseForm.who,
            notes: this.purchaseForm.notes || "",
            createdBy: userEmail,
          };

          // Ajouter les champs spécifiques aux achats
          if (this.modalType === "purchase") {
            purchaseData.store = this.purchaseForm.store || "";
            purchaseData.price = this.purchaseForm.price
              ? parseFloat(this.purchaseForm.price.toString())
              : null;
          }

          const result = await this.database.createDocument(
            APPWRITE_CONFIG.databaseId,
            APPWRITE_CONFIG.collections.purchases, // Utilise la config
            "unique()",
            purchaseData,
          );

          // Fermer le modal et réinitialiser le formulaire
          this.closePurchaseModal();

          return true;
        } catch (error) {
          console.error("Erreur lors de la création de l'achat/stock:", error);
          alert("Erreur lors de l'enregistrement: " + error.message);
          return false;
        }
      },

      openPurchaseModalFromDetails() {
        this.showDetailsModal = false;
        this.modalType = "purchase";
        this.showPurchaseModal = true;
      },

      openStockModalFromDetails() {
        this.showDetailsModal = false;
        this.modalType = "stock";
        this.showPurchaseModal = true;
      },

      exportIngredientData() {
        const data = {
          ingredient: this.editingIngredient,
          exportedAt: new Date().toISOString(),
          calculations: {
            totalNeed: this.editingIngredient?.totalNeedDisplay,
            stock: this.editingIngredient?.stockDisplay,
            purchases: this.editingIngredient?.purchasesDisplay,
            balance: this.editingIngredient?.balanceDisplay,
          },
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], {
          type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `ingredient-${this.editingIngredient?.ingredientName}-${new Date().toISOString().split("T")[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      },

      formatDate(dateStr) {
        if (!dateStr) return "-";
        return new Date(dateStr).toLocaleDateString("fr-FR");
      },

      formatTime(dateStr) {
        if (!dateStr) return "-";
        return new Date(dateStr).toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        });
      },

      // Méthodes pour les snapshots
      async refreshSnapshots() {
        this.isLoadingSnapshots = true;
        try {
          // TODO: Implémenter le chargement des snapshots depuis Appwrite
          await new Promise((resolve) => setTimeout(resolve, 1000));
          this.snapshots = [];
        } catch (error) {
          console.error(
            "[Collaborative App] Erreur lors du chargement des snapshots:",
            error,
          );
        } finally {
          this.isLoadingSnapshots = false;
        }
      },

      previewSnapshot(snapshot) {
        console.log("[Collaborative App] Prévisualiser snapshot:", snapshot);
      },

      async restoreSnapshot(snapshot) {
        if (
          !confirm(
            `Êtes-vous sûr de vouloir restaurer la sauvegarde du ${this.formatDate(snapshot.$createdAt)} ?`,
          )
        ) {
          return;
        }

        this.isRestoring = snapshot.$id;
        try {
          // TODO: Implémenter la restauration
          console.log("[Collaborative App] Restaurer snapshot:", snapshot);
        } catch (error) {
          console.error(
            "[Collaborative App] Erreur lors de la restauration:",
            error,
          );
          alert("Erreur lors de la restauration. Veuillez réessayer.");
        } finally {
          this.isRestoring = null;
        }
      },

      async deleteSnapshot(snapshot) {
        if (
          !confirm(
            `Êtes-vous sûr de vouloir supprimer définitivement la sauvegarde du ${this.formatDate(snapshot.$createdAt)} ?`,
          )
        ) {
          return;
        }

        this.isDeleting = snapshot.$id;
        try {
          // TODO: Implémenter la suppression
          console.log("[Collaborative App] Supprimer snapshot:", snapshot);
          await this.refreshSnapshots();
        } catch (error) {
          console.error(
            "[Collaborative App] Erreur lors de la suppression:",
            error,
          );
          alert("Erreur lors de la suppression. Veuillez réessayer.");
        } finally {
          this.isDeleting = null;
        }
      },

      getSnapshotIngredientCount(snapshot) {
        // TODO: Calculer le nombre d'ingrédients dans le snapshot
        return "0";
      },

      // === MÉTHODES DE MANDEMENT ===

      handleVolunteer(ingredient) {
        this.currentVolunteerIngredient = ingredient;
        const storedUsername = this.getStoredUsername() || "";

        // Auto-fill only if user is not already a volunteer
        if (ingredient.who && ingredient.who.includes(storedUsername)) {
          this.volunteerName = "";
        } else {
          this.volunteerName = storedUsername;
        }

        this.showVolunteerPopover = true;

        // Focus sur l'input après l'ouverture du popover
        this.$nextTick(() => {
          const input = document.getElementById('volunteer-name');
          if (input) {
            input.focus();
            input.select();
          }
        });
      },

      closeVolunteerPopover() {
        this.showVolunteerPopover = false;
        this.currentVolunteerIngredient = null;
        this.volunteerName = "";
        this.deletedVolunteers.clear();
      },

      async submitVolunteer() {
        if (!this.currentVolunteerIngredient) return;

        // Permettre l'envoi s'il y a un nouveau volontaire OU des désinscriptions
        if (!this.volunteerName.trim() && this.deletedVolunteers.size === 0) return;

        try {
          // Sauvegarder le pseudo dans le localStorage
          if (this.volunteerName.trim()) {
            localStorage.setItem('volunteer-username', this.volunteerName.trim());
          }

          // Mettre à jour le champ "who" de l'ingrédient dans Appwrite
          const currentWho = this.currentVolunteerIngredient.who || [];

          // Check if already exists in the current list (including deleted ones)
          if (this.volunteerName.trim()) {
            const volunteerExists = currentWho.includes(this.volunteerName.trim());
            if (volunteerExists && !this.isVolunteerDeleted(this.currentVolunteerIngredient.$id, this.volunteerName.trim())) {
              alert(`${this.volunteerName.trim()} est déjà inscrit pour cet ingrédient`);
              return;
            }
          }

          // Traiter le tableau avec les éléments supprimés et le nouveau volontaire
          let newWho = this.processArrayWithDeletedItems(currentWho, this.deletedVolunteers, this.volunteerName);

          const updateResult = await this.updateArrayField(this.currentVolunteerIngredient, 'who', newWho);

          if (!updateResult.success) {
            throw updateResult.error;
          }

          // Fermer le popover
          this.closeVolunteerPopover();

        } catch (error) {
          const userMessage = await this.handleAppwriteError(error, 'du mandatement');
          alert(userMessage);
        }
      },



      getStoredUsername() {
        // D'abord essayer de récupérer le pseudo du localStorage
        const storedUsername = localStorage.getItem('volunteer-username');
        if (storedUsername) return storedUsername;

        // Sinon, utiliser le nom utilisateur Appwrite
        return getUserName() || '';
      },

      async removeVolunteer(volunteerName) {
        if (!this.currentVolunteerIngredient) return;

        try {
          // Supprimer le volontaire du tableau
          const currentWho = this.currentVolunteerIngredient.who || [];
          const newWho = currentWho.filter(name => name !== volunteerName);

          const updateResult = await this.updateArrayField(this.currentVolunteerIngredient, 'who', newWho);

          if (!updateResult.success) {
            throw updateResult.error;
          }

        } catch (error) {
          const userMessage = await this.handleAppwriteError(error, 'de la suppression du volontaire');
          alert(userMessage);
        }
      },

      async removeStore(storeName) {
        if (!this.currentStoreIngredient) return;

        try {
          // Supprimer le magasin du tableau
          const currentStore = this.currentStoreIngredient.store || [];
          const newStore = currentStore.filter(store => store !== storeName);

          const updateResult = await this.updateArrayField(this.currentStoreIngredient, 'store', newStore);

          if (!updateResult.success) {
            throw updateResult.error;
          }

        } catch (error) {
          const userMessage = await this.handleAppwriteError(error, 'de la suppression du magasin');
          alert(userMessage);
        }
      },

      // === MÉTHODES D'ÉDITION DES MAGASINS ===

      handleEditStore(ingredient) {
        this.currentStoreIngredient = ingredient;
        this.storeInput = "";
        this.showStorePopover = true;

        // Focus sur l'input après l'ouverture du popover
        this.$nextTick(() => {
          const input = document.getElementById('store-input');
          if (input) {
            input.focus();
            input.select();
          }
        });
      },

      closeStorePopover() {
        this.showStorePopover = false;
        this.currentStoreIngredient = null;
        this.storeInput = "";
        this.deletedStores.clear();
      },

      async submitStore() {
        if (!this.currentStoreIngredient) return;

        try {
          let finalStores = this.processArrayWithDeletedItems(
            this.currentStoreIngredient.store || [],
            this.deletedStores,
            this.storeInput
          );

          // Si aucune modification, fermer simplement le modal
          if (JSON.stringify(finalStores) === JSON.stringify(this.currentStoreIngredient.store || [])) {
            this.closeStorePopover();
            return;
          }

          // Ajouter aux suggestions si nécessaire
          if (this.storeInput.trim() && !this.availableStoresSuggestions.includes(this.storeInput.trim())) {
            this.availableStoresSuggestions.push(this.storeInput.trim());
            this.availableStoresSuggestions.sort();
          }

          const updateResult = await this.updateArrayField(this.currentStoreIngredient, 'store', finalStores);

          if (!updateResult.success) {
            throw updateResult.error;
          }

          // Fermer le popover
          this.closeStorePopover();

        } catch (error) {
          const userMessage = await this.handleAppwriteError(error, 'de la mise à jour des magasins');
          alert(userMessage);
        }
      },

      isStoreDeleted(storeName) {
        return this.deletedStores.has(storeName);
      },

      toggleStore(storeName) {
        if (this.deletedStores.has(storeName)) {
          this.deletedStores.delete(storeName);
        } else {
          this.deletedStores.add(storeName);
        }
      },

      hasStoreChanges() {
        return this.storeInput.trim() || this.deletedStores.size > 0;
      },

      // Volunteer helper methods
      isVolunteerDeleted(volunteerName) {
        return this.deletedVolunteers.has(`${volunteerName}`);
      },

      toggleVolunteer(volunteerName) {
        const key = `${volunteerName}`;
        if (this.deletedVolunteers.has(key)) {
          this.deletedVolunteers.delete(key);
        } else {
          this.deletedVolunteers.add(key);
        }
      },

      hasVolunteerChanges() {
        return this.volunteerName.trim() || this.deletedVolunteers.size > 0;
      },

      collectAvailableStores() {
        const stores = new Set();

        // Collecter les magasins depuis tous les ingrédients
        this.transformedIngredients.forEach(ingredient => {
          if (ingredient.store && Array.isArray(ingredient.store)) {
            ingredient.store.forEach(store => {
              if (store && store.trim()) {
                stores.add(store.trim());
              }
            });
          }
        });

        // Ajouter les magasins depuis les achats existants
        if (this.purchases) {
          this.purchases.forEach(purchase => {
            if (purchase.store && purchase.store.trim()) {
              stores.add(purchase.store.trim());
            }
          });
        }

        // Convertir en tableau et trier
        this.availableStoresSuggestions = Array.from(stores).sort();

        console.log(`[Collaborative App] Collecté ${this.availableStoresSuggestions.length} magasins pour les suggestions`);
      },

      // === MÉTHODES DE STATUT ===

      toggleIngredientStatus(ingredient) {
        console.log(
          "[Collaborative App] Toggle statut pour:",
          ingredient.ingredientName,
        );
        // TODO: Implémenter le changement de statut
      },

      // === MÉTHODES DE SAUVEGARDE ===

      async createSnapshot() {
        console.log("[Collaborative App] Création d'un snapshot...");
        this.isCreatingSnapshot = true;

        try {
          // TODO: Implémenter la création de snapshot
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log("[Collaborative App] Snapshot créé");
        } catch (error) {
          console.error(
            "[Collaborative App] Erreur lors de la création du snapshot:",
            error,
          );
        } finally {
          this.isCreatingSnapshot = false;
        }
      },

      // === MÉTHODES UTILITAIRES ===

      formatTypeShort(type) {
        const typeMap = {
          frais: "Produits Frais",
          legumesFrais: "Fruits et Légumes",
          legumesNonFrais: "Conserves",
          lof: "LOF",
          sucres: "Sucrés",
          epices: "Épices",
          sec: "Produits Secs",
          animaux: "Viandes",
          autres: "Autres",
        };
        return typeMap[type] || type;
      },

      // Méthode utilitaire pour la gestion centralisée des erreurs Appwrite
      async handleAppwriteError(error, context) {
        console.error(`[Collaborative App] Erreur lors de ${context}:`, error);
        console.error('[Collaborative App] Détails de l\'erreur:', {
          code: error.code,
          type: error.type,
          message: error.message,
          response: error.response
        });

        let userMessage = '';

        if (error.code === 409) {
          userMessage = 'Conflit de données: Veuillez rafraîchir la page et réessayer.';
        } else if (error.code === 404) {
          userMessage = 'Élément non trouvé. Veuillez rafraîchir la page.';
        } else {
          userMessage = `Erreur lors de ${context}: ${error.message || 'Erreur inconnue'}`;
        }

        return userMessage;
      },

      // Méthode utilitaire pour mettre à jour un tableau dans Appwrite
      async updateArrayField(ingredient, fieldName, newArray) {
        try {
          const result = await this.database.updateDocument(
            APPWRITE_CONFIG.databaseId,
            APPWRITE_CONFIG.collections.ingredients,
            ingredient.$id,
            {
              [fieldName]: newArray
            }
          );

          // Mettre à jour les données locales
          ingredient[fieldName] = newArray;

          return { success: true, result };
        } catch (error) {
          return { success: false, error };
        }
      },

      // Méthode utilitaire pour traiter les tableaux avec éléments supprimés
      processArrayWithDeletedItems(currentArray, deletedItems, newItem = null) {
        let processedArray = [...currentArray];

        // Supprimer les éléments marqués pour suppression
        processedArray = processedArray.filter(item => !deletedItems.has(item));

        // Ajouter le nouvel élément s'il y en a un et n'existe pas déjà
        if (newItem && newItem.trim() && !processedArray.includes(newItem.trim())) {
          processedArray.push(newItem.trim());
        }

        return processedArray;
      },

      // === MÉTHODES DE DEBUG ===

      logCurrentState() {
        console.log("[Collaborative App] État actuel:", {
          isLoading: this.isLoading,
          error: this.error,
          ingredients: this.ingredients.length,
          purchases: this.purchases.documents?.length || 0,
          transformed: this.transformedIngredients.length,
          filters: {
            search: this.searchQuery,
            type: this.selectedTypeFilter,
            status: this.selectedStatusFilter,
          },
          sort: {
            field: this.sortField,
            direction: this.sortDirection,
          },
        });
      },
    },

    beforeUnmount() {
           // C'est une bonne pratique de se désabonner quand le composant est détruit
           if (this.unsubscribeRealtime) {
               console.log('[Collaborative App] Désabonnement des mises à jour temps réel.');
               this.unsubscribeRealtime();
           }
       },
  });

  return app;
}
