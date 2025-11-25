import { UnitConverter } from '../utils/UnitConverter';

export interface IngredientData {
  ingredient: string;
  quantite: number;
  unit: string;
  commentaire?: string;
}

export interface RecipeData {
  title: string;
  plate: number; // Nombre de couverts de base
  ingredients: IngredientData[];
  // Autres champs (uuid, type, etc.) à ajouter selon besoin
}

export interface ScaledIngredient extends IngredientData {
  originalQuantity: number;
  scaledQuantity: number;
  normalizedQuantity: number;
  normalizedUnit: string;
  conversionRule?: string;
}

export class RecipeEventModel {
  baseData: RecipeData;
  targetGuests: number;

  constructor(data: RecipeData) {
    this.baseData = data;
    this.targetGuests = data.plate;
  }

  // Facteur de mise à l'échelle (Règle de 3)
  get scaleFactor(): number {
    return this.targetGuests / this.baseData.plate;
  }

  // Liste des ingrédients recalculée et normalisée
  get scaledIngredients(): ScaledIngredient[] {
    return this.baseData.ingredients.map((ing) => {
      const scaledQty = ing.quantite * this.scaleFactor;
      
      // On utilise le UnitConverter pour normaliser (ex: kg -> gr)
      // Cela facilitera l'agrégation ultérieure pour la liste de courses
      const conversion = UnitConverter.normalize(scaledQty, ing.unit, ing.ingredient);

      return {
        ...ing,
        originalQuantity: ing.quantite,
        scaledQuantity: scaledQty,
        normalizedQuantity: conversion.quantity,
        normalizedUnit: conversion.unit,
        conversionRule: conversion.ruleUsed
      } as ScaledIngredient;
    });
  }

  // Méthode pour mettre à jour le nombre de convives
  setGuests(guests: number) {
    if (guests > 0) {
      this.targetGuests = guests;
    }
  }
}
