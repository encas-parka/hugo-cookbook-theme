import type { NeededConsolidatedByDate } from "../types/store.types";

/**
 * Calcule la quantité totale nécessaire sur une plage de dates
 * @param neededConsolidatedByDate - Tableau des besoins consolidés par date
 * @param firstDate - Date de début (format ISO)
 * @param lastDate - Date de fin (format ISO)
 * @returns La quantité totale pour la plage de dates
 */
export function calculateTotalNeededInRange(
  neededConsolidatedByDate: NeededConsolidatedByDate[],
  firstDate: string | null,
  lastDate: string | null
): number {
  if (!firstDate || !lastDate || !neededConsolidatedByDate.length) return 0;

  const start = new Date(firstDate);
  const end = new Date(lastDate);

  return neededConsolidatedByDate
    .filter(item => {
      const itemDate = new Date(item.dateTimeService);
      return itemDate >= start && itemDate <= end;
    })
    .reduce((sum, item) => {
      const quantity = Number(item.neededConsolidatedForDate[0]?.quantity || 0);
      return sum + quantity;
    }, 0);
}
