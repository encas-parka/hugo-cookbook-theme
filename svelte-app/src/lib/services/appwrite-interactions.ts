/**
 * Services d'interaction avec Appwrite pour la gestion des produits et achats
 *
 * Architecture moderne avec séparation des responsabilités :
 * ┌─────────────────────────────────────────────────────────────┐
 * │              appwrite-interactions                         │
 * │  • Accès aux données Appwrite pur                          │
 * │  • Transformations de données sans état                   │
 * │  • Logique de chargement, synchro, realtime               │
 * └─────────────────▲───────────────────────────────────────────┘
 *                   │ Fournit les services
 *                   │
 * ┌─────────────────▼───────────────────────────────────────────┐
 * │                    ProductsStore                           │
 * │  • Gestion d'état réactif (Svelte 5)                       │
 * │  • Logique métier (filtres, formatage, groupement)        │
 * │  • UI réactive (loading, error, syncing)                  │
 * └─────────────────────────────────────────────────────────────┘
 *
 * Services principaux :
 * ─────────────────────────────────────────────────────────────
 * Lecture :
 * • loadProducts() : Chargement initial des produits avec achats associés
 * • syncProducts() : Synchronisation incrémentielle (delta depuis lastSync)
 * • loadMainEventData() : Chargement des données principales de l'événement
 * • loadAllDates() : Extraction et parsing des dates depuis la collection main
 *
 * Écriture :
 * • updateProduct() : Mise à jour d'un produit
 * • createPurchase() : Création d'un purchase
 * • updatePurchase() : Mise à jour d'un purchase
 * • deletePurchase() : Suppression d'un purchase
 *
 * Realtime :
 * • subscribeToRealtime() : Abonnement aux événements produits/achats
 *
 * Utilitaires :
 * • mergeProductsWithPurchases() : Enrichit les produits avec leurs achats
 * • applyProductUpdates() : Applique les mises à jour incrémentielles
 *
 * Ce fichier encapsule les opérations CRUD en utilisant le client Appwrite existant
 * et fournit une API propre pour les stores Svelte 5.
 */

import { ID, Query, type Models } from "appwrite";
import superjson from "superjson";
import type { Products, Purchases } from "../types/appwrite.d";
import type { StoreInfo, MainEventData } from "../types/store.types";

// =============================================================================
// TYPES INTERNE (utilise les types générés automatiquement ??)
// =============================================================================

export type ProductUpdate = Partial<
  Omit<Products, "$id" | keyof Models.Row | "purchases" | "mainId">
>;

export type PurchaseCreate = Omit<
  Purchases,
  | "$id"
  | keyof Models.Row
  | "purchases"
  | "createdBy"
  | "status"
  | "products"
  | "mainId"
> & {
  products: string[]; // IDs des produits pour la relation
  mainId: string; // ID du main pour la relation
};

export type PurchaseUpdate = Partial<
  Omit<Purchases, "$id" | keyof Models.Row | "mainId" | "createdBy" | "status">
> & {
  products?: Products[];
};

// =============================================================================
// NOUVEAUX TYPES POUR LA MIGRATION PRODUCTSSTORE
// =============================================================================

export interface ProductWithPurchases extends Products {
  purchases: Purchases[];
}

export interface LoadProductsOptions {
  limit?: number;
  orderBy?: "productName" | "$updatedAt";
  orderDirection?: "asc" | "desc";
}

export interface SyncOptions {
  lastSync?: string;
  limit?: number;
}

export interface RealtimeCallbacks {
  onProductCreate?: (product: Products) => void;
  onProductUpdate?: (product: Products) => void;
  onProductDelete?: (productId: string) => void;
  onPurchaseCreate?: (purchase: Purchases) => void;
  onPurchaseUpdate?: (purchase: Purchases) => void;
  onPurchaseDelete?: (purchaseId: string) => void;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: any) => void;
}

// =============================================================================
// UTILITAIRES INTERNES
// =============================================================================

