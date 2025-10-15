// stores/products.svelte.ts
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

class ProductsStore {
  private currentMainId: string | null = getMainIdFromUrl();
  private statesByMainId: Map<string, { productsState: PersistedState<ProductsState>, syncState: PersistedState<SyncState> }> = new Map();

  // States persistantes actifs (getter pour accéder à l'état du mainId courant)
  private get productsState(): PersistedState<ProductsState> {
    if (!this.currentMainId) {
      throw new Error('ProductsStore non initialisé');
    }
    const state = this.statesByMainId.get(this.currentMainId);
    if (!state) {
      throw new Error(`État non trouvé pour mainId: ${this.currentMainId}`);
    }
    return state.productsState;
  }

  private get syncState(): PersistedState<SyncState> {
    if (!this.currentMainId) {
      throw new Error('ProductsStore non initialisé');
    }
    const state = this.statesByMainId.get(this.currentMainId);
    if (!state) {
      throw new Error(`État non trouvé pour mainId: ${this.currentMainId}`);
    }
    return state.syncState;
  }

  /**
   * Crée ou récupère les états persistants pour un mainId donné
   */
  private getOrCreateStates(mainId: string): { productsState: PersistedState<ProductsState>, syncState: PersistedState<SyncState> } {
    // Vérifier si les états existent déjà
    let existingStates = this.statesByMainId.get(mainId);
    if (existingStates) {
      return existingStates;
    }

    // Créer de nouveaux états persistants
    const productsKey = createStorageKey('products-state', mainId);
    const syncKey = createStorageKey('products-sync-state', mainId);

    const productsState = new PersistedState<ProductsState>(productsKey, {
      products: [],
      loading: false,
      error: null,
      syncing: false,
      realtimeConnected: false
    });

    const syncState = new PersistedState<SyncState>(syncKey, {
      lastSync: null,
      mainId: null
    });

    const states = { productsState, syncState };
    this.statesByMainId.set(mainId, states);

    console.log(`[ProductsStore] Nouveaux états créés pour mainId: ${mainId}`);
    console.log(`[ProductsStore] Clés de stockage: ${productsKey}, ${syncKey}`);

    return states;
  }

  // Debounce pour la mise à jour du lastSync
  private debouncedSync = $state<(() => void) | null>(null);
  private unsubscribe: (() => void) | null = null;

  // Getters réactifs
  get products() {
    return this.productsState.current.products;
  }

  get loading() {
    return this.productsState.current.loading;
  }

  get error() {
    return this.productsState.current.error;
  }

  get syncing() {
    return this.productsState.current.syncing;
  }

  get realtimeConnected() {
    return this.productsState.current.realtimeConnected;
  }

  get lastSync() {
    return this.syncState.current.lastSync;
  }

  get mainId() {
    return this.syncState.current.mainId;
  }

  /**
   * Initialise le store avec chargement initial et sync
   */
  async initialize(mainId: string) {
    // Récupérer ou créer les états pour ce mainId
    const states = this.getOrCreateStates(mainId);
    this.currentMainId = mainId;

    console.log('[ProductsStore] Initialisation avec mainId:', mainId);
    console.log('[ProductsStore] Produits dans le cache:', this.productsState.current.products.length);

    // Si même mainId et on a déjà des données, charger du cache puis sync en background
    if (this.syncState.current.mainId === mainId && this.productsState.current.products.length > 0) {
      console.log('[ProductsStore] Chargement depuis le cache - produits trouvés:', this.productsState.current.products.length);
      console.log('[ProductsStore] Exemples de produits du cache:', this.productsState.current.products.slice(0, 3).map(p => ({ id: p.$id, name: p.productName })));
      this.syncInBackground();
    } else {
      // Première connexion ou changement de mainId : chargement complet
      console.log('[ProductsStore] Première connexion ou changement de mainId - raisons:');
      console.log('- mainId différent:', this.syncState.current.mainId !== mainId);
      console.log('- pas de produits dans le cache:', this.productsState.current.products.length === 0);
      await this.loadFromAppwrite(mainId);
    }

    // Établir la connexion realtime
    this.setupRealtime(mainId);
  }

