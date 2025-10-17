import { PersistedState } from 'runed';
import { useDebounce } from 'runed';
import { createStorageKey } from '../utils/url-utils';
import { type Products } from '../types/appwrite.d';

/**
 * ProductsStore - Store des produits avec flux de données réactif Svelte 5
 *
 * Flux de données automatique avec $derived (pas de synchronisation manuelle) :
 *
 * products (bruts)
 *   ↓ filteredProducts (filtrés par recherche/store/type/etc.)
 *   ↓ formattedProducts (formatés pour l'affichage)
 *   ↓ groupedFormattedProducts (groupés par magasin/type)
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
    selectedProductType: '',
    showPFrais: true,
    showPSurgel: true,
    groupBy: 'none' as 'store' | 'productType' | 'none',
    sortColumn: '',
    sortDirection: 'asc' as 'asc' | 'desc'
  });

  // Exposition des filtres (lecture/écriture)
  get filters() { return this.#filters; }

  // Valeurs uniques pour les filtres (dérivés)
  uniqueStores = $derived([...new Set(this.products.map(p => p.store).filter(Boolean))] as string[]);
  uniqueWho = $derived([...new Set(this.products.flatMap(p => p.who || []).filter(Boolean))] as string[]);
  uniqueProductTypes = $derived([...new Set(this.products.map(p => p.productType).filter(Boolean))] as string[]);

  // Produits filtrés (dérivé)
  filteredProducts = $derived.by(() => {
    let filtered = this.products;

    // Recherche textuelle
    if (this.#filters.searchQuery.trim()) {
      const query = this.#filters.searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.productName.toLowerCase().includes(query)
      );
    }

    // Filtre par store
    if (this.#filters.selectedStores.length > 0) {
      filtered = filtered.filter(p => p.store && this.#filters.selectedStores.includes(p.store));
    }

    // Filtre par who
    if (this.#filters.selectedWho.length > 0) {
      filtered = filtered.filter(p =>
        p.who && p.who.some(w => this.#filters.selectedWho.includes(w))
      );
    }

    // Filtre par productType
    if (this.#filters.selectedProductType) {
      filtered = filtered.filter(p => p.productType === this.#filters.selectedProductType);
    }

    // Filtres pFrais/pSurgel
    if (!this.#filters.showPFrais && !this.#filters.showPSurgel) {
      return [];
    }
    if (!this.#filters.showPFrais) {
      filtered = filtered.filter(p => !p.pFrais);
    }
    if (!this.#filters.showPSurgel) {
      filtered = filtered.filter(p => !p.pSurgel);
    }

    return filtered;
  });

  // Produits groupés (dérivé)
  // @deprecated
  groupedProducts = $derived.by(() => {
    if (this.#filters.groupBy === 'none') {
      return { '': this.filteredProducts };
    }

    return Object.groupBy(this.filteredProducts, (product) => {
      return this.#filters.groupBy === 'store'
        ? (product.store || 'Non défini')
        : product.productType;
    });
  });

  // Produits formatés pour l'affichage (dérivé)
  formattedProducts = $derived.by(() => {
    return this.filteredProducts.map(p => ({
      ...p,
      totalNeededDisplay: this.#formatQuantity(p.totalNeededConsolidated),
      stockReelDisplay: this.#formatQuantity(p.stockReel),
      nbPurchases: p.purchases?.length ?? 0
    }));
  });

  // Produits formatés groupés (dérivé) - pour affichage optimisé
  groupedFormattedProducts = $derived.by(() => {
    if (this.#filters.groupBy === 'none') {
      return { '': this.formattedProducts };
    }

    return Object.groupBy(this.formattedProducts, (product) => {
      return this.#filters.groupBy === 'store'
        ? (product.store || 'Non défini')
        : product.productType;
    });
  });

  // Statistiques dérivées
  stats = $derived.by(() => ({
    total: this.filteredProducts.length,
    frais: this.filteredProducts.filter(p => p.pFrais).length,
    surgel: this.filteredProducts.filter(p => p.pSurgel).length,
    merged: this.filteredProducts.filter(p => p.isMerged).length,
    byStore: this.#groupByStore(this.products),
    byType: this.#groupByType(this.products)
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
      this.#syncInBackground();
    } else {
      console.log('[ProductsStore] Chargement initial depuis Appwrite');
      await this.#loadFromAppwrite(mainId);
    }

    // Configuration realtime
    await this.#setupRealtime(mainId);
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

  async #loadFromAppwrite(mainId: string) {
    if (!this.#productsState) {
      throw new Error('ProductsStore non initialisé');
    }

    this.#updateState({ loading: true, error: null });

    try {
      const databases = await window.AppwriteClient.getDatabases();
      const config = window.AppwriteClient.getConfig();

      const productsResponse = await databases.listDocuments(
        config.APPWRITE_CONFIG.databaseId,
        config.APPWRITE_CONFIG.collections.products,
        [
          Query.equal('mainId', mainId),
          Query.orderAsc('productName'),
          Query.limit(BATCH_LIMIT)
        ]
      );
      const products = productsResponse.documents as Products[];

      // Charger les achats associés
       const purchasesResponse = await databases.listDocuments(
         config.APPWRITE_CONFIG.databaseId,
         config.APPWRITE_CONFIG.collections.purchases,
         [Query.equal('mainId', mainId)]
       );

       // Associer les achats aux produits
       const purchases = purchasesResponse.documents as Purchases[];
       const productsWithPurchases = products.map(product => ({
         ...product,
         purchases: purchases.filter(purchase =>
           purchase.products.some(p => p.$id === product.$id)
         )
       }));

      this.#updateState({ products: productsWithPurchases })

      this.#updateLastSync();
      console.log(`[ProductsStore] ${productsResponse.documents.length} produits chargés`);

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
      const databases = await window.AppwriteClient.getDatabases();
      const config = window.AppwriteClient.getConfig();

      const response = await databases.listDocuments(
        config.APPWRITE_CONFIG.databaseId,
        config.APPWRITE_CONFIG.collections.products,
        [
          Query.greaterThan('$updatedAt', this.#syncState.current.lastSync),
          Query.equal('mainId', this.#currentMainId),
          Query.limit(BATCH_LIMIT)
        ]
      );

      if (response.documents.length > 0) {
        this.#mergeProducts(response.documents as Products[]);
        this.#updateLastSync();
        console.log(`[ProductsStore] ${response.documents.length} mises à jour synchronisées`);
      }

      this.#updateState({ syncing: false });

    } catch (err) {
      console.error('[ProductsStore] Erreur sync:', err);
      this.#updateState({ syncing: false });
    }
  }

  #mergeProducts(updatedProducts: Products[]) {
    const updated = new Map(updatedProducts.map(p => [p.$id, p]));
    const merged = this.products.map(p => updated.get(p.$id) ?? p);
    const existingIds = new Set(this.products.map(p => p.$id));
    const news = updatedProducts.filter(p => !existingIds.has(p.$id));


  }

  // =========================================================================
  // REALTIME
  // =========================================================================

  async #setupRealtime(mainId: string) {
     this.#unsubscribe?.();

     console.log('[ProductsStore] Configuration realtime:', mainId);

     try {
       // S'assurer qu'Appwrite est initialisé avant de s'abonner
       await window.AppwriteClient.initializeAppwrite();

       this.#unsubscribe = window.AppwriteClient.subscribeToCollections(
         ['products'],
         mainId,
         (response: any) => this.#handleRealtimeEvent(response),
         {
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
         }
       );
     } catch (err) {
       console.error('[ProductsStore] Impossible de configurer realtime:', err);
     }
   }

  #handleRealtimeEvent(response: any) {
    const { events, payload } = response;
    if (!payload || !this.#productsState) return;

    const product = payload as Products;
    const isCreate = events.some((e: string) => e.includes('.create'));
    const isUpdate = events.some((e: string) => e.includes('.update'));
    const isDelete = events.some((e: string) => e.includes('.delete'));

    if (isCreate) {
      const exists = this.products.some(p => p.$id === product.$id);
      if (!exists) {
        this.#updateState({
          products: [...this.products, product]
        });
      }
    } else if (isUpdate) {
      this.#updateState({
        products: this.products.map(p => p.$id === product.$id ? product : p)
      });
    } else if (isDelete) {
      this.#updateState({
        products: this.products.filter(p => p.$id !== product.$id)
      });
    }

    this.#debouncedUpdateLastSync();
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
    await this.#loadFromAppwrite(mainId);
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

  setProductType(type: string) {
    this.#filters.selectedProductType = type;
  }

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

  setTemperatureFilters(showPFrais: boolean, showPSurgel: boolean) {
    this.#filters.showPFrais = showPFrais;
    this.#filters.showPSurgel = showPSurgel;
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
      selectedProductType: '',
      showPFrais: true,
      showPSurgel: true,
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

  #formatQuantity(jsonString: string | null): string {
    if (!jsonString) return '-';

    try {
      const quantities = JSON.parse(jsonString);
      if (!Array.isArray(quantities) || quantities.length === 0) return '-';

      return quantities
        .map((q: { value: string; unit: string }) => this.#formatSingleQuantity(q.value, q.unit))
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
      const converted = (num / 1000).toFixed(2);
      const newUnit = unit === 'gr.' ? 'kg' : 'l';
      return `${converted} ${newUnit}`;
    }

    return `${num} ${unit}`;
  }

  #groupByStore(products: Products[]) {
    const groups: Record<string, number> = {};
    for (const product of products) {
      const store = product.store || 'Non défini';
      groups[store] = (groups[store] || 0) + 1;
    }
    return groups;
  }

  #groupByType(products: Products[]) {
    const groups: Record<string, number> = {};
    for (const product of products) {
      groups[product.productType] = (groups[product.productType] || 0) + 1;
    }
    return groups;
  }
}

// =============================================================================
// SINGLETON & EXPORTS
// =============================================================================

export const productsStore = new ProductsStore();


// Export des types
export type { Products, ProductsState, SyncState };
