import type { Main, Products, Purchases } from "./appwrite.d";

/**
 * Types pour les statuts d'achat
 */
export type PurchaseStatus =
  | "requested" // Contacté fournisseur, attente confirmation
  | "ordered" // Confirmé par fournisseur
  | "pending" // Date livraison atteinte, attente réception
  | "delivered" // Reçu confirmé
  | "cancelled" // Annulé
  | null; // Compatibilité (achat direct)

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
  neededConsolidatedForDate: NumericQuantity[];
  recipeNames: string[];
  totalAssiettes: number;
}

/**
 * Type pour l'entrée de stock (uniquement)
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

// ✅ NOUVEAU : Type pour totalNeededOverride (stocké dans Appwrite)
export interface TotalNeededOverrideData {
  totalOverride: NumericQuantity;
  comment: string;
}

// ✅ EnrichedProduct = Données BRUTES Appwrite + Hugo statiques + Calculées
export interface EnrichedProduct {
  // MÉTADONNÉES APPWRITE (brutes)
  $id: string;
  $createdAt?: string;
  $updatedAt?: string;
  $permissions?: string[];
  $databaseId?: string;
  $sequence?: number;
  $tableId?: string;

  // DONNÉES MÉTIER DE BASE (brutes Appwrite / Hugo)
  productHugoUuid: string;
  productName: string;
  productType: string;
  pFrais: boolean;
  pSurgel: boolean;
  nbRecipes: number;
  totalAssiettes: number;
  isSynced: boolean;
  mainId: Main | string; // ou Main (géré au sync)

  // DONNÉES INTERACTIVES / COLLABORATIVES (brutes Appwrite)
  status: string;
  who: string[] | null;
  store: string; // ← Brut JSON
  stockReel: string | null; // ← Brut JSON
  previousNames: string[] | null;
  isMerged: boolean;
  mergedFrom: string[] | null;
  mergeDate: string | null;
  mergeReason: string | null;
  mergedInto: string | null;
  totalNeededOverride: string | null; // ← Brut JSON

  // RELATIONS (brutes Appwrite)
  purchases: Purchases[];

  // DONNÉES STATIQUES HUGO (jamais modifiées, locales)
  byDate: Record<string, ByDateEntry> | null;
  // DONNÉES CALCULÉES/PARSÉES (pour l'UI, dérivées des brutes)
  storeInfo: StoreInfo | null; // Parsé de store
  stockParsed: StockEntry | null; // Parsé de stockReel
  totalNeededArray: NumericQuantity[]; // Calculé de byDateParsed
  totalNeededRawArray?: NumericQuantity[];
  totalPurchasesArray: NumericQuantity[]; // Calculé de purchases
  missingQuantityArray: NumericQuantity[]; // Calculé
  stockOrTotalPurchases: string; // Calculé
  displayTotalNeeded: string; // Formaté pour UI
  displayTotalPurchases: string; // Formaté pour UI
  displayMissingQuantity: string; // Formaté pour UI
  totalNeededOverrideParsed: TotalNeededOverrideData | null; // Parsé de totalNeededOverride
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
  status: string | null;
  orderDate: string | null;
  deliveryDate: string | null;
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

  // Données du produit (dérivées du store)
  readonly product: EnrichedProduct | null;
  readonly recipes: RecipeWithDate[];
  readonly whoList: string[];
  readonly stockParsed: StockEntry | null;
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
  setStock(): Promise<void>;
  removeStock(): Promise<void>;

  // Actions - Volunteers
  addVolunteer(name: string): Promise<void>;
  removeVolunteer(name: string): Promise<void>;

  // Actions - Store
  updateStore(storeInfo: StoreInfo): Promise<void>;

  // Actions - Override
  setOverride(overrideData: TotalNeededOverrideData): Promise<void>;
  removeOverride(): Promise<void>;

  // Utilitaires
  formatQuantity(quantity: number, unit: string): string;
  formatDate(dateString: string): string;
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

  byDate: Record<string, ByDateEntry>;
  totalNeededRaw?: NumericQuantity[];
  conversionRules?: string[];
}

export interface RecipeWithDate extends RecipeOccurrence {
  date: string; // ✅ Date du service
  dateTimeService: string; // ✅ Date ISO complète
}

// =============================================================================
// TYPES POUR LA MODIFICATION GROUPÉE
// =============================================================================

export type GroupEditType = "store" | "who";

export interface GroupEditOptions {
  mode?: "replace" | "add"; // Mode d'application pour les champs de type tableau
}

export interface GroupEditFormData {
  // Store data
  storeName: string;
  storeComment: string;

  // Who data
  whoNames: string[];
  whoMode: "replace" | "add";
}

export interface GroupEditState {
  readonly productIds: string[];
  readonly products: EnrichedProduct[];
  readonly editType: GroupEditType;
  readonly loading: boolean;
  readonly error: string | null;
  readonly result: BatchUpdateResult | null;

  // Form data
  formData: GroupEditFormData;

  // Actions
  updateFormData(data: Partial<GroupEditFormData>): void;
  submitUpdate(): Promise<BatchUpdateResult>;
  reset(): void;
}

export interface BatchUpdateResult {
  success: boolean;
  transactionId?: string;
  updatedCount: number;
  updateType: string;
  error?: string;
  timestamp: string;
}

export interface GroupEditModalProps {
  productIds: string[];
  products: EnrichedProduct[];
  editType: GroupEditType;
  onClose: () => void;
  onSuccess?: (result: BatchUpdateResult) => void;
}
