/**
 * Utilitaires pour parser et transformer les données de recettes
 */

import type {
  RecipeIngredient,
  RecipeForDisplay,
  RecipeIndexEntry,
} from "../types/recipes.types";

/**
 * Parse un ingrédient depuis le JSON Hugo
 *
 * Format : {uuid, name, originalQuantity, originalUnit, ...}
 *
 * @param ingredientData - Données depuis recipe.json
 * @returns RecipeIngredient parsé
 */
export function parseRecipeIngredient(ingredientData: any): RecipeIngredient {
  if (
    !ingredientData ||
    typeof ingredientData !== "object" ||
    Array.isArray(ingredientData)
  ) {
    throw new Error(
      `Format d'ingrédient invalide: ${JSON.stringify(ingredientData)}`,
    );
  }

  return {
    uuid: ingredientData.uuid || "",
    name: ingredientData.name || "",
    originalQuantity: ingredientData.originalQuantity || 0,
    originalUnit: ingredientData.originalUnit || "",
    normalizedQuantity: ingredientData.normalizedQuantity || 0,
    normalizedUnit: ingredientData.normalizedUnit || "",
    comment: ingredientData.comment || "",
    allergens: Array.isArray(ingredientData.allergens)
      ? ingredientData.allergens
      : [],
    type: ingredientData.type || "",
  };
}

/**
 * Parse les données complètes d'une recette depuis le JSON Hugo
 *
 * @param rawData - Données brutes depuis recipe.json
 * @returns RecipeForDisplay parsé
 */
export function parseRecipeData(rawData: any): RecipeForDisplay {
  if (!rawData || typeof rawData !== "object") {
    throw new Error("Données de recette invalides");
  }

  // Parser les ingrédients
  const ingredients: RecipeIngredient[] = [];
  if (Array.isArray(rawData.ingredients)) {
    rawData.ingredients.forEach((ingData: any) => {
      try {
        ingredients.push(parseRecipeIngredient(ingData));
      } catch (err) {
        console.warn("[parseRecipeData] Ingrédient invalide ignoré:", err);
      }
    });
  }

  return {
    ...rawData,
    // Mapper 'id' depuis Hugo vers '$id' pour notre format interne
    $id: rawData.$id || rawData.id || "",
    ingredients,
  };
}

/**
 * Parse une entrée d'index depuis le data.json
 *
 * @param rawData - Données brutes depuis data.json
 * @returns RecipeIndexEntry nettoyé et parsé
 */
export function parseRecipeIndexEntry(rawData: any): RecipeIndexEntry {
  if (!rawData || typeof rawData !== "object") {
    throw new Error("Données d'index de recette invalides");
  }

  // Nettoyer et convertir les ingrédients en tableau de noms seulement
  const ingredients: string[] = [];
  if (Array.isArray(rawData.ingredients)) {
    rawData.ingredients.forEach((ing: any) => {
      if (typeof ing === "string") {
        ingredients.push(ing);
      } else if (ing && typeof ing.name === "string") {
        ingredients.push(ing.name);
      }
    });
  }

  return {
    title: rawData.title || "",
    typeR: rawData.typeR || "",
    categories: Array.isArray(rawData.categories) ? rawData.categories : [],
    regime: rawData.regime || null,
    draft: rawData.draft ?? false,
    materiel: Array.isArray(rawData.materiel) ? rawData.materiel : [],
    region: rawData.region || "",
    serveHot: rawData.serveHot ?? false,
    cuisson: rawData.cuisson ?? false,
    check: rawData.check ?? false,
    saison: Array.isArray(rawData.saison) ? rawData.saison : [],
    permissionWrite: Array.isArray(rawData.permissionWrite)
      ? rawData.permissionWrite
      : [],
    isPublished: rawData.isPublished ?? true,
    lockedBy: rawData.lockedBy || null,
    plate: rawData.plate ?? 100,
    ingredients,
    auteur: rawData.auteur || "",
    // Mapper 'id' depuis Hugo vers '$id' pour notre format interne
    $id: rawData.$id || rawData.id || "",
  };
}
