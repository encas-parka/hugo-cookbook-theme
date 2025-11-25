/**
 * Service de cache IndexedDB pour IngredientsStore
 * 
 * Architecture similaire à indexeddb-cache.ts mais spécialisé pour les ingrédients
 * - 1 base: `ingredients-cache`
 * - 1 store "ingredients" pour les Ingredient
 * - 1 store "metadata" pour lastSync + dataJsonHash
 */

import type { Ingredient, IngredientsCacheMetadata } from "../types/recipes.types";

// =============================================================================
// TYPES
// =============================================================================

export interface IngredientsIDBCache {
  open(): Promise<void>;
  loadIngredients(): Promise<Map<string, Ingredient>>;
  loadMetadata(): Promise<IngredientsCacheMetadata>;
  saveIngredients(ingredients: Map<string, Ingredient>): Promise<void>;
  saveMetadata(metadata: IngredientsCacheMetadata): Promise<void>;
  updateDataJsonHash(hash: string | null): Promise<void>;
  upsertIngredient(ingredient: Ingredient): Promise<void>;
  deleteIngredient(uuid: string): Promise<void>;
  clear(): Promise<void>;
  close(): void;
}

// =============================================================================
// IMPLEMENTATION
// =============================================================================

class IngredientsIndexedDBCache implements IngredientsIDBCache {
  private dbName = "ingredients-cache";
  private db: IDBDatabase | null = null;
  private version = 1;

  // Noms des object stores
  private readonly INGREDIENTS_STORE = "ingredients";
  private readonly METADATA_STORE = "metadata";
  
  // Clés pour les métadonnées
  private readonly LAST_SYNC_KEY = "lastSync";
  private readonly DATA_JSON_HASH_KEY = "dataJsonHash";
  private readonly INGREDIENTS_COUNT_KEY = "ingredientsCount";

  /**
   * Ouvre/crée la base IndexedDB
   */
  async open(): Promise<void> {
    if (this.db) return; // Déjà ouverte

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        console.log(`[IngredientsIDBCache] Base ouverte: ${this.dbName}`);
        resolve();
      };

      // Création/upgrade du schéma
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Store des ingrédients (key = u = uuid)
        if (!db.objectStoreNames.contains(this.INGREDIENTS_STORE)) {
          db.createObjectStore(this.INGREDIENTS_STORE, {
            keyPath: "u",
          });
          console.log("[IngredientsIDBCache] Object store 'ingredients' créé");
        }