/**
 * Récupère les instances Appwrite nécessaires
 * @throws Error si AppwriteClient n'est pas disponible
 */
async function getAppwriteInstances() {
  if (!(window as any).AppwriteClient) {
    throw new Error("AppwriteClient non disponible");
  }

  const databases = await (window as any).AppwriteClient.getDatabases();
  const config = (window as any).AppwriteClient.getConfig();

  return { databases, config };
}

// =============================================================================
// SERVICES PRODUITS - LECTURE
// =============================================================================

/**
 * Charge les produits depuis Appwrite avec leurs achats associés
 *
 * Service principal de chargement initial pour ProductsStore.
 * Gère le chargement des produits et optionnellement leurs achats associés.
 *
 * @param mainId - ID du main pour filtrer les produits
 * @param options - Options de chargement (pagination, tri, inclusion des achats)
 * @returns Promise<ProductWithPurchases[]> - Produits enrichis avec leurs achats si demandé
 *
 * Flux :
 * 1. Charge les produits depuis la collection products
 * 2. Si includePurchases=true, charge les achats associés
 * 3. Utilise mergeProductsWithPurchases pour enrichir les produits @LEGACY @USELESS
 * 4. Retourne les produits prêts à être utilisés par ProductsStore
 */
export async function loadProductsWithPurchases(
  mainId: string,
  options: LoadProductsOptions = {},
): Promise<ProductWithPurchases[]> {
  const {
    limit = 100,
    orderBy = "productName",
    orderDirection = "asc",
  } = options;

  try {
    const { databases, config } = await getAppwriteInstances();

    // Charger les produits avec leurs relations purchases
    const productsResponse = await databases.listDocuments(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.products,
      [
        Query.equal("mainId", mainId),
        Query.orderAsc(
          orderBy === "productName" ? "productName" : "$updatedAt",
        ),
        Query.limit(limit),
        Query.select(["*", "purchases.*"]), // Récupérer la relation purchases
      ],
    );
    const products = productsResponse.documents as Products[];

    // Les relations sont déjà incluses dans les produits
    const productsWithPurchases = products as ProductWithPurchases[];

    console.log(
      `[Appwrite Interactions] ${productsResponse.documents.length} produits chargés avec achats`,
    );

    return productsWithPurchases;
  } catch (error) {
    console.error(
      `[Appwrite Interactions] Erreur chargement produits pour mainId ${mainId}:`,
      error,
    );
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erreur lors du chargement des produits";
    throw new Error(`Échec du chargement des produits: ${errorMessage}`);
  }
}

/**
 * Charge un produit spécifique par son ID depuis Appwrite
 *
 * Service utilitaire pour récupérer un seul produit. Utile pour des vues détaillées
 * ou des opérations ponctuelles sur un produit sans charger toute la liste.
 *
 * @param productId - L'ID du produit à récupérer.
 * @returns Promise<Products | null> - Le produit trouvé, ou null si une erreur survient ou si le produit n'existe pas.
 *
 * Flux :
 * 1. Récupère les instances Appwrite nécessaires (databases, config).
 * 2. Appelle `databases.getDocument` avec les informations de la collection `products`.
 * 3. Retourne le document trouvé, casté en `Products`.
 * 4. En cas d'erreur (ex: produit non trouvé), log l'erreur et retourne `null`.
 */
export async function loadProductById(
  productId: string,
): Promise<Products | null> {
  try {
    const { databases, config } = await getAppwriteInstances();
    const response = await databases.getDocument(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.products,
      productId,
    );
    return response as Products;
  } catch (err) {
    console.error("[Appwrite Interactions] Erreur chargement produit:", err);
    return null;
  }
}

/**
 * Charge plusieurs produits par leurs IDs
 */
export async function loadProductsListByIds(
  productIds: string[],
): Promise<Products[]> {
  try {
    const { databases, config } = await getAppwriteInstances();

    // Utiliser une requête avec filtre OR pour récupérer les produits
    const response = await databases.listDocuments(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.products,
      [
        Query.equal("$id", productIds), // ← Filtre par IDs
        Query.select(["*", "purchases.*"]),
      ],
    );

    return response.documents as Products[];
  } catch (err) {
    console.error("[Appwrite Interactions] Erreur chargement produits:", err);
    return [];
  }
}

