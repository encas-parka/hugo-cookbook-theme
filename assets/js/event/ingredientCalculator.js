/**
 * ingredientCalculator.js for event
 * Pure functions for ingredient calculations extracted from the Vue component
 * Following SOLID principles: Single Responsibility for calculations
 */

/**
 * Normalize ingredient quantity to base units
 * @param {Object} item - Ingredient item with quantite and unit
 * @returns {Object} { normalizedQuantity, baseUnit, displayUnitCategory }
 */
export function normalizeIngredientQuantity(item) {
  let normalizedQuantity = item.quantite || 0;
  let baseUnit = item.unit || "?";
  let displayUnitCategory = "other";

  const unit = (item.unit || "").toLowerCase().trim();
  if (unit === "gr.") {
    displayUnitCategory = "weight";
    baseUnit = "gr.";
  } else if (unit === "kg") {
    normalizedQuantity *= 1000;
    displayUnitCategory = "weight";
    baseUnit = "gr.";
  } else if (unit === "ml") {
    displayUnitCategory = "volume";
    baseUnit = "ml";
  } else if (unit === "l.") {
    normalizedQuantity *= 1000;
    displayUnitCategory = "volume";
    baseUnit = "ml";
  }

  return { normalizedQuantity, baseUnit, displayUnitCategory };
}

/**
 * Format normalized quantity for display
 * @param {number} totalQuantity - Quantity in base units
 * @param {string} unitCategory - 'weight' or 'volume'
 * @returns {Object} { value, unit }
 */
export function formatNormalizedQuantity(totalQuantity, unitCategory) {
  if (unitCategory === "weight") {
    if (totalQuantity >= 1000) {
      return {
        value: parseFloat((totalQuantity / 1000).toFixed(2)),
        unit: "Kg",
      };
    } else {
      return { value: Math.round(totalQuantity), unit: "gr." };
    }
  } else if (unitCategory === "volume") {
    if (totalQuantity >= 1000) {
      return {
        value: parseFloat((totalQuantity / 1000).toFixed(2)),
        unit: "l.",
      };
    } else {
      return { value: Math.round(totalQuantity), unit: "ml" };
    }
  }
  return { value: totalQuantity, unit: "unité" };
}

/**
 * Round quantity based on unit type
 * @param {number} x - Quantity to round
 * @param {string} unit - Unit type
 * @returns {number} Rounded quantity
 */
export function roundQuantityByUnit(x, unit = '') {
  const num = parseFloat(x);
  if (isNaN(num)) {
    return x;
  }

  const unitLower = unit.toLowerCase().trim();
  if (unitLower === 'kg' || unitLower === 'l.' || unitLower === 'l') {
    return Math.round(num * 100) / 100;
  } else if (unitLower === 'gr.' || unitLower === 'ml') {
    return Math.round(num);
  } else {
    return Math.round(num * 10) / 10;
  }
}

/**
 * Process and aggregate ingredients from a list
 * @param {Array} ingredientItems - Array of ingredient items
 * @param {Object} options - Processing options
 * @param {boolean} options.useStandardized - Use standardized quantities when available
 * @param {boolean} options.includeOriginalQuantities - Include original quantities for transparent display
 * @returns {Array} Processed and aggregated ingredients
 */
