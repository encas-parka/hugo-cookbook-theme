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
   * Transforme les ingrédients calculés en données UI prêtes à l'emploi
   */
  static transformForUI(ingredients, options = {}) {
    const { 
      includeCalculations = true,
      purchases = [],
      unitsManager = null 
    } = options;

    // Nettoyer le cache périodiquement
    if (this._jsonCache.size > 1000) {
      this._jsonCache.clear();
    }

    return ingredients.map(ingredient => {
      // Intégrer les achats dans l'ingrédient
      const ingredientWithPurchases = {
        ...ingredient,
        purchases: purchases.filter(p => p.listIngredient === ingredient.$id)
      };

      const transformed = {
        // Données de base
        $id: ingredient.$id,
        ingredientUuid: ingredient.ingredientUuid,
        ingredientName: ingredient.ingredientName,
        ingType: ingredient.ingType,

        // Display properties
        typeDisplay: this.formatType(ingredient.ingType),
        totalNeedDisplay: this.formatTotalNeed(ingredientWithPurchases),
        stockDisplay: this.formatStock(ingredientWithPurchases),
        purchasesDisplay: this.formatPurchases(ingredientWithPurchases),
        balanceDisplay: this.formatBalance(ingredientWithPurchases),
        balanceClass: this.getBalanceClass(ingredientWithPurchases),
        storesDisplay: this.formatStores(ingredientWithPurchases),
        responsibleDisplay: this.formatResponsible(ingredientWithPurchases),

        // Données brutes pour les calculs
        totalNeeded: ingredient.totalNeeded,
        totalNeededRaw: ingredient.totalNeededRaw,
        stockReel: ingredient.stockReel,
        totalPurchased: ingredient.totalPurchased,
        balance: ingredient.balance,
        status: ingredient.status,

        // Métadonnées
        isModified: ingredient.isModified || false,
        lastModified: ingredient.lastModified || null
      };

      // Ajouter les données de calcul si demandé
      if (includeCalculations) {
        transformed.calculations = {
          totalNeededConsolidated: this.parseAndCacheJson(ingredient.totalNeededConsolidated, `tnc_${ingredient.$id}`),
          totalPurchasedConsolidated: this.parseAndCacheJson(ingredient.totalPurchasedConsolidated, `tpc_${ingredient.$id}`),
          originalData: {
            ...ingredient.originalData,
            recipeOccurrences: this.parseRecipeOccurrences(ingredient.recipeOccurrences)
          },
          purchases: ingredientWithPurchases.purchases
        };
      }

      return transformed;
    });
  }

  /**
   * Parse les occurrences de recettes depuis les données Appwrite
   */
  static parseRecipeOccurrences(recipeOccurrences) {
    if (!recipeOccurrences || !Array.isArray(recipeOccurrences)) {
      return [];
    }

    return recipeOccurrences.map(occurrenceStr => {
      try {
        return JSON.parse(occurrenceStr);
      } catch (error) {
        console.warn('[DataTransformer] Erreur parsing recipe occurrence:', error);
        return null;
      }
    }).filter(Boolean);
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
   * Parse et met en cache les données JSON pour éviter les parsing répétitifs
   */
  static parseAndCacheJson(data, cacheKey) {
    if (!data) return [];
    
    // Vérifier le cache
    if (this._jsonCache.has(cacheKey)) {
      return this._jsonCache.get(cacheKey);
    }
    
    // Parser les données
    let parsedData;
    if (typeof data === 'string') {
      try {
        parsedData = JSON.parse(data);
      } catch (error) {
        console.warn(`[DataTransformer] Erreur parsing JSON pour ${cacheKey}:`, error);
        return [];
      }
    } else {
      parsedData = data;
    }
    
    // S'assurer que c'est un tableau
    if (!Array.isArray(parsedData)) {
      parsedData = [parsedData];
    }
    
    // Mettre en cache
    this._jsonCache.set(cacheKey, parsedData);
    
    return parsedData;
  }

  /**
   * Formate le besoin total pour l'affichage
   */
  static formatTotalNeed(ingredient) {
    const consolidatedData = this.parseAndCacheJson(
      ingredient.totalNeededConsolidated, 
      `tnc_${ingredient.$id}`
    );
    
    if (!consolidatedData.length) {
      return '0';
    }

    // Utiliser UnitsManager pour formater les quantités consolidées
    // Les données d'Appwrite sont déjà au format [{value, unit, category}]
    const formattedQuantities = consolidatedData.map(item => ({
      value: item.value,
      unit: item.unit,
      formatted: `${item.value} ${item.unit}`,
      category: item.category
    }));

    // Joindre les quantités formatées
    return formattedQuantities.map(q => q.formatted).join(' + ') || '0';
  }

  /**
   * Formate le stock pour l'affichage
   */
  static formatStock(ingredient) {
    const stockReel = parseFloat(ingredient.stockReel) || 0;

    if (stockReel === 0) {
      return '0';
    }

    // Trouver l'unité principale depuis les besoins
    const mainUnit = this.getMainUnit(ingredient);

    return `${stockReel} ${mainUnit}`;
  }

  /**
   * Formate les achats pour l'affichage
   */
  static formatPurchases(ingredient) {
    // Si l'ingrédient a des achats directement attachés, les utiliser
    if (ingredient.purchases?.length) {
      const totalPurchased = ingredient.purchases.reduce((sum, purchase) => {
        return sum + (parseFloat(purchase.quantity) || 0);
      }, 0);
      
      if (totalPurchased > 0) {
        const mainUnit = this.getMainUnit(ingredient);
        return `${totalPurchased} ${mainUnit}`;
      }
    }
    
    // Sinon, utiliser les données consolidées
    const consolidatedData = this.parseAndCacheJson(
      ingredient.totalPurchasedConsolidated, 
      `tpc_${ingredient.$id}`
    );
    
    if (!consolidatedData.length) {
      return '0';
    }

    // Les données d'Appwrite sont déjà au format [{value, unit, category}]
    const formattedQuantities = consolidatedData.map(item => ({
      value: item.value,
      unit: item.unit,
      formatted: `${item.value} ${item.unit}`,
      category: item.category
    }));

    // Joindre les quantités formatées
    return formattedQuantities.map(q => q.formatted).join(' + ') || '0';
  }

  /**
   * Formate le bilan pour l'affichage
   */
  static formatBalance(ingredient) {
    const balance = ingredient.balance || 0;
    const mainUnit = this.getMainUnit(ingredient);

    return `${balance} ${mainUnit}`;
  }

  /**
   * Détermine la classe CSS pour le bilan
   */
  static getBalanceClass(ingredient) {
    const balance = ingredient.balance || 0;
    const totalNeeded = ingredient.totalNeeded || 0;

    if (totalNeeded === 0) return 'quantity-neutral';
    if (balance >= 0) return 'quantity-positive';
    if (Math.abs(balance) < totalNeeded * 0.1) return 'quantity-neutral';
    return 'quantity-negative';
  }

  /**
   * Formate la liste des magasins
   */
  static formatStores(ingredient) {
    if (!ingredient.purchases?.length) return '-';

    const stores = [...new Set(
      ingredient.purchases
        .map(p => p.store)
        .filter(store => store && store.trim())
    )];

    return stores.join(', ') || '-';
  }

  /**
   * Formate la liste des responsables
   */
  static formatResponsible(ingredient) {
    if (!ingredient.purchases?.length) return '-';

    const people = [...new Set(
      ingredient.purchases
        .map(p => p.who)
        .filter(who => who && who.trim())
    )];

    return people.join(', ') || '-';
  }

  /**
   * Trouve l'unité principale d'un ingrédient
   */
  static getMainUnit(ingredient) {
    // Essayer depuis les besoins consolidés
    if (ingredient.totalNeededConsolidated?.length) {
      return ingredient.totalNeededConsolidated[0].unit || '';
    }

    // Essayer depuis les occurrences de recettes
    if (ingredient.originalData?.recipeOccurrences?.length) {
      return ingredient.originalData.recipeOccurrences[0].unit || '';
    }

    // Essayer depuis les achats consolidés
    if (ingredient.totalPurchasedConsolidated?.length) {
      return ingredient.totalPurchasedConsolidated[0].unit || '';
    }

    return '';
  }

  /**
   * Prépare les données pour les graphiques et statistiques
   */
  static prepareStatsData(ingredients) {
    const stats = {
      totalIngredients: ingredients.length,
      totalNeeded: 0,
      totalStock: 0,
      totalPurchased: 0,
      totalBalance: 0,
      byType: {},
      byStatus: {
        sufficient: 0,
        missing: 0,
        partial: 0,
        unused: 0
      },
      topMissing: [],
      topSufficient: []
    };

    ingredients.forEach(ingredient => {
      // Totaux globaux
      stats.totalNeeded += ingredient.totalNeeded || 0;
      stats.totalStock += ingredient.stockReel || 0;
      stats.totalPurchased += ingredient.totalPurchased || 0;
      stats.totalBalance += ingredient.balance || 0;

      // Par type
      const type = ingredient.ingType || 'autres';
      if (!stats.byType[type]) {
        stats.byType[type] = {
          count: 0,
          needed: 0,
          stock: 0,
          purchased: 0,
          balance: 0
        };
      }
      stats.byType[type].count++;
      stats.byType[type].needed += ingredient.totalNeeded || 0;
      stats.byType[type].stock += ingredient.stockReel || 0;
      stats.byType[type].purchased += ingredient.totalPurchased || 0;
      stats.byType[type].balance += ingredient.balance || 0;

      // Par statut
      const status = ingredient.status || 'unused';
      stats.byStatus[status]++;

      // Top missing
      if (ingredient.balance < 0) {
        stats.topMissing.push({
          name: ingredient.ingredientName,
          balance: ingredient.balance,
          needed: ingredient.totalNeeded
        });
      }

      // Top sufficient
      if (ingredient.balance >= 0 && ingredient.totalNeeded > 0) {
        stats.topSufficient.push({
          name: ingredient.ingredientName,
          balance: ingredient.balance,
          needed: ingredient.totalNeeded
        });
      }
    });

    // Trier les tops
    stats.topMissing.sort((a, b) => a.balance - b.balance);
    stats.topSufficient.sort((a, b) => b.balance - a.balance);

    return stats;
  }

  /**
   * Prépare les données pour l'export
   */
  static prepareExportData(ingredients) {
    return ingredients.map(ingredient => ({
      ingredient: ingredient.ingredientName,
      type: ingredient.ingType,
      totalNeeded: ingredient.totalNeeded,
      stockReel: ingredient.stockReel,
      totalPurchased: ingredient.totalPurchased,
      balance: ingredient.balance,
      status: ingredient.status,
      stores: this.formatStores(ingredient),
      responsible: this.formatResponsible(ingredient)
    }));
  }

  /**
   * Transforme les données pour le filtre
   */
  static transformForFilter(ingredients) {
    return {
      types: [...new Set(ingredients.map(i => i.ingType).filter(Boolean))],
      statuses: [...new Set(ingredients.map(i => i.status).filter(Boolean))],
      stores: [...new Set(
        ingredients.flatMap(i =>
          (i.purchases || []).map(p => p.store).filter(Boolean)
        )
      )],
      responsible: [...new Set(
        ingredients.flatMap(i =>
          (i.purchases || []).map(p => p.who).filter(Boolean)
        )
      )]
    };
  }
}
