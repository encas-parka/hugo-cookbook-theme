import { SvelteMap } from 'svelte/reactivity';
import superjson from 'superjson';
import { createStorageKey } from '../utils/url-utils';
import { useDebounce } from 'runed';
import type { Products, Purchases } from '../types/appwrite.d';
import type { NumericQuantity, QuantityInfo, StoreInfo, EnrichedProduct, RecipeOccurrence } from '../types/store.types';

import {
  loadProducts,
  syncProductsAndPurchases,
  subscribeToRealtime,
  type LoadProductsOptions,
  loadProductsListByIds,
  loadPurchasesListByIds,
  type SyncOptions
} from '../services/appwrite-interactions';

/**
 * ProductsStore - Architecture SvelteMap pure + persistence manuelle
 *
 * 🎯 Architecture finale :
 * ┌─────────────────────────────────────────────────────────┐
 * │            SvelteMap<id, EnrichedProduct>              │
 * │  • Mutations directes = réactivité immédiate          │
 * │  • Accès O(1) par ID                                  │
 * │  • Dérives réactifs automatiquement                   │
 * └─────────────────────────────────────────────────────────┘
 *         ↓ Consommé par les templates
 *    enrichedProducts (derived)
 *         ↓ Persiste manuellement quand nécessaire
 * ┌─────────────────────────────────────────────────────────┐
 * │            localStorage (superjson)                     │
 * │  • Cache à la lecture (initialize)                    │
 * │  • Cache à chaque realtime event                      │
 * │  • Cache après syncInBackground                       │
 * └─────────────────────────────────────────────────────────┘
 *
 * @usage
 * await productsStore.initialize('mainId');
 * productsStore.setSearchQuery('pâtes');
 * const product = productsStore.getEnrichedProductById('abc');
 */

// =============================================================================
// INTERFACES & TYPES
// =============================================================================

interface FiltersState {
  searchQuery: string;
  selectedStores: string[];
  selectedWho: string[];
  selectedProductTypes: string[];
  selectedTemperatures: string[];
  groupBy: 'store' | 'productType' | 'none';
  sortColumn: string;
  sortDirection: 'asc' | 'desc';
}

interface SyncMetadata {
  lastSync: string | null;
  mainId: string | null;
}

// =============================================================================
// CONFIGURATION
// =============================================================================

const BATCH_LIMIT = 1000;
const SYNC_DEBOUNCE_MS = 500;

// =============================================================================
// STORE SINGLETON
// =============================================================================

class ProductsStore {
  // État principal - SvelteMap réactive
  #enrichedProducts = new SvelteMap<string, EnrichedProduct>();

  // Métadonnées
  #currentMainId = $state<string | null>(null);
  #isInitialized = $state(false);
  #loading = $state(false);
  #error = $state<string | null>(null);
  #syncing = $state(false);
  #realtimeConnected = $state(false);
  #lastSync = $state<string | null>(null);

  // Cache keys
  #cacheKey: string | null = null;
  #metadataKey: string | null = null;

  // Gestion des mises à jour
  #unsubscribe: (() => void) | null = null;
  #syncDebounceTimer: ReturnType<typeof setTimeout> | null = null;

