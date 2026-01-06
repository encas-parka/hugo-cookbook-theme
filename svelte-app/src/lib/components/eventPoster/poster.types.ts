/**
 * Types for the Event Poster components
 */

import type { EnrichedEvent } from "$lib/types/events.d";

export interface PosterConfig {
  showDate: boolean;
  showHoraire: boolean;
  showDescription: boolean;
  showCategories: boolean;
  showRecipes: boolean;
  showRegimes: boolean;
  showAllergens: boolean;
  showIngredients: boolean;
  catPageBreak: boolean;
  dateByPageBreak: boolean;
  messageBottom: string;
  fontDate: string;
  fontSizeDate: string;
  fontHoraire: string;
  fontSizeHoraire: string;
  fontCat: string;
  fontSizeCat: string;
  fontRecettes: string;
  fontSizeRecettes: string;
  fontDesc: string;
  fontSizeDesc: string;
  fontRegimes: string;
  fontSizeRegimes: string;
  fontAlert: string;
  fontSizeAlert: string;
  fontIng: string;
  fontSizeIng: string;
}

export interface GroupedMeals {
  dateKey: string;
  date: Date;
  horaire: string;
  meals: Array<{
    id: string;
    date: Date;
    guests: number;
    recipes: Array<{
      recipeUuid: string;
      plates: number;
      typeR: string;
      hasOwnPlatesNb?: boolean;
    }>;
  }>;
}

export interface RecipeCardProps {
  recipeUuid: string;
  plates: number;
  typeR: string;
  recipeKey: string;
  config: PosterConfig;
  visible: boolean;
  name: string;
  onToggle: (recipeKey: string) => void;
  onStartEdit: (recipeKey: string) => void;
  onFinishEdit: () => void;
  onUpdateName: (recipeKey: string, newName: string) => void;
  isEditing: boolean;
}

export interface MealPosterProps {
  dateKey: string;
  date: Date;
  horaire: string;
  meals: GroupedMeals["meals"];
  config: PosterConfig;
  sectionId: string;
  sectionsToPrint: Record<string, boolean>;
  recipeVisibility: Record<string, boolean>;
  recipeNames: Record<string, string>;
  editingRecipe: string | null;
  onPrintThis: (sectionId: string) => void;
  onToggleRecipe: (recipeKey: string) => void;
  onStartEditRecipe: (recipeKey: string) => void;
  onFinishEditRecipe: () => void;
  onUpdateRecipeName: (recipeKey: string, newName: string) => void;
}
