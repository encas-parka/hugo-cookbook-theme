/**
 * Service de cache IndexedDB pour RecipesStore
 *
 * Architecture:
 * - 1 base: `recipes-cache`
 * - 1 store "recipes-index" pour les RecipeIndexEntry (index léger)
 * - 1 store "recipes-details" pour les Recettes (détails complets)
 * - 1 store "metadata" pour lastSync + buildTimestamp
 *
 * Stratégie:
 * - L'index est chargé au démarrage (léger)
 * - Les détails sont lazy-loadés à la demande
 * - Cache persistant pour éviter les fetches répétés
 */

import type { Recettes } from "../types/appwrite";
import type {
  RecipeIndexEntry,
  RecipeForDisplay,
  RecipesCacheMetadata,
} from "../types/recipes.types";

// =============================================================================
// TYPES
// =============================================================================

export interface RecipesIDBCache {
  open(): Promise<void>;

  // Index
  loadRecipesIndex(): Promise<Map<string, RecipeIndexEntry>>;
  saveRecipesIndex(recipes: Map<string, RecipeIndexEntry>): Promise<void>;

  // Détails
  loadRecipeDetail(uuid: string): Promise<Recettes | null>;
  saveRecipeDetail(recipe: Recettes): Promise<void>;
  loadAllRecipeDetails(): Promise<Map<string, Recettes>>;

  loadMetadata(): Promise<RecipesCacheMetadata>;
  saveMetadata(metadata: RecipesCacheMetadata): Promise<void>;

  // Utilitaires
  deleteRecipeDetail(uuid: string): Promise<void>;
  clear(): Promise<void>;
  close(): void;
}

// =============================================================================
// IMPLEMENTATION
// =============================================================================

class RecipesIndexedDBCache implements RecipesIDBCache {
  private dbName = "recipes-cache";
  private db: IDBDatabase | null = null;
  private version = 4; // Incrément de version pour format de métadonnées simplifié

  // Noms des object stores
  private readonly RECIPES_INDEX_STORE = "recipes-index";
  private readonly RECIPES_DETAILS_STORE = "recipes-details";
  private readonly METADATA_STORE = "metadata";

  // Clés pour les métadonnées
  private readonly LAST_SYNC_KEY = "lastSync";
  private readonly BUILD_TIMESTAMP_KEY = "buildTimestamp";
  private readonly LAST_APPWRITE_SYNC_KEY = "lastAppwriteSync";
  private readonly RECIPES_COUNT_KEY = "recipesCount";

