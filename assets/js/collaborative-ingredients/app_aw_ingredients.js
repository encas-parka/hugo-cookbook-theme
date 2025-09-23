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
} from "../appwrite-client.js";

export function createCollaborativeApp(config = {}) {
  const { listId = "", appwriteConfig = {} } = config;

  const app = Vue.createApp({
    // L'application utilisera le contenu existant du div #collaborativeApp

    delimiters: ["[[", "]]"],

    components: {
      // Les composants sont maintenant intégrés dans les partials Hugo
    },

    data() {
      return {
        // Configuration
        listId,
        appwriteConfig,
        unitsManager,

        // État de l'application
        isLoading: true,
        error: null,
        realtimeStatus: "connecting",
        showUpdatePrompt: false,

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
        console.log('[Collaborative App] Filtrage:', {
          totalIngredients: this.transformedIngredients.length,
          filteredCount: filtered.length,
          activeFilters: {
            search: this.searchQuery,
            type: this.selectedTypeFilter,
            status: this.selectedStatusFilter,
            store: this.selectedStoreFilter,
            person: this.selectedPersonFilter
          }
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

          // Initialiser Appwrite
          if (!window.Appwrite) {
            throw new Error(
              "SDK Appwrite non disponible. Vérifiez que le script est bien chargé.",
            );
          }

          this.appwrite = new Appwrite.Client()
            .setEndpoint(
              appwriteConfig.endpoint || "https://cloud.appwrite.io/v1",
            )
            .setProject(
              appwriteConfig.project ||
                window.__HUGO_PARAMS__?.appwrite?.projectId ||
                "689725820024e81781b7",
            );

          // Initialiser les services Appwrite
          this.database = new Appwrite.Databases(this.appwrite);

          // Charger les données initiales
          await this.loadInitialData();

          // Configurer la synchronisation temps réel
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
          // Charger l'événement
          const eventResponse = await this.database.getDocument(
            appwriteConfig.databaseId ||
              window.__HUGO_PARAMS__?.appwrite?.databaseId ||
              "689d15b10003a5a13636",
            appwriteConfig.eventsCollectionId || "ingredient_lists",
            listId,
          );
          this.event = eventResponse;

          // Charger les ingrédients
          const ingredientsResponse = await this.database.listDocuments(
            appwriteConfig.databaseId ||
              window.__HUGO_PARAMS__?.appwrite?.databaseId ||
              "689d15b10003a5a13636",
            appwriteConfig.ingredientsCollectionId || "ingredients",
            [Appwrite.Query.equal("ingredientLists", listId)],
          );
          this.ingredients = ingredientsResponse.documents;

          // Charger les achats
          const purchasesResponse = await this.database.listDocuments(
            appwriteConfig.databaseId ||
              window.__HUGO_PARAMS__?.appwrite?.databaseId ||
              "689d15b10003a5a13636",
            appwriteConfig.purchasesCollectionId || "purchase",
            [Appwrite.Query.equal("list", listId)],
          );
          this.purchases = purchasesResponse;

          // Transformer les données pour l'UI
          await this.transformDataForUI();

          console.log("[Collaborative App] Données chargées:", {
            event: this.event?.name,
            ingredients: this.ingredients.length,
            purchases: this.purchases.length,
            transformed: this.transformedIngredients.length,
          });
        } catch (error) {
          console.error(
            "[Collaborative App] Erreur lors du chargement des données:",
            error,
          );
          throw error;
        }
      },

      async transformDataForUI() {
        console.log(
          "[Collaborative App] Transformation des données pour l'UI...",
        );

        try {
          // Utiliser IngredientCalculator pour calculer l'équilibre des ingrédients
          const calculatedIngredients = IngredientCalculator.calculateAppwriteIngredientsBalance(
            this.ingredients,
            this.purchases.documents || []
          );

          // Utiliser le service DataTransformer pour préparer les données pour l'UI
          this.transformedIngredients = DataTransformer.transformForUI(
            calculatedIngredients,
            {
              unitsManager: this.unitsManager,
              includeRecipeDetails: true,
              includeCalculations: true,
              purchases: this.purchases.documents || [],
            },
          );

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
        console.log("[Collaborative App] Configuration du temps réel...");

        try {
          this.appwrite.subscribe(
            [
              `databases.${appwriteConfig.databaseId || window.__HUGO_PARAMS__?.appwrite?.databaseId || "689d15b10003a5a13636"}.collections.${appwriteConfig.ingredientsCollectionId || "ingredients"}.documents`,
              `databases.${appwriteConfig.databaseId || window.__HUGO_PARAMS__?.appwrite?.databaseId || "689d15b10003a5a13636"}.collections.${appwriteConfig.purchasesCollectionId || "purchase"}.documents`,
            ],
            (response) => {
              console.log(
                "[Collaborative App] Mise à jour temps réel reçue:",
                response.events,
              );
              this.handleRealtimeUpdate(response);
            },
          );

          this.realtimeStatus = "connected";
          console.log("[Collaborative App] Temps réel configuré avec succès");
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
        const { events, payload } = response;

        // Gérer les mises à jour d'ingrédients
        if (events.some((event) => event.includes("ingredients"))) {
          if (events.includes("databases.*.collections.*.documents.*.create")) {
            this.handleIngredientCreated(payload);
          } else if (
            events.includes("databases.*.collections.*.documents.*.update")
          ) {
            this.handleIngredientUpdated(payload);
          } else if (
            events.includes("databases.*.collections.*.documents.*.delete")
          ) {
            this.handleIngredientDeleted(payload);
          }
        }

        // Gérer les mises à jour d'achats
        if (events.some((event) => event.includes("purchase"))) {
          if (events.includes("databases.*.collections.*.documents.*.create")) {
            this.handlePurchaseCreated(payload);
          } else if (
            events.includes("databases.*.collections.*.documents.*.update")
          ) {
            this.handlePurchaseUpdated(payload);
          } else if (
            events.includes("databases.*.collections.*.documents.*.delete")
          ) {
            this.handlePurchaseDeleted(payload);
          }
        }
      },

      handleIngredientChange(response) {
        const { payload, event } = response;

        switch (event) {
          case "create":
            this.ingredients.push(payload);
            break;
          case "update":
            const index = this.ingredients.findIndex(
              (ing) => ing.$id === payload.$id,
            );
            if (index !== -1) {
              this.ingredients.splice(index, 1, payload);
            }
            break;
          case "delete":
            this.ingredients = this.ingredients.filter(
              (ing) => ing.$id !== payload.$id,
            );
            break;
        }

        // Retransformer les données
        this.transformDataForUI();
      },

      handlePurchaseChange(response) {
        const { payload, event } = response;

        switch (event) {
          case "create":
            this.purchases.documents.push(payload);
            break;
          case "update":
            const index = this.purchases.documents.findIndex(
              (p) => p.$id === payload.$id,
            );
            if (index !== -1) {
              this.purchases.documents.splice(index, 1, payload);
            }
            break;
          case "delete":
            this.purchases.documents = this.purchases.documents.filter(
              (p) => p.$id !== payload.$id,
            );
            break;
        }

        // Retransformer les données
        this.transformDataForUI();
      },

      // Méthodes pour le temps réel
      handleIngredientCreated(ingredient) {
        this.ingredients.push(ingredient);
        this.transformDataForUI();
      },

      handleIngredientUpdated(ingredient) {
        const index = this.ingredients.findIndex(
          (ing) => ing.$id === ingredient.$id,
        );
        if (index !== -1) {
          this.ingredients.splice(index, 1, ingredient);
        }
        this.transformDataForUI();
      },

      handleIngredientDeleted(ingredient) {
        this.ingredients = this.ingredients.filter(
          (ing) => ing.$id !== ingredient.$id,
        );
        this.transformDataForUI();
      },

      handlePurchaseCreated(purchase) {
        this.purchases.documents.push(purchase);
        this.transformDataForUI();
      },

      handlePurchaseUpdated(purchase) {
        const index = this.purchases.documents.findIndex(
          (p) => p.$id === purchase.$id,
        );
        if (index !== -1) {
          this.purchases.documents.splice(index, 1, purchase);
        }
        this.transformDataForUI();
      },

      handlePurchaseDeleted(purchase) {
        this.purchases.documents = this.purchases.documents.filter(
          (p) => p.$id !== purchase.$id,
        );
        this.transformDataForUI();
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

        console.log("[Collaborative App] Soumission du formulaire:", {
          type: this.modalType,
          ingredient: this.editingIngredient?.ingredientName,
          data: this.purchaseForm,
        });

        try {
          // Vérifier l'authentification avec appwrite-client.js
          const isAuthenticated = isAuthenticatedCms();
          if (!isAuthenticated) {
            throw new Error("Utilisateur non connecté");
          }

          // Obtenir les infos de l'utilisateur via appwrite-client.js
          const userEmail = getUserEmail();
          const userName = getUserName();

          console.log("User auth:", { isAuthenticated, userEmail, userName });

          // Créer l'achat/stock avec le bon schéma
          const purchaseData = {
            list: this.listId,
            listIngredient: this.editingIngredient.$id, // Utiliser l'ID Appwrite de l'ingrédient
            quantity: parseFloat(this.purchaseForm.quantity.toString()),
            unit: this.purchaseForm.unit,
            who: this.purchaseForm.who,
            notes: this.purchaseForm.notes || "",
          };

          // Ajouter les champs spécifiques aux achats
          if (this.modalType === "purchase") {
            purchaseData.store = this.purchaseForm.store || "";
            purchaseData.price = this.purchaseForm.price
              ? parseFloat(this.purchaseForm.price.toString())
              : null;
          }

          console.log("Creating purchase/stock with data:", purchaseData);

          const result = await this.database.createDocument(
            appwriteConfig.databaseId ||
              window.__HUGO_PARAMS__?.appwrite?.databaseId ||
              "689d15b10003a5a13636",
            appwriteConfig.purchasesCollectionId || "purchase", // Utiliser la collection 'purchase'
            "unique()", // Utiliser la chaîne 'unique()' comme dans le backup
            purchaseData,
          );

          console.log("Purchase/stock created:", result);

          // Fermer le modal et réinitialiser le formulaire
          this.closePurchaseModal();

          // Recharger les données pour mettre à jour l'affichage
          await this.loadInitialData();

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
  });

  return app;
}
