/**
 * Services d'interaction avec Appwrite - Collection EventTodo
 */

import { ID, Query, type Models } from "appwrite";
import { getAppwriteInstances, getAppwriteConfig } from "./appwrite";
import { safeOperation } from "$lib/utils/safe-operation";
import type { EventTodo } from "../types/appwrite";

const APPWRITE_CONFIG = getAppwriteConfig();
export const EVENT_TODO_COLLECTION_ID = "eventTodo";

// =============================================================================
// TYPES
// =============================================================================

export type EventTodoCreate = Omit<
  EventTodo,
  "$id" | keyof Models.Row | "taskId" // taskId est souvent redondant avec $id, mais le type l'exige. On le génèrera.
> & {
  // Optionnels à la création si nécessaire
};

export type EventTodoUpdate = Partial<
  Omit<EventTodo, "$id" | keyof Models.Row>
>;

// =============================================================================
// LECTURE
// =============================================================================

/**
 * Liste les tâches d'un événement spécifique
 */
export async function listEventTodos(
  eventId: string,
): Promise<Models.Document<EventTodo>[]> {
  return safeOperation(
    async () => {
      const { databases } = await getAppwriteInstances();

      const response = await databases.listDocuments<EventTodo>(
        APPWRITE_CONFIG.APPWRITE_CONFIG.databaseId,
        EVENT_TODO_COLLECTION_ID,
        [
          Query.equal("eventId", eventId),
          Query.limit(100), // Limite raisonnable pour une todo list
        ],
      );

      return response.documents;
    },
    {
      context: "AppwriteEventTodos.list",
      timeout: 15000, // 15s pour une liste de todos
      errorMessage: "Erreur lors du chargement des tâches",
    },
  );
}

// =============================================================================
// CRÉATION
// =============================================================================

export async function createEventTodo(
  data: Omit<EventTodoCreate, "taskId">,
): Promise<Models.Document<EventTodo>> {
  return safeOperation(
    async () => {
      const { databases } = await getAppwriteInstances();

      const id = ID.unique();

      const payload = {
        ...data,
        taskId: id, // taskId redundant avec $id mais requis par le schéma
      };

      return await databases.createDocument<EventTodo>(
        APPWRITE_CONFIG.APPWRITE_CONFIG.databaseId,
        EVENT_TODO_COLLECTION_ID,
        id,
        payload,
      );
    },
    {
      context: "AppwriteEventTodos.create",
      timeout: 10000,
      successMessage: "Tâche créée",
      errorMessage: "Erreur lors de la création",
    },
  );
}

// =============================================================================
// MISE À JOUR
// =============================================================================

export async function updateEventTodo(
  documentId: string,
  data: EventTodoUpdate,
): Promise<Models.Document<EventTodo>> {
  return safeOperation(
    async () => {
      const { databases } = await getAppwriteInstances();

      return await databases.updateDocument<EventTodo>(
        APPWRITE_CONFIG.APPWRITE_CONFIG.databaseId,
        EVENT_TODO_COLLECTION_ID,
        documentId,
        data,
      );
    },
    {
      context: "AppwriteEventTodos.update",
      timeout: 10000,
      successMessage: "Tâche mise à jour",
      errorMessage: "Erreur lors de la mise à jour",
    },
  );
}

// =============================================================================
// SUPPRESSION
// =============================================================================

export async function deleteEventTodo(documentId: string): Promise<void> {
  return safeOperation(
    async () => {
      const { databases } = await getAppwriteInstances();

      await databases.deleteDocument(
        APPWRITE_CONFIG.APPWRITE_CONFIG.databaseId,
        EVENT_TODO_COLLECTION_ID,
        documentId,
      );
    },
    {
      context: "AppwriteEventTodos.delete",
      timeout: 10000,
      successMessage: "Tâche supprimée",
      errorMessage: "Erreur lors de la suppression",
    },
  );
}

// =============================================================================
// REALTIME
// =============================================================================

export function getEventTodoRealtimeChannels(): string[] {
  return [
    `databases.${APPWRITE_CONFIG.APPWRITE_CONFIG.databaseId}.collections.${EVENT_TODO_COLLECTION_ID}`,
  ];
}
