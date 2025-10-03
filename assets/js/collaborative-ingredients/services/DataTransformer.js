/**
 * DataTransformer.js
 * Service pour transformer les données brutes en données formatées pour l'UI
 * Prépare les données pour les composants "stupides"
 */

import UnitsManager from '../UnitsManager.js';

export class DataTransformer {
  // Cache pour les données JSON parsées
  static _jsonCache = new Map();

  /**
   * Restructure les données pour le groupement multi-magasins
   * Chaque ingrédient avec plusieurs magasins apparaît dans chaque groupement de magasin
   */
  static restructureDataByStore(ingredients) {
    const restructured = [];

    ingredients.forEach(ingredient => {
      // Extraire les magasins individuels depuis storesDisplay
      const stores = this.extractStoresFromDisplay(ingredient.storesDisplay);

      if (stores.length === 0 || (stores.length === 1 && stores[0] === '-')) {
        // Ingrédient sans magasin spécifique
        restructured.push({
          ...ingredient,
          _currentStore: '-', // Pour le groupement
          _allStores: ingredient.storesDisplay // Pour l'affichage
        });
      } else {
        // Créer une entrée par magasin pour le groupement
        stores.forEach(store => {
          restructured.push({
            ...ingredient,
            _currentStore: store, // Pour le groupement
            _allStores: ingredient.storesDisplay // Pour l'affichage complet
          });
        });
      }
    });

    return restructured;
  }

  /**
   * Extrait la liste des magasins depuis un tableau ingredient.store
   */
  static extractStoresFromArray(storeArray) {
    if (!storeArray || !Array.isArray(storeArray) || storeArray.length === 0) {
      return [];
    }
    return storeArray.filter(s => s && s.trim().length > 0).map(s => s.trim());
  }

  /**
   * Extrait la liste des magasins depuis storesDisplay
   */
  static extractStoresFromDisplay(storesDisplay) {
    if (!storesDisplay || storesDisplay === '-' || storesDisplay.trim() === '') {
      return [];
    }
    return storesDisplay.split(',').map(s => s.trim()).filter(s => s.length > 0);
  }

  // Constantes pour la lisibilité
  static EMPTY_STORE = '-';
  static DEFAULT_OPTIONS = {
    enableMultiStoreGrouping: true,
    purchases: []
  };

  static transformForUI(ingredients, options = {}) {
     const { purchases = [], enableMultiStoreGrouping = true } = { ...this.DEFAULT_OPTIONS, ...options };
     const result = [];

     ingredients.forEach(ingredient => {
       // Extraire les magasins depuis ingredient.store (tableau)
       const stores = this.extractStoresFromArray(ingredient.store);
       const storesDisplay = stores.length > 0 ? stores.join(', ') : this.EMPTY_STORE;

       if (enableMultiStoreGrouping && stores.length > 0) {
         // Mode multi-magasin : créer une entrée par magasin
         stores.forEach(store => {
           const transformed = this._createTransformedIngredient(ingredient, storesDisplay, store, storesDisplay);
           result.push(transformed);
         });
       } else {
         // Mode normal ou ingrédient sans magasin : une seule entrée
         const currentStore = enableMultiStoreGrouping ? this.EMPTY_STORE : storesDisplay;
         const transformed = this._createTransformedIngredient(ingredient, storesDisplay, currentStore, storesDisplay);
         result.push(transformed);
       }
     });

     

     return result;
   }

   /**
    * Crée un objet ingrédient transformé pour l'UI
    */
   static _createTransformedIngredient(ingredient, storesDisplay, currentStore, allStores) {
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
       storesDisplay: storesDisplay,
       responsibleDisplay: this.formatResponsible(ingredient.purchases),

       // Propriétés pour le groupement multi-magasin
       _currentStore: currentStore,
       _allStores: allStores,

       // Données brutes et statut
       status: ingredient.overallStatus,
       stockReel: ingredient.stockReel,
       store: ingredient.store || [],
       who: ingredient.who || [],

       // Métadonnées
       isModified: ingredient.isModified || false,
     };

     // Ajouter les données de calcul détaillées pour les modales
     transformed.calculations = {
       recipeOccurrences: ingredient.recipeOccurrences || [],
       purchases: ingredient.purchases,
       balancePerUnit: ingredient.balancePerUnit || []
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
   * Formate le stock pour l'affichage
   */
   // #AI: TOCHECK when stockReel will used/implemented
  static formatStock(ingredient) {
    const stockReel = parseFloat(ingredient.stockReel) || 0;

    if (stockReel === 0) {
      return '0';
    }

    // Trouver l'unité principale depuis les besoins consolidés
    if (ingredient.totalNeededConsolidated?.length) {
      const mainUnit = ingredient.totalNeededConsolidated[0].unit;
      return `${this.formatValueWithUnit(stockReel)} ${mainUnit}`;
    }

    return `${this.formatValueWithUnit(stockReel)} unités`;
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
     * Formate la liste des magasins depuis les purchases.
     */
    static formatStores(purchases) {
      if (!purchases || purchases.length === 0) return '-';
      const stores = [...new Set(purchases.map(p => p.store).filter(Boolean))];
      return stores.join(', ') || '-';
    }

    /**
     * Formate la liste des magasins depuis ingredient.store.
     */
    static formatIngredientStores(store) {
      if (!store || store.length === 0) return '-';

      // Si store est déjà une chaîne de caractères
      if (typeof store === 'string') {
        return store.trim() || '-';
      }

      // Si store est un tableau
      if (Array.isArray(store)) {
        const stores = [...new Set(store.filter(Boolean))];
        return stores.join(', ') || '-';
      }

      // Si store est un objet avec une propriété spécifique
      if (typeof store === 'object' && store !== null) {
        // Adapter selon la structure réelle de ingredient.store
        const stores = Object.values(store).filter(Boolean);
        return stores.join(', ') || '-';
      }

      return '-';
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
