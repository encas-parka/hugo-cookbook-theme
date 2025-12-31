/**
 * Utilitaires purs pour la gestion des plages de dates
 * Fonctions réutilisables et testables sans état
 */

import type {
  NumericQuantity,
  RecipeOccurrence,
  EnrichedProduct,
  ByDateEntry,
} from "../types/store.types";
import { formatStockResult } from "./productsUtils";
import {
  aggregateByUnit,
  formatTotalQuantity as formatTotalQuantityFromFormatter,
  subtractQuantities,
} from "./QuantityFormatter";

export interface DateRange {
  start: string | null;
  end: string | null;
}

/**
 * Statistiques complètes d'un produit sur une plage de dates
 */
export interface ProductStatsForDateRange {
  // Besoins sur la plage
  requiredQuantities: NumericQuantity[]; // Quantités requises pour les recettes
  requiredQuantitiesFormatted: string; // Format d'affichage des besoins

  // Résultats de stock
  stockBalance: NumericQuantity[]; // Équilibre stock - besoins (positif/négatif)
  availableStockQuantities: NumericQuantity[]; // Stock disponible (positif seulement)
  missingStockQuantities: NumericQuantity[]; // Stock manquant (positif seulement)
  availableStockFormatted: string; // Format d'affichage du stock disponible
  missingStockFormatted: string; // Format d'affichage du stock manquant

  // Indicateurs booléens
  hasAvailableStock: boolean; // True si du stock est disponible
  hasMissingStock: boolean; // True s'il manque du stock

  // Statistiques sur la plage
  totalRecipesInRange: number; // Nombre total de recettes
  totalPortionsInRange: number; // Nombre total d'assiettes/portions

  // Métadonnées
  datesInSelectedRange: string[]; // Liste des dates dans la plage
  recipesByDate: Map<string, RecipeOccurrence[]>; // Recettes groupées par date
}

/**
 * Détermine l'icône à afficher selon l'heure de la date
 */
export function getTimeIcon(dateStr: string): "sun" | "moon" | "cloud" | null {
  const date = new Date(dateStr);
  const hour = date.getHours(); // Utiliser l'heure locale

  // Plages horaires plus larges pour mieux correspondre aux repas
  if (hour >= 11 && hour <= 13) return "sun"; // Midi (11-13h)
  if (hour >= 19 && hour <= 21) return "moon"; // Soir (19-21h)
  if (hour >= 7 && hour <= 9) return "cloud"; // Matin (7-9h)
  return null;
}

/**
 * Calcule les informations d'affichage pour une date spécifique
 * Combine le formatage de date et l'icône horaire
 */
export function calculateDateDisplayInfo(dateStr: string): {
  formattedDate: string;
  timeIcon: "sun" | "moon" | "cloud" | null;
} {
  const date = new Date(dateStr);

  return {
    formattedDate: date.toLocaleDateString("fr-FR", {
      weekday: "short",
      day: "numeric",
    }),
    timeIcon: getTimeIcon(dateStr),
  };
}

/**
 * Calcule les informations d'affichage pour toutes les dates d'un produit
 */
export function calculateAllDateDisplayInfo(
  dates: string[],
): Record<
  string,
  { formattedDate: string; timeIcon: "sun" | "moon" | "cloud" | null }
> {
  const dateDisplayInfo: Record<
    string,
    { formattedDate: string; timeIcon: "sun" | "moon" | "cloud" | null }
  > = {};

  for (const date of dates) {
    dateDisplayInfo[date] = calculateDateDisplayInfo(date);
  }

  return dateDisplayInfo;
}

/**
 * Calcule toutes les statistiques d'un produit pour une plage de dates spécifique
 * @param product - Produit enrichi avec byDate, stockParsed, purchases
 * @param startDate - Date de début de la plage (format ISO)
 * @param endDate - Date de fin de la plage (format ISO)
 * @returns Statistiques complètes sur la plage
 */

