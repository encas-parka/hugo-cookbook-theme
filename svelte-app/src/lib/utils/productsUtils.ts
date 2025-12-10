import type {
  ByDateEntry,
  EnrichedProduct,
  NumericQuantity,
  RecipeOccurrence,
  RecipeWithDate,
} from "../types/store.types";

import { aggregateByUnit, formatSingleQuantity } from "./QuantityFormatter";

/**
 * Interface pour l'état des filtres
 */
export interface FiltersState {
  searchQuery: string;
  selectedStores: string[];
  selectedWho: string[];
  selectedProductTypes: string[];
  selectedTemperatures: string[];
  groupBy: "store" | "productType" | "none";
  sortColumn: string;
  sortDirection: "asc" | "desc";
}

export function safeJsonParse<T>(jsonString: string | null): T | null {
  if (!jsonString?.trim()) return null;
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    console.warn("[ProductsStore] Erreur parsing JSON:", err);
    return null;
  }
}

/**
 * Transforme un tableau de Purchases en NumericQuantity
 * @param purchases - Tableau de Purchases avec {quantity: number, unit: string}
 * @returns Tableau de NumericQuantity avec {q: number, u: string}
 *
 * NOTE IMPORTANTE : Cette fonction est temporaire car le format Purchases est incohérent.
 * À terme, il faudrait :
 * 1. Standardiser Purchases sur le format {q: number, u: string} pour cohérence
 * 2. Ou créer les transformations inverses NumericQuantity → Purchases
 * 3. Mettre à jour les services Appwrite pour envoyer/recevoir le bon format
 */
export function transformPurchasesToNumericQuantity(
  purchases: any[],
): NumericQuantity[] {
  if (!purchases?.length) return [];

  return purchases
    .filter((p) => p.quantity != null && p.unit)
    .map((p) => ({
      q: typeof p.quantity === "number" ? p.quantity : parseFloat(p.quantity),
      u: p.unit,
    }))
    .filter((item) => !isNaN(item.q));
}

/**
 * Calcule le total d'un tableau de NumericQuantity (format standard)
 * @param items - Tableau de NumericQuantity avec {q: number, u: string}
 * @returns Tableau agrégé par unité en NumericQuantity[]
 */
export function calculateTotalQuantityArray(
  items: NumericQuantity[],
): NumericQuantity[] {
  if (!items?.length) return [];

  const quantityMap = new Map<string, number>();

  items.forEach((item) => {
    if (!item.q || !item.u) return;
    if (typeof item.q !== "number" || isNaN(item.q)) return;

    const existing = quantityMap.get(item.u) || 0;
    quantityMap.set(item.u, existing + item.q);
  });

  return Array.from(quantityMap.entries()).map(([u, q]) => ({
    q,
    u,
  }));
}

export function calculateAndFormatMissing(
  neededArray: NumericQuantity[],
  purchasesArray: NumericQuantity[],
): { numeric: NumericQuantity[]; display: string } {
  if (!neededArray?.length) {
    return { numeric: [], display: "✅ Complet" };
  }

  if (!purchasesArray?.length) {
    const display = neededArray
      .map((n) => formatSingleQuantity(n.q, n.u))
      .join(" et ");
    return { numeric: neededArray as any, display };
  }

  const neededMap = new Map<string, number>();
  const purchasesMap = new Map<string, number>();

  neededArray.forEach((n) => {
    const qty = parseFloat(n.q as any);
    if (!isNaN(qty)) {
      neededMap.set(n.u, (neededMap.get(n.u) || 0) + qty);
    }
  });

  purchasesArray.forEach((p) => {
    purchasesMap.set(p.u, (purchasesMap.get(p.u) || 0) + p.q);
  });

  const numeric: NumericQuantity[] = [];
  const formatted: string[] = [];

  neededMap.forEach((needed, unit) => {
    const purchased = purchasesMap.get(unit) || 0;
    const missing = needed - purchased;
    if (missing > 0) {
      numeric.push({ q: missing, u: unit });
      formatted.push(formatSingleQuantity(missing, unit));
    }
  });

  const display = formatted.length > 0 ? formatted.join(" et ") : "✅ Complet";
  return { numeric, display };
}

/**
 * Extrait toutes les recettes depuis la structure byDate
 * @param byDate - Structure byDate parsée
 * @returns Tableau de toutes les RecipeOccurrence
 */
export function extractAllRecipes(
  byDate: Record<string, ByDateEntry>,
): RecipeOccurrence[] {
  if (!byDate) return [];

  return Object.values(byDate).flatMap((entry) => entry.recipes || []);
}

/**
 * Détecte si un ingredient a des conversions (q/u différent de qEq/uEq)
 * @param byDate - Structure byDate parsée
 * @returns true si des conversions sont détectées
 */
export function hasConversions(byDate: Record<string, ByDateEntry>): boolean {
  if (!byDate) return false;

  return Object.values(byDate).some((entry) =>
    entry.recipes?.some(
      (recipe) => recipe.q !== undefined || recipe.u !== undefined,
    ),
  );
}