/**
 * Synchronise les produits avec leurs purchases depuis Appwrite (uniquement les mises à jour)
 *
 * Service de synchronisation incrémentielle pour ProductsStore.
 * Optimisé pour ne charger que les modifications depuis dernière synchronisation.
 *
 * @param mainId - ID du main pour filtrer les produits
 * @param options - Options de synchronisation (dernière sync, limite)
 * @returns Promise<ProductWithPurchases[]> - Produits modifiés/créés avec leurs purchases depuis lastSync
 * @deprecated use syncProductsAndPurchases
 *
 * Flux :
 * 1. Vérifie la présence de lastSync (sinon retourne vide)
 * 2. Requête Appwrite avec filtre $updatedAt > lastSync et relations purchases
 * 3. Retourne uniquement le delta des modifications avec relations
 * 4. ProductsStore utilisera applyProductUpdates pour fusionner ces changements
 */
export async function syncProductsWithPurchases(
  mainId: string,
  options: SyncOptions,
): Promise<ProductWithPurchases[]> {
  const { lastSync, limit = 100 } = options;

  if (!lastSync) {
    console.log(
      "[Appwrite Interactions] Aucune dernière sync fournie, retour vide",
    );
    return [];
  }

  try {
    const { databases, config } = await getAppwriteInstances();

    const response = await databases.listDocuments(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.products,
      [
        Query.updatedAfter(lastSync),
        Query.equal("mainId", mainId),
        Query.limit(limit),
        Query.select(["*", "purchases.*"]), // Récupérer la relation purchases
      ],
    );

    if (response.documents.length > 0) {
      console.log(
        `[Appwrite Interactions] ${response.documents.length} produits synchronisés avec leurs purchases`,
      );
    }

    return response.documents as ProductWithPurchases[];
  } catch (error) {
    console.error(
      `[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${mainId}:`,
      error,
    );
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erreur lors de la synchronisation";
    throw new Error(`Échec de la synchronisation: ${errorMessage}`);
  }
}

/**
 * Synchronise les produits avec leurs relations purchases depuis Appwrite (uniquement les mises à jour)
 *
 * Service de synchronisation pour ProductsStore.
 * Récupère les modifications des produits avec leurs relations purchases depuis la dernière synchronisation.
 *
 * @param mainId - ID du main pour filtrer les données
 * @param options - Options de synchronisation (dernière sync, limite)
 * @returns Promise<{products: Products[], purchases: Purchases[]}> - Produits modifiés avec leurs relations
 *
 * Flux :
 * 1. Vérifie la présence de lastSync (sinon retourne vide)
 * 2. Charge les produits modifiés avec leurs relations purchases
 * 3. Extrait les purchases des produits pour compatibilité avec le code existant
 * 4. ProductsStore utilisera applyProductUpdates pour fusionner
 */
