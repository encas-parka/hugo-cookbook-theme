/**
 * app.js
 * Application Vue.js collaborative pour la gestion des listes d'ingrédients
 * Utilise Appwrite pour la persistance et la synchronisation temps réel
 */
 
 /** TO Check 
 
 * vérifier le fonctionnement stock (client, calculé) / stockReel (appwrite, renseigné)

 */

import { unitsManager } from './UnitsManager.js';
import { mainTemplate } from './components/MainTemplate.js';
import { createFiltersComponent } from './components/FiltersComponent.js';
import { createStatsComponent } from './components/StatsComponent.js';
import { createIngredientsTableComponent, createIngredientRowComponent } from './components/IngredientsTable.js';
import { createPurchaseModalComponent, createDetailsModalComponent, createSnapshotsModalComponent } from './components/ModalComponents.js';
import { HistoryManager, ActionFactory, createHistoryManagerComponent } from './components/HistoryManager.js';

export function createCollaborativeApp(config = {}) {
  const {
    listId = 'demo_list',
    appwriteConfig = {}
  } = config;

  const app = Vue.createApp({
    template: mainTemplate,
    delimiters: ["{{", "}}"],

    data() {
      return {
        // Configuration
        listId,
        appwriteConfig,
        unitsManager,

        // État de l'application
        isLoading: true,
        error: null,
        realtimeStatus: 'connecting',
        showUpdatePrompt: false,

        // Données Appwrite brutes
        event: null,              // Document depuis la collection 'evenements'
        ingredients: [],          // Documents depuis la collection 'ingredients'
        purchases: [],            // Documents depuis la collection 'purchase'

        // Données calculées pour l'UI
        ingredientsWithBalance: [], // Ingrédients avec solde calculé

        // Interface utilisateur
        searchQuery: '',
        selectedTypeFilter: '',
        selectedStatusFilter: '',
        sortField: 'ingredientName',
        sortDirection: 'asc',

        // Sélection et actions
        selectedIngredients: [],
        selectAllChecked: false,

        // Modals
        showPurchaseModal: false,
        showDetailsModal: false,
        editingIngredient: null,
        modalTitle: '',
        modalType: 'purchase', // 'purchase' ou 'stock'

        // Actions et historique
        isCreatingSnapshot: false,
        historyManager: null,
        actionFactory: null,

        // Appwrite instances
        appwrite: null,
        database: null,
        realtime: null,
      };
    },

    computed: {
      // Ingrédients filtrés et triés
      filteredIngredients() {
        let filtered = [...this.ingredientsWithBalance];

        // Filtre par recherche
        if (this.searchQuery.trim()) {
          const query = this.searchQuery.toLowerCase().trim();
          filtered = filtered.filter(ingredient =>
            ingredient.ingredientName.toLowerCase().includes(query)
          );
        }

        // Filtre par type
        if (this.selectedTypeFilter) {
          filtered = filtered.filter(ingredient =>
            ingredient.ingType === this.selectedTypeFilter
          );
        }

        // Filtre par statut
        if (this.selectedStatusFilter) {
          filtered = filtered.filter(ingredient => {
            const balance = this.getIngredientBalance(ingredient);

            switch (this.selectedStatusFilter) {
              case 'missing':
                return balance < 0;
              case 'complete':
                return balance >= 0;
              case 'partial':
                return balance < 0 && ingredient.hasPurchases;
              default:
                return true;
            }
          });
        }

        // Tri
        filtered.sort((a, b) => {
          let aVal, bVal;

          switch (this.sortField) {
            case 'ingredientName':
              aVal = a.ingredientName.toLowerCase();
              bVal = b.ingredientName.toLowerCase();
              break;
            case 'ingType':
              aVal = a.ingType;
              bVal = b.ingType;
              break;
            default:
              aVal = a[this.sortField];
              bVal = b[this.sortField];
          }

          if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
          if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
          return 0;
        });

        return filtered;
      },

      // Types disponibles
      availableTypes() {
        const types = [...new Set(this.ingredientsWithBalance.map(ing => ing.ingType))];
        return types.sort();
      },

      // Statistiques
      totalIngredients() {
        return this.ingredientsWithBalance.length;
      },

      missingIngredients() {
        return this.ingredientsWithBalance.filter(ing =>
          this.getIngredientBalance(ing) < 0
        ).length;
      },

      completeIngredients() {
        return this.ingredientsWithBalance.filter(ing =>
          this.getIngredientBalance(ing) >= 0
        ).length;
      },

      modifiedIngredients() {
        return this.ingredientsWithBalance.filter(ing => ing.isModified).length;
      },

      // Historique des actions
      canUndo() {
        return this.historyManager ? this.historyManager.canUndo() : false;
      },

      canRedo() {
        return this.historyManager ? this.historyManager.canRedo() : false;
      }
    },

    async mounted() {
      try {
        await this.initializeAppwrite();
        this.initializeHistory();
        await this.loadList();
        await this.setupRealtime();
      } catch (error) {
        console.error('Erreur lors de l\'initialisation:', error);
        this.error = 'Erreur lors du chargement de la liste collaborative.';
      } finally {
        this.isLoading = false;
      }
    },

    beforeUnmount() {
      if (this.realtime) {
        this.realtime.unsubscribe();
      }
    },

    methods: {
      // === INITIALISATION ===

      async initializeAppwrite() {
        try {
          if (!window.Appwrite) {
            throw new Error('SDK Appwrite non disponible. Vérifiez que le script est bien chargé.');
          }

          this.appwrite = new Appwrite.Client()
            .setEndpoint(this.appwriteConfig.endpoint)
            .setProject(this.appwriteConfig.projectId);

          this.database = new Appwrite.Databases(this.appwrite);

          console.log('[Collaborative App] Appwrite initialisé avec succès');
        } catch (error) {
          console.error('[Collaborative App] Erreur lors de l\'initialisation d\'Appwrite:', error);
          throw error;
        }
      },

      initializeHistory() {
        this.historyManager = new HistoryManager(20);
        this.actionFactory = new ActionFactory(this);
        console.log('[Collaborative App] Système d\'historique initialisé');
      },

      async loadList() {
        try {
          console.log(`[Collaborative App] Chargement de l'événement ${this.listId}...`);
          const currentHugoHash = window.__HUGO_PARAMS__.listContentHash;

          // Charger les métadonnées de l'événement
          this.event = await this.database.getDocument(
            this.appwriteConfig.databaseId,
            'ingredient_lists',
            this.listId
          );
          console.log('[Collaborative App] Métadonnées de l\'événement chargées:', this.event.name);

          // Vérifier si les données Hugo ont changé
          if (this.event.originalDataHash !== currentHugoHash) {
            console.warn('[Collaborative App] Le contenu Hugo a changé !');
            this.showUpdatePrompt = true;
          }

          // Charger les ingrédients liés à cet événement via la relation
          this.ingredients = await this.database.listDocuments(
            this.appwriteConfig.databaseId,
            'ingredients',
            [
              Appwrite.Query.equal('ingredientLists', this.listId),
              Appwrite.Query.limit(500)
            ]
          );

          // Charger les achats pour cet événement
          this.purchases = await this.database.listDocuments(
            this.appwriteConfig.databaseId,
            'purchase',
            [
              Appwrite.Query.equal('list', this.listId),
              Appwrite.Query.limit(1000)
            ]
          );

          // Calculer les soldes pour chaque ingrédient
          this.calculateIngredientsBalance();

          console.log(`[Collaborative App] ${this.ingredients.total} ingrédients et ${this.purchases.total} achats chargés`);

        } catch (error) {
          console.error('[Collaborative App] Erreur lors du chargement:', error);

          // Gestion d'erreurs spécifiques
          if (error.code === 404) {
            this.error = `Événement "${this.listId}" introuvable.`;
          } else if (error.code === 401) {
            this.error = 'Accès non autorisé. Veuillez vous authentifier.';
          } else {
            this.error = `Erreur de chargement: ${error.message}`;
          }

          throw error;
        }
      },

      // Calculer les soldes pour tous les ingrédients
      calculateIngredientsBalance() {
        this.ingredientsWithBalance = this.ingredients.documents.map(ingredient => {
          const ingredientPurchases = this.getIngredientPurchases(ingredient.$id);
          const totalNeed = this.calculateTotalNeed(ingredient);
          const totalPurchased = this.calculateTotalPurchases(ingredientPurchases);
          const totalStock = this.calculateTotalStock(ingredient);

          return {
            ...ingredient,
            totalNeed,
            totalPurchased,
            totalStock,
            balance: totalStock + totalPurchased - totalNeed,
            purchases: ingredientPurchases,
            hasPurchases: ingredientPurchases.length > 0,
            isModified: ingredientPurchases.length > 0
          };
        });
      },

      async setupRealtime() {
        try {
          console.log('[Collaborative App] Configuration du temps réel...');

          this.realtime = this.appwrite.subscribe([
            `databases.${this.appwriteConfig.databaseId}.collections.ingredients.documents`,
            `databases.${this.appwriteConfig.databaseId}.collections.purchase.documents`
          ], (response) => {
            console.log('[Collaborative App] Mise à jour temps réel reçue:', response.events);
            this.handleRealtimeUpdate(response);
          });

          this.realtimeStatus = 'connected';
          console.log('[Collaborative App] Temps réel configuré avec succès');
        } catch (error) {
          console.error('[Collaborative App] Erreur realtime:', error);
          this.realtimeStatus = 'disconnected';

          // Retry connection after 5 seconds
          console.log('[Collaborative App] Tentative de reconnexion dans 5 secondes...');
          setTimeout(() => this.setupRealtime(), 5000);
        }
      },

      handleRealtimeUpdate(response) {
        const { events, payload } = response;

        // Gérer les mises à jour d'ingrédients
        if (payload.ingredientLists === this.listId) {
          if (events.includes('databases.*.collections.*.documents.*.create')) {
            this.handleIngredientCreated(payload);
          } else if (events.includes('databases.*.collections.*.documents.*.update')) {
            this.handleIngredientUpdated(payload);
          } else if (events.includes('databases.*.collections.*.documents.*.delete')) {
            this.handleIngredientDeleted(payload);
          }
        }

        // Gérer les mises à jour d'achats
        if (payload.list === this.listId) {
          if (events.includes('databases.*.collections.*.documents.*.create')) {
            this.handlePurchaseCreated(payload);
          } else if (events.includes('databases.*.collections.*.documents.*.update')) {
            this.handlePurchaseUpdated(payload);
          } else if (events.includes('databases.*.collections.*.documents.*.delete')) {
            this.handlePurchaseDeleted(payload);
          }
        }
      },

      handleIngredientCreated(ingredient) {
        this.ingredients.documents.push(ingredient);
        this.calculateIngredientsBalance();
      },

      handleIngredientUpdated(ingredient) {
        const index = this.ingredients.documents.findIndex(ing => ing.$id === ingredient.$id);
        if (index !== -1) {
          this.ingredients.documents.splice(index, 1, ingredient);
          this.calculateIngredientsBalance();
        }
      },

      handleIngredientDeleted(ingredient) {
        const index = this.ingredients.documents.findIndex(ing => ing.$id === ingredient.$id);
        if (index !== -1) {
          this.ingredients.documents.splice(index, 1);
          this.calculateIngredientsBalance();
        }
      },

      handlePurchaseCreated(purchase) {
        this.purchases.documents.push(purchase);
        this.calculateIngredientsBalance();
      },

      handlePurchaseUpdated(purchase) {
        const index = this.purchases.documents.findIndex(p => p.$id === purchase.$id);
        if (index !== -1) {
          this.purchases.documents.splice(index, 1, purchase);
          this.calculateIngredientsBalance();
        }
      },

      handlePurchaseDeleted(purchase) {
        const index = this.purchases.documents.findIndex(p => p.$id === purchase.$id);
        if (index !== -1) {
          this.purchases.documents.splice(index, 1);
          this.calculateIngredientsBalance();
        }
      },

      // === MÉTHODES DE DONNÉES APPWRITE ===

      // Récupérer les achats pour un ingrédient spécifique
      getIngredientPurchases(ingredientId) {
        return this.purchases.documents.filter(purchase =>
          purchase.listIngredient === ingredientId
        );
      },

      // === CALCULS ET FORMATAGE ===

      getIngredientBalance(ingredientWithBalance) {
        return ingredientWithBalance.balance;
      },

      // Calculer le besoin total depuis les données structurées
      calculateTotalNeed(ingredient) {
        if (!ingredient.totalNeededConsolidated) return 0;

        try {
          const consolidated = JSON.parse(ingredient.totalNeededConsolidated);
          if (!Array.isArray(consolidated)) return 0;

          // Prioriser les poids (gr) puis volumes (ml) puis autres
          const weightItem = consolidated.find(item => item.category === 'weight');
          const volumeItem = consolidated.find(item => item.category === 'volume');
          const otherItem = consolidated.find(item => item.category === 'other');

          if (weightItem) return weightItem.value;
          if (volumeItem) return volumeItem.value;
          if (otherItem) return otherItem.value;

        } catch (error) {
          console.warn('[Collaborative App] Erreur parsing totalNeededConsolidated:', error);
        }

        return 0;
      },

      // Calculer le stock total depuis les données stockReel
      calculateTotalStock(ingredient) {
        if (!ingredient.stockReel) return 0;

        try {
          const stockData = JSON.parse(ingredient.stockReel);
          if (!Array.isArray(stockData)) return 0;

          const quantities = stockData.map(stockItem => ({
            value: stockItem.value || 0,
            unit: stockItem.unit || '',
            ingredientName: ingredient.ingredientName
          }));

          const consolidated = this.unitsManager.consolidateQuantities(quantities);
          return consolidated.length > 0 ? consolidated[0].value : 0;

        } catch (error) {
          console.warn('[Collaborative App] Erreur parsing stock:', error);
        }

        return 0;
      },

      // Calculer les achats totaux depuis la collection purchase
      calculateTotalPurchases(purchases) {
        if (!purchases.length) return 0;

        const quantities = purchases.map(purchase => ({
          value: parseFloat(purchase.quantity) || 0,
          unit: purchase.unit || '',
          ingredientName: purchase.ingredientName || 'Inconnu'
        }));

        const consolidated = this.unitsManager.consolidateQuantities(quantities);
        return consolidated.length > 0 ? consolidated[0].value : 0;
      },

      // Formate le besoin total depuis les données structurées
      formatTotalNeed(ingredient) {
        if (!ingredient.totalNeededRaw) return '0';

        try {
          const rawData = JSON.parse(ingredient.totalNeededRaw);
          if (!Array.isArray(rawData)) return '0';

          const quantities = rawData.map(item => ({
            value: item.value || 0,
            unit: item.unit || '',
            ingredientName: ingredient.ingredientName
          }));

          const consolidated = this.unitsManager.consolidateQuantities(quantities);
          return this.formatConsolidatedQuantities(consolidated);
        } catch (error) {
          console.warn('[Collaborative App] Erreur formatage totalNeed:', error);
          return '0';
        }
      },

      // Formatage alternatif qui montre les quantités par catégorie
      formatTotalNeedByCategory(ingredient) {
        if (!ingredient.totalNeededRaw) return '0';

        try {
          const rawData = JSON.parse(ingredient.totalNeededRaw);
          if (!Array.isArray(rawData)) return '0';

          return rawData
            .map(item => `${this.unitsManager.roundToAppropriateDecimals(item.value, item.unit)} ${item.unit}`)
            .join(' + ');
        } catch (error) {
          console.warn('[Collaborative App] Erreur formatage totalNeedByCategory:', error);
          return '0';
        }
      },

      // Formate le stock depuis les données stockReel
      formatStock(ingredient) {
        if (!ingredient.stockReel) return '0';

        try {
          const stockData = JSON.parse(ingredient.stockReel);
          if (!Array.isArray(stockData)) return '0';

          const quantities = stockData.map(stockItem => ({
            value: stockItem.value || 0,
            unit: stockItem.unit || '',
            ingredientName: ingredient.ingredientName
          }));

          const consolidated = this.unitsManager.consolidateQuantities(quantities);
          return this.formatConsolidatedQuantities(consolidated);
        } catch (error) {
          console.warn('[Collaborative App] Erreur formatage stock:', error);
          return '0';
        }
      },

      // Formate les achats depuis la collection purchase
      formatPurchases(ingredientWithBalance) {
        if (!ingredientWithBalance.purchases.length) return '0';

        const quantities = ingredientWithBalance.purchases.map(purchase => ({
          value: parseFloat(purchase.quantity) || 0,
          unit: purchase.unit || '',
          ingredientName: ingredientWithBalance.ingredientName
        }));

        const consolidated = this.unitsManager.consolidateQuantities(quantities);
        return this.formatConsolidatedQuantities(consolidated);
      },

      // Formate la balance en utilisant l'unité principale de l'ingrédient
      formatBalance(ingredientWithBalance) {
        const balance = this.getIngredientBalance(ingredientWithBalance);
        const unit = this.getMainUnit(ingredientWithBalance);
        return `${this.unitsManager.roundToAppropriateDecimals(balance, unit)} ${unit}`;
      },

      // Formate un tableau de quantités consolidées en chaîne lisible
      formatConsolidatedQuantities(consolidated) {
        if (!consolidated || consolidated.length === 0) return '0';
        return consolidated.map(item => item.formatted).join(' + ');
      },

      // Récupère l'unité principale depuis les données structurées
      getMainUnit(ingredient) {
        // D'abord essayer depuis les données structurées
        if (ingredient.totalNeededConsolidated) {
          try {
            const consolidated = JSON.parse(ingredient.totalNeededConsolidated);
            if (Array.isArray(consolidated)) {
              const weightItem = consolidated.find(item => item.category === 'weight');
              const volumeItem = consolidated.find(item => item.category === 'volume');
              const otherItem = consolidated.find(item => item.category === 'other');

              if (weightItem) return weightItem.unit;
              if (volumeItem) return volumeItem.unit;
              if (otherItem) return otherItem.unit;
            }
          } catch (error) {
            console.warn('[Collaborative App] Erreur parsing unité principale:', error);
          }
        }

        // Fallback sur les occurrences de recettes
        if (ingredient.recipeOccurrences && ingredient.recipeOccurrences.length > 0) {
          return ingredient.recipeOccurrences[0].unit || '';
        }

        return '';
      },

      // Vérifie si l'ingrédient a des achats enregistrés
      hasPurchases(ingredientWithBalance) {
        return ingredientWithBalance.hasPurchases;
      },

      // Récupère la liste des magasins depuis les achats
      getStoresList(ingredientWithBalance) {
        if (!ingredientWithBalance.purchases.length) return '-';
        const stores = [...new Set(
          ingredientWithBalance.purchases
            .map(p => p.store)
            .filter(store => store)
        )];
        return stores.join(', ') || '-';
      },

      // Récupère la liste des responsables depuis les achats
      getResponsibleList(ingredientWithBalance) {
        if (!ingredientWithBalance.purchases.length) return '-';
        const people = [...new Set(
          ingredientWithBalance.purchases
            .map(p => p.who)
            .filter(who => who)
        )];
        return people.join(', ') || '-';
      },

      // Formate le type d'ingrédient pour l'affichage
      formatTypeShort(type) {
        const typeMap = {
          'frais': 'Produits Frais',
          'legumesFrais': 'Fruits et Légumes',
          'legumesNonFrais': 'Conserves',
          'lof': 'LOF',
          'sucres': 'Sucrés',
          'epices': 'Épices',
          'sec': 'Produits Secs',
          'animaux': 'Viandes',
          'autres': 'Autres'
        };
        return typeMap[type] || type;
      },

      // === ACTIONS UTILISATEUR ===

      sortBy(field) {
        if (this.sortField === field) {
          this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
          this.sortField = field;
          this.sortDirection = 'asc';
        }
      },

      clearFilters() {
        this.searchQuery = '';
        this.selectedTypeFilter = '';
        this.selectedStatusFilter = '';
      },

      toggleSelectAll() {
        if (this.selectAllChecked) {
          this.selectedIngredients = this.filteredIngredients.map(ing => ing.$id);
        } else {
          this.selectedIngredients = [];
        }
      },

      clearSelection() {
        this.selectedIngredients = [];
        this.selectAllChecked = false;
      },

  

      editStock(ingredient) {
        this.editingIngredient = ingredient;
        this.modalType = 'stock';
        this.modalTitle = `Modifier le stock - ${ingredient.ingredientName}`;
        this.showPurchaseModal = true;
      },

      editPurchases(ingredient) {
        this.editingIngredient = ingredient;
        this.modalType = 'purchase';
        this.modalTitle = `Ajouter un achat - ${ingredient.ingredientName}`;
        this.showPurchaseModal = true;
      },

      showIngredientDetails(ingredient) {
        this.editingIngredient = ingredient;
        this.showDetailsModal = true;
      },

      mergeSelectedIngredients() {
        if (this.selectedIngredients.length < 2) {
          alert('Sélectionnez au moins 2 ingrédients à fusionner.');
          return;
        }
        // TODO: Implémenter la fusion d'ingrédients
        console.log('Fusionner les ingrédients:', this.selectedIngredients);
      },

      // === SNAPSHOTS ===

      async createSnapshot() {
        this.isCreatingSnapshot = true;

        try {
          const snapshotData = {
            ingredients: this.ingredients,
            metadata: {
              totalIngredients: this.totalIngredients,
              createdAt: new Date().toISOString()
            }
          };

          await this.database.createDocument(
            this.appwriteConfig.databaseId,
            'list_snapshots',
            'unique()',
            {
              listId: this.listId,
              snapshotData: JSON.stringify(snapshotData),
              createdBy: 'current_user', // TODO: Récupérer l'utilisateur connecté
              description: `Snapshot automatique - ${new Date().toLocaleString()}`
            }
          );

          alert('Point de sauvegarde créé avec succès !');

        } catch (error) {
          console.error('Erreur lors de la création du snapshot:', error);
          alert('Erreur lors de la création du point de sauvegarde.');
        } finally {
          this.isCreatingSnapshot = false;
        }
      },

      exportList() {
        // TODO: Implémenter l'export
        console.log('Exporter la liste');
      },

      // === HISTORIQUE DES ACTIONS ===

      async undoLastAction() {
        if (!this.historyManager) return;
        await this.historyManager.undo();
      },

      async redoLastAction() {
        if (!this.historyManager) return;
        await this.historyManager.redo();
      },

      // Méthodes utilitaires pour l'ActionFactory
      async addPurchase(ingredientId, purchaseData) {
        const ingredient = this.ingredients.find(ing => ing.$id === ingredientId);
        if (!ingredient) {
          throw new Error('Ingrédient non trouvé');
        }

        const updatedTrackingData = { ...ingredient.trackingData };
        if (!updatedTrackingData.purchases) updatedTrackingData.purchases = [];
        updatedTrackingData.purchases.push(purchaseData);

        await this.database.updateDocument(
          this.appwriteConfig.databaseId,
          'ingredients',
          ingredient.$id,
          {
            trackingData: JSON.stringify(updatedTrackingData),
            isModified: true
          }
        );

        ingredient.trackingData = updatedTrackingData;
        ingredient.isModified = true;
      },

      async removePurchase(ingredientId, purchaseId) {
        const ingredient = this.ingredients.find(ing => ing.$id === ingredientId);
        if (!ingredient) {
          throw new Error('Ingrédient non trouvé');
        }

        const updatedTrackingData = { ...ingredient.trackingData };
        if (updatedTrackingData.purchases) {
          updatedTrackingData.purchases = updatedTrackingData.purchases.filter(p => p.id !== purchaseId);
        }

        await this.database.updateDocument(
          this.appwriteConfig.databaseId,
          'ingredients',
          ingredient.$id,
          {
            trackingData: JSON.stringify(updatedTrackingData),
            isModified: true
          }
        );

        ingredient.trackingData = updatedTrackingData;
        ingredient.isModified = true;
      },

      async updateStock(ingredientId, newStock) {
        const ingredient = this.ingredients.find(ing => ing.$id === ingredientId);
        if (!ingredient) {
          throw new Error('Ingrédient non trouvé');
        }

        const updatedTrackingData = { ...ingredient.trackingData };
        updatedTrackingData.stock = newStock;

        await this.database.updateDocument(
          this.appwriteConfig.databaseId,
          'ingredients',
          ingredient.$id,
          {
            trackingData: JSON.stringify(updatedTrackingData),
            isModified: true
          }
        );

        ingredient.trackingData = updatedTrackingData;
        ingredient.isModified = true;
      },

      // === GESTION DES COMPOSANTS ===

      updateSelectedIngredients(ingredientId) {
        const index = this.selectedIngredients.indexOf(ingredientId);
        if (index > -1) {
          this.selectedIngredients.splice(index, 1);
        } else {
          this.selectedIngredients.push(ingredientId);
        }
      },

      // === GESTION DES MODALS ===

      closePurchaseModal() {
        this.showPurchaseModal = false;
        this.editingIngredient = null;
      },

      closeDetailsModal() {
        this.showDetailsModal = false;
        this.editingIngredient = null;
      },

      async savePurchaseData({ type, entry, index }) {
        if (!this.editingIngredient) return;

        try {
          const ingredient = this.editingIngredient;

          if (type === 'purchase') {
            // Créer un nouveau document dans la collection purchase
            const purchaseData = {
              list: this.listId,
              listIngredient: ingredient.$id,
              quantity: entry.value.toString(),
              unit: entry.unit,
              who: entry.who || '',
              store: entry.store || '',
              notes: entry.notes || '',
              price: entry.price || 0
            };

            await this.database.createDocument(
              this.appwriteConfig.databaseId,
              'purchase',
              'unique()',
              purchaseData
            );

            // Mettre à jour les données locales
            this.purchases.documents.push({
              $id: 'temp_' + Date.now(),
              ...purchaseData
            });

          } else if (type === 'stock') {
            // Mettre à jour le stock dans l'ingrédient
            const stockData = JSON.stringify([entry]);

            await this.database.updateDocument(
              this.appwriteConfig.databaseId,
              'ingredients',
              ingredient.$id,
              { stockReel: stockData }
            );

            // Mettre à jour les données locales
            const localIngredient = this.ingredients.documents.find(ing => ing.$id === ingredient.$id);
            if (localIngredient) {
              localIngredient.stockReel = stockData;
            }

          } else if (type === 'remove-purchase') {
            // Supprimer un achat
            if (index >= 0 && index < this.purchases.documents.length) {
              const purchaseToRemove = this.purchases.documents[index];

              await this.database.deleteDocument(
                this.appwriteConfig.databaseId,
                'purchase',
                purchaseToRemove.$id
              );

              // Mettre à jour les données locales
              this.purchases.documents.splice(index, 1);
            }

          } else if (type === 'remove-stock') {
            // Supprimer le stock
            await this.database.updateDocument(
              this.appwriteConfig.databaseId,
              'ingredients',
              ingredient.$id,
              { stockReel: '[]' }
            );

            // Mettre à jour les données locales
            const localIngredient = this.ingredients.documents.find(ing => ing.$id === ingredient.$id);
            if (localIngredient) {
              localIngredient.stockReel = '[]';
            }
          }

          // Recalculer les soldes
          this.calculateIngredientsBalance();

          console.log(`[Collaborative App] Données ${type} mises à jour pour ${ingredient.ingredientName}`);

          // Fermer le modal
          this.closePurchaseModal();

        } catch (error) {
          console.error('[Collaborative App] Erreur lors de la sauvegarde:', error);
          alert(`Erreur lors de la sauvegarde: ${error.message}`);
        }
      },

      openPurchaseModalFromDetails() {
        this.showDetailsModal = false;
        this.modalType = 'purchase';
        this.showPurchaseModal = true;
      },

      openStockModalFromDetails() {
        this.showDetailsModal = false;
        this.modalType = 'stock';
        this.showPurchaseModal = true;
      }
    }
  });

  // Enregistrer les composants
  app.component('collaborative-filters', createFiltersComponent());
  app.component('collaborative-stats', createStatsComponent());
  app.component('ingredients-table', createIngredientsTableComponent());
  app.component('ingredient-row', createIngredientRowComponent());
  app.component('purchase-modal', createPurchaseModalComponent(unitsManager));
  app.component('details-modal', createDetailsModalComponent(unitsManager));
  app.component('snapshots-modal', createSnapshotsModalComponent());
  app.component('history-manager', createHistoryManagerComponent());

  // Composants de sélection (simple pour l'instant)
  app.component('selection-actions', {
    template: `
      <div class="row mt-4">
        <div class="col-12">
          <div class="alert alert-info d-flex align-items-center justify-content-between selection-alert">
            <div>
              <strong>{{ selectedCount }}</strong> ingrédient(s) sélectionné(s)
            </div>
            <div>
              <button class="btn btn-warning btn-sm me-2" @click="$emit('merge')">
                🔗 Fusionner
              </button>
              <button class="btn btn-secondary btn-sm" @click="$emit('clear')">
                ✖️ Désélectionner
              </button>
            </div>
          </div>
        </div>
      </div>
    `,
    props: ['selectedCount'],
    emits: ['merge', 'clear']
  });



  return app;
}
