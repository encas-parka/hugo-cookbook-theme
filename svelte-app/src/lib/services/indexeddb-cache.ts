/**
 * Service de cache IndexedDB pour ProductsStore
 *
 * Architecture:
 * - 1 base par mainId: `products-cache-${mainId}`
 * - 1 store "products" pour les EnrichedProduct
 * - 1 store "metadata" pour lastSync + allDates
 *
 * Avantages vs localStorage:
 * - Pas de limite 5-10MB
 * - Transactions atomiques
 * - Stockage natif des objets (pas de JSON.stringify)
 * - Gestion native des Date, Map, Set, undefined
 * - ⚠️ IMPORTANT: IndexedDB utilise l'algorithme "structured clone"
 *   qui ne supporte PAS les fonctions, symbols, ou prototypes personnalisés
 */

import type { EnrichedProduct } from "../types/store.types";

// =============================================================================
// TYPES
// =============================================================================

interface CacheMetadata {
  lastSync: string | null;
  allDates: string[];
}

export interface IDBCache {
  open(): Promise<void>;
  loadProducts(): Promise<Map<string, EnrichedProduct>>;
  loadMetadata(): Promise<CacheMetadata>;
  saveProducts(products: Map<string, EnrichedProduct>): Promise<void>;
  saveMetadata(metadata: CacheMetadata): Promise<void>;
  upsertProduct(product: EnrichedProduct): Promise<void>;
  deleteProduct(productId: string): Promise<void>;
  clear(): Promise<void>;
  close(): void;
}

// =============================================================================
// IMPLEMENTATION
// =============================================================================

class IndexedDBCache implements IDBCache {
  private dbName: string;
  private db: IDBDatabase | null = null;
  private version = 1;

  // Noms des object stores
  private readonly PRODUCTS_STORE = "products";
  private readonly METADATA_STORE = "metadata";
  private readonly METADATA_KEY = "cache-metadata";

  constructor(mainId: string) {
    this.dbName = `products-cache-${mainId}`;
  }

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
        console.log(`[IDBCache] Base ouverte: ${this.dbName}`);
        resolve();
      };

      // Création/upgrade du schéma
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Store des produits (key = $id)
        if (!db.objectStoreNames.contains(this.PRODUCTS_STORE)) {
          const productsStore = db.createObjectStore(this.PRODUCTS_STORE, {
            keyPath: "$id",
          });
          console.log("[IDBCache] Object store 'products' créé");
        }

        // Store des métadonnées
        if (!db.objectStoreNames.contains(this.METADATA_STORE)) {
          db.createObjectStore(this.METADATA_STORE);
          console.log("[IDBCache] Object store 'metadata' créé");
        }
      };
    });
  }

  /**
   * Charge tous les produits depuis IndexedDB
   */
  async loadProducts(): Promise<Map<string, EnrichedProduct>> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.PRODUCTS_STORE, "readonly");
      const store = tx.objectStore(this.PRODUCTS_STORE);
      const request = store.getAll();

      request.onsuccess = () => {
        const products = new Map<string, EnrichedProduct>();
        (request.result as EnrichedProduct[]).forEach((product) => {
          products.set(product.$id, product);
        });
        console.log(`[IDBCache] ${products.size} produits chargés`);
        resolve(products);
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Charge les métadonnées (lastSync, allDates)
   */
  async loadMetadata(): Promise<CacheMetadata> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.METADATA_STORE, "readonly");
      const store = tx.objectStore(this.METADATA_STORE);
      const request = store.get(this.METADATA_KEY);

      request.onsuccess = () => {
        const metadata = request.result || {
          lastSync: null,
          allDates: [],
        };
        console.log(
          `[IDBCache] Metadata chargée: lastSync=${metadata.lastSync}, dates=${metadata.allDates?.length || 0}`,
        );
        resolve(metadata);
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Sauvegarde tous les produits (bulk write)
   * 🎯 Utilisé lors de l'initialisation Hugo ou sync complet
   */
  async saveProducts(products: Map<string, EnrichedProduct>): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.PRODUCTS_STORE, "readwrite");
      const store = tx.objectStore(this.PRODUCTS_STORE);

      // Vider puis réécrire (stratégie simple)
      store.clear();

      products.forEach((product) => {
        store.put(product);
      });

      tx.oncomplete = () => {
        console.log(`[IDBCache] ${products.size} produits sauvegardés`);
        resolve();
      };

      tx.onerror = () => reject(tx.error);
    });
  }

  /**
   * Sauvegarde les métadonnées
   */
  async saveMetadata(metadata: CacheMetadata): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.METADATA_STORE, "readwrite");
      const store = tx.objectStore(this.METADATA_STORE);
      const request = store.put(metadata, this.METADATA_KEY);

      request.onsuccess = () => {
        console.log(`[IDBCache] Metadata sauvegardée`);
        resolve();
      };

      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Upsert un produit individuel
   * 🎯 Utilisé lors des updates realtime
   */
  async upsertProduct(product: EnrichedProduct): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.PRODUCTS_STORE, "readwrite");
      const store = tx.objectStore(this.PRODUCTS_STORE);
      const request = store.put(product);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Supprime un produit
   * 🎯 Utilisé lors des suppressions realtime
   */
  async deleteProduct(productId: string): Promise<void> {
    if (!this.db) throw new Error("DB non ouverte");

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(this.PRODUCTS_STORE, "readwrite");
      const store = tx.objectStore(this.PRODUCTS_STORE);
      const request = store.delete(productId);

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
        [this.PRODUCTS_STORE, this.METADATA_STORE],
        "readwrite",
      );

      tx.objectStore(this.PRODUCTS_STORE).clear();
      tx.objectStore(this.METADATA_STORE).clear();

      tx.oncomplete = () => {
        console.log("[IDBCache] Cache vidé");
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
      console.log("[IDBCache] Connexion fermée");
    }
  }
}

// =============================================================================
// FACTORY & EXPORTS
// =============================================================================

/**
 * Crée et ouvre une instance de cache IndexedDB
 */
export async function createIDBCache(mainId: string): Promise<IDBCache> {
  const cache = new IndexedDBCache(mainId);
  await cache.open();
  return cache;
}

/**
 * Supprime complètement une base IndexedDB
 * ⚠️ À utiliser avec précaution (clearCache, forceReload)
 */
export async function deleteIDBCache(mainId: string): Promise<void> {
  const dbName = `products-cache-${mainId}`;

  return new Promise((resolve, reject) => {
    const request = indexedDB.deleteDatabase(dbName);

    request.onsuccess = () => {
      console.log(`[IDBCache] Base supprimée: ${dbName}`);
      resolve();
    };

    request.onerror = () => reject(request.error);
    request.onblocked = () => {
      console.warn(`[IDBCache] Suppression bloquée: ${dbName}`);
    };
  });
}
