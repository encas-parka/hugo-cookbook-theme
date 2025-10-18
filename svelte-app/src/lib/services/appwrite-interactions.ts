/**
 * Services d'interaction avec Appwrite pour la gestion des produits et achats
 * Ce fichier encapsule les opérations CRUD en utilisant le client Appwrite existant
 */

import { ID, Query, type Models } from 'appwrite';
import type { Products, Purchases } from '../types/appwrite.d';
import type { StoreInfo } from '../types/store.types';

// =============================================================================
// TYPES INTERNE (utilise les types générés automatiquement)
// =============================================================================

export type ProductUpdate = Partial<Omit<Products, '$id' | keyof Models.Row | 'purchases' | 'mainId'>>;

export type PurchaseCreate = Omit<Purchases, '$id' | keyof Models.Row | 'purchases' | 'createdBy' | 'status' | 'products' | 'mainId'> & {
  products: string[];  // IDs des produits pour la relation
  mainId: string;      // ID du main pour la relation
};

export type PurchaseUpdate = Partial<Omit<Purchases, '$id' | keyof Models.Row | 'mainId' | 'products' | 'createdBy' | 'status'>>;

// =============================================================================
// NOUVEAUX TYPES POUR LA MIGRATION PRODUCTSSTORE
// =============================================================================

export interface ProductWithPurchases extends Products {
  purchases: Purchases[];
}

export interface LoadProductsOptions {
  includePurchases?: boolean;
  limit?: number;
  orderBy?: 'productName' | '$updatedAt';
  orderDirection?: 'asc' | 'desc';
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
        throw new Error('AppwriteClient non disponible');
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
 * @param mainId - ID du main pour filtrer les produits
 * @param options - Options de chargement (pagination, tri, inclusion des achats)
 * @returns Promise<ProductWithPurchases[]>
 */
export async function loadProducts(
    mainId: string,
    options: LoadProductsOptions = {}
): Promise<ProductWithPurchases[]> {
    const {
        includePurchases = true,
        limit = 100,
        orderBy = 'productName',
        orderDirection = 'asc'
    } = options;

    try {
        const { databases, config } = await getAppwriteInstances();

        // Charger les produits
        const productsResponse = await databases.listDocuments(
            config.APPWRITE_CONFIG.databaseId,
            config.APPWRITE_CONFIG.collections.products,
            [
                Query.equal('mainId', mainId),
                Query.orderAsc(orderBy === 'productName' ? 'productName' : '$updatedAt'),
                Query.limit(limit)
            ]
        );
        const products = productsResponse.documents as Products[];

        if (!includePurchases) {
            return products as ProductWithPurchases[];
        }

        // Charger les achats associés
        const purchasesResponse = await databases.listDocuments(
            config.APPWRITE_CONFIG.databaseId,
            config.APPWRITE_CONFIG.collections.purchases,
            [Query.equal('mainId', mainId)]
        );

        // Associer les achats aux produits
        const purchases = purchasesResponse.documents as Purchases[];
        const productsWithPurchases = mergeProductsWithPurchases(products, purchases);

        console.log(`[Appwrite Interactions] ${productsResponse.documents.length} produits chargés avec ${purchasesResponse.documents.length} achats`);

        return productsWithPurchases;

    } catch (error) {
        console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${mainId}:`, error);
        const errorMessage = error instanceof Error ? error.message : 'Erreur lors du chargement des produits';
        throw new Error(`Échec du chargement des produits: ${errorMessage}`);
    }
}

/**
 * Synchronise les produits depuis Appwrite (uniquement les mises à jour)
 * @param mainId - ID du main pour filtrer les produits
 * @param options - Options de synchronisation (dernière sync, limite)
 * @returns Promise<Products[]>
 */
export async function syncProducts(
    mainId: string,
    options: SyncOptions
): Promise<Products[]> {
    const { lastSync, limit = 100 } = options;

    if (!lastSync) {
        console.log('[Appwrite Interactions] Aucune dernière sync fournie, retour vide');
        return [];
    }

    try {
        const { databases, config } = await getAppwriteInstances();

        const response = await databases.listDocuments(
            config.APPWRITE_CONFIG.databaseId,
            config.APPWRITE_CONFIG.collections.products,
            [
                Query.greaterThan('$updatedAt', lastSync),
                Query.equal('mainId', mainId),
                Query.limit(limit)
            ]
        );

        if (response.documents.length > 0) {
            console.log(`[Appwrite Interactions] ${response.documents.length} mises à jour synchronisées`);
        }

        return response.documents as Products[];

    } catch (error) {
        console.error(`[Appwrite Interactions] Erreur sync produits pour mainId ${mainId}:`, error);
        const errorMessage = error instanceof Error ? error.message : 'Erreur lors de la synchronisation';
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
    updates: ProductUpdate
): Promise<Products> {
    try {
        const { databases, config } = await getAppwriteInstances();

        const response = await databases.updateDocument(
            config.APPWRITE_CONFIG.databaseId,
            config.APPWRITE_CONFIG.collections.products,
            productId,
            updates
        );

        return response as Products;
    } catch (error) {
        console.error(`[Appwrite Interactions] Erreur mise à jour produit ${productId}:`, error);
        const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
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
    store: StoreInfo | null
): Promise<Products> {
    console.log(`[Appwrite Interactions] Mise à jour du magasin pour produit ${productId}:`, store);
    
    // Valider les entrées
    if (!productId) {
        throw new Error('ID du produit requis pour la mise à jour du magasin');
    }
    
    // Sérialiser l'objet StoreInfo en string JSON pour Appwrite
    const serializedStore = store ? JSON.stringify(store) : null;
    
    const result = await updateProduct(productId, { store: serializedStore });
    console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${productId}, nouvelle valeur:`, result.store);
    
    return result;
}

/**
 * Met à jour la liste des volontaires pour un produit
 * @param productId - ID du produit
 * @param who - Liste des volontaires (null pour vide)
 */
export async function updateProductWho(
    productId: string,
    who: string[] | null
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
    stockReel: string | null
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
    purchaseData: PurchaseCreate
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
            status: 'active' // FIXIT : status devrait être utilisé pour distinguer les commandes effectué et les achats effectués. Trouver le bon pattern (date ?)
        };