export async function syncProductsAndPurchases(
  mainId: string,
  options: SyncOptions,
): Promise<{ allProducts: Products[] }> {
  const { lastSync, limit = 100 } = options;

  if (!lastSync) {
    console.log(
      "[Appwrite Interactions] Aucune dernière sync fournie, retour vide pour sync hybride",
    );
    return { allProducts: [] };
  }

  try {
    const { databases, config } = await getAppwriteInstances();

    // Paralléliser les deux requêtes pour optimiser la performance
    const [productsResponse, purchasesResponse] = await Promise.all([
      databases.listDocuments(
        config.APPWRITE_CONFIG.databaseId,
        config.APPWRITE_CONFIG.collections.products,
        [
          Query.greaterThan("$updatedAt", lastSync),
          Query.equal("mainId", mainId),
          Query.select(["*", "purchases.*"]),
          Query.limit(limit),
        ],
      ),
      databases.listDocuments(
        config.APPWRITE_CONFIG.databaseId,
        config.APPWRITE_CONFIG.collections.purchases,
        [
          Query.greaterThan("$updatedAt", lastSync),
          Query.equal("mainId", mainId),
          Query.select(["products.$id"]),
          Query.limit(limit),
        ],
      ),
    ]);
    // ===== DEBUG =====
    // console.log('[Appwrite Interactions] Sync Response - Products:', JSON.stringify(productsResponse.documents, null, 2));
    // console.log('[Appwrite Interactions] Sync Response - Purchases:', JSON.stringify(purchasesResponse.documents, null, 2));

    // // Inspecter la structure réelle de p.products
    // if (purchasesResponse.documents.length > 0) {
    //     const firstPurchase = purchasesResponse.documents[0];
    //     console.log('[Appwrite Interactions] Type de purchases[0].products:', typeof firstPurchase.products);
    //     console.log('[Appwrite Interactions] Valeur de purchases[0].products:', firstPurchase.products);
    //     if (Array.isArray(firstPurchase.products) && firstPurchase.products.length > 0) {
    //         console.log('[Appwrite Interactions] Type du premier élément:', typeof firstPurchase.products[0]);
    //         console.log('[Appwrite Interactions] Valeur du premier élément:', firstPurchase.products[0]);
    //     }
    // }
    // ===== FIN DEBUG =====

    let allProducts = productsResponse.documents as Products[];
    const existingProductIds = new Set(allProducts.map((p) => p.$id));

    if (purchasesResponse.documents.length > 0) {
      // Extraire les IDs des products
      const affectedProductIds = purchasesResponse.documents
        .flatMap((p) => {
          if (!Array.isArray(p.products)) return [];
          // p.products contient des objets avec $id
          return p.products.map((prod: any) => prod.$id);
        })
        .filter((id, index, arr) => arr.indexOf(id) === index) // unique
        .filter((id) => !existingProductIds.has(id)); // ✅ Exclure les IDs déjà dans productsResponse

      console.log(
        `[Appwrite Interactions] Affected products from purchases: ${affectedProductIds.length}`,
      );
      console.log(
        "[Appwrite Interactions] Affected product IDs:",
        affectedProductIds,
      );

      // Recharger les products affectés
      if (affectedProductIds.length > 0) {
        try {
          console.log(
            "[Appwrite Interactions] Appel loadProductsListByIds avec IDs:",
            affectedProductIds,
          );
          const updatedProducts =
            await loadProductsListByIds(affectedProductIds);
          console.log(
            `[Appwrite Interactions] Reloaded ${updatedProducts.length} products:`,
            JSON.stringify(updatedProducts, null, 2),
          );

          allProducts = [...allProducts, ...updatedProducts];
        } catch (error) {
          console.error(
            "[Appwrite Interactions] Erreur lors du rechargement des products:",
            error,
          );
          throw error;
        }
      }
    }

    if (allProducts.length > 0) {
      console.log(
        `[Appwrite Interactions] Sync total: ${allProducts.length} produits synchronisés`,
      );
    }

    return { allProducts };
  } catch (error) {
    console.error(
      `[Appwrite Interactions] Erreur sync pour mainId ${mainId}:`,
      error,
    );
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erreur lors de la synchronisation";
    throw new Error(`Échec de la synchronisation: ${errorMessage}`);
  }
}

// =============================================================================
// SERVICES PRODUITS - MISE À JOUR
// =============================================================================

/**
 * Met à jour un produit dans Appwrite
 * @param productId - ID du produit à mettre à jour
 * @param updates - Champs à mettre à jour
 * @returns Promise<Products>
 */
export async function updateProduct(
  productId: string,
  updates: ProductUpdate,
): Promise<Products> {
  try {
    const { databases, config } = await getAppwriteInstances();

    const response = await databases.updateDocument(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.products,
      productId,
      updates,
    );

    return response as Products;
  } catch (error) {
    console.error(
      `[Appwrite Interactions] Erreur mise à jour produit ${productId}:`,
      error,
    );
    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";
    throw new Error(`Échec de la mise à jour du produit: ${errorMessage}`);
  }
}

