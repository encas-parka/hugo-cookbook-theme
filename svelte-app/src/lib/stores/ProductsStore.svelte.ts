import { SvelteMap } from "svelte/reactivity";
import { useDebounce } from "runed";
import type { Products, Purchases } from "../types/appwrite.d";
import type { ProductRangeStats } from "../types/store.types";

import {
  matchesFilters,
  type FiltersState,
  hasConversions,
} from "../utils/productsUtils";
import { sanitizePurchase } from "../utils/dataSanitization";
import {
  createEnrichedProductFromAppwrite,
  updateExistingProduct,
  createEnrichedProductsFromEvent,
} from "../utils/productEnrichment";
import { toastService } from "../services/toast.service.svelte";
import type { EnrichedProduct, NumericQuantity } from "../types/store.types";
import type { EnrichedEvent } from "../types/events";

import {
  subscribeToRealtime,
  loadPurchasesListByIds,
  syncProductsWithPurchases,
} from "../services/appwrite-interactions";

import { createIDBCache, type IDBCache } from "../services/indexeddb-cache";
import { globalState } from "./GlobalState.svelte";
import { ProductModel } from "../models/ProductModel.svelte";
import { DateRangeStore } from "./DateRangeStore.svelte";
import { eventsStore } from "./EventsStore.svelte";
import { recalculatePurchaseDependents } from "../utils/productEnrichment";

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
// CONFIGURATION
// =============================================================================

const BATCH_LIMIT = 1000;
const SYNC_DEBOUNCE_MS = 500;

// =============================================================================
// STORE SINGLETON
// =============================================================================

class ProductsStore {
  // État principal - SvelteMap réactive
  #enrichedProducts = new SvelteMap<string, ProductModel>();
  // Achats orphelins (dépenses globales sans produits)
  #orphanPurchases = new SvelteMap<string, Purchases>();

  // Métadonnées
  #currentMainId = $state<string | null>(null);
  #currentEventId = $state<string | null>(null); // ID de l'événement (remplace hugoMetadata)
  #isInitialized = $state(false);
  #loading = $state(false);
  #error = $state<string | null>(null);
  #syncing = $state(false);
  #realtimeConnected = $state(false);
  #lastSync = $state<string | null>(null);

  // Getters publics
  get currentMainId() {
    return this.#currentMainId;
  }

  // Gestion des dates
  dateStore = new DateRangeStore();

  // Delegation des propriétés pour compatibilité (ou usage direct via dateStore)
  get dateRange() {
    return this.dateStore.current;
  }

  get availableDates() {
    return this.dateStore.dates;
  }

  // État de l'événement (Delegation)
  get isEventPassed() {
    return this.dateStore.isEventPassed;
  }

  get hasSingleDateEvent() {
    return this.dateStore.hasSingleDateEvent;
  }

  get hasSingleDateInRange() {
    return this.dateStore.hasSingleDateInRange;
  }

  get hasPastDatesInRange() {
    return this.dateStore.hasPastDatesInRange;
  }

  // Cache keys
  // #cacheKey: string | null = null;
  // #metadataKey: string | null = null;
  #idbCache: IDBCache | null = null;

  // Gestion des mises à jour
  #unsubscribe: (() => void) | null = null;

  // État pour gérer les conflits d'override (conservé pour compatibilité)
  #pendingOverrideConflicts = $state<any[]>([]);

  get hasPendingConflicts() {
    return this.#pendingOverrideConflicts.length > 0;
  }

  get pendingConflicts() {
    return this.#pendingOverrideConflicts;
  }

  // =========================================================================
  // INITIALISATION
  // =========================================================================

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

  get hasFilters() {
    return (
      this.filters.searchQuery !== "" ||
      this.filters.selectedStores.length > 0 ||
      this.filters.selectedWho.length > 0 ||
      this.filters.selectedProductTypes.length > 0 ||
      this.filters.selectedTemperatures.length > 0
    );
  }

  get loading() {
    return this.#loading;
  }
  get error() {
    return this.#error;
  }

  get lastSync() {
    return this.#lastSync;
  }

  get syncing() {
    return this.#syncing;
  }

  // ====== Gestion des dates ======
  //
  // ====== Gestion des dates (Delegation) ======
  //