export function calculateProductStatsForDateRange(
  product: EnrichedProduct,
  startDate: string,
  endDate: string,
): ProductStatsForDateRange {
  if (!product.byDate) {
    return {
      requiredQuantities: [],
      requiredQuantitiesFormatted: "-",
      stockBalance: [],
      availableStockQuantities: [],
      missingStockQuantities: [],
      availableStockFormatted: "-",
      missingStockFormatted: "-",
      hasAvailableStock: false,
      hasMissingStock: false,
      totalRecipesInRange: 0,
      totalPortionsInRange: 0,
      datesInSelectedRange: [],
      recipesByDate: new Map(),
    };
  }

  const startDateObj = new Date(startDate);
  startDateObj.setHours(0, 0, 0, 0);

  const endDateObj = new Date(endDate);
  endDateObj.setHours(23, 59, 59, 999);

  // Accumulateurs pour stats sur la plage
  const datesInSelectedRange: string[] = [];
  const recipesByDate = new Map<string, RecipeOccurrence[]>();
  const quantitiesByUnit = new Map<string, number>();
  let totalPortionsInRange = 0;
  let totalRecipesInRange = 0;

  for (const [dateStr, dayData] of Object.entries(product.byDate)) {
    const date = new Date(dateStr);

    // Filtrage de plage uniquement
    if (date >= startDateObj && date <= endDateObj) {
      datesInSelectedRange.push(dateStr);
      totalPortionsInRange += dayData.totalAssiettes || 0;

      if (dayData.recipes?.length) {
        recipesByDate.set(dateStr, dayData.recipes);
        totalRecipesInRange += dayData.recipes.length;
      }

      // Agrégation des quantités requises
      if (dayData.totalConsolidated) {
        dayData.totalConsolidated.forEach(({ q, u }) => {
          quantitiesByUnit.set(u, (quantitiesByUnit.get(u) || 0) + q);
        });
      }
    }
  }

  // Conversion des quantités requises
  const requiredQuantities = Array.from(quantitiesByUnit.entries()).map(
    ([u, q]) => ({ q, u }),
  );
  const requiredQuantitiesFormatted =
    requiredQuantities.length > 0
      ? formatTotalQuantityFromFormatter(requiredQuantities)
      : "-";

  // 🎯 Priorité : Override manuel > Calcul auto (byDate)
  // Si un override existe, l'utiliser pour calculer le stock manquant
  const quantitiesForStockCalc = product.totalNeededOverrideParsed
    ? [product.totalNeededOverrideParsed.totalOverride]
    : requiredQuantities;

  // Calcul du stock pour CETTE plage
  const stockBalance = calculateStockBalanceForDateRange(
    product,
    startDate,
    endDate,
    quantitiesForStockCalc,
  );
  const availableStockQuantities = stockBalance.filter((item) => item.q > 0);

  // Pour les plages entièrement passées : pas de manquants calculés
  const today = new Date().toISOString().split("T")[0];
  const isRangeInPast = endDate < today;
  const missingStockQuantities = isRangeInPast
    ? []
    : stockBalance.filter((item) => item.q < 0);

  return {
    requiredQuantities,
    requiredQuantitiesFormatted,
    stockBalance,
    availableStockQuantities,
    missingStockQuantities,
    availableStockFormatted: formatStockResult(stockBalance),
    missingStockFormatted: formatTotalQuantityFromFormatter(
      missingStockQuantities.map((item) => ({
        q: Math.abs(item.q),
        u: item.u,
      })),
    ),
    hasAvailableStock: availableStockQuantities.length > 0,
    hasMissingStock: missingStockQuantities.length > 0,
    totalRecipesInRange,
    totalPortionsInRange,
    datesInSelectedRange,
    recipesByDate,
  };
}

/**
 * Calcule l'équilibre stock - besoins pour une plage de dates spécifique
 * @param product - Produit enrichi
 * @param startDate - Date de début de la plage
 * @param endDate - Date de fin de la plage
 * @param requiredQuantities - Quantités requises sur la plage (déjà calculées)
 * @returns NumericQuantity[] avec valeurs positives (disponible) et négatives (manquant)
 */
function calculateStockBalanceForDateRange(
  product: any,
  startDate: string,
  endDate: string,
  requiredQuantities: NumericQuantity[],
): NumericQuantity[] {
  // 1. Stock de base disponible AVANT la plage
  let baseStock: NumericQuantity[] = [];
  let stockReferenceDate = "";

  if (
    product.stockParsed?.dateTime &&
    product.stockParsed.dateTime <= startDate
  ) {
    baseStock = [
      {
        q: parseFloat(product.stockParsed.quantity),
        u: product.stockParsed.unit,
      },
    ];
    stockReferenceDate = product.stockParsed.dateTime;
  }

  // 2. Achats disponibles DANS la plage
  const additionalPurchases: NumericQuantity[] = [];
  if (product.purchases) {
    for (const purchase of product.purchases) {
      if (
        isPurchaseAvailableInRange(
          purchase,
          startDate,
          endDate,
          stockReferenceDate,
        )
      ) {
        additionalPurchases.push({
          q: purchase.quantity,
          u: purchase.unit,
        });
      }
    }
  }

  // 3. Calcul final : ressources - besoins sur la plage
  const allResources = [...baseStock, ...additionalPurchases];
  const totalResources = aggregateByUnit(allResources);

  return subtractQuantities(totalResources, requiredQuantities);
}

/**
 * Vérifie si un achat est disponible dans une plage de dates donnée
 * @param purchase - L'achat à vérifier
 * @param startDate - Date de début de la plage
 * @param endDate - Date de fin de la plage
 * @param stockReferenceDate - Date de référence du stock (priorité)
 * @returns true si l'achat est disponible dans cette plage
 */
function isPurchaseAvailableInRange(
  purchase: any,
  startDate: string,
  endDate: string,
  stockReferenceDate: string = "",
): boolean {
  // Annulé = jamais compté
  if (purchase.status === "cancelled") return false;

  // Date de référence (deliveryDate ou $createdAt pour les delivered sans deliveryDate)
  const referenceDate = purchase.deliveryDate || purchase.$createdAt;
  if (!referenceDate) return false;

  // Si la référence est après la fin de la plage = pas disponible
  if (referenceDate > endDate) return false;

  // Si le stock est postérieur à l'achat = l'achat est inclus dans le stock
  if (stockReferenceDate && purchase.$createdAt < stockReferenceDate) {
    return false;
  }

  // L'achat est disponible si sa date de référence est avant ou à la fin de la plage
  return referenceDate <= endDate;
}