/**
 * Met à jour le magasin d'un produit
 * @param productId - ID du produit
 * @param store - Nouveau magasin (objet StoreInfo ou null)
 */
export async function updateProductStore(
  productId: string,
  store: StoreInfo,
): Promise<Products> {
  // console.log(`[Appwrite Interactions] Mise à jour du magasin pour produit ${productId}:`, store);

  // Valider les entrées
  if (!productId) {
    throw new Error("ID du produit requis pour la mise à jour du magasin");
  }

  // Sérialiser l'objet StoreInfo en string JSON pour Appwrite
  const serializedStore = store ? JSON.stringify(store) : null;

  const result = await updateProduct(productId, { store: serializedStore });
  console.log(
    `[Appwrite Interactions] Magasin mis à jour pour produit ${productId}, nouvelle valeur:`,
    result.store,
  );

  return result;
}

/**
 * Met à jour la liste des volontaires pour un produit
 * @param productId - ID du produit
 * @param who - Liste des volontaires (null pour vide)
 */
export async function updateProductWho(
  productId: string,
  who: string[] | null,
): Promise<Products> {
  return updateProduct(productId, { who });
}

/**
 * Met à jour le stock réel d'un produit
 * @param productId - ID du produit
 * @param stockReel - Nouveau stock au format JSON string
 */
export async function updateProductStock(
  productId: string,
  stockReel: string | null,
): Promise<Products> {
  return updateProduct(productId, { stockReel });
}

// =============================================================================
// SERVICES ACHATS
// =============================================================================

/**
 * Crée un nouvel achat
 * @param purchaseData - Données de l'achat
 * @returns Promise<Purchases>
 */
