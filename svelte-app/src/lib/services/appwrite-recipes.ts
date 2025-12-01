/**
 * Service Appwrite pour les recettes
 *
 * Gère le CRUD des recettes (drafts et non-published) dans Appwrite
 */

import { Query, ID, Permission, Role } from "appwrite";
import { getAppwriteInstances } from "./appwrite";
import { subscribe, getAppwriteConfig } from "./appwrite";
import type { Recettes } from "../types/appwrite.d";
import type {
  CreateRecipeData,
  UpdateRecipeData,
} from "../types/appwrite.types";

// =============================================================================
// CONFIGURATION
// =============================================================================

const RECIPES_COLLECTION_ID = "recettes";

// =============================================================================
// CRUD OPERATIONS
// =============================================================================

/**
 * Liste TOUTES les recettes non-published (accès global en lecture)
 * Utilisé pour : duplication, ajout à événement, consultation
 */
export async function listAllNonPublishedRecipes(): Promise<Recettes[]> {
  try {
    const { tables, config } = await getAppwriteInstances();

    const queries = [Query.equal("isPublished", false)];

    const response = await tables.listRows({
      databaseId: config.databaseId,
      tableId: RECIPES_COLLECTION_ID,
      queries,
    });

    return response.rows as unknown as Recettes[];
  } catch (error) {
    console.error("[appwrite-recipes] Error listing all recipes:", error);
    throw error;
  }
}

/**
 * Liste les recettes non-published ÉDITABLES par l'utilisateur
 * Utilisé pour : édition, suppression (filtrage par permissions)
 */
export async function listNonPublishedRecipes(
  userId: string,
  userTeams: string[],
): Promise<Recettes[]> {
  try {
    const allRecipes = await listAllNonPublishedRecipes();

    // Filtrage côté client pour permissions d'édition
    return allRecipes.filter((recipe) => {
      return (
        recipe.createdBy === userId ||
        recipe.contributors?.includes(userId) ||
        recipe.teams?.some((teamId) => userTeams.includes(teamId))
      );
    });
  } catch (error) {
    console.error("[appwrite-recipes] Error listing editable recipes:", error);
    throw error;
  }
}

/**
 * Récupère une recette par UUID
 */
export async function getRecipe(uuid: string): Promise<Recettes | null> {
  try {
    const { tables, config } = await getAppwriteInstances();
    const recipe = await tables.getRow({
      databaseId: config.databaseId,
      tableId: RECIPES_COLLECTION_ID,
      rowId: uuid,
    });
    return recipe as unknown as Recettes;
  } catch (error: any) {
    if (error.code === 404) return null;
    console.error(`[appwrite-recipes] Error getting recipe ${uuid}:`, error);
    throw error;
  }
}

/**
 * Crée une nouvelle recette
 */
export async function createRecipe(
  data: CreateRecipeData,
  userId: string,
): Promise<Recettes> {
  try {
    const { tables, config } = await getAppwriteInstances();
    const uuid = ID.unique();

    const permissions = [
      Permission.read(Role.user(userId)),
      Permission.update(Role.user(userId)),
      Permission.delete(Role.user(userId)),
    ];

    if (data.contributors) {
      data.contributors.forEach((contributorId) => {
        permissions.push(Permission.read(Role.user(contributorId)));
        permissions.push(Permission.update(Role.user(contributorId)));
      });
    }

    if (data.teams) {
      data.teams.forEach((teamId) => {
        permissions.push(Permission.read(Role.team(teamId)));
        permissions.push(Permission.update(Role.team(teamId)));
      });
    }

    const recipe = await tables.createRow({
      databaseId: config.databaseId,
      tableId: RECIPES_COLLECTION_ID,
      rowId: uuid,
      data: {
        title: data.title,
        plate: data.plate,
        ingredients: data.ingredients,
        preparation: data.preparation,
        draft: data.draft ?? true,
        typeR: data.typeR,
        categories: data.categories ?? [],
        regime: data.regime ?? [],
        isPublished: false,
        createdBy: userId,
        teams: data.teams ?? [],
        contributors: data.contributors ?? [],
      },
      permissions,
    });

    console.log(`[appwrite-recipes] Recipe created: ${uuid}`);
    return recipe as unknown as Recettes;
  } catch (error) {
    console.error("[appwrite-recipes] Error creating recipe:", error);
    throw error;
  }
}

