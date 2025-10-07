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
 * @save-flow (Flux de sauvegarde)
 * 1. User Action → Modal Form → Validation → AppwriteDataService
 * 2. AppwriteDataService → database.updateDocument/createDocument() → Appwrite API
 * 3. Appwrite API → Realtime notification → All connected clients
 * 4. handleRealtimeUpdate() → updateIngredientComplete()/updatePurchaseComplete()
 * 5. Update methods → _updateLocalCollection() + UI update functions
 * 6. SyncService.applyRealtimeChange() → localStorage cache update
 *
 * 7. Sync background (periodic) → syncChanges() → _mergeChangesWithCache()
 *    - First visit: loadCompleteData() → transformDataForUI(true)
 *    - Subsequent: _syncCollection() with $updatedAt filter → differential update
 *
 * @sync-optimisations
 * - Cache localStorage: données persistantes entre sessions
 * - Differential sync: uniquement les changements depuis lastSyncTimestamp
 * - Real-time updates: propagation instantanée à tous les clients
 * - Batch updates: updateMultipleIngredientsInUI() pour gros volumes
 * - Functional updates: map/filter au lieu de forEach pour performance
 *
 * @services
 * - IngredientCalculator: Calculs d'équilibre besoins vs achats
 * - DataTransformer: Formatage des données pour l'UI
 * - SyncService: Synchronisation différentielle cache ↔ Appwrite
 * - localStorageService: Gestion du cache local (données + timestamp)
 * - AppwriteDataService: CRUD Appwrite (create/update/delete)
 * - UnitsManager: Gestion des conversions d'unités
 * - ColorManager: Attribution de couleurs pastel (volontaires/magasins)
 * - TableColumnsConfig: Configuration des colonnes TanStack Table
 * - ModalMixin: Gestion unifiée des modaux
 * - AuthManager: Gestion authentification Appwrite
 *
 * @data-flow
 * Appwrite Raw Data → IngredientCalculator → DataTransformer → Vue Components (UI)
 *                 ↑                                              ↓
 *          Realtime Updates ←←←←←←←←←←←← User Interactions →→ Appwrite
 *                                 ↘ localStorageService (cache local)
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
import { IngredientManagementMixin } from "./IngredientManagementMixin.js";
import { AuthManager } from "./services/AuthManager.js";
import {
  getDatabases,
  subscribeToCollections,
  APPWRITE_CONFIG,
  isConnectedAppwrite,
} from "../appwrite-client.js";



