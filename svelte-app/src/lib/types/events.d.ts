/**
 * Types spécifiques pour la gestion des événements (collection 'main')
 * Ces types correspondent aux structures stockées sous forme de JSON stringified dans Appwrite.
 */

/**
 * Information sur un contributeur d'événement
 * Stocké dans le champ 'contributors' (string[]) sous forme de JSON stringified
 */
export interface EventContributor {
  id: string;
  email?: string; // Optionnel car peut être un ID utilisateur
  name?: string;
  status: "invited" | "accepted" | "declined";
  invitedAt: string;
  respondedAt?: string;
  teamId?: string; // Si l'invitation provient d'une équipe
  isKTeamMember?: boolean;
}

/**
 * Repas dans un événement
 * Stocké dans le champ 'meals' (string) sous forme de JSON stringified (EventMeal[])
 */
export interface EventMeal {
  id?: string; // UUID pour le tracking UI
  date: string; // DateTime ISO 8601 complet
  guests: number;
  recipes: EventMealRecipe[];
}

/**
 * Recette dans un repas d'événement
 */
export interface EventMealRecipe {
  recipeUuid: string;
  plates: number; // Nombre de couverts
  type?: "entree" | "plat" | "dessert";
}

import type { Main } from "./appwrite.d";

/**
 * Événement enrichi avec les données parsées
 * Utilisé dans le store et l'UI
 */
export interface EnrichedEvent extends Omit<Main, "meals" | "contributors"> {
  meals: EventMeal[];
  contributors: EventContributor[];
}

/**
 * Données pour créer un événement
 */
export interface CreateEventData {
  name: string;
  dateStart: string;
  dateEnd: string;
  allDates?: string[]; // Tableau de toutes les dates uniques des repas
  meals?: EventMeal[];
  teams?: string[];
  contributors?: EventContributor[]; // Tableau d'objets EventContributor
}

/**
 * Données pour mettre à jour un événement
 */
export interface UpdateEventData {
  name?: string;
  dateStart?: string;
  dateEnd?: string;
  allDates?: string[]; // Tableau de toutes les dates uniques des repas
  meals?: EventMeal[];
  teams?: string[];
  contributors?: EventContributor[]; // Tableau d'objets EventContributor
}
