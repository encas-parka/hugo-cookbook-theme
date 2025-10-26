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
  q: number;
  u: string;
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

  // ✅ NOUVEAUX : Données parsées depuis byDate pour performance
  byDateParsed?: Record<string, ByDateEntry>; // parsé depuis JSON string
  totalNeededRawArray?: NumericQuantity[]; // depuis totalNeededRaw (si conversions)

  // ✅ NOUVEAUX : Champs pour overrides (avec valeurs par défaut)
  totalNeededIsManualOverride: boolean; // false par défaut
  totalNeededOverrideReason: string | null; // null par défaut (compatible avec Products)
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

// Types pour les données brutes venant de Appwrite (non enrichies)
export interface ProductData {
  $productType: string;
  assiettes: number; // Assiettes de cet ingredient dans la recette
  ingredient: string; // Nom de l'ingredient
  name: string;
  poids: string; // Poids en gr. ou ml
  quantite: string;
  recette: string; // Nom de la recette
  team: string; // Nom de l'équipe (si applicable)
  unit: string;
  uuid: string;
}

// ✅ NOUVEAUX : Types pour la structure byDate
export interface RecipeOccurrence {
  r: string; // recipeName
  q?: number; // quantité brute (optionnel, si différent de qEq)
  u?: string; // unité brute (optionnel, si différent de uEq)
  qEq: number; // quantité équivalente (convertie)
  uEq: string; // unité équivalente
  a: number; // assiettes
  cRule?: string; // conversion rule (optionnel)
}

export interface ByDateEntry {
  totalConsolidated: NumericQuantity[];
  recipes: RecipeOccurrence[];
  totalAssiettes: number;
  recipeCount: number;
  // totalRaw est optionnel, seulement si conversions
  totalRaw?: NumericQuantity[];
}

export interface HugoIngredient {
  ingredientHugoUuid: string;
  ingredientName: string;
  ingType: string;
  totalAssiettes: number;
  nbRecipes: number;
  pFrais?: boolean;
  pSurgel?: boolean;

  // ✅ NOUVEAU : Structure groupée par date
  byDate: Record<string, ByDateEntry>;

  // ✅ NOUVEAU : Optionnel (seulement si conversions)
  totalNeededRaw?: NumericQuantity[];
  conversionRules?: string[];

  // Les totaux globaux consolidés sont calculés depuis byDate
  // Pas besoin de les stocker séparément
}