/**
 * Met à jour une recette existante
 */
export async function updateRecipe(
  uuid: string,
  data: UpdateRecipeData,
): Promise<Recettes> {
  try {
    const { tables, config } = await getAppwriteInstances();
    const recipe = await tables.updateRow({
      databaseId: config.databaseId,
      tableId: RECIPES_COLLECTION_ID,
      rowId: uuid,
      data,
    });
    console.log(`[appwrite-recipes] Recipe updated: ${uuid}`);
    return recipe as unknown as Recettes;
  } catch (error) {
    console.error(`[appwrite-recipes] Error updating recipe ${uuid}:`, error);
    throw error;
  }
}

/**
 * Supprime une recette
 */
export async function deleteRecipe(uuid: string): Promise<void> {
  try {
    const { tables, config } = await getAppwriteInstances();
    await tables.deleteRow({
      databaseId: config.databaseId,
      tableId: RECIPES_COLLECTION_ID,
      rowId: uuid,
    });
    console.log(`[appwrite-recipes] Recipe deleted: ${uuid}`);
  } catch (error) {
    console.error(`[appwrite-recipes] Error deleting recipe ${uuid}:`, error);
    throw error;
  }
}

/**
 * Duplique une recette
 */
export async function duplicateRecipe(
  sourceUuid: string,
  userId: string,
): Promise<Recettes> {
  try {
    const source = await getRecipe(sourceUuid);
    if (!source) throw new Error(`Recipe ${sourceUuid} not found`);

    return await createRecipe(
      {
        title: `${source.title} (copie)`,
        plate: source.plate,
        ingredients: source.ingredients,
        preparation: source.preparation,
        draft: true,
        typeR: source.typeR,
        categories: source.categories ?? [],
        regime: source.regime ?? [],
        teams: [],
        contributors: [],
      },
      userId,
    );
  } catch (error) {
    console.error(
      `[appwrite-recipes] Error duplicating recipe ${sourceUuid}:`,
      error,
    );
    throw error;
  }
}

/**
 * Marque une recette comme publiée
 */
export async function markAsPublished(
  uuid: string,
  publishedAt?: string,
): Promise<Recettes> {
  return await updateRecipe(uuid, {
    isPublished: true,
    publishedAt: publishedAt || new Date().toISOString(),
  });
}

/**
 * Subscribe aux changements d'une recette spécifique
 */
export function subscribeToRecipe(
  uuid: string,
  callback: (recipe: Recettes) => void,
): () => void {
  const config = getAppwriteConfig();
  const channel = `databases.${config.APPWRITE_CONFIG.databaseId}.collections.${RECIPES_COLLECTION_ID}.documents.${uuid}`;

  return subscribe([channel], (response: any) => {
    if (
      response.events.includes(
        `databases.*.collections.*.documents.${uuid}.update`,
      )
    ) {
      callback(response.payload as Recettes);
    }
  });
}

/**
 * Subscribe à toutes les recettes (filtrage côté client)
 */
export function subscribeToRecipes(
  userId: string,
  userTeams: string[],
  callback: (recipe: Recettes, event: string) => void,
): () => void {
  const config = getAppwriteConfig();
  const channel = `databases.${config.APPWRITE_CONFIG.databaseId}.collections.${RECIPES_COLLECTION_ID}.documents`;

  return subscribe([channel], (response: any) => {
    const recipe = response.payload as Recettes;

    const hasAccess =
      recipe.createdBy === userId ||
      recipe.contributors?.includes(userId) ||
      recipe.teams?.some((teamId) => userTeams.includes(teamId));

    if (!hasAccess) return;

    let eventType = "update";
    if (response.events.some((e: string) => e.includes(".create"))) {
      eventType = "create";
    } else if (response.events.some((e: string) => e.includes(".delete"))) {
      eventType = "delete";
    }

    callback(recipe, eventType);
  });
}
