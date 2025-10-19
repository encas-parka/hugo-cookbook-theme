import { PersistedState } from 'runed';
import { useDebounce } from 'runed';
import { createStorageKey } from '../utils/url-utils';
import type { Products, Purchases } from '../types/appwrite.d';
import type { NumericQuantity, QuantityInfo, StoreInfo } from '../types/store.types';
import {
  loadProducts,
  syncProducts,
  syncProductsAndPurchases,
  applyProductUpdates,
  subscribeToRealtime,
  type LoadProductsOptions,
  type SyncOptions
} from '../services/appwrite-interactions';

/**
 * ProductsStore - Store des produits avec flux de données réactif Svelte 5
 *
 * Architecture moderne avec séparation des responsabilités :
 * ┌─────────────────────────────────────────────────────────────┐
 * │                    ProductsStore                           │
 * │  • Gestion d'état réactif (Svelte 5)                       │
 * │  • Logique métier (filtres, formatage, groupement)        │
 * │  • UI réactive (loading, error, syncing)                  │
 * └─────────────────▲───────────────────────────────────────────┘
 *                   │ Appelle les services
 *                   │
 * ┌─────────────────▼───────────────────────────────────────────┐
 * │              appwrite-interactions                         │
 * │  • Accès aux données Appwrite pur                          │
 * │  • Logique de chargement, synchro, realtime               │
 * │  • Transformations de données sans état                   │
 * └─────────────────────────────────────────────────────────────┘
 *
 * Flux de données automatique avec $derived (pas de synchronisation manuelle) :
 *
 * products (bruts, issus d'appwrite-interactions)
 *   ↓ filteredProducts (filtrés par recherche/store/type/etc.)
 *   ↓ formattedProducts (formatés pour l'affichage)
 *   ↓ groupedFormattedProducts (groupés par magasin/type)
 *
 * Services utilisés :
 * • loadProducts() : Chargement initial des produits avec achats
 * • syncProducts() : Synchronisation incrémentielle (si cache existant)
 * • applyProductUpdates() : Application des mises à jour de sync
 * • subscribeToRealtime() : Abonnement aux événements temps réel
 *
 * @usage
 * await productsStore.initialize('mainId');
 * productsStore.setSearchQuery('pâtes');     // Met à jour tout le flux automatiquement
 * productsStore.toggleStore('Carrefour');   // Reactive les dérivés
 */

/**
 * État principal des produits utilisé avec PersistedState
 */
interface ProductsState {
  products: Products[];
  loading: boolean;
  error: string | null;
  syncing: boolean;
  realtimeConnected: boolean;
}

/**
 * État de synchronisation pour le suivi des dernières mises à jour
 */
interface SyncState {
  lastSync: string | null;
  mainId: string | null;
}

// =============================================================================
// CONFIGURATION
// =============================================================================

const { Query } = window.Appwrite;
const BATCH_LIMIT = 1000;           // Limite de produits par requête Appwrite
const SYNC_DEBOUNCE_MS = 500;       // Délai de debounce pour la synchro en arrière-plan

// =============================================================================
// STORE SINGLETON - État partagé réactif Svelte 5
// =============================================================================

class ProductsStore {

  #currentMainId = $state<string | null>(null);

  #isInitialized = $state(false);

  #productsState: PersistedState<ProductsState> | null = $state(null);

  #syncState: PersistedState<SyncState> | null = $state(null);

  #unsubscribe: (() => void) | null = $state(null);

  // Cache pour les produits enrichis afin d'éviter les re-calculs lourds
  #enrichmentCache = $state(new Map<string, any>());

  // Utilitaire pour parser JSON en toute sécurité
  #safeJsonParse<T>(jsonString: string | null, defaultValue: T | null = null): T | null {
    if (!jsonString || jsonString.trim() === '') {
      return defaultValue;
    }

