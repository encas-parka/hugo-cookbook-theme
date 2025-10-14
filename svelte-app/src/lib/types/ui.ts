/**
 * Types pour les composants UI et états d'interface
 */

// Types pour les états d'interface (modales, etc.)
export interface UIState {
  // Modales
  showEditModal: boolean;
  showPurchaseModal: boolean;
  showStockModal: boolean;
  showConfirmModal: boolean;
  
  // Données pour les modales
  selectedIngredient: string | null;
  selectedPurchase: string | null;
  
  // États de chargement UI
  isSaving: boolean;
  isDeleting: boolean;
  
  // Messages
  toastMessage: string | null;
  toastType: 'success' | 'error' | 'warning' | 'info';
}

// Types pour les modales
export interface ModalState {
  isOpen: boolean;
  title: string;
  type: 'edit' | 'create' | 'delete' | 'view';
  data?: any;
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
}

// Types pour les notifications toast
export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    handler: () => void;
  };
  timestamp: Date;
}

// Types pour les filtres avancés
export interface AdvancedFilters {
  // Filtres de base
  text: string;
  status: ProductStatus[];
  type: string[];
  store: string[];
  volunteer: string[];
  
  // Filtres numériques
  quantityRange?: {
    min: number;
    max: number;
  };
  
  // Filtres de date
  dateRange?: {
    start: Date;
    end: Date;
  };
  
  // Filtres de propriétés
  properties: {
    pFrais: boolean | null;
    pSurgel: boolean | null;
    isMerged: boolean | null;
  };
}

// Types pour la pagination
export interface PaginationState {
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

// Types pour les colonnes de tableau
export interface TableColumn {
  key: string;
  label: string;
  sortable: boolean;
  filterable: boolean;
  visible: boolean;
  width?: string;
  type: 'text' | 'number' | 'date' | 'boolean' | 'custom';
  formatter?: (value: any) => string;
}

// Types pour la configuration des tableaux
export interface TableConfig {
  columns: TableColumn[];
  sortable: boolean;
  filterable: boolean;
  paginated: boolean;
  selectable: boolean;
  pageSize: number;
}

// Types pour les éléments sélectionnés
export interface SelectionState<T = string> {
  selected: Set<T>;
  isAllSelected: boolean;
  isPartiallySelected: boolean;
}

// Types pour les états de glisser-déposer
export interface DragDropState {
  isDragging: boolean;
  draggedItem: any;
  dropTarget: string | null;
  dragOverIndex: number | null;
}

// Types pour les thèmes
export interface ThemeConfig {
  mode: 'light' | 'dark' | 'auto';
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
}

// Types pour l'accessibilité
export interface AccessibilityConfig {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
}

// Types pour les raccourcis clavier
export interface KeyboardShortcut {
  key: string;
  modifiers: ('ctrl' | 'shift' | 'alt' | 'meta')[];
  action: string;
  description: string;
  global?: boolean;
}

// Types pour les états de formulaire
export interface FormState<T = any> {
  data: T;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isValid: boolean;
  isDirty: boolean;
  isSubmitting: boolean;
}

// Types pour les champs de formulaire
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'select' | 'multiselect' | 'textarea' | 'checkbox' | 'radio';
  required: boolean;
  placeholder?: string;
  options?: Array<{ value: any; label: string }>;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    custom?: (value: any) => string | null;
  };
}

// Types pour les états d'édition en batch
export interface BatchEditState {
  isActive: boolean;
  selectedItems: string[];
  operation: 'update' | 'delete' | 'assign' | null;
  data: any;
}

// Types pour les layouts d'interface
export interface LayoutConfig {
  sidebarWidth: number;
  sidebarCollapsed: boolean;
  headerHeight: number;
  footerHeight: number;
  showGrid: boolean;
  compactMode: boolean;
}

// Types pour les états de recherche
export interface SearchState {
  query: string;
  results: any[];
  isSearching: boolean;
  suggestions: string[];
  highlightedIndex: number;
}

// Types pour les états d'impression
export interface PrintConfig {
  title: string;
  includeDetails: boolean;
  includeImages: boolean;
  pageSize: 'a4' | 'letter' | 'legal';
  orientation: 'portrait' | 'landscape';
  margins: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

// Types pour les états d'export
export interface ExportConfig {
  format: 'csv' | 'excel' | 'pdf' | 'json';
  includeHeaders: boolean;
  selectedColumns?: string[];
  filters?: any;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

// Types pour les statistiques UI
export interface UIStats {
  totalItems: number;
  visibleItems: number;
  selectedItems: number;
  filteredItems: number;
  loadingOperations: number;
  pendingOperations: number;
}

// Import des types partagés
import type { ProductStatus } from './ingredient';

// Réexporter les types partagés pour éviter les imports circulaires
export type { ProductStatus };