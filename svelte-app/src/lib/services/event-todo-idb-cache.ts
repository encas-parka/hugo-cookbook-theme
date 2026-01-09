/**
 * Cache IndexedDB pour EventTodo
 * Stocke les todos par événement avec metadata de synchronisation
 */

export interface EventTodoCacheMetadata {
  lastSync: string | null;
  eventId: string | null;
  itemCount: number;
}

export interface EventTodoIDBCache {
  loadTodos(eventId: string): Promise<Map<string, any>>;
  saveTodos(eventId: string, todos: Map<string, any>): Promise<void>;
  upsertTodo(eventId: string, todo: any): Promise<void>;
  deleteTodo(eventId: string, todoId: string): Promise<void>;
  loadMetadata(eventId: string): Promise<EventTodoCacheMetadata>;
  saveMetadata(eventId: string, metadata: EventTodoCacheMetadata): Promise<void>;
  clearEvent(eventId: string): Promise<void>;
  close(): void;
}

class EventTodoIndexedDBCache implements EventTodoIDBCache {
  private dbName = "event-todo-cache";
  private db: IDBDatabase | null = null;
  private version = 1;

  // Noms des stores
  private readonly TODOS_STORE = "todos";
  private readonly METADATA_STORE = "metadata";

  /**
   * Ouvre/crée la base IndexedDB
   */
  async open(): Promise<void> {
    if (this.db) return;

    const tryOpen = (): Promise<IDBDatabase> => {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(this.dbName, this.version);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;

          // Store des todos (clé composite : eventId + todoId)
          if (!db.objectStoreNames.contains(this.TODOS_STORE)) {
            const todoStore = db.createObjectStore(this.TODOS_STORE, {
              keyPath: "id",
            });
            todoStore.createIndex("eventId", "eventId", { unique: false });
            console.log(`[EventTodoIDBCache] Store '${this.TODOS_STORE}' créé`);
          }

          // Store des metadata (clé : eventId)
          if (!db.objectStoreNames.contains(this.METADATA_STORE)) {
            db.createObjectStore(this.METADATA_STORE, {
              keyPath: "eventId",
            });
            console.log(`[EventTodoIDBCache] Store '${this.METADATA_STORE}' créé`);
          }
        };
      });
    };

    // Tenter d'ouvrir
    let db = await tryOpen();

    // Vérifier l'intégrité
    const hasTodosStore = db.objectStoreNames.contains(this.TODOS_STORE);
    const hasMetadataStore = db.objectStoreNames.contains(this.METADATA_STORE);

    if (!hasTodosStore || !hasMetadataStore) {
      console.warn(`[EventTodoIDBCache] Base corrompue, suppression et recréation...`);
      db.close();

      // Supprimer et recréer
      await new Promise<void>((resolve, reject) => {
        const request = indexedDB.deleteDatabase(this.dbName);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });

      db = await tryOpen();
    }

    this.db = db;
    console.log(`[EventTodoIDBCache] Base ouverte: ${this.dbName}`);
  }

  // ========================================================================
  // CRUD TODOS
  // ========================================================================

  /**
   * Charge tous les todos d'un événement
   */
  async loadTodos(eventId: string): Promise<Map<string, any>> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.TODOS_STORE, "readonly");
      const store = tx.objectStore(this.TODOS_STORE);
      const index = store.index("eventId");
      const request = index.getAll(eventId);

      request.onsuccess = () => {
        const todos = new Map<string, any>();
        (request.result as any[]).forEach((todo) => {
          todos.set(todo.todoId, todo);
        });
        console.log(`[EventTodoIDBCache] ${todos.size} todos chargés pour ${eventId}`);
        resolve(todos);
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Sauvegarde tous les todos d'un événement
   */
  async saveTodos(eventId: string, todos: Map<string, any>): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction([this.TODOS_STORE, this.METADATA_STORE], "readwrite");
      const todoStore = tx.objectStore(this.TODOS_STORE);

      // Supprimer les anciens todos de cet événement
      const index = todoStore.index("eventId");
      const deleteRequest = index.openCursor(IDBKeyRange.only(eventId));

      deleteRequest.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          todoStore.delete(cursor.primaryKey);
          cursor.continue();
        }
      };

      // Ajouter les nouveaux todos
      todos.forEach((todo) => {
        const id = `${eventId}_${todo.$id}`;
        todoStore.put({
          id,
          eventId,
          todoId: todo.$id,
          ...todo,
        });
      });

      tx.oncomplete = () => {
        console.log(`[EventTodoIDBCache] ${todos.size} todos sauvegardés pour ${eventId}`);
        resolve();
      };

      tx.onerror = () => reject(tx.error);
    });
  }

  /**
   * Ajoute ou met à jour un todo
   */
  async upsertTodo(eventId: string, todo: any): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.TODOS_STORE, "readwrite");
      const store = tx.objectStore(this.TODOS_STORE);

      const id = `${eventId}_${todo.$id}`;
      const data = {
        id,
        eventId,
        todoId: todo.$id,
        ...todo,
      };

      const request = store.put(data);

      request.onsuccess = () => {
        console.log(`[EventTodoIDBCache] Todo ${todo.$id} upserté pour ${eventId}`);
        resolve();
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Supprime un todo
   */
  async deleteTodo(eventId: string, todoId: string): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.TODOS_STORE, "readwrite");
      const store = tx.objectStore(this.TODOS_STORE);
      const id = `${eventId}_${todoId}`;
      const request = store.delete(id);

      request.onsuccess = () => {
        console.log(`[EventTodoIDBCache] Todo ${todoId} supprimé pour ${eventId}`);
        resolve();
      };

      request.onerror = () => reject(request.error);
    });
  }

  // ========================================================================
  // METADATA
  // ========================================================================

  /**
   * Charge les metadata d'un événement
   */
  async loadMetadata(eventId: string): Promise<EventTodoCacheMetadata> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.METADATA_STORE, "readonly");
      const store = tx.objectStore(this.METADATA_STORE);
      const request = store.get(eventId);

      request.onsuccess = () => {
        if (request.result) {
          resolve(request.result as EventTodoCacheMetadata);
        } else {
          resolve({
            lastSync: null,
            eventId,
            itemCount: 0,
          });
        }
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Sauvegarde les metadata d'un événement
   */
  async saveMetadata(
    eventId: string,
    metadata: EventTodoCacheMetadata,
  ): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.METADATA_STORE, "readwrite");
      const store = tx.objectStore(this.METADATA_STORE);

      const request = store.put({
        eventId,
        ...metadata,
      });

      request.onsuccess = () => {
        console.log(`[EventTodoIDBCache] Metadata sauvegardées pour ${eventId}`);
        resolve();
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Supprime tous les todos d'un événement
   */
  async clearEvent(eventId: string): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction([this.TODOS_STORE, this.METADATA_STORE], "readwrite");

      // Supprimer les todos
      const todoStore = tx.objectStore(this.TODOS_STORE);
      const index = todoStore.index("eventId");
      const deleteRequest = index.openCursor(IDBKeyRange.only(eventId));

      deleteRequest.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          todoStore.delete(cursor.primaryKey);
          cursor.continue();
        }
      };

      // Supprimer les metadata
      const metaStore = tx.objectStore(this.METADATA_STORE);
      metaStore.delete(eventId);

      tx.oncomplete = () => {
        console.log(`[EventTodoIDBCache] Événement ${eventId} vidé`);
        resolve();
      };

      tx.onerror = () => reject(tx.error);
    });
  }

  /**
   * Ferme la connexion
   */
  close(): void {
    if (this.db) {
      this.db.close();
      this.db = null;
      console.log("[EventTodoIDBCache] Connexion fermée");
    }
  }
}

/**
 * Factory pour créer le cache
 */
export async function createEventTodoIDBCache(): Promise<EventTodoIDBCache> {
  const cache = new EventTodoIndexedDBCache();
  await cache.open();
  return cache;
}
