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
  extractAllRecipes,
  buildNeededConsolidatedByDateArray,
  calculateGlobalTotal,
  // ✅ NOUVEAU : Utilitaire pour totalNeededOverride
  parseTotalNeededOverride,
  extractRecipesByDate,
  hasConversions,
  calculateTotalAssiettesInRange,
  calculateTotalNeededInRange,
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

  /**
   * Récupère le total needed pour un produit dans la plage courante
   * ⚡ Lecture directe du cache - O(1)
   */
  getTotalNeededInRange(productId: string): NumericQuantity[] {
    return this.totalNeededByDateRange.get(productId) ?? [];
  }

  /**
   * Version formatée pour l'affichage
   * 💡 Utilisée dans le template
   */
  getFormattedTotalNeeded(productId: string): string {
    const total = this.getTotalNeededInRange(productId);
    return total.length > 0 ? formatTotalQuantity(total) : "-";
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

  // === Cache des totaux par plage de dates ===
  // Ce cache se recalcule automatiquement quand startDate/endDate changent

  totalNeededByDateRange = $derived.by(() => {
    console.log("[Store] Recalcul totalNeededByDateRange");

    // 🎯 Si les dates couvrent toute la période disponible → utilisation normale
    const isFullRange =
      this.startDate === this.firstDate && this.endDate === this.lastDate;

    if (isFullRange) {
      console.log(
        "[Store] Full date range - using totalNeededArray (no calculation)",
      );
      return new Map(
        this.enrichedProducts.map((p) => [p.$id, p.totalNeededArray]),
      );
    }

    const totalMap = new Map<string, NumericQuantity[]>();

    for (const product of this.enrichedProducts) {
      if (product.byDate) {
        // Calcul juste pour les produits affichés
        const neededConsolidated = buildNeededConsolidatedByDateArray(
          product.byDate,
        );
        const total = calculateTotalNeededInRange(
          neededConsolidated,
          this.startDate,
          this.endDate,
        );
        if (total.length > 0) {
          totalMap.set(product.$id, total);
        }
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

  // === ÉTAPE 2 : IDs des produits pertinents ===
  // Dérivé léger qui dépend de totalNeededByDateRange

  relevantProductIds = $derived.by(() => {
    return new Set(this.totalNeededByDateRange.keys());
  });

  // Un seul dérivé qui fait tout : filtrage + pertinence + groupement
  displayProducts = $derived.by(() => {
    // Étape 1 : Filtrer par critères utilisateur ET pertinence temporelle
    const relevantProducts = this.enrichedProducts.filter(
      (product) =>
        this.#matchesFilters(product) &&
        this.relevantProductIds.has(product.$id),
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
          enriched.isSynced = false; // ✅ LOCAL SEULEMENT au départ
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
      await this.#syncFromAppwrite();

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
    console.log(
      `[ProductsStore] Début syncFromAppwrite pour mainId: ${this.#currentMainId}`,
    );

    try {
      // 1. Synchroniser les produits modifiés depuis Appwrite
      console.log(
        `[ProductsStore] Récupération des produits modifiés depuis lastSync: ${this.#lastSync}`,
      );
      const allProducts = await syncProductsWithPurchases(this.#currentMainId, {
        lastSync: this.#lastSync,
        limit: BATCH_LIMIT,
      });
      console.log(
        `[ProductsStore] ${allProducts.length} produits récupérés depuis Appwrite`,
      );

      // 2. Appliquer les produits venant d'Appwrite (isSynced: true)
      // IMPORTANT : Faire cela en premier pour établir la base de données
      allProducts.forEach((product) => {
        const existing = this.#enrichedProducts.get(product.$id);
        console.log(
          `[ProductsStore] Sync produit ${product.$id}: existing=${!!existing}, who=${product.who}, store=${product.store}`,
        );
        const enriched = this.#enrichProduct(product, existing); // ← Préserve les données locales
        enriched.isSynced = true; // ✅ SYNC : Les produits venant d'Appwrite sont sync
        this.#enrichedProducts.set(product.$id, enriched);
      });

      // 3. Synchroniser les purchases modifiés (pour les produits non-modifiés)
      // Appliquer PAR-DESSUS les produits fraîchement synchronisés
      if (this.#lastSync) {
        console.log(
          `[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${this.#lastSync}`,
        );
        const { loadUpdatedPurchases } = await import(
          "../services/appwrite-interactions"
        );
        const updatedPurchases = await loadUpdatedPurchases(
          this.#currentMainId,
          this.#lastSync,
          BATCH_LIMIT,
        );
        console.log(
          `[ProductsStore] ${updatedPurchases.length} purchases modifiés récupérés`,
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

      this.#updateLastSync();
      this.#debouncedPersist();
      console.log(`[ProductsStore] SyncFromAppwrite terminé avec succès`);
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
   * Enrichit un produit Appwrite avec des données calculées
   * Version intelligente : initialise ou met à jour selon la présence d'un produit existant
   */
  #enrichProduct(
    product: Products,
    existing?: EnrichedProduct,
  ): EnrichedProduct {
    if (existing) {
      // Mise à jour d'un produit existant
      return this.#updateExistingProduct(product, existing);
    } else {
      // Initialisation complète d'un nouveau produit
      return this.#createNewEnrichedProduct(product);
    }
  }

  /**
   * Crée un nouveau produit enrichi (initialisation complète)
   */
  #createNewEnrichedProduct(product: Products): EnrichedProduct {
    // Utilitaires existants
    const totalPurchasesArray = calculateTotalQuantityArray(
      transformPurchasesToNumericQuantity(product.purchases ?? []),
    );

    // ✅ NOUVEAU : Parser la structure byDate
    const byDate = parseByDateData(product.byDate);

    let totalNeededArray: NumericQuantity[];
    let totalNeededRawArray: NumericQuantity[] | undefined;

    if (byDate) {
      // ✅ Cas avec structure byDate (nouveau format)
      totalNeededArray = calculateGlobalTotal(byDate);
    } else {
      // ❌ Erreur : structure byDate manquante
      console.error(
        `[ProductsStore] Product ${product.productName} n'a pas de structure byDate - migration requise`,
      );
      totalNeededArray = [];
    }

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
      // Métadonnées minimales
      $id: product.$id,
      $updatedAt: product.$updatedAt,

      // Données de base
      productName: product.productName,
      productHugoUuid: product.productHugoUuid,
      productType: product.productType,
      pFrais: product.pFrais,
      pSurgel: product.pSurgel,
      who: product.who,
      nbRecipes: product.nbRecipes,
      totalAssiettes: product.totalAssiettes,
      isSynced: product.isSynced,
      purchases: product.purchases,
      mainId: product.mainId,
      storeInfo: product.store ? safeJsonParse(product.store) : null,
      totalNeededArray,
      totalPurchasesArray,
      stockArray,
      stockOrTotalPurchases,
      missingQuantityArray,
      displayTotalNeeded: formatTotalQuantity(totalNeededArray),
      displayTotalPurchases,
      displayMissingQuantity,

      // Source de vérité
      byDate: byDate || undefined,

      totalNeededOverride: parseTotalNeededOverride(
        product.totalNeededOverride,
      ),

      totalNeededRawArray,
    };
  }

  /**
   * Met à jour un produit existant (mises à jour minimales, préservation des données statiques)
   */
  #updateExistingProduct(
    product: Products,
    existing: EnrichedProduct,
  ): EnrichedProduct {
    const updated = { ...existing };

    // Métadonnées Appwrite
    updated.$id = product.$id;
    updated.$updatedAt = product.$updatedAt;
    updated.isSynced = true; // Si vient d'Appwrite, alors sync
    updated.mainId = product.mainId;

    // Champs directs Appwrite (uniquement les données collaboratives)
    if (product.who !== undefined) updated.who = product.who;
    if (product.purchases !== undefined) {
      updated.purchases = product.purchases;
      this.#recalculatePurchaseDependents(updated);
    }

    // Champs parsés depuis JSON (uniquement si présents dans le payload)
    if (product.store !== undefined) {
      updated.storeInfo = product.store ? safeJsonParse(product.store) : null;
    }
    if (product.stockReel !== undefined) {
      const stockArray = safeJsonParse<any[]>(product.stockReel) ?? [];
      updated.stockArray = stockArray;
      updated.stockOrTotalPurchases =
        stockArray.length > 0
          ? `${stockArray[stockArray.length - 1].quantity} ${stockArray[stockArray.length - 1].unit}`
          : updated.displayTotalPurchases;
    }

    // Champs d'override (uniquement si présents)
    if (product.totalNeededConsolidated !== undefined) {
      updated.totalNeededConsolidated = product.totalNeededConsolidated;
    }
    if (product.totalNeededOverride !== undefined) {
      updated.totalNeededOverride = parseTotalNeededOverride(
        product.totalNeededOverride,
      );
    }

    // ✅ DONNÉES STATIQUES AUTOMATIQUEMENT PRÉSERVÉES (non modifiées) :
    // - updated.byDate (préservé)
    // - updated.totalNeededArray (préservé)
    // - updated.totalNeededRawArray (préservé)

    return updated;
  }

  /**
   * Recalcule les dépendances liées aux purchases
   */
  #recalculatePurchaseDependents(product: EnrichedProduct): void {
    // Recalculer totalPurchasesArray
    product.totalPurchasesArray = calculateTotalQuantityArray(
      transformPurchasesToNumericQuantity(product.purchases ?? []),
    );

    // Recalculer missingQuantity et display
    const { numeric: missingQuantityArray, display: displayMissingQuantity } =
      calculateAndFormatMissing(
        product.totalNeededArray,
        product.totalPurchasesArray,
      );

    product.missingQuantityArray = missingQuantityArray;
    product.displayMissingQuantity = displayMissingQuantity;
    product.displayTotalPurchases = formatTotalQuantity(
      product.totalPurchasesArray,
    );
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
   * Version optimisée avec enrichProduct intelligent
   */
  #upsertEnrichedProduct(product: Products) {
    const existing = this.#enrichedProducts.get(product.$id);
    const enriched = this.#enrichProduct(product, existing);

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
          // Créer un nouveau produit enrichi avec le purchase ajouté
          const updatedProduct = this.#updateExistingProduct(
            {
              ...product,
              purchases: [...purchases, sanitizedPurchase],
            } as Products,
            product,
          );
          productsToUpdate.push(updatedProduct);
        }
      }
    });

    // Mettre à jour directement les produits dans la map
    productsToUpdate.forEach((product) => {
      this.#enrichedProducts.set(product.$id, product);
    });
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
          const updatedProduct = this.#updateExistingProduct(
            { ...product, purchases: updatedPurchases } as Products,
            product,
          );
          productsToUpdate.push(updatedProduct);
        } else {
          // Ajouter si pas trouvé (edge case)
          // Sécurité si il y a eu desync entre appwrite et les données locales ?
          const updatedProduct = this.#updateExistingProduct(
            { ...product, purchases: [...purchases, purchase] } as Products,
            product,
          );
          productsToUpdate.push(updatedProduct);
        }
      }
    });

    // Mettre à jour directement les produits dans la map
    productsToUpdate.forEach((product) => {
      this.#enrichedProducts.set(product.$id, product);
    });
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
   * Récupère les recettes pour un produit et une date spécifique
   */
  getRecipesForDate(productId: string, date: string): RecipeOccurrence[] {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDate) return [];

    return extractRecipesByDate(product.byDate, date);
  }

  /**
   * Récupère le total d'assiettes pour un produit et une date spécifique
   */
  getTotalAssiettesForDate(productId: string, date: string): number {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDate) return 0;

    return product.byDate[date]?.totalAssiettes || 0;
  }

  /**
   * Détecte si un produit a des conversions (q/u différent de qEq/uEq)
   */
  hasConversions(productId: string): boolean {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDate) return false;

    return hasConversions(product.byDate);
  }

  /**
   * Récupère toutes les dates où un produit est utilisé
   */
  getProductDates(productId: string): string[] {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDate) return [];

    return Object.keys(product.byDate).sort();
  }

  /**
   * Calcule le total d'assiettes pour un produit sur la plage de dates courante
   */
  getTotalAssiettesInRange(productId: string): number {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDate || !this.startDate || !this.endDate) return 0;

    return calculateTotalAssiettesInRange(
      product.byDate,
      this.startDate,
      this.endDate,
    );
  }

  /**
   * Récupère le détail des recettes pour un produit sur la plage de dates courante
   */
  getRecipesInRange(productId: string): RecipeOccurrence[] {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDate || !this.startDate || !this.endDate) return [];

    const datesInRange = Object.keys(product.byDate).filter((dateStr) => {
      const date = new Date(dateStr);
      const startDate = this.startDate ? new Date(this.startDate) : null;
      const endDate = this.endDate ? new Date(this.endDate) : null;
      return startDate && endDate && date >= startDate && date <= endDate;
    });

    return datesInRange.flatMap((date) => product.byDate![date]?.recipes || []);
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
