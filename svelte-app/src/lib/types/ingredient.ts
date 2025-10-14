/**
 * Types pour les ingrédients et achats
 * Fichier principal de typage des données métier
 */

// Types de base pour les quantités
export interface Quantity {
  value: number;
  unit: string;
  type?: 'need' | 'purchase' | 'stock';
}

// Types pour les calculs de balance
export interface BalancePerUnit {
  unit: string;
  needed: number;
  purchased: number;
  balance: number;
  status: ProductStatus;
  category?: string;
}

// Types pour les achats
export interface Purchase {
  $id: string;
  list: string;
  listIngredient: string | { $id: string };
  quantity: number;
  unit: string;
  store: string;
  who: string;
  price?: number;
  notes?: string;
  $createdAt: string;
  $updatedAt: string;

  // Métadonnées UI
  isEditing?: boolean;
  isDirty?: boolean;
  isNew?: boolean;
}

// Types pour les entrées de stock
export interface StockEntry {
  quantity: number;
  unit: string;
  dateTime: string;
  notes?: string;

  // Métadonnées UI
  isEditing?: boolean;
  isDirty?: boolean;
  isNew?: boolean;
  $id?: string;
}

// Type principal pour un ingrédient (brut, depuis Appwrite)
export interface IngredientRaw {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  ingredientUuid: string;
  ingredientLists: string;
  ingredientName: string;
  ingType: string;
  totalNeededConsolidated: string; // JSON string
  totalNeededRaw: string; // JSON string
  recipeOccurrences: string[]; // Array of JSON strings
  pFrais: boolean;
  pSurgel: boolean;
  stockReel: string; // JSON string ou nombre
  who: string[];
  store: string;
  isModified?: boolean;

  // Fusion properties
  isMerged?: boolean;
  mergedFrom?: Array<{ $id: string }>;
}

// Type pour un ingrédient transformé (pour l'UI)
export interface Ingredient {
  // Données de base
  $id: string;
  ingredientUuid: string;
  ingredientName: string;
  ingType: string;

  // Propriétés d'affichage
  typeDisplay: string;
  totalNeedDisplay: string;
  purchasesDisplay: string;
  balanceDisplay: string;
  balanceClass: string;
  storeDisplay: string;
  responsibleDisplay: string;

  // Données brutes et statut
  status: ProductStatus;
  stockReel: number;
  store: string;
  who: string[];

  // Données brutes pour les calculs et modales
  totalNeededConsolidated: Quantity[];
  recipeOccurrences: RecipeOccurrence[];
  purchases: Purchase[];
  balancePerUnit: BalancePerUnit[];

  // Métadonnées
  isModified: boolean;
  pFrais: boolean;
  pSurgel: boolean;

  // Propriétés de fusion
  isMerged: boolean;
  mergedFrom?: Array<{ $id: string }>;
}

// Types pour les événements (listes collaboratives)
export interface MainGroup {
  $id: string;
  name: string;
  originalDataHash: string;
  isActive: boolean;
  createdBy: string;
  $createdAt: string;
  $updatedAt: string;
}

// Types de statut pour les produits
export type ProductStatus = 'sufficient' | 'missing' | 'partial' | 'unused';

// Types pour les données synchronisées
export interface SyncData {
  mainGroup: MainGroup | null;
  ingredients: Ingredient[];
  purchases: Purchase[];
  lastSyncTimestamp: Date | null;
}

// Types pour les états de chargement
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Types pour les filtres UI
export interface FilterState {
  store?: string;
  volunteer?: string;
  status?: ProductStatus;
  type?: string;
  search?: string;
}

// Types pour le tri
export type SortField = 'name' | 'status' | 'store' | 'type';
export type SortDirection = 'asc' | 'desc';

export interface SortState {
  field: SortField;
  direction: SortDirection;
}

// Types pour les suggestions (autocomplétion)
export interface Suggestion {
  value: string;
  type: 'store' | 'volunteer';
  count?: number;
}

// Types pour les erreurs structurées
export interface AppwriteApiError extends Error {
  type: 'appwrite' | 'validation' | 'network' | 'database';
  code?: number;
  details?: Record<string, any>;
  timestamp: string;
}

// Types pour les résultats d'opérations
export interface OperationResult<T = any> {
  success: boolean;
  data?: T;
  error?: AppwriteApiError;
  timestamp: string;
}

// Types pour les états de synchronisation
export interface SyncState {
  isOnline: boolean;
  lastSync: Date | null;
  pendingChanges: number;
  conflictCount: number;
}

// Types pour les mutations (pour l'optimistic UI)
export interface PendingMutation {
  id: string;
  type: 'create' | 'update' | 'delete';
  collection: 'ingredients' | 'purchases';
  data: any;
  timestamp: Date;
  isOptimistic?: boolean;
}

// Types pour la validation
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings?: string[];
}

// Types pour les états d'édition
export interface EditingState {
  isEditing: boolean;
  dirtyFields: Set<string>;
  originalData: any;
  currentData: any;
}

// Types génériques pour les stores
export interface StoreState<T> {
  data: T[];
  loading: LoadingState;
  error: string | null;
  lastUpdated: Date | null;
}

// Types pour les statistiques
export interface IngredientStats {
  total: number;
  byStatus: Record<ProductStatus, number>;
  byType: Record<string, number>;
  byStore: Record<string, number>;
  missingCount: number;
  sufficientCount: number;
}

export interface PurchaseStats {
  totalAmount: number;
  totalItems: number;
  byStore: Record<string, number>;
  byVolunteer: Record<string, number>;
  averagePrice: number;
}
