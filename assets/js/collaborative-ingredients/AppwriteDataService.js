/**
 * Appwrite Data Service
 * Service pur de logique métier pour la gestion des données sur Appwrite
 * Aucune dépendance à Vue - peut être testé unitairement
 */

export class AppwriteDataService {
  constructor(appwriteConfig) {
    this.config = appwriteConfig;
  }

  /**
   * Crée une erreur structurée avec contexte
   * @param {string} message - Message d'erreur
   * @param {string} type - Type d'erreur (validation, network, database)
   * @param {Object} details - Détails supplémentaires
   * @returns {Error} Erreur structurée
   */
  createError(message, type = 'database', details = {}) {
    const error = new Error(message);
    error.type = type;
    error.details = details;
    error.timestamp = new Date().toISOString();
    return error;
  }

  /**
   * Gère les erreurs Appwrite de manière structurée
   * @param {Error} error - Erreur Appwrite
   * @param {string} context - Contexte de l'erreur
   * @returns {Error} Erreur traitée
   */
  handleAppwriteError(error, context = '') {
    console.error(`[AppwriteDataService] Erreur ${context}:`, error);

    // Extraire le code d'erreur si disponible
    let errorCode = error.code || 500;
    let errorMessage = error.message || 'Erreur inconnue';

    // Erreurs spécifiques à Appwrite
    if (errorMessage.includes('document_not_found')) {
      errorCode = 404;
      errorMessage = 'Document non trouvé';
    } else if (errorMessage.includes('permission_denied')) {
      errorCode = 401;
      errorMessage = 'Permission refusée';
    } else if (errorMessage.includes('rate_limit_exceeded')) {
      errorCode = 429;
      errorMessage = 'Limite de requêtes dépassée';
    } else if (errorMessage.includes('invalid_structure')) {
      errorCode = 400;
      errorMessage = 'Structure des données invalide';
    } else if (errorMessage.includes('duplicate')) {
      errorCode = 409;
      errorMessage = 'Entrée en double';
    }

    const structuredError = this.createError(
      `Erreur ${context}: ${errorMessage}`,
      'appwrite',
      { originalError: error, code: errorCode }
    );

    structuredError.code = errorCode;
    return structuredError;
  }

  /**
   * Sauvegarde les achats dans Appwrite
   * @param {Array} purchases - Liste des achats à sauvegarder
   * @param {string} listId - ID de la liste
   * @param {string} ingredientId - ID de l'ingrédient
   * @param {Object} database - Instance de base de données Appwrite
   * @returns {Promise<Array>} Liste des IDs des achats créés/mis à jour
   */
  async savePurchases(purchases, listId, ingredientId, database) {
    const newPurchases = purchases.filter(p => p.isNew);
    const updatedPurchases = purchases.filter(p => p.isDirty && !p.isNew);
    const results = [];

    // Sauvegarder les nouveaux achats
    for (const purchase of newPurchases) {
      const purchaseData = {
        list: listId,
        listIngredient: ingredientId,
        quantity: purchase.quantity,
        unit: purchase.unit,
        store: purchase.store || '',
        who: purchase.who || '',
        price: purchase.price ? parseFloat(purchase.price.toString()) : null,
        notes: purchase.notes || ''
      };

      try {
        const result = await database.createDocument(
          this.config.databaseId,
          this.config.collections.purchases,
          "unique()",
          purchaseData
        );
        results.push(result); // Retourner l'objet complet
        console.log('[AppwriteDataService] Nouvel achat créé:', result.$id);
      } catch (error) {
        throw this.handleAppwriteError(error, 'création achat');
      }
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

      try {
        const result = await database.updateDocument(
          this.config.databaseId,
          this.config.collections.purchases,
          purchase.$id,
          updateData
        );
        results.push(result); // Retourner l'objet complet
        console.log('[AppwriteDataService] Achat mis à jour:', result.$id);
      } catch (error) {
        throw this.handleAppwriteError(error, 'mise à jour achat');
      }
    }

    return results;
  }

