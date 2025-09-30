/**
 * Unified Modal Manager
 * Gestion du modal unifié pour la modification des ingrédients
 */

export class UnifiedModalManager {
  constructor(appInstance, APPWRITE_CONFIG) {
    this.app = appInstance;
    this.APPWRITE_CONFIG = APPWRITE_CONFIG; // Store APPWRITE_CONFIG
    this.init();
  }

  init() {
    // Lier les méthodes du modal unifié qui ne sont pas déjà dans Vue
    this.app.saveAllChanges = this.saveAllChanges.bind(this);
    this.app.addPurchase = this.addPurchase.bind(this);
    this.app.editPurchase = this.editPurchase.bind(this);
    this.app.savePurchaseEdit = this.savePurchaseEdit.bind(this);
    this.app.deletePurchase = this.deletePurchase.bind(this);
    this.app.addStock = this.addStock.bind(this);
    this.app.editStock = this.editStock.bind(this);
    this.app.saveStockEdit = this.saveStockEdit.bind(this);
    this.app.deleteStock = this.deleteStock.bind(this);
    this.app.addVolunteer = this.addVolunteer.bind(this);
    this.app.toggleVolunteer = this.toggleVolunteer.bind(this);
    this.app.addStore = this.addStore.bind(this);
    this.app.toggleStore = this.toggleStore.bind(this);
    this.app.cancelDelete = this.cancelDelete.bind(this);
    this.app.confirmDelete = this.confirmDelete.bind(this);
    this.app.markAsDirty = this.markAsDirty.bind(this);
    
    // Propriétés calculées
    Object.defineProperty(this.app, 'isPurchaseFormValid', {
      get() {
        return this.newPurchase.quantity && this.newPurchase.unit;
      }
    });
    
    Object.defineProperty(this.app, 'isStockFormValid', {
      get() {
        return this.newStock.quantity && this.newStock.unit && this.newStock.dateTime;
      }
    });
    
    Object.defineProperty(this.app, 'suggestedUnits', {
      get() {
        if (!this.editingIngredient?.calculations?.balancePerUnit) return [];
        return this.editingIngredient.calculations.balancePerUnit.map(item => item.unit);
      }
    });
  }

  

  // Gestion des achats
  addPurchase() {
    if (!this.app.isPurchaseFormValid) return;
    
    const purchase = {
      ...this.app.newPurchase,
      isEditing: false,
      isDirty: true,
      isNew: true,
      $id: 'new-' + Date.now()
    };
    
    this.app.editingPurchases.push(purchase);
    this.resetPurchaseForm();
    this.markAsDirty();
  }

  editPurchase(purchase) {
    purchase.isEditing = true;
  }

  savePurchaseEdit(purchase) {
    purchase.isEditing = false;
    purchase.isDirty = true;
    this.markAsDirty();
  }

  deletePurchase(purchase) {
    this.showDeleteConfirmation(
      `Voulez-vous vraiment supprimer cet achat de ${purchase.quantity} ${purchase.unit} ?`,
      'purchase',
      purchase
    );
  }

  // Gestion du stock
  addStock() {
    if (!this.app.isStockFormValid) return;
    
    const stock = {
      ...this.app.newStock,
      isEditing: false,
      isDirty: true,
      isNew: true,
      $id: 'new-' + Date.now()
    };
    
    this.app.editingStockEntries.push(stock);
    this.resetStockForm();
    this.markAsDirty();
  }

  editStock(stock) {
    stock.isEditing = true;
  }

  saveStockEdit(stock) {
    stock.isEditing = false;
    stock.isDirty = true;
    this.markAsDirty();
  }

  deleteStock(stock) {
    this.showDeleteConfirmation(
      `Voulez-vous vraiment supprimer ce stock de ${stock.quantity} ${stock.unit} ?`,
      'stock',
      stock
    );
  }

