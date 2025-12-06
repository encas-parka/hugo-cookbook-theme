/**
 * Utilitaires pour la gestion des quantités dans les recettes
 * Conversion d'unités et formatage intelligent
 */

/**
 * Détermine la meilleure unité d'affichage pour une quantité donnée
 * Convertit automatiquement gr → Kg et ml → l quand approprié
 */
export function getBestDisplayUnit(
  quantity: number,
  baseUnit: string
): { quantity: number; unit: string } {
  if (baseUnit === "gr.") {
    return quantity >= 1000
      ? { quantity: quantity / 1000, unit: "Kg" }
      : { quantity, unit: "gr." };
  }
  if (baseUnit === "ml") {
    return quantity >= 1000
      ? { quantity: quantity / 1000, unit: "l." }
      : { quantity, unit: "ml" };
  }
  return { quantity, unit: baseUnit };
}

/**
 * Formate une quantité selon son unité
 * - Kg et l. : 2 décimales
 * - gr. et ml : arrondi à l'entier
 * - Autres : 1 décimale
 */
export function formatQuantity(qty: number, unit: string): number {
  switch (unit) {
    case "l.":
    case "Kg":
      return Math.round(qty * 100) / 100;
    case "ml":
    case "gr.":
      return Math.round(qty);
    default:
      return Math.round(qty * 10) / 10;
  }
}

/**
 * Calcule le facteur de scaling pour ajuster les quantités
 */
export function calculateScaleFactor(
  targetServings: number,
  defaultServings: number
): number {
  return targetServings / defaultServings;
}

/**
 * Scale une quantité d'ingrédient et retourne la meilleure unité d'affichage
 */
export function scaleIngredientQuantity(
  quantity: number,
  unit: string,
  scaleFactor: number
): { quantity: number; unit: string; formatted: number } {
  const scaledQty = quantity * scaleFactor;
  const { quantity: displayQty, unit: displayUnit } = getBestDisplayUnit(
    scaledQty,
    unit
  );
  const formatted = formatQuantity(displayQty, displayUnit);

  return {
    quantity: displayQty,
    unit: displayUnit,
    formatted,
  };
}
