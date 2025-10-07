/**
 * IngredientManagementMixin.js
 * Mixin Vue pour la gestion du renommage et de la fusion d'ingrédients
 * Compatible avec l'architecture Options API existante
 */

import { unitsManager } from './UnitsManager.js';
import { IngredientCalculator } from './services/IngredientCalculator.js';
import { DataTransformer } from './services/DataTransformer.js';

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
        // isOpen: false,
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
     * Délégué à IngredientCalculator pour centraliser la logique
     */
    consolidatedQuantities() {
      if (!this.mergeModal.selectedIngredients.length) return [];

      try {
        // Utiliser le service centralisé pour les calculs
        return IngredientCalculator.calculateMergedQuantities(
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
     * Ouvre le modal de fusion pour les ingrédients sélectionnés
     */
    openMergeModal() {
      // Récupérer les objets ingrédients complets avec données transformées (UI)
      const selectedIngredients = this.selectedIngredients
        .map(id => this.transformedIngredients.find(ing => ing.$id === id))
        .filter(Boolean); // Filtrer les undefined au cas où

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
        this.mergeModal.isSaving = false;
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

      // Consolidé les recipeOccurrences
      // [AI] FIXIT : recipeOccurrences est un tableau de chaînes JSON dans Appwrite
      const allRecipeOccurrences = [];
      sourceIngredients.forEach(ingredient => {
        if (ingredient.recipeOccurrences && Array.isArray(ingredient.recipeOccurrences)) {
          ingredient.recipeOccurrences.forEach(occurrenceString => {
            if (typeof occurrenceString === 'string') {
              try {
                const parsedOccurrence = JSON.parse(occurrenceString);
                allRecipeOccurrences.push(parsedOccurrence);
              } catch (e) {
                console.warn('Erreur parsing occurrence string:', e);
              }
            } else if (occurrenceString && typeof occurrenceString === 'object') {
              // Cas où l'occurrence est déjà un objet (déjà parsé)
              allRecipeOccurrences.push(occurrenceString);
            }
          });
        }
        console.log('[DEBUG] recipeOccurrences merging:', allRecipeOccurrences);
      });

      // Récupérer et consolider les besoins depuis tous les ingrédients sources
      const allNeededQuantities = [];
      sourceIngredients.forEach(ingredient => {
        let needs = [];

        // Parser totalNeededConsolidated
        if (ingredient.totalNeededConsolidated) {
          if (typeof ingredient.totalNeededConsolidated === 'string') {
            try {
              needs = JSON.parse(ingredient.totalNeededConsolidated);
            } catch (e) {
              console.warn('Erreur parsing totalNeededConsolidated:', e);
              needs = [];
            }
          } else if (Array.isArray(ingredient.totalNeededConsolidated)) {
            needs = ingredient.totalNeededConsolidated;
          }
        }

        // Ajouter les besoins consolidés
        if (Array.isArray(needs)) {
          allNeededQuantities.push(...needs);
        }
      });

      // Consolider les quantités par unité pour éviter les doublons
      const consolidatedNeeds = this.consolidateQuantitiesByUnit(allNeededQuantities);

      const newIngredientData = {
        ingredientUuid: `merged_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        ingredientName: mergedData.name,
        ingType: mergedData.ingType,
        totalNeededRaw: '[]', // Ce champ semble moins utilisé, on le laisse vide pour l'instant
        totalNeededConsolidated: JSON.stringify(consolidatedNeeds),
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
        mergedFrom: sourceIngredients.map(i => i.$id),
        mergeDate: now,
        mergeReason: `Fusion de ${sourceIngredients.map(i => i.ingredientName).join(', ')}`
      };

      console.log('[DEBUG] fusionedTopose → ', newIngredientData)

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