        const response = await databases.createDocument(
            config.APPWRITE_CONFIG.databaseId,
            config.APPWRITE_CONFIG.collections.purchases,
            ID.unique(),
            completePurchaseData
        );

        console.log('[Appwrite Interactions] Achat créé:', response);
        return response as Purchases;
    } catch (error) {
        console.error('[Appwrite Interactions] Erreur création achat:', error);
        const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
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
    updates: PurchaseUpdate
): Promise<Purchases> {
    try {
        const { databases, config } = await getAppwriteInstances();

        const response = await databases.updateDocument(
            config.APPWRITE_CONFIG.databaseId,
            config.APPWRITE_CONFIG.collections.purchases,
            purchaseId,
            updates
        );

        console.log(`[Appwrite Interactions] Achat ${purchaseId} mis à jour:`, updates);
        return response as Purchases;
    } catch (error) {
        console.error(`[Appwrite Interactions] Erreur mise à jour achat ${purchaseId}:`, error);
        const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
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
            purchaseId
        );

        console.log(`[Appwrite Interactions] Achat ${purchaseId} supprimé`);
    } catch (error) {
        console.error(`[Appwrite Interactions] Erreur suppression achat ${purchaseId}:`, error);
        const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
        throw new Error(`Échec de la suppression de l'achat: ${errorMessage}`);
    }
}



// =============================================================================
// UTILITAIRES DE MERGE
// =============================================================================

/**
 * Fusionne les produits avec leurs achats associés
 * @param products - Liste des produits
 * @param purchases - Liste des achats
 * @returns Array<ProductWithPurchases>
 */
export function mergeProductsWithPurchases(
    products: Products[],
    purchases: Purchases[]
): ProductWithPurchases[] {
    return products.map(product => ({
        ...product,
        purchases: purchases.filter(purchase =>
            purchase.products.some(p => p.$id === product.$id)
        )
    }));
}

/**
 * Fusionne les produits existants avec les produits mis à jour
 * Conserve les produits existants qui ne sont pas dans les mises à jour
 * Ajoute les nouveaux produits
 * @param currentProducts - Liste actuelle des produits
 * @param updatedProducts - Liste des produits mis à jour ou nouveaux
 * @returns Array<Products>
 */
export function mergeUpdatedProducts(
    currentProducts: Products[],
    updatedProducts: Products[]
): Products[] {
    const updated = new Map(updatedProducts.map(p => [p.$id, p]));
    const merged = currentProducts.map(p => updated.get(p.$id) ?? p);
    const existingIds = new Set(currentProducts.map(p => p.$id));
    const news = updatedProducts.filter(p => !existingIds.has(p.$id));
    
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
    dateTime?: string
): string {
    const stockEntry = {
        quantity: quantity.toString(),
        unit,
        notes: notes || '',
        dateTime: dateTime || new Date().toISOString()
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
        console.error('[Appwrite Interactions] Erreur parsing stock data:', error);
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
        console.error('[Appwrite Interactions] Erreur parsing recipes occurrences:', error);
        return [];
    }
}

// =============================================================================
// EXPORTS
// =============================================================================

export default {
    // Services produits - lecture
    loadProducts,
    syncProducts,
    
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
    mergeProductsWithPurchases,
    mergeUpdatedProducts,

    // Utilitaires de parsing
    formatStockData,
    parseStockData,
    parseRecipesOccurrences
};
