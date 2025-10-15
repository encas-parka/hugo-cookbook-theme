import { PersistedState } from 'runed';
import { useDebounce } from 'runed';
import { createStorageKey, getMainIdFromUrl } from '../utils/url-utils';

interface Product {
  $id: string;
  productHugoUuid: string;
  productName: string;
  productType: string;
  pFrais: boolean;
  pSurgel: boolean;
  stockReel: string | null;
  status: string;
  who: string[];
  store: string | null;
  previousNames: string[];
  isMerged: boolean;
  mergedInto: string | null;
  mergedFrom: string[];
  mergeDate: string | null;
  mergeReason: string | null;
  nbRecipes: number;
  totalAssiettes: number;
  dateTimeService: string | null;
  recipeNames: string | null;
  totalNeededConsolidated: string;
  totalNeededRaw: string;
  conversionRules: string[];
  recipesOccurrences: string;
  neededConsolidatedByDate: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  mainId: string;
  $databaseId: string;
  $collectionId: string;
  $sequence?: number;
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  syncing: boolean;
  realtimeConnected: boolean;
}

interface SyncState {
  lastSync: string | null;
  mainId: string | null;
}

const { Query } = window.Appwrite;
const BATCH_LIMIT = 1000;
const SYNC_DEBOUNCE_MS = 500;

// =============================================================================
// STORE SINGLETON - État partagé réactif Svelte 5
// =============================================================================

class ProductsStore {
  #currentMainId = $state<string | null>(null);
  #isInitialized = $state(false);
  #productsState: PersistedState<ProductsState> | null = $state(null);
  #syncState: PersistedState<SyncState> | null = $state(null);
  #unsubscribe: (() => void) | null = $state(null);

  // États dérivés réactifs
  products = $derived.by(() => this.#productsState?.current.products ?? []);
  loading = $derived.by(() => this.#productsState?.current.loading ?? false);
  error = $derived.by(() => this.#productsState?.current.error ?? null);
  syncing = $derived.by(() => this.#productsState?.current.syncing ?? false);
  realtimeConnected = $derived.by(() => this.#productsState?.current.realtimeConnected ?? false);
  lastSync = $derived.by(() => this.#syncState?.current.lastSync ?? null);
  mainId = $derived.by(() => this.#syncState?.current.mainId ?? null);

  // Getters pour l'accès depuis les composants
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
    this.#setupRealtime(mainId);
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

      const response = await databases.listDocuments(
        config.APPWRITE_CONFIG.databaseId,
        config.APPWRITE_CONFIG.collections.products,
        [
          Query.equal('mainId', mainId),
          Query.limit(BATCH_LIMIT)
        ]
      );

      this.#updateState({
        products: response.documents as Product[],
        loading: false,
        error: null
      });

      this.#updateLastSync();
      console.log(`[ProductsStore] ${response.documents.length} produits chargés`);

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
        this.#mergeProducts(response.documents as Product[]);
        this.#updateLastSync();
        console.log(`[ProductsStore] ${response.documents.length} mises à jour synchronisées`);
      }

      this.#updateState({ syncing: false });

    } catch (err) {
      console.error('[ProductsStore] Erreur sync:', err);
      this.#updateState({ syncing: false });
    }
  }

  #mergeProducts(updatedProducts: Product[]) {
    const existing = this.products;
    const updated = new Map(updatedProducts.map(p => [p.$id, p]));
    const merged = existing.map(p => updated.get(p.$id) ?? p);
    const newIds = new Set(existing.map(p => p.$id));
    const news = updatedProducts.filter(p => !newIds.has(p.$id));

    this.#updateState({ products: [...merged, ...news] });
  }

  // =========================================================================
  // REALTIME
  // =========================================================================

  #setupRealtime(mainId: string) {
    this.#unsubscribe?.();

    console.log('[ProductsStore] Configuration realtime:', mainId);

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
  }

  #handleRealtimeEvent(response: any) {
    const { events, payload } = response;
    if (!payload || !this.#productsState) return;

    const product = payload as Product;
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

    this.#syncState.current = {
      lastSync: new Date().toISOString(),
      mainId: this.#currentMainId
    };
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
}

// =============================================================================
// SINGLETON & EXPORTS
// =============================================================================

export const productsStore = new ProductsStore();

// Exports pour compatibilité et facilité d'utilisation
export const initializeProducts = (mainId: string) => productsStore.initialize(mainId);
export const forceReloadProducts = (mainId: string) => productsStore.forceReload(mainId);
export const destroyProducts = () => productsStore.destroy();
export const clearProductsCache = () => productsStore.clearCache();
export const isProductsStoreInitialized = () => productsStore.isInitialized;
export const getCurrentMainId = () => productsStore.currentMainId;

// Exports des états pour les composants
export const getProducts = () => productsStore.products;
export const getLoading = () => productsStore.loading;
export const getError = () => productsStore.error;
export const getSyncing = () => productsStore.syncing;
export const getRealtimeConnected = () => productsStore.realtimeConnected;
export const getLastSync = () => productsStore.lastSync;
export const getMainId = () => productsStore.mainId;

export type { Product, ProductsState, SyncState };
