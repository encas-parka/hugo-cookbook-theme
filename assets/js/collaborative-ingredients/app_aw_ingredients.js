/**
 * app.js
 * Application Vue.js collaborative pour la gestion des listes d'ingrédients
 * Utilise Appwrite pour la persistance et la synchronisation temps réel
 * Architecture refactorisée avec services centralisés et composants stupides
 */


import { useVueTable, getCoreRowModel, getGroupedRowModel, getSortedRowModel, getFilteredRowModel, getExpandedRowModel } from 'js/vuetable.development.js';
import { unitsManager } from "./UnitsManager.js";
import { TableColumnsConfig } from "./TableColumnsConfig.js";
import { IngredientCalculator } from "./services/IngredientCalculator.js";
import { DataTransformer } from "./services/DataTransformer.js";
import { SyncService } from "./services/SyncService.js";
import { ModalMixin } from "./ModalMixin.js";
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




        // Système de couleurs pastel pour volunteers et stores
        colorPalettes: {
          volunteers: [
            { bg: '#d1ecf1', color: '#0c5460' }, // Bleu pastel
            { bg: '#d4edda', color: '#155724' }, // Vert pastel
            { bg: '#fff3cd', color: '#856404' }, // Jaune pastel
            { bg: '#f8d7da', color: '#721c24' }, // Rouge pastel
            { bg: '#e2e3e5', color: '#383d41' }, // Gris pastel
            { bg: '#d1ecf1', color: '#0c5460' }, // Cyan pastel
            { bg: '#ffe6cc', color: '#8b4513' }, // Pêche pastel
            { bg: '#e7d8f8', color: '#4a148c' }, // Lavande pastel
            { bg: '#ffcce6', color: '#d63384' }, // Rose pastel
            { bg: '#d4e4f7', color: '#004085' }, // Bleu clair pastel
            { bg: '#e8f5e8', color: '#2e5d2e' }, // Vert menthe pastel
            { bg: '#fff0f5', color: '#721c24' }, // Rose pâle pastel
            { bg: '#f0e68c', color: '#6b5d1a' }, // Beige pastel
            { bg: '#e6f3ff', color: '#0066cc' }, // Bleu ciel pastel
            { bg: '#ffe4e1', color: '#8b4513' }, // Corail pastel
            { bg: '#f5f5dc', color: '#495057' }, // Lin pastel
            { bg: '#e0f2f1', color: '#00695c' }, // Turquoise pastel
            { bg: '#fce4ec', color: '#880e4f' }, // Rose bonbon pastel
            { bg: '#e8eaf6', color: '#283593' }, // Indigo pastel
            { bg: '#fff8e1', color: '#ff6f00' }  // Amber pastel
          ],
          stores: [
            { bg: '#ffe6cc', color: '#8b4513' }, // Pêche pastel
            { bg: '#d1ecf1', color: '#0c5460' }, // Bleu pastel
            { bg: '#f8d7da', color: '#721c24' }, // Rouge pastel
            { bg: '#d4edda', color: '#155724' }, // Vert pastel
            { bg: '#fff3cd', color: '#856404' }, // Jaune pastel
            { bg: '#e7d8f8', color: '#4a148c' }, // Lavande pastel
            { bg: '#e2e3e5', color: '#383d41' }, // Gris pastel
            { bg: '#ffcce6', color: '#d63384' }, // Rose pastel
            { bg: '#d4e4f7', color: '#004085' }, // Bleu clair pastel
            { bg: '#e8f5e8', color: '#2e5d2e' }, // Vert menthe pastel
            { bg: '#fff0f5', color: '#721c24' }, // Rose pâle pastel
            { bg: '#f0e68c', color: '#6b5d1a' }, // Beige pastel
            { bg: '#e6f3ff', color: '#0066cc' }, // Bleu ciel pastel
            { bg: '#ffe4e1', color: '#8b4513' }, // Corail pastel
            { bg: '#f5f5dc', color: '#495057' }, // Lin pastel
            { bg: '#e0f2f1', color: '#00695c' }, // Turquoise pastel
            { bg: '#fce4ec', color: '#880e4f' }, // Rose bonbon pastel
            { bg: '#e8eaf6', color: '#283593' }, // Indigo pastel
            { bg: '#fff8e1', color: '#ff6f00' }, // Amber pastel
            { bg: '#f4cccc', color: '#5d2a2a' }  // Rouge brique pastel
          ]
        },
        volunteerColors: {}, // { volunteerName: colorIndex }
        storeColors: {},     // { storeName: colorIndex }

        // Données pour la gestion des suppressions dans le modal unifié
        deletedVolunteers: new Set(), // Volontaires marqués pour suppression
        deletedStores: new Set(), // Magasins marqués pour suppression



        // Gestion des vues
        currentView: 'grouped', // 'table', 'grouped', 'cards', 'compact'
        tableGrouping: ['storesDisplay'], // Pour TanStack Table

        // Gestion de l'authentification
        showAuthModal: false,
        showAuthToast: false,
        authCheckInProgress: false,
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




      // --- LOGIQUE DE TANSTACK TABLE INTÉGRÉE ---

      tableColumns() {
        // Configuration des colonnes via le service dédié
        const config = new TableColumnsConfig({
          h: Vue.h,
          handlers: {
            openUnifiedModal: this.openUnifiedModal,
            handleTableGroupVolunteer: this.handleTableGroupVolunteer
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
      groupingBy(newGroupingBy) {
        this.tableGrouping = [newGroupingBy];
      },

      tableGrouping(newTableGrouping) {
        if (newTableGrouping[0] !== this.groupingBy) {
          this.groupingBy = newTableGrouping[0];
        }
      }
    },

    mounted() {
      this.initializeApp();
    },

    methods: {
      // === MÉTHODES DE GESTION DE L'AUTHENTIFICATION ===

      async checkAuthentication() {
        this.authCheckInProgress = true;
        try {
          const isAuthenticated = await isAuthenticatedAppwrite();
          // console.log("[Collaborative App] Authentification appwrite:", isAuthenticated);
          this.isAuthenticated = isAuthenticated; // Mettre à jour l'état synchrone

          if (!isAuthenticated && !this.authModalShown) {
            this.showAuthModal = true;
            this.authModalShown = true;
            this.realtimeStatus.isConnected = false;
          }
        } catch (error) {
          console.error('[Collaborative App] Erreur lors de la vérification de l\'authentification:', error);
          this.isAuthenticated = false; // Assurer l'état en cas d'erreur
        } finally {
          this.authCheckInProgress = false;
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
        if (this.isAuthenticated) {
          actionCallback();
        } else {
          this.showAuthToastForFeature('cette action');
        }
      },

      // === MÉTHODES D'INITIALISATION ===

      async initializeApp() {
        try {
          // console.log("[Collaborative App] Initialisation...");

          // 1. Vérifier l'authentification
          await this.checkAuthentication();

          // 2. Charger la préférence de vue
          this.loadPreferredView();

          // 3. Récupérer l'ID de la liste depuis l'URL
          const urlParams = new URLSearchParams(window.location.search);
          this.listId = urlParams.get("listId");
          if (!this.listId) {
            throw new Error("ID de liste manquant dans l'URL (?listId=...).");
          }

          // 4. Obtenir l'instance de la base de données depuis notre client central
          this.database = await getDatabases();

          // 5. Initialiser le service de synchronisation
          this.syncService = new SyncService(this.database, this.listId, APPWRITE_CONFIG);

          // 6. Initialiser le service modal pour la logique métier
          this.initModalService(APPWRITE_CONFIG);

          // 7. Charger les assignments de couleurs depuis localStorage
          this.loadColorAssignments();
          // 7. Charger les données avec la stratégie de cache
          await this.loadInitialDataWithCache();

          // 7. Configurer la synchronisation temps réel
          this.setupRealtime();

          // 8. Démarrer le monitoring de la connexion temps réel
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
          this._updateLocalCollection(this.ingredients, payload, eventType);
          // Mise à jour optimisée : seulement l'ingrédient modifié
          this.updateSingleIngredientInUI(payload.$id);
        } else if (collectionName === APPWRITE_CONFIG.collections.purchases) {
          this._updateLocalCollection(this.purchases, payload, eventType);
          // Mise à jour optimisée : seulement les ingrédients affectés par l'achat
          this.updateIngredientsFromPurchasesInUI([payload]);
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

      handleTableGroupVolunteer(groupName, ingredients) {
        const username = this.getStoredUsername() || prompt('Votre nom pour la sélection groupée:');

        if (!username) return;

        // S'assurer que ingredients est bien un tableau
        const ingredientArray = Array.isArray(ingredients) ? ingredients : [ingredients];

        ingredientArray.forEach(ingredient => {
          if (!ingredient.who || !ingredient.who.includes(username)) {
            this.updateArrayField(ingredient.$id, 'who', username, 'add');
          }
        });

        console.log(`Vous avez été assigné à ${ingredientArray.length} ingrédients du groupe ${groupName}`);
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

      // Méthode pour se proposer pour tout un magasin
      async handleGroupVolunteer(storeName) {
        const group = this.groupedIngredients[storeName] || [];
        const username = this.getStoredUsername() || prompt('Votre nom pour la sélection groupée:');

        if (!username) return;

        try {
          for (const ingredient of group) {
            if (!ingredient.who || !ingredient.who.includes(username)) {
              await this.updateArrayField(ingredient.$id, 'who', username, 'add');
            }
          }

          // Afficher un message de succès
          console.log(`Vous avez été assigné à tous les ingrédients de ${storeName}`);

        } catch (error) {
          console.error('Erreur lors de l\'assignation groupée:', error);
          this.handleAppwriteError(error);
        }
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
        if (!volunteerName) return { bg: '#e2e3e5', color: '#383d41' }; // Gris pastel par défaut

        // Si déjà attribué, retourner la couleur existante
        if (this.volunteerColors[volunteerName] !== undefined) {
          return this.colorPalettes.volunteers[this.volunteerColors[volunteerName]];
        }

        // Attribuer une nouvelle couleur
        const nextIndex = Object.keys(this.volunteerColors).length % this.colorPalettes.volunteers.length;
        this.volunteerColors[volunteerName] = nextIndex;

        // Sauvegarder dans localStorage pour la persistance
        this.saveColorAssignments();

        return this.colorPalettes.volunteers[nextIndex];
      },

      getColorForStore(storeName) {
        if (!storeName) return { bg: '#e2e3e5', color: '#383d41' }; // Gris pastel par défaut

        // Si déjà attribué, retourner la couleur existante
        if (this.storeColors[storeName] !== undefined) {
          return this.colorPalettes.stores[this.storeColors[storeName]];
        }

        // Attribuer une nouvelle couleur
        const nextIndex = Object.keys(this.storeColors).length % this.colorPalettes.stores.length;
        this.storeColors[storeName] = nextIndex;

        // Sauvegarder dans localStorage pour la persistance
        this.saveColorAssignments();

        return this.colorPalettes.stores[nextIndex];
      },

      saveColorAssignments() {
        try {
          localStorage.setItem(`collab_colors_${this.listId}`, JSON.stringify({
            volunteerColors: this.volunteerColors,
            storeColors: this.storeColors
          }));
        } catch (error) {
          console.warn('Impossible de sauvegarder les couleurs:', error);
        }
      },

      loadColorAssignments() {
        try {
          const saved = localStorage.getItem(`collab_colors_${this.listId}`);
          if (saved) {
            const { volunteerColors, storeColors } = JSON.parse(saved);
            this.volunteerColors = volunteerColors || {};
            this.storeColors = storeColors || {};
          }
        } catch (error) {
          console.warn('Impossible de charger les couleurs:', error);
        }
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
        });
      },
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
