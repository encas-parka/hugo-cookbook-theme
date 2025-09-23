/**
 * IngredientCalculator.js
 * Service centralisé pour tous les calculs liés aux ingrédients
 * Utilise UnitsManager pour les conversions et consolidations
 */

import UnitsManager from '../UnitsManager.js';

export class IngredientCalculator {
  // Cache pour les calculs déjà effectués
  static _calculationCache = new Map();

  /**
   * Calcule l'équilibre des ingrédients avec consolidations
   */
  static calculateIngredientsBalance(ingredients, purchases = []) {
    if (!ingredients || !Array.isArray(ingredients)) {
      console.warn('calculateIngredientsBalance: ingredients invalide', ingredients);
      return [];
    }

    console.log('🧮 Calcul de l\'équilibre des ingrédients...');
    console.log('📊 Ingrédients bruts:', ingredients.length);
    console.log('🛒 Achats:', purchases.length);

    // 1. Normaliser les ingrédients avec leurs occurrences de recettes
    const normalizedIngredients = this.normalizeIngredients(ingredients);

    // 2. Calculer les besoins totaux par ingrédient
    const ingredientsWithNeeds = this.calculateTotalNeeds(normalizedIngredients);

    // 3. Ajouter les données d'achats existantes
    const ingredientsWithPurchases = this.addPurchasesData(ingredientsWithNeeds, purchases);

    // 4. Calculer l'équilibre final
    const balancedIngredients = this.calculateFinalBalance(ingredientsWithPurchases);

    console.log('✅ Calcul terminé, ingrédients traités:', balancedIngredients.length);
    return balancedIngredients;
  }

  /**
   * Calcule l'équilibre des ingrédients depuis les données Appwrite
   * Version adaptée pour la structure de données actuelle
   */
  static calculateAppwriteIngredientsBalance(ingredients, purchases = []) {
    if (!ingredients || !Array.isArray(ingredients)) {
      console.warn('calculateAppwriteIngredientsBalance: ingredients invalide', ingredients);
      return [];
    }

    // Générer une clé de cache basée sur les données
    const cacheKey = this.generateCacheKey(ingredients, purchases);

    // Vérifier le cache
    if (this._calculationCache.has(cacheKey)) {
      console.log('🎯 Utilisation des résultats depuis le cache');
      return this._calculationCache.get(cacheKey);
    }

    // Nettoyer le cache périodiquement
    if (this._calculationCache.size > 100) {
      this._calculationCache.clear();
    }

    console.log('🧮 Calcul de l\'équilibre des ingrédients Appwrite...');
    console.log('📊 Ingrédients bruts:', ingredients.length);
    console.log('🛒 Achats:', purchases.length);

    // 1. Normaliser les ingrédients depuis les données Appwrite
    const normalizedIngredients = this.normalizeAppwriteIngredients(ingredients);

    // 2. Calculer les besoins totaux par ingrédient (déjà calculés dans Appwrite)
    const ingredientsWithNeeds = this.processAppwriteNeeds(normalizedIngredients);

    // 3. Ajouter les données d'achats existantes
    const ingredientsWithPurchases = this.addPurchasesData(ingredientsWithNeeds, purchases);

    // 4. Calculer l'équilibre final
    const balancedIngredients = this.calculateFinalBalance(ingredientsWithPurchases);

    // Mettre en cache le résultat
    this._calculationCache.set(cacheKey, balancedIngredients);

    console.log('✅ Calcul terminé, ingrédients traités:', balancedIngredients.length);
    return balancedIngredients;
  }

  /**
   * Génère une clé de cache pour les calculs
   */
  static generateCacheKey(ingredients, purchases) {
    const ingredientsHash = ingredients.map(ing => `${ing.$id}_${ing.$updatedAt}`).join('|');
    const purchasesHash = purchases.map(p => `${p.$id}_${p.$updatedAt}`).join('|');
    return `appwrite_calc_${btoa(ingredientsHash + purchasesHash).slice(0, 32)}`;
  }

  /**
   * Vide le cache des calculs
   */
  static clearCache() {
    this._calculationCache.clear();
    console.log('🗑️ Cache des calculs vidé');
  }

  /**
   * Normalise les ingrédients depuis les données Appwrite
   */
  static normalizeAppwriteIngredients(ingredients) {
    return ingredients.map(ingredient => {
      if (!ingredient || !ingredient.$id) {
        console.warn('Ingrédient invalide ignoré:', ingredient);
        return null;
      }

      // Extraire et normaliser les occurrences de recettes depuis recipeOccurrences
      const recipeOccurrences = this.extractRecipeOccurrencesFromAppwrite(ingredient);

      return {
        ...ingredient,
        originalData: {
          recipeOccurrences,
          rawIngredient: ingredient
        }
      };
    }).filter(Boolean);
  }

