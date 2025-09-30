/**
 * UnitsManager.js
 * Module de gestion et conversion des unités pour les ingrédients
 * Gère les conversions, consolidations et calculs de quantités
 */

export class UnitsManager {
  constructor() {
    // Définition des unités et leurs conversions vers l'unité de base
    this.unitConversions = {
      // Poids (base: grammes)
      weight: {
        baseUnit: 'gr.',
        conversions: {
          'gr.': 1,
          'g': 1,
          'kg': 1000,
          'Kg': 1000
        }
      },

      // Volume (base: millilitres)
      volume: {
        baseUnit: 'ml',
        conversions: {
          'ml': 1,
          'l.': 1000,
          'L': 1000,
          'l': 1000
        }
      },

      // Mesures culinaires (base: millilitres pour les liquides)
      culinary: {
        baseUnit: 'ml',
        conversions: {
          'c. à café': 5,
          'c. à soupe': 15,
          'tasse': 250,
          'verre': 200
        }
      }
    };

    // Mapping des unités vers leur catégorie
    this.unitCategories = {};
    Object.entries(this.unitConversions).forEach(([category, config]) => {
      Object.keys(config.conversions).forEach(unit => {
        this.unitCategories[unit] = category;
      });
    });

    // Règles de conversion spéciales (contextuelles)
    // TODO [AI] : ajouter les autre conversion. Voir quantite-converter.html
    this.specialConversions = {
      // Miel: 1 c. à soupe = 30 gr.
      'miel': {
        'c. à soupe': { target: 'gr.', factor: 30 }
      },
      // Sucre: 1 c. à soupe = 15 gr.
      'sucre': {
        'c. à soupe': { target: 'gr.', factor: 15 }
      },
      // Sel: 1 c. à soupe = 15 gr.
      'sel': {
        'c. à soupe': { target: 'gr.', factor: 15 }
      },
      // Ail: 1 gousse = 6.5 gr., 1 tête = 80 gr.
      'ail': {
        'gousse·s': { target: 'gr.', factor: 6.5 },
        'tête·s': { target: 'gr.', factor: 80 }
      },
      // Légumes avec poids moyens
      'betterave rouge': {
        'unité': { target: 'gr.', factor: 250 }
      },
      'carotte': {
        'unité': { target: 'gr.', factor: 125 }
      },
      'orange': {
        'unité': { target: 'gr.', factor: 200 }
      }
    };
  }

  /**
   * Normalise une quantité vers son unité de base
   * @param {number} quantity - Quantité à convertir
   * @param {string} unit - Unité source
   * @param {string} ingredientName - Nom de l'ingrédient (pour conversions spéciales)
   * @returns {Object} { normalizedQuantity, baseUnit, category }
   */
  normalizeQuantity(quantity, unit, ingredientName = '') {
    if (!quantity || !unit) {
      return { normalizedQuantity: 0, baseUnit: unit || '', category: 'other' };
    }

    const numQuantity = parseFloat(quantity);
    const cleanUnit = unit.trim();
    const cleanIngredient = ingredientName.toLowerCase().trim();

    // Vérifier les conversions spéciales d'abord
    if (cleanIngredient && this.specialConversions[cleanIngredient]) {
      const specialRule = this.specialConversions[cleanIngredient][cleanUnit];
      if (specialRule) {
        return {
          normalizedQuantity: numQuantity * specialRule.factor,
          baseUnit: specialRule.target,
          category: this.getUnitCategory(specialRule.target),
          wasConverted: true,
          conversionRule: `1 ${cleanUnit} = ${specialRule.factor} ${specialRule.target}`
        };
      }
    }

    // Conversion standard
    const category = this.getUnitCategory(cleanUnit);
    if (category && category !== 'other') {
      const config = this.unitConversions[category];
      const conversionFactor = config.conversions[cleanUnit];

      if (conversionFactor) {
        return {
          normalizedQuantity: numQuantity * conversionFactor,
          baseUnit: config.baseUnit,
          category: category,
          wasConverted: conversionFactor !== 1
        };
      }
    }

    // Pas de conversion possible
    return {
      normalizedQuantity: numQuantity,
      baseUnit: cleanUnit,
      category: 'other'
    };
  }

  /**
   * Détermine la catégorie d'une unité
   * @param {string} unit - Unité à analyser
   * @returns {string} Catégorie ('weight', 'volume', 'culinary', 'other')
   */
  getUnitCategory(unit) {
    return this.unitCategories[unit] || 'other';
  }

