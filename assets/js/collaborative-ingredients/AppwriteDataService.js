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
        results.push(result.$id);
        console.log('[AppwriteDataService] Nouvel achat créé:', result.$id);
      } catch (error) {
        console.error('[AppwriteDataService] Erreur création achat:', error);
        throw new Error(`Erreur lors de la création de l'achat: ${error.message}`);
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
        results.push(result.$id);
        console.log('[AppwriteDataService] Achat mis à jour:', result.$id);
      } catch (error) {
        console.error('[AppwriteDataService] Erreur mise à jour achat:', error);
        throw new Error(`Erreur lors de la mise à jour de l'achat: ${error.message}`);
      }
    }

    return results;
  }

  /**
   * Sauvegarde les entrées de stock
   * @param {Array} stockEntries - Liste des entrées de stock
   * @param {string} ingredientId - ID de l'ingrédient
   * @param {Object} database - Instance de base de données Appwrite
   * @returns {Promise<string>} ID de l'ingrédient mis à jour
   */
  async saveStock(stockEntries, ingredientId, database) {
    // Convertir le stock en format approprié pour la sauvegarde
    const stockData = stockEntries.map(s => ({
      quantity: s.quantity,
      unit: s.unit,
      dateTime: s.dateTime,
      notes: s.notes
    }));

    try {
      const result = await database.updateDocument(
        this.config.databaseId,
        this.config.collections.ingredients,
        ingredientId,
        {
          stockReel: JSON.stringify(stockData)
        }
      );

      console.log('[AppwriteDataService] Stock mis à jour:', result.$id);
      return result.$id;
    } catch (error) {
      console.error('[AppwriteDataService] Erreur mise à jour stock:', error);
      throw new Error(`Erreur lors de la mise à jour du stock: ${error.message}`);
    }
  }

  /**
   * Sauvegarde les volontaires
   * @param {Array} volunteers - Liste des volontaires
   * @param {Set} deletedVolunteers - Set des volontaires supprimés
   * @param {string} ingredientId - ID de l'ingrédient
   * @param {Object} database - Instance de base de données Appwrite
   * @returns {Promise<string>} ID de l'ingrédient mis à jour
   */
  async saveVolunteers(volunteers, deletedVolunteers, ingredientId, database) {
    const activeVolunteers = volunteers.filter(v => !deletedVolunteers.has(v));

    try {
      const result = await database.updateDocument(
        this.config.databaseId,
        this.config.collections.ingredients,
        ingredientId,
        {
          who: activeVolunteers
        }
      );

      console.log('[AppwriteDataService] Volontaires mis à jour:', result.$id);
      return result.$id;
    } catch (error) {
      console.error('[AppwriteDataService] Erreur mise à jour volontaires:', error);
      throw new Error(`Erreur lors de la mise à jour des volontaires: ${error.message}`);
    }
  }

  /**
   * Sauvegarde les magasins
   * @param {Array} stores - Liste des magasins
   * @param {Set} deletedStores - Set des magasins supprimés
   * @param {string} ingredientId - ID de l'ingrédient
   * @param {Object} database - Instance de base de données Appwrite
   * @returns {Promise<string>} ID de l'ingrédient mis à jour
   */
  async saveStores(stores, deletedStores, ingredientId, database) {
    const activeStores = stores.filter(s => !deletedStores.has(s));

    try {
      const result = await database.updateDocument(
        this.config.databaseId,
        this.config.collections.ingredients,
        ingredientId,
        {
          store: activeStores
        }
      );

      console.log('[AppwriteDataService] Magasins mis à jour:', result.$id);
      return result.$id;
    } catch (error) {
      console.error('[AppwriteDataService] Erreur mise à jour magasins:', error);
      throw new Error(`Erreur lors de la mise à jour des magasins: ${error.message}`);
    }
  }

  /**
   * Sauvegarde toutes les modifications en une seule transaction logique
   * @param {Object} data - Données à sauvegarder
   * @param {Object} context - Contexte de l'application (listId, database, etc.)
   * @returns {Promise<Object>} Résultats de la sauvegarde
   */
  async saveAllChanges(data, context) {
    const {
      editingPurchases,
      editingStockEntries,
      editingVolunteers,
      deletedVolunteers,
      editingStores,
      deletedStores,
      editingIngredient
    } = data;

    const { listId, database } = context;

    const results = {
      purchases: [],
      stock: null,
      volunteers: null,
      stores: null
    };

    try {
      // Sauvegarder les achats
      if (editingPurchases && editingPurchases.length > 0) {
        results.purchases = await this.savePurchases(
          editingPurchases,
          listId,
          editingIngredient.$id,
          database
        );
      }

      // Sauvegarder le stock
      if (editingStockEntries && editingStockEntries.length >= 0) {
        results.stock = await this.saveStock(
          editingStockEntries,
          editingIngredient.$id,
          database
        );
      }

      // Sauvegarder les volontaires
      if (editingVolunteers && deletedVolunteers) {
        results.volunteers = await this.saveVolunteers(
          editingVolunteers,
          deletedVolunteers,
          editingIngredient.$id,
          database
        );
      }

      // Sauvegarder les magasins
      if (editingStores && deletedStores) {
        results.stores = await this.saveStores(
          editingStores,
          deletedStores,
          editingIngredient.$id,
          database
        );
      }

      return results;
    } catch (error) {
      console.error('[AppwriteDataService] Erreur lors de la sauvegarde globale:', error);
      throw error;
    }
  }

  /**
   * Valide les données d'un achat
   * @param {Object} purchase - Données de l'achat à valider
   * @returns {boolean} True si valide
   */
  validatePurchase(purchase) {
    return purchase.quantity &&
           purchase.unit &&
           purchase.quantity > 0;
  }

  /**
   * Valide les données de stock
   * @param {Object} stock - Données du stock à valider
   * @returns {boolean} True si valide
   */
  validateStock(stock) {
    return stock.quantity &&
           stock.unit &&
           stock.dateTime &&
           stock.quantity > 0;
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
