/**
 * Services d'interaction avec Appwrite - Couche d'accès aux données pure
 *
 * Architecture du système :
 * ┌─────────────────────────────────────────────────────────────┐
 * │              appwrite-interactions                         │
 * │  • CRUD Appwrite pur                                        │
 * │  • Transformations sans état                               │
 * │  • Gestion realtime                                        │
 * │  • Sync incrémentielle                                     │
 * └─────────────────▲───────────────────────────────────────────┘
 *                   │ Fournit les services bruts
 *                   │
 * ┌─────────────────▼───────────────────────────────────────────┐
 * │                  ProductsStore                              │
 * │  • SvelteMap réactive                                      │
 * │  • Cache localStorage                                      │
 * │  • Filtrage et dérivés                                     │
 * │  • Logique métier                                          │
 * └─────────────────▲───────────────────────────────────────────┘
 *                   │ Consommé par ProductModalState
 *                   │
 * ┌─────────────────▼───────────────────────────────────────────┐
 * │              ProductModalState                              │
 * │  • Factory par produit                                     │
 * │  • Formulaires locaux                                      │
 * │  • Orchestration des appels                                │
 * └─────────────────────────────────────────────────────────────┘
 *
 * Services principaux :
 * ─────────────────────────────────────────────────────────────
 * Lecture/Chargement :
 * • loadMainEventData() : Données principales de l'événement
 * • syncProductsWithPurchases() : Sync incrémentielle delta
 * • loadPurchasesListByIds() : Chargement par IDs
 *
 * Écriture CRUD :
 * • createMainDocument() : Création document main
 * • upsertProduct() : Création/Mise à jour produit (avec sync logic)
 * • updateProduct() : Mise à jour produit direct
 * • createPurchase/updatePurchase/deletePurchase() : CRUD achats
 *
 * Gestion spécifique :
 * • updateProductStock() : Mise à jour stock
 * • updateProductStore() : Mise à jour magasin
 * • updateProductWho() : Mise à jour volontaires
 *
 * Realtime :
 * • subscribeToRealtime() : Abonnement événements produits/achats
 *
 * Ce fichier est une couche sans état qui expose des fonctions pures
 * pour les stores Svelte 5. Toute la logique de réactivité est gérée
 * par ProductsStore et ProductModalState.
 */

import { ID, Query, type Models } from "appwrite";
import superjson from "superjson";
import type { Products, Purchases } from "../types/appwrite.d";
import type {
  StoreInfo,
  MainEventData,
  EnrichedProduct,
} from "../types/store.types";

// =============================================================================
// TYPES INTERNE (utilise les types générés automatiquement ??)
// =============================================================================

export type ProductUpdate = Partial<
  Omit<Products, "$id" | keyof Models.Row | "purchases" | "mainId">
>;

export type PurchaseCreate = Omit<
  Purchases,
  "$id" | keyof Models.Row | "purchases" | "createdBy" | "products" | "mainId"
> & {
  products: string[]; // IDs des produits pour la relation
  mainId: string; // ID du main pour la relation
};

export type PurchaseUpdate = Partial<
  Omit<Purchases, "$id" | keyof Models.Row | "mainId" | "createdBy">
> & {
  products?: Products[];
};

// =============================================================================
// NOUVEAUX TYPES POUR LA MIGRATION PRODUCTSSTORE
// =============================================================================

export interface ProductWithPurchases extends Products {
  purchases: Purchases[];
}

// =============================================================================
// UTILITAIRES DE TRANSFORMATION SYNC
// =============================================================================

/**
 * Transforme un EnrichedProduct en données Products pour Appwrite
 * @param enrichedProduct - Produit enrichi localement
 * @param userUpdates - Modifications utilisateur à appliquer
 * @returns Données formatées pour Appwrite avec $id prédéfini
 */
