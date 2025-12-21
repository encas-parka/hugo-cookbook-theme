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
} from "../types/recipes.types";
import { generateSlugUuid35 } from "../utils/slugUtils";
import { globalState } from "../stores/GlobalState.svelte";
/**
 * Exécute la Cloud Function manage_recipe
 */
export async function executeManageDataRecipe(
  action: "save_recipe",
  recipeId: string,
  userId: string,
  data?: any,
  async: boolean = false,
): Promise<any> {
  try {
    const { functions, config } = await getAppwriteInstances();
    const functionId = config.functions.manageRecipe;

    const payload = JSON.stringify({
      action,
      recipeId,
      userId,
      data,
    });

    const execution = await functions.createExecution({
      functionId: functionId,
      body: payload,
      async,
    });

    // Si asynchrone, on ne peut pas vérifier le corps de réponse ni attendre "completed"
    if (async) {
      if (execution.status === "failed") {
        throw new Error(
          `Function execution failed to start: ${execution.status}`,
        );
      }
      return { success: true, executionId: execution.$id };
    }

    if (execution.status !== "completed") {
      throw new Error(
        `Function execution failed: ${execution.status} - ${execution.responseBody}`,
      );
    }

    const response = JSON.parse(execution.responseBody);
    if (!response.success) {
      throw new Error(response.error || "Unknown error in manage_recipe");
    }

    return response.data;
  } catch (error) {
    console.error(
      `[appwrite-recipes] Error executing manage_recipe (${action}):`,
      error,
    );
    throw error;
  }
}

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
 * Liste les recettes modifiées depuis une certaine date (Sync incrémentiel)
 */
export async function listUpdatedRecipes(since: string): Promise<Recettes[]> {
  try {
    const { tables, config } = await getAppwriteInstances();

    const queries = [Query.greaterThan("$updatedAt", since)];

    const response = await tables.listRows({
      databaseId: config.databaseId,
      tableId: RECIPES_COLLECTION_ID,
      queries,
    });

    return response.rows as unknown as Recettes[];
  } catch (error) {
    console.error(
      `[appwrite-recipes] Error listing updated recipes since ${since}:`,
      error,
    );
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
        recipe.permissionWrite?.includes(userId) ||
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
export async function getRecipeAppwrite(
  uuid: string,
): Promise<Recettes | null> {
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
 * Note: Le realtime se chargera de mettre à jour le store automatiquement
 */
export async function createRecipeAppwrite(
  data: CreateRecipeData,
  userId: string,
): Promise<Recettes> {
  try {
    const { tables, config, account } = await getAppwriteInstances();

    const slugUuid = generateSlugUuid35(data.title);

    const permissions = [
      Permission.read(Role.users()),
      Permission.update(Role.user(userId)),
      Permission.delete(Role.user(userId)),
    ];

    if (data.permissionWrite) {
      data.permissionWrite.forEach((userId) => {
        permissions.push(Permission.update(Role.user(userId)));
      });
    }

    const user = await account.get();
    const userName = user.name;

    // Ajout des valeurs par défaut
    const recipeData = {
      title: data.title,
      plate: data.plate,
      ingredients: data.ingredients,
      preparation: data.preparation,
      draft: data.draft ?? true,
      typeR: data.typeR,
      categories: data.categories ?? [],
      regime: data.regime ?? [],
      check: data.check ?? false,
      // Champs unifiés
      description: data.description ?? null,
      quantite_desc: data.quantite_desc ?? null,
      region: data.region ?? null,
      saison: data.saison ?? [],
      cuisson: data.cuisson ?? [],
      serveHot: data.serveHot ?? true,
      auteur: userName,
      preparation24h: data.preparation24h ?? null,
      astuces: data.astuces ?? null,
      // Date au format Appwrite
      publishedAt:
        data.publishedAt ||
        new Date().toISOString().split("T")[0] + "T00:00:00Z",
      $id: slugUuid,
      createdBy: userId,
      isPublished: false,
    };

    const recipe = await tables.createRow({
      databaseId: config.databaseId,
      tableId: RECIPES_COLLECTION_ID,
      rowId: slugUuid,
      data: recipeData,
      permissions,
    });

    console.log(`[appwrite-recipes] Recipe created: ${slugUuid}`);
    return recipe as unknown as Recettes;
  } catch (error) {
    console.error("[appwrite-recipes] Error creating recipe:", error);
    throw error;
  }
}

/**
 * Met à jour une recette existante
 * Note: Le realtime se chargera de mettre à jour le store automatiquement
 */
export async function updateRecipeAppwrite(
  uuid: string,
  data: UpdateRecipeData,
  userId?: string,
): Promise<Recettes> {
  try {
    const { tables, config } = await getAppwriteInstances();

    // Ajout des valeurs par défaut pour les champs requis
    const updateData = {
      ...data,
      check: data.check ?? false,
      // Date au format Appwrite si fournie
      ...(data.publishedAt && { publishedAt: data.publishedAt }),
    };

    const recipe = await tables.updateRow({
      databaseId: config.databaseId,
      tableId: RECIPES_COLLECTION_ID,
      rowId: uuid,
      data: updateData,
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
export async function deleteRecipeAppwrite(uuid: string): Promise<void> {
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
 * USELESS : on duplique coté client, et on create comme une recette normal ??
 */
export async function duplicateRecipe(
  sourceUuid: string,
  userId: string,
): Promise<Recettes> {
  try {
    const source = await getRecipeAppwrite(sourceUuid);
    if (!source) throw new Error(`Recipe ${sourceUuid} not found`);

    const newSlug = generateSlugUuid35(source.title);

    return await createRecipeAppwrite(
      {
        ...source,
        title: `${source.title} (${globalState.userName})`,
        draft: true,
        isPublished: false,
        publishedAt: null,
        check: false,
        $id: newSlug,
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
  return await updateRecipeAppwrite(uuid, {
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
      recipe.permissionWrite?.includes(userId) ||
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