  /**
   * Sauvegarde les entrées de stock
  * @deprecated Cette méthode est obsolète et non utilisée. La logique est gérée dans `buildIngredientPatch`.
   * @param {Array} stockEntries - Liste des entrées de stock
   * @param {string} ingredientId - ID de l'ingrédient
   * @param {Object} database - Instance de base de données Appwrite
   * @returns {Promise<string>} ID de l'ingrédient mis à jour
   */
  // async saveStock(stockEntries, ingredientId, database) {
  //   // Convertir le stock en format approprié pour la sauvegarde
  //   const stockData = stockEntries.map(s => ({
  //     quantity: s.quantity,
  //     unit: s.unit,
  //     dateTime: s.dateTime,
  //     notes: s.notes
  //   }));

  //   try {
  //     const result = await database.updateDocument(
  //       this.config.databaseId,
  //       this.config.collections.ingredients,
  //       ingredientId,
  //       {
  //         stockReel: JSON.stringify(stockData)
  //       }
  //     );

  //     console.log('[AppwriteDataService] Stock mis à jour:', result.$id);
  //     return result.$id;
  //   } catch (error) {
  //     throw this.handleAppwriteError(error, 'mise à jour stock');
  //   }
  // }


  /**
   * Met à jour plusieurs ingrédients en batch.
   * @param {Array<Object>} updates - Un tableau d'objets { ingredientId: string, patchData: Object }
   * @param {Object} database - Instance de base de données Appwrite
   * @returns {Promise<Array>} Tableau des résultats de mise à jour
   */
  async batchUpdateIngredients(updates, database) {
    const promises = updates.map(update => {
      return database.updateDocument(
        this.config.databaseId,
        this.config.collections.ingredients,
        update.ingredientId,
        update.patchData
      );
    });

    try {
      const results = await Promise.all(promises);
      console.log(`[AppwriteDataService] ${results.length} ingrédients mis à jour en batch.`);
      return results;
    } catch (error) {
      throw this.handleAppwriteError(error, 'mise à jour en batch');
    }
  }
  /**
   * Construit l'objet de patch pour la mise à jour d'un ingrédient
   * @param {Set} dirtyFields - Champs modifiés
   * @param {Object} changes - Données modifiées
   * @returns {Object} Objet de patch pour updateDocument
   */
  buildIngredientPatch(dirtyFields, changes) {
    const patchData = {};

    if (dirtyFields.has('stock')) {
      patchData.stockReel = JSON.stringify(changes.editingStockEntries);
    }

    if (dirtyFields.has('volunteers')) {
      // Filtrer les volontaires supprimés
      const activeVolunteers = changes.editingVolunteers.filter(v => !changes.deletedVolunteers.has(v));
      patchData.who = activeVolunteers;
    }

    if (dirtyFields.has('store')) {
      patchData.store = changes.editingStore?.trim() || '';
    }

    return patchData;
  }

  /**
   * Sauvegarde toutes les modifications en utilisant uniquement les champs modifiés
   * @param {Object} data - Données à sauvegarder avec dirtyFields
   * @param {Object} context - Contexte de l'application (listId, database, etc.)
   * @returns {Promise<Object>} Résultats de la sauvegarde optimisée
   */
  async saveAllChanges(data, context) {
    const {
      dirtyFields,
      editingPurchases,
      editingStockEntries,
      editingVolunteers,
      deletedVolunteers,
      editingStore,
      editingIngredient
    } = data;

    const { listId, database } = context;

    const results = {};

    try {
      // 1. Sauvegarder les achats si modifiés (collection différente)
      if (dirtyFields.has('purchases') && editingPurchases?.length > 0) {
        results.purchases = await this.savePurchases(
          editingPurchases,
          listId,
          editingIngredient.$id,
          database
        );
        console.log('[AppwriteDataService] Achats sauvegardés:', results.purchases.length, 'éléments');
      }

      // 2. Construire le patch unifié pour l'ingrédient (stock, volontaires, magasin)
      const ingredientPatch = this.buildIngredientPatch(dirtyFields, {
        editingStockEntries,
        editingVolunteers,
        deletedVolunteers,
        editingStore
      });

      // 3. Appliquer le patch si des champs d'ingrédient sont modifiés
      if (Object.keys(ingredientPatch).length > 0) {
        const result = await database.updateDocument(
          this.config.databaseId,
          this.config.collections.ingredients,
          editingIngredient.$id,
          ingredientPatch
        );
        results.ingredients = result.$id;
        console.log('[AppwriteDataService] Ingrédient mis à jour avec patch:', Object.keys(ingredientPatch));
      }

      return results;
    } catch (error) {
      throw this.handleAppwriteError(error, 'sauvegarde globale');
    }
  }

