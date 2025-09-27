/**
 * IngredientCalculator.js
 * Service centralisé pour tous les calculs liés aux ingrédients
 * Utilise UnitsManager pour les conversions et consolidations
 */

import UnitsManager from '../UnitsManager.js';


export class IngredientCalculator {

  /**
   * Calcule l'équilibre des ingrédients depuis les données Appwrite
   */
  static calculateIngredientsBalance(ingredients, purchases = []) {
    if (!ingredients || !Array.isArray(ingredients)) {
      console.warn('calculateIngredientsBalance: ingredients invalide', ingredients);
      return [];
    }

    // 1. Parser et préparer les ingrédients avec leurs données Appwrite
    const parsedIngredients = this.parseIngredients(ingredients);

    // 2. Associer les achats à chaque ingrédient et consolider les totaux achetés.
    const ingredientsWithPurchases = this.addPurchasesData(parsedIngredients, purchases);

    // 3. Calculer la balance finale en comparant besoins et achats par catégorie d'unité.
    const balancedIngredients = this.calculateFinalBalance(ingredientsWithPurchases);

    return balancedIngredients;
  }

  /**
  * Parse les chaînes JSON des ingrédients Appwrite en objets JS.
  */
  static parseIngredients(ingredients) {
    return ingredients.map(ingredient => {
      if (!ingredient || !ingredient.$id) {
        console.warn('Ingrédient invalide ignoré:', ingredient);
        return null;
      }

      return {
        ...ingredient,
        totalNeededConsolidated: this.parseJsonString(ingredient.totalNeededConsolidated),
        totalNeededRaw: this.parseJsonString(ingredient.totalNeededRaw),
        recipeOccurrences: (ingredient.recipeOccurrences || []).map(this.parseJsonString).filter(Boolean)
      };
    }).filter(Boolean);
  }

  /**
   * Ajoute les données d'achats pour chaque ingrédient.
   */
   static addPurchasesData(ingredients, allPurchases) {
     return ingredients.map(ingredient => ({
       ...ingredient,
       purchases: allPurchases.filter(p => p.listIngredient?.$id === ingredient.$id)
     }));
   }


    /**
    * Calcule la balance finale, le statut, et les totaux pour chaque ingrédient.
    */
  static calculateFinalBalance(ingredients) {
    return ingredients.map(ingredient => {
      // TODO: ignoré pour le moment
      const stockReel = parseFloat(ingredient.stockReel) || 0;

      // Calculer la balance par catégorie d'unité
      const balancePerUnit = this.calculateBalancePerUnit(
        ingredient.totalNeededConsolidated,
        ingredient.purchases,
        stockReel
      );

      // Déterminer le statut global
      const overallStatus = this.determineOverallStatus(balancePerUnit);

      return {
        ...ingredient,
        stockReel,
        balancePerUnit,
        overallStatus,
        status: overallStatus
      };
    });
  }

  /**
    * Le CŒUR de la logique de calcul.
    * Standardise les unités, les groupe et calcule la balance pour chaque unité.
    */
   static calculateBalancePerUnit(needed = [], purchases = [], stock = 0) {
     const quantitiesByUnit = {};

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

     // TODO: Gérer le stockReel. Il faudra lui associer une unité.
     // Par exemple, si le stock est en 'kg', il sera standardisé et ajouté à 'gr.'.
     // if (stock > 0) { ... }

     // 3. Calculer la balance pour chaque unité
     return Object.entries(quantitiesByUnit).map(([unit, data]) => {
       const balance = data.purchased - data.needed;
       return {
         unit,
         needed: data.needed,
         purchased: data.purchased,
         balance,
         status: this.determineUnitStatus(balance, data.needed)
       };
     });
   }

  /**
   * Détermine le statut global à partir des balances par unité
   */
   // TODO?: le status doit il etre calculé ou renseigné par l'user, ou un mix des 2 ? Il faut permettre a l'user de déclarer un statut "sufficient" manuellement, et gérer un statut "commandé". "collections.purchase à une columns "status" (string 25) qui doit permetre de précisé s'il s'agit d'un achat ou d'une commande. Il faudra implémenter la gestion de cela ...
  static determineOverallStatus(balancePerUnit) {
    if (balancePerUnit.length === 0) return 'unused';
     if (balancePerUnit.some(cat => cat.status === 'missing')) return 'missing';
     if (balancePerUnit.some(cat => cat.status === 'partial')) return 'partial';
     return 'sufficient';
  }


