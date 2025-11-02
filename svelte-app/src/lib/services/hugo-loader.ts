/**
 * Service pour charger et parser le JSON Hugo généré
 *
 * Transformer IMMÉDIATEMENT les HugoIngredient en Products
 * Tous les champs Appwrite sont initialisés avec leurs valeurs par défaut
 */

import type { Products } from "../types/appwrite";
import type {
  HugoIngredient,
  HugoProductData,
  EnrichedProduct,
} from "../types/store.types";
import {
  calculateAndFormatMissing,
  calculateGlobalTotal,
  calculateTotalQuantityArray,
  formatTotalQuantity,
  transformPurchasesToNumericQuantity,
} from "../utils/productsUtils";

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
 * 🎯 Crée un EnrichedProduct directement depuis HugoIngredient
 *
 * Données brutes Appwrite = défauts (vides/null)
 * Données calculées = pré-calculées
 * byDate = sérialisé en JSON (statique, de Hugo)
 */
export function createEnrichedProductFromHugo(
  ingredient: HugoIngredient,
  mainId: string,
): EnrichedProduct {
  // ✅ Pré-calculer totalNeededArray
  const totalNeededArray = calculateGlobalTotal(ingredient.byDate);

  // ✅ Initialiser purchases vide (local)
  const totalPurchasesArray = calculateTotalQuantityArray(
    transformPurchasesToNumericQuantity([]),
  );

  // ✅ Calculer missing
  const { numeric: missingQuantityArray, display: displayMissingQuantity } =
    calculateAndFormatMissing(totalNeededArray, totalPurchasesArray);

  // ✅ Défauts Appwrite (vides localement)
  return {
    // Métadonnées
    $id: `${mainId}_${ingredient.ingredientHugoUuid}`,
    $createdAt: undefined, // Sera rempli au sync Appwrite
    $updatedAt: undefined,
    $permissions: undefined,

    // Données métier
    productHugoUuid: ingredient.ingredientHugoUuid,
    productName: ingredient.ingredientName,
    productType: ingredient.ingType,
    pFrais: ingredient.pFrais || false,
    pSurgel: ingredient.pSurgel || false,
    nbRecipes: ingredient.nbRecipes,
    totalAssiettes: ingredient.totalAssiettes,
    isSynced: false, // ← Local, non-synced

    // Données collaboratives (vides au départ)
    status: "active",
    who: null,
    store: "", // Vide
    stockReel: null, // Vide
    previousNames: null,
    isMerged: false,
    mergedFrom: null,
    mergeDate: null,
    mergeReason: null,
    mergedInto: null,
    totalNeededOverride: null,
    mainId: mainId,

    // Relations (vides au départ)
    purchases: [],

    // Hugo statique (jamais modifié)
    byDate: ingredient.byDate,

    // Calculées
    storeInfo: null,
    stockArray: [],
    totalNeededArray,
    totalNeededRawArray: ingredient.totalNeededRaw,
    totalPurchasesArray,
    missingQuantityArray,
    stockOrTotalPurchases: "-",
    displayTotalNeeded: formatTotalQuantity(totalNeededArray),
    displayTotalPurchases: "-",
    displayMissingQuantity,
    totalNeededOverrideParsed: null,
  };
}

/**
 * Batch : créer plusieurs EnrichedProducts
 */
export function createEnrichedProductsFromHugo(
  ingredients: HugoIngredient[],
  mainId: string,
): EnrichedProduct[] {
  return ingredients.map((ingredient) =>
    createEnrichedProductFromHugo(ingredient, mainId),
  );
}

/**
 * Transforme directement en Products (Appwrite)
 *
 * @param ingredient - Données Hugo brutes
 * @param mainId - ID de l'événement
 * @returns Products - Compatible 100% avec Appwrite, mais local (isSynced=false)
 */
export function createProductsFromHugo(
  ingredient: HugoIngredient,
  mainId: string,
): HugoProductData {
  return {
    // Champs Appwrite nécessaires
    $id: `${mainId}_${ingredient.ingredientHugoUuid}`, // ID composite pour éviter les conflits
    productHugoUuid: ingredient.ingredientHugoUuid,
    productName: ingredient.ingredientName,
    mainId: mainId,

    productType: ingredient.ingType,
    pFrais: ingredient.pFrais || false,
    pSurgel: ingredient.pSurgel || false,

    // Metadata
    nbRecipes: ingredient.nbRecipes || 0,
    totalAssiettes: ingredient.totalAssiettes || 0,

    // Champs Appwrite avec valeurs par défaut
    status: "",

    // Pas de données collaboratives
    who: null,
    store: "",
    stockReel: null,
    purchases: [],
    isSynced: false,
    totalNeededOverride: null,

    // Métadonnées Appwrite
    isMerged: false,
    mergedInto: null,
    mergedFrom: null,
    mergeDate: null,
    mergeReason: null,
    previousNames: null,

    // Données Hugo sérialisées
    byDate: JSON.stringify(ingredient.byDate),
  };
}
