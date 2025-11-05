import { SvelteMap } from "svelte/reactivity";
import { useDebounce } from "runed";
import type { Products, Purchases } from "../types/appwrite.d";

import {
  safeJsonParse,
  calculateAndFormatMissing,
  formatTotalQuantity,
  transformPurchasesToNumericQuantity,
  calculateTotalQuantityArray,
  buildNeededConsolidatedByDateArray,
  parseTotalNeededOverride,
  extractRecipesByDate,
  hasConversions,
  calculateTotalAssiettesInRange,
  calculateTotalNeededInRange,
} from "../utils/productsUtils";
import type {
  EnrichedProduct,
  NumericQuantity,
  RecipeOccurrence,
  StoreInfo,
} from "../types/store.types";

import {
  subscribeToRealtime,
  createMainDocument,
  loadPurchasesListByIds,
  syncProductsWithPurchases,
  loadMainEventData,
} from "../services/appwrite-interactions";
import {
  loadHugoEventData,
  createEnrichedProductsFromHugo,
} from "../services/hugo-loader";
import { createIDBCache, type IDBCache } from "../services/indexeddb-cache";

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
  #lastSync = $state<string | null>(null);

  // Gestion des dates
  #availableDates = $state<string[]>([]);
  dateRange = $state<{ start: string | null; end: string | null }>({
    start: null,
    end: null,
  });

  // Cache keys
  // #cacheKey: string | null = null;
  // #metadataKey: string | null = null;
  #idbCache: IDBCache | null = null;

  // Gestion des mises à jour
  #unsubscribe: (() => void) | null = null;

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

  get syncing() {
    return this.#syncing;
  }

  // ====== Gestion des dates ======
  //
  get availableDates() {
    return this.#availableDates;
  }

  /**
   * Définit la plage de dates avec validation intelligente
   * Détermine automatiquement quelle date est start/end en fonction de leur ordre chronologique
   */
  setDateRange(date1: string | null, date2: string | null) {
    if (!date1 && !date2) {
      this.dateRange = { start: null, end: null };
      return;
    }

    if (!date1 || !date2) {
      // Un seul cas, on l'utilise pour les deux
      this.dateRange = { start: date1 || date2, end: date1 || date2 };
      return;
    }

    // Déterminer automatiquement start/end selon l'ordre chronologique
    const start = new Date(date1) <= new Date(date2) ? date1 : date2;
    const end = new Date(date1) >= new Date(date2) ? date1 : date2;

    this.dateRange = { start, end };
  }

  /**
   * Vérifie si la plage de dates couvre toutes les dates disponibles
   */
  isFullRange() {
    return (
      this.dateRange.start === this.firstAvailableDate &&
      this.dateRange.end === this.lastAvailableDate
    );
  }

  /**
   * Initialise automatiquement la plage de dates si elle est vide
   */
  private initializeDateRange() {
    if (
      (!this.dateRange.start || !this.dateRange.end) &&
      this.#availableDates.length > 0
    ) {
      const sortedDates = [...this.#availableDates].sort();
      this.dateRange = {
        start: sortedDates[0],
        end: sortedDates[sortedDates.length - 1],
      };
    }
    console.log(
      `[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`,
    );
  }

  // Bornes calculées (dérivées)
  get firstAvailableDate() {
    if (this.#availableDates.length === 0) return null;
    return [...this.#availableDates].sort()[0];
  }

  get lastAvailableDate() {
    if (this.#availableDates.length === 0) return null;
    return [...this.#availableDates].sort().pop();
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
  // Ce cache se recalcule automatiquement quand dateRange.start/dateRange.end changent

  /**
   * Produits filtrés qui ont des données dans la plage de dates courante
   * Ce dérivé principal optimise tous les calculs suivants en évitant les itérations multiples
   */
  filteredProductsByDateRange = $derived.by(() => {
    console.log("[Store] Filtering products by date range");

    if (!this.dateRange.start || !this.dateRange.end) {
      return [];
    }

    const startDate = new Date(this.dateRange.start);
    const endDate = new Date(this.dateRange.end);

    return this.enrichedProducts.filter((product) => {
      if (!product.byDate) return false;

      // Application des filtres utilisateur
      const matchesFilters = this.#matchesFilters(product);
      if (!matchesFilters) return false;

      // Vérifier si le produit a des données dans la plage de dates
      return Object.keys(product.byDate).some((dateStr) => {
        const date = new Date(dateStr);
        return date >= startDate && date <= endDate;
      });
    });
  });

  totalNeededByDateRange = $derived.by(() => {
    console.log("[Store] Recalcul totalNeededByDateRange");

    // 🎯 Si les dates couvrent toute la période disponible → utilisation normale
    const isFullRange =
      this.dateRange.start === this.firstAvailableDate &&
      this.dateRange.end === this.lastAvailableDate;

    if (isFullRange) {
      console.log(
        "[Store] Full date range - using totalNeededArray (no calculation)",
      );
      return new Map(
        this.enrichedProducts.map((p) => [p.$id, p.totalNeededArray]),
      );
    }

    const totalMap = new Map<string, NumericQuantity[]>();

    // Itération optimisée sur les produits déjà filtrés
    for (const product of this.filteredProductsByDateRange) {
      if (product.byDate) {
        // Calcul juste pour les produits pertinents
        const neededConsolidated = buildNeededConsolidatedByDateArray(
          product.byDate,
        );
        const total = calculateTotalNeededInRange(
          neededConsolidated,
          this.dateRange.start,
          this.dateRange.end,
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
   * Nombre total de recettes par produit sur la plage de dates courante
   * Map<productId, nombre de recettes>
   */
  totalRecipesByDateRange = $derived.by(() => {
    const recipesMap = new Map<string, number>();

    // Itération optimisée sur les produits déjà filtrés
    for (const product of this.filteredProductsByDateRange) {
      const recipesInRange = this.getRecipesInRange(product.$id);
      recipesMap.set(product.$id, recipesInRange.length);
    }

    return recipesMap;
  });

  /**
   * Total d'assiettes par produit sur la plage de dates courante
   * Map<productId, total d'assiettes>
   */
  totalAssiettesByDateRange = $derived.by(() => {
    const assiettesMap = new Map<string, number>();

    // Itération optimisée sur les produits déjà filtrés
    for (const product of this.filteredProductsByDateRange) {
      const totalInRange = this.getTotalAssiettesInRange(product.$id);
      assiettesMap.set(product.$id, totalInRange);
    }

    return assiettesMap;
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

  // Un seul dérivé qui fait tout : groupement basé sur les produits filtrés par date
  groupedFilteredProducts = $derived.by(() => {
    // Utiliser les produits déjà filtrés par plage de dates
    const relevantProducts = this.filteredProductsByDateRange;

    // Grouper les produits
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

    try {
      this.#idbCache = await createIDBCache(mainId);
    } catch (err) {
      console.error("[ProductsStore] Erreur ouverture IndexedDB:", err);
      throw new Error("Impossible d'initialiser le cache IndexedDB");
    }

    this.#error = null;

    try {
      // 1. Charger cache local si existe
      await this.#loadFromCache();

      // 2. Si cache vide → initialiser depuis Hugo
      if (this.#enrichedProducts.size === 0) {
        console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");

        const hugoData = await loadHugoEventData(mainId);
        console.log(
          `[ProductsStore] Hugo chargé: ${hugoData.ingredients.length} ingrédients`,
        );

        // ✅ Créer directement des EnrichedProducts (avec byDate, calculées, etc.)
        const enrichedProducts = createEnrichedProductsFromHugo(
          hugoData.ingredients,
          mainId,
        );

        // Ajouter à la SvelteMap
        enrichedProducts.forEach((enriched) => {
          this.#enrichedProducts.set(enriched.$id, enriched);
        });

        // Initialiser la plage de dates
        this.#availableDates = [...hugoData.allDates]; // Copie pour éviter les références croisées

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
        await this.#persistToCache();
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
   * Charge les produits depuis IndexedDB
   */
  async #loadFromCache() {
    if (!this.#idbCache) return;

    try {
      // Charger les produits
      const productsMap = await this.#idbCache.loadProducts();

      productsMap.forEach((product, id) => {
        this.#enrichedProducts.set(id, product);
      });

      // Charger les métadonnées
      const metadata = await this.#idbCache.loadMetadata();
      this.#lastSync = metadata.lastSync;
      this.#availableDates = [...metadata.allDates]; // Copie pour éviter les références croisées

      console.log(
        `[ProductsStore] ${productsMap.size} produits chargés du cache IDB, lastSync: ${metadata.lastSync}`,
      );
    } catch (err) {
      console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:", err);
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
      await this.#persistToCache(); // Sync complet = persistence complète
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
   * Persiste les produits enrichis dans IndexedDB
   */
  async #persistToCache() {
    if (!this.#idbCache) return;

    try {
      // Sauvegarder les produits
      await this.#idbCache.saveProducts(this.#enrichedProducts);

      // Sauvegarder les métadonnées
      await this.#idbCache.saveMetadata({
        lastSync: this.#lastSync,
        allDates: [...this.#availableDates], // Copie simple pour éviter les problèmes de clonage
      });

      console.log("[ProductsStore] Cache IDB persisté");
    } catch (err) {
      console.error("[ProductsStore] Erreur persist cache IDB:", err);
    }
  }

  /**
   * Persiste uniquement les produits spécifiés dans IndexedDB
   * 🎯 Optimisé : pas de sauvegarde complète, uniquement les produits affectés
   */
  async #persistAffectedProducts(productIds: string[]): Promise<void> {
    if (!this.#idbCache || productIds.length === 0) return;

    try {
      // Persister chaque produit affecté
      const persistPromises = productIds
        .map((id) => this.#enrichedProducts.get(id))
        .filter((product) => product != null)
        .map((product) => this.#idbCache!.upsertProduct(product!));

      if (persistPromises.length > 0) {
        await Promise.all(persistPromises);
        console.log(
          `[ProductsStore] ${persistPromises.length} produits affectés persistés`,
        );
      }
    } catch (err) {
      console.error(
        "[ProductsStore] Erreur persistence produits affectés:",
        err,
      );
    }
  }

  #updateLastSync() {
    this.#lastSync = new Date().toISOString();
  }

  // =========================================================================
  // ENRICHISSEMENT DE PRODUITS
  // =========================================================================

  /**
   * 🎯 #enrichProduct : Prend un Products d'Appwrite et fusionne avec existant
   *
   * Cas 1 : Nouveau produit Appwrite (sync)
   *   - Récupérer l'existant local, garder byDate
   *   - Fusionner les données Appwrite fraîches
   *   - Recalculer les dérivés
   *
   * Cas 2 : Mise à jour existant
   *   - Remplacer les champs bruts modifiés
   *   - Recalculer les dérivés concernés
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
      return this.#createEnrichedProductFromAppwrite(product);
    }
  }

  /**
   * Crée un EnrichedProduct depuis un Products Appwrite seul
   * ⚠️ Utilisé au sync si le produit n'existe pas localement (cas rare)
   */
  #createEnrichedProductFromAppwrite(product: Products): EnrichedProduct {
    // Calculer depuis purchases
    const totalPurchasesArray = calculateTotalQuantityArray(
      transformPurchasesToNumericQuantity(product.purchases ?? []),
    );

    // byDate manquant = pas de totalNeededArray
    const totalNeededArray: NumericQuantity[] = [];

    const { numeric: missingQuantityArray, display: displayMissingQuantity } =
      calculateAndFormatMissing(totalNeededArray, totalPurchasesArray);

    const stockParsed = safeJsonParse<any>(product.stockReel) ?? null;
    const displayTotalPurchases = formatTotalQuantity(totalPurchasesArray);
    const storeInfo = product.store
      ? safeJsonParse<StoreInfo>(product.store)
      : null;

    const stockOrTotalPurchases = stockParsed
      ? `${stockParsed.quantity} ${stockParsed.unit}`
      : displayTotalPurchases;

    return {
      // Métadonnées Appwrite
      $id: product.$id,
      $createdAt: product.$createdAt,
      $updatedAt: product.$updatedAt,
      // $permissions: product.$permissions,
      // $databaseId: product.$databaseId,
      // $sequence: product.$sequence,
      // $tableId: product.$tableId,

      // Données métier
      productHugoUuid: product.productHugoUuid,
      productName: product.productName,
      productType: "none",
      pFrais: false, // ← Appwrite n'a pas ces champs (viennent de Hugo)
      pSurgel: false,
      nbRecipes: 0,
      totalAssiettes: 0,
      isSynced: product.isSynced,
      mainId: product.mainId,

      // Données collaboratives (brutes Appwrite)
      status: product.status,
      who: product.who,
      store: product.store,
      stockReel: product.stockReel,
      previousNames: product.previousNames,
      isMerged: product.isMerged,
      mergedFrom: product.mergedFrom,
      mergeDate: product.mergeDate,
      mergeReason: product.mergeReason,
      mergedInto: product.mergedInto,
      totalNeededOverride: product.totalNeededOverride,
      purchases: product.purchases,

      // Hugo (⚠️ manquant, sera vide)
      byDate: null,

      // Calculées
      storeInfo,
      stockParsed,
      totalNeededArray,
      totalPurchasesArray,
      missingQuantityArray,
      stockOrTotalPurchases,
      displayTotalNeeded: "-",
      displayTotalPurchases,
      displayMissingQuantity,
      totalNeededOverrideParsed: parseTotalNeededOverride(
        product.totalNeededOverride,
      ),
    };
  }

  /**
   * Met à jour un EnrichedProduct existant avec données Appwrite fraîches
   *
   * 🎯 Stratégie :
   * - Remplacer TOUS les champs bruts Appwrite
   * - Garder byDate (statique, de Hugo)
   * - Recalculer les dérivés
   */
  #updateExistingProduct(
    product: Products | EnrichedProduct,
    existing: EnrichedProduct,
  ): EnrichedProduct {
    // Utiliser les nouvelles valeurs si présentes, sinon garder les anciennes
    // Cela protège contre l'écrasement par les payloads partiels du realtime

    // Fusion intelligente des purchases
    const mergedPurchases = product.purchases ?? existing.purchases;

    // Calculer totalPurchasesArray depuis les purchases fusionnées
    const totalPurchasesArray = calculateTotalQuantityArray(
      transformPurchasesToNumericQuantity(mergedPurchases ?? []),
    );
    const displayTotalPurchases = formatTotalQuantity(totalPurchasesArray);

    // Recalculer missing
    const { numeric: missingQuantityArray, display: displayMissingQuantity } =
      calculateAndFormatMissing(existing.totalNeededArray, totalPurchasesArray);

    // Fusion intelligente du stock
    const mergedStockReel = product.stockReel ?? existing.stockReel;
    const stockParsed = mergedStockReel
      ? safeJsonParse<any>(mergedStockReel)
      : existing.stockParsed;

    // Fusion intelligente du store
    const mergedStore = product.store ?? existing.store;
    const storeInfo = mergedStore
      ? safeJsonParse<StoreInfo>(mergedStore)
      : existing.storeInfo;

    const stockOrTotalPurchases = stockParsed
      ? `${stockParsed.quantity} ${stockParsed.unit}`
      : displayTotalPurchases;

    // 📝 Log de debug pour tracer les fusions importantes
    if (product.purchases === undefined && existing.purchases?.length) {
      console.log(
        `[ProductsStore] Fusion intelligente : préservation de ${existing.purchases.length} purchases pour ${existing.productName}`,
      );
    }

    return {
      // ✅ GARDER : toujours garder les données statiques Hugo
      ...existing,

      // ✅ FUSION SÉLECTIVE : seulement si présent dans le payload
      $updatedAt: product.$updatedAt,

      // Champs métier - fusionner seulement si définis
      productName: product.productName ?? existing.productName,
      isSynced: product.isSynced ?? existing.isSynced,
      mainId: product.mainId ?? existing.mainId,

      // 🛡️ CHAMPS CRITIQUES : PROTECTION CONTRE L'ÉCRASEMENT
      status: product.status ?? existing.status,
      who: product.who ?? existing.who,
      store: mergedStore,
      stockReel: mergedStockReel,

      // 🚨 PROTECTION SPÉCIALE pour purchases (le bug principal)
      purchases: mergedPurchases,

      // Autres champs avec protection contre les payloads partiels
      previousNames: product.previousNames ?? existing.previousNames,
      isMerged: product.isMerged ?? existing.isMerged,
      mergedFrom: product.mergedFrom ?? existing.mergedFrom,
      mergeDate: product.mergeDate ?? existing.mergeDate,
      mergeReason: product.mergeReason ?? existing.mergeReason,
      mergedInto: product.mergedInto ?? existing.mergedInto,
      totalNeededOverride:
        product.totalNeededOverride ?? existing.totalNeededOverride,

      // ✅ RECALCULER : les dérivés basés sur les données fusionnées
      storeInfo,
      stockParsed,
      totalPurchasesArray,
      missingQuantityArray,
      stockOrTotalPurchases,
      displayTotalPurchases,
      displayMissingQuantity,
      totalNeededOverrideParsed: parseTotalNeededOverride(
        product.totalNeededOverride ?? existing.totalNeededOverride,
      ),
    };
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

  async #applyPurchaseCreated(purchase: Purchases): Promise<string[]> {
    if (!purchase.products?.length) {
      console.warn(
        "[ProductsStore] Purchase créé sans products:",
        purchase.$id,
      );
      return [];
    }
    // Extraire les product IDs
    const productIds = purchase.products
      .map((prod: any) => (typeof prod === "string" ? prod : prod.$id))
      .filter(Boolean);

    // Mise à jour locale immédiate
    this.#addPurchaseToProducts(productIds, purchase);

    return productIds; // Retourner les produits affectés pour persistence
  }

  /**
   * Gère la mise à jour d'un purchase (payload partiel possible)
   */
  async #applyPurchaseUpdated(purchase: Purchases): Promise<string[]> {
    // Si products[] est dans le payload, on peut procéder directement
    // TOCHECK : normalement n'y ait jamais, sauf peut etre lorsque l'on mergera des products ??
    if (purchase.products?.length) {
      const productIds = purchase.products
        .map((prod: any) => (typeof prod === "string" ? prod : prod.$id))
        .filter(Boolean);

      this.#updatePurchaseInProducts(productIds, purchase);
      return productIds;
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
        return productIds;
      }

      return [];
    } catch (err) {
      console.error("[ProductsStore] Erreur rechargement purchase:", err);
      return [];
    }
  }

  /**
   * Gère la suppression d'un purchase (marqué deleted = true)
   */
  async #applyPurchaseDeleted(purchaseId: string): Promise<string[]> {
    // Trouver et re-enrichir les produits affectés
    const affectedProducts = Array.from(this.#enrichedProducts.values()).filter(
      (p) => p.purchases?.some((pur) => pur.$id === purchaseId),
    );

    affectedProducts.forEach((product) => {
      this.#upsertEnrichedProduct(product as any);
    });

    // Retourner les IDs des produits affectés pour persistence
    return affectedProducts.map((p) => p.$id);
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
      mainId: purchase.mainId, // Garder le type original (Main ou string selon ce qu'Appwrite envoie)
    };
  }

  /**
   * Ajoute un purchase à ses products (pour CREATE)
   */
  #addPurchaseToProducts(productIds: string[], purchase: Purchases) {
    // Nettoyer les relations du purchase pour éviter la récursion dans le cache
    const sanitizedPurchase = this.#sanitizePurchase(purchase);

    const productsToUpdate: EnrichedProduct[] = [];

    productIds.forEach((productId) => {
      const product = this.#enrichedProducts.get(productId);
      if (product) {
        const purchases = product.purchases || [];
        // Éviter les doublons (au cas où)
        if (!purchases.some((p) => p.$id === sanitizedPurchase.$id)) {
          // Créer un nouveau produit enrichi avec le purchase ajouté
          // 🔥 RESTAURER LE STATUT À "active" car le purchase a été créé avec succès
          const updatedProduct = this.#updateExistingProduct(
            {
              ...product,
              purchases: [...purchases, sanitizedPurchase],
              status: "active", // Retour au statut normal après sync réussie
            },
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

    const productsToUpdate: EnrichedProduct[] = [];

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
          // 🔥 RESTAURER LE STATUT À "active" car le purchase a été mis à jour avec succès
          const updatedProduct = this.#updateExistingProduct(
            {
              ...product,
              purchases: updatedPurchases,
              status: "active", // Retour au statut normal après sync réussie
            },
            product,
          );
          productsToUpdate.push(updatedProduct);
        } else {
          // Ajouter si pas trouvé (edge case)
          // Sécurité si il y a eu desync entre appwrite et les données locales ?
          const updatedProduct = this.#updateExistingProduct(
            {
              ...product,
              purchases: [...purchases, purchase],
              status: "active", // Retour au statut normal après sync réussie
            },
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
        // Persistence immédiate du produit modifié
        if (this.#idbCache) {
          const enriched = this.#enrichedProducts.get(product.$id);
          if (enriched) {
            this.#idbCache
              .upsertProduct(enriched)
              .catch((err) =>
                console.error(
                  "[ProductsStore] Erreur persistence produit:",
                  err,
                ),
              );
          }
        }
      },
      onProductUpdate: (product: Products) => {
        this.#upsertEnrichedProduct(product);
        // Persistence immédiate du produit modifié
        if (this.#idbCache) {
          const enriched = this.#enrichedProducts.get(product.$id);
          if (enriched) {
            this.#idbCache
              .upsertProduct(enriched)
              .catch((err) =>
                console.error(
                  "[ProductsStore] Erreur persistence produit:",
                  err,
                ),
              );
          }
        }
      },
      onProductDelete: (productId: string) => {
        this.#removeEnrichedProduct(productId);
        // Persistence immédiate de la suppression
        if (this.#idbCache) {
          this.#idbCache
            .deleteProduct(productId)
            .catch((err) =>
              console.error("[ProductsStore] Erreur suppression produit:", err),
            );
        }
      },
      onPurchaseCreate: async (purchase: Purchases) => {
        const affectedIds = await this.#applyPurchaseCreated(purchase);
        await this.#persistAffectedProducts(affectedIds);
      },
      onPurchaseUpdate: async (purchase: Purchases) => {
        const affectedIds = await this.#applyPurchaseUpdated(purchase);
        await this.#persistAffectedProducts(affectedIds);
      },

      // TODO: on ne delete pas les purchase, on les marque deleted = true
      onPurchaseDelete: async (purchaseId: string) => {
        const affectedIds = await this.#applyPurchaseDeleted(purchaseId);
        await this.#persistAffectedProducts(affectedIds);
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
    if (!product?.byDate || !this.dateRange.start || !this.dateRange.end)
      return 0;

    return calculateTotalAssiettesInRange(
      product.byDate,
      this.dateRange.start,
      this.dateRange.end,
    );
  }

  /**
   * Récupère le détail des recettes pour un produit sur la plage de dates courante
   */
  getRecipesInRange(productId: string): RecipeOccurrence[] {
    const product = this.#enrichedProducts.get(productId);
    if (!product?.byDate || !this.dateRange.start || !this.dateRange.end)
      return [];

    const datesInRange = Object.keys(product.byDate).filter((dateStr) => {
      const date = new Date(dateStr);
      const startDate = this.dateRange.start
        ? new Date(this.dateRange.start)
        : null;
      const endDate = this.dateRange.end ? new Date(this.dateRange.end) : null;
      return startDate && endDate && date >= startDate && date <= endDate;
    });

    return datesInRange.flatMap((date) => product.byDate![date]?.recipes || []);
  }

  get enrichedProductsCount(): number {
    return this.#enrichedProducts.size;
  }

  async forceReload(mainId: string) {
    await this.clearCache();
    await this.initialize(mainId);
  }

  async clearCache() {
    this.#enrichedProducts.clear();
    this.#availableDates = [];
    this.#lastSync = null;
    if (this.#idbCache) {
      await this.#idbCache.clear();
    }
    console.log("[ProductsStore] Cache vidé");
  }

  // =============================================================================
  // GESTION DU STATUT DE SYNCHRONISATION
  // =============================================================================

  /**
   * Définit le statut de synchronisation pour plusieurs produits
   * @param productIds - Liste des IDs des produits concernés
   * @param syncing - true pour "isSyncing", false pour "active"
   */
  setSyncStatus(productIds: string[], syncing: boolean) {
    const status = syncing ? "isSyncing" : "active";

    productIds.forEach((productId) => {
      const product = this.#enrichedProducts.get(productId);
      if (product) {
        const updatedProduct = {
          ...product,
          status,
        };
        this.#enrichedProducts.set(productId, updatedProduct);
      }
    });

    console.log(
      `[ProductsStore] Statut de synchronisation mis à jour: ${productIds.length} produits → ${status}`,
    );
  }

  /**
   * Nettoie tous les statuts "isSyncing" (retour à "active")
   * Utile en cas d'erreur ou timeout
   */
  clearSyncStatus() {
    const productsToReset: string[] = [];

    for (const [productId, product] of this.#enrichedProducts) {
      if (product.status === "isSyncing") {
        productsToReset.push(productId);
      }
    }

    if (productsToReset.length > 0) {
      this.setSyncStatus(productsToReset, false);
      console.log(
        `[ProductsStore] Nettoyage de ${productsToReset.length} produits en statut "isSyncing"`,
      );
    }
  }

  destroy() {
    this.#unsubscribe?.();
    this.#unsubscribe = null;

    if (this.#idbCache) {
      this.#idbCache.close();
      this.#idbCache = null;
    }
    console.log("[ProductsStore] Ressources nettoyées");
  }
}

// =============================================================================
// SINGLETON & EXPORTS
// =============================================================================

export const productsStore = new ProductsStore();
