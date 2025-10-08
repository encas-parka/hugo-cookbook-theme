/**
 * IngredientManagementMixin.js
 * Mixin Vue pour la gestion du renommage et de la fusion d'ingrédients
 * Compatible avec l'architecture Options API existante
 */

import { unitsManager } from './UnitsManager.js';
import { DataTransformer } from './services/DataTransformer.js';

export const IngredientManagementMixin = {

  computed: {
    /**
     * Vérifie si le formulaire de renommage est valide
     */
    isRenameFormValid() {
      return this.modals.rename.newName &&
             this.modals.rename.newName.trim() !== '' &&
             this.modals.rename.newName !== this.modals.rename.ingredient?.ingredientName;
    },

    /**
     * Vérifie si le formulaire de fusion est valide
     */
    isMergeFormValid() {
      return this.modals.merge.mergedIngredient.name &&
             this.modals.merge.mergedIngredient.name.trim() !== '' &&
             this.modals.merge.mergedIngredient.ingType &&
             !this.modals.merge.nameConflicts.length;
    },

    /**
     * Calcule les quantités consolidées pour la fusion
     * Délégué à DataTransformer pour centraliser la logique
     */
    consolidatedQuantities() {
      if (!this.modals.merge.selectedIngredients.length) return [];

      try {
        // Utiliser le service centralisé pour les calculs
        return DataTransformer.calculateMergedQuantities(
          this.modals.merge.selectedIngredients,
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

      this.modals.rename.ingredient = ingredient;
      this.modals.rename.newName = ingredient.ingredientName;
      this.modals.rename.isOpen = true;
      this.modals.rename.isSaving = false;
    },

    /**
     * Ferme le modal de renommage
     */
    closeRenameModal() {
      if (this.isSaving) return;
      this.handleCloseRenameModal();
    },

    /**
     * Sauvegarde le renommage d'un ingrédient
     */
    async saveRename() {
      if (!this.isRenameFormValid || this.modals.rename.isSaving) return;

      this.modals.rename.isSaving = true;

      try {
        const ingredient = this.modals.rename.ingredient;
        const newName = this.modals.rename.newName.trim();
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
        this.handleCloseRenameModal();

      } catch (error) {
        console.error('Erreur lors du renommage:', error);
        await this.handleAppwriteError(error);
      } finally {
        this.isSaving = false;
      }
    },



    /**
     * Initialise les données pour la fusion
     */
    initializeMergeData() {
      const ingredients = this.modals.merge.selectedIngredients;

      // --- Détection des divergences ---
      const uniqueTypes = [...new Set(ingredients.map(i => i.ingType))];
      const uniqueStores = [...new Set(ingredients.map(i => i.store).filter(Boolean))];
      const allVolunteers = [...new Set(ingredients.flatMap(i => i.who || []))];
      const uniquePFrais = [...new Set(ingredients.map(i => i.pFrais))];
      const uniquePSurgel = [...new Set(ingredients.map(i => i.pSurgel))];

      // --- Logique de visibilité des sélecteurs ---
      this.modals.merge.showTypeSelector = uniqueTypes.length > 1;
      this.modals.merge.showStoreSelector = uniqueStores.length > 1;
      this.modals.merge.showWhoSelector = allVolunteers.length > 0;

      const hasFrais = uniquePFrais.includes(true);
      const hasSurgel = uniquePSurgel.includes(true);
      this.modals.merge.showProductNatureSelector = hasFrais && hasSurgel || (hasFrais && uniquePFrais.length > 1) || (hasSurgel && uniquePSurgel.length > 1);

      // --- Initialisation de l'ingrédient fusionné ---
      let defaultProductNature = 'none';
      if (!this.modals.merge.showProductNatureSelector) {
        if (hasFrais) defaultProductNature = 'frais';
        else if (hasSurgel) defaultProductNature = 'surgel';
      }

      this.modals.merge.availableStores = uniqueStores;
      this.modals.merge.allVolunteers = allVolunteers.map(name => ({ name, selected: true }));

      this.modals.merge.mergedIngredient = {
        name:  '', // this.modals.merge.mergedIngredient.name ||
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
      const proposedName = this.modals.merge.mergedIngredient.name.trim();
      if (!proposedName) {
        this.modals.merge.nameConflicts = [];
        return;
      }

      // Chercher si le nom existe déjà dans les ingrédients non sélectionnés
      const conflicts = this.ingredients.filter(ingredient =>
        ingredient.ingredientName.toLowerCase() === proposedName.toLowerCase() &&
        !this.modals.merge.selectedIngredients.find(selected => selected.$id === ingredient.$id) &&
        !ingredient.isMerged
      );

      this.modals.merge.nameConflicts = conflicts;
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
      this.modals.merge.selectedIngredients.push(conflictIngredient);

      // Mettre à jour le nom avec celui de l'ingrédient en conflit
      this.modals.merge.mergedIngredient.name = conflictIngredient.ingredientName;

      // Réinitialiser les données
      this.initializeMergeData();
    },

    /**
     * Bascule l'état de sélection d'un volontaire pour la fusion
     * @param {Object} volunteer - L'objet volontaire à basculer
     */
    toggleMergedVolunteer(volunteer) {
      const v = this.modals.merge.allVolunteers.find(v => v.name === volunteer.name);
      if (v) {
        v.selected = !v.selected;
      }
    },

    /**
     * Ferme le modal de fusion
     */
    closeMergeModal() {
      if (this.modals.merge.isSaving) return;
      this.modals.merge.isOpen = false;
      this.modals.merge.selectedIngredients = [];
      this.modals.merge.mergedIngredient = {};
      this.modals.merge.nameConflicts = [];
    },

    /**
     * Sauvegarde la fusion des ingrédients
     */
    async saveMerge() {
      if (!this.isMergeFormValid || this.modals.merge.isSaving) return;

      this.modals.merge.isSaving = true;

      try {
        const mergedData = this.modals.merge.mergedIngredient;
        const sourceIngredients = this.modals.merge.selectedIngredients;

        // Valider les données avant la sauvegarde
        const validationResult = this.validateMergeData(mergedData, sourceIngredients);
        if (!validationResult.isValid) {
          throw new Error(`Validation échouée: ${validationResult.errors.join(', ')}`);
        }

        // 1. Créer le nouvel ingrédient fusionné
        const newIngredient = await this.createMergedIngredient(mergedData, sourceIngredients);

        // 2. Marquer les ingrédients source comme fusionnés
        // await this.markIngredientsAsMerged(sourceIngredients, newIngredient);

        // [AI] Forcer la retransformation complète des données pour bénéficier des purchases enrichis
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
        this.modals.merge.isSaving = false;
      }
    },

    /**
     * Valide les données de fusion
     */
    validateMergeData(mergedData, sourceIngredients) {
      const errors = [];

      // Validation du nom
      if (!mergedData.name || mergedData.name.trim().length === 0) {
        errors.push('Le nom de l\'ingrédient fusionné est requis');
      }
      if (mergedData.name.length > 25) {
        errors.push('Le nom de l\'ingrédient est trop long (max 25 caractères)');
      }

      // Validation du type
      if (!mergedData.ingType) {
        errors.push('Le type d\'ingrédient est requis');
      }

      // Validation des ingrédients source
      if (!sourceIngredients || sourceIngredients.length < 2) {
        errors.push('Il faut au moins 2 ingrédients à fusionner');
      }

      // Validation du magasin
      if (mergedData.store && mergedData.store.length > 25) {
        errors.push('Le nom du magasin est trop long (max 25 caractères)');
      }

      // Validation des volontaires
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

      // 1. Consolider les besoins et occurrences
      const allNeededQuantities = sourceIngredients.flatMap(ingredient => {
        let needs = [];
        if (typeof ingredient.totalNeededConsolidated === 'string' && ingredient.totalNeededConsolidated) {
          try { needs = JSON.parse(ingredient.totalNeededConsolidated); } catch (e) { needs = []; }
        } else if (Array.isArray(ingredient.totalNeededConsolidated)) {
          needs = ingredient.totalNeededConsolidated;
        }
        return needs;
      });
      const consolidatedNeeds = this.consolidateQuantitiesByUnit(allNeededQuantities);
      const allRecipeOccurrences = sourceIngredients.flatMap(ing => ing.recipeOccurrences || []);

      // 2. Déterminer les `who` finaux à partir de la sélection de l'utilisateur
      const finalWho = this.modals.merge.allVolunteers
        .filter(v => v.selected)
        .map(v => v.name);

      // 3. Déterminer `pFrais` et `pSurgel` à partir de la sélection de l'utilisateur
      const { productNature } = this.modals.merge.mergedIngredient;
      const finalPFrais = productNature === 'frais';
      const finalPSurgel = productNature === 'surgel';

      // 4. Construire l'objet de données final
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

      // UNCOMMENT WHEN [DEBUG] FINISHED
      // const response = await this.database.createDocument(
      //   this.appwriteDataService.config.databaseId,
      //   'ingredients',
      //   "unique()",
      //   newIngredientData
      // );

      // return response;
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

        // Mettre à jour localement
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
