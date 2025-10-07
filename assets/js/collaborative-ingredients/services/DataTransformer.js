/**
 * DataTransformer.js
 * Service pour transformer les données brutes en données formatées pour l'UI
 * Prépare les données pour les composants "stupides"
 */

import UnitsManager from '../UnitsManager.js';

export class DataTransformer {
  // Cache pour les transformations complètes (ingrédient + achats hash → résultat)
  static _transformationCache = new Map();

  // Constantes pour la lisibilité
  static EMPTY_STORE = '-';
  static DEFAULT_OPTIONS = {
    purchases: []
  };

  /**
   * Crée un ingrédient complètement transformé avec calculs intégrés
   * @param {Object} ingredient - Ingrédient brut depuis Appwrite
   * @param {Array} allPurchases - Tous les achats disponibles
   * @param {Object} options - Options de transformation
   * @returns {Object} - Ingrédient complètement transformé
   */
  static createCompleteIngredient(ingredient, allPurchases = [], options = {}) {
    // 1. Préparer les données de base avec parsing
    const parsedIngredient = this._parseIngredientData(ingredient);

    // 2. Ajouter les achats (y compris ceux des ingrédients fusionnés)
    const ingredientWithPurchases = this._addPurchasesToIngredient(parsedIngredient, allPurchases);

    // 3. Calculer la balance et le statut
    const balancedIngredient = this._calculateIngredientBalance(ingredientWithPurchases);

    // 4. Transformer pour l'UI avec tous les champs nécessaires
    const storeValue = balancedIngredient.store || '';
    const storeDisplay = storeValue.trim() || this.EMPTY_STORE;

    const result = this._createTransformedIngredient(balancedIngredient, storeDisplay);

    // 5. Mettre en cache le résultat avec une stratégie d'éviction intelligente
    const cacheKey = this._generateTransformationCacheKey(ingredient, allPurchases);
    this._cacheWithLRU(this._transformationCache, cacheKey, result, 500);

    return result;
  }

  /**
   * Transforme un tableau d'ingrédients avec la méthode complète
   */
  static transformAllForUI(ingredients, allPurchases = [], options = {}) {
    if (!ingredients || !Array.isArray(ingredients)) {
      return [];
    }

    return ingredients.map(ingredient =>
      this.createCompleteIngredient(ingredient, allPurchases, options)
    );
  }

  /**
   * Parse les données JSON d'un ingrédient
   */
  static _parseIngredientData(ingredient) {
    return {
      ...ingredient,
      totalNeededConsolidated: this._parseJsonString(ingredient.totalNeededConsolidated),
      totalNeededRaw: this._parseJsonString(ingredient.totalNeededRaw),
      recipeOccurrences: (ingredient.recipeOccurrences || [])
        .map(this._parseJsonString)
        .filter(Boolean)
    };
  }

  /**
   * Ajoute les achats à un ingrédient en gérant les fusions
   */
  static _addPurchasesToIngredient(ingredient, allPurchases) {
    let ingredientPurchases = allPurchases.filter(p => p.listIngredient?.$id === ingredient.$id);

    // Si l'ingrédient est fusionné, ajouter les achats de ses composants
    if (ingredient.isMerged && Array.isArray(ingredient.mergedFrom)) {
      const mergedFromIds = ingredient.mergedFrom
        .filter(merged => merged && merged.$id)
        .map(merged => merged.$id);

      const mergedPurchases = allPurchases.filter(p =>
        p.listIngredient && mergedFromIds.includes(p.listIngredient)
      );

      ingredientPurchases = [...ingredientPurchases, ...mergedPurchases];
    }

    return {
      ...ingredient,
      purchases: ingredientPurchases
    };
  }

  /**
   * Calcule la balance pour un ingrédient
   */
  static _calculateIngredientBalance(ingredient) {
    const stockReel = parseFloat(ingredient.stockReel) || 0;

    // Calculer la balance par catégorie d'unité
    const balancePerUnit = this._calculateBalancePerUnit(
      ingredient.totalNeededConsolidated,
      ingredient.purchases,
      stockReel
    );

    // Déterminer le statut global
    const overallStatus = this._determineOverallStatus(balancePerUnit);

    return {
      ...ingredient,
      stockReel,
      balancePerUnit,
      overallStatus,
      status: overallStatus
    };
  }

