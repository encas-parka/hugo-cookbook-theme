/**
 * app_aw_ingredients.js
 * Application Vue.js collaborative pour la gestion des listes d'ingrédients
 *
 * @description
 * Application principale pour la gestion collaborative d'ingrédients d'événements.
 * Architecture basée sur des services spécialisés et une synchronisation temps réel
 * via Appwrite avec stratégie de cache local pour performances optimales.
 *
 * @flow
 * 1. Initialisation → Authentification Appwrite → Chargement données (cache + Appwrite)
 * 2. Transformation → IngredientCalculator → DataTransformer → UI
 * 3. Synchronisation → SyncService → Realtime updates → Cache local
 * 4. Interactions → ModalMixin → ColorManager → Toasts
 *
 * @services
 * - IngredientCalculator: Calculs d'équilibre besoins vs achats
 * - DataTransformer: Formatage des données pour l'UI
 * - SyncService: Synchronisation différentielle cache ↔ Appwrite
 * - UnitsManager: Gestion des conversions d'unités
 * - ColorManager: Attribution de couleurs pastel (volontaires/magasins)
 * - TableColumnsConfig: Configuration des colonnes TanStack Table
 * - ModalMixin: Gestion unifiée des modaux
 *
 * @data-flow
 * Appwrite Raw Data → IngredientCalculator → DataTransformer → Vue Components (UI)
 *                 ↑                                              ↓
 *          Realtime Updates ←←←←←←←←←←←← User Interactions →→ Appwrite
 *
 * @dependencies
 * - Vue.js 3 (Options API)
 * - TanStack Table (affichage tabulaire)
 * - Appwrite Client SDK (authentification + base de données)
 * - appwrite-client.js (client centralisé Appwrite)
 *
 */


import { useVueTable, getCoreRowModel, getGroupedRowModel, getSortedRowModel, getFilteredRowModel, getExpandedRowModel } from 'js/vuetable.development.js';
import { unitsManager } from "./UnitsManager.js";
import { ColorManager } from "./ColorManager.js";
import { TableColumnsConfig } from "./TableColumnsConfig.js";
import { IngredientCalculator } from "./services/IngredientCalculator.js";
import { DataTransformer } from "./services/DataTransformer.js";
import { SyncService } from "./services/SyncService.js";
import { AppwriteDataService } from "./AppwriteDataService.js";
import { ModalMixin } from "./ModalMixin.js";
import { AuthManager } from "./services/AuthManager.js";
import {
  getUserEmail,
  getUserName,
  getDatabases,
  subscribeToCollections,
  APPWRITE_CONFIG,
  isAuthenticatedAppwrite,
} from "../appwrite-client.js";



