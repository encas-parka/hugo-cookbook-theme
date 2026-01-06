/**
 * Services d'interaction avec Appwrite - Collection EventTodo
 */

import { ID, Query, type Models } from "appwrite";
import { getAppwriteInstances } from "./appwrite";
import type { EventTodo } from "../types/appwrite";
import { DATABASE_ID } from "./appwrite-materiel"; // Réutilisation de DATABASE_ID

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
  const { databases } = await getAppwriteInstances();

  const response = await databases.listDocuments<EventTodo>(
    DATABASE_ID,
    EVENT_TODO_COLLECTION_ID,
    [
      Query.equal("eventId", eventId),
      Query.limit(100), // Limite raisonnable pour une todo list
    ],
  );

  return response.documents;
}

// =============================================================================
// CRÉATION
// =============================================================================

export async function createEventTodo(
  data: Omit<EventTodoCreate, "taskId">
): Promise<Models.Document<EventTodo>> {
  const { databases } = await getAppwriteInstances();
  
  const id = ID.unique();

  const payload = {
    ...data,
    taskId: id, // taskId redundant avec $id mais requis par le schéma
  };

  return await databases.createDocument<EventTodo>(
    DATABASE_ID,
    EVENT_TODO_COLLECTION_ID,
    id,
    payload,
  );
}

// =============================================================================
// MISE À JOUR
// =============================================================================

export async function updateEventTodo(
  documentId: string,
  data: EventTodoUpdate,
): Promise<Models.Document<EventTodo>> {
  const { databases } = await getAppwriteInstances();

  return await databases.updateDocument<EventTodo>(
    DATABASE_ID,
    EVENT_TODO_COLLECTION_ID,
    documentId,
    data,
  );
}

// =============================================================================
// SUPPRESSION
// =============================================================================

export async function deleteEventTodo(documentId: string): Promise<void> {
  const { databases } = await getAppwriteInstances();

  await databases.deleteDocument(
    DATABASE_ID,
    EVENT_TODO_COLLECTION_ID,
    documentId,
  );
}

// =============================================================================
// REALTIME
// =============================================================================

export function getEventTodoRealtimeChannels(): string[] {
  return [`databases.${DATABASE_ID}.collections.${EVENT_TODO_COLLECTION_ID}`];
}