  /**
   * Calcule la balance par unité
   */
  static _calculateBalancePerUnit(needed = [], purchases = [], stock = 0) {
    const quantitiesByUnit = {};

    // S'assurer que needed et purchases sont des tableaux
    if (!Array.isArray(needed)) needed = [];
    if (!Array.isArray(purchases)) purchases = [];

    // 1. Agréger les besoins
    needed.forEach(item => {
      const { value, unit } = this._standardizeQuantity(item.value, item.unit);
      if (!quantitiesByUnit[unit]) {
        quantitiesByUnit[unit] = { needed: 0, purchased: 0 };
      }
      quantitiesByUnit[unit].needed += value;
    });

    // 2. Agréger les achats
    purchases.forEach(purchase => {
      const { value, unit } = this._standardizeQuantity(purchase.quantity, purchase.unit);
      if (!quantitiesByUnit[unit]) {
        quantitiesByUnit[unit] = { needed: 0, purchased: 0 };
      }
      quantitiesByUnit[unit].purchased += value;
    });

    // 3. Calculer la balance pour chaque unité
    return Object.entries(quantitiesByUnit).map(([unit, data]) => {
      const balance = data.purchased - data.needed;
      return {
        unit,
        needed: data.needed,
        purchased: data.purchased,
        balance,
        status: this._determineUnitStatus(balance, data.needed)
      };
    });
  }

  /**
   * Détermine le statut global à partir des balances par unité
   */
  static _determineOverallStatus(balancePerUnit) {
    if (balancePerUnit.length === 0) return 'unused';
    if (balancePerUnit.some(cat => cat.status === 'missing')) return 'missing';
    if (balancePerUnit.some(cat => cat.status === 'partial')) return 'partial';
    return 'sufficient';
  }

  /**
   * Détermine le statut pour une seule unité
   */
  static _determineUnitStatus(balance, totalNeeded) {
    if (totalNeeded === 0 && balance > 0) return 'sufficient';
    if (totalNeeded === 0) return 'unused';
    if (balance >= 0) return 'sufficient';
    if (Math.abs(balance) < totalNeeded * 0.1) return 'partial';
    return 'missing';
  }

  /**
   * Standardise les unités de poids et volume
   */
  static _standardizeQuantity(value, unit) {
    const numValue = parseFloat(value) || 0;
    if (unit.toLowerCase() === 'kg') {
      return { value: numValue * 1000, unit: 'gr.' };
    }
    if (unit === 'l.') {
      return { value: numValue * 1000, unit: 'ml' };
    }
    return { value: numValue, unit: unit || 'rec.' };
  }

