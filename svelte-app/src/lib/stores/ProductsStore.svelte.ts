import { SvelteMap } from "svelte/reactivity";
import superjson from "superjson";
import { createStorageKey } from "../utils/url-utils";
import { useDebounce } from "runed";
import type { Products, Purchases } from "../types/appwrite.d";

import {
  calculateTotalNeededInRange,
  safeJsonParse,
  calculateAndFormatMissing,
  formatSingleQuantity,
  formatTotalQuantity,
  calculateTotalQuantityArray,
  // ✅ NOUVEAUX : Utilitaires pour byDate
  parseByDateData,
  calculateTotalFromByDate,
  aggregateByUnit,
  extractAllRecipes,
  buildNeededConsolidatedByDateArray,
  calculateGlobalTotal,
  extractRecipesByDate,
  hasConversions,
  calculateTotalAssiettesInRange,
} from "../utils/productsUtils";
import type {
  EnrichedProduct,
  NeededConsolidatedByDate,
  NumericQuantity,
  RecipeOccurrence,
  ByDateEntry,
  HugoIngredient, // ✅ NOUVEAU : Import pour byDate
} from "../types/store.types";

import {
  loadProductsWithPurchases,
  syncProductsAndPurchases,
  subscribeToRealtime,
  loadMainEventData,
  loadAllDates,
  createMainDocument,
  type LoadProductsOptions,
  loadProductsListByIds,
  loadPurchasesListByIds,
  type SyncOptions,
} from "../services/appwrite-interactions";
import {
  loadHugoEventData,
  createVirginProductFromHugo,
  type HugoEventData,
} from "../services/hugo-loader";

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
  groupBy: "store" | "productType" | "none";
  sortColumn: string;
  sortDirection: "asc" | "desc";
}

interface CacheData {
  lastSync: string | null;
  products: [string, EnrichedProduct][];
  allDates: string[];
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
  #allDates = $state<string[]>([]);
  #lastSync = $state<string | null>(null);

  // Gestion de la plage de dates
  #startDate = $state<string | null>(null);
  #endDate = $state<string | null>(null);

  // Cache keys
  #cacheKey: string | null = null;
  #metadataKey: string | null = null;

  // Gestion des mises à jour
  #unsubscribe: (() => void) | null = null;
  #syncDebounceTimer: ReturnType<typeof setTimeout> | null = null;

  // État Hugo
  #hugoContentChanged = $state(false);