  /**
   * Charge tous les produits depuis Appwrite (première connexion)
   */
  private async loadFromAppwrite(mainId: string) {
    this.productsState.current = {
      ...this.productsState.current,
      loading: true,
      error: null
    };

    try {

      // Récupérer le client databases depuis le global AppwriteClient
      const databases = await window.AppwriteClient.getDatabases();
      const config = window.AppwriteClient.getConfig();

      // Charger tous les produits pour ce mainId
      const response = await databases.listDocuments(
        config.APPWRITE_CONFIG.databaseId,
        config.APPWRITE_CONFIG.collections.products,
        [
          Query.equal('mainId', mainId),
          Query.limit(5000)
        ]
      );

      this.productsState.current = {
        products: response.documents as Product[],
        loading: false,
        error: null,
        syncing: false,
        realtimeConnected: false
      };

      // Mettre à jour le lastSync
      this.updateLastSync(mainId);

      console.log(`[ProductsStore] ${response.documents.length} produits chargés`);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du chargement des produits';

      this.productsState.current = {
        ...this.productsState.current,
        loading: false,
        error: errorMessage
      };

      console.error('[ProductsStore] Erreur lors du chargement:', err);
      throw err;
    }
  }

  /**
   * Synchronise en arrière-plan les produits mis à jour depuis le lastSync
   */
  private async syncInBackground() {
    if (!this.syncState.current.lastSync) {
      return;
    }

    this.productsState.current = {
      ...this.productsState.current,
      syncing: true
    };

    try {
      const databases = await window.AppwriteClient.getDatabases();
      const config = window.AppwriteClient.getConfig();

      // Récupérer uniquement les produits mis à jour depuis lastSync
      const response = await databases.listDocuments(
        config.APPWRITE_CONFIG.databaseId,
        config.APPWRITE_CONFIG.collections.products,
        [
          Query.greaterThan('$updatedAt', this.syncState.current.lastSync),
          Query.equal('mainId', this.syncState.current.mainId),
          Query.limit(1000)
        ]
      );

      if (response.documents.length > 0) {
        console.log(`[ProductsStore] ${response.documents.length} produits mis à jour trouvés`);

        // Mettre à jour les produits dans le cache
        const updatedProducts = response.documents as Product[];
        const existingProducts = this.productsState.current.products;

        // Créer une Map pour un accès rapide
        const updatedMap = new Map(updatedProducts.map(p => [p.$id, p]));

        // Fusionner les produits
        const mergedProducts = existingProducts.map(p =>
          updatedMap.has(p.$id) ? updatedMap.get(p.$id)! : p
        );

        // Ajouter les nouveaux produits qui n'existaient pas
        const existingIds = new Set(existingProducts.map(p => p.$id));
        const newProducts = updatedProducts.filter(p => !existingIds.has(p.$id));

        this.productsState.current = {
          ...this.productsState.current,
          products: [...mergedProducts, ...newProducts],
          syncing: false
        };

        // Mettre à jour lastSync
        this.updateLastSync(this.syncState.current.mainId!);
      } else {
        console.log('[ProductsStore] Aucune mise à jour trouvée');
        this.productsState.current = {
          ...this.productsState.current,
          syncing: false
        };
      }
    } catch (err) {
      console.error('[ProductsStore] Erreur lors de la sync:', err);
      this.productsState.current = {
        ...this.productsState.current,
        syncing: false
      };
    }
  }

  /**
   * Établit la connexion realtime pour les mises à jour
   */
  private setupRealtime(mainId: string) {
    // Se désabonner si déjà connecté
    if (this.unsubscribe) {
      this.unsubscribe();
    }

    console.log('[ProductsStore] Établissement de la connexion realtime');

    this.unsubscribe = window.AppwriteClient.subscribeToCollections(
      ['products'],
      mainId,
      (response: any) => {
        console.log('[ProductsStore] Événement realtime reçu:', response);
        this.handleRealtimeEvent(response);
      },
      {
        onConnect: () => {
          console.log('[ProductsStore] Connexion realtime établie');
          this.productsState.current = {
            ...this.productsState.current,
            realtimeConnected: true
          };
        },
        onDisconnect: () => {
          console.log('[ProductsStore] Connexion realtime perdue');
          this.productsState.current = {
            ...this.productsState.current,
            realtimeConnected: false
          };
        },
        onError: (error: any) => {
          console.error('[ProductsStore] Erreur realtime:', error);
        }
      }
    );
  }

