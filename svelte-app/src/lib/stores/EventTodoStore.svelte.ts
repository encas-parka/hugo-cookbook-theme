import { SvelteMap } from "svelte/reactivity";
import type { EventTodo } from "$lib/types/appwrite";
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
import {
  createEventTodoIDBCache,
  type EventTodoIDBCache,
} from "$lib/services/event-todo-idb-cache";
import {
  parseEventTodoPriority,
  PRIORITY_ORDER,
} from "$lib/utils/event-todo.utils";

export class EventTodoStore {
  // État réactif
  #todos = new SvelteMap<string, EventTodo>();
  #loading = $state(false);
  #error = $state<string | null>(null);
  #currentEventId = $state<string | null>(null);

  // Cache IndexedDB
  #cache: EventTodoIDBCache | null = null;

  // Promises d'initialisation par eventId (déduplication)
  #initPromises = new Map<string, Promise<void>>();

  get loading() {
    return this.#loading;
  }

  get error() {
    return this.#error;
  }

  // Liste dérivée filtrée pour l'événement courant
  #todosList = $derived.by(() => {
    return Array.from(this.#todos.values())
      .filter((t) => t.eventId === this.#currentEventId)
      .sort((a, b) => {
        // Tri par priorité puis date de création
        const pA = a.priority ? PRIORITY_ORDER[a.priority] || 0 : 0;
        const pB = b.priority ? PRIORITY_ORDER[b.priority] || 0 : 0;
        if (pA !== pB) return pB - pA; // Descending priority
        return a.$createdAt < b.$createdAt ? -1 : 1;
      });
  });

  get todos() {
    return this.#todosList;
  }

  // =============================================================================
  // INITIALISATION
  // =============================================================================

  /**
   * Initialise le cache (doit être appelé une fois au démarrage)
   */
  async initialize(): Promise<void> {
    if (this.#cache) return; // Déjà initialisé

    this.#cache = await createEventTodoIDBCache();
    console.log("[EventTodoStore] Cache initialisé");
  }

  /**
   * Charge les todos d'un événement avec déduplication
   */
  async loadTodos(eventId: string): Promise<void> {
    // Vérifier si déjà en cours pour cet eventId
    if (this.#initPromises.has(eventId)) {
      console.log(`[EventTodoStore] Chargement déjà en cours pour ${eventId}`);
      return this.#initPromises.get(eventId);
    }

    // Créer la Promise
    const initPromise = (async () => {
      // Si même événement, pas besoin de recharger
      if (this.#currentEventId === eventId && this.#todos.size > 0) {
        console.log(`[EventTodoStore] Todos déjà chargés pour ${eventId}`);
        return;
      }

      console.log(`[EventTodoStore] Chargement des todos pour ${eventId}`);
      this.#currentEventId = eventId;
      this.#loading = true;
      this.#error = null;

      try {
        // 1. Charger depuis le cache IDB
        if (this.#cache) {
          const cachedTodos = await this.#cache.loadTodos(eventId);
          const metadata = await this.#cache.loadMetadata(eventId);

          if (cachedTodos.size > 0) {
            console.log(
              `[EventTodoStore] ${cachedTodos.size} todos chargés depuis le cache`,
            );
            this.#todos.clear();
            cachedTodos.forEach((todo) => {
              this.#todos.set(todo.$id, todo);
            });

            // Vérifier si le cache est frais (< 5 min)
            if (metadata.lastSync) {
              const syncAge =
                Date.now() - new Date(metadata.lastSync).getTime();
              if (syncAge < 5 * 60 * 1000) {
                // Cache frais, pas besoin de sync
                console.log(
                  "[EventTodoStore] Cache frais (< 5 min), skip sync",
                );
                return;
              }
            }
          }
        }

        // 2. Sync depuis Appwrite
        await this.#syncFromAppwrite(eventId);

        // 3. Sauvegarder dans le cache
        if (this.#cache) {
          await this.#cache.saveTodos(eventId, this.#todos);
          await this.#cache.saveMetadata({
            lastSync: new Date().toISOString(),
            eventId,
            itemCount: this.#todos.size,
          });
        }

        // 4. Setup realtime
        await this.#setupRealtime();
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Erreur lors du chargement";
        this.#error = message;
        console.error("[EventTodoStore]", err);
        throw err;
      } finally {
        this.#loading = false;
        this.#initPromises.delete(eventId);
      }
    })();

