/**
 * Modal Mixin
 * Mixin Vue pour la gestion de l'état et des interactions du modal unifié
 * Compatible avec l'architecture Options API existante
 */

import { AppwriteDataService } from './AppwriteDataService.js';

export const ModalMixin = {
  data() {
    return {
      // État du modal
      modalState: {
        isOpen: false,
        currentTab: 'recettes', // 'recettes', 'achats', 'stock', 'volontaires', 'magasins'
        editingIngredient: null,
        isSaving: false,
        hasUnsavedChanges: false
      },

      // Données d'édition pour l'onglet achats
      editingPurchases: [],
      newPurchase: {
        quantity: null,
        unit: '',
        store: '',
        who: '',
        price: null,
        notes: ''
      },

      // Données d'édition pour l'onglet stock
      editingStockEntries: [],
      newStock: {
        quantity: null,
        unit: '',
        dateTime: new Date().toISOString().slice(0, 16),
        notes: ''
      },

      // Données d'édition pour l'onglet volontaires
      editingVolunteers: [],
      deletedVolunteers: new Set(),
      newVolunteer: '',

      // Données d'édition pour l'onglet magasins
      editingStores: [],
      deletedStores: new Set(),
      newStore: '',

      // Confirmation de suppression
      deleteConfirmation: {
        show: false,
        message: '',
        itemType: '',
        itemId: null,
        progress: 0,
        progressInterval: null
      }
    };
  },

  computed: {
    /**
     * Vérifie si le formulaire d'achat est valide
     */
    isPurchaseFormValid() {
      return this.newPurchase.quantity && this.newPurchase.unit;
    },

    /**
     * Vérifie si le formulaire de stock est valide
     */
    isStockFormValid() {
      return this.newStock.quantity && this.newStock.unit && this.newStock.dateTime;
    },

    /**
     * Retourne les unités suggérées basées sur l'ingrédient en cours d'édition
     */
    suggestedUnits() {
      if (!this.modalState.editingIngredient?.calculations?.balancePerUnit) return [];
      return this.modalState.editingIngredient.calculations.balancePerUnit.map(item => item.unit);
    },

   },

  methods: {
    /**
     * Initialise le service modal
     * @param {Object} appwriteConfig - Configuration Appwrite
     */
    initModalService(appwriteConfig) {
      this.modalService = new AppwriteDataService(appwriteConfig);
    },

    /**
     * Ouvre le modal unifié pour un ingrédient
     * @param {Object} ingredient - Ingrédient à éditer
     */
    openUnifiedModal(ingredient, tab) {
      console.log('Opening unified modal for ingredient:', ingredient, tab);

      // D'abord ouvrir le modal pour créer l'état réactif
      this.modalState.isOpen = true;
      this.modalState.hasUnsavedChanges = false;

      // Ensuite définir l'ingrédient et l'onglet (Vue garantit la réactivité)
      this.$nextTick(() => {
        this.modalState.editingIngredient = ingredient;
        this.modalState.currentTab = tab || 'recettes';

        // Charger les données APRÈS que l'ingrédient soit défini
        this.loadIngredientData();


      });
    },

    /**
     * Ferme le modal unifié
     */
    closeUnifiedModal() {
      if (this.modalState.hasUnsavedChanges) {
        if (!confirm('Des modifications n\'ont pas été sauvegardées. Voulez-vous vraiment fermer ?')) {
          return;
        }
      }
      this.modalState.isOpen = false;
      this.resetModalData();
    },

    /**
     * Charge les données de l'ingrédient dans les formulaires d'édition
     */
    loadIngredientData() {
      const ingredient = this.modalState.editingIngredient;
      if (!ingredient) {
        console.warn('ModalMixin: Aucun ingrédient à charger');
        return;
      }

      // Charger les achats existants
      this.editingPurchases = (ingredient.purchases || []).map(p => ({
        ...p,
        isEditing: false,
        isDirty: false,
        isNew: false
      }));

      // Charger les stocks existants
      let stockEntries = [];
      if (ingredient.stockReel) {
        try {
          if (typeof ingredient.stockReel === 'string') {
          } else {
            stockEntries = ingredient.stockReel;
          }
        } catch (error) {
          console.error('Erreur parsing stockReel:', error);
          stockEntries = [];
        }
      }
      this.editingStockEntries = stockEntries.map(s => ({
        ...s,
        isEditing: false,
        isDirty: false,
        isNew: false,
        $id: 'stock-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9)
      }));

      // Charger les volontaires
      this.editingVolunteers = [...(ingredient.who || [])];
      this.deletedVolunteers.clear();

      // Charger les magasins
      this.editingStores = [...(ingredient.store || [])];
      this.deletedStores.clear();
    },

    /**
     * Réinitialise toutes les données du modal
     */
    resetModalData() {
      this.modalState.editingIngredient = null;
      this.editingPurchases = [];
      this.editingStockEntries = [];
      this.editingVolunteers = [];
      this.editingStores = [];
      this.deletedVolunteers.clear();
      this.deletedStores.clear();
      this.resetForms();
      this.cancelDelete();
    },

    /**
     * Réinitialise les formulaires
     */
    resetForms() {
      this.newPurchase = {
        quantity: null,
        unit: '',
        store: '',
        who: '',
        price: null,
        notes: ''
      };

      this.newStock = {
        quantity: null,
        unit: '',
        dateTime: new Date().toISOString().slice(0, 16),
        notes: ''
      };

      this.newVolunteer = '';
      this.newStore = '';
    },

    /**
     * Marque le modal comme ayant des modifications non sauvegardées
     */
    markAsDirty() {
      this.modalState.hasUnsavedChanges = true;
    },

    // === GESTION DES ACHATS ===

    /**
     * Ajoute un nouvel achat
     */
    addPurchase() {
      if (!this.modalService.validatePurchase(this.newPurchase)) {
        this.showErrorToast('Veuillez remplir tous les champs obligatoires');
        return;
      }

      const purchase = this.modalService.createPurchaseObject(this.newPurchase);
      this.editingPurchases.push(purchase);
      this.resetForms();
      this.markAsDirty();
    },

    /**
     * Active l'édition d'un achat
     */
    editPurchase(purchase) {
      purchase.isEditing = true;
    },

    /**
     * Sauvegarde les modifications d'un achat
     */
    savePurchaseEdit(purchase) {
      purchase.isEditing = false;
      purchase.isDirty = true;
      this.markAsDirty();
    },

    /**
     * Supprime un achat
     */
    deletePurchase(purchase) {
      this.showDeleteConfirmation(
        `Voulez-vous vraiment supprimer cet achat de ${purchase.quantity} ${purchase.unit} ?`,
        'purchase',
        purchase
      );
    },

    // === GESTION DU STOCK ===

    /**
     * Ajoute une nouvelle entrée de stock
     */
    addStock() {
      if (!this.modalService.validateStock(this.newStock)) {
        this.showErrorToast('Veuillez remplir tous les champs obligatoires');
        return;
      }

      const stock = this.modalService.createStockObject(this.newStock);
      this.editingStockEntries.push(stock);
      this.resetForms();
      this.markAsDirty();
    },

    /**
     * Active l'édition d'une entrée de stock
     */
    editStock(stock) {
      stock.isEditing = true;
    },

    /**
     * Sauvegarde les modifications d'une entrée de stock
     */
    saveStockEdit(stock) {
      stock.isEditing = false;
      stock.isDirty = true;
      this.markAsDirty();
    },

    /**
     * Supprime une entrée de stock
     */
    deleteStock(stock) {
      this.showDeleteConfirmation(
        `Voulez-vous vraiment supprimer ce stock de ${stock.quantity} ${stock.unit} ?`,
        'stock',
        stock
      );
    },

    // === GESTION DES VOLONTAIRES ===

    /**
     * Ajoute un volontaire
     */
    addVolunteer() {
      if (!this.newVolunteer.trim()) return;

      const volunteer = this.newVolunteer.trim();
      if (!this.editingVolunteers.includes(volunteer)) {
        this.editingVolunteers.push(volunteer);
        this.newVolunteer = '';
        this.markAsDirty();
      }
    },

    /**
     * Bascule l'état de suppression d'un volontaire
     */
    toggleVolunteer(volunteer) {
      if (this.deletedVolunteers.has(volunteer)) {
        this.deletedVolunteers.delete(volunteer);
      } else {
        this.deletedVolunteers.add(volunteer);
      }
      this.markAsDirty();
    },

    /**
     * Vérifie si un volontaire est marqué comme supprimé
     */
    isVolunteerDeleted(volunteer) {
      return this.deletedVolunteers.has(volunteer);
    },

    // === GESTION DES MAGASINS ===

    /**
     * Ajoute un magasin
     */
    addStore() {
      if (!this.newStore.trim()) return;

      const store = this.newStore.trim();
      if (!this.editingStores.includes(store)) {
        this.editingStores.push(store);
        this.newStore = '';
        this.markAsDirty();
      }
    },

    /**
     * Bascule l'état de suppression d'un magasin
     */
    toggleStore(store) {
      if (this.deletedStores.has(store)) {
        this.deletedStores.delete(store);
      } else {
        this.deletedStores.add(store);
      }
      this.markAsDirty();
    },

    /**
     * Vérifie si un magasin est marqué comme supprimé
     */
    isStoreDeleted(store) {
      return this.deletedStores.has(store);
    },

    // === GESTION DE LA SUPPRESSION ===

    /**
     * Affiche la confirmation de suppression
     */
    showDeleteConfirmation(message, itemType, item) {
      this.deleteConfirmation.show = true;
      this.deleteConfirmation.message = message;
      this.deleteConfirmation.itemType = itemType;
      this.deleteConfirmation.itemId = item;
      this.deleteConfirmation.progress = 0;

      // Barre de progression qui augmente
      this.deleteConfirmation.progressInterval = setInterval(() => {
        this.deleteConfirmation.progress += 2;
        if (this.deleteConfirmation.progress >= 100) {
          this.cancelDelete();
        }
      }, 100);
    },

    /**
     * Annule la suppression
     */
    cancelDelete() {
      if (this.deleteConfirmation.progressInterval) {
        clearInterval(this.deleteConfirmation.progressInterval);
      }
      this.deleteConfirmation.show = false;
      this.deleteConfirmation.progress = 0;
    },

    /**
     * Confirme la suppression
     */
    confirmDelete() {
      this.cancelDelete();

      if (this.deleteConfirmation.itemType === 'purchase') {
        const index = this.editingPurchases.findIndex(p => p === this.deleteConfirmation.itemId);
        if (index > -1) {
          this.editingPurchases.splice(index, 1);
          this.markAsDirty();
        }
      } else if (this.deleteConfirmation.itemType === 'stock') {
        const index = this.editingStockEntries.findIndex(s => s === this.deleteConfirmation.itemId);
        if (index > -1) {
          this.editingStockEntries.splice(index, 1);
          this.markAsDirty();
        }
      }
    },

    // === SAUVEGARDE GLOBALE ===

    /**
     * Sauvegarde toutes les modifications
     */
    async saveAllChanges() {
      if (!this.modalState.hasUnsavedChanges || this.modalState.isSaving) return;

      this.modalState.isSaving = true;

      try {
        const data = {
          editingPurchases: this.editingPurchases,
          editingStockEntries: this.editingStockEntries,
          editingVolunteers: this.editingVolunteers,
          deletedVolunteers: this.deletedVolunteers,
          editingStores: this.editingStores,
          deletedStores: this.deletedStores,
          editingIngredient: this.modalState.editingIngredient
        };

        const context = {
          listId: this.listId,
          database: this.database
        };

        const results = await this.modalService.saveAllChanges(data, context);

        this.modalState.hasUnsavedChanges = false;


        // Fermer le modal
        this.closeUnifiedModal();

        return results;

      } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error);
        this.showErrorToast('Une erreur est survenue lors de la sauvegarde.');
        throw error;
      } finally {
        this.modalState.isSaving = false;
      }
    },

    availableStoresSuggestions() {
      // Accès direct car le mixin fusionne avec l'app
      return this.availableStoresSuggestions || [];
    },
  },

  beforeUnmount() {
    // Nettoyer les intervalles en cours
    if (this.deleteConfirmation.progressInterval) {
      clearInterval(this.deleteConfirmation.progressInterval);
    }
  }
};
