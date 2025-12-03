/**
 * Service Appwrite pour les événements
 *
 * Gère le CRUD des événements
 */

import { ID, Query, Permission, Role } from "appwrite";
import { getAppwriteInstances, getAppwriteConfig, subscribe } from "./appwrite";
import type { Main } from "../types/appwrite.d";
import type { UpdateEventData, CreateEventData } from "../types/events.d";
import { parseEventContributors } from "../utils/events.utils";

const { APPWRITE_CONFIG } = getAppwriteConfig();

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
export async function listEvents(): Promise<{ events: Main[] }> {
  try {
    const { tables } = await getAppwriteInstances();
    const response = await tables.listRows({
      databaseId: APPWRITE_CONFIG.databaseId,
      tableId: EVENTS_COLLECTION_ID,
      queries: [Query.orderDesc("dateStart")],
    });
    return { events: response.rows as unknown as Main[] };
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
    const { tables } = await getAppwriteInstances();
    const event = await tables.getRow({
      databaseId: APPWRITE_CONFIG.databaseId,
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
    const { tables } = await getAppwriteInstances();
    const eventId = ID.unique();

    const permissions = [
      Permission.read(Role.user(userId)),
      Permission.update(Role.user(userId)),
      Permission.delete(Role.user(userId)),
    ];

    if (data.contributors) {
      data.contributors.forEach((contributor) => {
        if (contributor.status === "accepted") {
          permissions.push(Permission.read(Role.user(contributor.id)));
          permissions.push(Permission.update(Role.user(contributor.id)));
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
      databaseId: APPWRITE_CONFIG.databaseId,
      tableId: EVENTS_COLLECTION_ID,
      rowId: eventId,
      data: {
        name: data.name,
        dateStart: data.dateStart,
        dateEnd: data.dateEnd,
        allDates: data.allDates, // Sauvegarder les dates calculées
        meals: data.meals ? data.meals.map((m) => JSON.stringify(m)) : [],
        createdBy: userId,
        teams: data.teams ?? [],
        contributors: data.contributors
          ? data.contributors.map((c) => JSON.stringify(c))
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
    const { tables } = await getAppwriteInstances();

    // Récupérer l'événement actuel pour avoir le créateur et les données existantes
    const currentEvent = await getEvent(eventId);
    if (!currentEvent) throw new Error(`Event ${eventId} not found`);

    const updateData: any = { ...data };

    if (data.meals) {
      updateData.meals = data.meals.map((m) => JSON.stringify(m));
    }

    if (data.contributors) {
      updateData.contributors = Array.isArray(data.contributors)
        ? data.contributors.map((c) => JSON.stringify(c))
        : [];
    }

    // S'assurer que allDates est inclus s'il est présent
    if (data.allDates) {
      updateData.allDates = data.allDates;
    }

    // Recalculer les permissions si les contributeurs ou les équipes changent
    let permissions: string[] | undefined;

    if (data.contributors || data.teams) {
      permissions = [
        Permission.read(Role.user(currentEvent.createdBy)),
        Permission.update(Role.user(currentEvent.createdBy)),
        Permission.delete(Role.user(currentEvent.createdBy)),
      ];

      // Gestion des équipes
      const teams = data.teams ?? currentEvent.teams ?? [];
      teams.forEach((teamId) => {
        permissions!.push(Permission.read(Role.team(teamId)));
        permissions!.push(Permission.update(Role.team(teamId)));
      });

      // Gestion des contributeurs
      // On utilise la liste fournie dans data (déjà objets EventContributor) ou celle existante (qu'on parse)
      const contributorsList = data.contributors
        ? data.contributors
        : parseEventContributors(currentEvent.contributors);

      contributorsList.forEach((contributor) => {
        if (contributor.status === "accepted") {
          permissions!.push(Permission.read(Role.user(contributor.id)));
          permissions!.push(Permission.update(Role.user(contributor.id)));
        }
      });
    }

    const event = await tables.updateRow({
      databaseId: APPWRITE_CONFIG.databaseId,
      tableId: EVENTS_COLLECTION_ID,
      rowId: eventId,
      data: updateData,
      permissions, // Passer les permissions mises à jour si calculées
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
    const { tables } = await getAppwriteInstances();
    await tables.deleteRow({
      databaseId: APPWRITE_CONFIG.databaseId,
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
