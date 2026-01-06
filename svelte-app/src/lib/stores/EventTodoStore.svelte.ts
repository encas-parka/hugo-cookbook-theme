import { SvelteMap } from "svelte/reactivity";
import type { EventTodo } from "$lib/types/appwrite";
// import { EventTodoPriority } from "$lib/types/appwrite"; // Enum values not available at runtime from d.ts
import {
  listEventTodos,
  createEventTodo,
  updateEventTodo,
  deleteEventTodo,
  getEventTodoRealtimeChannels,
  type EventTodoCreate,
  type EventTodoUpdate,
} from "$lib/services/appwrite-event-todos";
import { realtimeManager } from "./RealtimeManager.svelte";
import { globalState } from "./GlobalState.svelte";

export class EventTodoStore {
  // État réactif par EventId (Map<EventId, Map<TodoId, Todo>>)
  // Cela permet de gérer plusieurs événements si besoin, mais surtout de bien isoler.
  // Pour simplifier, on stocke tout dans une Map plate <TodoId, Todo> et on filtrera
  // ou on chargera/déchargera selon l'événement actif.
  // Mais attention au garbage collection.
  // Mieux: On garde une map globale <TodoId, Todo> et on gère le chargement.
  
  #todos = new SvelteMap<string, EventTodo>();
  #loading = $state(false);
  #error = $state<string | null>(null);
  #currentEventId = $state<string | null>(null);

  get loading() { return this.#loading; }
  get error() { return this.#error; }

  // Liste dérivée filtrée pour l'événement courant
  #todosList = $derived(
    Array.from(this.#todos.values())
      .filter(t => t.eventId === this.#currentEventId)
  // Tri: Priorité (High > Medium > Low) puis Date
      .sort((a, b) => {
        const priorityOrder: Record<string, number> = {
            "high": 3,
            "medium": 2,
            "low": 1,
        };
        const pA = a.priority ? priorityOrder[a.priority] || 0 : 0;
        const pB = b.priority ? priorityOrder[b.priority] || 0 : 0;
        if (pA !== pB) return pB - pA; // Descending priority
        return (a.$createdAt < b.$createdAt) ? -1 : 1;
      })
  );

  get todos() {
    return this.#todosList;
  }

  // =============================================================================
  // ACTIONS
  // =============================================================================

  async loadTodos(eventId: string) {
    if (this.#currentEventId === eventId && this.#todos.size > 0) return; // Déjà chargé (ou partiellement)
    
    this.#currentEventId = eventId;
    this.#loading = true;
    this.#error = null;

    try {
      const todos = await listEventTodos(eventId);
      
      // On ignore les vieux todos d'autres events pour nettoyer la mémoire ?
      // Pour l'instant on clear tout quand on change d'event pour faire simple.
      this.#todos.clear();

      for (const todo of todos) {
        this.#todos.set(todo.$id, todo);
      }

      this.#setupRealtime();
    } catch (err) {
      this.#error = err instanceof Error ? err.message : "Erreur chargement tâches";
      console.error(err);
    } finally {
      this.#loading = false;
    }
  }

  async createTodo(eventId: string, data: Partial<EventTodo>) {
    try {
      // Optimistic update tricky for creation because we need ID.
      // We wait for server response.
      // @ts-ignore - spread partial logic
      const newTodo = await createEventTodo({
        eventId,
        taskName: data.taskName || "Nouvelle Tâche",
        priority: data.priority || "medium",
        ...data
      });
      
      this.#todos.set(newTodo.$id, newTodo);
      return newTodo;
    } catch (err) {
      console.error("Error creating todo:", err);
      throw err;
    }
  }

  async updateTodo(todoId: string, updates: EventTodoUpdate) {
    const original = this.#todos.get(todoId);
    if (!original) return;

    // Optimistic Update
    const optimistic = { ...original, ...updates };
    // @ts-ignore - Models.Document types are strict
    this.#todos.set(todoId, optimistic);

    try {
      await updateEventTodo(todoId, updates);
    } catch (err) {
      console.error("Error updating todo:", err);
      // Revert
      this.#todos.set(todoId, original);
      throw err;
    }
  }

  async deleteTodo(todoId: string) {
    const original = this.#todos.get(todoId);
    if (!original) return;

    // Optimistic Delete
    this.#todos.delete(todoId);

    try {
      await deleteEventTodo(todoId);
    } catch (err) {
      console.error("Error deleting todo:", err);
      // Revert
      this.#todos.set(todoId, original);
      throw err;
    }
  }

  // =============================================================================
  // REALTIME
  // =============================================================================

  async #setupRealtime() {
    const channels = getEventTodoRealtimeChannels();
    
    realtimeManager.register(channels, (response) => {
      // Filtrer les événements pour ne garder que ceux qui concernent l'event courant
      // Mais le payload realtime contient tout le document, donc on peut vérifier eventId.
      const event = response.payload as EventTodo;
      
      if (this.#currentEventId && event.eventId !== this.#currentEventId) return;

      const eventType = response.events[0]; // e.g. databases...documents.create

      if (eventType.includes(".create") || eventType.includes(".update")) {
        this.#todos.set(event.$id, event);
      } else if (eventType.includes(".delete")) {
        this.#todos.delete(event.$id);
      }
    });
  }
}

export const eventTodoStore = new EventTodoStore();
