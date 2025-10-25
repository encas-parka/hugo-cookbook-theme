/**
 * dataReconstruction.ts
 * Utilitaires pour reconstruire les données optimisées côté client
 * Permet de reconstruire neededConsolidatedByDate, totalNeededConsolidated et recipesOccurrences
 * à partir du format compressé "occ"
 */

import type { RecipeOccurrence } from "../types/store.types";

export interface CompressedOccurrence {
  r: string; // recipeName
  d: string; // dateTimeService
  q: number; // quantity
  u: string; // unit
  a: number; // assiettes
}

export interface NeededConsolidatedByDate {
  dateTimeService: string;
  neededConsolidatedForDate: Array<{
    quantity: number;
    unit: string;
  }>;
}

export interface TotalNeededItem {
  quantity: number;
  unit: string;
}

/**
 * Reconstruit neededConsolidatedByDate à partir du format compressé "occ"
 */
export function reconstructNeededConsolidatedByDate(
  occ: CompressedOccurrence[]
): NeededConsolidatedByDate[] {
  const grouped: Record<string, Array<{ quantity: number; unit: string }>> = {};

  occ.forEach(({ d, q, u }) => {
    if (!grouped[d]) {
      grouped[d] = [];
    }
    grouped[d].push({ quantity: q, unit: u });
  });

  return Object.entries(grouped).map(([dateTimeService, items]) => ({
    dateTimeService,
    neededConsolidatedForDate: items
  }));
}

/**
 * Reconstruit totalNeededConsolidated à partir du format compressé "occ"
 */
export function reconstructTotalNeededConsolidated(
  occ: CompressedOccurrence[]
): TotalNeededItem[] {
  const grouped: Record<string, number> = {};

  occ.forEach(({ q, u }) => {
    if (!grouped[u]) {
      grouped[u] = 0;
    }
    grouped[u] += q;
  });

  return Object.entries(grouped).map(([unit, quantity]) => ({
    quantity,
    unit
  }));
}

/**
 * Reconstruit recipesOccurrences à partir du format compressé "occ"
 */
export function reconstructRecipesOccurrences(
  occ: CompressedOccurrence[]
): RecipeOccurrence[] {
  return occ.map(({ r: recipeName, d: dateTimeService, q: quantity, u: unit, a: assiettes }) => ({
    recipeName,
    dateTimeService,
    quantity,
    unit,
    assiettes
  }));
}

/**
 * Reconstruit toutes les données à partir du format compressé
 */
export function reconstructFromOptimizedFormat(occ: CompressedOccurrence[] = []) {
  return {
    neededConsolidatedByDate: reconstructNeededConsolidatedByDate(occ),
    totalNeededConsolidated: reconstructTotalNeededConsolidated(occ),
    recipesOccurrences: reconstructRecipesOccurrences(occ)
  };
}

/**
 * Valide que le format compressé est correct
 */
export function validateCompressedFormat(data: any): data is CompressedOccurrence[] {
  if (!Array.isArray(data)) return false;

  return data.every(item =>
    typeof item === 'object' &&
    typeof item.r === 'string' &&  // recipeName
    typeof item.d === 'string' &&  // dateTimeService
    typeof item.q === 'number' &&  // quantity
    typeof item.u === 'string' &&  // unit
    typeof item.a === 'number'     // assiettes
  );
}
