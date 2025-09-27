/**
 * app.js
 * Application Vue.js collaborative pour la gestion des listes d'ingrédients
 * Utilise Appwrite pour la persistance et la synchronisation temps réel
 * Architecture refactorisée avec services centralisés et composants stupides
 */


import { createApp, h } from 'vue';
import { useVueTable, getCoreRowModel, getGroupedRowModel, getSortedRowModel, getFilteredRowModel, getExpandedRowModel } from '@tanstack/vue-table';
import { unitsManager } from "./UnitsManager.js";
import { IngredientCalculator } from "./services/IngredientCalculator.js";
import { DataTransformer } from "./services/DataTransformer.js";
import { SyncService } from "./services/SyncService.js";
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
        realtimeStatus: "connecting",
        showUpdatePrompt: false,
        unsubscribeRealtime: () => {},

        // Services
        syncService: null,

        // État de la connexion temps réel
        connectionStatus: {
          isConnected: true,
          lastUpdate: Date.now(),
          retryCount: 0,
          maxRetries: 3,
          showReconnecting: false,
          showDisconnectedToast: true
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

        // Gestion des vues
        currentView: 'table', // 'table', 'grouped', 'cards', 'compact'
        groupingBy: 'store', // 'store' ou 'ingType'
        tableGrouping: ['store'], // Pour TanStack Table
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

      // --- LOGIQUE DE TANSTACK TABLE INTÉGRÉE ---

      tableColumns() {
        const h = Vue.h; // Accès à la fonction de rendu de Vue

        // Vérifier si TanStack Table est disponible
        if (!window.VueTable || !window.VueTable.createVueTable) {
          return [];
        }

        return [
          {
            id: 'selection',
            header: ({ table }) => h('input', {
              type: 'checkbox',
              checked: table.getIsAllRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }),
            cell: ({ row }) => h('input', {
              type: 'checkbox',
              checked: row.getIsSelected(),
              onChange: row.getToggleSelectedHandler()
            }),
            size: 50
          },
          {
            accessorKey: 'status',
            header: 'Statut',
            cell: ({ row }) => {
              const status = row.original.status;
              const statusIcons = {
                'sufficient': h('span', { class: 'text-success' }, [h('i', { class: 'fas fa-check-circle' })]),
                'missing': h('span', { class: 'text-danger' }, [h('i', { class: 'fas fa-times-circle' })]),
                'partial': h('span', { class: 'text-warning' }, [h('i', { class: 'fas fa-exclamation-triangle' })])
              };
              return statusIcons[status] || h('span', { class: 'text-muted' }, '➖');
            },
            size: 50
          },
          {
            accessorKey: 'ingredientName',
            header: ({ column }) => h('button', {
              class: 'btn btn-link p-0 text-start sortable-column',
              onClick: column.getToggleSortingHandler()
            }, [
              'Ingrédient ',
              column.getIsSorted() === 'asc' ? '↑' : column.getIsSorted() === 'desc' ? '↓' : ''
            ]),
            cell: ({ row }) => h('strong', {}, row.original.ingredientName),
            enableGrouping: false
          },
          {
            accessorKey: 'ingType',
            header: 'Type',
            cell: ({ row }) => h('span', { class: 'badge bg-secondary badge-ingredient-type' }, row.original.typeDisplay),
            enableSorting: true,
            enableGrouping: true
          },
          {
            accessorKey: 'totalNeedDisplay',
            header: ({ column }) => h('button', {
              class: 'btn btn-link p-0 text-start sortable-column',
              onClick: column.getToggleSortingHandler()
            }, [
              'Besoin Total ',
              column.getIsSorted() === 'asc' ? '↑' : column.getIsSorted() === 'desc' ? '↓' : ''
            ]),
            cell: ({ row }) => row.original.totalNeedDisplay,
            enableSorting: true,
            enableGrouping: false
          },
          {
            accessorKey: 'purchasesDisplay',
            header: ({ column }) => h('button', {
              class: 'btn btn-link p-0 text-start sortable-column',
              onClick: column.getToggleSortingHandler()
            }, [
              'Acheté ',
              column.getIsSorted() === 'asc' ? '↑' : column.getIsSorted() === 'desc' ? '↓' : ''
            ]),
            cell: ({ row }) => h('button', {
              class: 'btn btn-sm btn-outline-success',
              onClick: () => this.handleEditPurchases(row.original)
            }, row.original.purchasesDisplay),
            enableSorting: true,
            enableGrouping: false
          },
          {
            accessorKey: 'balanceDisplay',
            header: ({ column }) => h('button', {
              class: 'btn btn-link p-0 text-start sortable-column',
              onClick: column.getToggleSortingHandler()
            }, [
              'Manque ',
              column.getIsSorted() === 'asc' ? '↑' : column.getIsSorted() === 'desc' ? '↓' : ''
            ]),
            cell: ({ row }) => h('span', {
              class: row.original.balanceClass
            }, row.original.balanceDisplay),
            enableSorting: true,
            enableGrouping: false
          },
          {
            accessorKey: 'storesDisplay',
            header: 'Magasin',
            cell: ({ row }) => {
              const ingredient = row.original;
              return h('div', { class: 'd-flex align-items-center gap-2' }, [
                ingredient.storesDisplay && ingredient.storesDisplay.length > 0
                  ? h('div', {}, ingredient.storesDisplay)
                  : h('div', { class: 'text-muted' }, '-'),
                h('button', {
                  class: 'btn btn-sm btn-outline-secondary btn-icon',
                  onClick: () => this.handleEditStore(ingredient),
                  title: 'Ajouter un magasin'
                }, [h('i', { class: 'fas fa-store' })])
              ]);
            },
            enableSorting: true,
            enableGrouping: true
          },
          {
            accessorKey: 'responsibleDisplay',
            header: 'Qui',
            cell: ({ row }) => {
              const ingredient = row.original;
              return h('div', { class: 'd-flex align-items-center gap-2' }, [
                ingredient.responsibleDisplay && ingredient.responsibleDisplay.length > 0
                  ? h('div', {}, ingredient.responsibleDisplay)
                  : h('div', { class: 'text-muted' }, '-'),
                h('button', {
                  class: 'btn btn-sm btn-outline-primary btn-icon',
                  onClick: () => this.handleVolunteer(ingredient),
                  title: 'Se proposer pour cet ingrédient'
                }, [h('i', { class: 'fas fa-user-plus' })])
              ]);
            },
            enableSorting: true,
            enableGrouping: false
          },
          {
            id: 'actions',
            header: 'Actions',
            cell: ({ row }) => h('div', { class: 'd-flex gap-1' }, [
              h('button', {
                class: 'btn btn-sm btn-outline-info btn-icon',
                onClick: () => this.handleShowDetails(row.original),
                title: 'Détails'
              }, [h('i', { class: 'fas fa-eye' })]),
              h('button', {
                class: 'btn btn-sm btn-outline-secondary btn-icon',
                onClick: () => this.handleEditStock(row.original),
                title: 'Modifier le stock'
              }, [h('i', { class: 'fas fa-boxes' })])
            ]),
            size: 100
          }
        ];
      },

      table() {
             // Cette propriété sera maintenant calculée correctement.
             // Vue attendra que ses dépendances (tableData, tableColumns, tableGrouping) soient prêtes.
             if (!useVueTable || !getExpandedRowModel) {
                 // Cette condition ne devrait plus poser problème, mais c'est une bonne sécurité.
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
      // === MÉTHODES D'INITIALISATION ===

      async initializeApp() {
        try {
          console.log("[Collaborative App] Initialisation...");

          // 1. Charger la préférence de vue
          this.loadPreferredView();

          // 2. Récupérer l'ID de la liste depuis l'URL
          const urlParams = new URLSearchParams(window.location.search);
          this.listId = urlParams.get("listId");
          if (!this.listId) {
            throw new Error("ID de liste manquant dans l'URL (?listId=...).");
          }

          // 3. Obtenir l'instance de la base de données depuis notre client central
          this.database = await getDatabases();

          // 4. Initialiser le service de synchronisation
          this.syncService = new SyncService(this.database, this.listId, APPWRITE_CONFIG);

          // 5. Charger les données avec la stratégie de cache
          await this.loadInitialDataWithCache();

          // 6. Configurer la synchronisation temps réel
          this.setupRealtime();

          // 7. Démarrer le monitoring de la connexion temps réel
          this.startConnectionMonitoring();

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

            console.log("[Collaborative App] Données affichées depuis le cache");

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
        try {
          this.unsubscribeRealtime = subscribeToCollections(
            ["ingredients", "purchases"],
            (response) => {
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
        console.log("[Collaborative App] Mise à jour temps réel reçue:", response);

        // Mettre à jour le statut de connexion
        this.connectionStatus.isConnected = true;
        this.connectionStatus.lastUpdate = Date.now();
        this.connectionStatus.retryCount = 0;
        this.connectionStatus.showReconnecting = false;

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

    // === MÉTHODES DE GESTION DE LA CONNEXION TEMPS RÉEL ===

    startConnectionMonitoring() {
      // Démarrer la vérification périodique de la connexion
      this.connectionCheckInterval = setInterval(() => {
        this.checkConnectionHealth();
      }, 30000); // Vérification toutes les 30 secondes
    },

    checkConnectionHealth() {
      const now = Date.now();
      const timeSinceLastUpdate = now - this.connectionStatus.lastUpdate;

      // Si pas de mise à jour depuis plus de 60 secondes, considérer comme déconnecté
      if (timeSinceLastUpdate > 60000 && this.connectionStatus.isConnected) {
        this.connectionStatus.isConnected = false;
        console.warn('[Collaborative App] Pas de mise à jour temps réel depuis 60 secondes');
      }
    },

    async attemptReconnection() {
      this.connectionStatus.showReconnecting = true;

      try {
        // Se désabonner et se réabonner
        if (this.unsubscribeRealtime) {
          this.unsubscribeRealtime();
        }

        this.connectionStatus.retryCount++;

        // Attendre un peu avant de se réabonner
        await new Promise(resolve => setTimeout(resolve, 1000));

        this.setupRealtime();

        // Vérifier si la connexion est rétablie
        setTimeout(() => {
          if (this.connectionStatus.isConnected) {
            console.log('[Collaborative App] Reconnexion réussie');
            this.connectionStatus.showReconnecting = false;
          } else if (this.connectionStatus.retryCount >= this.connectionStatus.maxRetries) {
            console.warn('[Collaborative App] Échec de la reconnexion après plusieurs tentatives');
            this.connectionStatus.showReconnecting = false;
          }
        }, 2000);

      } catch (error) {
        console.error('[Collaborative App] Erreur lors de la reconnexion:', error);
        this.connectionStatus.showReconnecting = false;
      }
    },

    closeDisconnectedToast() {
      this.connectionStatus.showDisconnectedToast = false;
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
