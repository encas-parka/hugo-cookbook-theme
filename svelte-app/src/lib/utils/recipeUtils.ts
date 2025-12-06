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
  if (!ingredientData || typeof ingredientData !== "object" || Array.isArray(ingredientData)) {
    throw new Error(`Format d'ingrédient invalide: ${JSON.stringify(ingredientData)}`);
  }

  return {
    uuid: ingredientData.uuid || "",
    name: ingredientData.name || "",
    originalQuantity: ingredientData.originalQuantity || 0,
    originalUnit: ingredientData.originalUnit || "",
    normalizedQuantity: ingredientData.normalizedQuantity || 0,
    normalizedUnit: ingredientData.normalizedUnit || "",
    comment: ingredientData.comment || "",
    allergens: Array.isArray(ingredientData.allergens) ? ingredientData.allergens : [],
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

/**
 * Calcule le facteur de scaling pour une recette
 * 
 * @param baseServings - Nombre de couverts de base (recette)
 * @param targetServings - Nombre de couverts cible
 * @returns Facteur de multiplication
 */
export function calculateScaleFactor(baseServings: number, targetServings: number): number {
  if (baseServings <= 0) {
    console.warn("[calculateScaleFactor] baseServings invalide, utilisation de 1");
    return 1;
  }
  return targetServings / baseServings;
}

/**
 * Scale les quantités d'un ingrédient
 * 
 * @param ingredient - Ingrédient à scaler
 * @param scaleFactor - Facteur de multiplication
 * @returns Ingrédient avec quantités scalées
 */
export function scaleIngredient(
  ingredient: RecipeIngredient,
  scaleFactor: number,
): RecipeIngredient & { scaledQuantity: number } {
  return {
    ...ingredient,
    scaledQuantity: ingredient.normalizedQuantity * scaleFactor,
  };
}

/**
 * Formate une quantité avec son unité
 * 
 * @param quantity - Quantité numérique
 * @param unit - Unité
 * @returns Chaîne formatée (ex: "250 gr.")
 */
export function formatQuantity(quantity: number, unit: string): string {
  // Arrondir à 2 décimales
  const rounded = Math.round(quantity * 100) / 100;
  
  // Supprimer les décimales inutiles (.00)
  const formatted = rounded % 1 === 0 ? rounded.toString() : rounded.toFixed(2);
  
  return `${formatted} ${unit}`;
}

/**
 * Agrège des ingrédients identiques (même UUID + même unité normalisée)
 * 
 * @param ingredients - Liste d'ingrédients à agréger
 * @returns Map<key, ingrédient agrégé> où key = `${uuid}_${unit}`
 */
export function aggregateIngredients(
  ingredients: (RecipeIngredient & { scaledQuantity: number })[],
): Map<string, RecipeIngredient & { scaledQuantity: number }> {
  const aggregated = new Map<string, RecipeIngredient & { scaledQuantity: number }>();

  ingredients.forEach((ing) => {
    const key = `${ing.uuid}_${ing.normalizedUnit}`;
    const existing = aggregated.get(key);

    if (existing) {
      // Additionner les quantités
      existing.scaledQuantity += ing.scaledQuantity;
    } else {
      // Première occurrence
      aggregated.set(key, { ...ing });
    }
  });

  return aggregated;
}
