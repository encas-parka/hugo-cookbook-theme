import type { Products } from './appwrite.d';

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
export interface EnrichedProduct extends Products {
  // Propriétés enrichies ajoutées par le store
  storeInfo: StoreInfo | null;
  totalNeededArray: NumericQuantity[];
  recipesArray: RecipeOccurrence[];
  stockArray: StockEntry[];
  missingQuantityArray: NumericQuantity[];
  totalPurchasesArray: NumericQuantity[];
  displayTotalNeeded: string;
  displayTotalPurchases: string;
  displayMissingQuantity: string;
}


// Alias pour compatibilité (gardés pour la transition)
export type StoreDisplay = StoreInfo | null;
export type QuantityDisplay = QuantityInfo[] | null;
export type RecipeOccurrencesDisplay = RecipeOccurrence[] | null;
export type NeededConsolidatedDisplay = NeededConsolidated[] | null;
export type StockDisplay = StockEntry[] | null;
