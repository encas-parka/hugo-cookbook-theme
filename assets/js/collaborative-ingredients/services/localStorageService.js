/**
 * localStorageService.js
 * Service de gestion du cache localStorage pour l'application collaborative
 * Stratégie : Le navigateur est la source de vérité primaire, Appwrite pour la synchronisation
 */


export class LocalStorageService {
  constructor() {
    this.storagePrefix = 'collab_ingredients_';
    this.cache = {
      ingredients: {
        stores: new Set(), // depuis ing.storeDisplay (pour filtres)
        users: new Set() // depuis ing.responsibleDisplay (pour filtres)
      },
      purchases: {
        stores: new Set(), // depuis purchases.store (pour suggestions)
        users: new Set() // depuis purchases.who (pour suggestions)
      }
    };
  }

  /**
   * Charge les caches depuis localStorage
   */
  loadFromStorage(listId) {
    try {
      // S'assurer que les caches existent
      this.ensureCacheExists();

      // Charger cache ingredients
      const ingredientsKey = `${this.storagePrefix}${listId}_ingredients_cache`;
      const ingredientsData = localStorage.getItem(ingredientsKey);
      if (ingredientsData) {
        const parsed = JSON.parse(ingredientsData);
        this.cache.ingredients.stores = new Set(parsed.stores || []);
        this.cache.ingredients.users = new Set(parsed.users || []);
        // console.log(`[SuggestionsCache] Cache ingredients chargé:`, {
        //   stores: parsed.stores?.length || 0,
        //   users: parsed.users?.length || 0
        // });
      } else {
        // console.log(`[SuggestionsCache] Aucun cache ingredients trouvé pour la clé: ${ingredientsKey}, initialisation à vide`);
        // CRÉER les caches vides explicitement
        this.cache.ingredients.stores = new Set();
        this.cache.ingredients.users = new Set();
      }

      // Charger cache purchases
      const purchasesKey = `${this.storagePrefix}${listId}_purchases_cache`;
      const purchasesData = localStorage.getItem(purchasesKey);
      if (purchasesData) {
        const parsed = JSON.parse(purchasesData);
        this.cache.purchases.stores = new Set(parsed.stores || []);
        this.cache.purchases.users = new Set(parsed.users || []);
        // console.log(`[SuggestionsCache] Cache purchases chargé:`, {
        //   stores: parsed.stores?.length || 0,
        //   users: parsed.users?.length || 0
        // });
      } else {
        // console.log(`[SuggestionsCache] Aucun cache purchases trouvé pour la clé: ${purchasesKey}, initialisation à vide`);
        // CRÉER les caches vides explicitement
        this.cache.purchases.stores = new Set();
        this.cache.purchases.users = new Set();
      }

    } catch (error) {
      console.error('[SuggestionsCache] Erreur lors du chargement depuis localStorage:', error);
      this.ensureCacheExists(); // Créer des caches vides en cas d'erreur
    }
  }

  /**
   * S'assure que les structures de cache existent (crée des caches vides si nécessaire)
   */
  ensureCacheExists() {
    if (!this.cache) {
      this.cache = {
        ingredients: { stores: new Set(), users: new Set() },
        purchases: { stores: new Set(), users: new Set() }
      };
    } else {
      // S'assurer que chaque sous-structure existe
      if (!this.cache.ingredients) {
        this.cache.ingredients = { stores: new Set(), users: new Set() };
      } else {
        if (!this.cache.ingredients.stores) this.cache.ingredients.stores = new Set();
        if (!this.cache.ingredients.users) this.cache.ingredients.users = new Set();
      }

      if (!this.cache.purchases) {
        this.cache.purchases = { stores: new Set(), users: new Set() };
      } else {
        if (!this.cache.purchases.stores) this.cache.purchases.stores = new Set();
        if (!this.cache.purchases.users) this.cache.purchases.users = new Set();
      }
    }

    // console.log('[SuggestionsCache] Structures de cache vérifiées/crées:', this.getStats());
  }