export function processIngredients(ingredientItems, options = {}) {
  const { useStandardized = true, includeOriginalQuantities = false } = options;
  const totals = {};

  ingredientItems.forEach(item => {
    const ingredientName = item.ingredient;

    if (!totals[ingredientName]) {
      totals[ingredientName] = {
        ingredient: ingredientName,
        iType: item.iType || item.ingredientType,
        totalAssiettes: 0,
        totalRecettes: 0,
        _normalizedQuantities: {
          weight: 0,
          volume: 0,
          other: new Map(),
        },
        _originalQuantities: new Map(),
      };
    }

    const currentIngredient = totals[ingredientName];
    currentIngredient.totalAssiettes += item.assiettes || 0;
    currentIngredient.totalRecettes += 1;

    // Stocker les quantités originales pour le total transparent
    const originalUnit = item.unit || '';
    const originalQuantity = parseFloat(item.quantite) || 0;

    // Pour l'affichage transparent, on stocke TOUJOURS les quantités originales
    const currentOriginalTotal = currentIngredient._originalQuantities.get(originalUnit) || 0;
    currentIngredient._originalQuantities.set(originalUnit, currentOriginalTotal + originalQuantity);

    // Use standardized or normalized quantities
    let quantity, unit;
    if (useStandardized && item.quantiteEq && item.unitEq) {
      quantity = parseFloat(item.quantiteEq) || 0;
      unit = item.unitEq;
    } else {
      const normalized = normalizeIngredientQuantity(item);
      quantity = normalized.normalizedQuantity;
      unit = normalized.baseUnit;
    }

    // Normalize to base units for addition
    const unitLower = unit.toLowerCase();
    if (unitLower === 'kg' || unitLower === 'gr.' || unitLower === 'g') {
      const weightInGrams = unitLower === 'kg' ? quantity * 1000 : quantity;
      currentIngredient._normalizedQuantities.weight += weightInGrams;
    } else if (unitLower === 'l.' || unitLower === 'l' || unitLower === 'ml') {
      const volumeInMl = unitLower === 'l.' || unitLower === 'l' ? quantity * 1000 : quantity;
      currentIngredient._normalizedQuantities.volume += volumeInMl;
    } else {
      const currentOtherTotal = currentIngredient._normalizedQuantities.other.get(unit) || 0;
      currentIngredient._normalizedQuantities.other.set(unit, currentOtherTotal + quantity);
    }
  });

  // Format totals for display
  return Object.values(totals).map(item => {
    const formattedQuantities = [];
    const originalQuantities = [];

    // Format normalized quantities
    if (item._normalizedQuantities.weight > 0) {
      const formatted = formatNormalizedQuantity(item._normalizedQuantities.weight, 'weight');
      formattedQuantities.push({ qTotal: formatted.value, unit: formatted.unit });
    }

    if (item._normalizedQuantities.volume > 0) {
      const formatted = formatNormalizedQuantity(item._normalizedQuantities.volume, 'volume');
      formattedQuantities.push({ qTotal: formatted.value, unit: formatted.unit });
    }

    // Format other units
    item._normalizedQuantities.other.forEach((total, unit) => {
      formattedQuantities.push({ qTotal: roundQuantityByUnit(total, unit), unit });
    });

    // Format original quantities for transparent display
    item._originalQuantities.forEach((total, unit) => {
      originalQuantities.push({ qTotal: roundQuantityByUnit(total, unit), unitTotal: unit });
    });

    const result = {
      ingredient: item.ingredient,
      iType: item.iType,
      totalAssiettes: item.totalAssiettes,
      totalRecettes: item.totalRecettes,
      qTotalX: formattedQuantities,
    };

    // Ajouter les quantités originales si demandé
    if (includeOriginalQuantities) {
      result.qTotalXOriginal = originalQuantities;
    }

    return result;
  }).sort((a, b) => a.ingredient.localeCompare(b.ingredient));
}

/**
 * Process ingredient details for modal display
 * @param {Array} ingredientDetails - Array of ingredient detail items
 * @returns {Object} { standardizedTotal, transparentTotal }
 */