  /**
   * Définit la plage de dates avec validation intelligente
   */
  setDateRange(date1: string | null, date2: string | null) {
    this.dateStore.setRange(date1, date2);
  }

  /**
   * Vérifie si la plage de dates couvre toutes les dates disponibles
   */
  isFullRange() {
    return this.dateStore.isFullRange;
  }

  /**
   * Initialise automatiquement la plage de dates si elle est vide
   */
  private initializeDateRange() {
    this.dateStore.initializeSmartRange();
  }

  /**
   * Sélectionne toutes les dates à partir d'aujourd'hui
   */
  selectUpcomingDates() {
    this.dateStore.selectUpcoming();
  }

  /**
   * Vérifie si la plage de dates actuelle correspond aux dates à venir
   */
  isUpcomingRange() {
    return this.dateStore.isUpcomingRange;
  }

  // Bornes calculées (dérivées)
  get firstAvailableDate() {
    return this.dateStore.firstAvailableDate;
  }

  get lastAvailableDate() {
    return this.dateStore.lastAvailableDate;
  }

  /**
   * Sélectionne uniquement les dates futures à partir de demain
   */
  selectFutureDatesOnly() {
    this.dateStore.selectFutureDatesOnly();
  }
  get realtimeConnected() {
    return this.#realtimeConnected;
  }

  // =========================================================================
  // DÉRIVES RÉACTIFS - Consommés par les templates
  // =========================================================================

  /**
   * Conversion SvelteMap → Array pour les templates
   */
  enrichedProducts = $derived.by(() => {
    const result = Array.from(this.#enrichedProducts.values()).map(
      (m) => m.data,
    );
    console.log(
      `[ProductsStore] enrichedProducts recalculated: ${result.length} products`,
    );
    return result;
  });

  // === Cache des totaux par plage de dates ===
  // Ce cache se recalcule automatiquement quand dateRange.start/dateRange.end changent

