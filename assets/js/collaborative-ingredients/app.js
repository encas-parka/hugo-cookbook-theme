/**
 * app.js
 * Application Vue.js collaborative pour la gestion des listes d'ingrédients
 * Utilise Appwrite pour la persistance et la synchronisation temps réel
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

        // Données de la liste
        currentList: null,
        ingredients: [],
        originalIngredients: [],

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
        showSnapshotsModal: false,
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
        let filtered = [...this.ingredients];

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
            const isComplete = ingredient.trackingData?.status?.ok || false;

            switch (this.selectedStatusFilter) {
              case 'missing':
                return balance < 0 && !isComplete;
              case 'complete':
                return isComplete || balance >= 0;
              case 'partial':
                return balance < 0 && !isComplete && this.hasPurchases(ingredient);
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
        const types = [...new Set(this.ingredients.map(ing => ing.ingType))];
        return types.sort();
      },

      // Statistiques
      totalIngredients() {
        return this.ingredients.length;
      },

      missingIngredients() {
        return this.ingredients.filter(ing =>
          this.getIngredientBalance(ing) < 0 && !ing.trackingData?.status?.ok
        ).length;
      },

      completeIngredients() {
        return this.ingredients.filter(ing =>
          ing.trackingData?.status?.ok || this.getIngredientBalance(ing) >= 0
        ).length;
      },

      modifiedIngredients() {
        return this.ingredients.filter(ing => ing.isModified).length;
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
          console.log(`[Collaborative App] Chargement de la liste ${this.listId}...`);
          
          // Charger les métadonnées de la liste
          const listDoc = await this.database.getDocument(
            this.appwriteConfig.databaseId,
            'ingredient_lists',
            this.listId
          );
          this.currentList = listDoc;
          console.log('[Collaborative App] Métadonnées de la liste chargées:', listDoc.name);

          // Charger les ingrédients
          const ingredientsResponse = await this.database.listDocuments(
            this.appwriteConfig.databaseId,
            'ingredients',
            [
              Appwrite.Query.equal('listId', this.listId),
              Appwrite.Query.limit(500)
            ]
          );

          this.ingredients = ingredientsResponse.documents.map(doc => ({
            ...doc,
            originalData: JSON.parse(doc.originalData),
            trackingData: JSON.parse(doc.trackingData)
          }));

          this.originalIngredients = JSON.parse(JSON.stringify(this.ingredients));
          
          console.log(`[Collaborative App] ${this.ingredients.length} ingrédients chargés avec succès`);

        } catch (error) {
          console.error('[Collaborative App] Erreur lors du chargement:', error);
          
          // Gestion d'erreurs spécifiques
          if (error.code === 404) {
            this.error = `Liste "${this.listId}" introuvable. Vérifiez que la liste existe ou créez-en une nouvelle.`;
          } else if (error.code === 401) {
            this.error = 'Accès non autorisé. Veuillez vous authentifier.';
          } else {
            this.error = `Erreur de chargement: ${error.message}`;
          }
          
          throw error;
        }
      },

      async setupRealtime() {
        try {
          console.log('[Collaborative App] Configuration du temps réel...');
          
          this.realtime = this.appwrite.subscribe([
            `databases.${this.appwriteConfig.databaseId}.collections.ingredients.documents`
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

        if (!payload.listId || payload.listId !== this.listId) {
          return; // Pas pour notre liste
        }

        if (events.includes('databases.*.collections.*.documents.*.create')) {
          this.handleIngredientCreated(payload);
        } else if (events.includes('databases.*.collections.*.documents.*.update')) {
          this.handleIngredientUpdated(payload);
        } else if (events.includes('databases.*.collections.*.documents.*.delete')) {
          this.handleIngredientDeleted(payload);
        }
      },

      handleIngredientCreated(ingredient) {
        const parsedIngredient = {
          ...ingredient,
          originalData: JSON.parse(ingredient.originalData),
          trackingData: JSON.parse(ingredient.trackingData)
        };
        this.ingredients.push(parsedIngredient);
      },

      handleIngredientUpdated(ingredient) {
        const index = this.ingredients.findIndex(ing => ing.$id === ingredient.$id);
        if (index !== -1) {
          const parsedIngredient = {
            ...ingredient,
            originalData: JSON.parse(ingredient.originalData),
            trackingData: JSON.parse(ingredient.trackingData)
          };
          this.ingredients.splice(index, 1, parsedIngredient);
        }
      },

      handleIngredientDeleted(ingredient) {
        const index = this.ingredients.findIndex(ing => ing.$id === ingredient.$id);
        if (index !== -1) {
          this.ingredients.splice(index, 1);
        }
      },

      // === CALCULS ET FORMATAGE ===

      getIngredientBalance(ingredient) {
        const totalNeed = this.calculateTotalNeed(ingredient);
        const totalStock = this.calculateTotalStock(ingredient);
        const totalPurchased = this.calculateTotalPurchased(ingredient);
        return totalStock + totalPurchased - totalNeed;
      },

      calculateTotalNeed(ingredient) {
        if (!ingredient.originalData?.recipeOccurrences) return 0;

        // Utiliser UnitsManager pour consolider les quantités
        const quantities = ingredient.originalData.recipeOccurrences.map(occurrence => ({
          value: occurrence.quantity || 0,
          unit: occurrence.unit || '',
          ingredientName: ingredient.ingredientName
        }));

        const consolidated = this.unitsManager.consolidateQuantities(quantities);

        // Retourner la première quantité consolidée (principale)
        return consolidated.length > 0 ? consolidated[0].value : 0;
      },

      calculateTotalStock(ingredient) {
        if (!ingredient.trackingData?.stock?.effective?.length) return 0;

        const quantities = ingredient.trackingData.stock.effective.map(stockItem => ({
          value: stockItem.value || 0,
          unit: stockItem.unit || '',
          ingredientName: ingredient.ingredientName
        }));

        const consolidated = this.unitsManager.consolidateQuantities(quantities);
        return consolidated.length > 0 ? consolidated[0].value : 0;
      },

      calculateTotalPurchased(ingredient) {
        if (!ingredient.trackingData?.purchases?.length) return 0;

        const quantities = ingredient.trackingData.purchases.map(purchase => ({
          value: purchase.value || 0,
          unit: purchase.unit || '',
          ingredientName: ingredient.ingredientName
        }));

        const consolidated = this.unitsManager.consolidateQuantities(quantities);
        return consolidated.length > 0 ? consolidated[0].value : 0;
      },

      formatTotalNeed(ingredient) {
        if (!ingredient.originalData?.recipeOccurrences?.length) return '0';

        const quantities = ingredient.originalData.recipeOccurrences.map(occurrence => ({
          value: occurrence.quantity || 0,
          unit: occurrence.unit || '',
          ingredientName: ingredient.ingredientName
        }));

        const consolidated = this.unitsManager.consolidateQuantities(quantities);
        return this.formatConsolidatedQuantities(consolidated);
      },

      formatStock(ingredient) {
        if (!ingredient.trackingData?.stock?.effective?.length) return '0';

        const quantities = ingredient.trackingData.stock.effective.map(stockItem => ({
          value: stockItem.value || 0,
          unit: stockItem.unit || '',
          ingredientName: ingredient.ingredientName
        }));

        const consolidated = this.unitsManager.consolidateQuantities(quantities);
        return this.formatConsolidatedQuantities(consolidated);
      },

      formatPurchases(ingredient) {
        if (!ingredient.trackingData?.purchases?.length) return '0';

        const quantities = ingredient.trackingData.purchases.map(purchase => ({
          value: purchase.value || 0,
          unit: purchase.unit || '',
          ingredientName: ingredient.ingredientName
        }));

        const consolidated = this.unitsManager.consolidateQuantities(quantities);
        return this.formatConsolidatedQuantities(consolidated);
      },

      formatBalance(ingredient) {
        const balance = this.getIngredientBalance(ingredient);
        const unit = this.getMainUnit(ingredient);
        return `${this.unitsManager.roundToAppropriateDecimals(balance, unit)} ${unit}`;
      },

      formatConsolidatedQuantities(consolidated) {
        if (!consolidated || consolidated.length === 0) return '0';

        return consolidated.map(item => item.formatted).join(' + ');
      },

      getMainUnit(ingredient) {
        if (!ingredient.originalData?.recipeOccurrences?.length) return '';
        return ingredient.originalData.recipeOccurrences[0].unit || '';
      },

      hasPurchases(ingredient) {
        return ingredient.trackingData?.purchases?.length > 0;
      },

      getStoresList(ingredient) {
        if (!ingredient.trackingData?.purchases?.length) return '-';
        const stores = [...new Set(
          ingredient.trackingData.purchases
            .map(p => p.store)
            .filter(store => store)
        )];
        return stores.join(', ') || '-';
      },

      getResponsibleList(ingredient) {
        if (!ingredient.trackingData?.purchases?.length) return '-';
        const people = [...new Set(
          ingredient.trackingData.purchases
            .map(p => p.who)
            .filter(who => who)
        )];
        return people.join(', ') || '-';
      },

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

      async toggleIngredientStatus(ingredient) {
        const newStatus = !ingredient.trackingData?.status?.ok;

        // Créer l'action pour l'historique
        const action = this.actionFactory.createToggleStatusAction(ingredient, newStatus);

        try {
          // Exécuter la modification
          await this.updateIngredientStatus(ingredient.$id, newStatus);
          
          // Ajouter à l'historique
          this.historyManager.addAction(action);

        } catch (error) {
          console.error('[Collaborative App] Erreur lors de la mise à jour du statut:', error);
          alert(`Impossible de mettre à jour le statut de ${ingredient.ingredientName}: ${error.message}`);
        }
      },

      async updateIngredientStatus(ingredientId, newStatus) {
        const ingredient = this.ingredients.find(ing => ing.$id === ingredientId);
        if (!ingredient) {
          throw new Error('Ingrédient non trouvé');
        }

        const updatedTrackingData = {
          ...ingredient.trackingData,
          status: { ok: newStatus }
        };

        await this.database.updateDocument(
          this.appwriteConfig.databaseId,
          'ingredients',
          ingredient.$id,
          {
            trackingData: JSON.stringify(updatedTrackingData),
            isModified: true
          }
        );

        // Mise à jour locale
        ingredient.trackingData.status = { ok: newStatus };
        ingredient.isModified = true;

        console.log(`[Collaborative App] Statut de ${ingredient.ingredientName} mis à jour: ${newStatus ? 'Complet' : 'Incomplet'}`);
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
          let updatedTrackingData = { ...ingredient.trackingData };

          if (type === 'purchase') {
            if (!updatedTrackingData.purchases) updatedTrackingData.purchases = [];
            updatedTrackingData.purchases.push(entry);
          } else if (type === 'stock') {
            if (!updatedTrackingData.stock) updatedTrackingData.stock = { effective: [] };
            // Remplacer le stock existant par le nouveau
            updatedTrackingData.stock.effective = [entry];
          } else if (type === 'remove-purchase') {
            updatedTrackingData.purchases.splice(index, 1);
          } else if (type === 'remove-stock') {
            updatedTrackingData.stock.effective.splice(index, 1);
          }

          // Sauvegarder en base
          await this.database.updateDocument(
            this.appwriteConfig.databaseId,
            'ingredients',
            ingredient.$id,
            {
              trackingData: JSON.stringify(updatedTrackingData),
              isModified: true
            }
          );

          // Mise à jour locale
          ingredient.trackingData = updatedTrackingData;
          ingredient.isModified = true;

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