  /**
   * Sauvegarde les caches dans localStorage
   */
  saveToStorage(listId) {
    try {
      const ingredientsKey = `${this.storagePrefix}${listId}_ingredients_cache`;
      const purchasesKey = `${this.storagePrefix}${listId}_purchases_cache`;

      // Sauvegarder cache ingredients
      const ingredientsData = {
        stores: Array.from(this.cache.ingredients.stores),
        users: Array.from(this.cache.ingredients.users)
      };
      localStorage.setItem(ingredientsKey, JSON.stringify(ingredientsData));

      // Sauvegarder cache purchases
      const purchasesData = {
        stores: Array.from(this.cache.purchases.stores),
        users: Array.from(this.cache.purchases.users)
      };
      localStorage.setItem(purchasesKey, JSON.stringify(purchasesData));

      // console.log(`[SuggestionsCache] Sauvegardé dans localStorage:`, {
      //   listId,
      //   ingredients: {
      //     stores: ingredientsData.stores.length,
      //     users: ingredientsData.users.length
      //   },
      //   purchases: {
      //     stores: purchasesData.stores.length,
      //     users: purchasesData.users.length
      //   }
      // });
    } catch (error) {
      console.error('[SuggestionsCache] Erreur lors de la sauvegarde dans localStorage:', error);
    }
  }

  /**
   * Met à jour le cache depuis un ingredient (pour les filtres)
   * Gère les données brutes d'Appwrite avec différents formats possibles
   */
  updateFromIngredient(ingredient) {
    // Gérer ingredient.store qui peut être string, array ou null/undefined
    if (ingredient.store) {
      if (typeof ingredient.store === 'string') {
        const store = ingredient.store.trim();
        if (store && store !== '-') {
          this.cache.ingredients.stores.add(store);
        }
      } else if (Array.isArray(ingredient.store)) {
        ingredient.store.forEach(store => {
          if (store && typeof store === 'string' && store.trim() && store.trim() !== '-') {
            this.cache.ingredients.stores.add(store.trim());
          }
        });
      }
    }

    // Gérer ingredient.who qui peut être string, array ou null/undefined
    if (ingredient.who) {
      if (typeof ingredient.who === 'string') {
        const person = ingredient.who.trim();
        if (person && person !== '-') {
          this.cache.ingredients.users.add(person);
        }
      } else if (Array.isArray(ingredient.who)) {
        ingredient.who.forEach(person => {
          if (person && typeof person === 'string' && person.trim() && person.trim() !== '-') {
            this.cache.ingredients.users.add(person.trim());
          }
        });
      }
    }
  }

  /**
   * Met à jour le cache depuis un purchase (pour les suggestions)
   */
  updateFromPurchase(purchase) {
    if (purchase.store && purchase.store.trim()) {
      this.cache.purchases.stores.add(purchase.store.trim());
    }
    if (purchase.who && purchase.who.trim()) {
      this.cache.purchases.users.add(purchase.who.trim());
    }
  }

  /**
   * Met à jour le cache depuis plusieurs ingredients
   */
  updateFromIngredients(ingredients) {
    ingredients.forEach(ingredient => this.updateFromIngredient(ingredient));
  }

  /**
   * Met à jour le cache depuis plusieurs purchases
   */
  updateFromPurchases(purchases) {
    purchases.forEach(purchase => this.updateFromPurchase(purchase));
  }

  /**
   * Fusionne deux sets et retourne un tableau trié
   */
  mergeCaches(set1, set2) {
    const merged = new Set([...set1, ...set2]);
    return Array.from(merged).sort();
  }

  /**
   * Accès pour les filtres (uniquement depuis ingredients)
   */
  getIngredientStores() {
    const stores = Array.from(this.cache.ingredients.stores).sort();
    return stores;
  }

  getIngredientUsers() {
    const users = Array.from(this.cache.ingredients.users).sort();
    return users;
  }

  /**
   * Accès pour les suggestions (merge ingredients + purchases)
   */
  getSuggestions(type) {
    if (type === 'volunteer') {
      return this.mergeCaches(this.cache.ingredients.users, this.cache.purchases.users);
    } else if (type === 'store') {
      return this.mergeCaches(this.cache.ingredients.stores, this.cache.purchases.stores);
    }
    return [];
  }