    try {
      return JSON.parse(jsonString) as T;
    } catch (error) {
      console.warn('[ProductsStore] Erreur de parsing JSON, utilisation de la valeur par défaut:', error);
      return defaultValue;
    }
  }

  // États dérivés directement depuis PersistedState - plus de duplication !
  products = $derived(this.#productsState?.current.products ?? []);
  loading = $derived(this.#productsState?.current.loading ?? false);
  error = $derived(this.#productsState?.current.error ?? null);
  syncing = $derived(this.#productsState?.current.syncing ?? false);
  realtimeConnected = $derived(this.#productsState?.current.realtimeConnected ?? false);
  lastSync = $derived(this.#syncState?.current.lastSync ?? null);
  mainId = $derived(this.#syncState?.current.mainId ?? null);


  // États des filtres
  #filters = $state({
    searchQuery: '',
    selectedStores: [] as string[],
    selectedWho: [] as string[],
    selectedProductTypes: [] as string[],
    selectedTemperatures: [] as string[],
    groupBy: 'productType' as 'store' | 'productType' | 'none',
    sortColumn: '',
    sortDirection: 'asc' as 'asc' | 'desc'
  });

  // Exposition des filtres (lecture/écriture)
  get filters() { return this.#filters; }

  // ===============================================================
  //  Mise a jours de données consommé par les templates
  // ===============================================================

  // Étape 1 : Parsing & Formatting (calculé une seule fois avec optimisation cache)
  enrichedProducts = $derived.by(() => {
    return this.products.map(p => {
      // Clé de cache basée sur l'ID et la date de modification pour détecter les changements
      const cacheKey = `${p.$id}-${p.$updatedAt}`;

      // Vérifier si le produit est déjà en cache et inchangé
      if (this.#enrichmentCache.has(cacheKey)) {
        return this.#enrichmentCache.get(cacheKey)!;
      }

      // Calculer l'enrichissement seulement si nécessaire
      const totalPurchasesArray = this.#calculateTotalPurchasesArray(p.purchases ?? []);

      const totalNeededArray = p.totalNeededConsolidated
        ? this.#parseToNumericQuantity(p.totalNeededConsolidated)
        : [];

      const { numeric: missingQuantityArray, display: displayMissingQuantity } =
        this.#calculateAndFormatMissing(totalNeededArray, totalPurchasesArray);

      const enriched = {
        ...p,
        // Parsing des JSON strings en objets exploitables
        storeInfo: p.store ? this.#safeJsonParse<StoreInfo>(p.store) : null,
        totalNeededArray,
        totalPurchasesArray,
        recipesArray: p.recipesOccurrences ? this.#safeJsonParse(p.recipesOccurrences) : [],
        stockArray: p.stockReel ? this.#safeJsonParse(p.stockReel) : [],
        missingQuantityArray,
        // Propriétés formatées pour l'affichage
        displayTotalNeeded: this.#formatTotalQuantity(totalNeededArray),
        // displayName: p.productName.trim(), // UNUSED
        displayTotalPurchases:  this.#formatTotalQuantity(totalPurchasesArray ?? []), // FIXIT : reactivité perdu avec la strategie de cache : le updatedAt ne change pas lorsqu'un nouveau purchase arrive !!

        displayMissingQuantity, // Utilise la valeur déjà formatée
      };

      // Mettre en cache pour les prochaines utilisations
      this.#enrichmentCache.set(cacheKey, enriched);


      return enriched;
    });
  });

  // Valeurs uniques pour les filtres (utilise enrichedProducts)
  uniqueStores = $derived.by(() => {
    const storeNames = this.enrichedProducts
      .map(p => p.storeInfo?.storeName)
      .filter(Boolean);

    return [...new Set(storeNames)] as string[];
  });

  uniqueWho = $derived.by(() => [...new Set(this.products.flatMap(p => p.who || []).filter(Boolean))] as string[]);
  uniqueProductTypes = $derived.by(() => [...new Set(this.products.map(p => p.productType).filter(Boolean))] as string[]);

  // Étape 2 : Filtrage & Groupement (réactif aux filtres)
  filteredGroupedProducts = $derived.by(() => {
    // Filtrage
    const filtered = this.enrichedProducts.filter(p => this.#matchesFilters(p));

    // Groupement
    if (this.#filters.groupBy === 'none') {
      return { '': filtered };
    }

    return Object.groupBy(filtered, (product) => {
      if (this.#filters.groupBy === 'store') {
        return product.storeInfo?.storeName || 'Non défini';
      } else {
        return product.productType || 'Non défini';
      }
    });
  });

  // Alias pour compatibilité avec l'existant
  filteredProducts = $derived.by(() => {
    const groups = Object.values(this.filteredGroupedProducts);
    return groups.flat();
  });

  groupedFormattedProducts = $derived.by(() => this.filteredGroupedProducts);

  // Statistiques dérivées
  stats = $derived.by(() => ({
    total: this.filteredProducts.length,
    frais: this.filteredProducts.filter(p => p.pFrais).length,
    surgel: this.filteredProducts.filter(p => p.pSurgel).length,
    merged: this.filteredProducts.filter(p => p.isMerged).length,
  }));

  // Getters pour l'accès
  get currentMainId() { return this.#currentMainId; }
  get isInitialized() { return this.#isInitialized; }

  #debouncedUpdateLastSync = useDebounce(() => {
    this.#updateLastSync();
  }, SYNC_DEBOUNCE_MS);

  // =========================================================================
  // INITIALISATION
  // =========================================================================

  /**
   * Initialise le store avec un mainId
   * @param mainId - Identifiant du main à charger
   *
   * Flux d'initialisation :
   * 1. Crée les états persistés (products-state, sync-state)
   * 2. Charge depuis le cache OU fait un chargement initial via loadProducts()
   * 3. Synchronise incrémentiellement via syncProducts() si cache existant
   * 4. Configure l'abonnement realtime via subscribeToRealtime()
   */

  async initialize(mainId: string) {
    if (!mainId?.trim()) {
      throw new Error('mainId invalide fourni');
    }

    // Éviter les ré-initialisations inutiles
    if (this.#isInitialized && this.#currentMainId === mainId) {
      console.log(`[ProductsStore] Déjà initialisé pour mainId: ${mainId}`);
      return;
    }

    console.log(`[ProductsStore] Initialisation avec mainId: ${mainId}`);

    this.#currentMainId = mainId;
    this.#isInitialized = true;

    this.#createPersistedStates(mainId);

    // Charger depuis le cache ou Appwrite
    const hasCache = this.products.length > 0 && this.#syncState!.current.mainId === mainId;
    if (hasCache) {
      console.log(`[ProductsStore] Utilisation du cache (${this.products.length} produits)`);
      await this.#syncInBackground();
    } else {
      console.log('[ProductsStore] Chargement initial depuis Appwrite');
      await this.#loadProductsFromService(mainId);
    }

    // Configuration realtime
    const callbacks = this.#setupRealtimeCallbacks();
    this.#unsubscribe = subscribeToRealtime(mainId, callbacks);
  }

  #createPersistedStates(mainId: string) {
    if (this.#productsState && this.#syncState) {
      return; // Déjà créés
    }

    const productsKey = createStorageKey('products-state', mainId);
    const syncKey = createStorageKey('products-sync-state', mainId);

    console.log(`[ProductsStore] Clés de stockage: ${productsKey}, ${syncKey}`);

    this.#productsState = new PersistedState<ProductsState>(productsKey, {
      products: [],
      loading: false,
      error: null,
      syncing: false,
      realtimeConnected: false
    });

    this.#syncState = new PersistedState<SyncState>(syncKey, {
      lastSync: null,
      mainId: null
    });

  }

  // =========================================================================
  // CHARGEMENT & SYNCHRONISATION
  // =========================================================================

  async #loadProductsFromService(mainId: string) {
    if (!this.#productsState) {
      throw new Error('ProductsStore non initialisé');
    }

    this.#updateState({ loading: true, error: null });

    try {
      const options: LoadProductsOptions = {
        includePurchases: true,
        limit: BATCH_LIMIT,
        orderBy: 'productName',
        orderDirection: 'asc'
      };

      const productsWithPurchases = await loadProducts(mainId, options);
      this.#updateState({ products: productsWithPurchases });
      this.#updateLastSync();
      console.log(`[ProductsStore] ${productsWithPurchases.length} produits chargés`);

    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erreur lors du chargement';
      this.#updateState({ loading: false, error: message });
      console.error('[ProductsStore]', message, err);
      throw err;
    }
  }

  async #syncInBackground() {
    if (!this.#syncState?.current.lastSync) {
      return;
    }

    this.#updateState({ syncing: true });

    try {
      const options: SyncOptions = {
        lastSync: this.#syncState.current.lastSync,
        limit: BATCH_LIMIT
      };

      // 🚨 NOUVEAU : Synchronisation hybride products + purchases
      const { products: updatedProducts, purchases: updatedPurchases } =
        await syncProductsAndPurchases(this.#currentMainId!, options);

      let hasChanges = false;

      // Appliquer les mises à jour de produits
      if (updatedProducts.length > 0) {
        this.#updateState({
          products: applyProductUpdates(this.products, updatedProducts)
        });
        hasChanges = true;
        console.log(`[ProductsStore] ${updatedProducts.length} mises à jour de produits synchronisées`);
      }

      // 🆕 Appliquer les mises à jour de purchases
      if (updatedPurchases.length > 0) {
        this.#applyPurchaseUpdates(updatedPurchases);
        hasChanges = true;
        console.log(`[ProductsStore] ${updatedPurchases.length} mises à jour d'achats synchronisées`);
      }

      // Mettre à jour le timestamp de sync si des changements ont eu lieu
      if (hasChanges) {
        this.#updateLastSync();
      }

      this.#updateState({ syncing: false });

    } catch (err) {
      console.error('[ProductsStore] Erreur sync:', err);
      this.#updateState({ syncing: false });
    }
  }

  // =========================================================================
  // GESTION DÉTAT
  // =========================================================================

  #handleProductCreate(createdProduct: Products) {
    if (!this.#productsState) return;

    const exists = this.products.some(p => p.$id === createdProduct.$id);
    if (!exists) {
      this.#updateState({
        products: [...this.products, createdProduct]
      });
    }
  }

  #handleProductUpdate(updatedProduct: Products) {
    if (!this.#productsState) return;

    // Merge the updated fields with the existing product to preserve all data
    this.#updateState({
      products: this.products.map(p => {
        if (p.$id === updatedProduct.$id) {
          // Create a merged product that preserves all existing fields
          // while updating only the fields that came in the payload
          const refreshedProducts = { ...p };

          // Only update the fields that are present in the payload (le payload ne contient pas tous les champs, risque de perdre des données si update non granulaire)
          Object.keys(updatedProduct).forEach(key => {
            if (updatedProduct[key as keyof Products] !== undefined) {
              (refreshedProducts as any)[key] = updatedProduct[key as keyof Products];
            }
          });

          return refreshedProducts;
        }
        return p;
      })
    });
  }

  #handleProductDelete(deletedProductId: string) {
    if (!this.#productsState) return;

    this.#updateState({
      products: this.products.filter(p => p.$id !== deletedProductId)
    });
  }

  #handlePurchaseCreate(purchase: Purchases) {
    console.log('[ProductsStore] Purchase créé, mise à jour des produits concernés...');
    this.#updateProductsFromPurchase(purchase);
  }

  #handlePurchaseUpdate(purchase: Purchases) {
    console.log('[ProductsStore] Purchase mis à jour, mise à jour des produits concernés...');
    this.#updateProductsFromPurchase(purchase);
  }

  #handlePurchaseDelete(purchaseId: string) {
    console.log('[ProductsStore] Purchase supprimé, nettoyage des produits concernés...');

    // Retirer le purchase supprimé de tous les produits et mettre à jour updatedAt
    const affectedProducts = this.products.filter(product =>
      product.purchases && product.purchases.some(p => p.$id === purchaseId)
    );

    this.#updateState({
      products: this.products.map(product => {
        const hadThePurchase = product.purchases && product.purchases.some(p => p.$id === purchaseId);

        return {
          ...product,
          purchases: (product.purchases || []).filter(p => p.$id !== purchaseId),
          // 🚨 Mettre à jour updatedAt seulement si le produit était affecté
          ...(hadThePurchase && { $updatedAt: new Date().toISOString() })
        };
      })
    });

    if (affectedProducts.length > 0) {
      console.log(`[ProductsStore] Purchase ${purchaseId} supprimé de ${affectedProducts.length} produit(s)`);
    }
  }

  #updateProductsFromPurchase(purchase: Purchases) {
    if (!purchase.products || purchase.products.length === 0 ) return;

    // Mettre à jour uniquement les produits concernés par ce purchase
    this.#updateState({
      products: this.products.map(product => {
        if (purchase.products.some(p => p.$id === product.$id)) {
          // Ajouter ou mettre à jour le purchase dans la liste des purchases du produit
          const existingPurchases = product.purchases || [];
          const updatedPurchases = existingPurchases.filter(p => p.$id !== purchase.$id);
          updatedPurchases.push(purchase);

          return {
            ...product,
            purchases: updatedPurchases,
            // 🚨 Mettre à jour updatedAt pour forcer le recalcul du cache
            $updatedAt: new Date().toISOString()
          };
        }
        return product;
      })
    });

    console.log(`[ProductsStore] ${purchase.products.length} produit(s) mis à jour avec le purchase ${purchase.$id}`);
  }

  /**
   * Applique les mises à jour de purchases reçues de la synchronisation
   * @param updatedPurchases - Purchases mis à jour depuis Appwrite
   */
  #applyPurchaseUpdates(updatedPurchases: Purchases[]) {
    if (!updatedPurchases || updatedPurchases.length === 0) return;

    this.#updateState({
      products: this.products.map(product => {
        // Trouver les purchases qui concernent ce produit
        const relevantPurchases = updatedPurchases.filter(purchase =>
          purchase.products && purchase.products.some((p: any) => p.$id === product.$id)
        );

        if (relevantPurchases.length > 0) {
          // Fusionner les purchases existants avec les nouveaux
          const existingPurchases = product.purchases || [];
          let updatedPurchasesList = [...existingPurchases];

          relevantPurchases.forEach(newPurchase => {
            // Remplacer ou ajouter le purchase
            updatedPurchasesList = updatedPurchasesList.filter(p => p.$id !== newPurchase.$id);
            updatedPurchasesList.push(newPurchase);
          });

          return {
            ...product,
            purchases: updatedPurchasesList,
            // 🚨 Mettre à jour updatedAt pour forcer le recalcul du cache
            $updatedAt: new Date().toISOString()
          };
        }
        return product;
      })
    });

    console.log(`[ProductsStore] ${updatedPurchases.length} purchases synchronisés et appliqués`);
  }

  #setupRealtimeCallbacks() {
    return {
      onProductCreate: (product: Products) => {
        this.#handleProductCreate(product);
        this.#debouncedUpdateLastSync();
      },
      onProductUpdate: (product: Products) => {
        this.#handleProductUpdate(product);
        this.#debouncedUpdateLastSync();
      },
      onProductDelete: (productId: string) => {
        this.#handleProductDelete(productId);
        this.#debouncedUpdateLastSync();
      },
      onPurchaseCreate: (purchase: Purchases) => {
        this.#handlePurchaseCreate(purchase);
        this.#debouncedUpdateLastSync();
      },
      onPurchaseUpdate: (purchase: Purchases) => {
        this.#handlePurchaseUpdate(purchase);
        this.#debouncedUpdateLastSync();
      },
      onPurchaseDelete: (purchaseId: string) => {
        this.#handlePurchaseDelete(purchaseId);
        this.#debouncedUpdateLastSync();
      },
      onConnect: () => {
        console.log('[ProductsStore] Realtime connecté');
        this.#updateState({ realtimeConnected: true });
      },
      onDisconnect: () => {
        console.log('[ProductsStore] Realtime déconnecté');
        this.#updateState({ realtimeConnected: false });
      },
      onError: (error: any) => {
        console.error('[ProductsStore] Erreur realtime:', error);
      }
    };
  }

  #updateLastSync() {
    if (!this.#currentMainId || !this.#syncState) return;

    const now = new Date().toISOString();
    this.#syncState.current = {
      lastSync: now,
      mainId: this.#currentMainId
    };
    this.lastSync = now;
    this.mainId = this.#currentMainId;
  }

  #updateState(partial: Partial<ProductsState>) {
    if (!this.#productsState) return;

    this.#productsState.current = {
      ...this.#productsState.current,
      ...partial
    };
  }

  // =========================================================================
  // UTILITAIRES PUBLICS
  // =========================================================================

  async forceReload(mainId: string) {
    await this.#loadProductsFromService(mainId);
  }

  destroy() {
    this.#unsubscribe?.();
    this.#unsubscribe = null;
    console.log('[ProductsStore] Ressources nettoyées');
  }

  clearCache() {
    if (!this.#productsState || !this.#syncState) {
      console.warn('[ProductsStore] Store non initialisé');
      return;
    }

    this.#updateState({
      products: [],
      loading: false,
      error: null,
      syncing: false,
      realtimeConnected: false
    });

    this.#syncState.current = {
      lastSync: null,
      mainId: null
    };

    console.log(`[ProductsStore] Cache vidé pour ${this.#currentMainId}`);
  }

  // =========================================================================
  // MÉTHODES DE FILTRAGE PUBLICS
  // =========================================================================

  // Méthodes publiques pour manipuler les filtres
  setSearchQuery(query: string) {
    this.#filters.searchQuery = query;
  }

  toggleProductType(type: string) {
    const index = this.#filters.selectedProductTypes.indexOf(type);
    if (index > -1) {
      this.#filters.selectedProductTypes.splice(index, 1);
    } else {
      this.#filters.selectedProductTypes.push(type);
    }
  }

  toggleTemperature(temperature: 'frais' | 'surgele') {
    const index = this.#filters.selectedTemperatures.indexOf(temperature);
    if (index > -1) {
      this.#filters.selectedTemperatures.splice(index, 1);
    } else {
      this.#filters.selectedTemperatures.push(temperature);
    }
  }

  clearTypeAndTemperatureFilters() {
    this.#filters.selectedProductTypes = [];
    this.#filters.selectedTemperatures = [];
  }

  // =============================================================================
  // MÉTHODES OBSOLÈTES (conservées pour référence)
  // =============================================================================

  // setProductType(type: string) {
  //   // OBSOLÈTE: Remplacé par toggleProductType() pour filtres cumulatifs
  //   this.#filters.selectedProductType = type;
  // }

  // setTemperatureFilters(showPFrais: boolean, showPSurgel: boolean) {
  //   // OBSOLÈTE: Remplacé par toggleTemperature() pour filtres cumulatifs
  //   this.#filters.showPFrais = showPFrais;
  //   this.#filters.showPSurgel = showPSurgel;
  // }

  setGroupBy(groupBy: 'store' | 'productType' | 'none') {
    this.#filters.groupBy = groupBy;
  }

  toggleStore(store: string) {
    const index = this.#filters.selectedStores.indexOf(store);
    if (index > -1) {
      this.#filters.selectedStores.splice(index, 1);
    } else {
      this.#filters.selectedStores.push(store);
    }
  }

  toggleWho(who: string) {
    const index = this.#filters.selectedWho.indexOf(who);
    if (index > -1) {
      this.#filters.selectedWho.splice(index, 1);
    } else {
      this.#filters.selectedWho.push(who);
    }
  }

  clearStoreFilters() {
    this.#filters.selectedStores = [];
  }

  clearWhoFilters() {
    this.#filters.selectedWho = [];
  }



  handleSort(column: string) {
    if (this.#filters.sortColumn === column) {
      this.#filters.sortDirection = this.#filters.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.#filters.sortColumn = column;
      this.#filters.sortDirection = 'asc';
    }
  }

  clearFilters() {
    this.#filters = {
      searchQuery: '',
      selectedStores: [],
      selectedWho: [],
      selectedProductTypes: [],
      selectedTemperatures: [],
      groupBy: 'none',
      sortColumn: '',
      sortDirection: 'asc'
    };
  }

  // Trier les produits
  sortProducts(products: Products[]): Products[] {
    if (!this.#filters.sortColumn) return products;

    return [...products].sort((a, b) => {
      let aVal: any = a[this.#filters.sortColumn as keyof Products];
      let bVal: any = b[this.#filters.sortColumn as keyof Products];

      // Gérer les cas spéciaux
      if (this.#filters.sortColumn === 'totalNeededConsolidated') {
        aVal = parseFloat(aVal) || 0;
        bVal = parseFloat(bVal) || 0;
      } else if (this.#filters.sortColumn === 'purchases') {
        aVal = a.purchases?.length || 0;
        bVal = b.purchases?.length || 0;
      }

      if (aVal < bVal) return this.#filters.sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return this.#filters.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // =========================================================================
  // MÉTHODES PRIVÉES UTILITAIRES
  // =========================================================================

  /**
   * Vérifie si un produit correspond aux filtres actuels
   */
  #matchesFilters(product: any): boolean {
    // Recherche textuelle
    if (this.#filters.searchQuery.trim()) {
      const query = this.#filters.searchQuery.toLowerCase();
      if (!product.productName.toLowerCase().includes(query)) {
        return false;
      }
    }

    // Filtre par store
    if (this.#filters.selectedStores.length > 0) {
      if (!product.storeInfo?.storeName || !this.#filters.selectedStores.includes(product.storeInfo.storeName)) {
        return false;
      }
    }

    // Filtre par who
    if (this.#filters.selectedWho.length > 0) {
      if (!product.who || !product.who.some(w => this.#filters.selectedWho.includes(w))) {
        return false;
      }
    }

    // Filtre par productType (cumulatif)
    if (this.#filters.selectedProductTypes.length > 0) {
      if (!product.productType || !this.#filters.selectedProductTypes.includes(product.productType)) {
        return false;
      }
    }

    // Filtres température (cumulatifs)
    if (this.#filters.selectedTemperatures.length > 0) {
      const hasValidTemperature =
        (this.#filters.selectedTemperatures.includes('frais') && product.pFrais) ||
        (this.#filters.selectedTemperatures.includes('surgele') && product.pSurgel);

      if (!hasValidTemperature) {
        return false;
      }
    }

    return true;
  }

  #formatQuantity(jsonString: string | null): string {
    if (!jsonString) return '-';

    try {
      const quantities = JSON.parse(jsonString);
      if (!Array.isArray(quantities) || quantities.length === 0) return '-';

      return quantities
        .map((q: { quantity: string; unit: string }) => this.#formatSingleQuantity(q.quantity, q.unit))
        .join(' et ');
    } catch {
      return '-';
    }
  }

  #formatSingleQuantity(value: string, unit: string): string {
    const num = parseFloat(value);
    if (isNaN(num)) return `${value} ${unit}`;

    // Conversion gr -> kg et ml -> l si >= 1000
    if ((unit === 'gr.' || unit === 'ml') && num >= 1000) {
      const converted = num / 1000;
      const newUnit = unit === 'gr.' ? 'kg' : 'l.';

      // Arrondi mathématique à 2 décimales + suppression des ,0
      const rounded = Math.round(converted * 100) / 100;
      let formatted = rounded.toString();
      if (formatted.endsWith(',0')) formatted = formatted.slice(0, -2);
      if (formatted.endsWith(',00')) formatted = formatted.slice(0, -3);

      return `${formatted} ${newUnit}`;
    }

    // Pour les unités spécifiques : 1 décimale avec arrondi mathématique + suppression des ,0
    if (!['gr.', 'ml', 'kg', 'l.'].includes(unit)) {
      const rounded = Math.round(num * 10) / 10;
      let formatted = rounded.toString();
      if (formatted.endsWith(',0')) formatted = formatted.slice(0, -2);

      return `${formatted} ${unit}`;
    }

    // Pour gr. et ml (< 1000) : format entier
    return `${num} ${unit}`;
  }


  /**
   * Formate un tableau de quantités numériques en une chaîne lisible.
   * @param total - Le tableau de quantities numériques à formater.
   * @returns Une chaîne représentant les quantités formatées, ou '-' si le tableau est vide.
   * @usages: displayTotalNeeded, displayTotalPurchases
   */
  #formatTotalQuantity(total: NumericQuantity[]): string {
    if (!total || total.length === 0) return '-';

    return total
      .map(p => this.#formatSingleQuantity(p.quantity.toString(), p.unit))
      .join(' et ');
  }

  #parseToNumericQuantity(jsonString: string): NumericQuantity[] {
    try {
      const quantityInfoArray = JSON.parse(jsonString) as QuantityInfo[];
      return quantityInfoArray.map(q => ({
        quantity: parseFloat(q.quantity),
        unit: q.unit
      })).filter(q => !isNaN(q.quantity));
    } catch (error) {
      console.error('[ProductsStore] Erreur parsing NumericQuantity:', error);
      return [];
    }
  }

  #calculateTotalPurchasesArray(purchases: any[]): NumericQuantity[] {
    if (!purchases || purchases.length === 0) return [];

    // Les unités sont déjà normalisées en gr./ml/unités spécifiques
    const quantityMap = new Map<string, number>();

    purchases.forEach(purchase => {
      if (!purchase.quantity || !purchase.unit) return;

      const quantity = parseFloat(purchase.quantity);
      if (isNaN(quantity)) return;

      // Additionner par unité exacte (plus simple car déjà normalisé)
      const existing = quantityMap.get(purchase.unit) || 0;
      quantityMap.set(purchase.unit, existing + quantity);
    });

    const result: NumericQuantity[] = [];
    quantityMap.forEach((total, unit) => {
      result.push({quantity: total, unit});
    });

    return result;
  }


  /**
   * Calcule les quantités manquantes ET leur formatage en une seule passe
   * @param neededArray - Tableau des quantités nécessaires
   * @param purchasesArray - Tableau des quantités achetées
   * @returns Objet contenant le tableau numérique et la chaîne formatée
   */
  #calculateAndFormatMissing(
    neededArray: NumericQuantity[],
    purchasesArray: NumericQuantity[]
  ): { numeric: NumericQuantity[], display: string } {
    if (!neededArray || neededArray.length === 0) {
      return { numeric: [], display: '✅ Complet' };
    }
    if (!purchasesArray || purchasesArray.length === 0) {
      // Pas d'achats, tout est manquant
      const numeric = neededArray.map(n => ({quantity: parseFloat(n.quantity), unit: n.unit}));
      const display = numeric.length > 0
        ? numeric.map(m => this.#formatSingleQuantity(m.quantity.toString(), m.unit)).join(' et ')
        : '✅ Complet';
      return { numeric, display };
    }

    // Créer des maps pour les calculs simples (unités déjà en gr. et ml)
    const neededMap = new Map<string, number>();
    const purchasesMap = new Map<string, number>();

    // Remplir les besoins
    neededArray.forEach(needed => {
      const quantity = parseFloat(needed.quantity);
      if (!isNaN(quantity)) {
        neededMap.set(needed.unit, (neededMap.get(needed.unit) || 0) + quantity);
      }
    });

    // Remplir les achats
    purchasesArray.forEach(purchase => {
      purchasesMap.set(purchase.unit, (purchasesMap.get(purchase.unit) || 0) + purchase.quantity);
    });

    // Calculer la différence : besoins - achats ET formatter en même temps
    const numeric: {quantity: number, unit: string}[] = [];
    const formattedQuantities: string[] = [];

    neededMap.forEach((needed, unit) => {
      const purchased = purchasesMap.get(unit) || 0;
      const missing = needed - purchased;
      if (missing > 0) {
        const missingItem = {quantity: missing, unit};
        numeric.push(missingItem);

        // Formatage immédiat pour éviter un deuxième parcours
        formattedQuantities.push(
          this.#formatSingleQuantity(missing.toString(), unit)
        );
      }
    });

    const display = formattedQuantities.length > 0
      ? formattedQuantities.join(' et ')
      : '✅ Complet';

    return { numeric, display };
  }


}

// =============================================================================
// SINGLETON & EXPORTS
// =============================================================================

export const productsStore = new ProductsStore();


// Export des types
export type { Products, ProductsState, SyncState };