  /**
   * Consolide plusieurs quantités de même catégorie
   * @param {Array} quantities - Array d'objets {value, unit, ingredientName?}
   * @returns {Array} Quantités consolidées par catégorie
   */
  consolidateQuantities(quantities) {
    const consolidated = {
      weight: 0,
      volume: 0,
      other: new Map()
    };

    quantities.forEach(item => {
      const normalized = this.normalizeQuantity(
        item.value,
        item.unit,
        item.ingredientName || ''
      );

      if (normalized.category === 'weight') {
        consolidated.weight += normalized.normalizedQuantity;
      } else if (normalized.category === 'volume') {
        consolidated.volume += normalized.normalizedQuantity;
      } else {
        const currentValue = consolidated.other.get(normalized.baseUnit) || 0;
        consolidated.other.set(normalized.baseUnit, currentValue + normalized.normalizedQuantity);
      }
    });

    return this.formatConsolidatedQuantities(consolidated);
  }

  /**
   * Formate les quantités consolidées pour l'affichage
   * @param {Object|Array} consolidated - Quantités consolidées (objet ou array)
   * @returns {Array} Quantités formatées {value, unit, formatted}
   */
  formatConsolidatedQuantities(consolidated) {
    // Si consolidated est un tableau, le convertir en objet consolidé
    if (Array.isArray(consolidated)) {
      const quantities = consolidated.map(item => ({
        value: item.value || 0,
        unit: item.unit || '',
        ingredientName: ''
      }));
      consolidated = this.consolidateQuantities(quantities);
    }

    // Si consolidated est undefined ou null, retourner un tableau vide
    if (!consolidated) {
      return [];
    }

    const result = [];

    // Formatter les poids
    if (consolidated.weight > 0) {
      const formatted = this.formatWeightForDisplay(consolidated.weight);
      result.push({
        value: formatted.value,
        unit: formatted.unit,
        formatted: `${formatted.value} ${formatted.unit}`,
        category: 'weight'
      });
    }

    // Formatter les volumes
    if (consolidated.volume > 0) {
      const formatted = this.formatVolumeForDisplay(consolidated.volume);
      result.push({
        value: formatted.value,
        unit: formatted.unit,
        formatted: `${formatted.value} ${formatted.unit}`,
        category: 'volume'
      });
    }

    // Formatter les autres unités
    if (consolidated.other && consolidated.other.forEach) {
      consolidated.other.forEach((value, unit) => {
        const rounded = this.roundToAppropriateDecimals(value, unit);
        result.push({
          value: rounded,
          unit: unit,
          formatted: `${rounded} ${unit}`,
          category: 'other'
        });
      });
    }

    return result;
  }

  /**
   * Formate un poids pour l'affichage (grammes -> kg si nécessaire)
   * @param {number} grams - Poids en grammes
   * @returns {Object} {value, unit}
   */
  formatWeightForDisplay(grams) {
    if (grams >= 1000) {
      return {
        value: this.roundToAppropriateDecimals(grams / 1000, 'kg'),
        unit: 'Kg'
      };
    } else {
      return {
        value: Math.round(grams),
        unit: 'gr.'
      };
    }
  }

  /**
   * Formate un volume pour l'affichage (ml -> l si nécessaire)
   * @param {number} ml - Volume en millilitres
   * @returns {Object} {value, unit}
   */
  formatVolumeForDisplay(ml) {
    if (ml >= 1000) {
      return {
        value: this.roundToAppropriateDecimals(ml / 1000, 'l'),
        unit: 'l.'
      };
    } else {
      return {
        value: Math.round(ml),
        unit: 'ml'
      };
    }
  }

  /**
   * Arrondit à un nombre approprié de décimales selon l'unité
   * @param {number} value - Valeur à arrondir
   * @param {string} unit - Unité pour déterminer la précision
   * @returns {number} Valeur arrondie
   */
  roundToAppropriateDecimals(value, unit = '') {
    const unitLower = unit.toLowerCase().trim();

    // 2 décimales pour les grandes unités (kg, l)
    if (unitLower === 'kg' || unitLower === 'l.' || unitLower === 'l') {
      return Math.round(value * 100) / 100;
    }
    // Nombres entiers pour les petites unités (gr, ml)
    else if (unitLower === 'gr.' || unitLower === 'ml') {
      return Math.round(value);
    }
    // 1 décimale pour les autres
    else {
      return Math.round(value * 10) / 10;
    }
  }