  /**
   * Gère les événements realtime
   */
  private handleRealtimeEvent(response: any) {
    const { events, payload } = response;

    if (!payload) return;

    const product = payload as Product;

    // Déterminer le type d'événement
    const isCreate = events.some((e: string) => e.includes('.create'));
    const isUpdate = events.some((e: string) => e.includes('.update'));
    const isDelete = events.some((e: string) => e.includes('.delete'));

    if (isCreate) {
      this.handleProductCreate(product);
    } else if (isUpdate) {
      this.handleProductUpdate(product);
    } else if (isDelete) {
      this.handleProductDelete(product.$id);
    }

    // Débouncer la mise à jour du lastSync
    this.debouncedUpdateLastSync();
  }

  /**
   * Gère la création d'un produit
   */
  private handleProductCreate(product: Product) {
    const exists = this.productsState.current.products.some(p => p.$id === product.$id);

    if (!exists) {
      console.log('[ProductsStore] Nouveau produit créé:', product.productName);
      this.productsState.current = {
        ...this.productsState.current,
        products: [...this.productsState.current.products, product]
      };
    }
  }

  /**
   * Gère la mise à jour d'un produit
   */
  private handleProductUpdate(product: Product) {
    console.log('[ProductsStore] Produit mis à jour:', product.productName);

    this.productsState.current = {
      ...this.productsState.current,
      products: this.productsState.current.products.map(p =>
        p.$id === product.$id ? product : p
      )
    };
  }

  /**
   * Gère la suppression d'un produit
   */
  private handleProductDelete(productId: string) {
    console.log('[ProductsStore] Produit supprimé:', productId);

    this.productsState.current = {
      ...this.productsState.current,
      products: this.productsState.current.products.filter(p => p.$id !== productId)
    };
  }

  /**
   * Met à jour le lastSync avec debounce
   */
  private debouncedUpdateLastSync() {
    if (!this.debouncedSync) {
      // Créer la fonction debouncée (500ms de délai)
      const debounced = useDebounce(() => {
        this.updateLastSync(this.syncState.current.mainId!);
      }, 500);

      this.debouncedSync = debounced;
    }

    // Appeler la fonction debouncée
    this.debouncedSync();
  }

  /**
   * Met à jour le lastSync immédiatement
   */
  private updateLastSync(mainId: string) {
    this.syncState.current = {
      lastSync: new Date().toISOString(),
      mainId
    };
    console.log('[ProductsStore] lastSync mis à jour:', this.syncState.current.lastSync);
  }

  /**
   * Force un rechargement complet
   */
  async forceReload(mainId: string) {
    await this.loadFromAppwrite(mainId);
  }

  /**
   * Nettoie les ressources (désabonnement realtime)
   */
  destroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }

  /**
   * Vide le cache pour le mainId actuel
   */
  clearCache() {
    if (!this.currentMainId) {
      console.warn('[ProductsStore] Impossible de vider le cache: aucun mainId actuel');
      return;
    }

    this.productsState.current = {
      products: [],
      loading: false,
      error: null,
      syncing: false,
      realtimeConnected: false
    };

    this.syncState.current = {
      lastSync: null,
      mainId: null
    };

    console.log(`[ProductsStore] Cache vidé pour mainId: ${this.currentMainId}`);
  }

  /**
   * Vide tous les caches pour tous les mainIds
   */
  clearAllCaches() {
    for (const [mainId, states] of this.statesByMainId) {
      states.productsState.current = {
        products: [],
        loading: false,
        error: null,
        syncing: false,
        realtimeConnected: false
      };

      states.syncState.current = {
        lastSync: null,
        mainId: null
      };
    }
    console.log('[ProductsStore] Tous les caches ont été vidés');
  }
}

// Export singleton
export const productsStore = new ProductsStore();