  /**
   * Détermine le statut pour une seule unité.
   */
   // #AI: TODO: créer un status en pourcentage d'avancement. Les differents status pourraient etre alors agregé pour donner un status global d'avancement.
  static determineUnitStatus(balance, totalNeeded) {
    if (totalNeeded === 0 && balance > 0) return 'sufficient'; // Achat sans besoin
    if (totalNeeded === 0) return 'unused';
    if (balance >= 0) return 'sufficient';
    // TOCHECK: 10% arbitraire !
    // Si le manque est inférieur à 10% du besoin, on considère "partiel"
    if (Math.abs(balance) < totalNeeded * 0.1) return 'partial';
    return 'missing';
  }


   /**
    * Utilitaire interne pour standardiser les unités de poids et de volume.
    * @returns {{value: number, unit: string}}
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
   * Utilitaire sécurisé pour parser des chaînes JSON.
   */
  static parseJsonString(jsonString) {
    if (!jsonString || typeof jsonString !== 'string') return jsonString; // Déjà un objet
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      return []; // Retourne un tableau vide en cas d'erreur
    }
  }

  /**
   * Met à jour un seul ingrédient de manière optimisée
   * @param {Object} ingredient - L'ingrédient à mettre à jour
   * @param {Array} allIngredients - Tous les ingrédients (pour le contexte)
   * @param {Array} allPurchases - Tous les achats
   * @returns {Object} - L'ingrédient calculé
   */
  static updateSingleIngredient(ingredient, allIngredients, allPurchases) {
    if (!ingredient || !ingredient.$id) {
      console.warn('updateSingleIngredient: ingrédient invalide', ingredient);
      return null;
    }

    // Parser l'ingrédient
    const parsedIngredient = this.parseIngredients([ingredient])[0];
    
    // Ajouter les données d'achats
    const ingredientWithPurchases = this.addPurchasesData([parsedIngredient], allPurchases)[0];
    
    // Calculer la balance finale
    const balancedIngredient = this.calculateFinalBalance([ingredientWithPurchases])[0];
    
    return balancedIngredient;
  }

  /**
   * Met à jour plusieurs ingrédients spécifiques
   * @param {Array} ingredientIds - Les IDs des ingrédients à mettre à jour
   * @param {Array} allIngredients - Tous les ingrédients
   * @param {Array} allPurchases - Tous les achats
   * @returns {Array} - Les ingrédients calculés
   */
  static updateMultipleIngredients(ingredientIds, allIngredients, allPurchases) {
    if (!ingredientIds || !Array.isArray(ingredientIds)) {
      return [];
    }

    const ingredientsToUpdate = allIngredients.filter(ing => 
      ingredientIds.includes(ing.$id)
    );

    return ingredientsToUpdate.map(ingredient => 
      this.updateSingleIngredient(ingredient, allIngredients, allPurchases)
    ).filter(Boolean);
  }

  /**
   * Trouve les ingrédients affectés par un achat
   * @param {Object} purchase - L'achat à analyser
   * @param {Array} allIngredients - Tous les ingrédients
   * @returns {Array} - Les IDs des ingrédients affectés
   */
  static getIngredientsAffectedByPurchase(purchase, allIngredients) {
    if (!purchase || !purchase.listIngredient?.$id) {
      return [];
    }

    const ingredientId = purchase.listIngredient.$id;
    const ingredient = allIngredients.find(ing => ing.$id === ingredientId);
    
    return ingredient ? [ingredientId] : [];
  }

  /**
   * Met à jour les ingrédients affectés par des changements d'achats
   * @param {Array} purchases - Les achats modifiés/ajoutés/supprimés
   * @param {Array} allIngredients - Tous les ingrédients
   * @param {Array} allPurchases - Tous les achats
   * @returns {Array} - Les ingrédients calculés
   */
  static updateIngredientsFromPurchases(purchases, allIngredients, allPurchases) {
    const affectedIngredientIds = new Set();
    
    // Collecter tous les ingrédients affectés
    purchases.forEach(purchase => {
      const affectedIds = this.getIngredientsAffectedByPurchase(purchase, allIngredients);
      affectedIds.forEach(id => affectedIngredientIds.add(id));
    });

    return this.updateMultipleIngredients(
      Array.from(affectedIngredientIds), 
      allIngredients, 
      allPurchases
    );
  }

}