export function createCollaborativeApp() {
  const app = Vue.createApp({
    // L'application utilisera le contenu existant du div #collaborativeApp
    delimiters: ["[[", "]]"],

    // Intégration du ModalMixin pour la gestion du modal unifié
    mixins: [ModalMixin],

    // --- NOUVEAU composant pour rendre les VNodes ---
    components: {
      RenderVnode: {
        props: ['vnode'],
        render() {
          return this.vnode;
        }
      }
    },

    data() {
      return {
        // Configuration
        listId: null,
        unitsManager,

        // État de l'application
        isLoading: true,
        error: null,
        // realtimeStatus: "connecting",
        showUpdatePrompt: false,
        unsubscribeRealtime: () => { },

        // Services
        syncService: null,
        colorManager: null,

        // État de la connexion temps réel
        realtimeStatus: {
          // État de connexion principal
          isConnected: false,
          isConnecting: false,

          // Gestion des reconnexions
          retryCount: 0,
          maxRetries: 3,
          retryDelay: 2000, // 2 secondes de base
          reconnectionTimeout: null,

          // Interface utilisateur
          showReconnecting: false,
          showDisconnectedToast: false,
          hasBeenConnected: false, // Pour distinguer première connexion vs reconnexion
        },

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

        // Sélection
        selectedIngredients: [],
        selectAllChecked: false,

        // Modals
        editingIngredient: null,

        // Données pour la gestion des suppressions dans le modal unifié
        deletedVolunteers: new Set(), // Volontaires marqués pour suppression
        deletedStores: new Set(), // Magasins marqués pour suppression

        // Gestion des vues
        currentView: 'grouped', // 'table', 'grouped', 'cards', 'compact'
        tableGrouping: ['storesDisplay'], // Pour TanStack Table

        // Service d'authentification
        authManager: null, // Sera initialisé dans initializeApp()

        // État UI pour l'authentification (reste dans Vue)
        showAuthModal: false,
        showAuthToast: false,
        allowAnonymousView: true,
        authModalShown: false,
        isAuthenticated: false, // État synchrone pour les templates

        deleteConfirmation: {
          show: false,
          message: '',
          itemType: '',
          itemId: null,
          progress: 0,
          progressInterval: null
        },
        newPurchase: {
          quantity: null,
          unit: '',
          store: '',
          who: '',
          price: null,
          notes: ''
        },
        newStock: {
          quantity: null,
          unit: '',
          dateTime: new Date().toISOString().slice(0, 16),
          notes: ''
        },
        newVolunteer: '',
        newStore: '',

        // Suggestions pour les utilisateurs
        availableUsersSuggestions: [],

        // Modal d'attribution groupée
        groupAssignmentModal: {
          isOpen: false,
          type: '', // 'volunteer', 'store', etc.
          value: '',
          groupName: '',
          isProcessing: false,
          // Propriété simplifiée pour la gestion des suppressions
          replaceExisting: false, // Switch pour supprimer les attributions existantes
          assignmentsToRemove: new Map(), // ingredientId -> Set(valeurs à supprimer)
          summary: {
            ingredientsCount: 0,
            additionsCount: 0,
            removalsCount: 0,
            replacementsCount: 0
          }
        },
        selectedIngredients: [],
        filteredSuggestions: [],
        showSuggestions: false,

        // Système de toasts génériques
        toasts: []
      }
    },


    computed: {
      // Méthodes d'authentification accessibles dans les templates
      isAuthenticatedAppwrite() {
        return isAuthenticatedAppwrite;
      },

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
        return filtered;
      },

      // Ingrédients groupés par magasin
      groupedIngredients() {
        const groups = {};

        this.filteredIngredients.forEach(ingredient => {
          const storeName = ingredient.storesDisplay || 'Magasin non spécifié';

          if (!groups[storeName]) {
            groups[storeName] = [];
          }

          groups[storeName].push(ingredient);
        });

        // Trier les groupes par nom de magasin
        const sortedGroups = {};
        Object.keys(groups).sort().forEach(storeName => {
          sortedGroups[storeName] = groups[storeName];
        });

        return sortedGroups;
      },

      // Données pour TanStack Table
      tableData() {
        return this.filteredIngredients.map(ing => ({
          ...ing,
          // Ajouter des propriétés pour TanStack Table
          totalNeeded: ing.totalNeeded || 0,
          totalPurchased: ing.totalPurchased || 0,
          totalMissing: ing.totalMissing || 0,
          typeDisplay: this.formatTypeShort(ing.ingType),
          storesDisplay: ing.store && ing.store.length > 0 ? ing.store.join(', ') : '',
          responsibleDisplay: ing.who && ing.who.length > 0 ? ing.who.join(', ') : ''
        }));
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

      // Propriétés calculées pour le modal unifié
      suggestedUnits() {
        if (!this.editingIngredient?.calculations?.balancePerUnit) return [];
        return this.editingIngredient.calculations.balancePerUnit.map(item => item.unit);
      },

      isPurchaseFormValid() {
        return this.newPurchase && this.newPurchase.quantity && this.newPurchase.unit;
      },

      isStockFormValid() {
        return this.newStock && this.newStock.quantity && this.newStock.unit && this.newStock.dateTime;
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
        if (!this.editingIngredient) return ["kg", "gr.", "l.", "ml", "unité"];
        return this.unitsManager.getSuggestedUnits(
          this.editingIngredient.ingType,
        );
      },

      // Données calculées pour le modal d'attribution groupée
      selectedCount() {
        return this.selectedIngredients.filter(ing => ing.selected).length;
      },

      assignmentSuggestions() {
        if (this.groupAssignmentModal.type === 'volunteer') {
          return this.availableUsersSuggestions;
        } else if (this.groupAssignmentModal.type === 'store') {
          return this.availableStoresSuggestions;
        }
        return [];
      },




      // --- LOGIQUE DE TANSTACK TABLE INTÉGRÉE ---

      tableColumns() {
        // Configuration des colonnes via le service dédié
        const config = new TableColumnsConfig({
          h: Vue.h,
          handlers: {
            openUnifiedModal: this.openUnifiedModal,
            handleGroup: this.handleGroup
          },
          formatters: {
            formatTypeShort: this.formatTypeShort
          },
          colorManager: {
            getVolunteerColor: this.getColorForVolunteer,
            getStoreColor: this.getColorForStore
          }
        });
        return config.getColumns();
      },

      table() {
             // Cette propriété sera maintenant calculée correctement.
             // Vue attendra que ses dépendances (tableData, tableColumns, tableGrouping) soient prêtes.
             if (!useVueTable || !getExpandedRowModel) {
               console.error('VueTable and getExpandedRowModel are required');
                 return null;
             }

             return useVueTable({
               data: this.tableData,
               columns: this.tableColumns,
               state: {
                 grouping: this.tableGrouping,
                 expanded: true,
               },
               getCoreRowModel: getCoreRowModel(),
               getGroupedRowModel: getGroupedRowModel(),
               getSortedRowModel: getSortedRowModel(),
               getFilteredRowModel: getFilteredRowModel(),
               getExpandedRowModel: getExpandedRowModel(),
               enableGrouping: true,
             });
           }
         },

    // Watcher pour synchroniser le regroupement
    watch: {

      tableGrouping(newTableGrouping) {
        if (newTableGrouping[0] !== this.groupingBy) {
          this.groupingBy = newTableGrouping[0];
        }
      },
      
      // Watcher pour réagir aux changements du switch de remplacement
      'groupAssignmentModal.replaceExisting': {
        handler() {
          this.updateSummary();
        }
      },
      
      // Watcher pour réagir aux changements de valeur
      'groupAssignmentModal.value': {
        handler() {
          this.updateSummary();
        }
      },
      
      // Watcher pour réagir aux changements de sélection d'ingrédients
      selectedIngredients: {
        handler() {
          this.updateSummary();
        },
        deep: true
      }
    },

    mounted() {
      this.initializeApp();
    },

    methods: {
      // === MÉTHODES DE GESTION DE L'AUTHENTIFICATION ===

      async checkAuthentication() {
        if (!this.authManager) {
          console.error('[Collaborative App] AuthManager non initialisé');
          return;
        }

        try {
          const isAuthenticated = await this.authManager.check();
          this.isAuthenticated = isAuthenticated; // Mettre à jour l'état synchrone pour les templates

          if (!isAuthenticated && !this.authModalShown) {
            this.showAuthModal = true;
            this.authModalShown = true;
            this.realtimeStatus.isConnected = false;
          }
        } catch (error) {
          console.error('[Collaborative App] Erreur lors de la vérification de l\'authentification:', error);
          this.isAuthenticated = false; // Assurer l'état en cas d'erreur
        }
      },

      closeAuthModal() {
        this.showAuthModal = false;
      },

      showAuthToastForFeature(featureName) {
        if (!this.isAuthenticated) {
          this.showAuthToast = true;

          // Masquer automatiquement après 5 secondes
          setTimeout(() => {
            this.closeAuthToast();
          }, 5000);
        }
      },

      closeAuthToast() {
        this.showAuthToast = false;
      },

      requireAuthForAction(actionCallback) {
        if (!this.authManager) {
          console.error('[Collaborative App] AuthManager non initialisé');
          this.showAuthToastForFeature('cette action');
          return;
        }

        if (this.authManager.requireAuth(actionCallback)) {
          // Action exécutée avec succès
          return;
        }

        // Non authentifié - afficher le toast
        this.showAuthToastForFeature('cette action');
      },

      // === MÉTHODES D'INITIALISATION ===

      async initializeApp() {
        try {
          // console.log("[Collaborative App] Initialisation...");

          // 1. Initialiser le service d'authentification
          this.authManager = new AuthManager(isAuthenticatedAppwrite);

          // 2. Vérifier l'authentification
          await this.checkAuthentication();

          // 3. Charger la préférence de vue
          this.loadPreferredView();

          // 4. Récupérer l'ID de la liste depuis l'URL
          const urlParams = new URLSearchParams(window.location.search);
          this.listId = urlParams.get("listId");
          if (!this.listId) {
            throw new Error("ID de liste manquant dans l'URL (?listId=...).");
          }

          // 5. Obtenir l'instance de la base de données depuis notre client central
          this.database = await getDatabases();

          // 6. Initialiser le service de synchronisation
          this.syncService = new SyncService(this.database, this.listId, APPWRITE_CONFIG);

          // 7. Initialiser le service de données Appwrite
          this.appwriteDataService = new AppwriteDataService(APPWRITE_CONFIG);

          // 8. Initialiser le ColorManager
          this.colorManager = new ColorManager(this.listId);

          // 9. Charger les données avec la stratégie de cache
          await this.loadInitialDataWithCache();

          // 10. Configurer la synchronisation temps réel
          this.setupRealtime();

          // 11. Démarrer le monitoring de la connexion temps réel
          // this.startConnectionMonitoring();

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

      async loadInitialDataWithCache() {
        console.log("[Collaborative App] Chargement des données avec stratégie de cache...");

        try {
          // Étape 1: Charger depuis le cache local pour un affichage instantané
          const cacheResult = await this.syncService.loadFromCache();

          if (cacheResult.success && cacheResult.fromCache) {
            // Afficher les données du cache immédiatement
            const cachedData = cacheResult.data;
            this.event = cachedData.event;
            this.ingredients = cachedData.ingredients;
            this.purchases = cachedData.purchases;

            // Transformer les données pour l'UI
            this.transformDataForUI();

            // console.log("[Collaborative App] Données affichées depuis le cache");

            // Lancer la synchronisation en arrière-plan sans bloquer l'UI
            this.syncChangesInBackground().catch(error => {
              console.error("[Collaborative App] Erreur de synchronisation en arrière-plan:", error);
            });
          } else {
            // Première visite - charger depuis Appwrite
            console.log("[Collaborative App] Première visite, chargement depuis Appwrite...");
            await this.loadInitialData();
          }

        } catch (error) {
          console.error("[Collaborative App] Erreur lors du chargement avec cache:", error);
          // Fallback vers le chargement traditionnel
          await this.loadInitialData();
        }
      },

      async syncChangesInBackground() {
        console.log("[Collaborative App] Synchronisation des changements en arrière-plan...");

        const syncResult = await this.syncService.syncChanges();

        if (syncResult.success) {
          const { data, changes, isFirstVisit } = syncResult;

          console.log("[Collaborative App] Synchronisation terminée:", {
            isFirstVisit,
            changes: {
              event: changes.event.length,
              ingredients: changes.ingredients.length,
              purchases: changes.purchases.length
            }
          });

          // Vérifier s'il y a eu des changements réels
          const hasRealChanges = changes.event.length > 0 ||
                                changes.ingredients.length > 0 ||
                                changes.purchases.length > 0;

          if (hasRealChanges) {
            // Mettre à jour les données avec les informations synchronisées
            this.event = data.event;
            this.ingredients = data.ingredients;
            this.purchases = data.purchases;

            // Retransformer les données pour l'UI seulement si nécessaire
            this.transformDataForUI();

            console.log("[Collaborative App] Données mises à jour après synchronisation");
          } else {
            console.log("[Collaborative App] Aucun changement à synchroniser, pas de retraitement");
          }
      }
      },

      async loadInitialData() {
        console.log("[Collaborative App] Chargement des données initiales depuis Appwrite...");
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

          // Sauvegarder dans le cache local pour les prochaines visites
          if (this.syncService) {
            const dataToSave = {
              event: this.event,
              ingredients: this.ingredients,
              purchases: this.purchases
            };
            const { localStorageService } = await import('./services/localStorageService.js');
            localStorageService.saveAllData(this.listId, dataToSave);
          }

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
          this.collectAvailableUsers();

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

      // === MÉTHODES DE MISE À JOUR UNIFIÉES ===

      /**
       * Met à jour un ingrédient de manière complète (données brutes + UI)
       * @param {Object} ingredientPayload - Données de l'ingrédient depuis Appwrite
       * @param {string} eventType - Type d'événement (create/update/delete)
       */
      updateIngredientComplete(ingredientPayload, eventType) {
        console.log('[Collaborative App] Mise à jour complète ingrédient:', ingredientPayload.$id, eventType);

        // 1. Mettre à jour les données brutes
        this._updateLocalCollection(this.ingredients, ingredientPayload, eventType);
        
        // 2. Mettre à jour les données transformées (uniquement pour create/update)
        if (eventType !== 'delete') {
          this.updateSingleIngredientInUI(ingredientPayload.$id);
        } else {
          // Pour les suppressions, retirer des données transformées
          const index = this.transformedIngredients.findIndex(ing => ing.$id === ingredientPayload.$id);
          if (index !== -1) {
            this.transformedIngredients.splice(index, 1);
          }
        }
      },

      /**
       * Met à jour un achat de manière complète (données brutes + UI)
       * @param {Object} purchasePayload - Données de l'achat depuis Appwrite
       * @param {string} eventType - Type d'événement (create/update/delete)
       */
      updatePurchaseComplete(purchasePayload, eventType) {
        console.log('[Collaborative App] Mise à jour complète achat:', purchasePayload.$id, eventType);

        // 1. Mettre à jour les données brutes
        this._updateLocalCollection(this.purchases, purchasePayload, eventType);
        
        // 2. Mettre à jour les ingrédients affectés (uniquement pour create/update)
        if (eventType !== 'delete') {
          this.updateIngredientsFromPurchasesInUI([purchasePayload]);
        } else {
          // Pour les suppressions, recalculer les ingrédients qui dépendaient de cet achat
          const affectedIngredients = this.ingredients.filter(ing => 
            ing.listIngredient === purchasePayload.listIngredient
          );
          if (affectedIngredients.length > 0) {
            this.updateIngredientsFromPurchasesInUI([purchasePayload]);
          }
        }
      },

      /**
       * Met à jour un seul ingrédient de manière optimisée dans l'UI
       * @param {string} ingredientId - L'ID de l'ingrédient à mettre à jour
       */
      updateSingleIngredientInUI(ingredientId) {
        const ingredient = this.ingredients.find(ing => ing.$id === ingredientId);
        if (!ingredient) {
          console.warn('[Collaborative App] Ingrédient non trouvé pour mise à jour:', ingredientId);
          return;
        }

        try {
          // Calculer seulement cet ingrédient
          const calculatedIngredient = IngredientCalculator.updateSingleIngredient(
            ingredient,
            this.ingredients,
            this.purchases || []
          );

          if (!calculatedIngredient) return;

          // Transformer pour l'UI
          const transformedIngredient = DataTransformer.transformForUI(
            [calculatedIngredient],
            {
              unitsManager: this.unitsManager,
              includeRecipeDetails: true,
              includeCalculations: true,
              purchases: this.purchases || [],
            }
          )[0];

          // Mettre à jour dans le tableau transformedIngredients
          const index = this.transformedIngredients.findIndex(ing => ing.$id === ingredientId);
          if (index !== -1) {
            this.transformedIngredients.splice(index, 1, transformedIngredient);
          } else {
            this.transformedIngredients.push(transformedIngredient);
          }

          console.log('[Collaborative App] Ingrédient mis à jour de manière optimisée:', ingredientId);
        } catch (error) {
          console.error('[Collaborative App] Erreur lors de la mise à jour optimisée:', error);
          // Fallback : retransformer toutes les données
          this.transformDataForUI();
        }
      },

      /**
       * Met à jour plusieurs ingrédients de manière optimisée dans l'UI
       * @param {Array} ingredientIds - Les IDs des ingrédients à mettre à jour
       */
      updateMultipleIngredientsInUI(ingredientIds) {
        if (!ingredientIds || ingredientIds.length === 0) return;

        try {
          // Calculer seulement ces ingrédients
          const calculatedIngredients = IngredientCalculator.updateMultipleIngredients(
            ingredientIds,
            this.ingredients,
            this.purchases || []
          );

          // Transformer pour l'UI
          const transformedIngredients = DataTransformer.transformForUI(
            calculatedIngredients,
            {
              unitsManager: this.unitsManager,
              includeRecipeDetails: true,
              includeCalculations: true,
              purchases: this.purchases || [],
            }
          );

          // Mettre à jour dans le tableau transformedIngredients
          transformedIngredients.forEach(transformedIng => {
            const index = this.transformedIngredients.findIndex(ing => ing.$id === transformedIng.$id);
            if (index !== -1) {
              this.transformedIngredients.splice(index, 1, transformedIng);
            } else {
              this.transformedIngredients.push(transformedIng);
            }
          });

          console.log('[Collaborative App] Ingrédients mis à jour de manière optimisée:', ingredientIds.length);
        } catch (error) {
          console.error('[Collaborative App] Erreur lors de la mise à jour optimisée multiple:', error);
          // Fallback : retransformer toutes les données
          this.transformDataForUI();
        }
      },

      /**
       * Met à jour les ingrédients affectés par des changements d'achats
       * @param {Array} purchases - Les achats modifiés
       */
      updateIngredientsFromPurchasesInUI(purchases) {
        if (!purchases || purchases.length === 0) return;

        try {
          // Trouver les ingrédients affectés et les mettre à jour
          const calculatedIngredients = IngredientCalculator.updateIngredientsFromPurchases(
            purchases,
            this.ingredients,
            this.purchases || []
          );

          // Transformer pour l'UI
          const transformedIngredients = DataTransformer.transformForUI(
            calculatedIngredients,
            {
              unitsManager: this.unitsManager,
              includeRecipeDetails: true,
              includeCalculations: true,
              purchases: this.purchases || [],
            }
          );

          // Mettre à jour dans le tableau transformedIngredients
          transformedIngredients.forEach(transformedIng => {
            const index = this.transformedIngredients.findIndex(ing => ing.$id === transformedIng.$id);
            if (index !== -1) {
              this.transformedIngredients.splice(index, 1, transformedIng);
            } else {
              this.transformedIngredients.push(transformedIng);
            }
          });

          console.log('[Collaborative App] Ingrédients mis à jour depuis achats:', transformedIngredients.length);
        } catch (error) {
          console.error('[Collaborative App] Erreur lors de la mise à jour depuis achats:', error);
          // Fallback : retransformer toutes les données
          this.transformDataForUI();
        }
      },

      // === MÉTHODES DE SYNCHRONISATION TEMPS RÉEL ===

      setupRealtime() {
        console.log("[Collaborative App] Configuration du temps réel...");

        this.realtimeStatus.isConnecting = true;

        try {
          this.unsubscribeRealtime = subscribeToCollections(
            ["ingredients", "purchases"],
            this.listId, // Ajout du listId
            (response) => {
              this.handleRealtimeUpdate(response);
            },
            {
              onConnect: () => this.onConnectionEstablished(),
              onDisconnect: (event) => this.onConnectionLost(event),
              onError: (error) => this.onConnectionError(error)
            }
          );

        } catch (error) {
          console.error("[Collaborative App] Erreur lors de la configuration realtime:", error);
          this.onConnectionError(error);
        }
      },

      onConnectionEstablished() {
        this.realtimeStatus.isConnected = true;
        this.realtimeStatus.isConnecting = false;
        this.realtimeStatus.hasBeenConnected = true;
        this.realtimeStatus.retryCount = 0;
        this.realtimeStatus.showReconnecting = false;
        this.realtimeStatus.showDisconnectedToast = false;
      },

      onConnectionLost() {
        if (this.realtimeStatus.isConnected) {
          this.realtimeStatus.isConnected = false;
          this.realtimeStatus.showDisconnectedToast = true;
          this.scheduleReconnection();
        }
      },

      onConnectionError(error) {
        this.realtimeStatus.isConnected = false;
        this.realtimeStatus.isConnecting = false;

        if (this.realtimeStatus.retryCount < this.realtimeStatus.maxRetries) {
          this.scheduleReconnection();
        }
      },

      scheduleReconnection() {
        if (this.realtimeStatus.reconnectionTimeout) {
          clearTimeout(this.realtimeStatus.reconnectionTimeout);
        }

        if (this.realtimeStatus.retryCount >= this.realtimeStatus.maxRetries) {
          return;
        }

        const delay = this.realtimeStatus.retryDelay * (this.realtimeStatus.retryCount + 1);
        this.realtimeStatus.showReconnecting = true;
        this.realtimeStatus.retryCount++;

        this.realtimeStatus.reconnectionTimeout = setTimeout(() => {
          this.attemptReconnection();
        }, delay);
      },

      async attemptReconnection() {
        if (this.unsubscribeRealtime) {
          this.unsubscribeRealtime();
        }
        this.setupRealtime();
      },

      handleRealtimeUpdate(response) {
        // console.log("[Collaborative App] Mise à jour temps réel reçue:", response);

        // Appliquer le changement au cache local via le service de synchronisation
        if (this.syncService) {
          const syncResult = this.syncService.applyRealtimeChange(response);
          if (!syncResult) {
            console.warn("[Collaborative App] Le changement n'a pas pu être appliqué au cache");
          }
        }

        const { payload } = response;
        const collectionName = response.events[0].split(".")[3]; // ex: "ingredients" ou "purchase"
        const eventType = response.events[0].split(".")[6]; // "create", "update", "delete". L'index "5" ne correspond pas à l'événement: preserver index 6.

        if (collectionName === APPWRITE_CONFIG.collections.ingredients) {
          // Mise à jour unifiée : données brutes + UI
          this.updateIngredientComplete(payload, eventType);
        } else if (collectionName === APPWRITE_CONFIG.collections.purchases) {
          // Mise à jour unifiée : données brutes + UI
          this.updatePurchaseComplete(payload, eventType);
        }
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

      // --- MÉTHODES UTILITAIRES POUR LE TEMPLATE DU TABLEAU ---
      flexRender(component, props) {
        if (!component) return null;
        if (typeof component === 'function') {
          return component(props);
        }
        return component;
      },

      // Méthode getGroupStats mise à jour pour TanStack Table
      getGroupStats(rows) {
        const stats = { totalNeeded: 0, totalPurchased: 0, totalMissing: 0 };
        rows.forEach(row => {
          const ing = row.original;
          // Assurez-vous que ces valeurs existent et sont des nombres
          stats.totalNeeded += Number(ing.totalNeeded) || 0;
          stats.totalPurchased += Number(ing.totalPurchased) || 0;
          stats.totalMissing += Number(ing.totalMissing) || 0;
        });
        return stats;
      },



      // === MÉTHODES POUR TANSTACK TABLE ===

      handleTableIngredientSelect(ingredientId) {
        this.handleIngredientSelect(ingredientId);
      },

      handleTableGroupSelect(groupName, subRows) {
        const ingredientIds = subRows.map(row => row.original.$id);
        const isGroupSelected = ingredientIds.every(id => this.selectedIngredients.includes(id));

        if (isGroupSelected) {
          // Désélectionner tout le groupe
          ingredientIds.forEach(id => {
            const index = this.selectedIngredients.indexOf(id);
            if (index > -1) {
              this.selectedIngredients.splice(index, 1);
            }
          });
        } else {
          // Sélectionner tout le groupe
          ingredientIds.forEach(id => {
            if (!this.selectedIngredients.includes(id)) {
              this.selectedIngredients.push(id);
            }
          });
        }

        this.selectAllChecked = this.selectedIngredients.length === this.filteredIngredients.length;
      },


      // === MÉTHODES DE GESTION DES VUES ===

      getCurrentViewInfo() {
        switch (this.currentView) {
          case 'table':
            return 'Tableau classique - tous les ingrédients dans un tableau traditionnel';
          case 'grouped':
            return 'Vue groupée par magasin avec sélection groupée et statistiques';
          case 'cards':
            return 'Vue cartes - idéal pour mobile et tablette';
          case 'compact':
            return 'Vue compacte - affichage minimal pour petits écrans';
          default:
            return 'Vue inconnue';
        }
      },

      // Méthode pour détecter la meilleure vue pour l'appareil actuel
      getOptimalViewForDevice() {
        if (window.innerWidth < 576) {
          return 'compact';
        } else if (window.innerWidth < 768) {
          return 'cards';
        } else {
          return 'grouped';
        }
      },

      // Méthode pour changer de vue avec détection automatique
      setView(viewName) {
        this.currentView = viewName;

        // Sauvegarder la préférence dans localStorage
        try {
          localStorage.setItem('preferredView', viewName);
        } catch (error) {
          console.warn('Impossible de sauvegarder la préférence de vue:', error);
        }
      },

      // Méthode pour charger la préférence de vue
      loadPreferredView() {
        try {
          const savedView = localStorage.getItem('preferredView');
          if (savedView && ['table', 'grouped', 'cards', 'compact'].includes(savedView)) {
            this.currentView = savedView;
          } else {
            // Utiliser la vue optimale pour l'appareil
            this.currentView = this.getOptimalViewForDevice();
          }
        } catch (error) {
          console.warn('Impossible de charger la préférence de vue:', error);
          this.currentView = 'table';
        }
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

      // === MÉTHODES DE SÉLECTION GROUPÉE ===

      isGroupSelected(storeName) {
        const group = this.groupedIngredients[storeName] || [];
        return group.length > 0 && group.every(ing =>
          this.selectedIngredients.includes(ing.$id)
        );
      },

      handleGroupSelect(storeName) {
        const group = this.groupedIngredients[storeName] || [];
        const isGroupSelected = this.isGroupSelected(storeName);

        if (isGroupSelected) {
          // Désélectionner tout le groupe
          group.forEach(ing => {
            const index = this.selectedIngredients.indexOf(ing.$id);
            if (index > -1) {
              this.selectedIngredients.splice(index, 1);
            }
          });
        } else {
          // Sélectionner tout le groupe
          group.forEach(ing => {
            if (!this.selectedIngredients.includes(ing.$id)) {
              this.selectedIngredients.push(ing.$id);
            }
          });
        }

        // Mettre à jour l'état "sélectionner tout"
        this.selectAllChecked =
          this.selectedIngredients.length === this.filteredIngredients.length;
      },

      // Méthodes pour les statistiques de groupe
      getGroupStats(storeName) {
        const group = this.groupedIngredients[storeName] || [];

        let totalNeeded = 0;
        let totalPurchased = 0;
        let totalMissing = 0;

        group.forEach(ing => {
          // Calcul simplifié - à adapter selon votre logique de calcul
          totalNeeded += ing.totalNeeded || 0;
          totalPurchased += ing.totalPurchased || 0;
          totalMissing += ing.totalMissing || 0;
        });

        return {
          totalNeeded: this.formatValueWithUnit(totalNeeded, 'unit'),
          totalPurchased: this.formatValueWithUnit(totalPurchased, 'unit'),
          totalMissing: this.formatValueWithUnit(totalMissing, 'unit')
        };
      },

      // Méthode pour se proposer pour tout un groupe (magasin/type)
      async handleGroup(groupName, ingredients, type = 'volunteer') {
        // Ouvrir le modal d'attribution groupée
        this.openGroupAssignmentModal(type, groupName, ingredients);
      },

      // === MÉTHODES POUR LE MODAL D'ATTRIBUTION GROUPÉE ===

      /**
       * Ouvre le modal d'attribution groupée
       * @param {string} type - Type d'attribution ('volunteer', 'store', etc.)
       * @param {string} groupName - Nom du groupe (magasin, type, etc.)
       * @param {Array} ingredients - Liste des ingrédients concernés
       */
      openGroupAssignmentModal(type, groupName, ingredients) {
        this.groupAssignmentModal = {
          isOpen: true,
          type: type,
          value: '', // Réinitialiser la valeur
          groupName: groupName,
          isProcessing: false,
          replaceExisting: false,
          assignmentsToRemove: new Map(),
          summary: {
            ingredientsCount: 0,
            additionsCount: 0,
            removalsCount: 0,
            replacementsCount: 0
          }
        };

        // Pré-remplir avec l'utilisateur actuel si c'est une attribution de bénévole
        if (type === 'volunteer') {
          const currentUser = localStorage.getItem('appwrite-user-name');
          if (currentUser) {
            this.groupAssignmentModal.value = currentUser;
          }
        }

        // Préparer les ingrédients avec état de sélection
        this.selectedIngredients = ingredients.map(ing => ({
          ...ing,
          selected: true // Tous cochés par défaut
        }));

        // Initialiser les suggestions
        this.filterSuggestions();
        this.updateSummary();
      },

      /**
       * Ferme le modal d'attribution groupée
       */
      closeGroupAssignmentModal() {
        this.groupAssignmentModal.isOpen = false;
        setTimeout(() => {
          this.resetGroupAssignmentData();
        }, 300); // Attendre la fin de l'animation
      },

      /**
       * Réinitialise les données du modal
       */
      resetGroupAssignmentData() {
        this.groupAssignmentModal = {
          isOpen: false,
          type: '',
          value: '',
          groupName: '',
          isProcessing: false,
          replaceExisting: false,
          assignmentsToRemove: new Map(),
          summary: {
            ingredientsCount: 0,
            additionsCount: 0,
            removalsCount: 0,
            replacementsCount: 0
          }
        };
        this.selectedIngredients = [];
        this.filteredSuggestions = [];
        this.showSuggestions = false;
      },

      /**
       * Filtre les suggestions basées sur la saisie
       */
      filterSuggestions() {
        const query = this.groupAssignmentModal.value.toLowerCase().trim();
        const suggestions = this.assignmentSuggestions;

        if (!query) {
          this.filteredSuggestions = suggestions.slice(0, 10); // Limiter à 10 suggestions
        } else {
          this.filteredSuggestions = suggestions
            .filter(suggestion => suggestion.toLowerCase().includes(query))
            .slice(0, 10);
        }
      },

      /**
       * Masque les suggestions (avec délai pour permettre le clic)
       */
      hideSuggestions() {
        setTimeout(() => {
          this.showSuggestions = false;
        }, 200);
      },

      /**
       * Sélectionne une suggestion
       */
      selectSuggestion(suggestion) {
        this.groupAssignmentModal.value = suggestion;
        this.showSuggestions = false;
        this.filterSuggestions();
      },

      /**
       * Efface la valeur d'attribution
       */
      clearAssignmentValue() {
        this.groupAssignmentModal.value = '';
        this.filterSuggestions();
        this.updateSummary();
      },

      /**
       * Vérifie si une attribution est marquée pour suppression
       * @param {string} ingredientId - ID de l'ingrédient
       * @param {string} value - Valeur de l'attribution
       * @returns {boolean}
       */
      isAssignmentToRemove(ingredientId, value) {
        return this.groupAssignmentModal.assignmentsToRemove.get(ingredientId)?.has(value) || false;
      },

      /**
       * Bascule l'état de suppression d'une attribution
       * @param {string} ingredientId - ID de l'ingrédient
       * @param {string} value - Valeur de l'attribution
       */
      toggleAssignmentRemoval(ingredientId, value) {
        if (!this.groupAssignmentModal.assignmentsToRemove.has(ingredientId)) {
          this.groupAssignmentModal.assignmentsToRemove.set(ingredientId, new Set());
        }
        
        const removals = this.groupAssignmentModal.assignmentsToRemove.get(ingredientId);
        if (removals.has(value)) {
          removals.delete(value);
          if (removals.size === 0) {
            this.groupAssignmentModal.assignmentsToRemove.delete(ingredientId);
          }
        } else {
          removals.add(value);
        }
        
        this.updateSummary();
      },

      /**
       * Gère le changement du mode de remplacement
       */
      onReplaceModeChange() {
        if (this.groupAssignmentModal.replaceExisting) {
          // Mode "remplacer" : marquer toutes les attributions existantes pour suppression
          this.markAllAssignmentsForRemoval();
        } else {
          // Mode "ajouter" : conserver toutes les attributions existantes
          this.resetAllAssignments();
        }
        this.updateSummary();
      },

      /**
       * Détermine le type d'action pour le bouton de validation
       * @returns {string} 'add', 'replace', 'selective'
       */
      getActionType() {
        if (!this.groupAssignmentModal.value.trim()) {
          return 'selective'; // Only removals
        }
        
        if (this.groupAssignmentModal.replaceExisting) {
          return 'replace';
        }
        
        // Check if there are any manual removals
        const hasManualRemovals = Array.from(this.groupAssignmentModal.assignmentsToRemove.values())
          .some(removals => removals.size > 0);
          
        if (hasManualRemovals) {
          return 'selective';
        }
        
        return 'add';
      },

      /**
       * Remet à zéro toutes les suppressions d'attributions
       */
      resetAllAssignments() {
        this.groupAssignmentModal.assignmentsToRemove.clear();
        this.updateSummary();
      },

      /**
       * Marque toutes les attributions existantes pour suppression (mode "Remplacer tout")
       */
      markAllAssignmentsForRemoval() {
        this.groupAssignmentModal.assignmentsToRemove.clear();
        
        this.selectedIngredients.forEach(ingredient => {
          if (!ingredient.selected) return;
          
          const existingAssignments = this.groupAssignmentModal.type === 'volunteer' 
            ? (ingredient.who || [])
            : (ingredient.store || []);
          
          if (existingAssignments.length > 0) {
            this.groupAssignmentModal.assignmentsToRemove.set(ingredient.$id, new Set(existingAssignments));
          }
        });
        
        this.showToast('Toutes les attributions existantes seront remplacées', 'warning', 3000, 'Mode remplacement');
      },

      /**
       * Met à jour le résumé des modifications
       */
      updateSummary() {
        let ingredientsCount = 0;
        let removalsCount = 0;
        let additionsCount = 0;

        const selectedIngredients = this.selectedIngredients.filter(ing => ing.selected);

        for (const ingredient of selectedIngredients) {
          const hasRemovals = this.groupAssignmentModal.assignmentsToRemove.has(ingredient.$id);
          const hasNewValue = this.groupAssignmentModal.value.trim();

          if (hasRemovals || hasNewValue) {
            ingredientsCount++;
          }

          if (hasRemovals) {
            removalsCount += this.groupAssignmentModal.assignmentsToRemove.get(ingredient.$id).size;
          }

          if (hasNewValue) {
            const existingAssignments = this.groupAssignmentModal.type === 'volunteer' 
              ? (ingredient.who || [])
              : (ingredient.store || []);
            
            if (!existingAssignments.includes(hasNewValue.trim())) {
              additionsCount++;
            }
          }
        }

        this.groupAssignmentModal.summary = {
          ingredientsCount,
          removalsCount,
          additionsCount,
          replacementsCount: 0 // Plus utilisé dans la nouvelle logique
        };
      },

      /**
       * Vérifie s'il y a des modifications à appliquer
       * @returns {boolean}
       */
      hasModifications() {
        const hasValue = this.groupAssignmentModal.value.trim();
        const hasRemovals = this.groupAssignmentModal.assignmentsToRemove.size > 0;
        
        return hasValue || hasRemovals;
      },

      /**
       * Sélectionne tous les ingrédients
       */
      selectAllIngredients() {
        this.selectedIngredients.forEach(ing => {
          ing.selected = true;
        });
      },

      /**
       * Désélectionne tous les ingrédients
       */
      deselectAllIngredients() {
        this.selectedIngredients.forEach(ing => {
          ing.selected = false;
        });
      },

      /**
       * Gère la soumission du formulaire d'attribution groupée
       */
      async handleGroupAssignmentSubmit() {
        // Validation de base
        if (!this.hasModifications()) {
          this.showToast('Aucune modification à appliquer', 'warning', 5000, 'Information');
          return;
        }

        const selectedIngredients = this.selectedIngredients.filter(ing => ing.selected);
        if (selectedIngredients.length === 0) {
          this.showToast('Veuillez sélectionner au moins un ingrédient', 'danger', 8000, 'Erreur');
          return;
        }

        // Confirmation pour les actions importantes (suppressions multiples)
        if (this.groupAssignmentModal.summary.removalsCount > 3) {
          const confirmMessage = `Vous êtes sur le point de supprimer ${this.groupAssignmentModal.summary.removalsCount} attribution(s). Voulez-vous continuer ?`;
          if (!confirm(confirmMessage)) {
            return;
          }
        }

        this.groupAssignmentModal.isProcessing = true;

        try {
          await this.processGroupAssignment(selectedIngredients);
          
          // Message de succès personnalisé selon l'action
          const actionType = this.getActionType();
          let successMessage = `Opération réussie pour ${selectedIngredients.length} ingrédient(s)`;
          
          if (actionType === 'add') {
            successMessage = `Attribution ajoutée à ${selectedIngredients.length} ingrédient(s)`;
          } else if (actionType === 'replace') {
            successMessage = `Attributions remplacées pour ${selectedIngredients.length} ingrédient(s)`;
          } else {
            if (this.groupAssignmentModal.summary.removalsCount > 0) {
              successMessage += ` (${this.groupAssignmentModal.summary.removalsCount} suppression(s))`;
            }
            if (this.groupAssignmentModal.summary.additionsCount > 0) {
              successMessage += ` (${this.groupAssignmentModal.summary.additionsCount} ajout(s))`;
            }
          }
          
          this.showToast(successMessage, 'success', 5000, 'Succès');
          this.closeGroupAssignmentModal();
        } catch (error) {
          console.error('[Collaborative App] Erreur lors de l\'attribution groupée:', error);
          this.showToast(
            `Erreur lors de l'attribution: ${error.message}`,
            'danger',
            8000,
            'Erreur'
          );
        } finally {
          this.groupAssignmentModal.isProcessing = false;
        }
      },

      /**
       * Traite l'attribution groupée avec Promise.all
       */
      async processGroupAssignment(ingredients) {
        const promises = ingredients.map(async (ingredient) => {
          try {
            if (this.groupAssignmentModal.type === 'volunteer') {
              // Récupérer les bénévoles actuels
              const currentVolunteers = Array.isArray(ingredient.who) ? ingredient.who : [];
              const newVolunteer = this.groupAssignmentModal.value.trim();
              
              // Calculer les bénévoles à conserver (ceux qui ne sont pas marqués pour suppression)
              const volunteersToRemove = this.groupAssignmentModal.assignmentsToRemove.get(ingredient.$id) || new Set();
              const keptVolunteers = currentVolunteers.filter(v => !volunteersToRemove.has(v));
              
              // Construire la liste finale des bénévoles
              let finalVolunteers = [...keptVolunteers];
              
              // Ajouter le nouveau bénévole si spécifié et pas déjà présent
              if (newVolunteer && !finalVolunteers.includes(newVolunteer)) {
                finalVolunteers.push(newVolunteer);
              }
              
              // Sauvegarder avec les suppressions et ajouts
              await this.appwriteDataService.saveVolunteers(
                finalVolunteers,
                volunteersToRemove,
                ingredient.$id,
                this.database
              );
              
            } else if (this.groupAssignmentModal.type === 'store') {
              // Récupérer les magasins actuels
              const currentStores = Array.isArray(ingredient.store) ? ingredient.store : [];
              const newStore = this.groupAssignmentModal.value.trim();
              
              // Calculer les magasins à conserver
              const storesToRemove = this.groupAssignmentModal.assignmentsToRemove.get(ingredient.$id) || new Set();
              const keptStores = currentStores.filter(s => !storesToRemove.has(s));
              
              // Construire la liste finale des magasins
              let finalStores = [...keptStores];
              
              // Ajouter le nouveau magasin si spécifié et pas déjà présent
              if (newStore && !finalStores.includes(newStore)) {
                finalStores.push(newStore);
              }
              
              // Sauvegarder avec les suppressions et ajouts
              await this.appwriteDataService.saveStores(
                finalStores,
                storesToRemove,
                ingredient.$id,
                this.database
              );
            }

            console.log(`[Collaborative App] Attribution réussie pour ${ingredient.ingredientName}`);
            return { success: true, ingredient: ingredient.ingredientName };
          } catch (error) {
            console.error(`[Collaborative App] Erreur pour ${ingredient.ingredientName}:`, error);
            return {
              success: false,
              ingredient: ingredient.ingredientName,
              error: error.message
            };
          }
        });

        const results = await Promise.all(promises);

        // Analyser les résultats pour les erreurs individuelles
        const failures = results.filter(result => !result.success);
        if (failures.length > 0) {
          const errorMessages = failures.map(f => `${f.ingredient}: ${f.error}`).join('\n');
          throw new Error(
            `${failures.length} attribution(s) ont échoué:\n${errorMessages}`
          );
        }

        return results;
      },

      // Méthode utilitaire pour formater les valeurs avec unités
      formatValueWithUnit(value, unit) {
        if (typeof value !== 'number') return value;

        // Logique de formatage simplifiée - à adapter selon votre besoin
        if (value >= 1000 && unit === 'gr.') {
          return `${(value / 1000).toFixed(1)} kg`;
        }

        return `${Math.round(value)} ${unit}`;
      },

      // === MÉTHODES D'ÉDITION ===


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


      // === MÉTHODES POUR LE MODAL UNIFIÉ ===

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

      /**
       * Collecte la liste des utilisateurs disponibles pour les suggestions
       * depuis le localStorage, les ingrédients et les achats existants
       */
      collectAvailableUsers() {
        const users = new Set();

        // Ajouter l'utilisateur actuel depuis localStorage
        const currentUser = localStorage.getItem('appwrite-user-name');
        if (currentUser && currentUser.trim()) {
          users.add(currentUser.trim());
        }

        // Collecter les utilisateurs depuis tous les ingrédients (champ who)
        this.transformedIngredients.forEach(ingredient => {
          if (ingredient.who && Array.isArray(ingredient.who)) {
            ingredient.who.forEach(user => {
              if (user && user.trim()) {
                users.add(user.trim());
              }
            });
          }
        });

        // Ajouter les utilisateurs depuis les achats existants
        if (this.purchases) {
          this.purchases.forEach(purchase => {
            if (purchase.who && purchase.who.trim()) {
              users.add(purchase.who.trim());
            }
          });
        }

        // Convertir en tableau et trier (utilisateur actuel en premier si disponible)
        const usersArray = Array.from(users).sort();
        if (currentUser && currentUser.trim()) {
          const currentUserIndex = usersArray.indexOf(currentUser.trim());
          if (currentUserIndex > 0) {
            usersArray.splice(currentUserIndex, 1);
            usersArray.unshift(currentUser.trim());
          }
        }

        this.availableUsersSuggestions = usersArray;
        console.log(`[Collaborative App] Collecté ${this.availableUsersSuggestions.length} utilisateurs pour les suggestions`);
      },

      // === MÉTHODES DE STATUT ===

      toggleIngredientStatus(ingredient) {
        console.log(
          "[Collaborative App] Toggle statut pour:",
          ingredient.ingredientName,
        );
        // TODO: Implémenter le changement de statut
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

      // Méthodes pour la gestion des couleurs pastel
      getColorForVolunteer(volunteerName) {
        return this.colorManager.getColorForVolunteer(volunteerName);
      },

      getColorForStore(storeName) {
        return this.colorManager.getColorForStore(storeName);
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



      // === MÉTHODES UTILITAIRES AUTH (wrapper) ===

      getAuthState() {
        return this.authManager ? this.authManager.getState() : null;
      },

      getAuthDebugInfo() {
        return this.authManager ? this.authManager.getDebugInfo() : null;
      },

      // === MÉTHODES DE DEBUG ===

      logCurrentState() {
        const authState = this.getAuthState();

        console.log("[Collaborative App] État actuel:", {
          isLoading: this.isLoading,
          error: this.error,
          ingredients: this.ingredients.length,
          purchases: this.purchases.documents?.length || 0,
          transformed: this.transformedIngredients.length,
          authentication: {
            isAuthenticated: this.isAuthenticated,
            authManagerInitialized: !!this.authManager,
            authState: authState
          },
          filters: {
            search: this.searchQuery,
            type: this.selectedTypeFilter,
            status: this.selectedStatusFilter,
          },
        });
      },

      // === MÉTHODES POUR LES TOASTS GÉNÉRIQUES ===

      showToast(message, type = 'info', duration = 5000, title = null) {
        const toastId = 'toast-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);

        const toast = {
          id: toastId,
          title: title || this.getDefaultTitle(type),
          message: message,
          type: type,
          duration: duration,
          show: true,
          autoHide: duration > 0
        };

        this.toasts.push(toast);

        // Auto-masquage si durée > 0
        if (duration > 0) {
          setTimeout(() => {
            this.hideToast(toastId);
          }, duration);
        }

        return toastId;
      },

      hideToast(toastId) {
        const index = this.toasts.findIndex(t => t.id === toastId);
        if (index > -1) {
          // Marquer comme caché pour animation CSS
          this.toasts[index].show = false;

          // Supprimer complètement après l'animation
          setTimeout(() => {
            const removeIndex = this.toasts.findIndex(t => t.id === toastId);
            if (removeIndex > -1) {
              this.toasts.splice(removeIndex, 1);
            }
          }, 300);
        }
      },

      hideAllToasts() {
        this.toasts.forEach(toast => {
          toast.show = false;
        });

        // Supprimer tous les toasts après l'animation
        setTimeout(() => {
          this.toasts = [];
        }, 300);
      },

      showSuccessToast(message, duration = 5000) {
        return this.showToast(message, 'success', duration, 'Succès');
      },

      showErrorToast(message, duration = 8000) {
        return this.showToast(message, 'danger', duration, 'Erreur');
      },

      showWarningToast(message, duration = 6000) {
        return this.showToast(message, 'warning', duration, 'Attention');
      },

      showInfoToast(message, duration = 5000) {
        return this.showToast(message, 'info', duration, 'Information');
      },

      getDefaultTitle(type) {
        const titles = {
          'success': 'Succès',
          'danger': 'Erreur',
          'warning': 'Attention',
          'info': 'Information'
        };
        return titles[type] || 'Notification';
      },

      getToastIcon(type) {
        const icons = {
          'success': 'fas fa-check-circle',
          'danger': 'fas fa-exclamation-triangle',
          'warning': 'fas fa-exclamation-triangle',
          'info': 'fas fa-info-circle'
        };
        return icons[type] || 'fas fa-info-circle';
      },
    },



    beforeUnmount() {
           // C'est une bonne pratique de se désabonner quand le composant est détruit
           if (this.unsubscribeRealtime) {
               console.log('[Collaborative App] Désabonnement des mises à jour temps réel.');
               this.unsubscribeRealtime();
           }
       },


    // === MÉTHODES DE SYNCHRONISATION ET CACHE ===

    getSyncStats() {
      if (this.syncService) {
        return this.syncService.getSyncStats();
      }
      return {
        hasCachedData: false,
        lastSyncTimestamp: null,
        cachedItemsCount: { ingredients: 0, purchases: 0 },
        storageUsage: { totalEntries: 0, totalSizeBytes: 0, totalSizeKB: 0 }
      };
    },

    async forceFullSync() {
      if (this.syncService) {
        this.isLoading = true;
        try {
          await this.syncService.forceFullSync();
          await this.loadInitialData();
          console.log("[Collaborative App] Synchronisation complète forcée terminée");
        } catch (error) {
          console.error("[Collaborative App] Erreur lors de la synchronisation forcée:", error);
        } finally {
          this.isLoading = false;
        }
      }
    },
  });

  return app;
}

// --- Auto-mount de l'application ---
// Ce code s'exécute automatiquement après le chargement du module.
// Il recherche l'élément #collaborativeApp et y monte l'application.
document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.querySelector('#collaborativeApp');
  if (appRoot) {
    console.log("[Collaborative App] Démarrage et montage de l'application...");
    const app = createCollaborativeApp();
    app.mount('#collaborativeApp');
  } else {
    console.error("[Collaborative App] L'élément racine #collaborativeApp est introuvable. L'application ne peut pas démarrer.");
  }
});
