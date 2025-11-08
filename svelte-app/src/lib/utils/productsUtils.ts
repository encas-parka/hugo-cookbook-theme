import type {
  NumericQuantity,
  NeededConsolidatedByDate,
  RecipeOccurrence,
  ByDateEntry,
  RecipeWithDate,
  TotalNeededOverrideData,
} from "../types/store.types";

/**
 * Calcule la quantité totale nécessaire sur une plage de dates
 * @param neededConsolidatedByDate - Tableau des besoins consolidés par date
 * @param startDate - Date de début (format ISO)
 * @param endDate - Date de fin (format ISO)
 * @returns La quantité totale pour la plage de dates
 */
export function calculateTotalNeededInRange(
  neededConsolidatedByDate: NeededConsolidatedByDate[],
  startDate: string | null,
  endDate: string | null,
): NumericQuantity[] {
  if (!startDate || !endDate || !neededConsolidatedByDate.length) return [];

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Filtrer les dates dans la plage
  const filteredItems = neededConsolidatedByDate.filter((item) => {
    const itemDate = new Date(item.dateTimeService);
    return itemDate >= start && itemDate <= end;
  });

  if (!filteredItems.length) return [];

  // Agréger par unité
  return calculateTotalQuantityArray(
    filteredItems.flatMap((item) => item.neededConsolidatedForDate),
  );
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
      .map((n) => formatSingleQuantity(n.q.toString(), n.u))
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
      formatted.push(formatSingleQuantity(missing.toString(), unit));
    }
  });

  const display = formatted.length > 0 ? formatted.join(" et ") : "✅ Complet";
  return { numeric, display };
}

export function formatTotalQuantity(total: NumericQuantity[]): string {
  if (!total?.length) return "-";
  return total
    .map((p) => formatSingleQuantity(p.q.toString(), p.u))
    .join(" et ");
}

export function formatSingleQuantity(value: string, unit: string): string {
  const num = parseFloat(value);
  if (isNaN(num)) return `${value} ${unit}`;

  if ((unit === "gr." || unit === "ml") && num >= 1000) {
    const converted = num / 1000;
    const newUnit = unit === "gr." ? "kg" : "l.";
    const rounded = Math.round(converted * 100) / 100;
    let formatted = rounded.toString();
    if (formatted.endsWith(",0")) formatted = formatted.slice(0, -2);
    if (formatted.endsWith(",00")) formatted = formatted.slice(0, -3);
    return `${formatted} ${newUnit}`;
  }

  if (!["gr.", "ml", "kg", "l."].includes(unit)) {
    const rounded = Math.round(num * 10) / 10;
    let formatted = rounded.toString();
    if (formatted.endsWith(",0")) formatted = formatted.slice(0, -2);
    return `${formatted} ${unit}`;
  }

  return `${num} ${unit}`;
}

// =============================================================================
// ✅ NOUVEAUX : Utilitaires pour la structure byDate
// =============================================================================

/**
 * Parse les données byDate depuis le JSON stringifié
 * @param byDateJson - JSON stringifié de la structure byDate
 * @returns Objet byDate parsé ou null
 */
export function parseByDateData(
  byDateJson: string | null,
): Record<string, ByDateEntry> | null {
  return safeJsonParse<Record<string, ByDateEntry>>(byDateJson);
}

/**
 * Parse totalNeededOverride depuis le format JSON d'Appwrite
 * @param overrideJson - JSON stringifié de TotalNeededOverrideData
 * @returns Objet TotalNeededOverrideData parsé ou null
 */
export function parseTotalNeededOverride(
  overrideJson: string | null,
): TotalNeededOverrideData | null {
  return safeJsonParse<TotalNeededOverrideData>(overrideJson);
}

/**
 * Agrège un tableau de NumericQuantity par unité
 * @param quantities - Tableau de NumericQuantity
 * @returns Tableau agrégé par unité
 */
export function aggregateByUnit(
  quantities: NumericQuantity[],
): NumericQuantity[] {
  if (!quantities?.length) return [];

  const unitMap = new Map<string, number>();

  quantities.forEach(({ q, u }) => {
    if (typeof q === "number" && !isNaN(q)) {
      const existing = unitMap.get(u) || 0;
      unitMap.set(u, existing + q);
    }
  });

  return Array.from(unitMap.entries()).map(([u, q]) => ({
    q,
    u,
  }));
}