  // Filtres
  #filters = $state<FiltersState>({
    searchQuery: "",
    selectedStores: [],
    selectedWho: [],
    selectedProductTypes: [],
    selectedTemperatures: [],
    groupBy: "productType",
    sortColumn: "",
    sortDirection: "asc",
  });

  // =========================================================================
  // GETTERS PUBLICS
  // =========================================================================

  get filters() {
    return this.#filters;
  }
  get currentMainId() {
    return this.#currentMainId;
  }
  get isInitialized() {
    return this.#isInitialized;
  }
  get loading() {
    return this.#loading;
  }
  get error() {
    return this.#error;
  }

  get allDates() {
    return this.#allDates;
  }
  get syncing() {
    return this.#syncing;
  }

  // Gestion de la plage de dates
  get startDate() {
    return this.#startDate;
  }
  get endDate() {
    return this.#endDate;
  }
  setStartDate(date: string | null) {
    this.#startDate = date;
  }
  setEndDate(date: string | null) {
    this.#endDate = date;
  }
  setDateRange(start: string | null, end: string | null) {
    this.#startDate = start;
    this.#endDate = end;
  }

  /**
   * Initialise automatiquement la plage de dates si elle est vide
   */
  private initializeDateRange() {
    if ((!this.#startDate || !this.#endDate) && this.#allDates.length > 0) {
      const sortedDates = [...this.#allDates].sort();
      this.#startDate = sortedDates[0];
      this.#endDate = sortedDates[sortedDates.length - 1];
    }
  }

  // Bornes calculées (dérivées)
  get firstDate() {
    if (this.#allDates.length === 0) return null;
    return [...this.#allDates].sort()[0];
  }

  get lastDate() {
    if (this.#allDates.length === 0) return null;
    return [...this.#allDates].sort().pop();
  }
  get realtimeConnected() {
    return this.#realtimeConnected;
  }
  get lastSync() {
    return this.#lastSync;
  }
  get hugoContentChanged() {
    return this.#hugoContentChanged;
  }

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
   * Total des besoins par plage de dates sélectionnée
   * ✅ NOUVEAU : Utilise la structure byDate pour des performances optimales
   */
  totalNeededByDateRange = $derived.by(() => {
    const totalMap = new Map<string, NumericQuantity[]>();

    this.enrichedProducts.forEach((product) => {
      // Si override manuel global, utiliser la valeur stockée
      if (
        product.totalNeededIsManualOverride &&
        product.totalNeededConsolidated
      ) {
        const manual = safeJsonParse<NumericQuantity[]>(
          product.totalNeededConsolidated,
        );
        if (manual && manual.length > 0) {
          totalMap.set(product.$id, manual);
        }
        return;
      }

      // ✅ Utiliser la structure byDate si disponible
      if (!product.byDateParsed || !this.#startDate || !this.#endDate) {
        return;
      }
      const total = calculateTotalFromByDate(
        product.byDateParsed,
        this.#startDate,
        this.#endDate,
      );

      if (total && total.length > 0) {
        totalMap.set(product.$id, total);
      }
    });

    return totalMap;
  });

  /**
   * Même données que totalNeededByDateRange, mais formatées comme string
   * Map<productId, "100kg et 50L">
   */
  formattedTotalNeededByDateRange = $derived.by(() => {
    const formatted = new Map<string, string>();

    // Pour chaque entrée du dérivé précédent
    this.totalNeededByDateRange.forEach((quantities, productId) => {
      // quantities est NumericQuantity[]
      // Ex: [{quantity: 100, unit: "kg"}, {quantity: 50, unit: "L"}]

      // Le formater en string
      const displayString = formatTotalQuantity(quantities);
      // Ex: "100kg et 50L"

      formatted.set(productId, displayString);
    });

    return formatted;
  });

  /**
   * Statistiques des produits filtrés
   */
  stats = $derived.by(() => ({
    total: this.filteredProducts.length,
    frais: this.filteredProducts.filter((p) => p.pFrais).length,
    surgel: this.filteredProducts.filter((p) => p.pSurgel).length,
    merged: this.filteredProducts.filter((p) => p.isMerged).length,
  }));

  /**
   * Valeurs uniques pour les filtres
   */
  uniqueStores = $derived.by(() => {
    const storeNames = this.enrichedProducts
      .map((p) => p.storeInfo?.storeName)
      .filter(Boolean);
    return [...new Set(storeNames)] as string[];
  });

  uniqueWho = $derived.by(() => {
    const whos = this.enrichedProducts.flatMap((p) => p.who || []);
    return [...new Set(whos)] as string[];
  });

  uniqueProductTypes = $derived.by(() => {
    const types = this.enrichedProducts
      .map((p) => p.productType)
      .filter(Boolean);
    return [...new Set(types)] as string[];
  });

  /**
   * Filtrage des produits
   */
  filteredProducts = $derived.by(() => {
    return this.enrichedProducts.filter((p) => this.#matchesFilters(p));
  });

  /**
   * Groupement optionnel
   */
  filteredGroupedProducts = $derived.by(() => {
    const filtered = this.filteredProducts;

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

  /**
   * Groupement formaté pour compatibilité avec l'UI existante
   */
  groupedFormattedProducts = $derived.by(() => {
    return this.filteredGroupedProducts;
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
      throw new Error("mainId invalide fourni");
    }

    if (this.#isInitialized && this.#currentMainId === mainId) {
      console.log(`[ProductsStore] Déjà initialisé pour mainId: ${mainId}`);
      return;
    }

    console.log(`[ProductsStore] Initialisation avec mainId: ${mainId}`);

    this.#currentMainId = mainId;
    this.#cacheKey = createStorageKey("products-enriched", mainId);

    this.#error = null;

    try {
      // Charger le JSON Hugo (source de vérité initiale)
      const hugoData = await loadHugoEventData(mainId);
      console.log(
        `[ProductsStore] Données Hugo chargées: ${hugoData.ingredients.length} ingredients`,
      );

      // Charger depuis cache local (si disponible)
      await this.#loadFromCache();

      // Vérifier l'état dans Appwrite
      const [mainDoc, appwriteProducts] = await Promise.all([
        loadMainEventData(mainId),
        this.#enrichedProducts.size === 0
          ? loadProductsWithPurchases(mainId, { limit: 100 })
          : Promise.resolve([]),
      ]);

      // Déterminer la stratégie d'initialisation
      const eventState = this.#determineEventState(
        mainDoc,
        appwriteProducts,
        hugoData,
      );

      // Initialiser selon l'état
      await this.#initializeByState(
        eventState,
        hugoData,
        mainDoc,
        appwriteProducts,
      );

      // Initialiser la plage de dates
      this.#allDates = hugoData.allDates;
      this.initializeDateRange();

      // Marquer comme initialisé
      this.#isInitialized = true;

      // Setup realtime
      const callbacks = this.#setupRealtimeCallbacks();
      this.#unsubscribe = subscribeToRealtime(mainId, callbacks);

      console.log(
        `[ProductsStore] Initialisation complétée: ${this.#enrichedProducts.size} produits`,
      );
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur lors de l'initialisation";
      this.#error = message;
      console.error("[ProductsStore]", message, err);
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
        console.log("[ProductsStore] Aucun cache trouvé");
        return;
      }

      const { products, lastSync, allDates } = superjson.parse(
        cached,
      ) as CacheData;
      products.forEach(([id, product]) =>
        this.#enrichedProducts.set(id, product),
      );
      this.#lastSync = lastSync;
      this.#allDates = allDates || [];

      console.log(
        `[ProductsStore] ${products.length} produits chargés du cache, lastSync: ${lastSync}, allDates: ${allDates?.length || 0} dates`,
      );
    } catch (err) {
      console.warn("[ProductsStore] Erreur lecture cache, ignoré:", err);
    }
  }

  /**
   * Persiste les produits enrichis dans localStorage
   */
  #persistToCache() {
    if (!this.#cacheKey) return;
    try {
      const cacheData: CacheData = {
        lastSync: this.#lastSync,
        products: Array.from(this.#enrichedProducts.entries()),
        allDates: this.#allDates,
      };
      localStorage.setItem(this.#cacheKey, superjson.stringify(cacheData));
    } catch (err) {
      console.error("[ProductsStore] Erreur persist cache:", err);
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
        limit: BATCH_LIMIT,
        orderBy: "productName",
        orderDirection: "asc",
      };

      const [products, allDates] = await Promise.all([
        loadProductsWithPurchases(mainId, options),
        loadAllDates(mainId),
      ]);

      // Enrichir et ajouter à la SvelteMap
      products.forEach((product) => {
        const enriched = this.#enrichProduct(product);
        this.#enrichedProducts.set(product.$id, enriched);
      });

      // Mettre à jour allDates
      this.#allDates = allDates;

      this.#updateLastSync();
      this.#persistToCache();

      console.log(
        `[ProductsStore] ${products.length} produits chargés et enrichis, ${allDates.length} dates récupérées`,
      );
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur lors du chargement";
      this.#error = message;
      console.error("[ProductsStore]", message, err);
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  /**
   * Synchronisation incrémentielle en arrière-plan
   */
  async #syncInBackground() {
    if (!this.#lastSync || !this.#currentMainId) return;
    this.#syncing = true;

    try {
      const options: SyncOptions = {
        lastSync: this.#lastSync,
        limit: BATCH_LIMIT,
      };

      // ✅ FIX: syncProductsAndPurchases retourne { allProducts }
      const { allProducts } = await syncProductsAndPurchases(
        this.#currentMainId,
        options,
      );

      // 1️⃣ Appliquer tous les produits synchronisés
      if (allProducts.length > 0) {
        allProducts.forEach((product) => {
          const enriched = this.#enrichProduct(product);
          this.#enrichedProducts.set(product.$id, enriched);
        });
        console.log(
          `[ProductsStore] ${allProducts.length} produits appliqués du sync`,
        );
      }

      // Persister les changements
      if (allProducts.length > 0) {
        this.#updateLastSync();
        this.#persistToCache();
        console.log(
          `[ProductsStore] Sync complétée: ${allProducts.length} produits`,
        );
      }
    } catch (err) {
      console.error("[ProductsStore] Erreur sync:", err);
    } finally {
      this.#syncing = false;
    }
  }

  // =========================================================================
  // ENRICHISSEMENT DE PRODUITS
  // =========================================================================

  /**
   * Enrichit un produit brut avec tous les calculs
   * ✅ NOUVEAU : Utilise la structure byDate pour de meilleures performances
   */
  #enrichProduct(product: Products): EnrichedProduct {
    // Utilitaires existants
    const totalPurchasesArray = calculateTotalQuantityArray(
      product.purchases ?? [],
    );

    // ✅ NOUVEAU : Parser la structure byDate
    const byDateParsed = parseByDateData(product.byDate);

    let totalNeededArray: NumericQuantity[];
    let neededConsolidatedByDateArray: NeededConsolidatedByDate[];
    let recipesArray: RecipeOccurrence[];
    let totalNeededRawArray: NumericQuantity[] | undefined;

    if (byDateParsed) {
      // ✅ Cas avec structure byDate (nouveau format)
      totalNeededArray = calculateGlobalTotal(byDateParsed);
      neededConsolidatedByDateArray =
        buildNeededConsolidatedByDateArray(byDateParsed);
      recipesArray = extractAllRecipes(byDateParsed);

      // Parser totalNeededRaw si disponible (pour les conversions)
      if (
        product.totalNeededConsolidated &&
        product.totalNeededIsManualOverride
      ) {
        totalNeededRawArray = safeJsonParse<NumericQuantity[]>(
          product.totalNeededConsolidated,
        );
      }
    } else {
      // ❌ Erreur : structure byDate manquante
      console.error(
        `[ProductsStore] Product ${product.productName} n'a pas de structure byDate - migration requise`,
      );
      totalNeededArray = [];
      neededConsolidatedByDateArray = [];
      recipesArray = [];
    }

    // Calculs manquants (utilise fonction existante)
    const { numeric: missingQuantityArray, display: displayMissingQuantity } =
      calculateAndFormatMissing(totalNeededArray, totalPurchasesArray);

    // Stock et achats
    const stockArray = safeJsonParse<any[]>(product.stockReel) ?? [];
    const displayTotalPurchases = formatTotalQuantity(totalPurchasesArray);

    const stockOrTotalPurchases =
      stockArray.length > 0
        ? `${stockArray[stockArray.length - 1].quantity} ${stockArray[stockArray.length - 1].unit}`
        : displayTotalPurchases;

    return {
      ...product,
      storeInfo: product.store ? safeJsonParse(product.store) : null,
      totalNeededArray,
      totalPurchasesArray,
      recipesArray,
      stockArray,
      stockOrTotalPurchases,
      missingQuantityArray,
      neededConsolidatedByDateArray,
      displayTotalNeeded: formatTotalQuantity(totalNeededArray),
      displayTotalPurchases,
      displayMissingQuantity,

      // ✅ NOUVEAUX : Champs parsés et overrides
      byDateParsed: byDateParsed || undefined,
      totalNeededRawArray,
      totalNeededIsManualOverride: product.totalNeededIsManualOverride ?? false,
      totalNeededOverrideReason: product.totalNeededOverrideReason,
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
        .filter((purchase) => purchase.products?.length > 0)
        .flatMap((purchase) => purchase.products)
        .map((prod: any) => (typeof prod === "string" ? prod : prod.$id))
        .filter(Boolean),
    );

    if (affectedProductIds.size === 0) {
      console.log("[ProductsStore] Aucun produit affecté par ces purchases");
      return;
    }

    try {
      // 2️⃣ Récupérer les produits frais depuis Appwrite
      const refreshedProducts = await loadProductsListByIds(
        Array.from(affectedProductIds),
      );

      if (refreshedProducts.length === 0) {
        console.warn(
          "[ProductsStore] Impossible de charger les produits affectés",
        );
        return;
      }

      // 3️⃣ Enrichir et mettre à jour la SvelteMap
      refreshedProducts.forEach((product) => {
        const enriched = this.#enrichProduct(product);
        this.#enrichedProducts.set(product.$id, enriched);
      });

      console.log(
        `[ProductsStore] ${updatedPurchases.length} purchases appliqués à ${refreshedProducts.length} produit(s)`,
      );
    } catch (err) {
      console.error("[ProductsStore] Erreur application purchases:", err);
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
    const purchasesWithProducts = updatedPurchases.filter(
      (p) => p.products?.length > 0,
    );
    purchasesNeedingReload.push(
      ...updatedPurchases.filter((p) => !p.products?.length),
    );

    // Extraire tous les IDs de produits des purchases valides
    const allProductIds = purchasesWithProducts
      .flatMap((purchase) => purchase.products)
      .map((prod: any) => (typeof prod === "string" ? prod : prod.$id))
      .filter(Boolean);

    // Ajouter les IDs au Set
    allProductIds.forEach((id) => affectedProductIds.add(id));

    // Recharger uniquement les champs nécessaires pour les purchases sans relations
    if (purchasesNeedingReload.length > 0) {
      console.log(
        `[ProductsStore] ${purchasesNeedingReload.length} purchases sans relation products, rechargement ciblé depuis Appwrite...`,
      );
      try {
        const reloadedPurchases = await loadPurchasesListByIds(
          purchasesNeedingReload.map((p) => p.$id),
        );

        // Ajouter les purchases rechargés à la liste des purchases mis à jour
        reloadedPurchases.forEach((reloadedPurchase) => {
          if (reloadedPurchase.products?.length > 0) {
            // Extraire les IDs de produits et les ajouter au Set
            const productIds = reloadedPurchase.products
              .map((prod: any) => (typeof prod === "string" ? prod : prod.$id))
              .filter(Boolean);

            productIds.forEach((id) => affectedProductIds.add(id));

            // Remplacer le purchase incomplet par le purchase complet
            const incompleteIndex = updatedPurchases.findIndex(
              (p) => p.$id === reloadedPurchase.$id,
            );
            if (incompleteIndex >= 0) {
              updatedPurchases[incompleteIndex] = reloadedPurchase;
            }
          }
        });
      } catch (err) {
        console.error(
          "[ProductsStore] Erreur rechargement ciblé des purchases:",
          err,
        );
      }
    }

    if (affectedProductIds.size === 0) return;

    // 1️⃣ UPDATE LOCAL IMMÉDIAT (optimiste)
    for (const productId of affectedProductIds) {
      const currentProduct = this.#enrichedProducts.get(productId);
      if (currentProduct) {
        // Mettre à jour les purchases (ajout ET modification)
        let updatedPurchases_ = currentProduct.purchases || [];

        updatedPurchases.forEach((purchase) => {
          const existingIndex = updatedPurchases_.findIndex(
            (p) => p.$id === purchase.$id,
          );

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
          purchases: updatedPurchases_,
        } as any);

        this.#enrichedProducts.set(productId, enriched);
      }
    }

    // 2️⃣ RECHARGER EN ARRIÈRE-PLAN (pour corriger les erreurs)
    try {
      const refreshedProducts = await loadProductsListByIds(
        Array.from(affectedProductIds),
      );
      refreshedProducts.forEach((product) => {
        const enriched = this.#enrichProduct(product);
        this.#enrichedProducts.set(product.$id, enriched);
      });
    } catch (err) {
      console.warn("[ProductsStore] Erreur rechargement async:", err);
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
        const affectedProducts = Array.from(
          this.#enrichedProducts.values(),
        ).filter((p) => p.purchases?.some((pur) => pur.$id === purchaseId));

        affectedProducts.forEach((product) => {
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
        console.error("[ProductsStore] Erreur realtime:", error);
      },
    };
  }

  /**
   * Débouncer la persistence pour éviter les écritures excessives
   */
  #debouncedPersist() {
    if (this.#syncDebounceTimer) clearTimeout(this.#syncDebounceTimer);
    this.#syncDebounceTimer = setTimeout(() => {
      this.#persistToCache();
      this.#syncDebounceTimer = null;
    }, SYNC_DEBOUNCE_MS);
  }

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

    // Filtre par productType
    if (this.#filters.selectedProductTypes.length > 0) {
      if (
        !product.productType ||
        !this.#filters.selectedProductTypes.includes(product.productType)
      ) {
        return false;
      }
    }

    // Filtres température
    if (this.#filters.selectedTemperatures.length > 0) {
      const hasValidTemp =
        (this.#filters.selectedTemperatures.includes("frais") &&
          product.pFrais) ||
        (this.#filters.selectedTemperatures.includes("surgele") &&
          product.pSurgel);
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
    () => 500,
  );

  toggleProductType(type: string) {
    const idx = this.#filters.selectedProductTypes.indexOf(type);
    if (idx > -1) {
      this.#filters.selectedProductTypes.splice(idx, 1);
    } else {
      this.#filters.selectedProductTypes.push(type);
    }
  }

  toggleTemperature(temperature: "frais" | "surgele") {
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
      searchQuery: "",
      selectedStores: [],
      selectedWho: [],
      selectedProductTypes: [],
      selectedTemperatures: [],
      groupBy: "productType",
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
  // UTILITAIRES PUBLICS
  // =========================================================================

  getEnrichedProductById(productId: string): EnrichedProduct | null {
    return this.#enrichedProducts.get(productId) ?? null;
  }

  /**
   * Récupère le total des besoins pour un produit sur la plage de dates définie
   */
  // FIXIT
  getNeededForProduct(productId: string): NumericQuantity[] {
    return this.totalNeededByDateRange.get(productId) ?? [];
  }

  // ✅ NOUVEAUX : Méthodes de gestion des overrides manuels

  /**
   * Applique un override manuel sur le total needed d'un produit
   */
  async applyManualOverride(
    productId: string,
    newTotal: NumericQuantity[],
    reason: string | null = null,
  ): Promise<void> {
    const product = this.#enrichedProducts.get(productId);
    if (!product) throw new Error(`Product ${productId} not found`);

    // Mettre à jour Appwrite
    const { updateProduct } = await import("../services/appwrite-interactions");
    await updateProduct(productId, {
      totalNeededConsolidated: JSON.stringify(newTotal),
      totalNeededIsManualOverride: true,
      totalNeededOverrideReason: reason,
    });

    // Mettre à jour le store local
    this.#enrichedProducts.set(productId, {
      ...product,
      totalNeededConsolidated: JSON.stringify(newTotal),
      totalNeededIsManualOverride: true,
      totalNeededOverrideReason: reason,
      totalNeededArray: newTotal,
      displayTotalNeeded: formatTotalQuantity(newTotal),
    });

    this.#persistToCache();
  }

  /**
   * Supprime un override manuel et revient au calcul automatique
   */
  async removeManualOverride(productId: string): Promise<void> {
    const product = this.#enrichedProducts.get(productId);
    if (!product) throw new Error(`Product ${productId} not found`);

    // Mettre à jour Appwrite
    const { updateProduct } = await import("../services/appwrite-interactions");
    await updateProduct(productId, {
      totalNeededConsolidated: null,
      totalNeededIsManualOverride: false,
      totalNeededOverrideReason: null,
    });

    // Recalculer depuis byDate
    const newTotal = product.byDateParsed
      ? calculateGlobalTotal(product.byDateParsed)
      : [];

    // Mettre à jour le store local
    this.#enrichedProducts.set(productId, {
      ...product,
      totalNeededConsolidated: null,
      totalNeededIsManualOverride: false,
      totalNeededOverrideReason: null,
      totalNeededArray: newTotal,
      displayTotalNeeded: formatTotalQuantity(newTotal),
    });

    this.#persistToCache();
  }

  /**
   * Vérifie si un produit a un override manuel actif
   */
  hasManualOverride(productId: string): boolean {
    const product = this.#enrichedProducts.get(productId);
    return product?.totalNeededIsManualOverride ?? false;
  }

  // ✅ NOUVEAUX : Méthodes de service utilisant les utilitaires productsUtils

  /**
   * Récupère les recettes pour un produit et une date spécifique
   */
  getRecipesForDate(productId: string, date: string): RecipeOccurrence[] {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDateParsed) return [];

    return extractRecipesByDate(product.byDateParsed, date);
  }

  /**
   * Récupère le total d'assiettes pour un produit et une date spécifique
   */
  getTotalAssiettesForDate(productId: string, date: string): number {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDateParsed) return 0;

    return product.byDateParsed[date]?.totalAssiettes || 0;
  }

  /**
   * Détecte si un produit a des conversions (q/u différent de qEq/uEq)
   */
  hasConversions(productId: string): boolean {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDateParsed) return false;

    return hasConversions(product.byDateParsed);
  }

  /**
   * Récupère toutes les dates où un produit est utilisé
   */
  getProductDates(productId: string): string[] {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDateParsed) return [];

    return Object.keys(product.byDateParsed).sort();
  }

  /**
   * Calcule le total d'assiettes pour un produit sur la plage de dates courante
   */
  getTotalAssiettesInRange(productId: string): number {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDateParsed || !this.#startDate || !this.#endDate) return 0;

    return calculateTotalAssiettesInRange(
      product.byDateParsed,
      this.#startDate,
      this.#endDate,
    );
  }

  /**
   * Récupère le détail des recettes pour un produit sur la plage de dates courante
   */
  getRecipesInRange(productId: string): RecipeOccurrence[] {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDateParsed || !this.#startDate || !this.#endDate) return [];

    const datesInRange = Object.keys(product.byDateParsed).filter((dateStr) => {
      const date = new Date(dateStr);
      const startDate = this.#startDate ? new Date(this.#startDate) : null;
      const endDate = this.#endDate ? new Date(this.#endDate) : null;
      return startDate && endDate && date >= startDate && date <= endDate;
    });

    return datesInRange.flatMap(
      (date) => product.byDateParsed![date]?.recipes || [],
    );
  }

  get enrichedProductsCount(): number {
    return this.#enrichedProducts.size;
  }

  async forceReload(mainId: string) {
    this.clearCache();
    await this.#loadProductsFromService(mainId);
  }

  /**
   * Détermine l'état de l'événement (fresh/partial/synced)
   */
  #determineEventState(
    mainDoc: any,
    appwriteProducts: Products[],
    hugoData: HugoEventData,
  ) {
    // Main n'existe pas → Event jamais ouvert
    if (!mainDoc) {
      return {
        type: "fresh" as const,
        hugoData,
      };
    }

    // Main existe mais aucun product → Users ont ouvert mais pas interagi
    if (appwriteProducts.length === 0) {
      return {
        type: "partial" as const,
        hugoData,
        mainDoc,
        hugoContentChanged:
          mainDoc.originalDataHash !== hugoData.hugoContentHash,
      };
    }

    // Main + products existent → Event actif
    return {
      type: "synced" as const,
      hugoData,
      mainDoc,
      appwriteProducts,
      hugoContentChanged: mainDoc.originalDataHash !== hugoData.hugoContentHash,
    };
  }

  /**
   * Initialise selon l'état détecté
   */
  async #initializeByState(
    eventState: {
      type: "fresh" | "partial" | "synced";
      hugoData: HugoEventData;
      mainDoc?: any;
      appwriteProducts?: Products[];
      hugoContentChanged?: boolean;
    },
    hugoData: HugoEventData,
    mainDoc: any,
    appwriteProducts: Products[],
  ) {
    switch (eventState.type) {
      case "fresh":
        await this.#initializeFresh(hugoData);
        break;

      case "partial":
        await this.#initializePartial(hugoData, mainDoc);
        break;

      case "synced":
        await this.#initializeSynced(hugoData, mainDoc, appwriteProducts);
        break;
    }
  }

  /**
   * Initialisation fresh : Créer Main + products virgin locaux
   */
  async #initializeFresh(hugoData: HugoEventData) {
    console.log("[ProductsStore] État FRESH - Création du Main");

    // Créer le Main document dans Appwrite
    await this.#createMainDocument(
      hugoData.mainGroup_id,
      hugoData.hugoContentHash,
      hugoData.allDates,
      hugoData.name,
    );

    // Créer tous les products en "virgin" (LOCAL UNIQUEMENT)
    hugoData.ingredients.forEach((ingredient) => {
      const virgin = this.#createVirginFromHugo(
        ingredient,
        hugoData.hugoContentHash,
      );
      this.#enrichedProducts.set(ingredient.ingredientHugoUuid, virgin);
    });

    // Persister le cache
    this.#updateLastSync();
    this.#persistToCache();

    console.log(
      `[ProductsStore] ${hugoData.ingredients.length} produits virgin créés`,
    );
  }

  /**
   * Initialisation partial : Main existe, aucun product Appwrite
   */
  async #initializePartial(hugoData: HugoEventData, mainDoc: any) {
    console.log("[ProductsStore] État PARTIAL - Main existe, products virgin");

    // Vérifier divergence Hugo
    if (mainDoc.originalDataHash !== hugoData.hugoContentHash) {
      console.warn("[ProductsStore] Divergence Hugo détectée");
      this.#hugoContentChanged = true;
    }

    // Créer tous les products en "virgin" depuis Hugo
    hugoData.ingredients.forEach((ingredient) => {
      try {
        const virgin = this.#createVirginFromHugo(
          ingredient,
          hugoData.hugoContentHash,
        );
        const enriched = this.#enrichProduct(virgin);

        this.#enrichedProducts.set(ingredient.ingredientHugoUuid, enriched);
      } catch (error) {
        console.error(
          `[ProductsStore] Erreur création virgin pour ${ingredient.ingredientName}:`,
          error,
        );
        console.error(`[ProductsStore] Ingredient data:`, ingredient);
        throw error;
      }
    });

    this.#updateLastSync();
    this.#persistToCache();
  }

  /**
   * Initialisation synced : Merger Hugo + Appwrite
   */
  async #initializeSynced(
    hugoData: HugoEventData,
    mainDoc: any,
    appwriteProducts: Products[],
  ) {
    console.log(
      `[ProductsStore] État SYNCED - ${appwriteProducts.length} products Appwrite`,
    );

    // Vérifier divergence Hugo
    if (mainDoc.originalDataHash !== hugoData.hugoContentHash) {
      console.warn("[ProductsStore] Divergence Hugo détectée");
      this.#hugoContentChanged = true;
    }

    // Map des products Appwrite pour lookup O(1)
    const appwriteMap = new Map(
      appwriteProducts.map((p) => [p.productHugoUuid, p]),
    );

    // Pour chaque ingredient Hugo
    hugoData.ingredients.forEach((ingredient) => {
      const appwriteProduct = appwriteMap.get(ingredient.ingredientHugoUuid);

      if (appwriteProduct) {
        // Product existe dans Appwrite → PRIORITÉ APPWRITE
        const enriched = this.#enrichProduct(appwriteProduct);
        this.#enrichedProducts.set(appwriteProduct.$id, enriched);
        appwriteMap.delete(ingredient.ingredientHugoUuid);
      } else {
        // Product n'existe pas dans Appwrite → Virgin depuis Hugo
        const virgin = this.#createVirginFromHugo(
          ingredient,
          hugoData.hugoContentHash,
        );
        this.#enrichedProducts.set(ingredient.ingredientHugoUuid, virgin);
      }
    });

    // Traiter les products Appwrite orphelins (mergés ou supprimés du build)
    appwriteMap.forEach((orphan) => {
      console.log(`[ProductsStore] Product orphelin: ${orphan.productName}`);
      const enriched = this.#enrichProduct(orphan);
      this.#enrichedProducts.set(orphan.$id, enriched);
    });

    this.#updateLastSync();
    this.#persistToCache();
  }

  /**
   * Crée un Main document dans Appwrite
   */
  async #createMainDocument(
    mainId: string,
    hugoContentHash: string,
    allDates: string[],
    name: string,
  ) {
    await createMainDocument(mainId, hugoContentHash, allDates, name);
  }

  /**
   * Crée un product virgin depuis un ingredient Hugo
   */
  #createVirginFromHugo(
    ingredient: HugoIngredient,
    hugoContentHash: string,
  ): EnrichedProduct {
    const virginProduct = {
      $id: ingredient.ingredientHugoUuid,
      productHugoUuid: ingredient.ingredientHugoUuid,
      productName: ingredient.ingredientName,
      productType: ingredient.ingType,
      pFrais: ingredient.pFrais || false,
      pSurgel: ingredient.pSurgel || false,

      // Données Hugo (garder l'objet tel quel ou le convertir en JSON string)
      byDate:
        typeof ingredient.byDate === "string"
          ? ingredient.byDate
          : JSON.stringify(ingredient.byDate),

      // Metadata
      nbRecipes: ingredient.nbRecipes || 0,
      totalAssiettes: ingredient.totalAssiettes || 0,

      // État virgin
      status: "virgin",
      isHugoSynced: true,
      hugoContentHash: hugoContentHash,

      // Pas de données collaboratives
      purchases: [],
      store: "",
      who: null,
      stockReel: null,

      // Pas de merge
      isMerged: false,
      mergedInto: null,
      mergedFrom: null,

      // Pas d'override
      totalNeededConsolidated: null,
      totalNeededIsManualOverride: false,
      totalNeededOverrideReason: null,

      // Relations (sera rempli lors de l'hydration)
      mainId: this.#currentMainId as any,
    } as unknown as Products;

    // Enrichir pour obtenir un EnrichedProduct
    return this.#enrichProduct(virginProduct);
  }

  clearCache() {
    this.#enrichedProducts.clear();
    this.#allDates = [];
    this.#lastSync = null;
    if (this.#cacheKey) localStorage.removeItem(this.#cacheKey);
    if (this.#metadataKey) localStorage.removeItem(this.#metadataKey);
    console.log("[ProductsStore] Cache vidé");
  }

  destroy() {
    this.#unsubscribe?.();
    this.#unsubscribe = null;

    // 🔧 Ajouter le cleanup du debounce timeout ?
    if (this.#syncDebounceTimer) {
      clearTimeout(this.#syncDebounceTimer);
      this.#syncDebounceTimer = null;
    }

    console.log("[ProductsStore] Ressources nettoyées");
  }
}

// =============================================================================
// SINGLETON & EXPORTS
// =============================================================================

export const productsStore = new ProductsStore();