        // Store des métadonnées
        if (!db.objectStoreNames.contains(this.METADATA_STORE)) {
          db.createObjectStore(this.METADATA_STORE, { keyPath: "key" });
          console.log("[IngredientsIDBCache] Object store 'metadata' créé");
        }
      };
    });
  }

  /**
   * Charge tous les ingrédients depuis IndexedDB
   */
  async loadIngredients(): Promise<Map<string, Ingredient>> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.INGREDIENTS_STORE, "readonly");
      const store = tx.objectStore(this.INGREDIENTS_STORE);
      const request = store.getAll();

      request.onsuccess = () => {
        const ingredients = new Map<string, Ingredient>();
        (request.result as Ingredient[]).forEach((ingredient) => {
          ingredients.set(ingredient.u, ingredient);
        });
        console.log(`[IngredientsIDBCache] ${ingredients.size} ingrédients chargés`);
        resolve(ingredients);
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Charge les métadonnées
   */
  async loadMetadata(): Promise<IngredientsCacheMetadata> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.METADATA_STORE, "readonly");
      const store = tx.objectStore(this.METADATA_STORE);
      const request = store.getAll();

      request.onsuccess = () => {
        const allEntries = request.result;

        const metadata: IngredientsCacheMetadata = {
          lastSync: null,
          dataJsonHash: null,
          ingredientsCount: 0,
        };

        allEntries.forEach((entry) => {
          if (entry.key === this.LAST_SYNC_KEY) metadata.lastSync = entry.value;
          else if (entry.key === this.DATA_JSON_HASH_KEY) metadata.dataJsonHash = entry.value;
          else if (entry.key === this.INGREDIENTS_COUNT_KEY) metadata.ingredientsCount = entry.value;
        });

        console.log(
          `[IngredientsIDBCache] Metadata chargées: count=${metadata.ingredientsCount}, hash=${metadata.dataJsonHash}`,
        );
        resolve(metadata);
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Sauvegarde tous les ingrédients (bulk write)
   */
  async saveIngredients(ingredients: Map<string, Ingredient>): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.INGREDIENTS_STORE, "readwrite");
      const store = tx.objectStore(this.INGREDIENTS_STORE);

      // Vider puis réécrire
      store.clear();

      ingredients.forEach((ingredient) => {
        store.put(ingredient);
      });

      tx.oncomplete = () => {
        console.log(`[IngredientsIDBCache] ${ingredients.size} ingrédients sauvegardés`);
        resolve();
      };

      tx.onerror = () => reject(tx.error);
    });
  }

  /**
   * Sauvegarde les métadonnées
   */
  async saveMetadata(metadata: IngredientsCacheMetadata): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.METADATA_STORE, "readwrite");
      const store = tx.objectStore(this.METADATA_STORE);

      store.put({ key: this.LAST_SYNC_KEY, value: metadata.lastSync });
      store.put({ key: this.DATA_JSON_HASH_KEY, value: metadata.dataJsonHash });
      store.put({ key: this.INGREDIENTS_COUNT_KEY, value: metadata.ingredientsCount });

      tx.oncomplete = () => {
        console.log(`[IngredientsIDBCache] Metadata sauvegardées`);
        resolve();
      };

      tx.onerror = () => reject(tx.error);
    });
  }

  /**
   * Met à jour uniquement le hash du fichier data.json
   */
  async updateDataJsonHash(hash: string | null): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.METADATA_STORE, "readwrite");
      const store = tx.objectStore(this.METADATA_STORE);
      const request = store.put({ key: this.DATA_JSON_HASH_KEY, value: hash });

      request.onsuccess = () => {
        console.log(`[IngredientsIDBCache] dataJsonHash mis à jour: ${hash}`);
        resolve();
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Upsert un ingrédient individuel
   */
  async upsertIngredient(ingredient: Ingredient): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.INGREDIENTS_STORE, "readwrite");
      const store = tx.objectStore(this.INGREDIENTS_STORE);
      const request = store.put(ingredient);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Supprime un ingrédient
   */
  async deleteIngredient(uuid: string): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.INGREDIENTS_STORE, "readwrite");
      const store = tx.objectStore(this.INGREDIENTS_STORE);
      const request = store.delete(uuid);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Vide complètement le cache
   */
  async clear(): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(
        [this.INGREDIENTS_STORE, this.METADATA_STORE],
        "readwrite",
      );

      tx.objectStore(this.INGREDIENTS_STORE).clear();
      tx.objectStore(this.METADATA_STORE).clear();

      tx.oncomplete = () => {
        console.log("[IngredientsIDBCache] Cache vidé");
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
      console.log("[IngredientsIDBCache] Connexion fermée");
    }
  }
}

// =============================================================================
// FACTORY & EXPORTS
// =============================================================================

/**
 * Crée et ouvre une instance de cache IndexedDB pour les ingrédients
 */
export async function createIngredientsIDBCache(): Promise<IngredientsIDBCache> {
  const cache = new IngredientsIndexedDBCache();
  await cache.open();
  return cache;
}

/**
 * Supprime complètement la base IndexedDB des ingrédients
 */
export async function deleteIngredientsIDBCache(): Promise<void> {
  const dbName = "ingredients-cache";

  return new Promise((resolve, reject) => {
    const request = indexedDB.deleteDatabase(dbName);

    request.onsuccess = () => {
      console.log(`[IngredientsIDBCache] Base supprimée: ${dbName}`);
      resolve();
    };

    request.onerror = () => reject(request.error);
    request.onblocked = () => {
      console.warn(`[IngredientsIDBCache] Suppression bloquée: ${dbName}`);
    };
  });
}