export async function createPurchase(
  purchaseData: PurchaseCreate,
): Promise<Purchases> {
  try {
    const { databases, config } = await getAppwriteInstances();
    const client = (window as any).AppwriteClient!;

    // Récupérer l'utilisateur courant
    const account = await client.getAccount();
    const user = await account.get();

    const completePurchaseData = {
      ...purchaseData,
      createdBy: user.$id,
      status: "active", // FIXIT : status devrait être utilisé pour distinguer les commandes effectué et les achats effectués. Trouver le bon pattern (date ?)
    };

    const response = await databases.createDocument(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.purchases,
      ID.unique(),
      completePurchaseData,
    );

    console.log("[Appwrite Interactions] Achat créé:", response);
    return response as Purchases;
  } catch (error) {
    console.error("[Appwrite Interactions] Erreur création achat:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";
    throw new Error(`Échec de la création de l'achat: ${errorMessage}`);
  }
}

/**
 * Met à jour un achat existant
 * @param purchaseId - ID de l'achat à mettre à jour
 * @param updates - Champs à mettre à jour
 * @returns Promise<Purchases>
 */
export async function updatePurchase(
  purchaseId: string,
  updates: PurchaseUpdate,
): Promise<Purchases> {
  try {
    const { databases, config } = await getAppwriteInstances();

    // Récupérer le purchase existant pour préserver la relation products
    const existingPurchase = await databases.getDocument(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.purchases,
      purchaseId,
    );

    // Préparer les mises à jour en préservant la relation products
    const finalUpdates = {
      ...updates,
      // Conserver la relation products existante si non fournie dans les updates
      products: updates.products || (existingPurchase as Purchases).products,
    };

    const response = await databases.updateDocument(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.purchases,
      purchaseId,
      finalUpdates,
    );

    console.log(
      `[Appwrite Interactions] Achat ${purchaseId} mis à jour:`,
      finalUpdates,
    );
    return response as Purchases;
  } catch (error) {
    console.error(
      `[Appwrite Interactions] Erreur mise à jour achat ${purchaseId}:`,
      error,
    );
    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";
    throw new Error(`Échec de la mise à jour de l'achat: ${errorMessage}`);
  }
}

/**
 * Supprime un achat
 * @param purchaseId - ID de l'achat à supprimer
 */
export async function deletePurchase(purchaseId: string): Promise<void> {
  try {
    const { databases, config } = await getAppwriteInstances();

    await databases.deleteDocument(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.purchases,
      purchaseId,
    );

    console.log(`[Appwrite Interactions] Achat ${purchaseId} supprimé`);
  } catch (error) {
    console.error(
      `[Appwrite Interactions] Erreur suppression achat ${purchaseId}:`,
      error,
    );
    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";
    throw new Error(`Échec de la suppression de l'achat: ${errorMessage}`);
  }
}

/**
 * Charge les purchases avec leurs relations products (requête ciblée)
 *
 * Utilitaire optimisé pour charger uniquement les champs nécessaires des purchases,
 * en particulier la relation products pour identifier les produits associés.
 *
 * @param purchaseIds - Liste des IDs des purchases à charger
 * @returns Promise<Purchases[]> - Purchases avec leurs relations products
 *
 * Flux :
 * 1. Utilise Query.select() pour charger uniquement les champs nécessaires
 * 2. Inclut le champ products pour avoir les relations
 * 3. Retourne les purchases complets avec leurs produits associés
 */
export async function loadPurchasesListByIds(
  purchaseIds: string[],
): Promise<Purchases[]> {
  if (!purchaseIds?.length) return [];

  try {
    const { databases, config } = await getAppwriteInstances();

    const response = await databases.listDocuments(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.purchases,
      [Query.equal("$id", purchaseIds), Query.select(["*", "products"])],
    );

    console.log(
      `[Appwrite Interactions] ${response.documents.length} purchases chargés avec relations products`,
    );
    return response.documents as Purchases[];
  } catch (error) {
    console.error(
      "[Appwrite Interactions] Erreur chargement purchases avec relations:",
      error,
    );
    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";
    throw new Error(`Échec du chargement des purchases: ${errorMessage}`);
  }
}

// =============================================================================
// UTILITAIRES DE MERGE
// =============================================================================

/**
 * Applique les mises à jour de produits aux produits existants
 *
 * Utilitaire principal pour la synchronisation incrémentielle de ProductsStore.
 * Fusionne intelligemment les produits existants avec les mises à jour reçues.
 *
 * @param currentProducts - Liste actuelle des produits dans le store
 * @param updatedProducts - Liste des produits mis à jour ou nouveaux (de syncProducts)
 * @returns Array<Products> - Liste fusionnée prête à remplacer l'état du store
 *
 * Algorithme :
 * 1. Crée un Map des produits mis à jour pour lookup O(1)
 * 2. Remplace les produits existants par leurs versions mises à jour
 * 3. Conserve les produits non modifiés
 * 4. Ajoute les nouveaux produits qui n'existaient pas
 *
 * Utilisé par ProductsStore après syncProducts() ou lors des événements realtime.
 */
export function applyProductUpdates(
  currentProducts: Products[],
  updatedProducts: Products[],
): Products[] {
  const updated = new Map(updatedProducts.map((p) => [p.$id, p]));
  const merged = currentProducts.map((p) => updated.get(p.$id) ?? p);
  const existingIds = new Set(currentProducts.map((p) => p.$id));
  const news = updatedProducts.filter((p) => !existingIds.has(p.$id));

  return [...merged, ...news];
}

// =============================================================================
// UTILITAIRES DE PARSING
// =============================================================================

/**
 * Formate les données de stock pour Appwrite
 * @param quantity - Quantité
 * @param unit - Unité
 * @param notes - Notes optionnelles
 * @param dateTime - Date/heure optionnelle
 * @returns string JSON formaté
 */
export function formatStockData(
  quantity: number,
  unit: string,
  notes?: string,
  dateTime?: string,
): string {
  const stockEntry = {
    quantity: quantity.toString(),
    unit,
    notes: notes || "",
    dateTime: dateTime || new Date().toISOString(),
  };

  return JSON.stringify([stockEntry]);
}

/**
 * Parse les données de stock depuis Appwrite
 * @param stockJson - Chaîne JSON des stocks
 * @returns Array d'entrées de stock
 */
export function parseStockData(stockJson: string | null): Array<{
  quantity: string;
  unit: string;
  notes: string;
  dateTime: string;
}> {
  if (!stockJson) return [];

  try {
    return JSON.parse(stockJson);
  } catch (error) {
    console.error("[Appwrite Interactions] Erreur parsing stock data:", error);
    return [];
  }
}

/**
 * Parse les occurrences de recettes depuis Appwrite
 * @param recipesJson - Chaîne JSON des recettes
 * @returns Array d'occurrences de recettes
 */
export function parseRecipesOccurrences(recipesJson: string | null): Array<{
  recipeName: string;
  quantity: string;
  unit: string;
  dateTimeService: string;
  horaire?: string;
  typePlat?: string;
  assiettes?: number;
}> {
  if (!recipesJson) return [];

  try {
    return JSON.parse(recipesJson);
  } catch (error) {
    console.error(
      "[Appwrite Interactions] Erreur parsing recipes occurrences:",
      error,
    );
    return [];
  }
}

// =============================================================================
// SERVICES REALTIME
// =============================================================================

/**
 * S'abonne aux événements realtime des collections products et purchases
 *
 * Service principal pour les mises à jour en temps réel de ProductsStore.
 * Gère l'abonnement Appwrite et dispatche les événements vers les callbacks appropriés.
 *
 * @param mainId - ID du main pour filtrer les événements
 * @param callbacks - Fonctions de callback pour chaque type d'événement
 * @returns Function - Fonction de désabonnement (appeler pour se désabonner)
 *
 * Flux :
 * 1. Initialise AppwriteClient si nécessaire
 * 2. S'abonne aux collections products et purchases pour ce mainId
 * 3. Parse les événements Appwrite (create/update/delete)
 * 4. Dispatch vers les callbacks appropriés (onProductCreate, onPurchaseUpdate, etc.)
 * 5. Gère le cycle de vie (connect/disconnect/error)
 *
 * ProductsStore fournit les callbacks qui mettent à jour l'état réactif.
 */
export function subscribeToRealtime(
  mainId: string,
  callbacks: RealtimeCallbacks = {},
): () => void {
  let unsubscribe: (() => void) | null = null;

  const handleRealtimeEvent = (response: any) => {
    const { events, payload } = response;
    if (!payload) return;

    // Déterminer la collection source à partir des événements
    const isProductsCollection = events.some((e: string) =>
      e.includes("products."),
    );
    const isPurchasesCollection = events.some((e: string) =>
      e.includes("purchases."),
    );

    const isCreate = events.some((e: string) => e.includes(".create"));
    const isUpdate = events.some((e: string) => e.includes(".update"));
    const isDelete = events.some((e: string) => e.includes(".delete"));

    // Dispatcher vers les callbacks appropriés
    if (isProductsCollection) {
      const product = payload as Products;

      if (isCreate && callbacks.onProductCreate) {
        callbacks.onProductCreate(product);
      } else if (isUpdate && callbacks.onProductUpdate) {
        callbacks.onProductUpdate(product);
      } else if (isDelete && callbacks.onProductDelete) {
        callbacks.onProductDelete(product.$id);
      }
    } else if (isPurchasesCollection) {
      const purchase = payload as Purchases;

      if (isCreate && callbacks.onPurchaseCreate) {
        callbacks.onPurchaseCreate(purchase);
      } else if (isUpdate && callbacks.onPurchaseUpdate) {
        callbacks.onPurchaseUpdate(purchase);
      } else if (isDelete && callbacks.onPurchaseDelete) {
        callbacks.onPurchaseDelete(purchase.$id);
      }
    }
  };

  const setupSubscription = async () => {
    try {
      // S'assurer qu'Appwrite est initialisé avant de s'abonner
      if (typeof window !== "undefined" && window.AppwriteClient) {
        await window.AppwriteClient.initializeAppwrite();

        unsubscribe = window.AppwriteClient.subscribeToCollections(
          ["products", "purchases"],
          mainId,
          handleRealtimeEvent,
          {
            onConnect: () => {
              console.log("[Appwrite Interactions] Realtime connecté");
              callbacks.onConnect?.();
            },
            onDisconnect: () => {
              console.log("[Appwrite Interactions] Realtime déconnecté");
              callbacks.onDisconnect?.();
            },
            onError: (error: any) => {
              console.error("[Appwrite Interactions] Erreur realtime:", error);
              callbacks.onError?.(error);
            },
          },
        );
      }
    } catch (error) {
      console.error(
        "[Appwrite Interactions] Impossible de configurer realtime:",
        error,
      );
      callbacks.onError?.(error);
    }
  };

  // Lancer la configuration de l'abonnement
  setupSubscription();

  // Retourner la fonction de désabonnement
  return () => {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = null;
    }
  };
}

