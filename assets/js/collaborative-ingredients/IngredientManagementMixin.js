/**
 * IngredientManagementMixin.js
 * Mixin Vue pour la gestion du renommage et de la fusion d'ingrédients
 * Compatible avec l'architecture Options API existante
 */

import { unitsManager } from './UnitsManager.js';
import { DataTransformer } from './services/DataTransformer.js';

export const IngredientManagementMixin = {
  data() {
    return {
      renameModal: {
        isOpen: false,
        ingredient: null,
        newName: '',
        isSaving: false
      },
      mergeModal: {
        isOpen: false,
        selectedIngredients: [],
        mergedIngredient: {
          name: '',
          ingType: '',
          store: '',
          who: [],
          pFrais: false,
          pSurgel: false,
        },
        availableStores: [],
        nameConflicts: [],
        allVolunteers: [],
        showTypeSelector: false,
        showStoreSelector: false,
        showWhoSelector: false,
        showProductNatureSelector: false,
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
     * Délégué à DataTransformer pour centraliser la logique
     */
    consolidatedQuantities() {
      if (!this.mergeModal.selectedIngredients.length) return [];

      try {
        // Utiliser le service centralisé pour les calculs
        return DataTransformer.calculateMergedQuantities(
          this.mergeModal.selectedIngredients,
          this.purchases
        );
      } catch (error) {
        console.error('Erreur lors du calcul des quantités consolidées:', error);
        return [];
      }
    },

    /**
     * Formate les quantités consolidées pour l'affichage
     */
    formattedConsolidatedQuantities() {
      const quantities = this.consolidatedQuantities;
      if (!quantities.length) return '';

      // Grouper par type
      const purchases = quantities.filter(q => q.type === 'purchase');
      const needs = quantities.filter(q => q.type === 'need');

      const formatGroup = (group) => {
        return group.map(q => DataTransformer.formatValueWithUnit(q.value, q.unit)).join(' + ');
      };

      let result = '';
      if (purchases.length > 0) {
        result += `Achats: ${formatGroup(purchases)}`;
      }
      if (needs.length > 0) {
        if (result) result += ' | ';
        result += `Besoins: ${formatGroup(needs)}`;
      }

      return result || 'Aucune quantité';
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
      this.renameModal.isOpen = false;
      this.renameModal.selectedIngredients = [];
      this.renameModal.mergedIngredient = {};
      this.renameModal.nameConflicts = [];
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
        await this.database.updateDocument(
          this.appwriteDataService.config.databaseId,
          'ingredients',
          ingredient.$id,
          updateData
        );

        // Mettre à jour localement
        ingredient.ingredientName = newName;
        ingredient.previousNames = updateData.previousNames;
        ingredient.nameHistory = updateData.nameHistory;

        // Mettre à jour la collection locale
        this._updateLocalCollection(this.ingredients, ingredient, 'update');

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
     * Initialise les données pour la fusion
     */
    initializeMergeData() {
      const ingredients = this.mergeModal.selectedIngredients;

      // --- Détection des divergences ---
      const uniqueTypes = [...new Set(ingredients.map(i => i.ingType))];
      const uniqueStores = [...new Set(ingredients.map(i => i.store).filter(Boolean))];
      const allVolunteers = [...new Set(ingredients.flatMap(i => i.who || []))];
      const uniquePFrais = [...new Set(ingredients.map(i => i.pFrais))];
      const uniquePSurgel = [...new Set(ingredients.map(i => i.pSurgel))];

      // --- Logique de visibilité des sélecteurs ---
      this.mergeModal.showTypeSelector = uniqueTypes.length > 1;
      this.mergeModal.showStoreSelector = uniqueStores.length > 1;
      this.mergeModal.showWhoSelector = allVolunteers.length > 0;

      const hasFrais = uniquePFrais.includes(true);
      const hasSurgel = uniquePSurgel.includes(true);
      this.mergeModal.showProductNatureSelector = hasFrais && hasSurgel || (hasFrais && uniquePFrais.length > 1) || (hasSurgel && uniquePSurgel.length > 1);

      // --- Initialisation de l'ingrédient fusionné ---
      let defaultProductNature = 'none';
      if (!this.mergeModal.showProductNatureSelector) {
        if (hasFrais) defaultProductNature = 'frais';
        else if (hasSurgel) defaultProductNature = 'surgel';
      }

      this.mergeModal.availableStores = uniqueStores;
      this.mergeModal.allVolunteers = allVolunteers.map(name => ({ name, selected: true }));

      this.mergeModal.mergedIngredient = {
        name: '',
        ingType: uniqueTypes.length === 1 ? uniqueTypes[0] : (uniqueTypes[0] || ''),
        store: uniqueStores.length === 1 ? uniqueStores[0] : '',
        who: [], // Sera calculé au moment de la sauvegarde
        productNature: defaultProductNature,
        pFrais: defaultProductNature === 'frais',
        pSurgel: defaultProductNature === 'surgel'
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
     * Bascule l'état de sélection d'un volontaire pour la fusion
     * @param {Object} volunteer - L'objet volontaire à basculer
     */
    toggleMergedVolunteer(volunteer) {
      const v = this.mergeModal.allVolunteers.find(v => v.name === volunteer.name);
      if (v) {
        v.selected = !v.selected;
      }
    },

      /**
     * Gère la logique de fermeture et de réinitialisation du modal de fusion.
     */
    closeMergeModal() {
      this.mergeModal.isOpen = false;
      this.mergeModal.selectedIngredients = [];
      this.mergeModal.mergedIngredient = {
        name: '',
        ingType: '',
        store: '',
        who: [],
        pFrais: false,
        pSurgel: false,
      };
      this.mergeModal.availableStores = [];
      this.mergeModal.nameConflicts = [];
      this.mergeModal.allVolunteers = [];
      this.mergeModal.showTypeSelector = false;
      this.mergeModal.showStoreSelector = false;
      this.mergeModal.showWhoSelector = false;
      this.mergeModal.showProductNatureSelector = false;
      this.mergeModal.isSaving = false;
    },

    /**
     * Sauvegarde la fusion des ingrédients
     */
    async saveMerge() {
      if (this.mergeModal.isSaving) return;

      this.mergeModal.isSaving = true;

      try {
        const mergedData = this.mergeModal.mergedIngredient;
        const sourceIngredients = this.mergeModal.selectedIngredients;

        // Valider les données avant la sauvegarde
        const validationResult = this.validateMergeData(mergedData, sourceIngredients);
        if (!validationResult.isValid) {
          throw new Error(`Validation échouée: ${validationResult.errors.join(', ')}`);
        }

        // 1. Créer le nouvel ingrédient fusionné
        const newIngredient = await this.createMergedIngredient(mergedData, sourceIngredients);

        // 2. Marquer les ingrédients source comme fusionnés
        await this.markIngredientsAsMerged(sourceIngredients, newIngredient);

        setTimeout(() => {
          this.transformDataForUI(true);
        }, 1000); // Attendre un peu que le realtime ait propagé les changements

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
     * Valide les données de fusion
     */
    validateMergeData(mergedData, sourceIngredients) {
      const errors = [];

      if (!mergedData.name || mergedData.name.trim().length === 0) {
        errors.push('Le nom de l\'ingrédient fusionné est requis');
      }
      if (mergedData.name.length > 25) {
        errors.push('Le nom de l\'ingrédient est trop long (max 25 caractères)');
      }
      if (!mergedData.ingType) {
        errors.push('Le type d\'ingrédient est requis');
      }
      if (!sourceIngredients || sourceIngredients.length < 2) {
        errors.push('Il faut au moins 2 ingrédients à fusionner');
      }
      if (mergedData.store && mergedData.store.length > 25) {
        errors.push('Le nom du magasin est trop long (max 25 caractères)');
      }
      if (mergedData.who && Array.isArray(mergedData.who)) {
        mergedData.who.forEach(volunteer => {
          if (volunteer && volunteer.length > 15) {
            errors.push(`Le nom du volontaire "${volunteer}" est trop long (max 15 caractères)`);
          }
        });
      }

      return {
        isValid: errors.length === 0,
        errors
      };
    },

    /**
     * Crée le nouvel ingrédient fusionné
     */
    async createMergedIngredient(mergedData, sourceIngredients) {
      const now = new Date().toISOString();

      // Consolider les quantités nécessaires
    const allNeededQuantities = sourceIngredients.flatMap(ingredient => {
      let needs = [];
      if (typeof ingredient.totalNeededConsolidated === 'string' && ingredient.totalNeededConsolidated) {
        try { needs = JSON.parse(ingredient.totalNeededConsolidated); } catch (e) { needs = []; }
      } else if (Array.isArray(ingredient.totalNeededConsolidated)) {
        needs = ingredient.totalNeededConsolidated;
      }
      return Array.isArray(needs) ? needs : [];
    });
    const consolidatedNeeds = this.consolidateQuantitiesByUnit(allNeededQuantities);
    
    // Consolider les recipeOccurrences en évitant les doublons
    const allRecipeOccurrences = [];
    const seenRecipes = new Set();
    
    sourceIngredients.forEach(ingredient => {
      let recipeOccurrences = [];
      if (Array.isArray(ingredient.recipeOccurrences)) {
        recipeOccurrences = ingredient.recipeOccurrences;
      } else if (typeof ingredient.recipeOccurrences === 'string' && ingredient.recipeOccurrences) {
        try { recipeOccurrences = JSON.parse(ingredient.recipeOccurrences); } catch (e) { recipeOccurrences = []; }
      }
      
      recipeOccurrences.forEach(occurrence => {
        let occurrenceStr = occurrence;
        if (typeof occurrence === 'object') {
          occurrenceStr = JSON.stringify(occurrence);
        }
        
        if (typeof occurrenceStr === 'string') {
          try {
            const parsedOccurrence = JSON.parse(occurrenceStr);
            const key = `${parsedOccurrence.recipeName}_${parsedOccurrence.dateTimeService}_${parsedOccurrence.horaire}`;
            if (!seenRecipes.has(key)) {
              seenRecipes.add(key);
              allRecipeOccurrences.push(occurrenceStr);
            }
          } catch (e) {
            console.warn('Occurrence invalide ignorée:', occurrenceStr);
          }
        }
      });
    });

      const finalWho = this.mergeModal.allVolunteers
        .filter(v => v.selected)
        .map(v => v.name);

      const { productNature } = this.mergeModal.mergedIngredient;
      const finalPFrais = productNature === 'frais';
      const finalPSurgel = productNature === 'surgel';

      const newIngredientData = {
        ingredientUuid: `merged_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        ingredientName: mergedData.name,
        ingType: mergedData.ingType,
        store: mergedData.store,
        who: finalWho,
        pFrais: finalPFrais,
        pSurgel: finalPSurgel,
        totalNeededConsolidated: JSON.stringify(consolidatedNeeds),
        recipeOccurrences: allRecipeOccurrences,
        totalNeededRaw: '[]',
        stockReel: '',
        ingredientLists: this.listId,
        status: 'none',
        isMerged: false,
        mergedInto: null,
        mergedFrom: sourceIngredients.map(i => i.$id),
        mergeDate: now,
        mergeReason: `Fusion de ${sourceIngredients.map(i => i.ingredientName).join(', ')}`
      };

      console.log('[DEBUG] fusionedTopose → ', newIngredientData);

      const response = await this.database.createDocument(
        this.appwriteDataService.config.databaseId,
        'ingredients',
        "unique()",
        newIngredientData
      );

      // Ajouter à la collection locale
      this._updateLocalCollection(this.ingredients, response, 'add');

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
          this.appwriteDataService.config.databaseId,
          'ingredients',
          ingredient.$id,
          updateData
        );

        ingredient.isMerged = true;
        ingredient.mergedInto = newIngredient.$id;
        this._updateLocalCollection(this.ingredients, ingredient, 'update');
      });

      await Promise.all(updatePromises);
    },

    /**
     * Consolide les quantités par unité pour éviter les doublons
     */
    consolidateQuantitiesByUnit(quantities) {
      const consolidated = {};

      quantities.forEach(item => {
        const key = item.unit;
        if (!consolidated[key]) {
          consolidated[key] = {
            value: 0,
            unit: item.unit
          };
        }
        consolidated[key].value += parseFloat(item.value) || 0;
      });

      return Object.values(consolidated);
    },

    /**
     * Gestionnaire pour le renommage depuis le tableau
     */
    handleRenameIngredient(ingredient) {
      this.openRenameModal(ingredient);
    },
  }
};
