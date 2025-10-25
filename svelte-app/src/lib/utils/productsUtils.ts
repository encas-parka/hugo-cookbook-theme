import type {
  NumericQuantity,
  QuantityInfo,
  NeededConsolidatedByDate,
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

export function parseToNumericQuantity(jsonString: string): NumericQuantity[] {
  try {
    const quantityInfoArray = JSON.parse(jsonString) as QuantityInfo[];
    return quantityInfoArray
      .map((q) => ({
        quantity: parseFloat(q.quantity),
        unit: q.unit,
      }))
      .filter((q) => !isNaN(q.quantity));
  } catch (err) {
    console.error("[ProductsStore] Erreur parsing NumericQuantity:", err);
    return [];
  }
}

/**
 * Calcule le total d'un tableau d'objets avec quantity/unit (générique)
 * @param items - Tableau d'objets avec les propriétés quantity et unit
 * @returns Tableau agrégé par unité en NumericQuantity[]
 */
export function calculateTotalQuantityArray(
  items: { quantity: string | number; unit: string }[],
): NumericQuantity[] {
  if (!items?.length) return [];

  const quantityMap = new Map<string, number>();

  items.forEach((item) => {
    if (!item.quantity || !item.unit) return;
    const quantity = parseFloat(item.quantity.toString());
    if (isNaN(quantity)) return;

    const existing = quantityMap.get(item.unit) || 0;
    quantityMap.set(item.unit, existing + quantity);
  });

  return Array.from(quantityMap.entries()).map(([unit, quantity]) => ({
    quantity,
    unit,
  }));
}

/**
 * @deprecated Utiliser calculateTotalQuantityArray à la place
 */
export function calculateTotalPurchasesArray(
  purchases: any[],
): NumericQuantity[] {
  return calculateTotalQuantityArray(purchases);
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
      .map((n) => formatSingleQuantity(n.quantity.toString(), n.unit))
      .join(" et ");
    return { numeric: neededArray as any, display };
  }

  const neededMap = new Map<string, number>();
  const purchasesMap = new Map<string, number>();

  neededArray.forEach((n) => {
    const qty = parseFloat(n.quantity as any);
    if (!isNaN(qty)) {
      neededMap.set(n.unit, (neededMap.get(n.unit) || 0) + qty);
    }
  });

  purchasesArray.forEach((p) => {
    purchasesMap.set(p.unit, (purchasesMap.get(p.unit) || 0) + p.quantity);
  });

  const numeric: NumericQuantity[] = [];
  const formatted: string[] = [];

  neededMap.forEach((needed, unit) => {
    const purchased = purchasesMap.get(unit) || 0;
    const missing = needed - purchased;
    if (missing > 0) {
      numeric.push({ quantity: missing, unit });
      formatted.push(formatSingleQuantity(missing.toString(), unit));
    }
  });

  const display = formatted.length > 0 ? formatted.join(" et ") : "✅ Complet";
  return { numeric, display };
}

export function formatTotalQuantity(total: NumericQuantity[]): string {
  if (!total?.length) return "-";
  return total
    .map((p) => formatSingleQuantity(p.quantity.toString(), p.unit))
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