/**
 * Extrait les recettes pour une date spécifique depuis byDate
 * @param byDate - Structure byDate parsée
 * @param targetDate - Date cible (format ISO)
 * @returns Tableau de RecipeOccurrence pour cette date
 */
export function extractRecipesByDate(
  byDate: Record<string, ByDateEntry>,
  targetDate: string,
): RecipeOccurrence[] {
  const entry = byDate[targetDate];
  return entry?.recipes || [];
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
 * Calcule le total des assiettes pour une plage de dates
 * @param byDate - Structure byDate parsée
 * @param startDate - Date de début
 * @param endDate - Date de fin
 * @returns Nombre total d'assiettes
 */
export function calculateTotalAssiettesInRange(
  byDate: Record<string, ByDateEntry>,
  startDate: string | Date,
  endDate: string | Date,
): number {
  if (!byDate) return 0;

  // Convertir en Dates si nécessaire
  const start = typeof startDate === "string" ? new Date(startDate) : startDate;
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;

  return Object.entries(byDate)
    .filter(([dateStr]) => {
      const date = new Date(dateStr);
      return date >= start && date <= end;
    })
    .reduce((total, [_, entry]) => total + (entry.totalAssiettes || 0), 0);
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

/**
 * Construit NeededConsolidatedByDateArray depuis byDate pour compatibilité UI
 * @param byDate - Structure byDate parsée
 * @returns NeededConsolidatedByDate[] pour compatibilité avec l'UI existante
 */
export function buildNeededConsolidatedByDateArray(
  byDate: Record<string, ByDateEntry>,
): NeededConsolidatedByDate[] {
  if (!byDate) return [];

  return Object.entries(byDate).map(([dateTimeService, entry]) => ({
    dateTimeService,
    neededConsolidatedForDate: entry.totalConsolidated.map((q) => ({
      q: q.q,
      u: q.u,
    })),
    recipeNames: entry.recipes?.map((r) => r.r) || [],
    totalAssiettes: entry.totalAssiettes || 0,
  }));
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
// ✅ NOUVEAUX : Utilitaires pour le calcul des disponibilités (endDate only)
// =============================================================================

/**
 * Détermine si un achat est disponible à une date donnée selon les règles métier
 * @param purchase - L'achat à évaluer
 * @param targetDate - Date cible (format ISO)
 * @param stockReferenceDate - Date de référence du stock (si applicable)
 * @returns true si l'achat est disponible à cette date
 */
export function isPurchaseAvailable(
  purchase: any,
  targetDate: string,
  stockReferenceDate: string = "",
): boolean {
  // Annulé = jamais compté
  if (purchase.status === "cancelled") return false;

  // Date de référence (deliveryDate ou $createdAt pour les delivered sans deliveryDate)
  const referenceDate = purchase.deliveryDate || purchase.$createdAt;
  if (!referenceDate) return false;

  // Si la référence est après notre date = pas encore disponible
  if (referenceDate > targetDate) return false;

  // Si le stock est postérieur à l'achat = l'achat est inclus dans le stock
  if (stockReferenceDate && purchase.$createdAt < stockReferenceDate) {
    return false;
  }

  // Status rules
  return (
    purchase.status === "delivered" ||
    purchase.status === "pending" ||
    (purchase.status === "ordered" && referenceDate <= targetDate)
  );
}

/**
 * Calcule les quantités disponibles pour un produit à une date donnée
 * @param product - Produit enrichi avec achats, besoins et stock
 * @param targetDate - Date cible (format ISO)
 * @returns NumericQuantity[] des quantités disponibles
 */
export function calculateAvailableAtDate(
  product: any,
  targetDate: string,
): NumericQuantity[] {
  // 1. Stock de base (si disponible et antérieur à la date)
  let baseStock: NumericQuantity[] = [];
  let stockReferenceDate = "";

  if (
    product.stockParsed?.dateTime &&
    product.stockParsed.dateTime <= targetDate
  ) {
    baseStock = [
      {
        q: parseFloat(product.stockParsed.quantity),
        u: product.stockParsed.unit,
      },
    ];
    stockReferenceDate = product.stockParsed.dateTime;
  }

  // 2. Ajouter les achats disponibles (en tenant compte de la priorité du stock)
  const additionalPurchases: NumericQuantity[] = [];

  if (product.purchases) {
    for (const purchase of product.purchases) {
      if (isPurchaseAvailable(purchase, targetDate, stockReferenceDate)) {
        additionalPurchases.push({
          q: purchase.quantity,
          u: purchase.unit,
        });
      }
    }
  }

  // 3. Besoins cumulés jusqu'à cette date
  const cumulativeNeeded = calculateCumulativeNeeds(product, targetDate);

  // 4. Calcul final avec gestion des unités
  const allResources = [...baseStock, ...additionalPurchases];
  const totalResources = aggregateByUnit(allResources);

  // Soustraction des besoins (unité par unité)
  return subtractQuantities(totalResources, cumulativeNeeded);
}

/**
 * Calcule les besoins cumulés d'un produit jusqu'à une date donnée
 * @param product - Produit enrichi
 * @param targetDate - Date cible (format ISO)
 * @returns NumericQuantity[] des besoins cumulés
 */
export function calculateCumulativeNeeds(
  product: any,
  targetDate: string,
): NumericQuantity[] {
  if (!product.byDate) return [];

  const cumulativeQuantities: NumericQuantity[] = [];

  for (const [dateStr, entry] of Object.entries(product.byDate)) {
    if (dateStr <= targetDate) {
      const byDateEntry = entry as any;
      const neededConsolidated =
        byDateEntry.totalConsolidated as NumericQuantity[];
      if (neededConsolidated) {
        cumulativeQuantities.push(...neededConsolidated);
      }
    }
  }

  return aggregateByUnit(cumulativeQuantities);
}

/**
 * Soustrait deux tableaux de NumericQuantity et retourne les résultats bruts
 * @param resources - Quantités disponibles
 * @param needs - Quantités nécessaires
 * @returns NumericQuantity[] avec valeurs positives (surplus) et négatives (manquants)
 */
export function subtractQuantities(
  resources: NumericQuantity[],
  needs: NumericQuantity[],
): NumericQuantity[] {
  const resourceMap = new Map<string, number>();
  const needMap = new Map<string, number>();

  // Agréger les ressources par unité
  resources.forEach(({ q, u }) => {
    resourceMap.set(u, (resourceMap.get(u) || 0) + q);
  });

  // Agréger les besoins par unité
  needs.forEach(({ q, u }) => {
    needMap.set(u, (needMap.get(u) || 0) + q);
  });

  // Calculer la différence avec conservation du signe
  const result: NumericQuantity[] = [];
  const allUnits = new Set([...resourceMap.keys(), ...needMap.keys()]);

  for (const unit of allUnits) {
    const resourceQty = resourceMap.get(unit) || 0;
    const needQty = needMap.get(unit) || 0;
    const diff = resourceQty - needQty;

    // Garder les valeurs non nulles (positives ET négatives)
    if (Math.abs(diff) > 0.001) {
      // Éviter les problèmes de flottants
      result.push({ q: diff, u: unit });
    }
  }

  return result;
}

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
      .map((item) => formatSingleQuantity(item.q.toString(), item.u))
      .join(" et ");
    const missingStr = negatives
      .map((item) => formatSingleQuantity(Math.abs(item.q).toString(), item.u))
      .join(" et ");
    return `${surplusStr} disponibles, ${missingStr} manquant${negatives.length > 1 ? "s" : ""}`;
  } else if (positives.length > 0) {
    // Uniquement des surplus
    return (
      positives
        .map((item) => "+" + formatSingleQuantity(item.q.toString(), item.u))
        .join(" et ") + " disponibles"
    );
  } else if (negatives.length > 0) {
    // Uniquement des manquants
    return (
      negatives
        .map((item) =>
          formatSingleQuantity(Math.abs(item.q).toString(), item.u),
        )
        .join(" et ") + ` manquant${negatives.length > 1 ? "s" : ""}`
    );
  } else {
    return "Équilibré";
  }
}
