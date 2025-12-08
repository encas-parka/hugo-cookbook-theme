/**
 * Utilitaires pour calculer les produits nécessaires depuis les événements
 * Remplace le chargement Hugo par un calcul dynamique basé sur EventsStore
 */

import type { EnrichedEvent, EventMeal } from "../types/events.d";
import type { RecipeData, RecipeIngredient } from "../types/recipes.types";
import type { EnrichedProduct, NumericQuantity } from "../types/store.types";
import { aggregateByUnit } from "./productsUtils";

/**
 * Structure intermédiaire pour agréger les ingrédients par produit et par date
 */
interface ProductAggregation {
  productHugoUuid: string;
  productName: string;
  productType: string;
  byDate: Record<string, NumericQuantity[]>; // Date ISO → quantités
  allergens: Set<string>;
}

/**
 * Calcule tous les produits nécessaires pour un événement
 * 
 * @param event - Événement enrichi avec meals
 * @param getRecipeDetails - Fonction pour récupérer les détails d'une recette
 * @param mainId - ID de l'événement (pour les EnrichedProduct)
 * @returns Tableau d'EnrichedProduct avec byDate calculé
 */
export async function calculateProductsFromEvent(
  event: EnrichedEvent,
  getRecipeDetails: (uuid: string) => Promise<RecipeData | null>,
  mainId: string,
): Promise<EnrichedProduct[]> {
  console.log(
    `[calculateProductsFromEvent] Calcul pour événement ${event.$id} avec ${event.meals.length} repas`,
  );

  // 1. Agréger les ingrédients par produit
  const aggregations = new Map<string, ProductAggregation>();

  for (const meal of event.meals) {
    await processMeal(meal, getRecipeDetails, aggregations);
  }

  // 2. Convertir les agrégations en EnrichedProduct
  const products: EnrichedProduct[] = [];

  for (const [uuid, aggregation] of aggregations) {
    const enrichedProduct = createEnrichedProductFromAggregation(
      aggregation,
      mainId,
    );
    products.push(enrichedProduct);
  }

  console.log(
    `[calculateProductsFromEvent] ${products.length} produits calculés`,
  );

  return products;
}

/**
 * Traite un repas et ajoute ses ingrédients aux agrégations
 */
async function processMeal(
  meal: EventMeal,
  getRecipeDetails: (uuid: string) => Promise<RecipeData | null>,
  aggregations: Map<string, ProductAggregation>,
): Promise<void> {
  const mealDate = meal.date.split("T")[0]; // Extraire la date YYYY-MM-DD

  for (const mealRecipe of meal.recipes) {
    // Récupérer les détails de la recette
    const recipeDetails = await getRecipeDetails(mealRecipe.recipeUuid);

    if (!recipeDetails) {
      console.warn(
        `[processMeal] Recette ${mealRecipe.recipeUuid} introuvable, ignorée`,
      );
      continue;
    }

    // Calculer le scale factor
    const scaleFactor = mealRecipe.plates / recipeDetails.plate;

    // Traiter chaque ingrédient
    for (const ingredient of recipeDetails.ingredients) {
      addIngredientToAggregation(
        ingredient,
        scaleFactor,
        mealDate,
        aggregations,
      );
    }
  }
}

/**
 * Ajoute un ingrédient scalé aux agrégations
 */
function addIngredientToAggregation(
  ingredient: RecipeIngredient,
  scaleFactor: number,
  date: string,
  aggregations: Map<string, ProductAggregation>,
): void {
  const uuid = ingredient.uuid;

  // Créer l'agrégation si elle n'existe pas
  if (!aggregations.has(uuid)) {
    aggregations.set(uuid, {
      productHugoUuid: uuid,
      productName: ingredient.name,
      productType: ingredient.type,
      byDate: {},
      allergens: new Set(ingredient.allergens || []),
    });
  }

  const aggregation = aggregations.get(uuid)!;

  // Calculer la quantité scalée (utiliser normalizedQuantity)
  const scaledQuantity = ingredient.normalizedQuantity * scaleFactor;

  // Ajouter à la date correspondante
  if (!aggregation.byDate[date]) {
    aggregation.byDate[date] = [];
  }

  aggregation.byDate[date].push({
    q: scaledQuantity,
    u: ingredient.normalizedUnit,
  });

  // Fusionner les allergènes
  if (ingredient.allergens) {
    ingredient.allergens.forEach((a) => aggregation.allergens.add(a));
  }
}

/**
 * Crée un EnrichedProduct depuis une agrégation
 */
function createEnrichedProductFromAggregation(
  aggregation: ProductAggregation,
  mainId: string,
): EnrichedProduct {
  // Générer un ID sémantique (nom-produit_uuid)
  const semanticId = `${slugify(aggregation.productName)}_${aggregation.productHugoUuid}`;

  // Agréger les quantités par date
  const byDate: Record<string, NumericQuantity[]> = {};

  for (const [date, quantities] of Object.entries(aggregation.byDate)) {
    byDate[date] = aggregateByUnit(quantities);
  }

  // Créer l'EnrichedProduct
  const product: EnrichedProduct = {
    $id: semanticId,
    mainId,
    productHugoUuid: aggregation.productHugoUuid,
    productName: aggregation.productName,
    productType: aggregation.productType,
    byDate,
    allergens: Array.from(aggregation.allergens),
    
    // Champs calculés initiaux (seront recalculés par ProductModel)
    totalNeeded: [],
    totalPurchases: [],
    totalMissing: [],
    totalMissingDisplay: "",
    totalNeededDisplay: "",
    totalPurchasesDisplay: "",
    
    // Métadonnées
    isSynced: false, // Produit calculé, pas encore sync avec Appwrite
    status: "active",
    
    // Champs optionnels vides
    who: [],
    store: null,
    temperature: null,
    purchases: [],
    stock: [],
    totalNeededOverride: null,
    manualSpecs: null,
    isMerged: false,
    mergedFrom: [],
    
    // Timestamps
    $createdAt: new Date().toISOString(),
    $updatedAt: new Date().toISOString(),
    $permissions: [],
    $databaseId: "",
    $collectionId: "",
  };

  return product;
}

/**
 * Slugify un texte pour créer un ID sémantique
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Supprimer les accents
    .replace(/[^a-z0-9]+/g, "-") // Remplacer les caractères spéciaux par des tirets
    .replace(/^-+|-+$/g, ""); // Supprimer les tirets en début/fin
}