export function createCollaborativeApp() {
  const app = Vue.createApp({
    // L'application utilisera le contenu existant du div #collaborativeApp
    delimiters: ["[[ ", " ]]"],

    // Intégration des mixins pour la gestion des modaux et des ingrédients
    mixins: [ModalMixin, IngredientManagementMixin],

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
        servicesInitialized: false,
        error: null,
        // realtimeStatus: "connecting",
        showUpdatePrompt: false,
        unsubscribeRealtime: () => { },

        // Services
        syncService: null,
        colorManager: null,
        suggestionsCacheManager: null,
        localStorageService: null,

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
        selectedIngredients: [], // IDs des ingrédients sélectionnés dans le tableau TanStack
        modalSelectedIngredients: [], // Ingrédients avec état de sélection pour le modal
        selectAllChecked: false,
        rowSelection: {}, // État de sélection pour TanStack Table (réactif)

        // Modals
        editingIngredient: null,

        // Données pour la gestion des suppressions dans le modal unifié
        deletedVolunteers: new Set(), // Volontaires marqués pour suppression
        deletedStores: new Set(), // Magasins marqués pour suppression

        // Gestion des vues
        currentView: 'grouped', // 'table', 'grouped', 'cards', 'compact'
        tableGrouping: ['storeDisplay'], // Pour TanStack Table - groupement par magasin (mode simple)

        // Service d'authentification
        authManager: null, // Sera initialisé dans initializeApp()

        // État UI pour l'authentification (reste dans Vue)
        showAuthToast: false,
        allowAnonymousView: true,
        isAuthenticated: false, // État synchrone pour les templates

        deleteConfirmation: {
          show: false,
          message: '',
          itemType: '',
          itemId: null,
          progress: 0,
          progressInterval: null
        },
        // Ces propriétés sont maintenant gérées par ModalMixin pour éviter les conflits
        // newPurchase, newStock, newVolunteer, editingStore sont définis dans ModalMixin

        // Données communes pour l'attribution groupée
        groupAssignment: {
          context: '', // 'grouped-header' | 'table-selection'
          type: '', // 'volunteer', 'store', etc.
          value: '',
          groupName: '',
          isProcessing: false,
          replaceExisting: false, // Switch pour supprimer les attributions existantes
          assignmentsToRemove: new Map(), // ingredientId -> Set(valeurs à supprimer)
          summary: {
            ingredientsCount: 0,
            additionsCount: 0,
            removalsCount: 0,
            replacementsCount: 0
          }
        },

        // États d'ouverture des modals
        groupWhoModal: {
          isOpen: false
        },
        groupStoreModal: {
          isOpen: false
        },
        mergeModal: {
          isOpen: false
        },


        modalSelectedIngredients: [],
        // Propriétés pour les suggestions
        filteredSuggestions: [],
        showSuggestions: false,
        filteredStoreSuggestions: [],
        showStoreSuggestions: false,

        // Système de toasts génériques
        toasts: []
      }
    },


    computed: {

      // Affichage du modal d'authentification
      showAuthModal() {
        return !this.isAuthenticated && this.authManager !== null && !this.isLoading;
      },

      // URL de redirection pour l'authentification (gère le SSR)
      loginRedirectUrl() {
        // Vérifie si on est côté client (dans un navigateur)
        if (typeof window !== 'undefined' && window.location) {
          return encodeURIComponent(window.location.pathname + window.location.search);
        }
        // Fallback côté serveur : URL actuelle de Hugo
        return encodeURIComponent('{{ .RelPermalink }}');
      },

      // Ingrédients filtrés et triés (utilisent les données pré-transformées)
      filteredIngredients() {
        const filtered = this.transformedIngredients
          .filter((ingredient) => {
            // Filtre par recherche (inclut les noms précédents)
            if (this.searchQuery.trim()) {
              const query = this.searchQuery.toLowerCase().trim();
              const nameMatches = ingredient.ingredientName.toLowerCase().includes(query);

              // Vérifier les noms précédents
              const previousNamesMatch = ingredient.previousNames &&
                ingredient.previousNames.some(prevName =>
                  prevName.toLowerCase().includes(query)
                );

              if (!nameMatches && !previousNamesMatch) {
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

            // Filtre par magasin (depuis les ingredients, pas les purchases)
            if (this.selectedStoreFilter) {
              if (!ingredient.store || !ingredient.store.includes(this.selectedStoreFilter)) {
                return false;
              }
            }

            // Filtre par personne (depuis les ingredients, pas les purchases)
            if (this.selectedPersonFilter) {
              if (!ingredient.who || !ingredient.who.includes(this.selectedPersonFilter)) {
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
          const storeName = ingredient.storeDisplay || 'Magasin non spécifié';

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
        const data = this.filteredIngredients.map(ing => ({
          ...ing,
          // Ajouter des propriétés pour TanStack Table
          totalNeeded: ing.totalNeeded || 0,
          totalPurchased: ing.totalPurchased || 0,
          totalMissing: ing.totalMissing || 0,
          typeDisplay: this.formatTypeShort(ing.ingType),
          storeDisplay: ing.store && ing.store.trim() ? ing.store : '',
          responsibleDisplay: ing.who && ing.who.length > 0 ? ing.who.join(', ') : ''
        }));

        // console.log('[DEBUG] tableData sample:', data.slice(0, 3));
        return data;
      },

      // Types disponibles pour les filtres
      availableTypes() {
        const types = [
          ...new Set(this.transformedIngredients.map((ing) => ing.ingType)),
        ];
        return types.sort();
      },

      // Magasins disponibles pour les filtres (uniquement depuis ingredients)
      availableStores() {
        if (this.servicesInitialized && this.localStorageService) {
          return this.localStorageService.getIngredientStores();
        }
      },

      // Personnes disponibles pour les filtres (uniquement depuis ingredients)
      availablePeople() {
        if (this.servicesInitialized && this.localStorageService) {
          return this.localStorageService.getIngredientUsers();
        }
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
        return this.modalSelectedIngredients.filter(ing => ing.selected).length;
      },

      /**
       * Compte le nombre d'ingrédients sélectionnés dans le tableau TanStack
       */
      tableSelectedCount() {
        // Utiliser directement selectedIngredients qui est maintenant synchronisé en temps réel
        return this.selectedIngredients ? this.selectedIngredients.length : 0;
      },

      /**
       * Retourne les IDs des ingrédients sélectionnés dans le tableau TanStack
       */


      assignmentSuggestions() {
        if (!this.localStorageService) return [];

        if (this.groupAssignment.type === 'volunteer') {
          return this.localStorageService.getSuggestions('volunteer');
        } else if (this.groupAssignment.type === 'store') {
          return this.localStorageService.getSuggestions('store');
        }
        return [];
      },

      /**
       * Retourne les suggestions de magasins pour les datalists
       */
      availableStoresSuggestions() {
        if (this.localStorageService) {
          return this.localStorageService.getSuggestions('store');
        }
        return [];
      },

      /**
       * Retourne les suggestions de volontaires pour les datalists
       */
      availableVolunteersSuggestions() {
        if (this.localStorageService) {
          return this.localStorageService.getSuggestions('volunteer');
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
            rowSelection: this.rowSelection || {},
          },
          getCoreRowModel: getCoreRowModel(),
          getGroupedRowModel: getGroupedRowModel(),
          getSortedRowModel: getSortedRowModel(),
          getFilteredRowModel: getFilteredRowModel(),
          getExpandedRowModel: getExpandedRowModel(),
          enableGrouping: true,
          enableRowSelection: true,
          getRowId: (originalRow) => {

            // Utiliser directement les données originales comme dans la documentation
            if (originalRow && originalRow.$id) {
              return originalRow.$id;
            }

            // Fallback si pas de $id
            return `row-${Math.random().toString(36).substr(2, 9)}`;
          },
          onRowSelectionChange: (updater) => {
            const newSelection = typeof updater === 'function' ? updater(this.table?.getState().rowSelection) : updater;
            // Maintenir l'état rowSelection synchronisé
            this.rowSelection = newSelection;

            // Extraire les IDs des ingrédients sélectionnés (ce sont maintenant les $id directement)
            const selectedIds = Object.keys(newSelection).filter(key => newSelection[key]);
            console.log('[Collaborative App] Selected ingredient IDs:', selectedIds);

            this.selectedIngredients = selectedIds;
          },
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
      'groupAssignment.replaceExisting': {
        handler() {
          this.updateSummary();
        }
      },

      // Watcher pour réagir aux changements de valeur
      'groupAssignment.value': {
        handler() {
          this.updateSummary();
        }
      },

      // Watcher pour réagir aux changements de sélection d'ingrédients
      modalSelectedIngredients: {
        handler() {
          this.updateSummary();
        },
        deep: true
      },

      // // Watcher pour la table - simplifié car la sélection est gérée par onRowSelectionChange
      // table: {
      //   handler() {
      //     console.log('[Collaborative App] Table initialisée ou mise à jour');
      //     // La sélection est maintenant gérée directement par onRowSelectionChange
      //   },
      //   deep: false
      // },
    },

      mounted() {
        this.initializeApp();
      },

      methods: {
        // === MÉTHODES DE GESTION DE L'AUTHENTIFICATION ===

        getAuthValidator() {
          return isConnectedAppwrite;
        },

        async checkAuthentication() {
          if (!this.authManager) {
            console.error('[Collaborative App] AuthManager non initialisé');
            return;
          }

          try {
            const isAuthenticated = await this.authManager.check();

            // Mettre à jour l'état synchrone pour les templates
            this.isAuthenticated = isAuthenticated;

            if (!isAuthenticated) {
              // Le modal est maintenant géré automatiquement par v-if !isAuthenticated
              this.realtimeStatus.isConnected = false;
            }
          } catch (error) {
            console.error('[Collaborative App] Erreur lors de la vérification de l\'authentification:', error);
            this.isAuthenticated = false; // Assurer l'état en cas d'erreur
          }
        },

        closeAuthModal() {
          // Rediriger vers la page d'accueil si l'utilisateur ne veut pas se connecter
          window.location.href = '/';
        },

        showAuthToastForFeature(_featureName) {
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
            this.authManager = new AuthManager(this.getAuthValidator());

            // 2. Vérifier l'authentification
            await this.checkAuthentication();

            // 3. Charger la préférence de vue
            this.loadPreferredView();

            // 4. Récupérer l'ID de la liste depuis l'URL
            const urlParams = new URLSearchParams(window.location.search);
            this.listId = urlParams.get("listId");
            if (!this.listId) {
              throw new Error("ID de liste manquant dans l'URL (?listId=...). ");
            }

            // 5. Obtenir l'instance de la base de données depuis notre client central
            this.database = await getDatabases();

            // 6. Initialiser le service de synchronisation
            this.syncService = new SyncService(this.database, this.listId, APPWRITE_CONFIG);

            // 7. Initialiser le service de données Appwrite
            this.appwriteDataService = new AppwriteDataService(APPWRITE_CONFIG);

            // 8. Initialiser le ColorManager
            this.colorManager = new ColorManager(this.listId);

            // 9. Initialiser le cache de suggestions avec localStorageService
            const { localStorageService } = await import('./services/localStorageService.js');
            this.localStorageService = localStorageService; // Garder la référence

            // 10. Charger les données avec la stratégie de cache
            await this.loadInitialDataWithCache();

            // 11. Marquer les services comme initialisés
            this.servicesInitialized = true;

            // 12. Configurer la synchronisation temps réel (seulement si authentifié)
            if (this.isAuthenticated) {
              this.setupRealtime();
            } else {
              console.log('[Collaborative App] Synchronisation temps réel désactivée (utilisateur non authentifié)');
            }

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
          // console.log("[Collaborative App] Chargement des données avec stratégie de cache...");

          try {
            // Étape 1: Charger depuis le cache local pour un affichage instantané
            const cacheResult = await this.syncService.loadFromCache();

            if (cacheResult.success && cacheResult.fromCache) {
              // Afficher les données du cache immédiatement
              const cachedData = cacheResult.data;
              this.event = cachedData.event;
              this.ingredients = cachedData.ingredients;
              this.purchases = cachedData.purchases;

              // Transformer les données pour l'UI avec optimisation
              this.transformDataForUI(true);

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
          // console.log("[Collaborative App] Synchronisation des changements en arrière-plan...");

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

              // Utiliser les optimisations de mise à jour multiple si pertinent
              if (isFirstVisit) {
                // Première visite : utiliser l'optimisation
                this.transformDataForUI(true);
              } else if (changes.ingredients.length > 5 || changes.purchases.length > 3) {
                // Beaucoup de changements : utiliser la mise à jour optimisée
                this.updateMultipleFromSyncChanges(changes.ingredients, changes.purchases);
              } else {
                // Peu de changements : transformation standard
                this.transformDataForUI(false);
              }

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

            // Transformer les données pour l'UI avec optimisation
            this.transformDataForUI(true);

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

        /**
         * Transforme les données pour l'UI
         * @param {boolean} useOptimizedUpdate - Utiliser la mise à jour optimisée si true
         */
        async transformDataForUI(useOptimizedUpdate = false) {
          console.log("[Collaborative App] Transformation des données pour l'UI...", {
            ingredientCount: this.ingredients.length,
            useOptimizedUpdate
          });

          try {
            // Si optimisation demandée, utiliser updateMultipleIngredientsInUI
            if (useOptimizedUpdate) {
              // console.log("[Collaborative App] Utilisation de la mise à jour optimisée pour", this.ingredients.length, "ingrédients");
              const ingredientIds = this.ingredients.map(ing => ing.$id);
              this.updateMultipleIngredientsInUI(ingredientIds);
              return;
            }

            // Utiliser IngredientCalculator pour calculer l'équilibre des ingrédients avec les purchases
            const calculatedIngredients =
              IngredientCalculator.calculateIngredientsBalance(
                this.ingredients,
                this.purchases,
              );

            // Utiliser le service DataTransformer pour préparer les données pour l'UI avec activation du groupement multi-magasin
            this.transformedIngredients = DataTransformer.transformForUI(
              calculatedIngredients,
              {
                // Keep only purchases ?
                unitsManager: this.unitsManager,
                includeRecipeDetails: true,
                includeCalculations: true,
                purchases: this.purchases,
                enableMultiStoreGrouping: false, // Mode simple : un seul magasin par ingrédient
              },
            );

            // Post-traitement pour corriger les achats des ingrédients fusionnés
            this.transformedIngredients.forEach(ing => {
              if (ing.isMerged) {
                const aggregatedPurchases = this._getAggregatedPurchasesForIngredient(ing);
                const updatedState = IngredientCalculator.recalculateStateFromPurchases(ing, aggregatedPurchases, this.unitsManager);
                Object.assign(ing, updatedState);
              }
            });

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
     * Finalise la mise à jour d'un achat et rafraîchit l'UI.
     * @param {string} ingredientId - L'ID de l'ingrédient concerné.
     * @param {Array} savedPurchases - Les documents d'achat retournés par Appwrite.
     */
    updatePurchaseComplete(ingredientId, savedPurchases) {
      this.showToast('success', 'Achat mis à jour avec succès');
      // Déclenche la mise à jour de l'ingrédient concerné dans l'UI
      // pour refléter les changements sur ses achats.
      this.updateSingleIngredientInUI(ingredientId);
    },

        /**
         * Met à jour plusieurs ingrédients depuis syncChanges de manière optimisée
         * @param {Array} ingredientChanges - Les changements d'ingrédients depuis Appwrite
         * @param {Array} purchaseChanges - Les changements d'achats depuis Appwrite
         */
        updateMultipleFromSyncChanges(ingredientChanges, purchaseChanges) {
          // console.log('[Collaborative App] Mise à jour multiple depuis syncChanges:', {
          //   ingredients: ingredientChanges?.length || 0,
          //   purchases: purchaseChanges?.length || 0
          // });

          try {
            // 1. Mettre à jour les ingrédients modifiés si beaucoup de changements
            if (ingredientChanges && ingredientChanges.length > 5) {
              const ingredientIds = ingredientChanges.map(ing => ing.$id);
              this.updateMultipleIngredientsInUI(ingredientIds);
            } else if (ingredientChanges && ingredientChanges.length > 0) {
              // Peu de changements : utiliser la méthode standard
              ingredientChanges.forEach(change => {
                this.updateIngredientComplete(change, 'update');
              });
            }

            // 2. Mettre à jour les achats modifiés si beaucoup de changements
            if (purchaseChanges && purchaseChanges.length > 3) {
              const purchaseIds = purchaseChanges.map(p => p.$id);
              this.updateMultiplePurchasesInUI(purchaseIds);
            } else if (purchaseChanges && purchaseChanges.length > 0) {
              // Peu de changements : utiliser la méthode standard
              purchaseChanges.forEach(change => {
                this.updatePurchaseComplete(change, 'update');
              });
            }

            console.log('[Collaborative App] Mise à jour syncChanges terminée');
          } catch (error) {
            console.error('[Collaborative App] Erreur lors de la mise à jour multiple syncChanges:', error);
            // Fallback : tout retransformer
            this.transformDataForUI();
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
            // Calculer seulement cet ingrédient avec les purchases
            const calculatedIngredient =
              IngredientCalculator.updateSingleIngredient(
                ingredient,
                this.ingredients,
                this.purchases || []
              );

            if (!calculatedIngredient) return;

            // Transformer pour l'UI
            const transformedIngredients = DataTransformer.transformForUI(
              [calculatedIngredient],
              {
                unitsManager: this.unitsManager,
                includeRecipeDetails: true,
                includeCalculations: true,
                purchases: this.purchases || [],
                enableMultiStoreGrouping: false, // Mode simple : un seul magasin par ingrédient
              }
            );

            // Post-traitement pour corriger les achats des ingrédients fusionnés
            transformedIngredients.forEach(ing => {
              if (ing.isMerged) {
                const aggregatedPurchases = this._getAggregatedPurchasesForIngredient(ing);
                const updatedState = IngredientCalculator.recalculateStateFromPurchases(ing, aggregatedPurchases, this.unitsManager);
                Object.assign(ing, updatedState);
              }
            });

            // Mettre à jour toutes les occurrences de cet ingrédient dans transformedIngredients
      this.ingredients[index] = updatedIngredient;

      // Mettre à jour les caches pour les filtres (réactivité des filtres)
      const store = updatedIngredient.store;
      if (store && store !== '-' && !this.syncService.storesCache.includes(store)) {
        this.syncService.storesCache.push(store);
        this.syncService.storesCache.sort();
      }

      (updatedIngredient.who || []).forEach(person => {
        if (person && !this.syncService.peopleCache.includes(person)) {
          this.syncService.peopleCache.push(person);
          this.syncService.peopleCache.sort();
        }
      });

      // S'assurer que la liste principale reste triée par ordre alphabétique
      this.ingredients.sort((a, b) => a.ingredientName.localeCompare(b.ingredientName));

              } catch (error) {
            console.error('[Collaborative App] Erreur lors de la mise à jour optimisée:', error);
            // Fallback : retransformer toutes les données
            this.transformDataForUI();
          }
        },

        /**
         * Met à jour toutes les occurrences d'un ingrédient dans le tableau transformé
         * @param {string} ingredientId - ID de l'ingrédient à mettre à jour
         * @param {Array} newTransformedIngredients - Nouvelles entrées transformées
         */
        _updateAllIngredientOccurrences(ingredientId, newTransformedIngredients) {
          // Trouver tous les indices des occurrences existantes
          const indicesToUpdate = [];
          this.transformedIngredients.forEach((ing, index) => {
            if (ing.$id === ingredientId) {
              indicesToUpdate.push(index);
            }
          });

          if (indicesToUpdate.length === 0) {
            // Aucune occurrence existante, ajouter les nouvelles
            this.transformedIngredients.push(...newTransformedIngredients);
            return;
          }

          // Remplacer les occurrences existantes
          if (indicesToUpdate.length === newTransformedIngredients.length) {
            // Même nombre d'occurrences : remplacement direct
            indicesToUpdate.forEach((index, i) => {
              this.transformedIngredients.splice(index, 1, newTransformedIngredients[i]);
            });
          } else {
            // Nombre différent : remplacer toutes les occurrences
            // (cas où les magasins ont changé)
            indicesToUpdate.sort((a, b) => b - a).forEach(index => {
              this.transformedIngredients.splice(index, 1);
            });
            this.transformedIngredients.push(...newTransformedIngredients);
          }
        },

        /**
         * Met à jour plusieurs achats de manière optimisée dans l'UI
         * @param {Array} purchaseIds - Les IDs des achats à mettre à jour
         */
        updateMultiplePurchasesInUI(purchaseIds) {
          if (!purchaseIds || purchaseIds.length === 0) return;

          try {
            // Filtrer les achats concernés
            const purchasesToUpdate = this.purchases.filter(purchase =>
              purchaseIds.includes(purchase.$id)
            );

            if (purchasesToUpdate.length === 0) {
              console.warn('[Collaborative App] Aucun achat trouvé pour mise à jour:', purchaseIds);
              return;
            }

            // Utiliser la logique existante pour mettre à jour les ingrédients affectés
            this.updateIngredientsFromPurchasesInUI(purchasesToUpdate);

            console.log('[Collaborative App] Achats mis à jour de manière optimisée:', purchasesToUpdate.length, '→', uniqueAffectedIds.length, 'ingrédients affectés');
          } catch (error) {
            console.error('[Collaborative App] Erreur lors de la mise à jour optimisée multiple achats:', error);
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
                purchases: this.purchases,
              }
            );

            // Post-traitement pour corriger les achats des ingrédients fusionnés
            transformedIngredients.forEach(ing => {
              if (ing.isMerged) {
                const aggregatedPurchases = this._getAggregatedPurchasesForIngredient(ing);
                const updatedState = IngredientCalculator.recalculateStateFromPurchases(ing, aggregatedPurchases, this.unitsManager);
                Object.assign(ing, updatedState);
              }
            });

            // Mettre à jour dans le tableau transformedIngredients (approche fonctionnelle)
            // Créer une map des ingrédients existants pour une recherche rapide

            // Combiner les ingrédients existants non modifiés avec les nouveaux
            const updatedIds = new Set(transformedIngredients.map(ing => ing.$id));
            const unchangedIngredients = this.transformedIngredients.filter(ing => !updatedIds.has(ing.$id));

            // Fusionner les ingrédients inchangés avec les ingrédients mis à jour
            this.transformedIngredients = [...unchangedIngredients, ...transformedIngredients];

            console.log('[Collaborative App] Ingrédients mis à jour de manière optimisée:', ingredientIds.length);
          } catch (error) {
            console.error('[Collaborative App] Erreur lors de la mise à jour optimisée multiple:', error);
            // Fallback : retransformer toutes les données
            this.transformDataForUI();
          }
        },

        /**
         * Met à jour les ingrédients affectés par des changements d'achats.
         * Cette fonction est maintenant le point central pour recalculer l'état
         * des ingrédients après une modification des achats.
         * @param {Array} updatedPurchases - Les achats modifiés (créés, mis à jour, supprimés).
         */
        updateIngredientsFromPurchasesInUI(updatedPurchases) {
          if (!updatedPurchases || updatedPurchases.length === 0) return;

          try {
            // 1. Identifier les ingrédients affectés par ces changements d'achats
            const affectedIngredientIds = new Set(updatedPurchases.map(p => p.listIngredient));

            // 2. Pour chaque ingrédient affecté, trouver sa version transformée (qui peut être fusionnée)
            const ingredientsToRecalculate = new Set();
            this.transformedIngredients.forEach(ing => {
              if (affectedIngredientIds.has(ing.$id)) {
                ingredientsToRecalculate.add(ing);
              }
              // Si l'ingrédient est fusionné, vérifier aussi ses enfants
              if (ing.isMerged === true && ing.mergedFrom) {
                const sourceIds = ing.mergedFrom.map(src => src.$id);
                if (sourceIds.some(id => affectedIngredientIds.has(id))) {
                  ingredientsToRecalculate.add(ing);
                }
              }
            });

            if (ingredientsToRecalculate.size === 0) return;

            // 3. Recalculer l'état de chaque ingrédient affecté
            ingredientsToRecalculate.forEach(ingredient => {
              const aggregatedPurchases = this._getAggregatedPurchasesForIngredient(ingredient);
              const updatedState = IngredientCalculator.recalculateStateFromPurchases(ingredient, aggregatedPurchases, this.unitsManager);
              Object.assign(ingredient, updatedState);
            });

            console.log(`[Collaborative App] ${ingredientsToRecalculate.size} ingrédient(s) mis à jour suite à un changement d'achat.`);

          } catch (error) {
            console.error('[Collaborative App] Erreur lors de la mise à jour depuis achats:', error);
            // En cas d'erreur, un recalcul complet est plus sûr
            this.transformDataForUI();
          }
        },

        /**
         * Récupère tous les achats pertinents pour un ingrédient (fusionné ou non) depuis le cache local.
         * @param {Object} ingredient - L'objet ingrédient.
         * @returns {Array} - Un tableau des documents d'achat correspondants.
         */
        _getAggregatedPurchasesForIngredient(ingredient) {
          if (!ingredient || !this.purchases) {
            return [];
          }

          const relatedIngredientIds = new Set();

          // 1. Ajouter l'ID de l'ingrédient lui-même
          relatedIngredientIds.add(ingredient.$id);

          // 2. Si l'ingrédient est fusionné, ajouter les IDs de ses enfants
          // On suppose que `mergedFrom` contient les objets ingrédients complets.
          if (ingredient.isMerged === true && Array.isArray(ingredient.mergedFrom)) {
            ingredient.mergedFrom.forEach(sourceIngredient => {
              if (sourceIngredient && sourceIngredient.$id) {
                relatedIngredientIds.add(sourceIngredient.$id);
              }
            });
          }

          // 3. Filtrer le cache global des achats
          return this.purchases.filter(p => p.listIngredient && relatedIngredientIds.has(p.listIngredient));
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

        onConnectionError(_error) {
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

            // Mettre à jour le cache de suggestions pour les ingredients
            if (this.localStorageService) {
              // Trouver l'ingrédient transformé correspondant
              const transformedIngredient = this.transformedIngredients.find(ing => ing.$id === payload.$id);
              if (transformedIngredient) {
                this.localStorageService.updateFromIngredient(transformedIngredient);
                this.localStorageService.saveToStorage(this.listId);
              }
            }
          } else if (collectionName === APPWRITE_CONFIG.collections.purchases) {
            // Mise à jour unifiée : données brutes + UI
            this.updatePurchaseComplete(payload, eventType);

            // Mettre à jour le cache de suggestions pour les purchases
            if (this.localStorageService) {
              this.localStorageService.updateFromPurchase(payload);
              this.localStorageService.saveToStorage(this.listId);
            }
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




        // === MÉTHODES POUR LE MODAL D'ATTRIBUTION GROUPÉE ===

        /**
         * Initialise les données communes pour l'attribution groupée
         * @param {string} context - Contexte d'utilisation ('grouped-header' | 'table-selection')
         * @param {string} type - Type d'attribution ('volunteer', 'store', etc.)
         * @param {string} groupName - Nom du groupe (magasin, type, etc.)
         * @param {Array} ingredients - Liste des ingrédients concernés
         */
        initGroupAssignment(context, type, groupName, ingredients) {
          this.groupAssignment = {
            context: context,
            type: type,
            value: '', // Réinitialiser la valeur
            groupName: groupName,
            isProcessing: false,
            replaceExisting: type === 'store', // Toujours remplacer pour les magasins
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
              this.groupAssignment.value = currentUser;
            }
          }

          // Préparer les ingrédients avec état de sélection
          this.modalSelectedIngredients = ingredients.map(ing => ({
            ...ing,
            selected: true // Tous cochés par défaut
          }));

          // Initialiser les suggestions selon le type
          if (type === 'store') {
            this.filterStoreSuggestions();
          } else {
            this.filterSuggestions();
          }
          this.updateSummary();
        },

        /**
         * Ouvre le modal d'attribution de bénévoles
         */
        openGroupWhoModal(context, groupName, ingredients) {
          this.initGroupAssignment(context, 'volunteer', groupName, ingredients);
          this.groupWhoModal.isOpen = true;
        },

        /**
         * Ouvre le modal d'attribution de magasins
         */
        openGroupStoreModal(context, groupName, ingredients) {
          this.initGroupAssignment(context, 'store', groupName, ingredients);
          this.groupStoreModal.isOpen = true;
        },

        /**
         * Ouvre le modal d'attribution groupée pour les ingrédients sélectionnés par checkbox
         * @param {string} type - Type d'attribution ('volunteer' ou 'store')
         */
        openGroupAssignmentModalForSelection(type) {
          try {

            // props
            const groupName = `Sélection (${this.selectedIngredients.length} ingrédients)`;
            const context = 'table-selection';

            // Transformer les IDs en objets ingrédients complets (avec propriétés calculées)
            const selectedIngredientObjects = this.selectedIngredients.map(id =>
              this.transformedIngredients.find(ing => ing.$id === id)
            ).filter(ing => ing !== undefined);

            // Ouvrir le modal avec les ingrédients sélectionnés et le contexte explicite
            if (type === 'volunteer') {
              this.openGroupWhoModal(context, groupName, selectedIngredientObjects);
            } else if (type === 'store') {
              this.openGroupStoreModal(context, groupName, selectedIngredientObjects);
            }
          } catch (error) {
            console.error('[Collaborative App] Erreur lors de l\'ouverture du modal de sélection:', error);
            this.showErrorToast('Erreur lors de l\'ouverture du modal');
          }
        },

        /**
         * Ferme le modal d'attribution de bénévoles
         */
        closeGroupWhoModal() {
          this.groupWhoModal.isOpen = false;
          setTimeout(() => {
            this.resetGroupAssignmentData();
          }, 300); // Attendre la fin de l'animation
        },

        /**
         * Ferme le modal d'attribution de magasins
         */
        closeGroupStoreModal() {
          this.groupStoreModal.isOpen = false;
          setTimeout(() => {
            this.resetGroupAssignmentData();
          }, 300); // Attendre la fin de l'animation
        },

        /**
         * Réinitialise les données communes d'attribution
         */
        resetGroupAssignmentData() {
          this.groupAssignment = {
            context: '',
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
              replacementsCount: 0,
              assignmentsCount: 0
            }
          };
          this.modalSelectedIngredients = [];
          this.filteredSuggestions = [];
          this.showSuggestions = false;
          this.filteredStoreSuggestions = [];
          this.showStoreSuggestions = false;
        },

        /**
         * Filtre les suggestions basées sur la saisie
         */
        filterSuggestions() {
          const query = this.groupAssignment.value.toLowerCase().trim();
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
          this.groupAssignment.value = suggestion;
          this.showSuggestions = false;
          this.filterSuggestions();
        },

        /**
         * Efface la valeur d'attribution
         */
        clearAssignmentValue() {
          this.groupAssignment.value = '';
          this.filterSuggestions();
          this.updateSummary();
        },

        /**
         * Efface la valeur d'attribution de magasin
         */
        clearStoreAssignmentValue() {
          this.groupAssignment.value = '';
          this.filterStoreSuggestions();
          this.updateSummary();
        },

        /**
         * Filtre les suggestions de magasins basées sur la saisie
         */
        filterStoreSuggestions() {
          const query = this.groupAssignment.value.toLowerCase().trim();
          const suggestions = this.assignmentSuggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(query)
          );

          if (!query) {
            this.filteredStoreSuggestions = suggestions.slice(0, 10); // Limiter à 10 suggestions
          } else {
            this.filteredStoreSuggestions = suggestions.slice(0, 10); // Limiter à 10 suggestions
          }
        },

        /**
         * Sélectionne une suggestion de magasin
         */
        selectStoreSuggestion(suggestion) {
          this.groupAssignment.value = suggestion;
          this.showStoreSuggestions = false;
          this.filterStoreSuggestions();
          this.updateSummary();
        },

        /**
         * Cache les suggestions de magasins avec un délai
         */
        hideStoreSuggestions() {
          setTimeout(() => {
            this.showStoreSuggestions = false;
          }, 200);
        },

        /**
         * Vérifie si une attribution est marquée pour suppression
         * @param {string} ingredientId - ID de l'ingrédient
         * @param {string} value - Valeur de l'attribution
         * @returns {boolean}
         */
        isAssignmentToRemove(ingredientId, value) {
          return this.groupAssignment.assignmentsToRemove.get(ingredientId)?.has(value) || false;
        },

        /**
         * Bascule l'état de suppression d'une attribution
         * @param {string} ingredientId - ID de l'ingrédient
         * @param {string} value - Valeur de l'attribution
         */
        toggleAssignmentRemoval(ingredientId, value) {
          if (!this.groupAssignment.assignmentsToRemove.has(ingredientId)) {
            this.groupAssignment.assignmentsToRemove.set(ingredientId, new Set());
          }

          const removals = this.groupAssignment.assignmentsToRemove.get(ingredientId);
          if (removals.has(value)) {
            removals.delete(value);
            if (removals.size === 0) {
              this.groupAssignment.assignmentsToRemove.delete(ingredientId);
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
          if (this.groupAssignment.replaceExisting) {
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
          if (!this.groupAssignment.value.trim()) {
            return 'selective'; // Only removals
          }

          if (this.groupAssignment.replaceExisting) {
            return 'replace';
          }

          // Check if there are any manual removals
          const hasManualRemovals = Array.from(this.groupAssignment.assignmentsToRemove.values())
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
          this.groupAssignment.assignmentsToRemove.clear();
          this.updateSummary();
        },

        /**
         * Marque toutes les attributions existantes pour suppression (mode "Remplacer tout")
         */
        markAllAssignmentsForRemoval() {
          this.groupAssignment.assignmentsToRemove.clear();

          this.modalSelectedIngredients.forEach(ingredient => {
            if (!ingredient.selected) return;

            const existingAssignments = this.groupAssignment.type === 'volunteer'
              ? (ingredient.who || [])
              : (ingredient.store || []);

            if (existingAssignments.length > 0) {
              this.groupAssignment.assignmentsToRemove.set(ingredient.$id, new Set(existingAssignments));
            }
          });

          this.showToast('Toutes les attributions existantes seront remplacées', 'warning', 3000, 'Mode remplacement');
        },

        /**
         * Met à jour le résumé des modifications
         */
        updateSummary() {
          let ingredientsCount = 0;

          // Pour les bénévoles
          let removalsCount = 0;
          let additionsCount = 0;

          // Pour les magasins
          let replacementsCount = 0;
          let assignmentsCount = 0;

          const selectedIngredients = this.modalSelectedIngredients.filter(ing => ing.selected);

          for (const ingredient of selectedIngredients) {
            const hasRemovals = this.groupAssignment.assignmentsToRemove.has(ingredient.$id);
            const hasNewValue = this.groupAssignment.value.trim();
            const isNewValueDifferent = hasNewValue && hasNewValue.trim() !== '';

            if (hasRemovals || isNewValueDifferent) {
              ingredientsCount++;
            }

            if (this.groupAssignment.type === 'store') {
              // Logique spécifique pour les magasins
              if (isNewValueDifferent) {
                const currentStore = ingredient.store || '';
                const newStore = hasNewValue.trim();

                if (currentStore && currentStore !== newStore) {
                  // Remplacement d'un magasin existant
                  replacementsCount++;
                } else if (!currentStore) {
                  // Nouvelle assignation de magasin
                  assignmentsCount++;
                }
              }
            } else {
              // Logique pour les bénévoles (existante)
              if (hasRemovals) {
                removalsCount += this.groupAssignment.assignmentsToRemove.get(ingredient.$id).size;
              }

              if (isNewValueDifferent) {
                const existingAssignments = ingredient.who || [];
                if (!existingAssignments.includes(hasNewValue.trim())) {
                  additionsCount++;
                }
              }
            }
          }

          // Mise à jour du summary avec les propriétés appropriées selon le type
          if (this.groupAssignment.type === 'store') {
            this.groupAssignment.summary = {
              ingredientsCount,
              replacementsCount,
              assignmentsCount,
              removalsCount: 0, // Non utilisé pour les magasins
              additionsCount: 0  // Non utilisé pour les magasins
            };
          } else {
            this.groupAssignment.summary = {
              ingredientsCount,
              removalsCount,
              additionsCount,
              replacementsCount: 0, // Non utilisé pour les bénévoles
              assignmentsCount: 0   // Non utilisé pour les bénévoles
            };
          }
        },

        /**
         * Vérifie s'il y a des modifications à appliquer
         * @returns {boolean}
         */
        hasModifications() {
          const hasValue = this.groupAssignment.value.trim();
          const hasRemovals = this.groupAssignment.assignmentsToRemove.size > 0;

          return hasValue || hasRemovals;
        },

        /**
         * Sélectionne tous les ingrédients (modal-group-assignment)
         */
        selectAllIngredients() {
          this.modalSelectedIngredients.forEach(ing => {
            ing.selected = true;
          });
        },

        /**
         * Désélectionne tous les ingrédients (modal-group-assignment)
         */
        deselectAllIngredients() {
          this.modalSelectedIngredients.forEach(ing => {
            ing.selected = false;
          });
        },

        /**
         * Fonctions utilitaires pour la barre de sélection
         */

        /**
         * Exporte les ingrédients sélectionnés
         */
        exportSelectedIngredients() {
          try {
            const selectedIds = this.selectedIngredients || [];

            if (!selectedIds || selectedIds.length === 0) {
              this.showWarningToast('Aucun ingrédient à exporter');
              return;
            }

            const selectedIngredients = this.ingredients.filter(ing =>
              selectedIds.includes(ing.$id)
            );

            if (selectedIngredients.length === 0) {
              this.showWarningToast('Aucun ingrédient correspondant trouvé');
              return;
            }

            // Créer le contenu CSV
            const headers = ['Nom', 'Type', 'Quantité nécessaire', 'Quantité disponible', 'Manque', 'Bénévoles', 'Magasins'];
            const rows = selectedIngredients.map(ing => [
              ing.ingredientName || '',
              ing.typeDisplay || '',
              ing.totalNeedDisplay || '',
              ing.totalAvailableDisplay || '',
              ing.balanceDisplay || '',
              (ing.who || []).join('; '),
              ing.store || ''
            ]);

            const csvContent = [headers, ...rows]
              .map(row => row.map(cell => `"${cell}"`).join(','))
              .join('\n');

            // Créer et télécharger le fichier
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `ingredients_selection_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            this.showSuccessToast(`${selectedIngredients.length} ingrédients exportés`);
          } catch (error) {
            console.error('[Collaborative App] Erreur lors de l\'export des ingrédients:', error);
            this.showErrorToast('Erreur lors de l\'export');
          }
        },



        /**
         * Désélectionne tous les ingrédients au niveau principal
         */
        deselectAllMainIngredients() {
          if (!this.table || typeof this.table.getToggleAllRowsSelectedHandler !== 'function') {
            console.warn('[Collaborative App] Table non disponible pour la désélection');
            return;
          }

          try {
            // Utiliser la méthode TanStack Table pour désélectionner toutes les lignes
            // Créer un événement simulé avec checked = false
            const mockEvent = { target: { checked: false } };
            this.table.getToggleAllRowsSelectedHandler()(mockEvent);

            // Mettre à jour l'état local pour la cohérence
            this.selectedIngredients = [];
            this.selectAllChecked = false;
          } catch (error) {
            console.error('[Collaborative App] Erreur lors de la désélection de tous les éléments:', error);
          }
        },

        /**
         * Confirme et vide la sélection
         */
        confirmClearSelection() {
          if (confirm('Êtes-vous sûr de vouloir vider toute la sélection ?')) {
            this.deselectAllMainIngredients();
            this.showInfoToast('Sélection vidée');
          }
        },

        /**
         * Gère la soumission du formulaire d'attribution groupée
         */
        async handleGroupAssignmentSubmit() {
          console.log('[Collaborative App] Début de la soumission groupée - Contexte:', this.groupAssignment.context);
          console.log('[Collaborative App] Ingrédients concernés:', this.modalSelectedIngredients.length);
          const selectedIngredients = this.modalSelectedIngredients.filter(ing => ing.selected);
          console.log('[Collaborative App] Ingrédients à traiter:', selectedIngredients.length);

          // Confirmation pour les actions importantes (suppressions multiples)
          if (this.groupAssignment.summary.removalsCount > 3) {
            const confirmMessage = `Vous êtes sur le point de supprimer ${this.groupAssignment.summary.removalsCount} attribution(s). Voulez-vous continuer ?`;
            if (!confirm(confirmMessage)) {
              return;
            }
          }

          this.groupAssignment.isProcessing = true;

          try {
            await this.processGroupAssignment(selectedIngredients);

            // Mettre à jour le cache de suggestions avec les ingrédients modifiés
            if (this.localStorageService) {
              selectedIngredients.forEach(ingredient => {
                this.localStorageService.updateFromIngredient(ingredient);
              });
              this.localStorageService.saveToStorage(this.listId);
            }

            // Message de succès personnalisé selon l'action
            const actionType = this.getActionType();
            let successMessage = `Opération réussie pour ${selectedIngredients.length} ingrédient(s)`;

            if (actionType === 'add') {
              successMessage = `Attribution ajoutée à ${selectedIngredients.length} ingrédient(s)`;
            } else if (actionType === 'replace') {
              successMessage = `Attributions remplacées pour ${selectedIngredients.length} ingrédient(s)`;
            } else {
              if (this.groupAssignment.summary.removalsCount > 0) {
                successMessage += ` (${this.groupAssignment.summary.removalsCount} suppression(s))`;
              }
              if (this.groupAssignment.summary.additionsCount > 0) {
                successMessage += ` (${this.groupAssignment.summary.additionsCount} ajout(s))`;
              }
            }

            this.showToast(successMessage, 'success', 5000, 'Succès');
            this.closeGroupWhoModal();
          } catch (error) {
            console.error('[Collaborative App] Erreur lors de l\'attribution groupée:', error);
            this.showToast(
              `Erreur lors de l\'attribution: ${error.message}`,
              'danger',
              8000,
              'Erreur'
            );
          } finally {
            this.groupAssignment.isProcessing = false;
          }
        },

        /**
         * Traite l'attribution groupée avec Promise.all
         */
        async processGroupAssignment(ingredients) {
          console.log('[Collaborative App] Traitement groupée pour', ingredients.length, 'ingrédients');

          const promises = ingredients.map(async (ingredient) => {
            try {
              if (this.groupAssignment.type === 'volunteer') {
                // Récupérer les bénévoles actuels
                const currentVolunteers = Array.isArray(ingredient.who) ? ingredient.who : [];
                const newVolunteer = this.groupAssignment.value.trim();

                // Calculer les bénévoles à conserver (ceux qui ne sont pas marqués pour suppression)
                const volunteersToRemove = this.groupAssignment.assignmentsToRemove.get(ingredient.$id) || new Set();
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

              } else if (this.groupAssignment.type === 'store') {
                // Logique simple : un seul magasin par ingrédient
                const editingStore = this.groupAssignment.value.trim();

                // Remplacer directement le magasin (passer une string simple)
                await this.appwriteDataService.saveStore(
                  editingStore,
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

        /**
         * Gère la soumission du formulaire d'assignation de magasins
         */
        async handleStoreAssignmentSubmit() {

          // Filtrer les ingrédients sélectionnés pour le traitement
          const selectedIngredients = this.modalSelectedIngredients.filter(ing => ing.selected);
          this.groupAssignment.isProcessing = true;

          try {
            const promises = selectedIngredients.map(async (ingredient) => {
              try {
                const editingStore = this.groupAssignment.value.trim();

                // Remplacer directement le magasin
                await this.appwriteDataService.saveStore(
                  editingStore,
                  ingredient.$id,
                  this.database
                );

                console.log(`[Collaborative App] Assignation du magasin réussie pour ${ingredient.ingredientName}`);
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
            const successes = results.filter(result => result.success);

            if (failures.length > 0) {
              const errorMessages = failures.map(f => `${f.ingredient}: ${f.error}`).join('\n');
              this.showToast(
                `${failures.length} assignation(s) ont échoué:\n${errorMessages}`,
                'danger',
                5000
              );
            }

            if (successes.length > 0) {
              let successMessage = `Magasin "${this.groupAssignment.value.trim()}" assigné à ${successes.length} ingrédient(s)`;
              this.showToast(successMessage, 'success', 3000);
            }

            // Fermer le modal uniquement s'il y a eu des succès
            if (successes.length > 0) {
              this.closeGroupStoreModal();
            }

          } catch (error) {
            console.error('[Collaborative App] Erreur lors de la soumission groupée des magasins:', error);
            this.showToast(`Erreur lors de l'assignation des magasins: ${error.message}`, 'danger', 5000);
          } finally {
            this.groupAssignment.isProcessing = false;
          }
        },

        /**
         * Vérifie s'il y a des modifications pour les magasins
         * @returns {boolean}
         */
        hasStoreModifications() {
          const hasValue = this.groupAssignment.value.trim();
          const hasSelectedIngredients = this.modalSelectedIngredients.some(ing => ing.selected);

          if (!hasSelectedIngredients) {
            return false;
          }

          // Pour les magasins, toute valeur avec des ingrédients sélectionnés constitue une modification
          return hasValue && hasSelectedIngredients;
        },

        // Méthode utilitaire pour formater les valeurs avec unités
        // formatValueWithUnit(value, unit) {
        //   if (typeof value !== 'number') return value;

        //   // Logique de formatage simplifiée - à adapter selon votre besoin
        //   if (value >= 1000 && unit === 'gr.') {
        //     return `${(value / 1000).toFixed(1)} kg`;
        //   }

        //   return `${Math.round(value)} ${unit}`;
        // },

        // === MÉTHODES D'ÉDITION ===





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


        // === MÉTHODES DE STATUT ===
        // UNUSED : TODO
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
      }

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