  /**
   * Extrait et normalise les occurrences de recettes depuis les données Appwrite
   */
  static extractRecipeOccurrencesFromAppwrite(ingredient) {
    if (!ingredient.recipeOccurrences) return [];

    // Les recipeOccurrences sont déjà stockées comme tableau de strings JSON
    return ingredient.recipeOccurrences.map(occurrenceStr => {
      try {
        const occurrence = JSON.parse(occurrenceStr);
        return {
          recipeId: occurrence.recipeName || 'unknown',
          recipeName: occurrence.recipeName || 'Recette inconnue',
          quantity: parseFloat(occurrence.quantity) || 0,
          unit: occurrence.unit || '',
          normalizedUnit: occurrence.unit || ''
        };
      } catch (error) {
        console.warn('Erreur parsing recipe occurrence:', error);
        return null;
      }
    }).filter(Boolean);
  }

  /**
   * Traite les besoins déjà calculés dans Appwrite
   */
  static processAppwriteNeeds(ingredients) {
    return ingredients.map(ingredient => {
      // Les besoins sont déjà calculés et stockés dans totalNeededConsolidated
      // On les utilise directement
      return {
        ...ingredient,
        totalNeeded: this.parseTotalNeeded(ingredient.totalNeededConsolidated),
        totalNeededRaw: this.parseTotalNeededRaw(ingredient.totalNeededRaw),
        totalNeededConsolidated: this.parseConsolidatedData(ingredient.totalNeededConsolidated)
      };
    });
  }

  /**
   * Parse les données de besoin total
   */
  static parseTotalNeeded(totalNeededStr) {
    if (!totalNeededStr) return 0;
    try {
      const data = JSON.parse(totalNeededStr);
      return Array.isArray(data) ? data.reduce((sum, item) => sum + (item.value || 0), 0) : 0;
    } catch {
      return 0;
    }
  }

  /**
   * Parse les données brutes de besoin total
   */
  static parseTotalNeededRaw(totalNeededRawStr) {
    if (!totalNeededRawStr) return 0;
    try {
      const data = JSON.parse(totalNeededRawStr);
      return Array.isArray(data) ? data.reduce((sum, item) => sum + (item.value || 0), 0) : 0;
    } catch {
      return 0;
    }
  }

