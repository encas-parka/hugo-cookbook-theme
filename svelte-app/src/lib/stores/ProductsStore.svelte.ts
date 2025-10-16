import { PersistedState } from 'runed';
import { useDebounce } from 'runed';
import { createStorageKey } from '../utils/url-utils';
import { type Products } from '../types/appwrite.d';

interface ProductsState {
  products: Products[];
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

  // États publics réactifs - accédés directement sans fonction
  products = $state<Products[]>([]);
  loading = $state(false);
  error = $state<string | null>(null);
  syncing = $state(false);
  realtimeConnected = $state(false);
  lastSync = $state<string | null>(null);
  mainId = $state<string | null>(null);

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

    // Synchroniser les états du PersistedState vers les états publics
    this.#syncPersistedToPublic();
  }

  #syncPersistedToPublic() {
    if (!this.#productsState || !this.#syncState) return;

    this.products = this.#productsState.current.products;
    this.loading = this.#productsState.current.loading;
    this.error = this.#productsState.current.error;
    this.syncing = this.#productsState.current.syncing;
    this.realtimeConnected = this.#productsState.current.realtimeConnected;
    this.lastSync = this.#syncState.current.lastSync;
    this.mainId = this.#syncState.current.mainId;
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
          Query.orderAsc('productName'),
          Query.limit(BATCH_LIMIT)
        ]
      );

      this.#updateState({
        products: response.documents as Products[],
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

    this.#updateState({ products: [...merged, ...news] });
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

    // Synchroniser les états publics
    this.#syncPersistedToPublic();
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


// Export des types
export type { Products, ProductsState, SyncState };