  /**
   * Valide les données d'un achat
   * @param {Object} purchase - Données de l'achat à valider
   * @returns {Object} Validation result { isValid: boolean, errors: string[] }
   */
  validatePurchase(purchase) {
    const errors = [];

    // Validation de la quantité
    if (!purchase.quantity || purchase.quantity <= 0) {
      errors.push('La quantité doit être supérieure à 0');
    }
    if (purchase.quantity > 999999) {
      errors.push('La quantité est trop élevée');
    }

    // Validation de l'unité
    if (!purchase.unit || typeof purchase.unit !== 'string' || purchase.unit.trim().length === 0) {
      errors.push('L\'unité est requise');
    }
    if (purchase.unit.length > 20) {
      errors.push('L\'unité est trop longue');
    }

    // Validation du magasin (optionnel mais limité)
    if (purchase.store && purchase.store.length > 100) {
      errors.push('Le nom du magasin est trop long');
    }

    // Validation du volontaire (optionnel mais limité)
    if (purchase.who && purchase.who.length > 50) {
      errors.push('Le nom du volontaire est trop long');
    }

    // Validation du prix
    if (purchase.price !== null && purchase.price !== undefined) {
      if (typeof purchase.price !== 'number' || purchase.price < 0) {
        errors.push('Le prix doit être un nombre positif');
      }
      if (purchase.price > 999999) {
        errors.push('Le prix est trop élevé');
      }
    }

    // Validation des notes
    if (purchase.notes && purchase.notes.length > 500) {
      errors.push('Les notes sont trop longues');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Valide les données de stock
   * @param {Object} stock - Données du stock à valider
   * @returns {Object} Validation result { isValid: boolean, errors: string[] }
   */
  validateStock(stock) {
    const errors = [];

    // Validation de la quantité
    if (!stock.quantity || stock.quantity <= 0) {
      errors.push('La quantité doit être supérieure à 0');
    }
    if (stock.quantity > 999999) {
      errors.push('La quantité est trop élevée');
    }

    // Validation de l'unité
    if (!stock.unit || typeof stock.unit !== 'string' || stock.unit.trim().length === 0) {
      errors.push('L\'unité est requise');
    }
    if (stock.unit.length > 20) {
      errors.push('L\'unité est trop longue');
    }

    // Validation de la date
    if (!stock.dateTime) {
      errors.push('La date et l\'heure sont requises');
    } else {
      const date = new Date(stock.dateTime);
      if (isNaN(date.getTime())) {
        errors.push('La date n\'est pas valide');
      }
      if (date > new Date()) {
        errors.push('La date ne peut pas être dans le futur');
      }
    }

    // Validation des notes
    if (stock.notes && stock.notes.length > 500) {
      errors.push('Les notes sont trop longues');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Crée un objet achat avec les métadonnées nécessaires
   * @param {Object} purchaseData - Données brutes de l'achat
   * @returns {Object} Objet achat formaté
   */
  createPurchaseObject(purchaseData) {
    return {
      ...purchaseData,
      isEditing: false,
      isDirty: true,
      isNew: true,
      $id: 'new-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9)
    };
  }

  /**
   * Crée un objet stock avec les métadonnées nécessaires
   * @param {Object} stockData - Données brutes du stock
   * @returns {Object} Objet stock formaté
   */
  createStockObject(stockData) {
    return {
      ...stockData,
      isEditing: false,
      isDirty: true,
      isNew: true,
      $id: 'new-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9)
    };
  }

  /**
   * Extrait les unités suggérées depuis les calculs de balance
   * @param {Object} ingredient - Ingrédient avec calculs
   * @returns {Array} Liste des unités suggérées
   */
  getSuggestedUnits(ingredient) {
    if (!ingredient?.calculations?.balancePerUnit) return [];
    return ingredient.calculations.balancePerUnit.map(item => item.unit);
  }
}
