/**
 * Service Appwrite pour les événements
 *
 * Gère le CRUD des événements
 */

import { ID, Query } from "appwrite";
import { getAppwriteInstances, getAppwriteConfig, subscribe } from "./appwrite";
import { safeOperation } from "$lib/utils/safe-operation";
import type { Main } from "../types/appwrite.d";
import type { UpdateEventData, CreateEventData } from "../types/events.d";

const { APPWRITE_CONFIG } = getAppwriteConfig();

// =============================================================================
// CONFIGURATION
// =============================================================================

export const EVENTS_COLLECTION_ID = "main";

// =============================================================================
// CRUD OPERATIONS
// =============================================================================

/**
 * Liste tous les événements accessibles à l'utilisateur
 * Filtrage optimisé avec contributorsIds pour récupérer uniquement les événements où l'utilisateur est contributeur
 */
export async function listEvents(userId: string): Promise<{ events: Main[] }> {
  return safeOperation(
    async () => {
      const { tables } = await getAppwriteInstances();
      const response = await tables.listRows({
        databaseId: APPWRITE_CONFIG.databaseId,
        tableId: EVENTS_COLLECTION_ID,
        queries: [
          Query.orderDesc("dateStart"),
          // ✅ PLUS DE FILTRAGE: Les permissions gèrent l'accès via labels/teams
          // Seuls les événements auxquels l'utilisateur a accès seront retournés
        ],
      });
      return { events: response.rows as unknown as Main[] };
    },
    {
      context: "AppwriteEvents.listEvents",
      timeout: 20000, // 30s pour charger tous les événements
      errorMessage: "Erreur lors du chargement des événements",
    },
  );
}

/**
 * Récupère un événement par ID
 */
export async function getEvent(eventId: string): Promise<Main | null> {
  try {
    return await safeOperation(
      async () => {
        const { tables } = await getAppwriteInstances();
        const event = await tables.getRow({
          databaseId: APPWRITE_CONFIG.databaseId,
          tableId: EVENTS_COLLECTION_ID,
          rowId: eventId,
        });
        return event as unknown as Main;
      },
      {
        context: "AppwriteEvents.getEvent",
        timeout: 10000, // 10s pour un seul événement
        errorMessage: "Erreur lors du chargement de l'événement",
      },
    );
  } catch (error: any) {
    // Préserver le comportement 404
    if (error.code === 404) return null;
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
  return safeOperation(
    async () => {
      const { tables } = await getAppwriteInstances();
      const eventId = ID.unique();

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
          // ✅ SUPPRIMÉ: contributorsIds n'est plus nécessaire
          todos: data.todos ? data.todos.map((t) => JSON.stringify(t)) : [],
        },
        // Les permissions par défaut sont gérées côté serveur
      });

      console.log(`[appwrite-events] Event created: ${eventId}`);

      // 🔥 Attribuer le Label au créateur de l'événement
      const { functions } = await getAppwriteInstances();
      await functions.createExecution({
        functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
        body: JSON.stringify({
          action: "add-label-to-user",
          mainId: eventId,
          userId: userId,
        }),
        async: false, // Attendre que le Label soit attribué
      });

      console.log(
        `[appwrite-events] Label ${eventId} attribué au créateur ${userId}`,
      );

      return event as unknown as Main;
    },
    {
      context: "AppwriteEvents.createEvent",
      timeout: 15000, // Augmenter le timeout pour la création du Label
      successMessage: "Événement créé avec succès",
      errorMessage: "Erreur lors de la création de l'événement",
    },
  );
}

/**
 * Met à jour un événement existant
 * Note: Les permissions sont gérées côté serveur via les fonctions Appwrite
 */
export async function updateEvent(
  eventId: string,
  data: UpdateEventData,
): Promise<Main> {
  return safeOperation(
    async () => {
      const { tables } = await getAppwriteInstances();

      const updateData: any = { ...data };

      if (data.meals) {
        updateData.meals = data.meals.map((m) => JSON.stringify(m));
      }

      if (data.contributors) {
        updateData.contributors = Array.isArray(data.contributors)
          ? data.contributors.map((c) => JSON.stringify(c))
          : [];

        // ✅ SUPPRIMÉ: contributorsIds n'est plus nécessaire
      }

      if (data.todos) {
        updateData.todos = data.todos.map((t) => JSON.stringify(t));
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
    },
    {
      context: "AppwriteEvents.updateEvent",
      timeout: 10000,
      successMessage: "Événement mis à jour",
      errorMessage: "Erreur lors de la mise à jour",
    },
  );
}

/**
 * Supprime un événement
 */
export async function deleteEvent(eventId: string): Promise<void> {
  return safeOperation(
    async () => {
      const { tables, functions } = await getAppwriteInstances();

      // Supprimer l'événement
      await tables.deleteRow({
        databaseId: APPWRITE_CONFIG.databaseId,
        tableId: EVENTS_COLLECTION_ID,
        rowId: eventId,
      });

      console.log(`[appwrite-events] Event deleted: ${eventId}`);

      // 🔥 Supprimer le Label associé
      await functions.createExecution({
        functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
        body: JSON.stringify({
          action: "delete-event-label",
          mainId: eventId,
        }),
        async: true, // Async car le cleanup peut prendre du temps
      });

      console.log(
        `[appwrite-events] Label deletion initiated for event: ${eventId}`,
      );
    },
    {
      context: "AppwriteEvents.deleteEvent",
      timeout: 10000,
      successMessage: "Événement supprimé",
      errorMessage: "Erreur lors de la suppression",
    },
  );
}
