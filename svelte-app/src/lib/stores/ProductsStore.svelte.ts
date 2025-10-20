import { PersistedState } from "runed";
import { useDebounce } from "runed";
import { SvelteMap } from "svelte/reactivity";
import superjson from "superjson";
import { createStorageKey } from "../utils/url-utils";
import type { Products, Purchases } from "../types/appwrite.d";
import type {
  NumericQuantity,
  QuantityInfo,
  StoreInfo,
  StockEntry,
  EnrichedProduct,
  RecipeOccurrence,
} from "../types/store.types";

import {
  loadProducts,
  syncProducts,
  syncProductsAndPurchases,
  applyProductUpdates,
  subscribeToRealtime,
  type LoadProductsOptions,
  type SyncOptions,
} from "../services/appwrite-interactions";

/**
 * ProductsStore - Store des produits avec architecture Svelte 5 + SvelteMap
 *
 * 🚀 NOUVELLE ARCHITECTURE (Svelte 5 + SvelteMap + superjson) :
 * ┌─────────────────────────────────────────────────────────────┐
 * │                    ProductsStore                           │
 * │  • SvelteMap persistée avec superjson                      │
 * │  • Enrichissement direct (1 calcul vs 100)                │
 * │  • Réactivité fine grain avec SvelteMap                   │
 * │  • Legacy préservé pendant la transition                  │
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
 * 📊 Architecture de données simplifiée :
 * products (bruts, legacy) → SvelteMap enrichie → derived UI
 *
 * ⚡ Optimisations majeures :
 * • SvelteMap : accès direct O(1) vs parcours complet O(n)
 * • Enrichissement unique : calculé une seule fois au changement
 * • Persistance superjson : support des types complexes (Map, Date, etc.)
 * • Réactivité fine grain : mise à jour uniquement du produit modifié
 *
 * 🔄 Migration automatique depuis l'ancienne architecture :
 * 1. Détection du cache legacy
 * 2. Migration vers SvelteMap enrichie
 * 3. Préservation de syncState pour synchronisation incrémentielle
 *
 * Services utilisés :
 * • loadProducts() : Chargement initial des produits avec achats
 * • syncProducts() : Synchronisation incrémentielle
 * • syncProductsAndPurchases() : Synchronisation hybride products + purchases
 * • applyProductUpdates() : Application des mises à jour
 * • subscribeToRealtime() : Abonnement aux événements temps réel
 *
 * @usage
 * await productsStore.initialize('mainId');
 * productsStore.setSearchQuery('pâtes');     // Réactive les dérivés automatiquement
 * productsStore.toggleStore('Carrefour');   // Mise à jour directe de la SvelteMap
 * const product = productsStore.getEnrichedProductById('abc'); // Accès direct O(1)
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
const BATCH_LIMIT = 1000; // Limite de produits par requête Appwrite
const SYNC_DEBOUNCE_MS = 500; // Délai de debounce pour la synchro en arrière-plan

// =============================================================================
// STORE SINGLETON - État partagé réactif Svelte 5
// =============================================================================

class ProductsStore {
  #currentMainId = $state<string | null>(null);

  #isInitialized = $state(false);

  #productsState: PersistedState<ProductsState> | null = $state(null);

  #syncState: PersistedState<SyncState> | null = $state(null);

  #unsubscribe: (() => void) | null = $state(null);

  // SvelteMap pour les produits enrichis avec persistance superjson
  #enrichedProductsMap: PersistedState<Map<string, EnrichedProduct>> | null =
    $state(null);

  // Utilitaire pour parser JSON en toute sécurité
  #safeJsonParse<T>(
    jsonString: string | null,
    defaultValue: T | null = null,
  ): T | null {
    if (!jsonString || jsonString.trim() === "") {
      return defaultValue;
    }

    try {
      return JSON.parse(jsonString) as T;
    } catch (error) {
      console.warn(
        "[ProductsStore] Erreur de parsing JSON, utilisation de la valeur par défaut:",
        error,
      );
      return defaultValue;
    }
  }

  // États dérivés - Plus de duplication ! Accès direct depuis la SvelteMap
  // 🔄 Legacy conservé temporairement pour compatibilité pendant la transition
  products = $derived(this.#productsState?.current.products ?? []);
  loading = $derived(this.#productsState?.current.loading ?? false);
  error = $derived(this.#productsState?.current.error ?? null);
  syncing = $derived(this.#productsState?.current.syncing ?? false);
  realtimeConnected = $derived(
    this.#productsState?.current.realtimeConnected ?? false,
  );
  lastSync = $derived(this.#syncState?.current.lastSync ?? null);
  mainId = $derived(this.#syncState?.current.mainId ?? null);

  // États des filtres
  #filters = $state({
    searchQuery: "",
    selectedStores: [] as string[],
    selectedWho: [] as string[],
    selectedProductTypes: [] as string[],
    selectedTemperatures: [] as string[],
    groupBy: "productType" as "store" | "productType" | "none",
    sortColumn: "",
    sortDirection: "asc" as "asc" | "desc",
  });

  // Exposition des filtres (lecture/écriture)
  get filters() {
    return this.#filters;
  }

  // Accès direct aux produits enrichis depuis la SvelteMap
  enrichedProducts = $derived.by(() => {
    if (!this.#enrichedProductsMap) return [];
    return Array.from(this.#enrichedProductsMap.current.values());
  });

  // ===============================================================
  //  Mise a jours de données consommé par les templates
  // ===============================================================

  // 🔄 EN MIGRATION : Ancien derived enrichedProducts ( sera remplacé par SvelteMap)
  // enrichedProducts = $derived.by(() => {
  //   return this.products.map(p => {
  //     // Clé de cache basée sur l'ID et la date de modification pour détecter les changements
  //     const cacheKey = `${p.$id}-${p.$updatedAt}`;

  //     // Vérifier si le produit est déjà en cache et inchangé
  //     if (this.#enrichmentCache.has(cacheKey)) {
  //       return this.#enrichmentCache.get(cacheKey)!;
  //     }

  //     // Calculer l'enrichissement seulement si nécessaire
  //     const totalPurchasesArray = this.#calculateTotalPurchasesArray(p.purchases ?? []);

  //     const totalNeededArray = p.totalNeededConsolidated
  //       ? this.#parseToNumericQuantity(p.totalNeededConsolidated)
  //       : [];

  //     const { numeric: missingQuantityArray, display: displayMissingQuantity } =
  //       this.#calculateAndFormatMissing(totalNeededArray, totalPurchasesArray);

  //     const enriched = {
  //       ...p,
  //       // Parsing des JSON strings en objets exploitables
  //       storeInfo: p.store ? this.#safeJsonParse<StoreInfo>(p.store) : null,
  //       totalNeededArray,
  //       totalPurchasesArray,
  //       recipesArray: p.recipesOccurrences ? this.#safeJsonParse(p.recipesOccurrences) : [],
  //       stockArray: p.stockReel ? this.#safeJsonParse(p.stockReel) : [],
  //       missingQuantityArray,
  //       // Propriétés formatées pour l'affichage
  //       displayTotalNeeded: this.#formatTotalQuantity(totalNeededArray),
  //       // displayName: p.productName.trim(), // UNUSED
  //       displayTotalPurchases:  this.#formatTotalQuantity(totalPurchasesArray ?? []), // FIXIT : reactivité perdu avec la strategie de cache : le updatedAt ne change pas lorsqu'un nouveau purchase arrive !!

  //       displayMissingQuantity, // Utilise la valeur déjà formatée
  //     };

  //     // Mettre en cache pour les prochaines utilisations
  //     this.#enrichmentCache.set(cacheKey, enriched);

  //     return enriched;
  //   });
  // });

  // Valeurs uniques pour les filtres (utilise enrichedProducts)
  uniqueStores = $derived.by(() => {
    const storeNames = this.enrichedProducts
      .map((p) => p.storeInfo?.storeName)
      .filter(Boolean);

    return [...new Set(storeNames)] as string[];
  });

  uniqueWho = $derived.by(
    () =>
      [
        ...new Set(this.products.flatMap((p) => p.who || []).filter(Boolean)),
      ] as string[],
  );
  uniqueProductTypes = $derived.by(
    () =>
      [
        ...new Set(this.products.map((p) => p.productType).filter(Boolean)),
      ] as string[],
  );

  // Étape 2 : Filtrage & Groupement (réactif aux filtres)
  filteredGroupedProducts = $derived.by(() => {
    // Filtrage
    const filtered = this.enrichedProducts.filter((p) =>
      this.#matchesFilters(p),
    );

    // Groupement
    if (this.#filters.groupBy === "none") {
      return { "": filtered };
    }

    return Object.groupBy(filtered, (product) => {
      if (this.#filters.groupBy === "store") {
        return product.storeInfo?.storeName || "Non défini";
      } else {
        return product.productType || "Non défini";
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
    frais: this.filteredProducts.filter((p) => p.pFrais).length,
    surgel: this.filteredProducts.filter((p) => p.pSurgel).length,
    merged: this.filteredProducts.filter((p) => p.isMerged).length,
  }));

  // Getters pour l'accès
  get currentMainId() {
    return this.#currentMainId;
  }
  get isInitialized() {
    return this.#isInitialized;
  }

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
      throw new Error("mainId invalide fourni");
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

    // 🆕 Logique de migration SvelteMap
    const hasEnrichedCache = this.#enrichedProductsMap!.current.size > 0;
    const hasLegacyCache =
      this.products.length > 0 && this.#syncState!.current.mainId === mainId;

    if (hasEnrichedCache) {
      console.log(
        `[ProductsStore] Utilisation du cache SvelteMap (${this.#enrichedProductsMap!.current.size} produits enrichis)`,
      );
      await this.#syncInBackground();
    } else if (hasLegacyCache) {
      console.log(
        `[ProductsStore] Migration depuis le cache legacy (${this.products.length} produits)`,
      );
      // 🔄 MIGRATION : Enrichir les produits legacy et peupler la SvelteMap
      this.#updateEnrichedProductsMap(this.products);
      await this.#syncInBackground();
    } else {
      console.log("[ProductsStore] Chargement initial depuis Appwrite");
      await this.#loadProductsFromService(mainId);
    }

    // Configuration realtime
    const callbacks = this.#setupRealtimeCallbacks();
    this.#unsubscribe = subscribeToRealtime(mainId, callbacks);
  }

  #createPersistedStates(mainId: string) {
    if (this.#productsState && this.#syncState && this.#enrichedProductsMap) {
      return; // Déjà créés
    }

    const productsKey = createStorageKey("products-state", mainId);
    const syncKey = createStorageKey("products-sync-state", mainId);

    console.log(`[ProductsStore] Clés de stockage: ${productsKey}, ${syncKey}`);

    this.#productsState = new PersistedState<ProductsState>(productsKey, {
      products: [],
      loading: false,
      error: null,
      syncing: false,
      realtimeConnected: false,
    });

    // 🆕 SvelteMap persistée pour les produits enrichis avec superjson
    this.#enrichedProductsMap = new PersistedState<
      Map<string, EnrichedProduct>
    >(`${productsKey}-enriched`, new Map(), {
      serializer: {
        serialize: (map: Map<string, EnrichedProduct>) =>
          superjson.stringify(Array.from(map.entries())),
        deserialize: (str: string) =>
          new Map(superjson.parse(str) as [string, EnrichedProduct][]),
      },
    });

    // 🔄 PRÉSERVATION : Conserver syncState pour la synchronisation incrémentielle
    this.#syncState = new PersistedState<SyncState>(syncKey, {
      lastSync: null,
      mainId: null,
    });
  }

  // =========================================================================
  // SERVICES D'ENRICHISSEMENT (nouvelle architecture SvelteMap)
  // =========================================================================

  /**
   * Enrichit un produit brut avec toutes les propriétés calculées
   * @param product - Le produit brut à enrichir
   * @returns Le produit enrichi
   */
  #enrichProduct(product: Products): EnrichedProduct {
    const totalPurchasesArray = this.#calculateTotalPurchasesArray(
      product.purchases ?? [],
    );
    const totalNeededArray = product.totalNeededConsolidated
      ? this.#parseToNumericQuantity(product.totalNeededConsolidated)
      : [];

    const { numeric: missingQuantityArray, display: displayMissingQuantity } =
      this.#calculateAndFormatMissing(totalNeededArray, totalPurchasesArray);

    return {
      ...product,
      // Parsing des JSON strings en objets exploitables
      storeInfo: product.store
        ? this.#safeJsonParse<StoreInfo>(product.store)
        : null,
      totalNeededArray,
      totalPurchasesArray,
      stockArray: this.#safeJsonParse<StockEntry[]>(product.stockReel) ?? [],
      recipesArray:
        this.#safeJsonParse<RecipeOccurrence[]>(product.recipesOccurrences) ??
        [],
      missingQuantityArray,
      // Propriétés formatées pour l'affichage
      displayTotalNeeded: this.#formatTotalQuantity(totalNeededArray),
      displayTotalPurchases: this.#formatTotalQuantity(totalPurchasesArray),
      displayMissingQuantity,
    };
  }

  /**
   * Met à jour la SvelteMap avec une liste de produits bruts
   * @param products - Liste des produits bruts à synchroniser
   */
  #updateEnrichedProductsMap(products: Products[]) {
    if (!this.#enrichedProductsMap) return;

    const currentMap = this.#enrichedProductsMap.current;
    const newMap = new Map<string, EnrichedProduct>();

    // Enrichir et ajouter chaque produit
    for (const product of products) {
      const enriched = this.#enrichProduct(product);
      newMap.set(product.$id, enriched);
    }

    // Mettre à jour la SvelteMap persistée
    this.#enrichedProductsMap.current = newMap;
  }

  /**
   * Ajoute ou met à jour un produit dans la SvelteMap
   * @param product - Le produit à ajouter/mettre à jour
   */
  #upsertEnrichedProduct(product: Products) {
    if (!this.#enrichedProductsMap) return;

    // const currentMap = this.#enrichedProductsMap.current;
    // const enriched = this.#enrichProduct(product);
    // currentMap.set(product.$id, enriched);

    // ✅ IMPORTANT : Créer une nouvelle Map pour trigger la détection de changement
    const updatedMap = new Map(this.#enrichedProductsMap.current);
    const enriched = this.#enrichProduct(product);
    updatedMap.set(product.$id, enriched);

    // ✅ Réassigner pour forcer la persistence dans PersistedState
    this.#enrichedProductsMap.current = updatedMap;
  }

  /**
   * Supprime un produit de la SvelteMap
   * @param productId - ID du produit à supprimer
   */
  #removeEnrichedProduct(productId: string) {
    if (!this.#enrichedProductsMap) return;

    const currentMap = this.#enrichedProductsMap.current;
    currentMap.delete(productId);
  }

  // =========================================================================
  // CHARGEMENT & SYNCHRONISATION
  // =========================================================================

  async #loadProductsFromService(mainId: string) {
    if (!this.#productsState) {
      throw new Error("ProductsStore non initialisé");
    }

    this.#updateState({ loading: true, error: null });

    try {
      const options: LoadProductsOptions = {
        includePurchases: true,
        limit: BATCH_LIMIT,
        orderBy: "productName",
        orderDirection: "asc",
      };

      const productsWithPurchases = await loadProducts(mainId, options);

      // 🆕 Mettre à jour la SvelteMap avec les produits enrichis
      this.#updateEnrichedProductsMap(productsWithPurchases);

      // 🔄 Legacy : Conserver l'ancien système temporairement
      this.#updateState({ products: productsWithPurchases });

      this.#updateLastSync();
      console.log(
        `[ProductsStore] ${productsWithPurchases.length} produits chargés et enrichis`,
      );
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur lors du chargement";
      this.#updateState({ loading: false, error: message });
      console.error("[ProductsStore]", message, err);
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
        limit: BATCH_LIMIT,
      };

      // 🚨 NOUVEAU : Synchronisation hybride products + purchases
      const { products: updatedProducts, purchases: updatedPurchases } =
        await syncProductsAndPurchases(this.#currentMainId!, options);

      let hasChanges = false;

      // Appliquer les mises à jour de produits
      if (updatedProducts.length > 0) {
        this.#updateState({
          products: applyProductUpdates(this.products, updatedProducts),
        });
        hasChanges = true;
        console.log(
          `[ProductsStore] ${updatedProducts.length} mises à jour de produits synchronisées`,
        );
      }

      // 🆕 Appliquer les mises à jour de purchases
      if (updatedPurchases.length > 0) {
        this.#applyPurchaseUpdates(updatedPurchases);
        hasChanges = true;
        console.log(
          `[ProductsStore] ${updatedPurchases.length} mises à jour d'achats synchronisées`,
        );
      }

      // Mettre à jour le timestamp de sync si des changements ont eu lieu
      if (hasChanges) {
        this.#updateLastSync();
      }

      this.#updateState({ syncing: false });
    } catch (err) {
      console.error("[ProductsStore] Erreur sync:", err);
      this.#updateState({ syncing: false });
    }
  }

  // =========================================================================
  // GESTION DÉTAT 🔄 Legacy
  // =========================================================================

  #handleProductCreate(product: Products) {
    this.#upsertEnrichedProduct(product);
  }

  #handleProductUpdate(product: Products) {
    this.#upsertEnrichedProduct(product);
  }

  #handleProductDelete(productId: string) {
    this.#removeEnrichedProduct(productId);
  }

  #handlePurchaseCreate(purchase: Purchases) {
    this.#applyPurchaseUpdates([purchase]);
  }

  #handlePurchaseUpdate(purchase: Purchases) {
    this.#applyPurchaseUpdates([purchase]);
  }

  #handlePurchaseDelete(purchaseId: string) {
    // Retirer le purchase de tous les produits affectés
    const affectedProducts = this.products.filter((p) =>
      p.purchases?.some((pur) => pur.$id === purchaseId),
    );

    const updatedProducts = affectedProducts.map((p) => ({
      ...p,
      purchases: p.purchases?.filter((pur) => pur.$id !== purchaseId),
      $updatedAt: new Date().toISOString(),
    }));

    updatedProducts.forEach((p) => this.#upsertEnrichedProduct(p));
  }

  // #handleProductCreate(createdProduct: Products) {
  //   if (!this.#productsState) return;

  //   const exists = this.products.some(p => p.$id === createdProduct.$id);
  //   if (!exists) {
  //     // 🆕 Ajouter à la SvelteMap enrichie
  //     this.#upsertEnrichedProduct(createdProduct);

  //     // 🔄 Legacy : Conserver l'ancien système temporairement
  //     this.#updateState({
  //       products: [...this.products, createdProduct]
  //     });
  //   }
  // }

  // #handleProductUpdate(updatedProduct: Products) {
  //   if (!this.#productsState) return;

  //   // 🆕 Mettre à jour la SvelteMap enrichie
  //   this.#upsertEnrichedProduct(updatedProduct);

  //   // 🔄 Legacy : Conserver l'ancien système temporairement
  //   this.#updateState({
  //     products: this.products.map(p => {
  //       if (p.$id === updatedProduct.$id) {
  //         // Create a merged product that preserves all existing fields
  //         // while updating only the fields that came in the payload
  //         const refreshedProducts = { ...p };

  //         // Only update the fields that are present in the payload (le payload ne contient pas tous les champs, risque de perdre des données si update non granulaire)
  //         Object.keys(updatedProduct).forEach(key => {
  //           if (updatedProduct[key as keyof Products] !== undefined) {
  //             (refreshedProducts as any)[key] = updatedProduct[key as keyof Products];
  //           }
  //         });

  //         return refreshedProducts;
  //       }
  //       return p;
  //     })
  //   });
  // }

  // #handleProductDelete(deletedProductId: string) {
  //   if (!this.#productsState) return;

  //   // 🆕 Supprimer de la SvelteMap enrichie
  //   this.#removeEnrichedProduct(deletedProductId);

  //   // 🔄 Legacy : Conserver l'ancien système temporairement
  //   this.#updateState({
  //     products: this.products.filter(p => p.$id !== deletedProductId)
  //   });
  // }

  // #handlePurchaseCreate(purchase: Purchases) {
  //   console.log('[ProductsStore] Purchase créé, mise à jour des produits concernés...');
  //   this.#updateProductsFromPurchase(purchase);
  // }

  // #handlePurchaseUpdate(purchase: Purchases) {
  //   console.log('[ProductsStore] Purchase mis à jour, mise à jour des produits concernés...');
  //   this.#updateProductsFromPurchase(purchase);
  // }

  // #handlePurchaseDelete(purchaseId: string) {
  //   console.log('[ProductsStore] Purchase supprimé, nettoyage des produits concernés...');

  //   // Retirer le purchase supprimé de tous les produits et mettre à jour updatedAt
  //   const affectedProducts = this.products.filter(product =>
  //     product.purchases && product.purchases.some(p => p.$id === purchaseId)
  //   );

  //   // 🆕 Mettre à jour la SvelteMap pour chaque produit affecté
  //   for (const product of affectedProducts) {
  //     const updatedProduct = {
  //       ...product,
  //       purchases: (product.purchases || []).filter(p => p.$id !== purchaseId),
  //       $updatedAt: new Date().toISOString()
  //     };
  //     this.#upsertEnrichedProduct(updatedProduct);
  //   }

  //   // 🔄 Legacy : Conserver l'ancien système temporairement
  //   this.#updateState({
  //     products: this.products.map(product => {
  //       const hadThePurchase = product.purchases && product.purchases.some(p => p.$id === purchaseId);

  //       return {
  //         ...product,
  //         purchases: (product.purchases || []).filter(p => p.$id !== purchaseId),
  //         // 🚨 Mettre à jour updatedAt seulement si le produit était affecté
  //         ...(hadThePurchase && { $updatedAt: new Date().toISOString() })
  //       };
  //     })
  //   });

  //   if (affectedProducts.length > 0) {
  //     console.log(`[ProductsStore] Purchase ${purchaseId} supprimé de ${affectedProducts.length} produit(s)`);
  //   }
  // }

  //       const updatedPurchases = existingPurchases.filter(p => p.$id !== purchase.$id);
  //       updatedPurchases.push(purchase);

  //       const updatedProduct = {
  //         ...product,
  //         purchases: updatedPurchases,
  //         // 🚨 Mettre à jour updatedAt pour forcer le recalcul du cache
  //         $updatedAt: new Date().toISOString()
  //       };

  //       this.#upsertEnrichedProduct(updatedProduct);
  //     }
  //   }

  //   // 🔄 Legacy : Conserver l'ancien système temporairement
  //   this.#updateState({
  //     products: this.products.map(product => {
  //       if (purchase.products.some(p => p.$id === product.$id)) {
  //         // Ajouter ou mettre à jour le purchase dans la liste des purchases du produit
  //         const existingPurchases = product.purchases || [];
  //         const updatedPurchases = existingPurchases.filter(p => p.$id !== purchase.$id);
  //         updatedPurchases.push(purchase);

  //         return {
  //           ...product,
  //           purchases: updatedPurchases,
  //           // 🚨 Mettre à jour updatedAt pour forcer le recalcul du cache
  //           $updatedAt: new Date().toISOString()
  //         };
  //       }
  //       return product;
  //     })
  //   });

  //   console.log(`[ProductsStore] ${purchase.products.length} produit(s) mis à jour avec le purchase ${purchase.$id}`);
  // }

  /**
   * Applique les mises à jour de purchases reçues de la synchronisation
   * @param updatedPurchases - Purchases mis à jour depuis Appwrite
   */
  #applyPurchaseUpdates(updatedPurchases: Purchases[]) {
    if (!updatedPurchases || updatedPurchases.length === 0) return;

    // LEGACY  1. Mettre à jour l'état legacy (pour syncProductsAndPurchases)
    this.#updateState({
      products: this.products.map((product) => {
        // Trouver les purchases qui concernent ce produit
        const relevantPurchases = updatedPurchases.filter(
          (purchase) =>
            purchase.products &&
            purchase.products.some((p: any) => p.$id === product.$id),
        );

        if (relevantPurchases.length > 0) {
          // Fusionner les purchases existants avec les nouveaux
          const existingPurchases = product.purchases || [];
          let updatedPurchasesList = [...existingPurchases];

          relevantPurchases.forEach((newPurchase) => {
            // Remplacer ou ajouter le purchase
            updatedPurchasesList = updatedPurchasesList.filter(
              (p) => p.$id !== newPurchase.$id,
            );
            updatedPurchasesList.push(newPurchase);
          });

          return {
            ...product,
            purchases: updatedPurchasesList,
            // 🚨 Mettre à jour updatedAt pour forcer le recalcul du cache
            $updatedAt: new Date().toISOString(),
          };
        }
        return product;
      }),
    });

    // ✅ 2. CRUCIAL : Mettre à jour la SvelteMap enrichie aussi !
    const productsToUpdate = this.products.filter((p) =>
      updatedPurchases.some((pur) =>
        pur.products?.some((prod: any) => prod.$id === p.$id),
      ),
    );

    productsToUpdate.forEach((product) => {
      this.#upsertEnrichedProduct(product);
    });

    console.log(
      `[ProductsStore] ${updatedPurchases.length} purchases synchronisés`,
    );
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
        console.log("[ProductsStore] Realtime connecté");
        this.#updateState({ realtimeConnected: true });
      },
      onDisconnect: () => {
        console.log("[ProductsStore] Realtime déconnecté");
        this.#updateState({ realtimeConnected: false });
      },
      onError: (error: any) => {
        console.error("[ProductsStore] Erreur realtime:", error);
      },
    };
  }

  #updateLastSync() {
    if (!this.#currentMainId || !this.#syncState) return;

    const now = new Date().toISOString();
    this.#syncState.current = {
      lastSync: now,
      mainId: this.#currentMainId,
    };
    this.lastSync = now;
    this.mainId = this.#currentMainId;
  }

  #updateState(partial: Partial<ProductsState>) {
    if (!this.#productsState) return;

    this.#productsState.current = {
      ...this.#productsState.current,
      ...partial,
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
    console.log("[ProductsStore] Ressources nettoyées");
  }

  clearCache() {
    if (
      !this.#productsState ||
      !this.#syncState ||
      !this.#enrichedProductsMap
    ) {
      console.warn("[ProductsStore] Store non initialisé");
      return;
    }

    // 🆕 Vider la SvelteMap enrichie
    this.#enrichedProductsMap.current = new Map();

    // 🔄 Legacy : Vider les anciens états
    this.#updateState({
      products: [],
      loading: false,
      error: null,
      syncing: false,
      realtimeConnected: false,
    });

    this.#syncState.current = {
      lastSync: null,
      mainId: null,
    };

    console.log(
      `[ProductsStore] Cache vidé pour ${this.#currentMainId} (SvelteMap + legacy)`,
    );
  }

  // =========================================================================
  // MÉTHODES UTILITAIRES SVELTEMAP (nouvelles)
  // =========================================================================

  /**
   * Récupère un produit enrichi par son ID
   * @param productId - ID du produit à récupérer
   * @returns Le produit enrichi ou null si non trouvé
   */
  getEnrichedProductById(productId: string): EnrichedProduct | null {
    if (!this.#enrichedProductsMap) return null;
    return this.#enrichedProductsMap.current.get(productId) ?? null;
  }

  /**
   * Vérifie si un produit enrichi existe dans la SvelteMap
   * @param productId - ID du produit à vérifier
   * @returns true si le produit existe
   */
  hasEnrichedProduct(productId: string): boolean {
    if (!this.#enrichedProductsMap) return false;
    return this.#enrichedProductsMap.current.has(productId);
  }

  /**
   * Retourne le nombre de produits enrichis dans la SvelteMap
   * @returns Nombre de produits enrichis
   */
  get enrichedProductsCount(): number {
    if (!this.#enrichedProductsMap) return 0;
    return this.#enrichedProductsMap.current.size;
  }

  /**
   * Force le re-calcul d'un produit enrichi (utile après mise à jour complexe)
   * @param productId - ID du produit à recalculer
   */
  recalculateEnrichedProduct(productId: string) {
    const legacyProduct = this.products.find((p) => p.$id === productId);
    if (legacyProduct) {
      this.#upsertEnrichedProduct(legacyProduct);
    }
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

  toggleTemperature(temperature: "frais" | "surgele") {
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

  setGroupBy(groupBy: "store" | "productType" | "none") {
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
      this.#filters.sortDirection =
        this.#filters.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.#filters.sortColumn = column;
      this.#filters.sortDirection = "asc";
    }
  }

  clearFilters() {
    this.#filters = {
      searchQuery: "",
      selectedStores: [],
      selectedWho: [],
      selectedProductTypes: [],
      selectedTemperatures: [],
      groupBy: "none",
      sortColumn: "",
      sortDirection: "asc",
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
      if (
        !product.storeInfo?.storeName ||
        !this.#filters.selectedStores.includes(product.storeInfo.storeName)
      ) {
        return false;
      }
    }

    // Filtre par who
    if (this.#filters.selectedWho.length > 0) {
      if (
        !product.who ||
        !product.who.some((w) => this.#filters.selectedWho.includes(w))
      ) {
        return false;
      }
    }

    // Filtre par productType (cumulatif)
    if (this.#filters.selectedProductTypes.length > 0) {
      if (
        !product.productType ||
        !this.#filters.selectedProductTypes.includes(product.productType)
      ) {
        return false;
      }
    }

    // Filtres température (cumulatifs)
    if (this.#filters.selectedTemperatures.length > 0) {
      const hasValidTemperature =
        (this.#filters.selectedTemperatures.includes("frais") &&
          product.pFrais) ||
        (this.#filters.selectedTemperatures.includes("surgele") &&
          product.pSurgel);

      if (!hasValidTemperature) {
        return false;
      }
    }

    return true;
  }

  // => Legacy
  // #formatQuantity(jsonString: string | null): string {
  //   if (!jsonString) return '-';

  //   try {
  //     const quantities = JSON.parse(jsonString);
  //     if (!Array.isArray(quantities) || quantities.length === 0) return '-';

  //     return quantities
  //       .map((q: { quantity: string; unit: string }) => this.#formatSingleQuantity(q.quantity, q.unit))
  //       .join(' et ');
  //   } catch {
  //     return '-';
  //   }
  // }

  #formatSingleQuantity(value: string, unit: string): string {
    const num = parseFloat(value);
    if (isNaN(num)) return `${value} ${unit}`;

    // Conversion gr -> kg et ml -> l si >= 1000
    if ((unit === "gr." || unit === "ml") && num >= 1000) {
      const converted = num / 1000;
      const newUnit = unit === "gr." ? "kg" : "l.";

      // Arrondi mathématique à 2 décimales + suppression des ,0
      const rounded = Math.round(converted * 100) / 100;
      let formatted = rounded.toString();
      if (formatted.endsWith(",0")) formatted = formatted.slice(0, -2);
      if (formatted.endsWith(",00")) formatted = formatted.slice(0, -3);

      return `${formatted} ${newUnit}`;
    }

    // Pour les unités spécifiques : 1 décimale avec arrondi mathématique + suppression des ,0
    if (!["gr.", "ml", "kg", "l."].includes(unit)) {
      const rounded = Math.round(num * 10) / 10;
      let formatted = rounded.toString();
      if (formatted.endsWith(",0")) formatted = formatted.slice(0, -2);

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
    if (!total || total.length === 0) return "-";

    return total
      .map((p) => this.#formatSingleQuantity(p.quantity.toString(), p.unit))
      .join(" et ");
  }

  #parseToNumericQuantity(jsonString: string): NumericQuantity[] {
    try {
      const quantityInfoArray = JSON.parse(jsonString) as QuantityInfo[];
      return quantityInfoArray
        .map((q) => ({
          quantity: parseFloat(q.quantity),
          unit: q.unit,
        }))
        .filter((q) => !isNaN(q.quantity));
    } catch (error) {
      console.error("[ProductsStore] Erreur parsing NumericQuantity:", error);
      return [];
    }
  }

  #calculateTotalPurchasesArray(purchases: any[]): NumericQuantity[] {
    if (!purchases || purchases.length === 0) return [];

    // Les unités sont déjà normalisées en gr./ml/unités spécifiques
    const quantityMap = new Map<string, number>();

    purchases.forEach((purchase) => {
      if (!purchase.quantity || !purchase.unit) return;

      const quantity = parseFloat(purchase.quantity);
      if (isNaN(quantity)) return;

      // Additionner par unité exacte (plus simple car déjà normalisé)
      const existing = quantityMap.get(purchase.unit) || 0;
      quantityMap.set(purchase.unit, existing + quantity);
    });

    const result: NumericQuantity[] = [];
    quantityMap.forEach((total, unit) => {
      result.push({ quantity: total, unit });
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
    purchasesArray: NumericQuantity[],
  ): { numeric: NumericQuantity[]; display: string } {
    if (!neededArray || neededArray.length === 0) {
      return { numeric: [], display: "✅ Complet" };
    }
    if (!purchasesArray || purchasesArray.length === 0) {
      // Pas d'achats, tout est manquant
      const numeric = neededArray.map((n) => ({
        quantity: parseFloat(n.quantity),
        unit: n.unit,
      }));
      const display =
        numeric.length > 0
          ? numeric
              .map((m) =>
                this.#formatSingleQuantity(m.quantity.toString(), m.unit),
              )
              .join(" et ")
          : "✅ Complet";
      return { numeric, display };
    }

    // Créer des maps pour les calculs simples (unités déjà en gr. et ml)
    const neededMap = new Map<string, number>();
    const purchasesMap = new Map<string, number>();

    // Remplir les besoins
    neededArray.forEach((needed) => {
      const quantity = parseFloat(needed.quantity);
      if (!isNaN(quantity)) {
        neededMap.set(
          needed.unit,
          (neededMap.get(needed.unit) || 0) + quantity,
        );
      }
    });

    // Remplir les achats
    purchasesArray.forEach((purchase) => {
      purchasesMap.set(
        purchase.unit,
        (purchasesMap.get(purchase.unit) || 0) + purchase.quantity,
      );
    });

    // Calculer la différence : besoins - achats ET formatter en même temps
    const numeric: { quantity: number; unit: string }[] = [];
    const formattedQuantities: string[] = [];

    neededMap.forEach((needed, unit) => {
      const purchased = purchasesMap.get(unit) || 0;
      const missing = needed - purchased;
      if (missing > 0) {
        const missingItem = { quantity: missing, unit };
        numeric.push(missingItem);

        // Formatage immédiat pour éviter un deuxième parcours
        formattedQuantities.push(
          this.#formatSingleQuantity(missing.toString(), unit),
        );
      }
    });

    const display =
      formattedQuantities.length > 0
        ? formattedQuantities.join(" et ")
        : "✅ Complet";

    return { numeric, display };
  }
}

// =============================================================================
// SINGLETON & EXPORTS
// =============================================================================

export const productsStore = new ProductsStore();

// Export des types
export type { Products, ProductsState, SyncState };
