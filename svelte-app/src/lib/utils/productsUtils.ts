import type {
  NumericQuantity,
  NeededConsolidatedByDate,
  RecipeOccurrence,
  ByDateEntry,
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
 * Calcule le total needed depuis la structure byDate pour une plage de dates
 * @param byDate - Structure byDate parsée
 * @param startDate - Date de début (format ISO)
 * @param endDate - Date de fin (format ISO)
 * @returns Tableau de NumericQuantity agrégé
 */
export function calculateTotalFromByDate(
  byDate: Record<string, ByDateEntry>,
  startDate: string | Date,
  endDate: string | Date,
): NumericQuantity[] {
  if (!byDate || Object.keys(byDate).length === 0) return [];

  // Convertir en Dates si nécessaire
  const start = typeof startDate === "string" ? new Date(startDate) : startDate;
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;

  // Filtrer les dates dans la plage et extraire les totaux consolidés
  const totalsInRange = Object.entries(byDate)
    .filter(([dateStr]) => {
      const date = new Date(dateStr);
      return date >= start && date <= end;
    })
    .flatMap(([_, entry]) => entry.totalConsolidated);

  // Agréger par unité
  return aggregateByUnit(totalsInRange);
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