  /**
   * Produits filtrés qui ont des données dans la plage de dates courante
   * Version Map pour les calculs optimisés (O(1) par ID)
   */
  filteredProductsMap = $derived.by(() => {
    console.log("[Store] Filtering products by date range (Map)");

    if (!this.dateRange.start || !this.dateRange.end) {
      return new Map<string, ProductModel>();
    }

    const startDate = new Date(this.dateRange.start);
    const endDate = new Date(this.dateRange.end);
    const filteredMap = new Map<string, ProductModel>();

    // Itération directe sur la Map interne (plus performant)
    for (const [id, model] of this.#enrichedProducts) {
      const product = model.data;

      const isManualProduct = !product.productHugoUuid;
      // 2. On exclut si pas de byDate ET que ce n'est PAS un produit manuel
      if (!product.byDate && !isManualProduct) continue;

      // Application des filtres utilisateur
      const matchesFiltersResult = matchesFilters(product, this.#filters);
      if (!matchesFiltersResult) continue;

      // Vérifier si le produit a des données dans la plage de dates
      let hasDataInRange = false;
      if (product.byDate) {
        // Normaliser les dates de la plage à minuit (UTC pour être sûr)
        const startDay = new Date(startDate);
        startDay.setHours(0, 0, 0, 0);

        const endDay = new Date(endDate);
        endDay.setHours(23, 59, 59, 999);

        hasDataInRange = Object.keys(product.byDate).some((dateStr) => {
          const date = new Date(dateStr);
          // On compare la date du produit (qui est déjà à minuit YYYY-MM-DD)
          // avec le début du jour de start et la fin du jour de end
          return date >= startDay && date <= endDay;
        });
      }

      if (hasDataInRange || isManualProduct) {
        filteredMap.set(id, model);
      }
    }

    return filteredMap;
  });

  /**
   * Statistiques des produits filtrés
   */
  stats = $derived.by(() => ({
    total: this.#enrichedProducts.size,
    frais: Array.from(this.#enrichedProducts.values()).filter((p) => p.pFrais)
      .length,
    surgel: Array.from(this.#enrichedProducts.values()).filter((p) => p.pSurgel)
      .length,
    merged: Array.from(this.#enrichedProducts.values()).filter(
      (p) => p.data.isMerged,
    ).length,
  }));

  /**
   * Valeurs uniques pour les filtres
   */
  uniqueStores = $derived.by(() => {
    const storeNames = Array.from(this.#enrichedProducts.values())
      .map((p) => p.storeInfo?.storeName)
      .filter(Boolean);
    return [...new Set(storeNames)] as string[];
  });

  uniqueWho = $derived.by(() => {
    const whos = Array.from(this.#enrichedProducts.values()).flatMap(
      (p) => p.who || [],
    );
    return [...new Set(whos)] as string[];
  });

  uniqueProductTypes = $derived.by(() => {
    const types = Array.from(this.#enrichedProducts.values())
      .map((p) => p.productType)
      .filter(Boolean);
    return [...new Set(types)] as string[];
  });

  // === ÉTAPE 2 : IDs des produits pertinents ===
  // Dérivé léger qui dépend de totalNeededByDateRange

  // Un seul dérivé qui fait tout : groupement basé sur les produits filtrés par date
  // Optimisé pour utiliser la Map directement avec tri alphabétique natif
  groupedFilteredProducts = $derived.by(() => {
    // Utiliser les produits déjà filtrés (conversion unique Map → tableau)
    const relevantProducts = Array.from(this.filteredProductsMap.values());

    // 🎯 TRI ALPHABÉTIQUE NATIF - grâce aux clés sémantiques !
    // Les clés sémantiques sont de la forme "nom-produit_uuid" donc trier directement sur $id
    // TOCHECK [AI] : pourquoi sur $id ???
    const sortedProducts = relevantProducts.sort((a, b) =>
      a.$id.localeCompare(b.$id),
    );

    // Grouper les produits triés
    if (this.#filters.groupBy === "none") {
      return { "": sortedProducts };
    }

    const groups = Object.groupBy(sortedProducts, (model) => {
      if (this.#filters.groupBy === "store") {
        return model.storeInfo?.storeName || "Non défini";
      } else {
        return model.productType || "Non défini";
      }
    });

    // 🎯 TRI DES GROUPES par ordre alphabétique
    const sortedGroupKeys = Object.keys(groups).sort((a, b) => {
      // Le groupe vide (sans groupe) doit être à la fin
      if (a === "") return 1;
      if (b === "") return -1;
      return a.localeCompare(b);
    });

    // Reconstruire l'objet dans l'ordre trié
    const sortedGroups: Record<string, ProductModel[]> = {};
    sortedGroupKeys.forEach((key) => {
      sortedGroups[key] = groups[key]!;
    });

    return sortedGroups;
  });

  // =========================================================================
  // INITIALISATION
  // =========================================================================

  /**
   * Initialise le store depuis un événement
   * 1. Charge depuis le cache IndexedDB
   * 2. Calcule les produits depuis event.meals
   * 3. Synchronise avec Appwrite (purchases)
   * 4. Configure l'abonnement realtime
   *
   * @param eventId - ID de l'événement depuis EventsStore
   */
  async initialize(eventId: string) {
    if (!eventId?.trim()) {
      throw new Error("eventId invalide fourni");
    }

    if (this.#isInitialized && this.#currentEventId === eventId) {
      console.log(`[ProductsStore] Déjà initialisé pour eventId: ${eventId}`);
      return;
    }

    console.log(`[ProductsStore] Initialisation avec eventId: ${eventId}`);

    // Récupérer l'événement depuis EventsStore
    const event = eventsStore.getEventById(eventId);

    if (!event) {
      throw new Error(`Événement ${eventId} introuvable dans EventsStore`);
    }

    try {
      // Définir les IDs pour les méthodes de sync
      this.#currentEventId = event.$id;
      this.#currentMainId = event.$id; // mainId = eventId dans la nouvelle architecture

      // 1. Charger depuis le cache si disponible
      await this.#loadFromCache();

      // 2. Si le cache est vide, calculer depuis event.meals
      if (this.#enrichedProducts.size === 0) {
        console.log("[ProductsStore] Cache vide, calcul depuis event.meals...");

        await this.#calculateProductsFromEvent(event);

        // Persister le cache
        await this.#createCache();
      }

      // 3. Initialiser la plage de dates
      this.dateStore.setAvailableDates([...(event.allDates || [])]);
      this.initializeDateRange();

      // 4. Sync en arrière-plan (purchases uniquement)
      await this.#syncFromAppwrite();

      // 5. Charger les dépenses globales (orphelines)
      await this.#loadOrphanPurchases();

      // Marquer comme initialisé
      this.#isInitialized = true;

      // 6. Setup realtime (Appwrite)
      const callbacks = this.#setupRealtimeCallbacks();
      this.#unsubscribe = subscribeToRealtime(event.$id, callbacks);

      // 7. Setup Reactive Sync avec EventsStore (Meals updates)
      if (this.#cleanupSyncEffect) this.#cleanupSyncEffect();

      this.#cleanupSyncEffect = $effect.root(() => {
        $effect(() => {
          // Cette ligne réactive s'abonne aux mises à jour de l'événement dans le EventsStore
          const reactiveEvent = eventsStore.getEventById(eventId);
          
          if (reactiveEvent) {
             // On utilise untrack pour ne pas re-déclencher l'effet si syncWithEventMeals lit des états réactifs
             // Mais ici on veut juste réagir au changement de l'objet event (qui change à chaque update realtime)
             this.#syncWithEventMeals(reactiveEvent);
          }
        });
      });

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

  /**
   * Synchronise réactivement les produits avec les repas de l'événement
   * Appelée automatiquement quand l'événément change dans EventsStore
   */
  async #syncWithEventMeals(event: EnrichedEvent) {
      // Trace de l'entrée dans la fonction
      // console.log(`[ProductsStore] 🔄 Sync check pour event ${event.$id}`);

      if (!this.#isInitialized) {
        console.warn("[ProductsStore] Sync ignoré car store non initialisé");
        return; 
      }

      // Utiliser JSON.stringify pour détecter si les repas ont VRAIMENT changé
      const mealsHash = JSON.stringify(event.meals); 
      
      if (this.#lastMealsHash === mealsHash) {
         // console.log("[ProductsStore] Pas de changement dans les repas, skip.");
         return;
      }
      
      console.log(`[ProductsStore] ⚡️ CHANGEMENT REPAS DÉTECTÉ pour ${event.$id} (Hash: ${mealsHash.substring(0, 10)}...), recalcul...`);
      this.#lastMealsHash = mealsHash;
      
      const { recipesStore } = await import("./RecipesStore.svelte");
      // Fonction pour récupérer les détails d'une recette
      const getRecipeDetails = async (uuid: string) => {
        return await recipesStore.getRecipeByUuid(uuid);
      };

      // Recalculer les produits "frais" depuis les repas
      const freshProducts = await createEnrichedProductsFromEvent(
        event,
        getRecipeDetails,
        event.$id,
      );

      // Fusionner avec l'existant pour préserver les achats/overrides
      freshProducts.forEach(fresh => {
        const existingModel = this.#enrichedProducts.get(fresh.$id);
        if (existingModel) {
             // On met à jour les données calculées depuis les repas
             // On doit préserver les données Appwrite (purchases, store, etc.) qui sont dans existingModel.data
             // updateExistingProduct fait l'inverse (merge Appwrite frais sur Existant)
             
             // Ici on veut merge FreshMealData sur ExistantAppwriteData
             // On peut le faire manuellement ici
             const existing = existingModel.data;
             
             const merged: EnrichedProduct = {
                 ...existing,
                 // Mise à jour des données dérivées des repas
                 byDate: fresh.byDate,
                 totalNeededArray: fresh.totalNeededArray,
                 totalNeededRaw: fresh.totalNeededRaw,
                 nbRecipes: fresh.nbRecipes,
                 totalAssiettes: fresh.totalAssiettes,
                 // On garde le reste (purchases, overrides, etc.)
             };
             
             // Recalculer les manquants
             recalculatePurchaseDependents(merged);
             
             // Mise à jour du modèle (déclenche la réactivité)
             existingModel.update(merged);
        } else {
             // Nouveau produit (ajouté via nouveau repas)
             this.#enrichedProducts.set(fresh.$id, new ProductModel(fresh, this.dateStore));
        }
      });
      
      // On devrait aussi gérer les suppressions (produits qui ne sont plus dans freshProducts)
      // Mais seulement si !isSynced (non présents sur Appwrite)
      const freshIds = new Set(freshProducts.map(p => p.$id));
      for (const [id, model] of this.#enrichedProducts) {
          if (!freshIds.has(id)) {
              if (!model.data.isSynced && !model.data.purchases?.length) {
                  // Produit local qui n'est plus utile -> Suppression
                  this.#enrichedProducts.delete(id);
              }
              // Si isSynced, on garde (peut-être un produit manuel ou orphelin temporaire)
          }
      }
      
      // Mettre à jour la dateStore si les dates dispos ont changé
      this.dateStore.setAvailableDates([...(event.allDates || [])]);
      
      // Persister les changements majeurs
      this.#createCache();
  }

  // Hash pour debounce logique
  #lastMealsHash = "";
  // Cleanup effect
  #cleanupSyncEffect: (() => void) | null = null;

  /**
   * Calcule les produits depuis les meals d'un événement
   */
  async #calculateProductsFromEvent(event: EnrichedEvent): Promise<void> {
    const { recipesStore } = await import("./RecipesStore.svelte");

    // Fonction pour récupérer les détails d'une recette
    const getRecipeDetails = async (uuid: string) => {
      return await recipesStore.getRecipeByUuid(uuid);
    };

    // Calculer les produits
    const products = await createEnrichedProductsFromEvent(
      event,
      getRecipeDetails,
      event.$id,
    );

    // Ajouter à la SvelteMap
    products.forEach((enriched) => {
      this.#enrichedProducts.set(
        enriched.$id,
        new ProductModel(enriched, this.dateStore),
      );
    });

    console.log(
      `[ProductsStore] ${products.length} produits calculés depuis ${event.meals.length} repas`,
    );
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
        // 🔧 SANITIZATION: Reset transient status
        if (product.status === "isSyncing") {
          product.status = "active";
        }
        this.#enrichedProducts.set(
          id,
          new ProductModel(product, this.dateStore),
        );
      });

      // Charger les métadonnées
      const metadata = await this.#idbCache.loadMetadata();
      this.#lastSync = metadata.lastSync;
      this.dateStore.setAvailableDates([...metadata.allDates]);

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
        const existingModel = this.#enrichedProducts.get(product.$id);
        console.log(
          `[ProductsStore] Sync produit ${product.$id}: existing=${!!existingModel}, who=${product.who}, store=${product.store}`,
        );
        const enriched = this.#enrichProduct(product, existingModel?.data); // ← Préserve les données locales
        enriched.isSynced = true; // ✅ SYNC : Les produits venant d'Appwrite sont sync

        if (existingModel) {
          existingModel.update(enriched);
        } else {
          this.#enrichedProducts.set(
            product.$id,
            new ProductModel(enriched, this.dateStore),
          );
        }
      });

      // 3. Synchroniser les purchases modifiés (pour les produits non-modifiés ET les orphelins)
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

        // Appliquer les purchases modifiés aux produits existants OU aux orphelins
        updatedPurchases.forEach((purchase) => {
          if (purchase.status === "expense") {
            // C'est une dépense globale
            this.#orphanPurchases.set(purchase.$id, purchase);
          } else if (purchase.products?.length) {
            const productIds = purchase.products.map((prod: any) =>
              typeof prod === "string" ? prod : prod.$id,
            );
            this.#updatePurchaseInProducts(productIds, purchase);
          }
        });
      }

      this.#updateLastSync();
      await this.#createCache(); // Sync complet = persistence complète
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
  async #createCache() {
    if (!this.#idbCache) return;

    try {
      // Sauvegarder les produits
      const productsToSave = new Map<string, EnrichedProduct>();

      this.#enrichedProducts.forEach((model, id) => {
        const snapshot = $state.snapshot(model.data);
        // 🔧 SANITIZATION: Ne jamais persister l'état transitoire
        if (snapshot.status === "isSyncing") {
          snapshot.status = "active";
        }
        productsToSave.set(id, snapshot);
      });
      await this.#idbCache.saveProducts(productsToSave);

      // Sauvegarder les métadonnées
      await this.#idbCache.saveMetadata({
        lastSync: this.#lastSync,
        allDates: [...this.dateStore.dates],
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
        .map((id) => this.#enrichedProducts.get(id)?.data)
        .filter((product) => product != null)
        .map((product) => {
          const snapshot = $state.snapshot(product!);
          // 🔧 SANITIZATION: Ne jamais persister l'état transitoire
          if (snapshot.status === "isSyncing") {
            snapshot.status = "active";
          }
          return this.#idbCache!.upsertProduct(snapshot);
        });

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
      return updateExistingProduct(product, existing);
    } else {
      // Initialisation complète d'un nouveau produit
      return createEnrichedProductFromAppwrite(product);
    }
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
    const existingModel = this.#enrichedProducts.get(product.$id);
    const enriched = this.#enrichProduct(product, existingModel?.data);

    if (existingModel) {
      existingModel.update(enriched);
    } else {
      const allDates = this.dateStore.dates;
      this.#enrichedProducts.set(
        product.$id,
        new ProductModel(enriched, this.dateStore),
      );
    }
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
    const affectedProducts = Array.from(this.#enrichedProducts.values())
      .map((m) => m.data)
      .filter((p) => p.purchases?.some((pur) => pur.$id === purchaseId));

    affectedProducts.forEach((product) => {
      this.#upsertEnrichedProduct(product as any);
    });

    // Retourner les IDs des produits affectés pour persistence
    return affectedProducts.map((p) => p.$id);
  }

  /**
   * Ajoute un purchase à ses products (pour CREATE)
   */
  #addPurchaseToProducts(productIds: string[], purchase: Purchases) {
    // Nettoyer les relations du purchase pour éviter la récursion dans le cache
    const sanitizedPurchase = sanitizePurchase(purchase);

    const productsToUpdate: EnrichedProduct[] = [];

    productIds.forEach((productId) => {
      const model = this.#enrichedProducts.get(productId);
      if (model) {
        const product = model.data;
        const purchases = product.purchases || [];
        // Éviter les doublons (au cas où)
        if (!purchases.some((p) => p.$id === sanitizedPurchase.$id)) {
          // Créer un nouveau produit enrichi avec le purchase ajouté
          // 🔥 RESTAURER LE STATUT À "active" car le purchase a été créé avec succès
          const updatedProduct = updateExistingProduct(
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
      const model = this.#enrichedProducts.get(product.$id);
      if (model) {
        model.update(product);
      }
    });
  }

  /**
   * Met à jour un purchase dans ses products (pour UPDATE)
   */
  #updatePurchaseInProducts(productIds: string[], purchase: Purchases) {
    // Nettoyer les relations du purchase pour éviter la récursion dans le cache
    const sanitizedPurchase = sanitizePurchase(purchase);

    const productsToUpdate: EnrichedProduct[] = [];

    // TOCHECK : le fait qu'il y ait potentiellement products est correct du point de vue de la façon dont nous avons défini la relation products ←→ purchases comme "many to many", en vue des products mergés, mais dans les fait, est ce qu'on attribura plusieurs products à un purchases ???

    productIds.forEach((productId) => {
      const model = this.#enrichedProducts.get(productId);
      if (model) {
        const product = model.data;
        const purchases = product.purchases || [];
        const index = purchases.findIndex(
          (p) => p.$id === sanitizedPurchase.$id,
        );

        if (index >= 0) {
          // Remplacer le purchase existant
          const updatedPurchases = [...purchases];
          updatedPurchases[index] = sanitizedPurchase;
          // 🔥 RESTAURER LE STATUT À "active" car le purchase a été mis à jour avec succès
          const updatedProduct = updateExistingProduct(
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
          const updatedProduct = updateExistingProduct(
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
      const model = this.#enrichedProducts.get(product.$id);
      if (model) {
        model.update(product);
      }
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
          const model = this.#enrichedProducts.get(product.$id);
          if (model) {
            this.#idbCache
              .upsertProduct($state.snapshot(model.data))
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
          const model = this.#enrichedProducts.get(product.$id);
          if (model) {
            this.#idbCache
              .upsertProduct($state.snapshot(model.data))
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
        if (purchase.status === "expense") {
          this.#orphanPurchases.set(purchase.$id, purchase);
          return;
        }
        const affectedIds = await this.#applyPurchaseCreated(purchase);
        await this.#persistAffectedProducts(affectedIds);
      },
      onPurchaseUpdate: async (purchase: Purchases) => {
        if (purchase.status === "expense") {
          this.#orphanPurchases.set(purchase.$id, purchase);
          return;
        }
        // Si un purchase passe de "expense" à "lié" (peu probable mais possible), on le retire des orphelins
        if (this.#orphanPurchases.has(purchase.$id)) {
          this.#orphanPurchases.delete(purchase.$id);
        }

        const affectedIds = await this.#applyPurchaseUpdated(purchase);
        await this.#persistAffectedProducts(affectedIds);
      },

      // TODO: on ne delete pas les purchase, on les marque deleted = true
      onPurchaseDelete: async (purchaseId: string) => {
        if (this.#orphanPurchases.has(purchaseId)) {
          this.#orphanPurchases.delete(purchaseId);
          return;
        }
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
    return this.#enrichedProducts.get(productId)?.data ?? null;
  }

  getProductModelById(productId: string): ProductModel | null {
    return this.#enrichedProducts.get(productId) ?? null;
  }

  /**
   * Détecte si un produit a des conversions (q/u différent de qEq/uEq)
   */
  hasConversions(productId: string): boolean {
    const product = this.#enrichedProducts.get(productId)?.data;
    if (!product?.byDate) return false;

    return hasConversions(product.byDate);
  }

  async forceReload(eventId: string) {
    await this.clearCache();
    await this.initialize(eventId);
  }

  async clearCache() {
    this.#enrichedProducts.clear();
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
      const model = this.#enrichedProducts.get(productId);
      if (model) {
        const updatedProduct = {
          ...model.data,
          status,
        };
        model.update(updatedProduct);
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

    for (const [productId, model] of this.#enrichedProducts) {
      if (model.status === "isSyncing") {
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
  // =========================================================================
  // GESTION DES DÉPENSES GLOBALES (ORPHELINES)
  // =========================================================================

  async #loadOrphanPurchases() {
    if (!this.#currentMainId) return;

    try {
      const { loadOrphanPurchases } = await import(
        "../services/appwrite-interactions"
      );
      const orphans = await loadOrphanPurchases(this.#currentMainId);

      orphans.forEach((purchase) => {
        this.#orphanPurchases.set(purchase.$id, purchase);
      });

      console.log(
        `[ProductsStore] ${orphans.length} dépenses globales chargées`,
      );
    } catch (err) {
      console.error(
        "[ProductsStore] Erreur chargement dépenses globales:",
        err,
      );
    }
  }

  /**
   * Statistiques financières globales
   */
  financialStats = $derived.by(() => {
    let totalGlobal = 0;
    const byStore: Record<string, number> = {};
    const byWho: Record<string, number> = {};
    const allPurchases: Purchases[] = [];

    // 1. Ajouter les dépenses orphelines
    for (const purchase of this.#orphanPurchases.values()) {
      const amount = purchase.invoiceTotal || purchase.price || 0;
      totalGlobal += amount;

      const store = purchase.store || "Non défini";
      byStore[store] = (byStore[store] || 0) + amount;

      const who = purchase.who || "Non défini";
      byWho[who] = (byWho[who] || 0) + amount;

      allPurchases.push(purchase);
    }

    // 2. Ajouter les achats liés aux produits
    for (const model of this.#enrichedProducts.values()) {
      const product = model.data;
      if (product.purchases && product.purchases.length > 0) {
        for (const purchase of product.purchases) {
          // Ignorer les achats annulés ou non livrés/commandés si nécessaire
          // Ici on prend tout ce qui a un prix
          if (purchase.price) {
            totalGlobal += purchase.price;

            const store = purchase.store || "Non défini";
            byStore[store] = (byStore[store] || 0) + purchase.price;

            const who = purchase.who || "Non défini";
            byWho[who] = (byWho[who] || 0) + purchase.price;

            // Enrichir l'achat avec le nom du produit pour l'affichage
            const purchaseWithProductName = {
              ...purchase,
              _productName: product.productName,
            };
            allPurchases.push(purchaseWithProductName);
          }
        }
      }
    }

    // Trier tous les achats par date (plus récent en premier)
    allPurchases.sort((a, b) => {
      const dateA = new Date(a.orderDate || a.$createdAt).getTime();
      const dateB = new Date(b.orderDate || b.$createdAt).getTime();
      return dateB - dateA;
    });

    return {
      totalGlobal,
      byStore,
      byWho,
      allPurchases,
    };
  });
}

// =============================================================================
// SINGLETON & EXPORTS
// =============================================================================

export const productsStore = new ProductsStore();
