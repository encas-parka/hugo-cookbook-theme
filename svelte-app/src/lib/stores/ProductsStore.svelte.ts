import { SvelteMap } from "svelte/reactivity";
import superjson from "superjson";
import { createStorageKey } from "../utils/url-utils";
import { useDebounce } from "runed";
import type { Products, Purchases } from "../types/appwrite.d";

import {
  safeJsonParse,
  calculateAndFormatMissing,
  formatTotalQuantity,
  transformPurchasesToNumericQuantity,
  calculateTotalQuantityArray,
  // ✅ NOUVEAUX : Utilitaires pour byDate
  parseByDateData,
  calculateTotalFromByDate,
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
  RecipeOccurrence, // ✅ NOUVEAU : Import pour byDate
} from "../types/store.types";

import {
  subscribeToRealtime,
  createMainDocument,
  type LoadProductsOptions,
  loadPurchasesListByIds,
  type SyncOptions,
  syncProductsWithPurchases,
  loadMainEventData,
} from "../services/appwrite-interactions";
import {
  loadHugoEventData,
  createProductsFromHugo,
} from "../services/hugo-loader";

/**
 * ProductsStore - Store principal de gestion des produits avec Svelte 5
 *
 * Architecture du système :
 * ┌─────────────────────────────────────────────────────────────┐
 * │                  ProductsStore                              │
 * │  • SvelteMap<id, EnrichedProduct> (réactivité O(1))        │
 * │  • Cache localStorage (SuperJSON)                          │
 * │  • Filtrage et dérivés réactifs                            │
 * │  • Abonnement realtime Appwrite                            │
 * └─────────────────▲───────────────────────────────────────────┘
 *                   │ Fournit les données brutes
 *                   │
 * ┌─────────────────▼───────────────────────────────────────────┐
 * │              ProductModalState                              │
 * │  • Factory par produit: createProductModalState(productId) │
 * │  • États locaux des formulaires (purchase, stock, etc.)    │
 * │  • Données dérivées du ProductsStore                       │
 * │  • Orchestration des appels Appwrite                       │
 * └─────────────────▲───────────────────────────────────────────┘
 *                   │ Consommé par les composants
 *                   │
 * ┌─────────────────▼───────────────────────────────────────────┐
 * │                Composants Svelte                            │
 * │  • UI réactive via $state/$derived                         │
 * │  • Actions utilisateur → ProductModalState                │
 * │  • Mises à jour automatiques                               │
 * └─────────────────────────────────────────────────────────────┘
 *
 * Flux de données :
 * 1. Initialize : Hugo → Cache → Appwrite → Realtime
 * 2. Filtres : $derived.by() pour performance
 * 3. Persistence : localStorage + debounce
 * 4. Sync : lastSync + delta updates
 *
 * @usage
 * await productsStore.initialize('mainId');
 * productsStore.setSearchQuery('pâtes');
 * const product = productsStore.getEnrichedProductById('abc');
 * const modalState = createProductModalState('abc');
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
  startDate = $state<string | null>(null);
  endDate = $state<string | null>(null);

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
  setStartDate(date: string | null) {
    this.startDate = date;
  }
  setEndDate(date: string | null) {
    this.endDate = date;
  }
  setDateRange(start: string | null, end: string | null) {
    this.startDate = start;
    this.endDate = end;
  }

  /**
   * Initialise automatiquement la plage de dates si elle est vide
   */
  private initializeDateRange() {
    if ((!this.startDate || !this.endDate) && this.#allDates.length > 0) {
      const sortedDates = [...this.#allDates].sort();
      this.startDate = sortedDates[0];
      this.endDate = sortedDates[sortedDates.length - 1];
    }
    console.log(
      `[ProductsStore] Date range initialized: ${this.startDate} - ${this.endDate}`,
    );
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
    const result = Array.from(this.#enrichedProducts.values());
    console.log(
      `[ProductsStore] enrichedProducts recalculated: ${result.length} products`,
    );
    return result;
  });

  // Cache pour la mémorisation des calculs
  #totalNeededCache = new Map<string, NumericQuantity[]>();
  #lastDateRange = { start: "", end: "" };

  /**
   * Total des besoins par plage de dates sélectionnée
   * ✅ OPTIMISÉ : Utilise la structure byDate + mémorisation pour des performances optimales
   */
  totalNeededByDateRange = $derived.by(() => {
    console.log("[ProductsStore] totalNeededByDateRange recalculated");
    // Vérifier si la plage de dates a changé
    const currentRange = {
      start: this.startDate || "",
      end: this.endDate || "",
    };

    const rangeChanged =
      currentRange.start !== this.#lastDateRange.start ||
      currentRange.end !== this.#lastDateRange.end;

    // Si la plage de dates n'a pas changé, retourner le cache
    if (!rangeChanged && this.#totalNeededCache.size > 0) {
      return this.#totalNeededCache;
    }
    console.log("Range Changed:", rangeChanged);
    console.log("Current Range:", currentRange);
    console.log("Last Range:", this.#lastDateRange);
    console.log("date", currentRange.start, currentRange.end);
    // Mettre à jour la plage de dates et vider le cache si nécessaire
    this.#lastDateRange = currentRange;
    this.#totalNeededCache.clear();

    const totalMap = new Map<string, NumericQuantity[]>();

    // Traiter les produits par lots pour éviter de bloquer le thread
    const products = this.enrichedProducts;

    for (const product of products) {
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
          this.#totalNeededCache.set(product.$id, manual);
        }
        continue;
      }

      // ✅ Utiliser la structure byDate si disponible
      if (!product.byDateParsed || !this.startDate || !this.endDate) {
        continue;
      }

      const total = calculateTotalFromByDate(
        product.byDateParsed,
        this.startDate,
        this.endDate,
      );

      if (total && total.length > 0) {
        totalMap.set(product.$id, total);
        this.#totalNeededCache.set(product.$id, total);
      }
    }
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
    total: this.enrichedProducts.length,
    frais: this.enrichedProducts.filter((p) => p.pFrais).length,
    surgel: this.enrichedProducts.filter((p) => p.pSurgel).length,
    merged: this.enrichedProducts.filter((p) => p.isMerged).length,
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

  // Un seul dérivé qui fait tout : filtrage + pertinence + groupement
  displayProducts = $derived.by(() => {
    // Étape 1 : Filtrer par critères utilisateur ET pertinence temporelle
    const relevantProducts = this.enrichedProducts.filter(
      (product) =>
        this.#matchesFilters(product) &&
        this.totalNeededByDateRange.has(product.$id),
    );

    // Étape 2 : Grouper directement
    if (this.#filters.groupBy === "none") {
      return { "": relevantProducts };
    }

    return Object.groupBy(relevantProducts, (product) => {
      if (this.#filters.groupBy === "store") {
        return product.storeInfo?.storeName || "Non défini";
      } else {
        return product.productType || "Non défini";
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
      // 1. Charger cache local si existe
      await this.#loadFromCache();

      // 2. Si cache vide → initialiser depuis Hugo → créer le document main dans Appwrite s'il n'existe pas →
      if (this.#enrichedProducts.size === 0) {
        const hugoData = await loadHugoEventData(mainId);
        console.log(
          `[ProductsStore] Données Hugo chargées: ${hugoData.ingredients.length} ingredients`,
        );

        // Créer les produits depuis Hugo
        hugoData.ingredients.forEach((ingredient) => {
          const partialProduct = createProductsFromHugo(
            ingredient,
            mainId,
            hugoData.hugoContentHash,
          );
          const enriched = this.#enrichProduct(partialProduct as Products);
          this.#enrichedProducts.set(enriched.$id, enriched);
        });

        // Initialiser la plage de dates
        this.#allDates = hugoData.allDates;

        const mainDocument = await loadMainEventData(mainId);

        if (!mainDocument) {
          //Créer le document main dans Appwrite
          await createMainDocument(
            hugoData.mainGroup_id,
            hugoData.hugoContentHash,
            hugoData.allDates,
            hugoData.name,
          );
        }

        // Persister le cache (sans lastSync pour l'instant)
        this.#persistToCache();
      }

      this.initializeDateRange();

      // 3. Sync en arrière-plan
      this.#syncFromAppwrite();

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

  async #syncFromAppwrite() {
    if (!this.#currentMainId) return;
    this.#syncing = true;

    try {
      // 1. Synchroniser les produits modifiés
      const allProducts = await syncProductsWithPurchases(this.#currentMainId, {
        lastSync: this.#lastSync,
        limit: BATCH_LIMIT,
      });

      // 2. Synchroniser les purchases modifiés (pour les produits non-modifiés)
      if (this.#lastSync) {
        const { loadUpdatedPurchases } = await import(
          "../services/appwrite-interactions"
        );
        const updatedPurchases = await loadUpdatedPurchases(
          this.#currentMainId,
          this.#lastSync,
          BATCH_LIMIT,
        );

        // Appliquer les purchases modifiés aux produits existants
        updatedPurchases.forEach((purchase) => {
          if (purchase.products?.length) {
            const productIds = purchase.products.map((prod: any) =>
              typeof prod === "string" ? prod : prod.$id,
            );
            this.#updatePurchaseInProducts(productIds, purchase);
          }
        });
      }

      // 3. Appliquer les produits venant d'Appwrite (isSynced: true)
      allProducts.forEach((product) => {
        const enriched = this.#enrichProduct(product);
        enriched.isSynced = true; // ✅ SYNC : Les produits venant d'Appwrite sont sync
        this.#enrichedProducts.set(product.$id, enriched);
      });

      this.#updateLastSync();
      this.#debouncedPersist();
    } catch (error) {
      console.error("[ProductsStore] Erreur lors du sync:", error);
      throw error;
    } finally {
      this.#syncing = false;
    }
  }

  // === UTILS ===
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
  // ENRICHISSEMENT DE PRODUITS
  // =========================================================================

  /**
   * Enrichit un produit brut avec tous les calculs
   * ✅ NOUVEAU : Utilise la structure byDate pour de meilleures performances
   */
  #enrichProduct(product: Products): EnrichedProduct {
    // Utilitaires existants
    const totalPurchasesArray = calculateTotalQuantityArray(
      transformPurchasesToNumericQuantity(product.purchases ?? []),
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
        totalNeededRawArray =
          safeJsonParse<NumericQuantity[]>(product.totalNeededConsolidated) ||
          undefined;
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

      // ✅ SYNC : Par défaut, les produits chargés depuis cache/Hugo sont non-sync
      // isSynced: false,
    };
  }

  /**
   * Batch upsert multiple products
   */
  #batchUpsertEnrichedProducts(products: Products[]) {
    if (!products.length) return;

    products.forEach((product) => this.#upsertEnrichedProduct(product));
    console.log(`[ProductsStore] ${products.length} produits upserted`);
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

  async #applyPurchaseCreated(purchase: Purchases) {
    if (!purchase.products?.length) {
      console.warn(
        "[ProductsStore] Purchase créé sans products:",
        purchase.$id,
      );
      return;
    }
    // Extraire les product IDs
    const productIds = purchase.products
      .map((prod: any) => (typeof prod === "string" ? prod : prod.$id))
      .filter(Boolean);

    // Mise à jour locale immédiate
    this.#addPurchaseToProducts(productIds, purchase);
  }

  /**
   * Gère la mise à jour d'un purchase (payload partiel possible)
   */
  async #applyPurchaseUpdated(purchase: Purchases) {
    // Si products[] est dans le payload, on peut procéder directement
    // TOCHECK : normalement n'y ait jamais, sauf peut etre lorsque l'on mergera des products ??
    if (purchase.products?.length) {
      const productIds = purchase.products
        .map((prod: any) => (typeof prod === "string" ? prod : prod.$id))
        .filter(Boolean);

      this.#updatePurchaseInProducts(productIds, purchase);
      return;
    }

    // ⚠️ Sinon, on doit recharger le purchase complet
    console.log(
      "[ProductsStore] Purchase update sans products[], rechargement...",
    );

    try {
      const [fullPurchase] = await loadPurchasesListByIds([purchase.$id]);

      if (fullPurchase?.products?.length) {
        const productIds = fullPurchase.products
          .map((prod: any) => (typeof prod === "string" ? prod : prod.$id))
          .filter(Boolean);

        this.#updatePurchaseInProducts(productIds, fullPurchase);
      }
    } catch (err) {
      console.error("[ProductsStore] Erreur rechargement purchase:", err);
    }
  }

  /**
   * Nettoie un purchase pour éviter la récursion dans le cache local
   * Transforme les relations objets en IDs simples
   * @param purchase - Purchase potentiellement "sale" avec des objets complets
   * @returns Purchase "propre" avec seulement des IDs dans les relations
   */
  #sanitizePurchase(purchase: Purchases): Purchases {
    return {
      ...purchase,
      products:
        purchase.products?.map((prod: any) =>
          typeof prod === "string" ? prod : prod.$id,
        ) || [],
      mainId:
        typeof purchase.mainId === "string"
          ? purchase.mainId
          : purchase.mainId.$id,
    };
  }

  /**
   * Ajoute un purchase à ses products (pour CREATE)
   */
  #addPurchaseToProducts(productIds: string[], purchase: Purchases) {
    // Nettoyer les relations du purchase pour éviter la récursion dans le cache
    const sanitizedPurchase = this.#sanitizePurchase(purchase);

    const productsToUpdate: Products[] = [];

    productIds.forEach((productId) => {
      const product = this.#enrichedProducts.get(productId);
      if (product) {
        const purchases = product.purchases || [];
        // Éviter les doublons (au cas où)
        if (!purchases.some((p) => p.$id === sanitizedPurchase.$id)) {
          productsToUpdate.push({
            ...product,
            purchases: [...purchases, sanitizedPurchase],
          } as Products);
        }
      }
    });

    this.#batchUpsertEnrichedProducts(productsToUpdate);
  }

  /**
   * Met à jour un purchase dans ses products (pour UPDATE)
   */
  #updatePurchaseInProducts(productIds: string[], purchase: Purchases) {
    // Nettoyer les relations du purchase pour éviter la récursion dans le cache
    const sanitizedPurchase = this.#sanitizePurchase(purchase);

    const productsToUpdate: Products[] = [];

    // TOCHECK : le fait qu'il y ait potentiellement products est correct du point de vue de la façon dont nous avons défini la relation products ←→ purchases comme "many to many", en vue des products mergés, mais dans les fait, est ce qu'on attribura plusieurs products à un purchases ???

    productIds.forEach((productId) => {
      const product = this.#enrichedProducts.get(productId);
      if (product) {
        const purchases = product.purchases || [];
        const index = purchases.findIndex(
          (p) => p.$id === sanitizedPurchase.$id,
        );

        if (index >= 0) {
          // Remplacer le purchase existant
          const updatedPurchases = [...purchases];
          updatedPurchases[index] = sanitizedPurchase;
          productsToUpdate.push({
            ...product,
            purchases: updatedPurchases,
          } as Products);
        } else {
          // Ajouter si pas trouvé (edge case)
          // Sécurité si il y a eu desync entre appwrite et les données locales ?
          productsToUpdate.push({
            ...product,
            purchases: [...purchases, purchase],
          } as Products);
        }
      }
    });

    this.#batchUpsertEnrichedProducts(productsToUpdate);
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
        this.#applyPurchaseCreated(purchase);
        this.#updateLastSync();
        this.#debouncedPersist();
      },
      onPurchaseUpdate: (purchase: Purchases) => {
        this.#applyPurchaseUpdated(purchase);
        this.#updateLastSync();
        this.#debouncedPersist();
      },

      // TODO: on ne delete pas les purchase, on les marque deleted = true
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
    if (!product?.byDateParsed || !this.startDate || !this.endDate) return 0;

    return calculateTotalAssiettesInRange(
      product.byDateParsed,
      this.startDate,
      this.endDate,
    );
  }

  /**
   * Récupère le détail des recettes pour un produit sur la plage de dates courante
   */
  getRecipesInRange(productId: string): RecipeOccurrence[] {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDateParsed || !this.startDate || !this.endDate) return [];

    const datesInRange = Object.keys(product.byDateParsed).filter((dateStr) => {
      const date = new Date(dateStr);
      const startDate = this.startDate ? new Date(this.startDate) : null;
      const endDate = this.endDate ? new Date(this.endDate) : null;
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
    await this.initialize(mainId);
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
