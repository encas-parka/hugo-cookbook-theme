import type { Products, Purchases } from "./appwrite.d";

/**
 * Types pour la gestion des événements principaux
 */
export interface MainEventData {
  $id: string;
  mainId: string;
  name: string;
  allDates: string;
}

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
 * Types pour le besoin consolidé par date (structure pour neededConsolidatedByDate)
 */
export interface NeededConsolidatedByDate {
  dateTimeService: string;
  neededConsolidatedForDate: QuantityInfo[];
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
  stockOrTotalPurchases: string;
  missingQuantityArray: NumericQuantity[];
  totalPurchasesArray: NumericQuantity[];
  neededConsolidatedByDateArray: NeededConsolidatedByDate[];
  displayTotalNeeded: string;
  displayTotalPurchases: string;
  displayMissingQuantity: string;
}

/**
 * Type pour le formulaire d'achat
 */
export interface PurchaseFormData {
  quantity: number | null;
  unit: string;
  store: string;
  who: string;
  price: number | null;
  notes: string;
}

/**
 * Type pour le formulaire de stock
 */
export interface StockFormData {
  quantity: number | null;
  unit: string;
  notes: string;
  dateTime: string;
}

/**
 * Type pour le formulaire de magasin
 */
export interface StoreFormData {
  name: string | null;
  comment: string | null;
}

/**
 * Type pour le formulaire de volontaire
 */
export interface WhoFormData {
  name: string;
}

/**
 * Type pour tous les formulaires
 */
export interface ModalForms {
  purchase: PurchaseFormData;
  stock: StockFormData;
  store: StoreFormData;
  who: WhoFormData;
}

/**
 * Type principal pour ProductModalState
 * Utilisation : const modalState: ProductModalStateType = createProductModalState(productId);
 */
export interface ProductModalStateType {
  // État UI
  readonly loading: boolean;
  readonly error: string | null;
  readonly currentTab: string;

  // Données du produit (dérivées du store)
  readonly product: EnrichedProduct | null;
  readonly recipes: RecipeOccurrence[];
  readonly whoList: string[];
  readonly stockEntries: StockEntry[];
  readonly purchasesList: Purchases[];

  // État d'édition
  readonly editingPurchaseId: string | null;
  readonly editingPurchaseData: Purchases | null;

  // Formulaires locaux
  readonly forms: ModalForms;

  // Actions - Purchases
  addPurchase(): Promise<void>;
  startEditPurchase(purchase: Purchases): void;
  cancelEditPurchase(): void;
  updateEditedPurchase(purchase: Purchases): Promise<void>;
  removePurchase(purchaseId: string): Promise<void>;

  // Actions - Stock
  addStock(): Promise<void>;
  removeStock(index: number): Promise<void>;

  // Actions - Volunteers
  addVolunteer(name: string): Promise<void>;
  removeVolunteer(name: string): Promise<void>;

  // Actions - Store
  updateStore(storeInfo: StoreInfo): Promise<void>;

  // Utilitaires
  formatQuantity(quantity: number, unit: string): string;
  formatDate(dateString: string): string;
  formatDisplayQuantity(quantity: number, unit: string): string;
}

// Alias pour compatibilité (gardés pour la transition)
export type StoreDisplay = StoreInfo | null;
export type QuantityDisplay = QuantityInfo[] | null;
export type RecipeOccurrencesDisplay = RecipeOccurrence[] | null;
export type NeededConsolidatedDisplay = NeededConsolidated[] | null;
export type StockDisplay = StockEntry[] | null;