/**
 * Charge les données principales de l'événement depuis la collection main
 * @param mainId - ID de l'événement principal
 * @returns Promise<MainEventData | null> - Données de l'événement ou null si non trouvé
 */
export async function loadMainEventData(
  mainId: string,
): Promise<MainEventData | null> {
  try {
    console.log(
      `[Appwrite Interactions] Chargement des données principales pour mainId: ${mainId}`,
    );

    const { databases } = await getAppwriteInstances();
    const config = (window as any).AppwriteClient.getConfig();

    const response = await databases.listDocuments(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.main,
      [Query.equal("mainId", mainId)],
    );

    if (response.documents.length === 0) {
      console.warn(
        `[Appwrite Interactions] Aucune donnée principale trouvée pour mainId: ${mainId}`,
      );
      return null;
    }

    const mainData = response.documents[0] as MainEventData;
    console.log(
      `[Appwrite Interactions] Données principales chargées pour: ${mainData.name}`,
    );
    return mainData;
  } catch (error) {
    console.error(
      `[Appwrite Interactions] Erreur chargement données principales pour mainId ${mainId}:`,
      error,
    );
    return null;
  }
}

/**
 * Extrait et parse le tableau des dates depuis la collection main
 * @param mainId - ID de l'événement principal
 * @returns Promise<string[]> - Tableau des dates ou tableau vide si non trouvé
 */