export function generateRecipesWithDates(
  byDate: Record<string, ByDateEntry>,
): RecipeWithDate[] {
  if (!byDate) return [];

  const recipesWithDates: RecipeWithDate[] = [];

  // Pour chaque date, ajouter les recettes avec leur date
  Object.entries(byDate).forEach(([dateTimeService, entry]) => {
    entry.recipes?.forEach((recipe) => {
      recipesWithDates.push({
        ...recipe,
        date: dateTimeService, // ✅ Ajouter la date
        dateTimeService: dateTimeService, // ✅ Ajouter la date complète
      });
    });
  });

  return recipesWithDates;
}

/**
 * Calcule le total global depuis byDate (toutes dates confondues)
 * @param byDate - Structure byDate parsée
 * @returns NumericQuantity[] total global
 */
export function calculateGlobalTotal(
  byDate: Record<string, ByDateEntry>,
): NumericQuantity[] {
  if (!byDate) return [];

  // Extraire tous les totaux consolidés et agréger
  const allTotals = Object.values(byDate).flatMap(
    (entry) => entry.totalConsolidated,
  );
  return aggregateByUnit(allTotals);
}

// =============================================================================
// ✅ Utilitaires pour le calcul des disponibilités (endDate only)
// =============================================================================

/**
 * Détermine si un achat est disponible à une date donnée selon les règles métier
 * @param purchase - L'achat à évaluer
 * @param targetDate - Date cible (format ISO)
 * @param stockReferenceDate - Date de référence du stock (si applicable)
 * @returns true si l'achat est disponible à cette date
 */

/**
 * Formate le résultat du calcul de stock pour l'affichage
 * @param result - NumericQuantity[] avec valeurs positives et négatives
 * @returns string formatée pour l'affichage
 */
export function formatStockResult(result: NumericQuantity[]): string {
  if (!result?.length) return "Équilibré";

  const positives = result.filter((item) => item.q > 0);
  const negatives = result.filter((item) => item.q < 0);

  if (positives.length > 0 && negatives.length > 0) {
    // Cas unités différentes : "2kg disponibles, 1L manquant"
    const surplusStr = positives
      .map((item) => formatSingleQuantity(item.q, item.u))
      .join(" et ");
    const missingStr = negatives
      .map((item) => formatSingleQuantity(Math.abs(item.q), item.u))
      .join(" et ");
    return `${surplusStr} disponibles, ${missingStr} manquant${negatives.length > 1 ? "s" : ""}`;
  } else if (positives.length > 0) {
    // Uniquement des surplus
    return (
      positives
        .map((item) => "+" + formatSingleQuantity(item.q, item.u))
        .join(" et ") + " disponibles"
    );
  } else if (negatives.length > 0) {
    // Uniquement des manquants
    return (
      negatives
        .map((item) => formatSingleQuantity(Math.abs(item.q), item.u))
        .join(" et ") + ` manquant${negatives.length > 1 ? "s" : ""}`
    );
  } else {
    return "Équilibré";
  }
}

/**
 * Formate le message pour la notification toast
 */
export function formatToastMessage(analysis: any): string {
  const parts: string[] = [];

  if (analysis.newIngredients.length > 0) {
    parts.push(`${analysis.newIngredients.length} produits ajoutés`);
  }

  if (analysis.updatedIngredients.length > 0) {
    parts.push(`${analysis.updatedIngredients.length} produits mis à jour`);
  }

  if (analysis.removedIngredients.length > 0) {
    parts.push(`${analysis.removedIngredients.length} produits supprimés`);
  }

  return parts.length > 0
    ? `Mise à jour du menu: ${parts.join(", ")}`
    : "Menu mis à jour";
}

/**
 * Vérifie si un produit correspond aux filtres appliqués
 * @param product - Produit enrichi à tester
 * @param filters - État des filtres à appliquer
 * @returns true si le produit correspond à tous les filtres actifs
 */
export function matchesFilters(
  product: EnrichedProduct,
  filters: FiltersState,
): boolean {
  // Recherche textuelle
  if (filters.searchQuery.trim()) {
    const query = filters.searchQuery.toLowerCase();
    if (!product.productName.toLowerCase().includes(query)) {
      return false;
    }
  }

  // Filtre par store
  if (filters.selectedStores.length > 0) {
    if (
      !product.storeInfo?.storeName ||
      !filters.selectedStores.includes(product.storeInfo.storeName)
    ) {
      return false;
    }
  }

  // Filtre par who
  if (filters.selectedWho.length > 0) {
    if (
      !product.who ||
      !product.who.some((w) => filters.selectedWho.includes(w))
    ) {
      return false;
    }
  }

  // Filtre par productType
  if (filters.selectedProductTypes.length > 0) {
    if (
      !product.productType ||
      !filters.selectedProductTypes.includes(product.productType)
    ) {
      return false;
    }
  }

  // Filtres température
  if (filters.selectedTemperatures.length > 0) {
    const hasValidTemp =
      (filters.selectedTemperatures.includes("frais") && product.pFrais) ||
      (filters.selectedTemperatures.includes("surgele") && product.pSurgel);
    if (!hasValidTemp) return false;
  }

  return true;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // Sépare les accents
    .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
    .replace(/\s+/g, "-") // Remplace les espaces par des tirets
    .replace(/[^\w\-]+/g, "") // Supprime les caractères non alphanumériques
    .replace(/\-\-+/g, "-") // Remplace les tirets multiples
    .replace(/^-+/, "") // Supprime les tirets au début
    .replace(/-+$/, ""); // Supprime les tirets à la fin
}
