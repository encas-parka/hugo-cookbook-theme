import type { EnrichedProduct, ProductRangeStats } from "../types/store.types";
import type { DateRange } from "../utils/dateRange";
import {
  calculateProductStatsForDateRange,
  calculateProductStatsForExactDate,
  calculateProductStatsForFullRange,
  isFullRange,
} from "../utils/dateRange";

/**
 * Modèle réactif pour un produit
 * Encapsule les données et la logique de calcul des stats
 * Permet une réactivité fine : seul ce produit est recalculé si ses données changent
 */
export class ProductModel {
  // Données brutes réactives
  data = $state<EnrichedProduct>() as EnrichedProduct;
  
  // Accès au contexte global (dateRange)
  #dateRangeGetter: () => DateRange;
  #availableDatesGetter: () => string[];

  constructor(
    initialData: EnrichedProduct, 
    dateRangeGetter: () => DateRange,
    availableDatesGetter: () => string[]
  ) {
    this.data = initialData;
    this.#dateRangeGetter = dateRangeGetter;
    this.#availableDatesGetter = availableDatesGetter;
  }

  /**
   * Met à jour les données du produit
   */
  update(newData: EnrichedProduct) {
    this.data = newData;
  }

  // Proxies pour faciliter l'accès aux propriétés de data
  get $id() { return this.data.$id; }
  get productName() { return this.data.productName; }
  get productType() { return this.data.productType; }
  get storeInfo() { return this.data.storeInfo; }
  get who() { return this.data.who; }
  get pFrais() { return this.data.pFrais; }
  get pSurgel() { return this.data.pSurgel; }
  get status() { return this.data.status; }
  get previousNames() { return this.data.previousNames; }
  get purchases() { return this.data.purchases; }
  get totalNeededOverrideParsed() { return this.data.totalNeededOverrideParsed; }
  get displayMissingQuantity() { return this.data.displayMissingQuantity; }
  get missingQuantityArray() { return this.data.missingQuantityArray; }
  get isSynced() { return this.data.isSynced; }
  get byDate() { return this.data.byDate; }

  /**
   * Stats calculées dynamiquement pour ce produit
   * Ne se recalcule que si this.data change OU dateRange change
   */
  stats = $derived.by<ProductRangeStats>(() => {
    const dateRange = this.#dateRangeGetter();
    const availableDates = this.#availableDatesGetter();

    let productStats;

    // 1. Cas spécial : Date unique
    if (dateRange.start && dateRange.start === dateRange.end) {
      productStats = calculateProductStatsForExactDate(
        this.data,
        dateRange.start,
      );
    }
    // 2. Cas spécial : Plage complète
    else if (isFullRange(dateRange, availableDates)) {
      productStats = calculateProductStatsForFullRange(
        this.data,
        availableDates,
      );
      // Dans le cas d'une plage complète, on ne garde que les dates présentes dans byDate
      productStats.datesInSelectedRange = productStats.datesInSelectedRange.filter(
        (date) => this.data.byDate && this.data.byDate[date],
      );
    }
    // 3. Plage partielle
    else if (dateRange.start && dateRange.end) {
      productStats = calculateProductStatsForDateRange(
        this.data,
        dateRange.start,
        dateRange.end,
      );
    }
    // 4. Fallback
    else {
      return {
        quantities: [],
        formattedQuantities: "",
        nbRecipes: 0,
        totalAssiettes: 0,
        stockResult: [],
        availableQuantities: [],
        missingQuantities: [],
        formattedMissingQuantities: "",
        formattedAvailableQuantities: "En attente",
        hasAvailable: false,
        hasMissing: false,
        concernedDates: [],
        recipesByDate: new Map(),
      };
    }

    // 🔄 MAPPING vers l'ancien format pour compatibilité UI existante
    return {
      quantities: productStats.requiredQuantities,
      formattedQuantities: productStats.requiredQuantitiesFormatted,
      nbRecipes: productStats.totalRecipesInRange,
      totalAssiettes: productStats.totalPortionsInRange,

      // ✅ STOCK COHÉRENT
      stockResult: productStats.stockBalance,
      availableQuantities: productStats.availableStockQuantities,
      missingQuantities: productStats.missingStockQuantities,
      formattedMissingQuantities: productStats.missingStockFormatted,
      formattedAvailableQuantities: productStats.availableStockFormatted,
      hasAvailable: productStats.hasAvailableStock,
      hasMissing: productStats.hasMissingStock,

      // 📅 Données directes
      concernedDates: productStats.datesInSelectedRange,
      recipesByDate: productStats.recipesByDate,
    };
  });
}
