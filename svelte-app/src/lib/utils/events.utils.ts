import { nanoid } from "nanoid";
import type { EventMeal, EventContributor } from "../types/events.d";

/**
 * Parse les meals d'un événement depuis une chaîne JSON
 */
export function parseEventMeals(mealsStr: string | null | undefined): EventMeal[] {
  if (!mealsStr) return [];
  try {
    const meals = JSON.parse(mealsStr);
    // Add IDs to meals that don't have them for UI tracking
    return meals.map((meal: EventMeal) => {
      if (!meal.id) {
        return {
          ...meal,
          id: nanoid(6), // Generate a short UUID for tracking
        };
      }
      return meal;
    });
  } catch (error) {
    console.error("[events.utils] Error parsing meals:", error);
    return [];
  }
}

/**
 * Parse les contributeurs d'un événement depuis un tableau de chaînes
 */
export function parseEventContributors(contributorsStr: string[] | null | undefined): EventContributor[] {
  if (!contributorsStr) return [];

  // Parser le tableau de strings (chaque string peut être un JSON ou un simple ID)
  try {
    const contributors: EventContributor[] = [];

    for (const contributorStr of contributorsStr) {
      try {
        // Essayer de parser le JSON pour obtenir les informations du contributeur
        const contributor = JSON.parse(contributorStr);
        contributors.push(contributor);
      } catch (e) {
        // Si le parsing échoue, considérer que c'est un simple ID (ancien format)
        contributors.push({
          id: contributorStr,
          status: "accepted" as const,
          invitedAt: new Date().toISOString(), // Ajout d'une date par défaut pour satisfaire le type
        });
      }
    }

    return contributors;
  } catch (error) {
    console.error("[events.utils] Error parsing contributors:", error);
    return [];
  }
}
