/**
 * Modal Mixin
 * Mixin Vue pour la gestion de l'état et des interactions du modal unifié
 * Compatible avec l'architecture Options API existante
 */



export const ModalMixin = {
  data() {
    return {
      // État du modal
      modalState: {
        isOpen: false,
        currentTab: 'recettes', // 'recettes', 'purchases', 'stock', 'volunteers', 'stores'
        editingIngredient: null,
        isSaving: false,
        hasUnsavedChanges: false
      },

      // Suivi granulaire des modifications
      dirtyFields: new Set(),
      originalData: {},

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
      editingStore: '',

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
    /**
     * Retourne la liste combinée des volontaires (existants + nouveaux)
     */
    allVolunteers() {
      const existingVolunteers = this.modalState.editingIngredient?.who || [];
      const newVolunteers = this.editingVolunteers.filter(v => !existingVolunteers.includes(v));
      return [...existingVolunteers, ...newVolunteers];
    },


   },

  methods: {
    /**
     * Fonctions de sécurité et sanitisation
     */

    /**
     * Nettoie une chaîne de caractères pour prévenir les attaques XSS
     * @param {string} text - Texte à nettoyer
     * @returns {string} Texte sécurisé
     */
    sanitizeText(text) {
      if (typeof text !== 'string') return text;

      return text
        .replace(/[<>]/g, '') // Supprime les balises HTML
        .replace(/javascript:/gi, '') // Supprime les protocoles javascript
        .replace(/on\w+=/gi, '') // Supprime les gestionnaires d'événements
        .trim();
    },

    /**
     * Nettoie un champ de texte pour le magasin
     * @param {string} store - Nom du magasin
     * @returns {string} Nom de magasin sécurisé
     */
    sanitizeStore(store) {
      return this.sanitizeText(store).substring(0, 100);
    },

    /**
     * Nettoie un champ de texte pour les notes
     * @param {string} notes - Notes à nettoyer
     * @returns {string} Notes sécurisées
     */
    sanitizeNotes(notes) {
      return this.sanitizeText(notes).substring(0, 500);
    },

    /**
     * Nettoie un nom de volontaire
     * @param {string} volunteer - Nom du volontaire
     * @returns {string} Nom sécurisé
     */
    sanitizeVolunteer(volunteer) {
      return this.sanitizeText(volunteer).substring(0, 50);
    },

    /**
     * Valide et nettoie une valeur numérique
     * @param {any} value - Valeur à valider
     * @param {number} min - Valeur minimale
     * @param {number} max - Valeur maximale
     * @returns {number|null} Valeur validée ou null
     */
    sanitizeNumber(value, min = 0, max = 999999) {
      const num = parseFloat(value);
      if (isNaN(num)) return null;
      if (num < min) return min;
      if (num > max) return max;
      return num;
    },

    /**
     * Valide une date
     * @param {string} dateString - Date à valider
     * @returns {string|null} Date validée ou null
     */
    sanitizeDate(dateString) {
      if (!dateString) return null;
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return null;

      // Pas de dates dans le futur pour le stock
      const now = new Date();
      if (date > now) return null;

      return date.toISOString().slice(0, 16);
    },

    /**
     * Configure le focus et la navigation au clavier pour le modal
     */
    setupModalFocus() {
      // Mettre le focus sur le premier élément focusable dans le modal
      const modal = document.querySelector('.modal[role="dialog"]');
      if (!modal) return;

      // Trouver le premier élément focusable
      const focusableElements = modal.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }

      // Ajouter un gestionnaire pour la touche Échap
      const handleEscape = (event) => {
        if (event.key === 'Escape') {
          this.closeUnifiedModal();
        }
      };

      document.addEventListener('keydown', handleEscape);

      // Nettoyer l'écouteur d'événement lors de la fermeture
      this.modalCleanup = () => {
        document.removeEventListener('keydown', handleEscape);
      };
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

        // Gérer le focus pour l'accessibilité
        this.$nextTick(() => {
          this.setupModalFocus();
        });
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

      // Sauvegarder les données originales pour comparaison
      let stockEntries = [];
      if (ingredient.stockReel) {
        try {
          if (typeof ingredient.stockReel === 'string') {
            stockEntries = JSON.parse(ingredient.stockReel);
          } else {
            stockEntries = ingredient.stockReel;
          }
        } catch (error) {
          console.error('Erreur parsing stockReel:', error);
          stockEntries = [];
        }
      }

      this.originalData = {
        purchases: [...(ingredient.purchases || [])],
        stock: [...stockEntries],
        volunteers: [...(ingredient.who || [])],
        store: ingredient.store || ''
      };

      // Réinitialiser les champs modifiés
      this.dirtyFields.clear();

      // Charger les achats existants
      this.editingPurchases = (ingredient.purchases || []).map(p => ({
        ...p,
        isEditing: false,
        isDirty: false,
        isNew: false
      }));

      // Charger les stocks existants
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
    },

    /**
     * Réinitialise toutes les données du modal
     */
    resetModalData() {
      this.modalState.editingIngredient = null;
      this.editingPurchases = [];
      this.editingStockEntries = [];
      this.editingVolunteers = [];
      this.deletedVolunteers.clear();
      this.dirtyFields.clear();
      this.originalData = {};
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
      this.editingStore = '';
    },

    /**
     * Marque le modal comme ayant des modifications non sauvegardées
     */
    markAsDirty() {
      this.modalState.hasUnsavedChanges = true;
    },

    /**
     * Marque un champ spécifique comme modifié
     * @param {string} field - Le champ modifié ('purchases', 'stock', 'volunteers', 'store')
     */
    markDirty(field) {
      this.dirtyFields.add(field);
      this.markAsDirty();
    },

    /**
     * Vérifie si un champ spécifique a été modifié
     * @param {string} field - Le champ à vérifier
     * @returns {boolean}
     */
    isFieldDirty(field) {
      return this.dirtyFields.has(field);
    },

    /**
     * Vérifie les données ont changé par rapport à l'original
     * @param {string} field - Le champ à vérifier
     * @returns {boolean}
     */
    hasDataChanged(field) {
      if (!this.originalData || !this.modalState.editingIngredient) {
        return false;
      }

      switch(field) {
        case 'purchases':
          return this.hasPurchasesChanged(this.originalData.purchases, this.editingPurchases);
        case 'stock':
          return JSON.stringify(this.originalData.stock) !== JSON.stringify(this.editingStockEntries);
        case 'volunteers':
          return !this.arraysEqual(this.originalData.volunteers, this.editingVolunteers);
        case 'store':
          return this.originalData.store !== (this.modalState.editingIngredient?.store || '');
        default:
          return false;
      }
    },

    /**
     * Vérifie si les achats ont changé
     */
    hasPurchasesChanged(originalPurchases, currentPurchases) {
      if (originalPurchases.length !== currentPurchases.length) {
        return true;
      }

      // Vérifier les achats modifiés, nouveaux ou supprimés
      const hasNewOrModified = currentPurchases.some(p => p.isNew || p.isDirty);
      const hasDeleted = originalPurchases.length > currentPurchases.filter(p => !p.isNew).length;

      return hasNewOrModified || hasDeleted;
    },

    /**
     * Compare deux tableaux pour l'égalité
     */
    arraysEqual(arr1, arr2) {
      if (arr1.length !== arr2.length) return false;
      return arr1.every((val, index) => val === arr2[index]);
    },

    // === GESTION DES ACHATS ===

    /**
     * Ajoute un nouvel achat
     */
    addPurchase() {
      // Sanitisation des données avant validation
      const sanitizedPurchase = {
        quantity: this.sanitizeNumber(this.newPurchase.quantity, 0.01),
        unit: this.sanitizeText(this.newPurchase.unit),
        store: this.sanitizeStore(this.newPurchase.store),
        who: this.sanitizeVolunteer(this.newPurchase.who),
        price: this.sanitizeNumber(this.newPurchase.price, 0),
        notes: this.sanitizeNotes(this.newPurchase.notes)
      };

      const validation = this.appwriteDataService.validatePurchase(sanitizedPurchase);
      if (!validation.isValid) {
        this.showErrorToast(validation.errors.join(', ') || 'Veuillez remplir tous les champs obligatoires avec des valeurs valides');
        return;
      }

      const purchase = this.appwriteDataService.createPurchaseObject(sanitizedPurchase);
      this.editingPurchases.push(purchase);
      this.resetForms();
      this.markDirty('purchases');
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
      this.markDirty('purchases');
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
      // Sanitisation des données avant validation
      const sanitizedStock = {
        quantity: this.sanitizeNumber(this.newStock.quantity, 0.01),
        unit: this.sanitizeText(this.newStock.unit),
        dateTime: this.sanitizeDate(this.newStock.dateTime),
        notes: this.sanitizeNotes(this.newStock.notes)
      };

      const validation = this.appwriteDataService.validateStock(sanitizedStock);
      if (!validation.isValid) {
        this.showErrorToast(validation.errors.join(', ') || 'Veuillez remplir tous les champs obligatoires avec des valeurs valides');
        return;
      }

      const stock = this.appwriteDataService.createStockObject(sanitizedStock);
      this.editingStockEntries.push(stock);
      this.resetForms();
      this.markDirty('stock');
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
      this.markDirty('stock');
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

      const volunteer = this.sanitizeVolunteer(this.newVolunteer);
      if (!volunteer) {
        this.showErrorToast('Le nom du volontaire n\'est pas valide');
        return;
      }

      if (!this.editingVolunteers.includes(volunteer)) {
        this.editingVolunteers.push(volunteer);
        this.newVolunteer = '';
        this.markDirty('volunteers');
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
      this.markDirty('volunteers');
    },

    /**
     * Vérifie si un volontaire est marqué comme supprimé
     */
    isVolunteerDeleted(volunteer) {
      return this.deletedVolunteers.has(volunteer);
    },

    /**
     * Vérifie si un volontaire est nouveau (ajouté durant l'édition)
     */
    isNewVolunteer(volunteer) {
      const existingVolunteers = this.modalState.editingIngredient?.who || [];
      return !existingVolunteers.includes(volunteer);
    },

    // === GESTION DES MAGASINS ===

    /**
     * Remplace le magasin actuel par un nouveau
     */
    replaceStore() {
      if (!this.editingStore.trim()) return;

      const storeValue = this.sanitizeStore(this.editingStore);
      if (!storeValue) {
        this.showErrorToast('Le nom du magasin n\'est pas valide');
        return;
      }

      const currentIngredient = this.modalState.editingIngredient;

      if (currentIngredient) {
        // Mettre à jour le magasin de l'ingrédient en cours d'édition
        currentIngredient.store = storeValue;
        this.editingStore = '';
        this.markDirty('store');

        // Le magasin est maintenant dans l'ingrédient et sera sauvegardé via saveAllChanges()
        console.log('[ModalMixin] Magasin mis à jour:', storeValue, 'pour ingrédient:', currentIngredient.ingredientName);
      }
    },

    /**
     * Supprime le magasin de l'ingrédient
     */
    removeStore() {
      const currentIngredient = this.modalState.editingIngredient;

      if (currentIngredient && currentIngredient.store) {
        currentIngredient.store = '';
        this.markDirty('store');
      }
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
          this.markDirty('purchases');
        }
      } else if (this.deleteConfirmation.itemType === 'stock') {
        const index = this.editingStockEntries.findIndex(s => s === this.deleteConfirmation.itemId);
        if (index > -1) {
          this.editingStockEntries.splice(index, 1);
          this.markDirty('stock');
        }
      }
    },

    // === SAUVEGARDE GLOBALE ===

    /**
     * Affiche un message d'erreur détaillé
     * @param {string} message - Message d'erreur
     * @param {Object} error - Objet d'erreur détaillé
     */
    showErrorToast(message, error = null) {
      let fullMessage = message;

      if (error) {
        if (error.code === 400) {
          fullMessage += ' Les données fournies sont invalides.';
        } else if (error.code === 401) {
          fullMessage += ' Vous n\'êtes pas autorisé à effectuer cette action.';
        } else if (error.code === 404) {
          fullMessage += ' La ressource demandée n\'existe pas.';
        } else if (error.code === 429) {
          fullMessage += ' Trop de requêtes. Veuillez réessayer plus tard.';
        } else if (error.message) {
          fullMessage += ` ${error.message}`;
        }
      }

      // Utiliser un toast ou une alerte existant
      if (window.showToast) {
        window.showToast(fullMessage, 'error');
      } else if (this.$refs?.toast) {
        this.$refs.toast.show(fullMessage, 'danger');
      } else {
        console.error('Toast Error:', fullMessage);
        alert(fullMessage);
      }
    },

    /**
     * Sauvegarde toutes les modifications
     */
    async saveAllChanges() {
      if (!this.modalState.hasUnsavedChanges || this.modalState.isSaving) return;

      this.modalState.isSaving = true;

      try {
        const data = {
          dirtyFields: this.dirtyFields,
          editingPurchases: this.editingPurchases,
          editingStockEntries: this.editingStockEntries,
          editingVolunteers: this.editingVolunteers,
          deletedVolunteers: this.deletedVolunteers,
          editingStore: this.modalState.editingIngredient?.store || '',
          editingIngredient: this.modalState.editingIngredient
        };

        const context = {
          listId: this.listId,
          database: this.database
        };

        const results = await this.appwriteDataService.saveAllChanges(data, context);

        this.modalState.hasUnsavedChanges = false;

        // Afficher un message de succès
        if (window.showToast) {
          window.showToast('Modifications sauvegardées avec succès', 'success');
        }

        // Fermer le modal
        this.closeUnifiedModal();

        return results;

      } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error);

        // Messages d'erreur spécifiques selon le type d'erreur
        let errorMessage = 'Une erreur est survenue lors de la sauvegarde.';

        if (error.message?.includes('purchase')) {
          errorMessage = 'Erreur lors de la sauvegarde des achats.';
        } else if (error.message?.includes('stock')) {
          errorMessage = 'Erreur lors de la sauvegarde du stock.';
        } else if (error.message?.includes('volunteer')) {
          errorMessage = 'Erreur lors de la sauvegarde des volontaires.';
        } else if (error.message?.includes('store')) {
          errorMessage = 'Erreur lors de la sauvegarde du magasin.';
        }

        this.showErrorToast(errorMessage, error);
        throw error;
      } finally {
        this.modalState.isSaving = false;
      }
    },


  },

  beforeUnmount() {
    // Nettoyer les intervalles en cours
    if (this.deleteConfirmation.progressInterval) {
      clearInterval(this.deleteConfirmation.progressInterval);
    }

    // Nettoyer les écouteurs d'événements du modal
    if (this.modalCleanup) {
      this.modalCleanup();
    }
  }
};
