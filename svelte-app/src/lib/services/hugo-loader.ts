/**
 * Service pour charger et parser le JSON Hugo généré
 *
 * Transformer IMMÉDIATEMENT les HugoIngredient en Products
 * Tous les champs Appwrite sont initialisés avec leurs valeurs par défaut
 */

import type { HugoIngredient, EnrichedProduct } from "../types/store.types";
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
 * Métadonnées minimales d'un événement Hugo pour vérification rapide
 * Contient uniquement les informations essentielles pour détecter les changements
 */
export interface HugoEventMetadata {
  mainGroup_id: string;
  hugoContentHash: string;
  name: string;
  allDates: string[];
  lastModified: string;
  ingredientsCount: number;
  totalAssiettes: number;
  totalRecipes: number;
}

/**
 * Charge les métadonnées minimales d'un événement Hugo (~500-800 octets)
 * Optimisé pour les vérifications rapides de contenu
 */
export async function fetchHugoMetadata(
  listId: string,
): Promise<HugoEventMetadata> {
  const response = await fetch(`/evenements/${listId}/metadata.json`);

  if (!response.ok) {
    throw new Error(
      `Impossible de charger les métadonnées Hugo: ${response.status}`,
    );
  }

  const data = await response.json();

  // Validation basique
  if (!data.mainGroup_id || !data.hugoContentHash) {
    throw new Error("Format de métadonnées Hugo invalide");
  }

  return data;
}

/**
 * Charge le JSON Hugo pour un événement
 */
export async function loadHugoEventData(
  listId: string,
): Promise<HugoEventData> {
  const response = await fetch(
    `/evenements/${listId}/ingredients_aw/index.json`,
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
 * Vérifie si le contenu Hugo a changé en comparant les hashes
 * @param localHash Hash stocké localement
 * @param listId ID de l'événement à vérifier
 * @returns true si le contenu a changé, false sinon
 */
export async function hasHugoContentChanged(
  localHash: string | null,
  listId: string,
): Promise<boolean> {
  if (!localHash) {
    // Pas de hash local = considéré comme un changement
    return true;
  }

  try {
    const metadata = await fetchHugoMetadata(listId);
    return metadata.hugoContentHash !== localHash;
  } catch (error) {
    console.warn("Impossible de vérifier le hash Hugo:", error);
    // En cas d'erreur, on suppose que le contenu n'a pas changé
    // pour éviter des rechargements intempestifs
    return false;
  }
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
    $id:
      `${ingredient.productSemanticKey}` ||
      `${mainId}_${ingredient.ingredientHugoUuid}`,
    $updatedAt: undefined,

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
    stockParsed: null,
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
