/**
 * Types pour la gestion des magasins
 */

export interface StoreInfo {
  storeName: string;
  storeComment?: string;
}

/**
 * Types pour les quantités
 */
export interface QuantityInfo {
  quantity: string;
  unit: string;
}

/**
 * Types pour les occurrences de recettes
 */
export interface RecipeOccurrence {
  recipeName: string;
  dateTimeService: string;
  assiettes: number;
  quantity: string;
  unit: string;
}

/**
 * Types pour le besoin consolidé par date
 */
export interface NeededConsolidated {
  dateTimeService: string;
  neededConsolidatedForDate: QuantityInfo[];
  needRawForDate: QuantityInfo[];
  conversionRules: string[];
  recipeNames: string[];
  totalAssiettes: number;
}

/**
 * Types pour les entrées de stock
 */
export interface StockEntry {
  quantity: string;
  unit: string;
  notes: string;
  dateTime: string;
}

/**
 * Types pour les quantités avec valeur numérique (pour les calculs)
 */
export interface NumericQuantity {
  quantity: number;
  unit: string;
}

// Type enrichi pour les produits utilisés dans les composants
export interface EnrichedProduct {
  $id: string;
  $collectionId: string;
  $databaseId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  productHugoUuid: string;
  productName: string;
  productType: string;
  pFrais: boolean;
  pSurgel: boolean;
  stockReel: StockEntry[] | null;
  mainId: string;
  status: string;
  who: string[] | null;
  store: string | null;
  previousNames: string[] | null;
  isMerged: boolean;
  mergedInto: string | null;
  mergedFrom: string[] | null;
  mergeDate: string | null;
  mergeReason: string | null;
  nbRecipes: number | null;
  totalAssiettes: number | null;
  dateTimeService: string | null;
  recipeNames: string | null;
  totalNeededConsolidated: string | null;
  totalNeededRaw: string | null;
  conversionRules: string[] | null;
  recipesOccurrences: string | null;
  neededConsolidatedByDate: string | null;
  purchases: any[]; // Type Purchases à importer depuis appwrite.d.ts

  // Propriétés enrichies ajoutées par le store
  storeInfo: StoreInfo | null;
  totalNeededArray: QuantityInfo[];
  recipesArray: RecipeOccurrence[];
  stockArray: StockEntry[];
  displayQuantity: string;
  displayName: string;
  totalPurchases: NumericQuantity[];
  missingQuantity: NumericQuantity[];
  displayTotalPurchases: string;
  displayMissingQuantity: string;
  nbPurchases: number;
}


// Alias pour compatibilité (gardés pour la transition)
export type StoreDisplay = StoreInfo | null;
export type QuantityDisplay = QuantityInfo[] | null;
export type RecipeOccurrencesDisplay = RecipeOccurrence[] | null;
export type NeededConsolidatedDisplay = NeededConsolidated[] | null;
export type StockDisplay = StockEntry[] | null;