  // Gestion des volontaires
  addVolunteer() {
    if (!this.app.newVolunteer.trim()) return;
    
    if (!this.app.editingVolunteers.includes(this.app.newVolunteer.trim())) {
      this.app.editingVolunteers.push(this.app.newVolunteer.trim());
      this.app.newVolunteer = '';
      this.markAsDirty();
    }
  }

  toggleVolunteer(volunteer) {
    if (this.app.deletedVolunteers.has(volunteer)) {
      this.app.deletedVolunteers.delete(volunteer);
    } else {
      this.app.deletedVolunteers.add(volunteer);
    }
    this.markAsDirty();
  }

  isVolunteerDeleted(volunteer) {
    return this.app.deletedVolunteers.has(volunteer);
  }

  // Gestion des magasins
  addStore() {
    if (!this.app.newStore.trim()) return;
    
    if (!this.app.editingStores.includes(this.app.newStore.trim())) {
      this.app.editingStores.push(this.app.newStore.trim());
      this.app.newStore = '';
      this.markAsDirty();
    }
  }

  toggleStore(store) {
    if (this.app.deletedStores.has(store)) {
      this.app.deletedStores.delete(store);
    } else {
      this.app.deletedStores.add(store);
    }
    this.markAsDirty();
  }

  isStoreDeleted(store) {
    return this.app.deletedStores.has(store);
  }

  // Confirmation de suppression
  showDeleteConfirmation(message, itemType, item) {
    this.app.deleteConfirmation.show = true;
    this.app.deleteConfirmation.message = message;
    this.app.deleteConfirmation.itemType = itemType;
    this.app.deleteConfirmation.itemId = item;
    this.app.deleteConfirmation.progress = 0;
    
    // Barre de progression qui augmente
    this.app.deleteConfirmation.progressInterval = setInterval(() => {
      this.app.deleteConfirmation.progress += 2;
      if (this.app.deleteConfirmation.progress >= 100) {
        this.cancelDelete();
      }
    }, 100);
  }

  cancelDelete() {
    if (this.app.deleteConfirmation.progressInterval) {
      clearInterval(this.app.deleteConfirmation.progressInterval);
    }
    this.app.deleteConfirmation.show = false;
    this.app.deleteConfirmation.progress = 0;
  }

  confirmDelete() {
    this.cancelDelete();
    
    if (this.app.deleteConfirmation.itemType === 'purchase') {
      const index = this.app.editingPurchases.findIndex(p => p === this.app.deleteConfirmation.itemId);
      if (index > -1) {
        this.app.editingPurchases.splice(index, 1);
        this.markAsDirty();
      }
    } else if (this.app.deleteConfirmation.itemType === 'stock') {
      const index = this.app.editingStockEntries.findIndex(s => s === this.app.deleteConfirmation.itemId);
      if (index > -1) {
        this.app.editingStockEntries.splice(index, 1);
        this.markAsDirty();
      }
    }
  }

  // Sauvegarde globale
  async saveAllChanges() {
    if (!this.app.hasUnsavedChanges || this.app.isSaving) return;
    
    this.app.isSaving = true;
    
    try {
      // Sauvegarder les achats
      await this.savePurchases();
      
      // Sauvegarder le stock
      await this.saveStock();
      
      // Sauvegarder les volontaires
      await this.saveVolunteers();
      
      // Sauvegarder les magasins
      await this.saveStores();
      
      // Mettre à jour l'ingrédient
      await this.updateIngredient();
      
      this.app.hasUnsavedChanges = false;
      
      // Afficher un message de succès via le toast de l'app
      this.app.showSuccessToast('Toutes les modifications ont été enregistrées avec succès !');
      
      // Fermer le modal unifié immédiatement après la sauvegarde réussie
      this.app.closeUnifiedModal();
      
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      this.app.showErrorToast('Une erreur est survenue lors de la sauvegarde.');
    } finally {
      this.app.isSaving = false;
    }
  }

