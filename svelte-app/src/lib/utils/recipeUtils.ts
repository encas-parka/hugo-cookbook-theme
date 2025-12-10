/**
 * Utilitaires pour parser et transformer les données de recettes
 */

import type { RecipeIngredient, RecipeData } from "../types/recipes.types";

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
 * @returns RecipeData parsé
 */
export function parseRecipeData(rawData: any): RecipeData {
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
    uuid: rawData.uuid || "",
    title: rawData.title || "",
    plate: rawData.plate || 1,
    ingredients,
    preparation: rawData.preparation || "",
  };
}
