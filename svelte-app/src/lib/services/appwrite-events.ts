/**
 * Service Appwrite pour les événements
 *
 * Gère le CRUD des événements dans Appwrite (collection main)
 */

import { Query, ID, Permission, Role } from "appwrite";
import { getAppwriteInstances } from "./appwrite";
import { subscribe, getAppwriteConfig } from "./appwrite";
import { nanoid } from "nanoid";
import type { Main } from "../types/appwrite.d";
import type {
  CreateEventData,
  UpdateEventData,
  Meal,
  ContributorInfo,
} from "../types/appwrite.types";

// =============================================================================
// CONFIGURATION
// =============================================================================

const EVENTS_COLLECTION_ID = "main";

// =============================================================================
// CRUD OPERATIONS
// =============================================================================

/**
 * Liste tous les événements accessibles à l'utilisateur
 */
export async function listEvents(
  userId: string,
  userTeams: string[],
): Promise<Main[]> {
  try {
    const { tables, config } = await getAppwriteInstances();
    const response = await tables.listRows({
      databaseId: config.databaseId,
      tableId: EVENTS_COLLECTION_ID,
    });

    return (response.rows as unknown as Main[]).filter((event) => {
      return (
        event.createdBy === userId ||
        event.contributors?.includes(userId) ||
        event.teams?.some((teamId) => userTeams.includes(teamId))
      );
    });
  } catch (error) {
    console.error("[appwrite-events] Error listing events:", error);
    throw error;
  }
}

/**
 * Récupère un événement par ID
 */
export async function getEvent(eventId: string): Promise<Main | null> {
  try {
    const { tables, config } = await getAppwriteInstances();
    const event = await tables.getRow({
      databaseId: config.databaseId,
      tableId: EVENTS_COLLECTION_ID,
      rowId: eventId,
    });
    return event as unknown as Main;
  } catch (error: any) {
    if (error.code === 404) return null;
    console.error(`[appwrite-events] Error getting event ${eventId}:`, error);
    throw error;
  }
}

/**
 * Crée un nouvel événement
 */
export async function createEvent(
  data: CreateEventData,
  userId: string,
): Promise<Main> {
  try {
    const { tables, config } = await getAppwriteInstances();
    const eventId = ID.unique();

    const permissions = [
      Permission.read(Role.user(userId)),
      Permission.update(Role.user(userId)),
      Permission.delete(Role.user(userId)),
    ];

    if (data.contributors) {
      data.contributors.forEach((contributor) => {
        const contributorId =
          typeof contributor === "string" ? contributor : contributor.id;
        if (contributor.status === "accepted") {
          permissions.push(Permission.read(Role.user(contributorId)));
          permissions.push(Permission.update(Role.user(contributorId)));
        }
      });
    }

    if (data.teams) {
      data.teams.forEach((teamId) => {
        permissions.push(Permission.read(Role.team(teamId)));
        permissions.push(Permission.update(Role.team(teamId)));
      });
    }

    const event = await tables.createRow({
      databaseId: config.databaseId,
      tableId: EVENTS_COLLECTION_ID,
      rowId: eventId,
      data: {
        name: data.name,
        dateStart: data.dateStart,
        dateEnd: data.dateEnd,
        allDates: data.allDates, // Sauvegarder les dates calculées
        meals: data.meals ? JSON.stringify(data.meals) : undefined,
        createdBy: userId,
        teams: data.teams ?? [],
        contributors: data.contributors
          ? data.contributors.map((c) =>
              typeof c === "string" ? c : JSON.stringify(c),
            )
          : [],
      },
      permissions,
    });

    console.log(`[appwrite-events] Event created: ${eventId}`);
    return event as unknown as Main;
  } catch (error) {
    console.error("[appwrite-events] Error creating event:", error);
    throw error;
  }
}

/**
 * Met à jour un événement existant
 */
export async function updateEvent(
  eventId: string,
  data: UpdateEventData,
): Promise<Main> {
  try {
    const { tables, config } = await getAppwriteInstances();
    const updateData: any = { ...data };

    if (data.meals) {
      updateData.meals = JSON.stringify(data.meals);
    }

    if (data.contributors) {
      updateData.contributors = data.contributors.map((c) =>
        typeof c === "string" ? c : JSON.stringify(c),
      );
    }

    // S'assurer que allDates est inclus s'il est présent
    if (data.allDates) {
      updateData.allDates = data.allDates;
    }

    const event = await tables.updateRow({
      databaseId: config.databaseId,
      tableId: EVENTS_COLLECTION_ID,
      rowId: eventId,
      data: updateData,
    });

    console.log(`[appwrite-events] Event updated: ${eventId}`);
    return event as unknown as Main;
  } catch (error) {
    console.error(`[appwrite-events] Error updating event ${eventId}:`, error);
    throw error;
  }
}

/**
 * Supprime un événement
 */