export function enrichedProductToAppwriteProduct(
  enrichedProduct: EnrichedProduct,
  userUpdates: ProductUpdate,
): any {
  return {
    $id: enrichedProduct.$id,
    mainId: enrichedProduct.mainId,
    productHugoUuid: enrichedProduct.productHugoUuid,
    productName: enrichedProduct.productName, // pour renommage futur
    // Données utilisateur (écrasent/étendent les valeurs par défaut)
    ...userUpdates,
  };
}

export interface LoadProductsOptions {
  limit?: number;
  orderBy?: "productName" | "$updatedAt";
  orderDirection?: "asc" | "desc";
}

export interface SyncOptions {
  lastSync: string | null;
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
 * @deprecated Utiliser plutôt syncProductsWithPurchases
 *
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
 * @legacy : inutilisé ?
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
 * Charge les purchases modifiés depuis le dernier sync
 * @param mainId - ID du main
 * @param lastSync - Date du dernier sync
 * @param limit - Limite de résultats (default: 100)
 * @returns Promise<Purchases[]>
 */
export async function loadUpdatedPurchases(
  mainId: string,
  lastSync: string,
  limit = 100,
): Promise<Purchases[]> {
  try {
    const { databases, config } = await getAppwriteInstances();

    const response = await databases.listDocuments(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.purchases,
      [
        Query.greaterThan("$updatedAt", lastSync),
        Query.equal("mainId", mainId),
        Query.limit(limit),
        Query.select(["*", "products.$id"]), // Uniquement les IDs des produits
      ],
    );

    console.log(
      `[Appwrite Interactions] ${response.documents.length} purchases modifiés chargés`,
    );
    return response.documents as Purchases[];
  } catch (error) {
    console.error(
      "[Appwrite Interactions] Erreur chargement purchases modifiés:",
      error,
    );
    return [];
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
        Query.select([
          "*",
          "purchases.$id",
          "purchases.unit",
          "purchases.quantity",
          "purchases.store",
          "purchases.who",
          "purchases.notes",
          "purchases.price",
          "purchases.status",
          "purchases.deliveryDate",
          "purchases.orderDate",
          "purchases.createdBy",
          "purchases.products.$id",
        ]),
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

  try {
    const { databases, config } = await getAppwriteInstances();

    if (!lastSync) {
      // === CHARGEMENT COMPLET ===
      console.log("[Appwrite Interactions] Chargement complet des produits");

      const response = await databases.listDocuments(
        config.APPWRITE_CONFIG.databaseId,
        config.APPWRITE_CONFIG.collections.products,
        [
          Query.equal("mainId", mainId),
          Query.select([
            "*",
            "purchases.$id",
            "purchases.unit",
            "purchases.quantity",
            "purchases.store",
            "purchases.who",
            "purchases.notes",
            "purchases.price",
            "purchases.status",
            "purchases.deliveryDate",
            "purchases.orderDate",
            "purchases.createdBy",
            "purchases.products.$id",
          ]),
          Query.limit(limit),
        ],
      );

      return response.documents as ProductWithPurchases[];
    }

    const response = await databases.listDocuments(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.products,
      [
        Query.greaterThan("$updatedAt", lastSync),
        Query.equal("mainId", mainId),
        Query.limit(limit),
        Query.select([
          "*",
          "purchases.$id",
          "purchases.unit",
          "purchases.quantity",
          "purchases.store",
          "purchases.who",
          "purchases.notes",
          "purchases.price",
          "purchases.status",
          "purchases.deliveryDate",
          "purchases.orderDate",
          "purchases.createdBy",
          "purchases.products.$id",
        ]), // Récupérer la relation purchases sans récursion
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
 * Met à jour ou crée un produit sur Appwrite (pattern upsert)
 * @param productId - ID du produit à mettre à jour/créer
 * @param updates - Champs à mettre à jour
 * @param getEnrichedProduct - Fonction pour récupérer le produit enrichi localement
 * @returns Promise<Products>
 */
export async function upsertProduct(
  productId: string,
  updates: ProductUpdate,
  getEnrichedProduct: (productId: string) => any, // EnrichedProduct | null
): Promise<Products> {
  try {
    // Récupérer le produit enrichi localement
    const enrichedProduct = getEnrichedProduct(productId);
    if (!enrichedProduct) {
      throw new Error(
        `Produit ${productId} non trouvé localement pour création`,
      );
    }

    console.log(
      `[Appwrite Interactions] Création produit ${productId} sur Appwrite...`,
    );

    // Transformer en données Appwrite avec les updates utilisateur
    const appwriteData = enrichedProductToAppwriteProduct(
      enrichedProduct,
      updates,
    );

    const { databases, config } = await getAppwriteInstances();
    const response = await databases.createDocument(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.products,
      productId, // $id prédéfini
      appwriteData,
    );

    console.log(
      `[Appwrite Interactions] Produit ${productId} créé avec succès`,
    );

    // Note : le ProductsStore mettra à jour isSynced via le realtime
    return response as Products;
  } catch (error) {
    console.error(
      `[Appwrite Interactions] Erreur création produit ${productId}:`,
      error,
    );
    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";
    throw new Error(`Échec de la création du produit: ${errorMessage}`);
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

  const result = await updateProduct(productId, {
    store: serializedStore || undefined,
  });
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
      [Query.equal("$id", purchaseIds), Query.select(["*", "products.$id"])],
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

  return JSON.stringify(stockEntry);
}

/**
 * Parse les données de stock depuis Appwrite
 * @param stockJson - Chaîne JSON des stocks
 * @returns StockEntry | null
 */
export function parseStockData(stockJson: string | null): {
  quantity: string;
  unit: string;
  notes: string;
  dateTime: string;
} | null {
  if (!stockJson) return null;

  try {
    return JSON.parse(stockJson);
  } catch (error) {
    console.error("[Appwrite Interactions] Erreur parsing stock data:", error);
    return null;
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

    const mainData = (await databases.getDocument(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.main,
      mainId,
    )) as MainEventData;
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
 * Crée un document Main dans Appwrite
 */
export async function createMainDocument(
  mainId: string,
  hugoContentHash: string,
  allDates: string[],
  name: string,
): Promise<void> {
  try {
    console.log(`[Appwrite Interactions] Création du Main document: ${mainId}`);

    const { databases } = await getAppwriteInstances();
    const config = (window as any).AppwriteClient.getConfig();
    const account = await (window as any).AppwriteClient.getAccount();
    const user = await account.get();

    await databases.createDocument(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.main,
      mainId,
      {
        name: name,
        createdBy: user.$id,
        isActive: true,
        originalDataHash: hugoContentHash,
        allDates: allDates,
        status: "active",
        dateStart: allDates[0] || null,
        dateEnd: allDates[allDates.length - 1] || null,
      },
    );

    console.log(`[Appwrite Interactions] Main document créé: ${mainId}`);
  } catch (error) {
    console.error(
      `[Appwrite Interactions] Erreur création Main document:`,
      error,
    );
    throw error;
  }
}

// =============================================================================
// SERVICES DE MODIFICATION GROUPÉE
// =============================================================================

export interface BatchUpdateOptions {
  mode?: "replace" | "add"; // Pour les champs de type tableau (who, etc.)
  dryRun?: boolean; // Simuler l'opération sans appliquer
}

export interface BatchUpdateData {
  productIds: string[];
  products: any[]; // Produits complets pour créer ceux qui n'existent pas
  updateType: "store" | "who" | "stock";
  updateData: any;
  options?: BatchUpdateOptions;
}

export interface BatchUpdateResult {
  success: boolean;
  transactionId?: string;
  updatedCount: number;
  updateType: string;
  error?: string;
  timestamp: string;
}

/**
 * Met à jour plusieurs produits en utilisant une transaction Appwrite
 * @param data - Données de la mise à jour groupée
 * @returns Promise<BatchUpdateResult> - Résultat de l'opération
 */
export async function batchUpdateProducts(
  data: BatchUpdateData,
): Promise<BatchUpdateResult> {
  try {
    if (!(window as any).AppwriteClient) {
      throw new Error("AppwriteClient non disponible");
    }

    const functions = await (window as any).AppwriteClient.getFunctions();
    const config = (window as any).AppwriteClient.getConfig();

    const payload = {
      operation: "batchUpdateProducts",
      data: data,
    };

    console.log(
      `[Appwrite Interactions] Lancement mise à jour groupée: ${data.productIds.length} produits, type: ${data.updateType}`,
    );

    const execution = await functions.createExecution(
      config.APPWRITE_CONFIG.functions.batchUpdate,
      JSON.stringify(payload),
      false, // async = false pour attendre le résultat
      "/",
      "POST",
    );

    if (execution.status !== "completed") {
      throw new Error(
        `Exécution échouée avec statut: ${execution.status}. Erreur: ${execution.stderr}`,
      );
    }

    const result = JSON.parse(execution.responseBody) as BatchUpdateResult;

    if (result.success) {
      console.log(
        `[Appwrite Interactions] Mise à jour groupée réussie: ${result.updatedCount} produits mis à jour`,
      );
    } else {
      console.error(
        `[Appwrite Interactions] Mise à jour groupée échouée:`,
        result.error,
      );
    }

    return result;
  } catch (error) {
    console.error("[Appwrite Interactions] Erreur mise à jour groupée:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";

    return {
      success: false,
      updatedCount: data.productIds.length,
      updateType: data.updateType,
      error: errorMessage,
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Applique un store à plusieurs produits
 * @param productIds - Liste des IDs des produits à modifier
 * @param products - Liste complète des produits pour gérer les créations
 * @param storeInfo - Informations du magasin
 * @param options - Options de la mise à jour
 * @returns Promise<BatchUpdateResult>
 */
export async function batchUpdateStore(
  productIds: string[],
  products: any[],
  storeInfo: StoreInfo,
  options?: BatchUpdateOptions,
): Promise<BatchUpdateResult> {
  return batchUpdateProducts({
    productIds,
    products,
    updateType: "store",
    updateData: storeInfo,
    options,
  });
}

/**
 * Applique des volontaires à plusieurs produits
 * @param productIds - Liste des IDs des produits à modifier
 * @param products - Liste complète des produits pour gérer les créations
 * @param names - Liste des noms de volontaires
 * @param mode - Mode d'application ('replace' ou 'add')
 * @returns Promise<BatchUpdateResult>
 */
export async function batchUpdateWho(
  productIds: string[],
  products: any[],
  names: string[],
  mode: "replace" | "add" = "replace",
): Promise<BatchUpdateResult> {
  return batchUpdateProducts({
    productIds,
    products,
    updateType: "who",
    updateData: { names },
    options: { mode },
  });
}

/**
 * Valide les données avant une mise à jour groupée
 * @param data - Données à valider
 * @returns true si valide, lève une erreur sinon
 */
function validateBatchUpdateData(data: BatchUpdateData): boolean {
  if (!data.productIds?.length) {
    throw new Error("La liste des produits est vide");
  }

  if (data.productIds.length > 100) {
    throw new Error("Trop de produits. Maximum 100 opérations par transaction");
  }

  if (
    !data.updateType ||
    !["store", "who", "stock"].includes(data.updateType)
  ) {
    throw new Error("Type de mise à jour invalide");
  }

  if (!data.updateData) {
    throw new Error("Données de mise à jour manquantes");
  }

  // Validation spécifique par type
  switch (data.updateType) {
    case "store":
      if (!data.updateData.storeName?.trim()) {
        throw new Error("Le nom du magasin est requis");
      }
      break;
    case "who":
      if (
        !Array.isArray(data.updateData.names) ||
        !data.updateData.names.length
      ) {
        throw new Error("La liste des volontaires est vide");
      }
      break;
    case "stock":
      if (
        typeof data.updateData.quantity !== "number" ||
        !data.updateData.unit?.trim()
      ) {
        throw new Error("La quantité et l'unité sont requises pour le stock");
      }
      break;
  }

  return true;
}

/**
 * Crée un purchase de validation rapide pour un produit
 * @param productId - ID du produit à valider
 * @param quantities - Quantités manquantes à valider
 * @param options - Options supplémentaires (invoiceId, notes, etc.)
 * @returns Promise<Purchases[]>
 */
export async function createQuickValidationPurchases(
  mainId: string,
  productId: string,
  quantities: Array<{ q: number; u: string }>,
  options: {
    invoiceId?: string;
    notes?: string;
    store?: string;
  } = {},
): Promise<Purchases[]> {
  try {
    const { databases, config } = await getAppwriteInstances();
    const client = (window as any).AppwriteClient!;
    const account = await client.getAccount();
    const user = await account.get();

    const purchases: Purchases[] = [];

    console.log(
      "[Appwrite Interactions] Debug createQuickValidationPurchases:",
      {
        mainId,
        productId,
        productIdType: typeof productId,
        quantities,
        options,
      },
    );

    for (const qty of quantities) {
      const purchaseData = {
        products: [productId],
        mainId: mainId,
        quantity: qty.q,
        unit: qty.u,
        status: "delivered",
        notes:
          options.notes ||
          `Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,
        store: options.store ?? null,
        who: user.name,
        price: null,
        orderDate: null,
        deliveryDate: null,
        createdBy: user.$id,
        invoiceId: options.invoiceId,
        invoiceTotal: null,
      };

      const response = await databases.createDocument(
        config.APPWRITE_CONFIG.databaseId,
        config.APPWRITE_CONFIG.collections.purchases,
        ID.unique(),
        purchaseData,
      );

      purchases.push(response as Purchases);
    }

    console.log(
      `[Appwrite Interactions] ${purchases.length} validations rapides créées pour produit ${productId}`,
    );
    return purchases;
  } catch (error) {
    console.error(
      "[Appwrite Interactions] Erreur création validation rapide:",
      error,
    );
    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";
    throw new Error(`Échec de la validation rapide: ${errorMessage}`);
  }
}

/**
 * Crée une dépense générale (sans produits liés)
 * @param mainId - ID de l'événement principal
 * @param expenseData - Données de la dépense
 * @returns Promise<Purchases>
 */
export async function createExpensePurchase(
  mainId: string,
  invoiceId?: string,
  invoiceTotal?: number,
  store?: string,
  notes?: string,
): Promise<Purchases> {
  try {
    const { databases, config } = await getAppwriteInstances();
    const client = (window as any).AppwriteClient!;
    const account = await client.getAccount();
    const user = await account.get();

    if (!invoiceId || !invoiceTotal) {
      throw new Error("invoiceId et invoiceTotal sont requis pour une dépense");
    }

    const completeExpenseData = {
      products: [], // Pas de produits liés
      mainId: mainId,
      quantity: 1,
      unit: "global",
      status: "expense",
      notes: notes || "",
      store: store ?? null,
      who: user.name,
      price: invoiceTotal,
      invoiceId: invoiceId,
      invoiceTotal: invoiceTotal,
      orderDate: null,
      deliveryDate: null,
      createdBy: user.$id,
    };

    const response = await databases.createDocument(
      config.APPWRITE_CONFIG.databaseId,
      config.APPWRITE_CONFIG.collections.purchases,
      ID.unique(),
      completeExpenseData,
    );

    console.log("[Appwrite Interactions] Dépense créée:", response);
    return response as Purchases;
  } catch (error) {
    console.error("[Appwrite Interactions] Erreur création dépense:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";
    throw new Error(`Échec de la création de la dépense: ${errorMessage}`);
  }
}

// =============================================================================
// EXPORTS
// =============================================================================

export default {
  // Services main
  createMainDocument,

  // Services realtime
  subscribeToRealtime,

  // Services produits - mise à jour
  updateProduct,
  updateProductStore,
  updateProductWho,
  updateProductStock,

  // Services produits - modification groupée
  batchUpdateProducts,
  batchUpdateStore,
  batchUpdateWho,

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
};