    // Stocker la Promise
    this.#initPromises.set(eventId, initPromise);

    return initPromise;
  }


  async #syncFromAppwrite(eventId: string): Promise<void> {
    try {
      const todos = await listEventTodos(eventId);

      // Vider l'ancien événement et charger le nouveau
      this.#todos.clear();

      for (const todo of todos) {
        this.#todos.set(todo.$id, todo);
      }

      console.log(
        `[EventTodoStore] ${todos.length} todos sync depuis Appwrite`,
      );
    } catch (err) {
      console.error("[EventTodoStore] Erreur sync Appwrite:", err);
      throw err;
    }
  }

  // =============================================================================
  // CRUD PUBLIC
  // =============================================================================

  async createTodo(
    eventId: string,
    data: Partial<EventTodo>,
  ): Promise<EventTodo> {
    const todo = await createEventTodo({
      eventId,
      taskName: data.taskName || "Nouvelle Tâche",
      priority: data.priority || "medium",
      ...data,
    } as Omit<EventTodoCreate, "taskId">);

    this.#todos.set(todo.$id, todo);

    // Persister dans le cache
    if (this.#cache) {
      await this.#cache.upsertTodo(eventId, todo);
    }

    console.log(`[EventTodoStore] Todo créé: ${todo.$id}`);
    return todo;
  }

  async updateTodo(todoId: string, updates: EventTodoUpdate): Promise<void> {
    const todo = await updateEventTodo(todoId, updates);
    this.#todos.set(todoId, todo);

    // Persister dans le cache
    if (this.#cache) {
      await this.#cache.upsertTodo(this.#currentEventId!, todo);
    }

    console.log(`[EventTodoStore] Todo mis à jour: ${todoId}`);
  }

  async deleteTodo(todoId: string): Promise<void> {
    await deleteEventTodo(todoId);
    this.#todos.delete(todoId);

    // Supprimer du cache
    if (this.#cache) {
      await this.#cache.deleteTodo(this.#currentEventId!, todoId);
    }

    console.log(`[EventTodoStore] Todo supprimé: ${todoId}`);
  }

  // =============================================================================
  // REALTIME
  // =============================================================================

  async #setupRealtime() {
    const channels = getEventTodoRealtimeChannels();

    realtimeManager.register(channels, (response) => {
      // Filtrer par eventId courant
      const event = response.payload as EventTodo;

      if (this.#currentEventId && event.eventId !== this.#currentEventId) {
        return; // Ignorer les todos d'autres événements
      }

      const eventType = response.events[0];

      if (eventType.includes(".create") || eventType.includes(".update")) {
        this.#todos.set(event.$id, event);

        // Mettre à jour le cache
        if (this.#cache) {
          this.#cache.upsertTodo(this.#currentEventId!, event).catch((err) => {
            console.error("[EventTodoStore] Erreur mise à jour cache:", err);
          });
        }
      } else if (eventType.includes(".delete")) {
        this.#todos.delete(event.$id);

        // Supprimer du cache
        if (this.#cache) {
          this.#cache
            .deleteTodo(this.#currentEventId!, event.$id)
            .catch((err) => {
              console.error("[EventTodoStore] Erreur suppression cache:", err);
            });
        }
      }
    });
  }

  // =============================================================================
  // UTILITAIRES
  // =============================================================================

  async clearCache(): Promise<void> {
    if (this.#cache && this.#currentEventId) {
      await this.#cache.clearEvent(this.#currentEventId);
    }
    this.#todos.clear();
  }

  destroy(): void {
    if (this.#cache) {
      this.#cache.close();
      this.#cache = null;
    }
    this.#todos.clear();
    this.#currentEventId = null;
    console.log("[EventTodoStore] Ressources nettoyées");
  }
}

export const eventTodoStore = new EventTodoStore();