  // Filtres
  #filters = $state<FiltersState>({
    searchQuery: '',
    selectedStores: [],
    selectedWho: [],
    selectedProductTypes: [],
    selectedTemperatures: [],
    groupBy: 'productType',
    sortColumn: '',
    sortDirection: 'asc'
  });

  // =========================================================================
  // GETTERS PUBLICS
  // =========================================================================

  get filters() { return this.#filters; }
  get currentMainId() { return this.#currentMainId; }
  get isInitialized() { return this.#isInitialized; }
  get loading() { return this.#loading; }
  get error() { return this.#error; }
  get syncing() { return this.#syncing; }
  get realtimeConnected() { return this.#realtimeConnected; }
  get lastSync() { return this.#lastSync; }

  // =========================================================================
  // DÉRIVES RÉACTIFS - Consommés par les templates
  // =========================================================================

  /**
   * Conversion SvelteMap → Array pour les templates
   */
  enrichedProducts = $derived.by(() => {
    return Array.from(this.#enrichedProducts.values());
  });

  /**
   * Statistiques des produits filtrés
   */
  stats = $derived.by(() => ({
    total: this.filteredProducts.length,
    frais: this.filteredProducts.filter(p => p.pFrais).length,
    surgel: this.filteredProducts.filter(p => p.pSurgel).length,
    merged: this.filteredProducts.filter(p => p.isMerged).length,
  }));

  /**
   * Valeurs uniques pour les filtres
   */
  uniqueStores = $derived.by(() => {
    const storeNames = this.enrichedProducts
      .map(p => p.storeInfo?.storeName)
      .filter(Boolean);
    return [...new Set(storeNames)] as string[];
  });

  uniqueWho = $derived.by(() => {
    const whos = this.enrichedProducts.flatMap(p => p.who || []);
    return [...new Set(whos)] as string[];
  });

  uniqueProductTypes = $derived.by(() => {
    const types = this.enrichedProducts.map(p => p.productType).filter(Boolean);
    return [...new Set(types)] as string[];
  });

  /**
   * Filtrage des produits
   */
  filteredProducts = $derived.by(() => {
    return this.enrichedProducts.filter(p => this.#matchesFilters(p));
  });

  /**
   * Groupement optionnel
   */
  filteredGroupedProducts = $derived.by(() => {
    const filtered = this.filteredProducts;

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

  // =========================================================================
  // INITIALISATION
  // =========================================================================

  /**
   * Initialise le store
   * 1. Charge depuis le cache localStorage
   * 2. Charge/synchronise depuis Appwrite
   * 3. Configure l'abonnement realtime
   */
  async initialize(mainId: string) {
    if (!mainId?.trim()) {
      throw new Error('mainId invalide fourni');
    }

    if (this.#isInitialized && this.#currentMainId === mainId) {
      console.log(`[ProductsStore] Déjà initialisé pour mainId: ${mainId}`);
      return;
    }

    console.log(`[ProductsStore] Initialisation avec mainId: ${mainId}`);

    this.#currentMainId = mainId;
    this.#cacheKey = createStorageKey('products-enriched', mainId);
    this.#metadataKey = createStorageKey('products-sync-metadata', mainId);

    try {
      // 1️⃣ Charger depuis cache
      await this.#loadFromCache();

      // 2️⃣ Charger ou synchroniser depuis Appwrite
      if (this.#enrichedProducts.size === 0) {
        await this.#loadProductsFromService(mainId);
      } else {
        await this.#syncInBackground();
      }

      // 3️⃣ Marquer comme initialisé
      this.#isInitialized = true;

      // 4️⃣ Setup realtime
      const callbacks = this.#setupRealtimeCallbacks();
      this.#unsubscribe = subscribeToRealtime(mainId, callbacks);

    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erreur lors de l\'initialisation';
      this.#error = message;
      console.error('[ProductsStore]', message, err);
      throw err;
    }
  }

  // =========================================================================
  // CHARGEMENT & CACHE
  // =========================================================================

  /**
   * Charge les produits depuis le cache localStorage
   */
  async #loadFromCache() {
    if (!this.#cacheKey) return;

    try {
      const cached = localStorage.getItem(this.#cacheKey);
      if (!cached) {
        console.log('[ProductsStore] Aucun cache trouvé');
        return;
      }

      const entries = superjson.parse(cached) as [string, EnrichedProduct][];
      entries.forEach(([id, product]) => this.#enrichedProducts.set(id, product));

      // Restaurer les métadonnées de sync
      this.#restoreSyncMetadata();

      console.log(`[ProductsStore] ${entries.length} produits chargés du cache`);

    } catch (err) {
      console.warn('[ProductsStore] Erreur lecture cache, ignoré:', err);
    }
  }

  /**
   * Persiste les produits enrichis dans localStorage
   */
  #persistToCache() {
    if (!this.#cacheKey) return;

    try {
      const serialized = superjson.stringify(
        Array.from(this.#enrichedProducts.entries())
      );
      localStorage.setItem(this.#cacheKey, serialized);
    } catch (err) {
      console.error('[ProductsStore] Erreur persist cache:', err);
    }
  }

  /**
   * Persiste les métadonnées de synchronisation
   */
  #persistSyncMetadata() {
    if (!this.#metadataKey || !this.#currentMainId) return;

    const metadata: SyncMetadata = {
      lastSync: this.#lastSync,
      mainId: this.#currentMainId
    };

    try {
      localStorage.setItem(this.#metadataKey, JSON.stringify(metadata));
    } catch (err) {
      console.error('[ProductsStore] Erreur persist metadata:', err);
    }
  }

  /**
   * Restaure les métadonnées de synchronisation
   */
  #restoreSyncMetadata() {
    if (!this.#metadataKey) return;

    try {
      const stored = localStorage.getItem(this.#metadataKey);
      if (stored) {
        const metadata: SyncMetadata = JSON.parse(stored);
        this.#lastSync = metadata.lastSync;
      }
    } catch (err) {
      console.warn('[ProductsStore] Erreur restauration metadata:', err);
    }
  }

  /**
   * Charge les produits initialement depuis Appwrite
   */
  async #loadProductsFromService(mainId: string) {
    this.#loading = true;
    this.#error = null;

    try {
      const options: LoadProductsOptions = {
        includePurchases: true,
        limit: BATCH_LIMIT,
        orderBy: 'productName',
        orderDirection: 'asc'
      };

      const products = await loadProducts(mainId, options);

      // Enrichir et ajouter à la SvelteMap
      products.forEach(product => {
        const enriched = this.#enrichProduct(product);
        this.#enrichedProducts.set(product.$id, enriched);
      });

      this.#updateLastSync();
      this.#persistToCache();
      this.#persistSyncMetadata();

      console.log(`[ProductsStore] ${products.length} produits chargés et enrichis`);

    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erreur lors du chargement';
      this.#error = message;
      console.error('[ProductsStore]', message, err);
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  /**
   * Synchronisation incrémentielle en arrière-plan
   */
   async #syncInBackground() {
     if (!this.#lastSync) return;
     this.#syncing = true;

     try {
       const options: SyncOptions = {
         lastSync: this.#lastSync,
         limit: BATCH_LIMIT
       };
       const { products: updatedProducts, purchases: updatedPurchases } =
         await syncProductsAndPurchases(this.#currentMainId!, options);

       const productsMap = new Map(updatedProducts.map(p => [p.$id, p]));

       // 1️⃣ Appliquer les produits
       if (updatedProducts.length > 0) {
         updatedProducts.forEach(product => {
           const enriched = this.#enrichProduct(product);
           this.#enrichedProducts.set(product.$id, enriched);
         });
       }

       // 2️⃣ Appliquer les purchases
       if (updatedPurchases.length > 0) {
         const affectedProductIds = new Set(
           updatedPurchases
             .filter(purchase => purchase.products?.length > 0)
             .flatMap(purchase => purchase.products)
             .map((prod: any) => typeof prod === 'string' ? prod : prod.$id)
             .filter(Boolean)
         );

         const productsToLoad = Array.from(affectedProductIds)
           .filter(id => !productsMap.has(id));

         // ✅ Charger UNIQUEMENT si nécessaire
         if (productsToLoad.length > 0) {
           console.log(`[ProductsStore] Rechargement de ${productsToLoad.length} produits affectés par purchases`);
           const loadedProducts = await loadProductsListByIds(productsToLoad);
           loadedProducts.forEach(product => {
             const enriched = this.#enrichProduct(product);
             this.#enrichedProducts.set(product.$id, enriched);
           });
         }
       }

      // Persister si des changements
      if (updatedProducts.length > 0 || updatedPurchases.length > 0) {
        this.#updateLastSync();
        this.#persistToCache();
        this.#persistSyncMetadata();
      }

    } catch (err) {
      console.error('[ProductsStore] Erreur sync:', err);
    } finally {
      this.#syncing = false;
    }
  }

  // =========================================================================
  // ENRICHISSEMENT DE PRODUITS
  // =========================================================================

  /**
   * Enrichit un produit brut avec tous les calculs
   */
  #enrichProduct(product: Products): EnrichedProduct {
    const totalPurchasesArray = this.#calculateTotalPurchasesArray(product.purchases ?? []);
    const totalNeededArray = product.totalNeededConsolidated
      ? this.#parseToNumericQuantity(product.totalNeededConsolidated)
      : [];

    const { numeric: missingQuantityArray, display: displayMissingQuantity } =
      this.#calculateAndFormatMissing(totalNeededArray, totalPurchasesArray);

    return {
      ...product,
      storeInfo: product.store ? this.#safeJsonParse(product.store) : null,
      totalNeededArray,
      totalPurchasesArray,
      recipesArray: this.#safeJsonParse<RecipeOccurrence[]>(product.recipesOccurrences) ?? [],
      stockArray: this.#safeJsonParse<any[]>(product.stockReel) ?? [],
      missingQuantityArray,
      displayTotalNeeded: this.#formatTotalQuantity(totalNeededArray),
      displayTotalPurchases: this.#formatTotalQuantity(totalPurchasesArray),
      displayMissingQuantity,
    };
  }

  /**
   * Upsert dans la SvelteMap (mutation directe = réactive)
   */
  #upsertEnrichedProduct(product: Products) {
    const enriched = this.#enrichProduct(product);
    this.#enrichedProducts.set(product.$id, enriched);
  }

  /**
   * Supprime un produit de la SvelteMap
   */
  #removeEnrichedProduct(productId: string) {
    this.#enrichedProducts.delete(productId);
  }

  // =========================================================================
  // GESTION DES PURCHASES
  // =========================================================================

  /**
   * Applique les mises à jour de purchases aux produits concernés
   * ✅ Récupère les produits frais depuis Appwrite pour être sûr d'avoir les purchases à jour
   * @legacy : on utilise la methode optimiste #applyPurchaseUpdatesOptimistic
   */
  async #applyPurchaseUpdates(updatedPurchases: Purchases[]) {
    if (!updatedPurchases?.length) return;

    // 1️⃣ Identifier tous les produits affectés
    const affectedProductIds = new Set(
      updatedPurchases
        .filter(purchase => purchase.products?.length > 0)
        .flatMap(purchase => purchase.products)
        .map((prod: any) => typeof prod === 'string' ? prod : prod.$id)
        .filter(Boolean)
    );

    if (affectedProductIds.size === 0) {
      console.log('[ProductsStore] Aucun produit affecté par ces purchases');
      return;
    }

    try {
      // 2️⃣ Récupérer les produits frais depuis Appwrite
      const refreshedProducts = await loadProductsListByIds(Array.from(affectedProductIds));

      if (refreshedProducts.length === 0) {
        console.warn('[ProductsStore] Impossible de charger les produits affectés');
        return;
      }

      // 3️⃣ Enrichir et mettre à jour la SvelteMap
      refreshedProducts.forEach(product => {
        const enriched = this.#enrichProduct(product);
        this.#enrichedProducts.set(product.$id, enriched);
      });

      console.log(`[ProductsStore] ${updatedPurchases.length} purchases appliqués à ${refreshedProducts.length} produit(s)`);

    } catch (err) {
      console.error('[ProductsStore] Erreur application purchases:', err);
    }
  }



  // =========================================================================
  // VARIANTE OPTIMISTE : Mettre à jour localement ET re-charger en async
  // =========================================================================

  /**
   * Version optimiste : update local + rechargement async en arrière-plan
   */
  async #applyPurchaseUpdatesOptimistic(updatedPurchases: Purchases[]) {
    if (!updatedPurchases?.length) return;

    const affectedProductIds = new Set<string>();
    const purchasesNeedingReload: Purchases[] = [];

    // Séparer les purchases avec et sans relations products
    const purchasesWithProducts = updatedPurchases.filter(p => p.products?.length > 0);
    purchasesNeedingReload.push(...updatedPurchases.filter(p => !p.products?.length));

    // Extraire tous les IDs de produits des purchases valides
    const allProductIds = purchasesWithProducts
      .flatMap(purchase => purchase.products)
      .map((prod: any) => typeof prod === 'string' ? prod : prod.$id)
      .filter(Boolean);

    // Ajouter les IDs au Set
    allProductIds.forEach(id => affectedProductIds.add(id));

    // Recharger uniquement les champs nécessaires pour les purchases sans relations
    if (purchasesNeedingReload.length > 0) {
      console.log(`[ProductsStore] ${purchasesNeedingReload.length} purchases sans relation products, rechargement ciblé depuis Appwrite...`);
      try {
        const reloadedPurchases = await loadPurchasesListByIds(purchasesNeedingReload.map(p => p.$id));

        // Ajouter les purchases rechargés à la liste des purchases mis à jour
        reloadedPurchases.forEach(reloadedPurchase => {
          if (reloadedPurchase.products?.length > 0) {
            // Extraire les IDs de produits et les ajouter au Set
            const productIds = reloadedPurchase.products
              .map((prod: any) => typeof prod === 'string' ? prod : prod.$id)
              .filter(Boolean);

            productIds.forEach(id => affectedProductIds.add(id));

            // Remplacer le purchase incomplet par le purchase complet
            const incompleteIndex = updatedPurchases.findIndex(p => p.$id === reloadedPurchase.$id);
            if (incompleteIndex >= 0) {
              updatedPurchases[incompleteIndex] = reloadedPurchase;
            }
          }
        });
      } catch (err) {
        console.error('[ProductsStore] Erreur rechargement ciblé des purchases:', err);
      }
    }

    if (affectedProductIds.size === 0) return;

    // 1️⃣ UPDATE LOCAL IMMÉDIAT (optimiste)
    for (const productId of affectedProductIds) {
      const currentProduct = this.#enrichedProducts.get(productId);
      if (currentProduct) {
        // Mettre à jour les purchases (ajout ET modification)
        let updatedPurchases_ = currentProduct.purchases || [];

        updatedPurchases.forEach(purchase => {
          const existingIndex = updatedPurchases_.findIndex(p => p.$id === purchase.$id);

          if (existingIndex >= 0) {
            // Remplacer le purchase existant (modification)
            updatedPurchases_[existingIndex] = purchase;
          } else {
            // Ajouter le nouveau purchase
            updatedPurchases_.push(purchase);
          }
        });

        // Re-enrichir avec les purchases mis à jour
        const enriched = this.#enrichProduct({
          ...currentProduct,
          purchases: updatedPurchases_
        } as any);

        this.#enrichedProducts.set(productId, enriched);
      }
    }

    // 2️⃣ RECHARGER EN ARRIÈRE-PLAN (pour corriger les erreurs)
    try {
      const refreshedProducts = await loadProductsListByIds(Array.from(affectedProductIds));
      refreshedProducts.forEach(product => {
        const enriched = this.#enrichProduct(product);
        this.#enrichedProducts.set(product.$id, enriched);
      });
    } catch (err) {
      console.warn('[ProductsStore] Erreur rechargement async:', err);
    }
  }

  // =========================================================================
  // REALTIME
  // =========================================================================

  #setupRealtimeCallbacks() {
    return {
      onProductCreate: (product: Products) => {
        this.#upsertEnrichedProduct(product);
        this.#updateLastSync();
        this.#debouncedPersist();
      },
      onProductUpdate: (product: Products) => {
        this.#upsertEnrichedProduct(product);
        this.#updateLastSync();
        this.#debouncedPersist();
      },
      onProductDelete: (productId: string) => {
        this.#removeEnrichedProduct(productId);
        this.#updateLastSync();
        this.#debouncedPersist();
      },
      onPurchaseCreate: (purchase: Purchases) => {
        this.#applyPurchaseUpdatesOptimistic([purchase]);
        this.#updateLastSync();
        this.#debouncedPersist();
      },
      onPurchaseUpdate: (purchase: Purchases) => {
        this.#applyPurchaseUpdatesOptimistic([purchase]);
        this.#updateLastSync();
        this.#debouncedPersist();
      },
      onPurchaseDelete: (purchaseId: string) => {
        // Trouver et re-enrichir les produits affectés
        const affectedProducts = Array.from(this.#enrichedProducts.values())
          .filter(p => p.purchases?.some(pur => pur.$id === purchaseId));

        affectedProducts.forEach(product => {
          this.#upsertEnrichedProduct(product as any);
        });

        this.#updateLastSync();
        this.#debouncedPersist();
      },
      onConnect: () => {
        this.#realtimeConnected = true;
      },
      onDisconnect: () => {
        this.#realtimeConnected = false;
      },
      onError: (error: any) => {
        console.error('[ProductsStore] Erreur realtime:', error);
      }
    };
  }

  /**
   * Débouncer la persistence pour éviter les écritures excessives
   */
  #debouncedPersist = (() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    return () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.#persistToCache();
        this.#persistSyncMetadata();
        timeout = null;
      }, SYNC_DEBOUNCE_MS);
    };
  })();

  #updateLastSync() {
    this.#lastSync = new Date().toISOString();
  }

  // =========================================================================
  // FILTRAGE
  // =========================================================================

  #matchesFilters(product: EnrichedProduct): boolean {
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

    // Filtre par productType
    if (this.#filters.selectedProductTypes.length > 0) {
      if (!product.productType || !this.#filters.selectedProductTypes.includes(product.productType)) {
        return false;
      }
    }

    // Filtres température
    if (this.#filters.selectedTemperatures.length > 0) {
      const hasValidTemp =
        (this.#filters.selectedTemperatures.includes('frais') && product.pFrais) ||
        (this.#filters.selectedTemperatures.includes('surgele') && product.pSurgel);
      if (!hasValidTemp) return false;
    }

    return true;
  }

  // Setters publics pour les filtres

  // recherche debouncée
  setSearchQuery = useDebounce(
    (query: string) => {
      this.#filters.searchQuery = query;
    },
    () => 500
  );

  toggleProductType(type: string) {
    const idx = this.#filters.selectedProductTypes.indexOf(type);
    if (idx > -1) {
      this.#filters.selectedProductTypes.splice(idx, 1);
    } else {
      this.#filters.selectedProductTypes.push(type);
    }
  }

  toggleTemperature(temperature: 'frais' | 'surgele') {
    const idx = this.#filters.selectedTemperatures.indexOf(temperature);
    if (idx > -1) {
      this.#filters.selectedTemperatures.splice(idx, 1);
    } else {
      this.#filters.selectedTemperatures.push(temperature);
    }
  }
  clearTypeAndTemperatureFilters() {
    this.#filters.selectedProductTypes = [];
    this.#filters.selectedTemperatures = [];
  }

  setGroupBy(groupBy: "store" | "productType" | "none") {
    this.#filters.groupBy = groupBy;
  }
  toggleStore(store: string) {
    const idx = this.#filters.selectedStores.indexOf(store);
    if (idx > -1) {
      this.#filters.selectedStores.splice(idx, 1);
    } else {
      this.#filters.selectedStores.push(store);
    }
  }

  toggleWho(who: string) {
    const idx = this.#filters.selectedWho.indexOf(who);
    if (idx > -1) {
      this.#filters.selectedWho.splice(idx, 1);
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
      this.#filters.sortDirection =
        this.#filters.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.#filters.sortColumn = column;
      this.#filters.sortDirection = "asc";
    }
  }

  clearFilters() {
    this.#filters = {
      searchQuery: '',
      selectedStores: [],
      selectedWho: [],
      selectedProductTypes: [],
      selectedTemperatures: [],
      groupBy: 'productType',
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
      if (this.#filters.sortColumn === "totalNeededConsolidated") {
        aVal = parseFloat(aVal) || 0;
        bVal = parseFloat(bVal) || 0;
      } else if (this.#filters.sortColumn === "purchases") {
        aVal = a.purchases?.length || 0;
        bVal = b.purchases?.length || 0;
      }

      if (aVal < bVal) return this.#filters.sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return this.#filters.sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }

  // =========================================================================
  // UTILITAIRES PUBLICS
  // =========================================================================

  getEnrichedProductById(productId: string): EnrichedProduct | null {
    return this.#enrichedProducts.get(productId) ?? null;
  }

  get enrichedProductsCount(): number {
    return this.#enrichedProducts.size;
  }

  async forceReload(mainId: string) {
    this.#enrichedProducts.clear();
    this.#lastSync = null;
    await this.#loadProductsFromService(mainId);
  }

  clearCache() {
    this.#enrichedProducts.clear();
    this.#lastSync = null;
    if (this.#cacheKey) localStorage.removeItem(this.#cacheKey);
    if (this.#metadataKey) localStorage.removeItem(this.#metadataKey);
    console.log('[ProductsStore] Cache vidé');
  }

  destroy() {
    this.#unsubscribe?.();
    this.#unsubscribe = null;
    console.log('[ProductsStore] Ressources nettoyées');
  }

  // =========================================================================
  // UTILITAIRES PRIVÉS - Parsing & Calculs
  // =========================================================================

  #safeJsonParse<T>(jsonString: string | null): T | null {
    if (!jsonString?.trim()) return null;
    try {
      return JSON.parse(jsonString) as T;
    } catch (err) {
      console.warn('[ProductsStore] Erreur parsing JSON:', err);
      return null;
    }
  }

  #parseToNumericQuantity(jsonString: string): NumericQuantity[] {
    try {
      const quantityInfoArray = JSON.parse(jsonString) as QuantityInfo[];
      return quantityInfoArray
        .map(q => ({
          quantity: parseFloat(q.quantity),
          unit: q.unit
        }))
        .filter(q => !isNaN(q.quantity));
    } catch (err) {
      console.error('[ProductsStore] Erreur parsing NumericQuantity:', err);
      return [];
    }
  }

  #calculateTotalPurchasesArray(purchases: any[]): NumericQuantity[] {
    if (!purchases?.length) return [];

    const quantityMap = new Map<string, number>();

    purchases.forEach(purchase => {
      if (!purchase.quantity || !purchase.unit) return;
      const quantity = parseFloat(purchase.quantity);
      if (isNaN(quantity)) return;

      const existing = quantityMap.get(purchase.unit) || 0;
      quantityMap.set(purchase.unit, existing + quantity);
    });

    return Array.from(quantityMap.entries()).map(([unit, quantity]) => ({
      quantity,
      unit
    }));
  }

  #calculateAndFormatMissing(
    neededArray: NumericQuantity[],
    purchasesArray: NumericQuantity[]
  ): { numeric: NumericQuantity[], display: string } {
    if (!neededArray?.length) {
      return { numeric: [], display: '✅ Complet' };
    }

    if (!purchasesArray?.length) {
      const display = neededArray
        .map(n => this.#formatSingleQuantity(n.quantity.toString(), n.unit))
        .join(' et ');
      return { numeric: neededArray as any, display };
    }

    const neededMap = new Map<string, number>();
    const purchasesMap = new Map<string, number>();

    neededArray.forEach(n => {
      const qty = parseFloat(n.quantity as any);
      if (!isNaN(qty)) {
        neededMap.set(n.unit, (neededMap.get(n.unit) || 0) + qty);
      }
    });

    purchasesArray.forEach(p => {
      purchasesMap.set(p.unit, (purchasesMap.get(p.unit) || 0) + p.quantity);
    });

    const numeric: NumericQuantity[] = [];
    const formatted: string[] = [];

    neededMap.forEach((needed, unit) => {
      const purchased = purchasesMap.get(unit) || 0;
      const missing = needed - purchased;
      if (missing > 0) {
        numeric.push({ quantity: missing, unit });
        formatted.push(this.#formatSingleQuantity(missing.toString(), unit));
      }
    });

    const display = formatted.length > 0 ? formatted.join(' et ') : '✅ Complet';
    return { numeric, display };
  }

  #formatTotalQuantity(total: NumericQuantity[]): string {
    if (!total?.length) return '-';
    return total
      .map(p => this.#formatSingleQuantity(p.quantity.toString(), p.unit))
      .join(' et ');
  }

  #formatSingleQuantity(value: string, unit: string): string {
    const num = parseFloat(value);
    if (isNaN(num)) return `${value} ${unit}`;

    if ((unit === 'gr.' || unit === 'ml') && num >= 1000) {
      const converted = num / 1000;
      const newUnit = unit === 'gr.' ? 'kg' : 'l.';
      const rounded = Math.round(converted * 100) / 100;
      let formatted = rounded.toString();
      if (formatted.endsWith(',0')) formatted = formatted.slice(0, -2);
      if (formatted.endsWith(',00')) formatted = formatted.slice(0, -3);
      return `${formatted} ${newUnit}`;
    }

    if (!['gr.', 'ml', 'kg', 'l.'].includes(unit)) {
      const rounded = Math.round(num * 10) / 10;
      let formatted = rounded.toString();
      if (formatted.endsWith(',0')) formatted = formatted.slice(0, -2);
      return `${formatted} ${unit}`;
    }

    return `${num} ${unit}`;
  }
}

// =============================================================================
// SINGLETON & EXPORTS
// =============================================================================

export const productsStore = new ProductsStore();
export type { FiltersState, SyncMetadata };