  async savePurchases() {
    const newPurchases = this.app.editingPurchases.filter(p => p.isNew);
    const updatedPurchases = this.app.editingPurchases.filter(p => p.isDirty && !p.isNew);
    
    // Sauvegarder les nouveaux achats
    for (const purchase of newPurchases) {
      const purchaseData = {
        list: this.app.listId,
        listIngredient: this.app.editingIngredient.$id,
        quantity: purchase.quantity,
        unit: purchase.unit,
        store: purchase.store || '',
        who: purchase.who || '',
        price: purchase.price ? parseFloat(purchase.price.toString()) : null,
        notes: purchase.notes || ''
      };
      
      const result = await this.app.database.createDocument(
        this.APPWRITE_CONFIG.databaseId,
        this.APPWRITE_CONFIG.collections.purchases,
        "unique()",
        purchaseData
      );
      
      console.log('[UnifiedModalManager] Nouvel achat créé:', result.$id);
    }
    
    // Mettre à jour les achats existants
    for (const purchase of updatedPurchases) {
      const updateData = {
        quantity: purchase.quantity,
        unit: purchase.unit,
        store: purchase.store || '',
        who: purchase.who || '',
        price: purchase.price ? parseFloat(purchase.price.toString()) : null,
        notes: purchase.notes || ''
      };
      
      const result = await this.app.database.updateDocument(
        this.APPWRITE_CONFIG.databaseId,
        this.APPWRITE_CONFIG.collections.purchases,
        purchase.$id,
        updateData
      );
      
      console.log('[UnifiedModalManager] Achat mis à jour:', result.$id);
    }
  }

  async saveStock() {
    // Convertir le stock en format approprié pour la sauvegarde
    const stockData = this.app.editingStockEntries.map(s => ({
      quantity: s.quantity,
      unit: s.unit,
      dateTime: s.dateTime,
      notes: s.notes
    }));
    
    // Mettre à jour le champ stockReel avec le nouveau format (converti en JSON string pour Appwrite)
    const result = await this.app.database.updateDocument(
      this.APPWRITE_CONFIG.databaseId,
      this.APPWRITE_CONFIG.collections.ingredients,
      this.app.editingIngredient.$id,
      {
        stockReel: JSON.stringify(stockData)
      }
    );
    
    console.log('[UnifiedModalManager] Stock mis à jour:', result.$id);
  }

  async saveVolunteers() {
    const activeVolunteers = this.app.editingVolunteers.filter(v => !this.app.deletedVolunteers.has(v));
    
    const result = await this.app.database.updateDocument(
      this.APPWRITE_CONFIG.databaseId,
      this.APPWRITE_CONFIG.collections.ingredients,
      this.app.editingIngredient.$id,
      {
        who: activeVolunteers
      }
    );
    
    console.log('[UnifiedModalManager] Volontaires mis à jour:', result.$id);
  }

  async saveStores() {
    const activeStores = this.app.editingStores.filter(s => !this.app.deletedStores.has(s));
    
    const result = await this.app.database.updateDocument(
      this.APPWRITE_CONFIG.databaseId,
      this.APPWRITE_CONFIG.collections.ingredients,
      this.app.editingIngredient.$id,
      {
        store: activeStores
      }
    );
    
    console.log('[UnifiedModalManager] Magasins mis à jour:', result.$id);
  }

  async updateIngredient() {
    // La mise à jour est déjà gérée dans les méthodes individuelles
    // Cette méthode peut être utilisée pour d'autres mises à jour si nécessaire
    console.log('[UnifiedModalManager] Mise à jour de l\'ingrédient terminée');
  }

  

  resetPurchaseForm() {
    this.app.newPurchase = {
      quantity: null,
      unit: '',
      store: '',
      who: '',
      price: null,
      notes: ''
    };
  }

  resetStockForm() {
    this.app.newStock = {
      quantity: null,
      unit: '',
      dateTime: new Date().toISOString().slice(0, 16),
      notes: ''
    };
  }

  // Méthodes utilitaires
  markAsDirty() {
    this.app.hasUnsavedChanges = true;
  }
}