  /**
   * Parse une chaîne JSON de manière sécurisée
   */
  static _parseJsonString(jsonString) {
    if (!jsonString || typeof jsonString !== 'string') return jsonString;
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      return [];
    }
  }

  /**
   * Génère une clé de cache pour la transformation d'un ingrédient
   */
  static _generateTransformationCacheKey(ingredient, allPurchases) {
    // Hash basé sur l'ID de l'ingrédient, sa date de modification et les achats
    const ingredientData = `${ingredient.$id}_${ingredient.$updatedAt}_${JSON.stringify(ingredient.totalNeededConsolidated)}`;
    const purchasesData = allPurchases
      .filter(p => p.listIngredient?.$id === ingredient.$id)
      .map(p => `${p.$id}_${p.quantity}_${p.unit}`)
      .sort()
      .join('|');

    return `${ingredientData}_${purchasesData}`;
  }

  /**
   * Cache avec stratégie LRU (Least Recently Used) simple
   * @param {Map} cache - Le cache à utiliser
   * @param {string} key - La clé de cache
   * @param {*} value - La valeur à mettre en cache
   * @param {number} maxSize - Taille maximale du cache
   */
  static _cacheWithLRU(cache, key, value, maxSize = 500) {
    // Si la clé existe déjà, la supprimer pour la mettre à jour (LRU)
    if (cache.has(key)) {
      cache.delete(key);
    }

    // Si le cache est plein, supprimer l'élément le plus ancien
    if (cache.size >= maxSize) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    cache.set(key, value);
  }

  /**
   * Vide les caches (utile pour les tests ou quand l'espace est limité)
   */
  static clearAllCaches() {
    this._transformationCache.clear();
  }

  /**
   * Retourne des statistiques sur l'utilisation des caches
   */
  static getCacheStats() {
    return {
      transformationCache: this._transformationCache.size,
      totalMemoryEstimate: this._transformationCache.size
    };
  }

  /**
   * Calcule les quantités consolidées pour la fusion d'ingrédients
   * @param {Array} ingredients - Ingrédients à fusionner
   * @param {Array} allPurchases - Tous les achats disponibles
   * @returns {Array} - Quantités consolidées [{ value, unit, type }, ...]
   */
  static calculateMergedQuantities(ingredients, allPurchases = []) {
    if (!ingredients || !Array.isArray(ingredients)) {
      return [];
    }

    const allQuantities = [];

    ingredients.forEach(ingredient => {
      // Ajouter les achats de cet ingrédient
      const ingredientPurchases = allPurchases.filter(p =>
        p.listIngredient === ingredient.$id ||
        (ingredient.mergedFrom && ingredient.mergedFrom.includes(p.listIngredient))
      );

      ingredientPurchases.forEach(purchase => {
        allQuantities.push({
          value: purchase.quantity,
          unit: purchase.unit,
          type: 'purchase'
        });
      });

      // Ajouter les besoins consolidés
      if (ingredient.totalNeededConsolidated && Array.isArray(ingredient.totalNeededConsolidated)) {
        ingredient.totalNeededConsolidated.forEach(need => {
          allQuantities.push({
            value: need.value,
            unit: need.unit,
            type: 'need'
          });
        });
      }
    });

    // Consolider par unité et type
    const consolidated = {};

    allQuantities.forEach(item => {
      const key = `${item.unit}_${item.type}`;
      if (!consolidated[key]) {
        consolidated[key] = {
          value: 0,
          unit: item.unit,
          type: item.type
        };
      }
      consolidated[key].value += parseFloat(item.value) || 0;
    });

    return Object.values(consolidated);
  }


   /**
    * Crée un objet ingrédient transformé pour l'UI
    */
   static _createTransformedIngredient(ingredient, storeDisplay) {
     const transformed = {
       // Données de base
       $id: ingredient.$id,
       ingredientUuid: ingredient.ingredientUuid,
       ingredientName: ingredient.ingredientName,
       ingType: ingredient.ingType,

       // Propriétés d'affichage
       typeDisplay: this.formatType(ingredient.ingType),
       totalNeedDisplay: this.formatConsolidatedQuantities(ingredient.totalNeededConsolidated),
       purchasesDisplay: this.formatPurchases(ingredient.purchases),
       balanceDisplay: this.formatBalancePerUnit(ingredient.balancePerUnit),
       balanceClass: this.getBalanceClass(ingredient.overallStatus),
       storeDisplay: storeDisplay,
       responsibleDisplay: this.formatResponsible(ingredient.purchases),

       // Données brutes et statut
       status: ingredient.overallStatus,
       stockReel: ingredient.stockReel,
       store: storeDisplay === this.EMPTY_STORE ? '' : storeDisplay, // Toujours une string
       who: ingredient.who || [],

       // Données brutes pour les calculs et modales (structure aplatie)
       totalNeededConsolidated: ingredient.totalNeededConsolidated || [],
       recipeOccurrences: ingredient.recipeOccurrences || [],
       purchases: ingredient.purchases || [],
       balancePerUnit: ingredient.balancePerUnit || [],

       // Métadonnées
       isModified: ingredient.isModified || false,

       // Propriétés de fusion et nature de produit
       isMerged: ingredient.isMerged || false,
       mergedFrom: ingredient.mergedFrom || [],
       pFrais: ingredient.pFrais || false,
       pSurgel: ingredient.pSurgel || false,
     };

     return transformed;
   }

  /**
   * Formate le type d'ingrédient pour l'affichage
   */
  static formatType(type) {
    const typeMap = {
      'frais': 'Produits Frais',
      'legumesFrais': 'Fruits et Légumes',
      'legumesNonFrais': 'Conserves',
      'lof': 'LOF',
      'sucres': 'Sucrés',
      'epices': 'Assaisonnements',
      'sec': 'Produits Secs',
      'animaux': 'Viandes et Poissons',
      'autres': 'Autres'
    };
    return typeMap[type] || type;
  }

  /**
   * Formate les quantités consolidées pour l'affichage
   */
  static formatConsolidatedQuantities(consolidated) {
    if (!consolidated || !Array.isArray(consolidated) || consolidated.length === 0) {
      return '0';
    }

    return consolidated
          .map(item => this.formatValueWithUnit(item.value, item.unit))
          .join(' + ');
  }

  /**
   * Formate la balance par unité
   */
  static formatBalancePerUnit(balancePerUnit) {
    if (!balancePerUnit || balancePerUnit.length === 0) return '0';

    return balancePerUnit
        .map(item => {
          // Préfixe le signe '+' pour les balances positives non nulles
          const prefix = item.balance > 0 ? '+' : '';
          return prefix + this.formatValueWithUnit(item.balance, item.unit);
        })
        .join(' & ');
    }

  /**
     * Formate une valeur numérique avec son unité selon des règles métier précises.
     * Gère la conversion (gr->kg, ml->l) et l'arrondi.
     * @param {number} value - La valeur numérique.
     * @param {string} unit - L'unité.
     * @returns {string} - La chaîne de caractères formatée, ex: "1.25 kg".
     */
    static formatValueWithUnit(value, unit) {
      let numValue = parseFloat(value) || 0;
      let currentUnit = unit;

      if (numValue === 0 && !unit) return '0';
      if (numValue === 0) return `0 ${unit}`;

      // 1. Conversion des unités si nécessaire
      if (currentUnit === 'gr.' && numValue >= 1000) {
        numValue /= 1000;
        currentUnit = 'kg';
      } else if (currentUnit === 'ml' && numValue >= 1000) {
        numValue /= 1000;
        currentUnit = 'l.';
      }

      // 2. Arrondi selon la nouvelle unité
      let formattedValue;
      switch (currentUnit) {
        case 'kg':
        case 'l.':
        // arrondie 2 décimales
        formattedValue = (Math.round(numValue * 100) / 100).toFixed(2);
          break;
        case 'gr.':
        case 'ml':
        // arrondie à l'unité
          formattedValue = Math.round(numValue).toString();
          break;
        default: // Autres unités → une décimale
        formattedValue = (Math.round(numValue * 10) / 10).toFixed(2);
          break;
      }
    // Supprimer les zéros décimaux inutiles (ex: "1.50" -> "1.5", "2.0" -> "2")
      if (formattedValue.includes('.')) {
          formattedValue = formattedValue.replace(/\.?0+$/, '');
      }

      return `${formattedValue} ${currentUnit}`;
    }

  /**
   * Détermine la classe CSS pour le bilan
   */
  static getBalanceClass(status) {
    switch (status) {
      case 'sufficient': return 'quantity-positive';
      case 'missing': return 'quantity-negative';
      case 'partial': return 'quantity-neutral';
      case 'unused': return 'quantity-neutral';
      default: return 'quantity-neutral';
    }
  }



  /**
  * Formate les achats groupés par unité pour l'affichage.
   */
  static formatPurchases(purchases) {
    if (!purchases || purchases.length === 0) return '0';

        const purchasesByUnit = {};
        purchases.forEach(p => {
          const unit = p.unit || '?';
          if (!purchasesByUnit[unit]) purchasesByUnit[unit] = 0;
          purchasesByUnit[unit] += parseFloat(p.quantity) || 0;
        });

        return Object.entries(purchasesByUnit)
          .map(([unit, total]) => this.formatValueWithUnit(total, unit))
          .join(' + ');
    }




    /**
     * Formate la liste des responsables.
     */
    static formatResponsible(purchases) {
      if (!purchases || purchases.length === 0) return '-';
      const people = [...new Set(purchases.map(p => p.who).filter(Boolean))];
      return people.join(', ') || '-';
    }

}