export function processIngredientDetails(ingredientDetails) {
  const normalizedTotals = {
    weight: 0,
    volume: 0,
    other: new Map(),
  };

  const transparentTotals = {
    weight: 0,
    volume: 0,
    other: new Map(),
  };

  ingredientDetails.forEach(detail => {
    // Process standardized quantities
    let quantity, unit;
    if (detail.quantiteEq && detail.unitEq) {
      quantity = parseFloat(detail.quantiteEq) || 0;
      unit = detail.unitEq;
    } else {
      const normalized = normalizeIngredientQuantity(detail);
      quantity = normalized.normalizedQuantity;
      unit = normalized.baseUnit;
    }

    if (quantity > 0) {
      const unitLower = unit.toLowerCase().trim();
      if (unitLower === 'gr.' || unitLower === 'g') {
        normalizedTotals.weight += quantity;
      } else if (unitLower === 'kg') {
        normalizedTotals.weight += quantity * 1000;
      } else if (unitLower === 'ml') {
        normalizedTotals.volume += quantity;
      } else if (unitLower === 'l.' || unitLower === 'l') {
        normalizedTotals.volume += quantity * 1000;
      } else {
        const currentTotal = normalizedTotals.other.get(unit) || 0;
        normalizedTotals.other.set(unit, currentTotal + quantity);
      }
    }

    // Process transparent (original) quantities
    const originalUnit = detail.unit || '?';
    const originalQuantity = parseFloat(detail.quantite) || 0;
    if (originalQuantity > 0) {
      const originalUnitLower = originalUnit.toLowerCase().trim();
      if (originalUnitLower === 'gr.' || originalUnitLower === 'g') {
        transparentTotals.weight += originalQuantity;
      } else if (originalUnitLower === 'kg') {
        transparentTotals.weight += originalQuantity * 1000;
      } else if (originalUnitLower === 'ml') {
        transparentTotals.volume += originalQuantity;
      } else if (originalUnitLower === 'l.' || originalUnitLower === 'l') {
        transparentTotals.volume += originalQuantity * 1000;
      } else {
        const currentTotal = transparentTotals.other.get(originalUnit) || 0;
        transparentTotals.other.set(originalUnit, currentTotal + originalQuantity);
      }
    }
  });

  // Format standardized totals
  const standardizedTotal = [];
  if (normalizedTotals.weight > 0) {
    const formatted = formatNormalizedQuantity(normalizedTotals.weight, 'weight');
    standardizedTotal.push({ qTotal: formatted.value, unit: formatted.unit });
  }
  if (normalizedTotals.volume > 0) {
    const formatted = formatNormalizedQuantity(normalizedTotals.volume, 'volume');
    standardizedTotal.push({ qTotal: formatted.value, unit: formatted.unit });
  }
  normalizedTotals.other.forEach((total, unit) => {
    standardizedTotal.push({ qTotal: roundQuantityByUnit(total, unit), unit });
  });

  // Format transparent totals
  const transparentTotal = [];
  if (transparentTotals.weight > 0) {
    const formatted = formatNormalizedQuantity(transparentTotals.weight, 'weight');
    transparentTotal.push({ qTotal: formatted.value, unit: formatted.unit });
  }
  if (transparentTotals.volume > 0) {
    const formatted = formatNormalizedQuantity(transparentTotals.volume, 'volume');
    transparentTotal.push({ qTotal: formatted.value, unit: formatted.unit });
  }
  transparentTotals.other.forEach((total, unit) => {
    transparentTotal.push({ qTotal: roundQuantityByUnit(total, unit), unit });
  });

  return { standardizedTotal, transparentTotal };
}

/**
 * Check if any ingredient detail has conversion
 * @param {Array} ingredientDetails - Array of ingredient detail items
 * @returns {boolean} True if any detail has conversion
 */
export function hasAnyConversion(ingredientDetails) {
  return ingredientDetails.some(detail => detail.hasConversion === true);
}

/**
 * Format quantity for detail display
 * @param {Object} detailItem - Ingredient detail item
 * @returns {string} Formatted quantity string
 */
export function formatDetailQuantity(detailItem) {
  const { normalizedQuantity, baseUnit, displayUnitCategory } = normalizeIngredientQuantity(detailItem);

  if (displayUnitCategory === "weight" || displayUnitCategory === "volume") {
    const { value, unit } = formatNormalizedQuantity(normalizedQuantity, displayUnitCategory);
    return `${value} ${unit}`;
  } else {
    const val = parseFloat(detailItem.quantite) || 0;
    const unit = detailItem.unit || "";
    return `${roundQuantityByUnit(val, unit)} ${unit}`;
  }
}

/**
 * Format type name for short display
 * @param {string} type - Ingredient type
 * @returns {string} Formatted type name
 */
export function formatTypeShort(type) {
  const typeMap = {
    "frais": "Produits Frais",
    "legumesFrais": "Fruits et Légumes Frais",
    "legumesNonFrais": "Fruits et Légumes Conserve/sec",
    "lof": "LOF",
    "sucres": "Sucrés",
    "epices": "Assaisonnements",
    "sec": "Produits Secs",
    "animaux": "Viandes et Poissons",
    "autres": "Autres",
  };

  return typeMap[type] || type;
}