export async function deleteEvent(eventId: string): Promise<void> {
  try {
    const { tables, config } = await getAppwriteInstances();
    await tables.deleteRow({
      databaseId: config.databaseId,
      tableId: EVENTS_COLLECTION_ID,
      rowId: eventId,
    });
    console.log(`[appwrite-events] Event deleted: ${eventId}`);
  } catch (error) {
    console.error(`[appwrite-events] Error deleting event ${eventId}:`, error);
    throw error;
  }
}

// =============================================================================
// HELPERS
// =============================================================================

/**
 * Parse les meals d'un événement
 */
export function parseMeals(event: Main): Meal[] {
  if (!event.meals) return [];
  try {
    const meals = JSON.parse(event.meals);
    // Add IDs to meals that don't have them for UI tracking
    return meals.map((meal: Meal) => {
      if (!meal.id) {
        return {
          ...meal,
          id: nanoid(6), // Generate a short UUID for tracking
        };
      }
      return meal;
    });
  } catch (error) {
    console.error("[appwrite-events] Error parsing meals:", error);
    return [];
  }
}

/**
 * Parse les contributeurs d'un événement
 */
export function parseContributors(event: Main): ContributorInfo[] {
  if (!event.contributors) return [];

  // Parser le tableau de strings (chaque string peut être un JSON ou un simple ID)
  try {
    const contributors: ContributorInfo[] = [];

    for (const contributorStr of event.contributors) {
      try {
        // Essayer de parser le JSON pour obtenir les informations du contributeur
        const contributor = JSON.parse(contributorStr);
        contributors.push(contributor);
      } catch (e) {
        // Si le parsing échoue, considérer que c'est un simple ID (ancien format)
        contributors.push({
          id: contributorStr,
          status: "accepted" as const,
        });
      }
    }

    return contributors;
  } catch (error) {
    console.error("[appwrite-events] Error parsing contributors:", error);
    return [];
  }
}

/**
 * Ajoute un repas à un événement
 */
export async function addMeal(eventId: string, meal: Meal): Promise<Main> {
  const event = await getEvent(eventId);
  if (!event) throw new Error(`Event ${eventId} not found`);

  const meals = parseMeals(event);
  meals.push(meal);

  return await updateEvent(eventId, { meals });
}

/**
 * Met à jour un repas dans un événement
 */
export async function updateMeal(
  eventId: string,
  mealIndex: number,
  meal: Meal,
): Promise<Main> {
  const event = await getEvent(eventId);
  if (!event) throw new Error(`Event ${eventId} not found`);

  const meals = parseMeals(event);
  if (mealIndex < 0 || mealIndex >= meals.length) {
    throw new Error(`Meal index ${mealIndex} out of bounds`);
  }

  meals[mealIndex] = meal;

  return await updateEvent(eventId, { meals });
}

/**
 * Supprime un repas d'un événement
 */
export async function deleteMeal(
  eventId: string,
  mealIndex: number,
): Promise<Main> {
  const event = await getEvent(eventId);
  if (!event) throw new Error(`Event ${eventId} not found`);

  const meals = parseMeals(event);
  if (mealIndex < 0 || mealIndex >= meals.length) {
    throw new Error(`Meal index ${mealIndex} out of bounds`);
  }

  meals.splice(mealIndex, 1);

  return await updateEvent(eventId, { meals });
}

// =============================================================================
// REALTIME
// =============================================================================

/**
 * Subscribe aux changements d'un événement spécifique
 */
export async function subscribeToEvent(
  eventId: string,
  callback: (event: Main) => void,
): Promise<() => void> {
  const { tables, config } = await getAppwriteInstances();
  const channel = `databases.${config.databaseId}.collections.${EVENTS_COLLECTION_ID}.documents.${eventId}`;

  return subscribe([channel], (response: any) => {
    if (
      response.events.includes(
        `databases.*.collections.*.documents.${eventId}.update`,
      )
    ) {
      callback(response.payload as unknown as Main);
    }
  });
}

/**
 * Subscribe à tous les événements (filtrage côté client)
 */
export async function subscribeToEvents(
  userId: string,
  userTeams: string[],
  callback: (event: Main, eventType: string) => void,
): Promise<() => void> {
  const { config } = await getAppwriteInstances();
  const channel = `databases.${config.databaseId}.collections.${EVENTS_COLLECTION_ID}.documents`;

  return subscribe([channel], async (response: any) => {
    const event = response.payload as unknown as Main;

    const hasAccess =
      event.createdBy === userId ||
      event.contributors?.includes(userId) ||
      event.teams?.some((teamId) => userTeams.includes(teamId));

    if (!hasAccess) return;

    let type = "update";
    if (response.events.some((e: string) => e.includes(".create"))) {
      type = "create";
    } else if (response.events.some((e: string) => e.includes(".delete"))) {
      type = "delete";
    }

    callback(event, type);
  });
}
