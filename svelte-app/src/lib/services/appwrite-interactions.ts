/**
 * Services d'interaction avec Appwrite pour la gestion des produits et achats
 * Ce fichier encapsule les opérations CRUD en utilisant le client Appwrite existant
 */

import { ID, type Models } from 'appwrite';
import type { Products, Purchases } from '../types/appwrite.d';
import { errorMessages } from 'vue/compiler-sfc';

// =============================================================================
// TYPES INTERNE (utilise les types générés automatiquement)
// =============================================================================

export type ProductUpdate = Partial<Omit<Products, '$id' | keyof Models.Row | 'purchases' | 'mainId'>>;

export type PurchaseCreate = Omit<Purchases, '$id' | keyof Models.Row | 'purchases' | 'createdBy' | 'status'>;

export type PurchaseUpdate = Partial<Omit<Purchases, '$id' | keyof Models.Row | 'mainId' | 'products' | 'createdBy' | 'status'>>;

// =============================================================================
// UTILITAIRES INTERNES
// =============================================================================

/**
 * Récupère les instances Appwrite nécessaires
 * @throws Error si AppwriteClient n'est pas disponible
 */
async function getAppwriteInstances() {
    if (!window.AppwriteClient) {
        throw new Error('AppwriteClient non disponible');
    }

    const databases = await window.AppwriteClient.getDatabases();
    const config = window.AppwriteClient.getConfig();

    return { databases, config };
}

// =============================================================================
// SERVICES PRODUITS
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

        console.log(`[Appwrite Interactions] Produit ${productId} mis à jour:`, updates);
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
 * @param store - Nouveau magasin (null pour effacer)
 */
export async function updateProductStore(
    productId: string,
    store: string | null
): Promise<Products> {
    return updateProduct(productId, { store });
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
        const client = window.AppwriteClient!;

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
// UTILITAIRES
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
    // Services produits
    updateProduct,
    updateProductStore,
    updateProductWho,
    updateProductStock,

    // Services achats
    createPurchase,
    updatePurchase,
    deletePurchase,


    // Utilitaires
    formatStockData,
    parseStockData,
    parseRecipesOccurrences
};