  /**
   * Parse les données consolidées
   */
  static parseConsolidatedData(consolidatedStr) {
    if (!consolidatedStr) return [];
    try {
      const data = JSON.parse(consolidatedStr);
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }

  /**
   * Normalise les ingrédients et leurs occurrences
   */
  static normalizeIngredients(ingredients) {
    return ingredients.map(ingredient => {
      if (!ingredient || !ingredient.$id) {
        console.warn('Ingrédient invalide ignoré:', ingredient);
        return null;
      }

      // Extraire et normaliser les occurrences de recettes
      const recipeOccurrences = this.extractRecipeOccurrences(ingredient);

      return {
        ...ingredient,
        originalData: {
          recipeOccurrences,
          rawIngredient: ingredient
        }
      };
    }).filter(Boolean);
  }

  /**
   * Extrait et normalise les occurrences de recettes
   */
  static extractRecipeOccurrences(ingredient) {
    if (!ingredient.neededByRecipes) return [];

    return Object.entries(ingredient.neededByRecipes).map(([recipeId, occurrence]) => {
      return {
        recipeId,
        recipeName: occurrence.recipeName || 'Recette inconnue',
        quantity: parseFloat(occurrence.quantity) || 0,
        unit: occurrence.unit || '',
        normalizedUnit: occurrence.normalizedUnit || occurrence.unit || ''
      };
    });
  }

  /**
   * Calcule les besoins totaux par ingrédient avec consolidation
   */
  static calculateTotalNeeds(ingredients) {
    return ingredients.map(ingredient => {
      if (!ingredient.originalData.recipeOccurrences.length) {
        return {
          ...ingredient,
          totalNeeded: 0,
          totalNeededRaw: 0,
          totalNeededConsolidated: []
        };
      }

      // Consolidation des quantités avec UnitsManager
      const consolidated = UnitsManager.consolidateQuantities(
        ingredient.originalData.recipeOccurrences.map(occ => ({
          value: occ.quantity,
          unit: occ.unit,
          normalizedUnit: occ.normalizedUnit
        }))
      );

      const totalRaw = consolidated.total || 0;

      return {
        ...ingredient,
        totalNeeded: totalRaw,
        totalNeededRaw: totalRaw,
        totalNeededConsolidated: consolidated.consolidated || []
      };
    });
  }

  /**
   * Ajoute les données d'achats existantes
   * Adapté pour les données Appwrite (utilisation de listIngredient)
   */
  static addPurchasesData(ingredients, purchases) {
    if (!purchases || !Array.isArray(purchases)) {
      return ingredients.map(ingredient => ({
        ...ingredient,
        totalPurchased: 0,
        totalPurchasedRaw: 0,
        totalPurchasedConsolidated: []
      }));
    }

    return ingredients.map(ingredient => {
      // Filtrer les achats pour cet ingrédient via listIngredient (relation Appwrite)
      const ingredientPurchases = purchases.filter(purchase =>
        purchase.listIngredient === ingredient.$id
      );

      if (!ingredientPurchases.length) {
        return {
          ...ingredient,
          totalPurchased: 0,
          totalPurchasedRaw: 0,
          totalPurchasedConsolidated: [],
          purchases: []
        };
      }

      // Consolidation des achats
      const purchaseQuantities = ingredientPurchases.map(purchase => ({
        value: parseFloat(purchase.quantity) || 0,
        unit: purchase.unit || '',
        normalizedUnit: purchase.unit || ''
      }));

      const consolidated = UnitsManager.consolidateQuantities(purchaseQuantities);
      const totalRaw = consolidated.total || 0;

      return {
        ...ingredient,
        totalPurchased: totalRaw,
        totalPurchasedRaw: totalRaw,
        totalPurchasedConsolidated: consolidated.consolidated || [],
        purchases: ingredientPurchases
      };
    });
  }

  /**
   * Calcule l'équilibre final (besoins - stock - achats)
   */
  static calculateFinalBalance(ingredients) {
    return ingredients.map(ingredient => {
      const stockReel = parseFloat(ingredient.stockReel) || 0;
      const totalNeeded = ingredient.totalNeeded || 0;
      const totalPurchased = ingredient.totalPurchased || 0;

      const available = stockReel + totalPurchased;
      const balance = available - totalNeeded;

      return {
        ...ingredient,
        stockReel,
        available,
        balance,
        status: this.determineStatus(balance, totalNeeded)
      };
    });
  }

  /**
   * Détermine le statut d'un ingrédient
   */
  static determineStatus(balance, totalNeeded) {
    if (totalNeeded === 0) return 'unused';
    if (balance >= 0) return 'sufficient';
    if (Math.abs(balance) < totalNeeded * 0.1) return 'partial';
    return 'missing';
  }

  /**
   * Calcule les totaux par catégorie
   */
  static calculateTotalsByCategory(ingredients) {
    const totals = {
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
      }
    };

    ingredients.forEach(ingredient => {
      // Totaux globaux
      totals.totalNeeded += ingredient.totalNeeded || 0;
      totals.totalStock += ingredient.stockReel || 0;
      totals.totalPurchased += ingredient.totalPurchased || 0;
      totals.totalBalance += ingredient.balance || 0;

      // Par type
      const type = ingredient.ingType || 'autres';
      if (!totals.byType[type]) {
        totals.byType[type] = {
          count: 0,
          needed: 0,
          stock: 0,
          purchased: 0,
          balance: 0
        };
      }
      totals.byType[type].count++;
      totals.byType[type].needed += ingredient.totalNeeded || 0;
      totals.byType[type].stock += ingredient.stockReel || 0;
      totals.byType[type].purchased += ingredient.totalPurchased || 0;
      totals.byType[type].balance += ingredient.balance || 0;

      // Par statut
      const status = ingredient.status || 'unused';
      totals.byStatus[status]++;
    });

    return totals;
  }

  /**
   * Calcule le stock total pour un ingrédient
   */
  static calculateTotalStock(ingredient) {
    return parseFloat(ingredient.stockReel) || 0;
  }

  /**
   * Calcule les achats totaux pour un ingrédient
   */
  static calculateTotalPurchases(ingredient) {
    if (!ingredient.purchases || !Array.isArray(ingredient.purchases)) {
      return 0;
    }

    return ingredient.purchases.reduce((sum, purchase) => {
      return sum + (parseFloat(purchase.quantity) || 0);
    }, 0);
  }

  /**
   * Valide les données d'un ingrédient
   */
  static validateIngredient(ingredient) {
    const errors = [];

    if (!ingredient.ingredientName) {
      errors.push('Nom d\'ingrédient manquant');
    }

    if (!ingredient.ingredientUuid) {
      errors.push('UUID d\'ingrédient manquant');
    }

    if (ingredient.totalNeeded < 0) {
      errors.push('Quantité nécessaire négative');
    }

    if (ingredient.stockReel < 0) {
      errors.push('Stock négatif');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}
