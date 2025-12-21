/**
 * Types pour le système de recettes et ingrédients
 */

import { type Recettes, RecettesTypeR } from "./appwrite.d";
export { RecettesTypeR };

// =============================================================================
// INGRÉDIENTS
// =============================================================================

/**
 * Ingrédient tel que chargé depuis data.json
 */
export interface Ingredient {
  u: string; // UUID court (ex: "xo0ibs")
  n: string; // Nom (ex: "Abricot")
  t: string; // Type (ex: "legumes", "epices", etc.)
  a?: string[]; // Allergènes optionnels (ex: ["Sésame"])
}

/**
 * Ingrédient enrichi côté client (si nécessaire)
 */
export interface EnrichedIngredient extends Ingredient {
  // Ajout de propriétés calculées si besoin
  searchableText?: string; // Pour la recherche
}

// =============================================================================
// RECETTES - Types basés sur Appwrite
// =============================================================================

/**
 * Format brut depuis/vers Appwrite
 * Les ingrédients sont au format string[] (JSON stringifié)
 *
 * @example
 * const recipe: RecipeFromAppwrite = await getRecipeAppwrite(uuid);
 */
export type RecipeFromAppwrite = Recettes;

/**
 * Format parsé pour affichage dans l'UI
 * Les ingrédients sont parsés en objets RecipeIngredient[]
 *
 * @example
 * const recipe: RecipeForDisplay = await recipesStore.getRecipeByUuid(uuid);
 */
export type RecipeForDisplay = Omit<Recettes, "ingredients"> & {
  ingredients: RecipeIngredient[];
};

// =============================================================================
// INDEX DE RECETTES
// =============================================================================

/**
 * Entrée d'index de recette (depuis data.json ou Appwrite)
 * Contient uniquement les champs nécessaires pour le filtrage rapide et l'affichage
 */
export type RecipeIndexEntry = Pick<
  Recettes,
  | "title"
  | "typeR"
  | "categories"
  | "regime"
  | "draft"
  | "materiel"
  | "region"
  | "serveHot"
  | "cuisson"
  | "check"
  | "saison"
  | "permissionWrite"
  | "isPublished"
  | "lockedBy"
  | "plate"
  | "createdBy"
  | "$id"
  | "$createdAt"
  | "$updatedAt"
> & {
  ingredients: string[]; // Noms des ingrédients uniquement (pour filtrage rapide)
  auteur?: string; // Auteur de la recette (optionnel)
};

// =============================================================================
// INGRÉDIENTS DANS UNE RECETTE
// =============================================================================

/**
 * Ingrédient dans une recette (depuis recipe.json)
 * Format : objets nommés pour meilleure lisibilité
 */
export interface RecipeIngredient {
  uuid: string;
  name: string; // Nom de l'ingrédient
  originalQuantity: number;
  originalUnit: string;
  normalizedQuantity: number;
  normalizedUnit: string;
  comment: string;
  allergens: string[];
  type: string;
}

/**
 * Ingrédient scalé pour un nombre de convives
 */
export interface ScaledIngredient extends RecipeIngredient {
  scaledQuantity: number;
  scaleFactor: number;
}

// =============================================================================
// RECIPE INFO (depuis recipe-info.json)
// =============================================================================

export interface RecipeInfo {
  materiel: string[];
  categories: string[];
  regimes: string[];
}

// =============================================================================
// CACHE & METADATA
// =============================================================================

/**
 * Métadonnées du cache IndexedDB pour les ingrédients
 */
export interface IngredientsCacheMetadata {
  lastSync: string | null;
  dataJsonHash: string | null; // Hash du fichier data.json
  ingredientsCount: number;
}

export interface RecipeDataCacheMetadata {
  lastSync: string | null;
  dataJsonHash: string | null;
  ingredientsCount: number;
}

/**
 * Métadonnées du cache IndexedDB pour les recettes
 */
export interface RecipesCacheMetadata {
  lastSync: string | null;
  buildTimestamp: number | null; // Timestamp du dernier build Hugo traité
  lastAppwriteSync: string | null; // Timestamp de la dernière sync Appwrite réussie
  recipesCount: number;
  cacheVersion: number; // Version du format de cache
}

// =============================================================================
// TYPES DE CRÉATION/MISE À JOUR
// =============================================================================

/**
 * Données pour créer une recette (format Appwrite)
 * Exclut uniquement les champs auto-générés de Models.Row
 */
export type CreateRecipeData = Omit<
  Recettes,
  | "$createdAt"
  | "$updatedAt"
  | "$permissions"
  | "$databaseId"
  | "$collectionId"
  | "$sequence"
  | "$tableId"
  | "createdBy"
  | "teams"
>;

/**
 * Données pour mettre à jour une recette
 * Tous les champs sont optionnels
 */
export type UpdateRecipeData = Partial<CreateRecipeData>;