export async function loadAllDates(mainId: string): Promise<string[]> {
  try {
    console.log(
      `[Appwrite Interactions] Chargement des dates pour mainId: ${mainId}`,
    );

    const mainData = await loadMainEventData(mainId);

    if (!mainData || !mainData.allDates) {
      console.warn(
        `[Appwrite Interactions] Aucune date trouvée pour mainId: ${mainId}`,
      );
      return [];
    }

    // Parser le JSON depuis le champ allDates (string) avec superjson
    const dates = superjson.parse(mainData.allDates) as string[];
    console.log(
      `[Appwrite Interactions] ${dates.length} dates chargées pour mainId: ${mainId}`,
    );
    return dates;
  } catch (error) {
    console.error(
      `[Appwrite Interactions] Erreur chargement des dates pour mainId ${mainId}:`,
      error,
    );
    return [];
  }
}

// =============================================================================
// EXPORTS
// =============================================================================

export default {
  // Services produits - lecture
  loadProducts: loadProductsWithPurchases,

  // Services realtime
  subscribeToRealtime,

  // Services produits - mise à jour
  updateProduct,
  updateProductStore,
  updateProductWho,
  updateProductStock,

  // Services achats
  createPurchase,
  updatePurchase,
  deletePurchase,

  // Utilitaires de merge
  // mergeProductsWithPurchases,
  applyProductUpdates,

  // Utilitaires de parsing
  formatStockData,
  parseStockData,
  parseRecipesOccurrences,
};
