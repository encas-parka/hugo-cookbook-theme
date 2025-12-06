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
  c?: string[]; // Categories
  r?: string[]; // Régime (sans-gluten, végétarien, vegan, etc.)
  cu?: boolean; // Cuisson (true/false)
  a?: string; // Auteur de la recette
  d?: boolean; // Draft (true/false)
  te?: string; // Température (ex: "Froid", "Chaud")
  p: string | null; // Path vers recipe.json (null pour recettes Appwrite)
  plates?: number; // Nombre de couverts par défaut de la recette
  q?: string; // Description quantité (ex: "24 parts par gastro")
  ch?: boolean; // Check validation
  check?: string; // "Oui" ou "Non" - Recette testée
  checkfor?: number; // Nombre de couverts pour lesquels la recette a été testée
  pd?: string; // Date de publication
  isPublished?: boolean; // true = Hugo, false = Appwrite non-published
  materiel?: string[]; // Matériel nécessaire
  saison?: string[]; // Saisons (Printemps, Été, Automne, Hiver)
  specialite?: string; // Spécialité (ex: "basque", "italien")
  ingredients?: string[]; // Liste des noms d'ingrédients (pour filtrage)
}

/**
 * Ingrédient dans une recette (depuis recipe.json)
 * Nouveau format : objets nommés pour meilleure lisibilité
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
 * Détails complets d'une recette (depuis recipe.json)
 * Contient uniquement les données "lourdes" nécessaires pour l'affichage d'une recette
 */
export interface RecipeData {
  uuid: string;
  title: string;
  plate: number;
  materiel?: string[]; // Matériel nécessaire
  ingredients: RecipeIngredient[]; // Liste complète des ingrédients avec conversions
  preparation: string; // Instructions de préparation
  preparation24h?: string; // Préparation à l'avance
  astuces?: Array<{ astuce: string }>; // Astuces
  prepAlt?: Array<{ recetteAlt: string }>; // Recettes alternatives
}

/**
 * Ingrédient scalé pour un nombre de convives
 */
export interface ScaledIngredient extends RecipeIngredient {
  scaledQuantity: number;
  scaleFactor: number;
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

// =============================================================================
// RECIPES - Types de création/mise à jour
// =============================================================================
// Note: Le type Recettes est auto-généré dans appwrite.d.ts

/**
 * Données pour créer une recette
 */
export interface CreateRecipeData {
  title: string;
  plate: number;
  ingredients: string; // JSON stringifié
  preparation: string;
  draft?: boolean;
  typeR: "entree" | "plat" | "dessert";
  categories?: string[];
  regime?: string[];
  teams?: string[];
  contributors?: string[];
}

/**
 * Données pour mettre à jour une recette
 */
export interface UpdateRecipeData {
  title?: string;
  plate?: number;
  ingredients?: string;
  preparation?: string;
  draft?: boolean;
  typeR?: "entree" | "plat" | "dessert";
  categories?: string[];
  regime?: string[];
  isPublished?: boolean;
  publishedAt?: string;
  teams?: string[];
  contributors?: string[];
}
