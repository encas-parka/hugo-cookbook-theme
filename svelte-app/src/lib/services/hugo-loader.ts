/**
 * Service pour charger et parser le JSON Hugo généré
 */

import type { Products } from "../types/appwrite";
import type { HugoIngredient } from "../types/store.types";

export interface HugoEventData {
  mainGroup_id: string;
  name: string;
  hugoContentHash: string;
  allDates: string[];
  ingredients: HugoIngredient[];
}

/**
 * Charge le JSON Hugo pour un événement
 */
export async function loadHugoEventData(
  mainId: string,
): Promise<HugoEventData> {
  const response = await fetch(
    `/evenements/${mainId}/ingredients_aw/index.json`,
  );

  if (!response.ok) {
    throw new Error(
      `Impossible de charger les données Hugo: ${response.status}`,
    );
  }

  const data = await response.json();

  // Validation basique
  if (!data.mainGroup_id || !data.ingredients) {
    throw new Error("Format de données Hugo invalide");
  }

  return data;
}

/**
 * Transforme un HugoIngredient en product "virgin" local
 */
export function createProductsFromHugo(
  ingredient: HugoIngredient,
  mainId: string,
  hugoContentHash: string,
): Partial<Products> {
  return {
    $id: `${mainId}_${ingredient.ingredientHugoUuid}`, // ID composite pour éviter les conflits
    productHugoUuid: ingredient.ingredientHugoUuid,
    productName: ingredient.ingredientName,
    productType: ingredient.ingType,
    pFrais: ingredient.pFrais || false,
    pSurgel: ingredient.pSurgel || false,

    // Données Hugo sérialisées
    byDate: JSON.stringify(ingredient.byDate),

    // Metadata
    nbRecipes: ingredient.nbRecipes || 0,
    totalAssiettes: ingredient.totalAssiettes || 0,

    // État virgin
    status: "virgin",
    isHugoSynced: true,

    // Pas de données collaboratives
    purchases: [],
    store: "",
    who: null,
    stockReel: null,

    // Pas de merge
    isMerged: false,
    mergedInto: null,
    mergedFrom: null,

    // Pas d'override
    totalNeededConsolidated: null,
    totalNeededIsManualOverride: false,
    totalNeededOverrideReason: null,

    // Relations
    mainId: mainId as any, // Cast nécessaire pour le type
  };
}
