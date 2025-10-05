/**
 * IngredientManagementMixin.js
 * Mixin Vue pour la gestion du renommage et de la fusion d'ingrédients
 * Compatible avec l'architecture Options API existante
 */

import { unitsManager } from './UnitsManager.js';

export const IngredientManagementMixin = {
  data() {
    return {
      // État du modal de renommage
      renameModal: {
        isOpen: false,
        ingredient: null,
        newName: '',
        isSaving: false
      },

      // État du modal de fusion
      mergeModal: {
        isOpen: false,
        selectedIngredients: [],
        mergedIngredient: {
          name: '',
          ingType: '',
          store: '',
          who: [],
          consolidatedQuantities: []
        },
        availableStores: [],
        nameConflicts: [],
        isSaving: false
      }
    };
  },

  computed: {
    /**
     * Vérifie si le formulaire de renommage est valide
     */
    isRenameFormValid() {
      return this.renameModal.newName &&
             this.renameModal.newName.trim() !== '' &&
             this.renameModal.newName !== this.renameModal.ingredient?.ingredientName;
    },

    /**
     * Vérifie si le formulaire de fusion est valide
     */
    isMergeFormValid() {
      return this.mergeModal.mergedIngredient.name &&
             this.mergeModal.mergedIngredient.name.trim() !== '' &&
             this.mergeModal.mergedIngredient.ingType &&
             !this.mergeModal.nameConflicts.length;
    },

    /**
     * Calcule les quantités consolidées pour la fusion
     */
    consolidatedQuantities() {
      if (!this.mergeModal.selectedIngredients.length) return [];

      const allQuantities = [];

      // Récupérer les quantités des achats de tous les ingrédients
      this.mergeModal.selectedIngredients.forEach(ingredient => {
        if (ingredient.purchases && ingredient.purchases.length) {
          ingredient.purchases.forEach(purchase => {
            allQuantities.push({
              value: purchase.quantity,
              unit: purchase.unit,
              ingredientName: ingredient.ingredientName
            });
          });
        }

        // Ajouter aussi les quantités manquantes (besoin)
        if (ingredient.calculations?.balancePerUnit) {
          ingredient.calculations.balancePerUnit.forEach(balance => {
            if (balance.value > 0) {
              allQuantities.push({
                value: balance.value,
                unit: balance.unit,
                ingredientName: ingredient.ingredientName
              });
            }
          });
        }
      });

      return unitsManager.consolidateQuantities(allQuantities);
    }
  },

  methods: {
    /**
     * Ouvre le modal de renommage pour un ingrédient
     * @param {Object} ingredient - Ingrédient à renommer
     */
    openRenameModal(ingredient) {
      this.renameModal.ingredient = ingredient;
      this.renameModal.newName = ingredient.ingredientName;
      this.renameModal.isOpen = true;
      this.renameModal.isSaving = false;
    },

    /**
     * Ferme le modal de renommage
     */
    closeRenameModal() {
      if (this.renameModal.isSaving) return;
      this.renameModal.isOpen = false;
      this.renameModal.ingredient = null;
      this.renameModal.newName = '';
    },

    /**
     * Sauvegarde le renommage d'un ingrédient
     */
    async saveRename() {
      if (!this.isRenameFormValid || this.renameModal.isSaving) return;

      this.renameModal.isSaving = true;

      try {
        const ingredient = this.renameModal.ingredient;
        const newName = this.renameModal.newName.trim();
        const oldName = ingredient.ingredientName;

        // Préparer les données de mise à jour
        const updateData = {
          ingredientName: newName,
          previousNames: [...(ingredient.previousNames || []), oldName],
          nameHistory: [
            ...(ingredient.nameHistory || []),
            {
              name: oldName,
              changedAt: new Date().toISOString(),
              changedBy: this.getAuthState().userId || 'unknown'
            }
          ]
        };

        // Mettre à jour via Appwrite
        await this.appwriteDatabase.updateDocument(
          APPWRITE_CONFIG.databaseId,
          'ingredients',
          ingredient.$id,
          updateData
        );

        // Mettre à jour localement
        ingredient.ingredientName = newName;
        ingredient.previousNames = updateData.previousNames;
        ingredient.nameHistory = updateData.nameHistory;

        // Mettre à jour la collection locale
        this._updateLocalCollection('ingredients', ingredient.$id, ingredient);

        // Afficher le message de succès
        this.showSuccessToast(`Ingrédient "${oldName}" renommé en "${newName}"`);

        // Fermer le modal
        this.closeRenameModal();

      } catch (error) {
        console.error('Erreur lors du renommage:', error);
        await this.handleAppwriteError(error);
      } finally {
        this.renameModal.isSaving = false;
      }
    },

    /**
     * Ouvre le modal de fusion pour les ingrédients sélectionnés
     */
    openMergeModal() {
      const selectedIngredients = this.tableData.filter(item => item.selected);

      if (selectedIngredients.length < 2) {
        this.showErrorToast('Veuillez sélectionner au moins 2 ingrédients à fusionner');
        return;
      }

      this.mergeModal.selectedIngredients = selectedIngredients;
      this.mergeModal.isOpen = true;
      this.mergeModal.isSaving = false;

      // Initialiser les données de fusion
      this.initializeMergeData();
    },

    /**
     * Initialise les données pour la fusion
     */
    initializeMergeData() {
      const ingredients = this.mergeModal.selectedIngredients;

      // Extraire les magasins uniques
      const stores = [...new Set(ingredients.map(i => i.store).filter(Boolean))];
      this.mergeModal.availableStores = stores;

      // Fusionner les volontaires
      const allVolunteers = new Set();
      ingredients.forEach(ingredient => {
        if (ingredient.who) {
          ingredient.who.forEach(volunteer => allVolunteers.add(volunteer));
        }
      });

      // Initialiser l'ingrédient fusionné
      this.mergeModal.mergedIngredient = {
        name: '',
        ingType: ingredients[0].ingType, // Type du premier ingrédient par défaut
        store: stores.length === 1 ? stores[0] : '', // Store unique si un seul
        who: Array.from(allVolunteers),
        consolidatedQuantities: this.consolidatedQuantities
      };

      // Vérifier les conflits de noms
      this.checkNameConflicts();
    },

    /**
     * Vérifie les conflits de noms pour la fusion
     */
    checkNameConflicts() {
      const proposedName = this.mergeModal.mergedIngredient.name.trim();
      if (!proposedName) {
        this.mergeModal.nameConflicts = [];
        return;
      }

      // Chercher si le nom existe déjà dans les ingrédients non sélectionnés
      const conflicts = this.ingredients.filter(ingredient =>
        ingredient.ingredientName.toLowerCase() === proposedName.toLowerCase() &&
        !this.mergeModal.selectedIngredients.find(selected => selected.$id === ingredient.$id) &&
        !ingredient.isMerged
      );

      this.mergeModal.nameConflicts = conflicts;
    },

    /**
     * Met à jour le nom de l'ingrédient fusionné et vérifie les conflits
     */
    updateMergedIngredientName() {
      this.mergeModal.mergedIngredient.name = this.mergeModal.mergedIngredient.name.trim();
      this.checkNameConflicts();
    },

    /**
     * Propose de fusionner avec un ingrédient en conflit
     * @param {Object} conflictIngredient - Ingrédient en conflit
     */
    proposeMergeWithConflict(conflictIngredient) {
      if (!confirm(`L'ingrédient "${conflictIngredient.ingredientName}" existe déjà. Voulez-vous le fusionner également ?`)) {
        return;
      }

      // Ajouter l'ingrédient en conflit à la sélection
      this.mergeModal.selectedIngredients.push(conflictIngredient);

      // Mettre à jour le nom avec celui de l'ingrédient en conflit
      this.mergeModal.mergedIngredient.name = conflictIngredient.ingredientName;

      // Réinitialiser les données
      this.initializeMergeData();
    },

    /**
     * Ferme le modal de fusion
     */
    closeMergeModal() {
      if (this.mergeModal.isSaving) return;
      this.mergeModal.isOpen = false;
      this.mergeModal.selectedIngredients = [];
      this.mergeModal.mergedIngredient = {};
      this.mergeModal.nameConflicts = [];
    },

    /**
     * Sauvegarde la fusion des ingrédients
     */
    async saveMerge() {
      if (!this.isMergeFormValid || this.mergeModal.isSaving) return;

      this.mergeModal.isSaving = true;

      try {
        const mergedData = this.mergeModal.mergedIngredient;
        const sourceIngredients = this.mergeModal.selectedIngredients;

        // 1. Créer le nouvel ingrédient fusionné
        const newIngredient = await this.createMergedIngredient(mergedData, sourceIngredients);

        // 2. Marquer les ingrédients source comme fusionnés
        await this.markIngredientsAsMerged(sourceIngredients, newIngredient);

        // 3. Migrer les purchases vers le nouvel ingrédient
        await this.migratePurchases(sourceIngredients, newIngredient);

        // 4. Mettre à jour l'UI localement
        this.updateUIAfterMerge(sourceIngredients, newIngredient);

        // Afficher le message de succès
        this.showSuccessToast(
          `${sourceIngredients.length} ingrédients fusionnés en "${mergedData.name}"`
        );

        // Fermer le modal et désélectionner
        this.closeMergeModal();
        this.deselectAllMainIngredients();

      } catch (error) {
        console.error('Erreur lors de la fusion:', error);
        await this.handleAppwriteError(error);
      } finally {
        this.mergeModal.isSaving = false;
      }
    },

    /**
     * Crée le nouvel ingrédient fusionné
     */
    async createMergedIngredient(mergedData, sourceIngredients) {
      const now = new Date().toISOString();

      // Consolidé les recipeOccurrences
      const allRecipeOccurrences = [];
      sourceIngredients.forEach(ingredient => {
        if (ingredient.recipeOccurrences) {
          allRecipeOccurrences.push(...ingredient.recipeOccurrences);
        }
      });

      // Calculer les quantités totales consolidées
      const totalQuantities = this.calculateTotalQuantities(sourceIngredients);

      const newIngredientData = {
        ingredientUuid: `ing_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        ingredientName: mergedData.name,
        ingType: mergedData.ingType,
        totalNeededRaw: totalQuantities.raw,
        totalNeededConsolidated: totalQuantities.consolidated,
        recipeOccurrences: allRecipeOccurrences,
        pFrais: sourceIngredients.some(i => i.pFrais),
        pSurgel: sourceIngredients.some(i => i.pSurgel),
        stockReel: '',
        ingredientLists: this.listId,
        status: 'none',
        who: mergedData.who,
        store: mergedData.store,
        // Champs de suivi de fusion
        isMerged: false,
        mergedInto: null,
        mergedFrom: sourceIngredients.map(i => i.ingredientUuid),
        mergeDate: now,
        mergeReason: `Fusion de ${sourceIngredients.map(i => i.ingredientName).join(', ')}`
      };

      const response = await this.database.createDocument(
        APPWRITE_CONFIG.databaseId,
        'ingredients',
        "unique()",
        newIngredientData
      );

      return response;
    },

    /**
     * Marque les ingrédients source comme fusionnés
     */
    async markIngredientsAsMerged(sourceIngredients, newIngredient) {
      const updatePromises = sourceIngredients.map(async (ingredient) => {
        const updateData = {
          isMerged: true,
          mergedInto: newIngredient.$id,
          mergeDate: new Date().toISOString(),
          mergeReason: `Fusionné dans ${newIngredient.ingredientName}`
        };

        await this.database.updateDocument(
          APPWRITE_CONFIG.databaseId,
          'ingredients',
          ingredient.$id,
          updateData
        );

        // Mettre à jour localement
        ingredient.isMerged = true;
        ingredient.mergedInto = newIngredient.$id;
        this._updateLocalCollection('ingredients', ingredient.$id, ingredient);
      });

      await Promise.all(updatePromises);
    },

    /**
     * Migre les purchases vers le nouvel ingrédient
     */
    async migratePurchases(sourceIngredients, newIngredient) {
      const allPurchases = [];

      // Récupérer tous les purchases des ingrédients source
      sourceIngredients.forEach(ingredient => {
        if (ingredient.purchases && ingredient.purchases.length) {
          allPurchases.push(...ingredient.purchases);
        }
      });

      // Mettre à jour tous les purchases
      const updatePromises = allPurchases.map(async (purchase) => {
        await this.database.updateDocument(
          APPWRITE_CONFIG.databaseId,
          'purchase',
          purchase.$id,
          {
            listIngredient: newIngredient.$id
          }
        );
      });

      await Promise.all(updatePromises);
    },

    /**
     * Calcule les quantités totales pour les ingrédients source
     */
    calculateTotalQuantities(sourceIngredients) {
      const allQuantities = [];

      sourceIngredients.forEach(ingredient => {
        // Ajouter les quantités des achats
        if (ingredient.purchases && ingredient.purchases.length) {
          ingredient.purchases.forEach(purchase => {
            allQuantities.push({
              value: purchase.quantity,
              unit: purchase.unit,
              ingredientName: ingredient.ingredientName
            });
          });
        }
      });

      const consolidated = unitsManager.consolidateQuantities(allQuantities);

      return {
        raw: allQuantities.map(q => `${q.value} ${q.unit}`).join(', '),
        consolidated: consolidated.map(q => `${q.value} ${q.unit}`).join(', ')
      };
    },

    /**
     * Met à jour l'UI après la fusion
     */
    updateUIAfterMerge(sourceIngredients, newIngredient) {
      // Supprimer les ingrédients source de la vue
      sourceIngredients.forEach(ingredient => {
        const index = this.ingredients.findIndex(i => i.$id === ingredient.$id);
        if (index > -1) {
          this.ingredients.splice(index, 1);
        }
      });

      // Ajouter le nouvel ingrédient
      this.ingredients.push(newIngredient);

      // Forcer la réactivité
      this.$forceUpdate();
    },

    /**
     * Gestionnaire pour le renommage depuis le tableau
     */
    handleRenameIngredient(ingredient) {
      this.openRenameModal(ingredient);
    }
  }
};
