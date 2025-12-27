/**
 * Service Appwrite pour les événements
 *
 * Gère le CRUD des événements
 */

import { ID, Query } from "appwrite";
import { getAppwriteInstances, getAppwriteConfig, subscribe } from "./appwrite";
import type { Main } from "../types/appwrite.d";
import type { UpdateEventData, CreateEventData } from "../types/events.d";

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
 * Filtrage optimisé avec contributorsIds pour récupérer uniquement les événements où l'utilisateur est contributeur
 */
export async function listEvents(userId: string): Promise<{ events: Main[] }> {
  try {
    const { tables } = await getAppwriteInstances();
    const response = await tables.listRows({
      databaseId: APPWRITE_CONFIG.databaseId,
      tableId: EVENTS_COLLECTION_ID,
      queries: [
        Query.orderDesc("dateStart"),
        // Filtrer les événements où l'utilisateur est contributeur ou créateur
        Query.or([
          Query.equal("createdBy", userId),
          Query.contains("contributorsIds", userId),
        ]),
      ],
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
 * Note: Les permissions sont gérées côté serveur via les fonctions Appwrite
 */
export async function createEvent(
  data: CreateEventData,
  userId: string,
): Promise<Main> {
  try {
    const { tables } = await getAppwriteInstances();
    const eventId = ID.unique();

    // Extraire les IDs des contributors pour le champ contributorsIds
    const contributorsIds = data.contributors
      ? data.contributors.map((c) => c.id)
      : [];

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
        contributorsIds, // Ajouter le tableau d'IDs pour le filtrage optimisé
      },
      // Les permissions par défaut sont gérées côté serveur
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
 * Note: Les permissions sont gérées côté serveur via les fonctions Appwrite
 */
export async function updateEvent(
  eventId: string,
  data: UpdateEventData,
): Promise<Main> {
  try {
    const { tables } = await getAppwriteInstances();

    const updateData: any = { ...data };

    if (data.meals) {
      updateData.meals = data.meals.map((m) => JSON.stringify(m));
    }

    if (data.contributors) {
      updateData.contributors = Array.isArray(data.contributors)
        ? data.contributors.map((c) => JSON.stringify(c))
        : [];

      // Mettre à jour contributorsIds à partir des contributors
      updateData.contributorsIds = data.contributors.map((c) => c.id);
    }

    // S'assurer que allDates est inclus s'il est présent
    if (data.allDates) {
      updateData.allDates = data.allDates;
    }

    const event = await tables.updateRow({
      databaseId: APPWRITE_CONFIG.databaseId,
      tableId: EVENTS_COLLECTION_ID,
      rowId: eventId,
      data: updateData,
      // Les permissions sont mises à jour côté serveur via les fonctions Appwrite
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
 *
 * IMPORTANT: Appwrite Realtime envoie tous les documents pour lesquels l'utilisateur
 * a des permissions de lecture au niveau de la base de données. Le filtrage métier
 * (contributorsIds) doit donc être fait côté client dans le callback.
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

    console.log("[appwrite-events] Realtime RAW Payload:", {
      events: response.events,
      eventId: event.$id,
      updatedAt: event?.$updatedAt
    });

    let type = "update";
    if (response.events.some((e: string) => e.includes(".create"))) {
      type = "create";
    } else if (response.events.some((e: string) => e.includes(".delete"))) {
      type = "delete";
    }

    callback(event, type);
  });
}
