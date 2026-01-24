import { nanoid } from "nanoid";
import { safeJsonArrayParse } from "./safe-operation";
import type { EventMeal, EventContributor } from "../types/events.d";
import { eventsStore } from "../stores/EventsStore.svelte";

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

import type { EventTodo } from "../types/events.d";

/**
 * Parse les todos d'un événement depuis un tableau de chaînes JSON
 */
export function parseEventTodos(
  todosStr: string[] | null | undefined,
): EventTodo[] {
  return safeJsonArrayParse(todosStr, {
    context: "parseEventTodos",
    itemFallback: (todoStr, index) => {
      console.warn(
        `[parseEventTodos] Todo ${index} invalide, utilisation d'un fallback`,
        todoStr,
      );
      return {
        id: `unknown-${index}`,
        taskName: "Tâche invalide",
        taskDescription: null,
        dueDate: null,
        priority: null,
        status: null,
        taskOn: null,
        requiredPeopleNb: 1,
        assignedTo: null,
      };
    },
  });
}

/**
 * Initialise les events démo si nécessaire (pour les routes /demo/event/*)
 *
 * Cette fonction utilitaire est à utiliser dans les composants de pages d'events
 * pour auto-charger les events démo quand on accède directement à une route démo.
 *
 * @returns Promise<void>
 *
 * @example
 * ```typescript
 * // Dans un onMount ou $effect d'initialisation
 * await ensureDemoEventsLoaded();
 * ```
 */
export async function ensureDemoEventsLoaded(): Promise<void> {
  // ✅ AUTO-CHARGEMENT DES EVENTS DÉMO si route /demo/event
  const isDemoRoute = window.location.hash.startsWith("#/demo/event/");

  if (isDemoRoute && !eventsStore.isInitialized) {
    console.log(
      "[ensureDemoEventsLoaded] Route démo détectée > Auto-chargement events démo",
    );
    try {
      await eventsStore.initializeForPublic();
    } catch (error) {
      console.error(
        "[ensureDemoEventsLoaded] Erreur chargement events démo:",
        error,
      );
      throw error;
    }
  }
}

/**
 * Attend qu'un event soit disponible dans le store
 * Utile pour gérer les race conditions lors du chargement asynchrone
 *
 * @param eventId - ID de l'événement à attendre
 * @param maxRetries - Nombre maximal de tentatives (défaut: 20 = 2 secondes)
 * @returns Promise<boolean> - true si l'event est trouvé, false sinon
 *
 * @example
 * ```typescript
 * const found = await waitForEvent(eventId);
 * if (!found) {
 *   console.error("Event non trouvé");
 *   return;
 * }
 * ```
 */
export async function waitForEvent(
  eventId: string,
  maxRetries: number = 20,
): Promise<boolean> {
  let retries = 0;

  while (retries < maxRetries) {
    const event = eventsStore.getEventById(eventId);
    if (event) {
      console.log(
        `[waitForEvent] Event ${eventId} trouvé après ${retries * 100}ms`,
      );
      return true;
    }
    // Attendre 100ms avant de réessayer
    await new Promise((resolve) => setTimeout(resolve, 100));
    retries++;
  }

  console.warn(
    `[waitForEvent] Event ${eventId} non trouvé après ${maxRetries * 100}ms`,
  );
  return false;
}

/**
 * Récupère l'ID du premier événement démo (status: "local")
 * Utile pour naviguer vers la démo depuis la HomePage
 *
 * @returns string | null - L'ID de l'event démo ou null si non trouvé
 *
 * @example
 * ```typescript
 * const demoId = getDemoEventId();
 * if (demoId) {
 *   navigate(`/demo/event/${demoId}`);
 * }
 * ```
 */
export function getDemoEventId(): string | null {
  const demoEvents = eventsStore.events.filter(
    (e) => (e.status as string) === "local",
  );

  if (demoEvents.length === 0) {
    console.warn("[getDemoEventId] Aucun événement démo trouvé");
    return null;
  }

  return demoEvents[0].$id;
}
