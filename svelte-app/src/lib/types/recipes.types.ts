/**
 * Types pour le système de recettes et ingrédients
 */

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
// RECETTES
// =============================================================================

/**
 * Entrée d'index de recette (depuis data.json ou Appwrite)
 */
export interface RecipeIndexEntry {
  u: string; // UUID court
  n: string; // Nom
  t: string; // Type (ex: "entree", "plat", "dessert")
  p: string | null; // Path vers recipe.json (null pour recettes Appwrite)
  plates?: number; // Nombre de couverts par défaut de la recette
  isPublished?: boolean; // true = Hugo, false = Appwrite non-published
}

/**
 * Ingrédient dans une recette (depuis recipe.json)
 * Structure: [uuid, qte_orig, unit_orig, qte_norm, unit_norm, comment, allergens[], type]
 */
export interface RecipeIngredient {
  uuid: string;
  originalQuantity: number;
  originalUnit: string;
  normalizedQuantity: number;
  normalizedUnit: string;
  comment: string;
  allergens: string[];
  type: string;
}

/**
 * Détails complets d'une recette (depuis recipe.json)
 */
export interface RecipeData {
  uuid: string;
  title: string;
  plate: number;
  ingredients: RecipeIngredient[];
  preparation: string;
}

/**
 * Ingrédient scalé pour un nombre de convives
 */
export interface ScaledIngredient extends RecipeIngredient {
  scaledQuantity: number;
  scaleFactor: number;
}

// =============================================================================
// ÉVÉNEMENTS
// =============================================================================

/**
 * Recette dans un repas
 */
export interface MealRecipe {
  recipeUuid: string;
  plates: number; // Nombre de couverts pour cette recette dans ce repas
}

/**
 * Repas dans un événement
 */
export interface Meal {
  date: string; // DateTime ISO 8601 complet (ex: "2025-11-30T12:00:00")
  guests: number;
  recipes: MealRecipe[];
}

/**
 * Événement (structure Appwrite)
 */
export interface Event {
  $id: string;
  name: string;
  startDate: string;
  endDate: string;
  meals: Meal[]; // Stocké comme JSON dans Appwrite
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

/**
 * Métadonnées du cache IndexedDB pour les recettes
 */
export interface RecipesCacheMetadata {
  lastSync: string | null;
  indexHash: string | null;
  recipesCount: number;
}