  /**
   * Vérifie si les caches existent dans localStorage et les initialise si nécessaire
   */
  checkAndInitializeCaches(listId, transformedIngredients, purchases = []) {
    // console.log('[SuggestionsCache] Vérification de la présence des caches:', { listId });

    const ingredientsKey = `${this.storagePrefix}${listId}_ingredients_cache`;
    const purchasesKey = `${this.storagePrefix}${listId}_purchases_cache`;

    const ingredientsCacheExists = localStorage.getItem(ingredientsKey) !== null;
    const purchasesCacheExists = localStorage.getItem(purchasesKey) !== null;

    if (!ingredientsCacheExists || !purchasesCacheExists) {
      // console.log('[SuggestionsCache] Création des caches manquants...');

      // Charger depuis localStorage d'abord (au cas où un des deux existe)
      this.loadFromStorage(listId);

      // Initialiser avec les données actuelles
      this.initializeFromData(transformedIngredients, purchases);

      // Sauvegarder
      this.saveToStorage(listId);

      // console.log('[SuggestionsCache] Création des caches terminée');
    } else {
      // console.log('[SuggestionsCache] Les caches existent déjà, chargement...');
      this.loadFromStorage(listId);
    }
  }

  /**
   * Initialise le cache depuis les données existantes (sans effacer les données existantes)
   */
  initializeFromData(transformedIngredients, purchases = []) {
    // console.log('[SuggestionsCache] Initialisation depuis les données existantes:', {
    //   ingredientsCount: transformedIngredients.length,
    //   purchasesCount: purchases.length,
    //   currentCacheState: this.getStats()
    // });

    // S'assurer que les caches existent
    this.ensureCacheExists();

    // Vérifier que les structures sont bien des Sets
    if (!(this.cache.ingredients.stores instanceof Set)) {
      console.warn('[SuggestionsCache] ingredients.stores n\'est pas un Set, réinitialisation...');
      this.cache.ingredients.stores = new Set();
    }
    if (!(this.cache.ingredients.users instanceof Set)) {
      console.warn('[SuggestionsCache] ingredients.users n\'est pas un Set, réinitialisation...');
      this.cache.ingredients.users = new Set();
    }
    if (!(this.cache.purchases.stores instanceof Set)) {
      console.warn('[SuggestionsCache] purchases.stores n\'est pas un Set, réinitialisation...');
      this.cache.purchases.stores = new Set();
    }
    if (!(this.cache.purchases.users instanceof Set)) {
      console.warn('[SuggestionsCache] purchases.users n\'est pas un Set, réinitialisation...');
      this.cache.purchases.users = new Set();
    }

    // Charger depuis les ingredients (pour filtres) - AJOUT seulement
    const oldIngredientStores = this.cache.ingredients.stores.size;
    const oldIngredientUsers = this.cache.ingredients.users.size;

    this.updateFromIngredients(transformedIngredients);

    // Charger depuis les purchases (pour suggestions) - AJOUT seulement
    const oldPurchaseStores = this.cache.purchases.stores.size;
    const oldPurchaseUsers = this.cache.purchases.users.size;

    this.updateFromPurchases(purchases);

    // console.log('[SuggestionsCache] Cache enrichi depuis les données:', {
    //   ingredients: {
    //     count: transformedIngredients.length,
    //     newStores: this.cache.ingredients.stores.size - oldIngredientStores,
    //     newUsers: this.cache.ingredients.users.size - oldIngredientUsers,
    //     totalStores: this.cache.ingredients.stores.size,
    //     totalUsers: this.cache.ingredients.users.size
    //   },
    //   purchases: {
    //     count: purchases.length,
    //     newStores: this.cache.purchases.stores.size - oldPurchaseStores,
    //     newUsers: this.cache.purchases.users.size - oldPurchaseUsers,
    //     totalStores: this.cache.purchases.stores.size,
    //     totalUsers: this.cache.purchases.users.size
    //   }
    // });
  }

  /**
   * Vide tous les caches
   */
  clearAll() {
    this.cache.ingredients.stores.clear();
    this.cache.ingredients.users.clear();
    this.cache.purchases.stores.clear();
    this.cache.purchases.users.clear();
  }