  /**
   * Calcule la somme de plusieurs quantités avec conversion automatique
   * @param {Array} quantities - Array d'objets {value, unit, ingredientName?}
   * @returns {Array} Totaux consolidés
   */
  calculateTotalQuantities(quantities) {
    if (!Array.isArray(quantities) || quantities.length === 0) {
      return [];
    }

    return this.consolidateQuantities(quantities);
  }

  /**
   * Vérifie si deux unités peuvent être additionnées
   * @param {string} unit1 - Première unité
   * @param {string} unit2 - Deuxième unité
   * @returns {boolean} True si les unités sont compatibles
   */
  areUnitsCompatible(unit1, unit2) {
    const category1 = this.getUnitCategory(unit1);
    const category2 = this.getUnitCategory(unit2);

    // Même catégorie = compatible
    if (category1 === category2 && category1 !== 'other') {
      return true;
    }

    // Unités identiques = compatible
    if (unit1 === unit2) {
      return true;
    }

    return false;
  }

  /**
   * Obtient les unités suggérées pour un type d'ingrédient
   * @param {string} ingredientType - Type d'ingrédient
   * @returns {Array} Liste des unités suggérées
   */
  getSuggestedUnits(ingredientType) {
    const suggestions = {
      'legumesFrais': ['kg', 'gr.', 'unité'],
      'frais': ['kg', 'gr.', 'l.', 'ml'],
      'sec': ['kg', 'gr.', 'l.', 'ml', 'unité'],
      'lof': ['kg', 'gr.', 'l.', 'ml'],
      'sucres': ['kg', 'gr.', 'l.', 'ml', 'unité'],
      'epices': ['kg', 'l.', 'ml', 'gr.', 'bottes', 'unité'],
      'animaux': ['kg', 'gr.', 'unité'],
      'autres': ['kg', 'gr.', 'l.', 'ml', 'unité']
    };

    return suggestions[ingredientType] || ['gr.', 'ml', 'unité'];
  }

  /**
   * Convertit une quantité vers une unité cible si possible
   * @param {number} quantity - Quantité source
   * @param {string} fromUnit - Unité source
   * @param {string} toUnit - Unité cible
   * @param {string} ingredientName - Nom de l'ingrédient
   * @returns {Object} {success, convertedQuantity, error?}
   */
  convertToUnit(quantity, fromUnit, toUnit, ingredientName = '') {
    try {
      // Normaliser d'abord vers l'unité de base
      const normalized = this.normalizeQuantity(quantity, fromUnit, ingredientName);

      // Si l'unité cible est la même que l'unité de base, on a terminé
      if (normalized.baseUnit === toUnit) {
        return {
          success: true,
          convertedQuantity: normalized.normalizedQuantity
        };
      }

      // Essayer de convertir vers l'unité cible
      const targetCategory = this.getUnitCategory(toUnit);
      if (targetCategory === normalized.category && targetCategory !== 'other') {
        const config = this.unitConversions[targetCategory];
        const targetFactor = config.conversions[toUnit];

        if (targetFactor) {
          return {
            success: true,
            convertedQuantity: normalized.normalizedQuantity / targetFactor
          };
        }
      }

      return {
        success: false,
        error: `Impossible de convertir de ${fromUnit} vers ${toUnit}`
      };

    } catch (error) {
      return {
        success: false,
        error: `Erreur de conversion: ${error.message}`
      };
    }
  }

  /**
   * Analyse une chaîne de quantité et d'unité
   * @param {string} quantityString - Chaîne à analyser (ex: "2.5 kg", "1 c. à soupe")
   * @returns {Object} {quantity, unit, isValid}
   */
  parseQuantityString(quantityString) {
    if (!quantityString || typeof quantityString !== 'string') {
      return { quantity: 0, unit: '', isValid: false };
    }

    const cleaned = quantityString.trim();

    // Regex pour extraire nombre et unité
    const match = cleaned.match(/^(\d+(?:[.,]\d+)?)\s*(.*)$/);

    if (match) {
      const quantity = parseFloat(match[1].replace(',', '.'));
      const unit = match[2].trim();

      return {
        quantity: isNaN(quantity) ? 0 : quantity,
        unit: unit,
        isValid: !isNaN(quantity)
      };
    }

    return { quantity: 0, unit: cleaned, isValid: false };
  }
}

// Instance singleton
export const unitsManager = new UnitsManager();

// Export par défaut
export default unitsManager;
