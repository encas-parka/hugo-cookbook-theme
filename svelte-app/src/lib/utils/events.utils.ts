import { nanoid } from "nanoid";
import { safeJsonArrayParse } from "./safe-operation";
import type { EventMeal, EventContributor } from "../types/events.d";

/**
 * Parse les meals d'un événement depuis une chaîne JSON
 */
export function parseEventMeals(
  mealsStr: string[] | null | undefined,
): EventMeal[] {
  return safeJsonArrayParse(mealsStr, {
    context: "parseEventMeals",
    itemFallback: (mealStr, index) => {
      console.warn(
        `[parseEventMeals] Meal ${index} invalide, utilisation d'un fallback`,
        mealStr,
      );
      return {
        id: `unknown-${index}`,
        name: "Repas inconnu",
        date: new Date().toISOString(),
        guests: 1,
        recipes: [],
      };
    },
  });
}

/**
 * Parse les contributeurs d'un événement depuis un tableau de chaînes
 */
export function parseEventContributors(
  contributorsStr: string[] | null | undefined,
): EventContributor[] {
  return safeJsonArrayParse(contributorsStr, {
    context: "parseEventContributors",
    itemFallback: (contributorStr, index) => {
      // Fallback : si c'est un simple ID (ancien format), créer un objet complet
      console.warn(
        `[parseEventContributors] Contributor ${index} invalide, utilisation d'un fallback`,
        contributorStr,
      );
      return {
        id:
          typeof contributorStr === "string"
            ? contributorStr
            : `unknown-${index}`,
        status: "accepted" as const,
        invitedAt: new Date().toISOString(),
      };
    },
  });
}