  /**
   * Ouvre/crée la base IndexedDB
   */
  async open(): Promise<void> {
    if (this.db) return;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        console.log(`[RecipesIDBCache] Base ouverte: ${this.dbName}`);
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Store de l'index (key = $id)
        if (!db.objectStoreNames.contains(this.RECIPES_INDEX_STORE)) {
          db.createObjectStore(this.RECIPES_INDEX_STORE, {
            keyPath: "$id",
          });
          console.log("[RecipesIDBCache] Object store 'recipes-index' créé");
        }

        // Store des détails (key = $id)
        if (!db.objectStoreNames.contains(this.RECIPES_DETAILS_STORE)) {
          db.createObjectStore(this.RECIPES_DETAILS_STORE, {
            keyPath: "$id",
          });
          console.log("[RecipesIDBCache] Object store 'recipes-details' créé");
        }

        // Store des métadonnées
        if (!db.objectStoreNames.contains(this.METADATA_STORE)) {
          db.createObjectStore(this.METADATA_STORE, { keyPath: "key" });
          console.log("[RecipesIDBCache] Object store 'metadata' créé");
        }
      };
    });
  }

  // =============================================================================
  // INDEX
  // =============================================================================

  /**
   * Charge l'index complet des recettes
   */
  async loadRecipesIndex(): Promise<Map<string, RecipeIndexEntry>> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.RECIPES_INDEX_STORE, "readonly");
      const store = tx.objectStore(this.RECIPES_INDEX_STORE);
      const request = store.getAll();

      request.onsuccess = () => {
        const recipes = new Map<string, RecipeIndexEntry>();
        (request.result as RecipeIndexEntry[]).forEach((recipe) => {
          recipes.set(recipe.$id, recipe);
        });
        console.log(
          `[RecipesIDBCache] ${recipes.size} recettes (index) chargées`,
        );
        resolve(recipes);
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Sauvegarde l'index complet (bulk write)
   */
  async saveRecipesIndex(
    recipes: Map<string, RecipeIndexEntry>,
  ): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.RECIPES_INDEX_STORE, "readwrite");
      const store = tx.objectStore(this.RECIPES_INDEX_STORE);

      store.clear();

      recipes.forEach((recipe) => {
        store.put(recipe);
      });

      tx.oncomplete = () => {
        console.log(
          `[RecipesIDBCache] ${recipes.size} recettes (index) sauvegardées`,
        );
        resolve();
      };

      tx.onerror = () => reject(tx.error);
    });
  }

  // =============================================================================
  // DÉTAILS
  // =============================================================================

  /**
   * Charge les détails d'une recette spécifique
   */
  async loadRecipeDetail(uuid: string): Promise<Recettes | null> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.RECIPES_DETAILS_STORE, "readonly");
      const store = tx.objectStore(this.RECIPES_DETAILS_STORE);
      const request = store.get(uuid);

      request.onsuccess = () => {
        const recipe = request.result as Recettes | undefined;
        if (recipe) {
          console.log(
            `[RecipesIDBCache] Détails de ${uuid} chargés depuis le cache`,
          );
        }
        resolve(recipe || null);
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Sauvegarde les détails d'une recette
   */
  async saveRecipeDetail(recipe): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.RECIPES_DETAILS_STORE, "readwrite");
      const store = tx.objectStore(this.RECIPES_DETAILS_STORE);
      const request = store.put(recipe);

      request.onsuccess = () => {
        console.log(`[RecipesIDBCache] Détails de ${recipe.$id} sauvegardés`);
        resolve();
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Charge tous les détails de recettes (pour debug/export)
   */
  async loadAllRecipeDetails(): Promise<Map<string, Recettes>> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.RECIPES_DETAILS_STORE, "readonly");
      const store = tx.objectStore(this.RECIPES_DETAILS_STORE);
      const request = store.getAll();

      request.onsuccess = () => {
        const recipes = new Map<string, Recettes>();
        (request.result as Recettes[]).forEach((recipe) => {
          recipes.set(recipe.$id, recipe);
        });
        console.log(
          `[RecipesIDBCache] ${recipes.size} détails de recettes chargés`,
        );
        resolve(recipes);
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Supprime les détails d'une recette
   */
  async deleteRecipeDetail(uuid: string): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.RECIPES_DETAILS_STORE, "readwrite");
      const store = tx.objectStore(this.RECIPES_DETAILS_STORE);
      const request = store.delete(uuid);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  // =============================================================================
  // METADATA
  // =============================================================================

  /**
   * Charge les métadonnées
   */
  async loadMetadata(): Promise<RecipesCacheMetadata> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.METADATA_STORE, "readonly");
      const store = tx.objectStore(this.METADATA_STORE);
      const request = store.getAll();

      request.onsuccess = () => {
        const allEntries = request.result;

        const metadata: RecipesCacheMetadata = {
          lastSync: null,
          buildTimestamp: null,
          lastAppwriteSync: null,
          recipesCount: 0,
          cacheVersion: 1,
        };

        allEntries.forEach((entry) => {
          if (entry.key === this.LAST_SYNC_KEY) metadata.lastSync = entry.value;
          else if (entry.key === this.RECIPES_COUNT_KEY)
            metadata.recipesCount = entry.value;
          else if (entry.key === this.BUILD_TIMESTAMP_KEY)
            metadata.buildTimestamp = entry.value;
          else if (entry.key === this.LAST_APPWRITE_SYNC_KEY)
            metadata.lastAppwriteSync = entry.value;
        });

        console.log(
          `[RecipesIDBCache] Metadata chargées: count=${metadata.recipesCount}, build=${metadata.buildTimestamp}, sync=${metadata.lastAppwriteSync}`,
        );
        resolve(metadata);
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Sauvegarde les métadonnées
   */
  async saveMetadata(metadata: RecipesCacheMetadata): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.METADATA_STORE, "readwrite");
      const store = tx.objectStore(this.METADATA_STORE);

      store.put({ key: this.LAST_SYNC_KEY, value: metadata.lastSync });
      store.put({
        key: this.BUILD_TIMESTAMP_KEY,
        value: metadata.buildTimestamp,
      });
      store.put({
        key: this.LAST_APPWRITE_SYNC_KEY,
        value: metadata.lastAppwriteSync,
      });
      store.put({ key: this.RECIPES_COUNT_KEY, value: metadata.recipesCount });

      tx.oncomplete = () => {
        console.log(`[RecipesIDBCache] Metadata sauvegardées`);
        resolve();
      };

      tx.onerror = () => reject(tx.error);
    });
  }
  // =============================================================================
  // UTILITAIRES
  // =============================================================================

  /**
   * Vide complètement le cache
   */
  async clear(): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(
        [
          this.RECIPES_INDEX_STORE,
          this.RECIPES_DETAILS_STORE,
          this.METADATA_STORE,
        ],
        "readwrite",
      );

      tx.objectStore(this.RECIPES_INDEX_STORE).clear();
      tx.objectStore(this.RECIPES_DETAILS_STORE).clear();
      tx.objectStore(this.METADATA_STORE).clear();

      tx.oncomplete = () => {
        console.log("[RecipesIDBCache] Cache vidé");
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
      console.log("[RecipesIDBCache] Connexion fermée");
    }
  }
}

// =============================================================================
// FACTORY & EXPORTS
// =============================================================================

/**
 * Crée et ouvre une instance de cache IndexedDB pour les recettes
 */
export async function createRecipesIDBCache(): Promise<RecipesIDBCache> {
  const cache = new RecipesIndexedDBCache();
  await cache.open();
  return cache;
}

/**
 * Supprime complètement la base IndexedDB des recettes
 */
export async function deleteRecipesIDBCache(): Promise<void> {
  const dbName = "recipes-cache";

  return new Promise((resolve, reject) => {
    const request = indexedDB.deleteDatabase(dbName);

    request.onsuccess = () => {
      console.log(`[RecipesIDBCache] Base supprimée: ${dbName}`);
      resolve();
    };

    request.onerror = () => reject(request.error);
    request.onblocked = () => {
      console.warn(`[RecipesIDBCache] Suppression bloquée: ${dbName}`);
    };
  });
}