  /**
   * Retourne des statistiques sur les caches
   */
  getStats() {
    return {
      ingredients: {
        stores: this.cache.ingredients.stores.size,
        users: this.cache.ingredients.users.size
      },
      purchases: {
        stores: this.cache.purchases.stores.size,
        users: this.cache.purchases.users.size
      }
    };
  }

  /**
   * Génère la clé de stockage pour une liste donnée
   */
  _getStorageKey(listId, dataType) {
    return `${this.storagePrefix}${listId}_${dataType}`;
  }

  /**
   * Sauvegarde toutes les données dans localStorage en une seule écriture
   */
  saveAllData(listId, data) {
    try {
      const key = this._getStorageKey(listId, 'all');
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);

      // Mettre à jour le timestamp de synchronisation
      this.updateLastSyncTimestamp(listId);

      // console.log(`[LocalStorage] Données sauvegardées: ${key}`, {
      //   event: !!data.event,
      //   ingredientsCount: data.ingredients?.length || 0,
      //   purchasesCount: data.purchases?.length || 0
      // });

      // Vérifier et initialiser les caches de suggestions si nécessaire
      this._ensureSuggestionsCaches(listId, data.ingredients, data.purchases);
    } catch (error) {
      console.error(`[LocalStorage] Erreur lors de la sauvegarde des données:`, error);
      // Gérer le cas où le localStorage est plein
      if (error.name === 'QuotaExceededError') {
        this._handleStorageQuotaExceeded(listId);
      }
    }
  }

  /**
   * Récupère toutes les données depuis localStorage en une seule lecture
   */
  loadAllData(listId) {
    try {
      const key = this._getStorageKey(listId, 'all');
      const serializedData = localStorage.getItem(key);

      if (!serializedData) {
        return {
          event: null,
          ingredients: [],
          purchases: [],
          lastSyncTimestamp: null
        };
      }

      const data = JSON.parse(serializedData);
      const lastSyncTimestamp = this.getLastSyncTimestamp(listId);

      // console.log(`[LocalStorage] Données chargées: ${key}`, {
      //   event: !!data.event,
      //   ingredientsCount: data.ingredients?.length || 0,
      //   purchasesCount: data.purchases?.length || 0
      // });

      // Vérifier et initialiser les caches de suggestions si nécessaire
      this._ensureSuggestionsCaches(listId, data.ingredients, data.purchases);

      return {
        ...data,
        lastSyncTimestamp
      };
    } catch (error) {
      console.error('[LocalStorage] Erreur lors du chargement des données:', error);
      return {
        event: null,
        ingredients: [],
        purchases: [],
        lastSyncTimestamp: null
      };
    }
  }

  /**
   * Vérifie l'existence des caches de suggestions et les crée si nécessaire
   */
  _ensureSuggestionsCaches(listId, ingredients, purchases) {
    // console.log('[LocalStorage] Vérification des caches de suggestions...', {
    //   listId,
    //   hasIngredients: !!(ingredients && ingredients.length > 0),
    //   hasPurchases: !!(purchases && purchases.length > 0)
    // });

    // Vérifier si les caches existent
    const ingredientsKey = `${this.storagePrefix}${listId}_ingredients_cache`;
    const purchasesKey = `${this.storagePrefix}${listId}_purchases_cache`;

    const ingredientsCacheExists = localStorage.getItem(ingredientsKey) !== null;
    const purchasesCacheExists = localStorage.getItem(purchasesKey) !== null;

    if (!ingredientsCacheExists || !purchasesCacheExists) {
      // console.log('[LocalStorage] Création des caches de suggestions manquants...');

      // Initialiser les caches avec les données brutes
      this.checkAndInitializeCaches(listId, ingredients, purchases);

      // console.log('[LocalStorage] Caches de suggestions créés avec succès');
    } else {
      // console.log('[LocalStorage] Chargement des caches de suggestions existants...');
      this.loadFromStorage(listId);
    }
  }

  

  /**
   * Met à jour le timestamp de dernière synchronisation
   */
  updateLastSyncTimestamp(listId) {
    const timestamp = new Date().toISOString();
    const key = this._getStorageKey(listId, 'lastSyncTimestamp');
    localStorage.setItem(key, timestamp);
  }

  /**
   * Récupère le timestamp de dernière synchronisation
   */
  getLastSyncTimestamp(listId) {
    const key = this._getStorageKey(listId, 'lastSyncTimestamp');
    const timestamp = localStorage.getItem(key);
    return timestamp ? new Date(timestamp) : null;
  }

  /**
   * Vérifie si des données existent pour une liste
   */
  hasData(listId) {
    const timestamp = this.getLastSyncTimestamp(listId);
    return timestamp !== null;
  }

  /**
   * Efface toutes les données pour une liste
   */
  clearData(listId) {
    const keys = [
      this._getStorageKey(listId, 'event'),
      this._getStorageKey(listId, 'ingredients'),
      this._getStorageKey(listId, 'purchases'),
      this._getStorageKey(listId, 'lastSyncTimestamp')
    ];

    keys.forEach(key => {
      localStorage.removeItem(key);
    });

    console.log(`[LocalStorage] Données effacées pour la liste: ${listId}`);
  }

  /**
   * Met à jour un document spécifique dans le cache
   */
  updateDocument(listId, dataType, documentId, updates) {
    const allData = this.loadAllData(listId);
    const data = allData[dataType];
    if (!data || !Array.isArray(data)) return false;

    const index = data.findIndex(doc => doc.$id === documentId);
    if (index !== -1) {
      // Mettre à jour le document existant
      data[index] = { ...data[index], ...updates, $updatedAt: new Date().toISOString() };
    } else {
      // Ajouter un nouveau document
      data.push({ $id: documentId, ...updates, $createdAt: new Date().toISOString(), $updatedAt: new Date().toISOString() });
    }

    this.saveAllData(listId, allData);
    return true;
  }

  /**
   * Supprime un document spécifique du cache
   */
  removeDocument(listId, dataType, documentId) {
    const allData = this.loadAllData(listId);
    const data = allData[dataType];
    if (!data || !Array.isArray(data)) return false;

    const filteredData = data.filter(doc => doc.$id !== documentId);

    if (filteredData.length !== data.length) {
      allData[dataType] = filteredData;
      this.saveAllData(listId, allData);
      return true;
    }

    return false;
  }

  /**
   * Gère le cas où le localStorage est plein
   */
  _handleStorageQuotaExceeded(listId) {
    console.warn('[LocalStorage] Quota dépassé, nettoyage des anciennes données...');

    // Effacer les données les plus anciennes
    const allKeys = Object.keys(localStorage);
    const listKeys = allKeys.filter(key => key.startsWith(this.storagePrefix));

    // Trier par date de modification (approximative)
    listKeys.sort((a, b) => {
      const aData = localStorage.getItem(a);
      const bData = localStorage.getItem(b);
      // Simple heuristique : supposer que les données plus grandes sont plus récentes
      return bData.length - aData.length;
    });

    // Supprimer les 25% les plus anciennes
    const keysToDelete = listKeys.slice(Math.floor(listKeys.length * 0.75));
    keysToDelete.forEach(key => localStorage.removeItem(key));

    console.log(`[LocalStorage] ${keysToDelete.length} anciennes entrées supprimées`);
  }

  /**
   * Calcule la taille totale utilisée par le cache
   */
  getStorageUsage() {
    const allKeys = Object.keys(localStorage);
    const collabKeys = allKeys.filter(key => key.startsWith(this.storagePrefix));

    let totalSize = 0;
    collabKeys.forEach(key => {
      totalSize += localStorage.getItem(key).length;
    });

    return {
      totalEntries: collabKeys.length,
      totalSizeBytes: totalSize,
      totalSizeKB: Math.round(totalSize / 1024 * 100) / 100
    };
  }

  /**
   * Efface toutes les données collaboratives du localStorage
   */
  clearAllCollaborativeData() {
    const allKeys = Object.keys(localStorage);
    const collabKeys = allKeys.filter(key => key.startsWith(this.storagePrefix));

    collabKeys.forEach(key => localStorage.removeItem(key));

    console.log(`[LocalStorage] Toutes les données collaboratives ont été effacées (${collabKeys.length} entrées)`);
  }
}

// Exporter une instance unique du service
export const localStorageService = new LocalStorageService();
