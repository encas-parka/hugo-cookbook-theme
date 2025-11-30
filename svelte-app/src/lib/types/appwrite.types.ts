/**
 * Types TypeScript pour les collections Appwrite
 *
 * Collections:
 * - recipes: Recettes (drafts et non-published)
 * - main: Événements (étendu avec meals)
 * - teams: Équipes pour permissions
 */

import type { Models } from "appwrite";

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

// =============================================================================
// EVENTS - Types de création/mise à jour
// =============================================================================
// Note: Le type Main est auto-généré dans appwrite.d.ts

/**
 * Repas dans un événement
 */
export interface Meal {
  id?: string; // UUID for tracking meals in the UI
  date: string; // DateTime ISO 8601 complet (ex: "2025-11-30T12:00:00")
  guests: number;
  recipes: MealRecipe[];
}

/**
 * Recette dans un repas
 */
export interface MealRecipe {
  recipeUuid: string;
  plates: number; // Nombre de couverts pour cette recette dans ce repas
  type?: "entree" | "plat" | "dessert"; // Type de plat pour ce repas
}

/**
 * Événement dans Appwrite (collection main étendue)
 */
export interface AppwriteEvent extends Models.Document {
  $id: string;
  name: string;
  dateStart: string; // ISO 8601
  dateEnd: string; // ISO 8601

  // Produits (existant - ProductsStore)
  products?: string; // JSON stringifié

  // Repas (nouveau - RecipesStore)
  meals?: string; // JSON stringifié (Meal[])

  // Permissions
  createdBy: string;
  teams: string[];
  contributors: string[];

  // Timestamps
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
}

/**
 * Données pour créer un événement
 */
export interface CreateEventData {
  name: string;
  dateStart: string;
  dateEnd: string;
  allDates?: string[]; // Tableau de toutes les dates uniques des repas
  meals?: Meal[];
  teams?: string[];
  contributors?: string[];
}

/**
 * Données pour mettre à jour un événement
 */
export interface UpdateEventData {
  name?: string;
  dateStart?: string;
  dateEnd?: string;
  allDates?: string[]; // Tableau de toutes les dates uniques des repas
  meals?: Meal[];
  teams?: string[];
  contributors?: string[];
}

// =============================================================================
// PERMISSIONS HELPERS
// =============================================================================

/**
 * Vérifie si un utilisateur peut éditer une ressource
 *
 * Note: Les teams utilisent l'API Teams native d'Appwrite
 * userTeams = liste des team IDs dont l'utilisateur est membre
 */
export function canEdit(
  resource: { createdBy: string; teams: string[]; contributors: string[] },
  userId: string,
  userTeams: string[],
): boolean {
  // Créateur
  if (resource.createdBy === userId) return true;

  // Contributeur direct
  if (resource.contributors.includes(userId)) return true;

  // Membre d'une team autorisée
  return resource.teams.some((teamId) => userTeams.includes(teamId));
}

/**
 * Filtre les ressources accessibles par un utilisateur
 */
export function filterAccessible<
  T extends { createdBy: string; teams: string[]; contributors: string[] },
>(resources: T[], userId: string, userTeams: string[]): T[] {
  return resources.filter((resource) => canEdit(resource, userId, userTeams));
}
