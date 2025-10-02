/**
 * SuggestionsCacheManager.js
 * Service simple de cache pour les suggestions de magasins et utilisateurs
 * Architecture : 2 caches (ingredients + purchases) avec merge à la volée
 */

export class SuggestionsCacheManager {
  constructor(localStorageService) {
    this.localStorageService = localStorageService;
    this.cache = {
      ingredients: {
        stores: new Set(),    // depuis ing.storesDisplay (pour filtres)
        users: new Set()      // depuis ing.responsibleDisplay (pour filtres)
      },
      purchases: {
        stores: new Set(),    // depuis purchases.store (pour suggestions)
        users: new Set()      // depuis purchases.who (pour suggestions)
      }
    };
  }

  /**
   * Charge les caches depuis localStorage
   */
  loadFromStorage(listId) {
    try {
      console.log(`[SuggestionsCache] Début du chargement depuis localStorage pour listId: ${listId}`);
      
      // S'assurer que les caches existent
      this.ensureCacheExists();
      
      // Charger cache ingredients
      const ingredientsKey = `${this.localStorageService.storagePrefix}${listId}_ingredients_cache`;
      const ingredientsData = localStorage.getItem(ingredientsKey);
      if (ingredientsData) {
        const parsed = JSON.parse(ingredientsData);
        this.cache.ingredients.stores = new Set(parsed.stores || []);
        this.cache.ingredients.users = new Set(parsed.users || []);
        console.log(`[SuggestionsCache] Cache ingredients chargé:`, {
          stores: parsed.stores?.length || 0,
          users: parsed.users?.length || 0
        });
      } else {
        console.log(`[SuggestionsCache] Aucun cache ingredients trouvé pour la clé: ${ingredientsKey}, initialisation à vide`);
        // CRÉER les caches vides explicitement
        this.cache.ingredients.stores = new Set();
        this.cache.ingredients.users = new Set();
      }

      // Charger cache purchases
      const purchasesKey = `${this.localStorageService.storagePrefix}${listId}_purchases_cache`;
      const purchasesData = localStorage.getItem(purchasesKey);
      if (purchasesData) {
        const parsed = JSON.parse(purchasesData);
        this.cache.purchases.stores = new Set(parsed.stores || []);
        this.cache.purchases.users = new Set(parsed.users || []);
        console.log(`[SuggestionsCache] Cache purchases chargé:`, {
          stores: parsed.stores?.length || 0,
          users: parsed.users?.length || 0
        });
      } else {
        console.log(`[SuggestionsCache] Aucun cache purchases trouvé pour la clé: ${purchasesKey}, initialisation à vide`);
        // CRÉER les caches vides explicitement
        this.cache.purchases.stores = new Set();
        this.cache.purchases.users = new Set();
      }

      console.log(`[SuggestionsCache] État final du cache après chargement:`, {
        listId,
        ingredients: {
          stores: this.cache.ingredients.stores.size,
          users: this.cache.ingredients.users.size
        },
        purchases: {
          stores: this.cache.purchases.stores.size,
          users: this.cache.purchases.users.size
        }
      });
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
    
    console.log('[SuggestionsCache] Structures de cache vérifiées/crées:', this.getStats());
  }

  /**
   * Sauvegarde les caches dans localStorage
   */
  saveToStorage(listId) {
    try {
      const ingredientsKey = `${this.localStorageService.storagePrefix}${listId}_ingredients_cache`;
      const purchasesKey = `${this.localStorageService.storagePrefix}${listId}_purchases_cache`;

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

      console.log('[SuggestionsCache] Cache sauvegardé dans localStorage:', {
        listId,
        ingredientsKey,
        purchasesKey,
        ingredientsData,
        purchasesData,
        finalStats: this.getStats()
      });

      console.log(`[SuggestionsCache] Sauvegardé dans localStorage:`, {
        listId,
        ingredients: {
          stores: ingredientsData.stores.length,
          users: ingredientsData.users.length
        },
        purchases: {
          stores: purchasesData.stores.length,
          users: purchasesData.users.length
        }
      });
    } catch (error) {
      console.error('[SuggestionsCache] Erreur lors de la sauvegarde dans localStorage:', error);
    }
  }

  /**
   * Met à jour le cache depuis un ingredient (pour les filtres)
   */
  updateFromIngredient(ingredient) {
    console.log('[SuggestionsCache] Traitement ingredient pour le cache:', {
      ingredientId: ingredient.$id,
      ingredientName: ingredient.ingredientName,
      store: ingredient.store,
      who: ingredient.who
    });
    
    // Les transformedIngredients ont store[] et who[] comme arrays
    if (ingredient.store && Array.isArray(ingredient.store)) {
      ingredient.store.forEach(store => {
        if (store && store.trim() && store.trim() !== '-') {
          this.cache.ingredients.stores.add(store.trim());
          console.log('[SuggestionsCache] Store ajouté:', store.trim());
        }
      });
    }
    
    if (ingredient.who && Array.isArray(ingredient.who)) {
      ingredient.who.forEach(person => {
        if (person && person.trim() && person.trim() !== '-') {
          this.cache.ingredients.users.add(person.trim());
          console.log('[SuggestionsCache] User ajouté:', person.trim());
        }
      });
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
    console.log('[SuggestionsCache] getIngredientStores() appelé ->', {
      cacheExists: !!this.cache?.ingredients,
      storesCount: stores.length,
      stores: stores
    });
    return stores;
  }

  getIngredientUsers() {
    const users = Array.from(this.cache.ingredients.users).sort();
    console.log('[SuggestionsCache] getIngredientUsers() appelé ->', {
      cacheExists: !!this.cache?.ingredients,
      usersCount: users.length,
      users: users
    });
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
    console.log('[SuggestionsCache] Vérification de la présence des caches:', { listId });
    
    const ingredientsKey = `${this.localStorageService.storagePrefix}${listId}_ingredients_cache`;
    const purchasesKey = `${this.localStorageService.storagePrefix}${listId}_purchases_cache`;
    
    const ingredientsCacheExists = localStorage.getItem(ingredientsKey) !== null;
    const purchasesCacheExists = localStorage.getItem(purchasesKey) !== null;
    
    console.log('[SuggestionsCache] Existence des caches:', {
      ingredientsKey,
      purchasesKey,
      ingredientsCacheExists,
      purchasesCacheExists
    });
    
    if (!ingredientsCacheExists || !purchasesCacheExists) {
      console.log('[SuggestionsCache] Création des caches manquants...');
      
      // Charger depuis localStorage d'abord (au cas où un des deux existe)
      this.loadFromStorage(listId);
      
      // Initialiser avec les données actuelles
      this.initializeFromData(transformedIngredients, purchases);
      
      // Sauvegarder
      this.saveToStorage(listId);
      
      console.log('[SuggestionsCache] Création des caches terminée');
    } else {
      console.log('[SuggestionsCache] Les caches existent déjà, chargement...');
      this.loadFromStorage(listId);
    }
  }

  /**
   * Initialise le cache depuis les données existantes (sans effacer les données existantes)
   */
  initializeFromData(transformedIngredients, purchases = []) {
    console.log('[SuggestionsCache] Initialisation depuis les données existantes:', {
      ingredientsCount: transformedIngredients.length,
      purchasesCount: purchases.length,
      currentCacheState: this.getStats()
    });

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
    
    console.log('[SuggestionsCache] Début traitement ingredients pour le cache:', {
      ingredientsCount: transformedIngredients.length,
      sampleIngredient: transformedIngredients[0] ? {
        id: transformedIngredients[0].$id,
        name: transformedIngredients[0].ingredientName,
        store: transformedIngredients[0].store,
        who: transformedIngredients[0].who
      } : null
    });
    
    this.updateFromIngredients(transformedIngredients);

    // Charger depuis les purchases (pour suggestions) - AJOUT seulement  
    const oldPurchaseStores = this.cache.purchases.stores.size;
    const oldPurchaseUsers = this.cache.purchases.users.size;
    
    console.log('[SuggestionsCache] Début traitement purchases pour le cache:', {
      purchasesCount: purchases.length,
      samplePurchase: purchases[0] ? {
        id: purchases[0].$id,
        store: purchases[0].store,
        who: purchases[0].who
      } : null
    });
    
    this.updateFromPurchases(purchases);

    console.log('[SuggestionsCache] Cache enrichi depuis les données:', {
      ingredients: {
        count: transformedIngredients.length,
        newStores: this.cache.ingredients.stores.size - oldIngredientStores,
        newUsers: this.cache.ingredients.users.size - oldIngredientUsers,
        totalStores: this.cache.ingredients.stores.size,
        totalUsers: this.cache.ingredients.users.size
      },
      purchases: {
        count: purchases.length,
        newStores: this.cache.purchases.stores.size - oldPurchaseStores,
        newUsers: this.cache.purchases.users.size - oldPurchaseUsers,
        totalStores: this.cache.purchases.stores.size,
        totalUsers: this.cache.purchases.users.size
      }
    });
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
}