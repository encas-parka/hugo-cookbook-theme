// =============================================================================
// SERVICES D'ACHAT GROUPÉ AVEC SYNC
// =============================================================================
import { executeWithRetry } from "../utils/retry.utils";
import { getAppwriteInstances, getAppwriteConfig } from "./appwrite";

export interface GroupPurchaseProductData {
  productId: string;
  isSynced: boolean;
  missingQuantities: Array<{ q: number; u: string }>;
}

export interface GroupPurchaseInvoiceData {
  invoiceId: string;
  invoiceTotal?: number;
  store?: string;
  notes?: string;
  who?: string;
  purchaseStatus?: string | null; // Statut des achats groupés
  purchaseDeliveryDate?: string | null; // Date de livraison pour les achats
}

// 🔧 Données d'achat simplifiées pour la fonction cloud
export interface GroupPurchaseData {
  productId: string;
  quantity: number;
  unit: string;
  status?: string;
  notes?: string;
  store?: string;
  who?: string;
  deliveryDate?: string | null;
  createdBy?: string | null;
}

export interface GroupPurchaseResult {
  success: boolean;
  transactionId?: string;
  productsCreated: number;
  purchasesCreated: number;
  expenseCreated: boolean;
  totalOperations: number;
  invoiceId: string;
  error?: string;
  timestamp: string;
}

export interface GroupPurchaseBatchResult {
  success: boolean;
  results: GroupPurchaseResult[];
  totalProductsCreated: number;
  totalPurchasesCreated: number;
  totalExpensesCreated: number;
  error?: string;
}

/**
 * Prépare les données pour l'envoi à la fonction cloud
 * @param productsData - Données des produits avec leurs quantités manquantes
 * @param invoiceData - Données de la facture
 * @param mainId - ID de l'événement principal
 * @returns Données formatées pour la fonction cloud
 */
async function prepareBatchData(
  productsData: GroupPurchaseProductData[],
  invoiceData: GroupPurchaseInvoiceData,
  mainId: string,
): Promise<{
  mainId: string;
  purchasesData: GroupPurchaseData[];
  invoiceData: GroupPurchaseInvoiceData;
  fromUserId: string;
}> {
  // Récupérer l'utilisateur connecté
  let currentUserId: string | null = null;
  try {
    const { account } = await getAppwriteInstances();
    const user = await account.get();
    currentUserId = user.$id;
  } catch (error) {
    console.warn(
      "[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",
      error,
    );
  }

  // Préparer les données d'achat avec le statut et deliveryDate fournis
  const purchaseStatus = invoiceData.purchaseStatus || "delivered";
  let deliveryDate = invoiceData.purchaseDeliveryDate || null;

  // 🎯 LOGIQUE : Assigner automatiquement deliveryDate pour les achats livrés sans date
  if (purchaseStatus === "delivered" && !deliveryDate) {
    deliveryDate = new Date().toISOString(); // Conserve l'heure complète
  }

  const purchasesData: GroupPurchaseData[] = productsData.flatMap((product) =>
    product.missingQuantities.map((quantity) => ({
      productId: product.productId,
      quantity: quantity.q,
      unit: quantity.u,
      status: purchaseStatus,
      notes: invoiceData.notes || "",
      store: invoiceData.store || "",
      who: invoiceData.who || undefined,
      price: undefined, // Gardé pour cohérence (sera null dans Appwrite)
      orderDate: null, // Sera généré par la fonction cloud
      deliveryDate,
      createdBy: currentUserId,
    })),
  );

  return {
    mainId,
    purchasesData,
    invoiceData,
    fromUserId: currentUserId || "",
  };
}

/**
 * Exécute un lot d'achat groupé via la fonction cloud
 * @param batchData - Données du lot à exécuter
 * @returns Promise<GroupPurchaseResult> - Résultat du lot
 */
async function executeGroupPurchaseBatch(batchData: {
  mainId: string;
  purchasesData: GroupPurchaseData[];
  invoiceData: GroupPurchaseInvoiceData;
  fromUserId: string;
}): Promise<GroupPurchaseResult> {
  try {
    const config = getAppwriteConfig();
    const { functions } = await getAppwriteInstances();

    const payload = {
      operation: "createGroupPurchaseWithSync",
      data: batchData,
    };

    console.log(
      `[Appwrite Interactions] Exécution: ${batchData.purchasesData.length} achats à créer`,
    );

    const execution = await functions.createExecution(
      config.APPWRITE_CONFIG.functions.batchUpdate,
      JSON.stringify(payload),
      false, // async = false pour attendre le résultat
      "/",
      "POST" as any,
    );

    if (execution.status !== "completed") {
      throw new Error(`Exécution échouée avec statut: ${execution.status}.`);
    }

    const result = JSON.parse(execution.responseBody) as GroupPurchaseResult;

    if (result.success) {
      console.log(
        `[Appwrite Interactions] Succès: ${result.purchasesCreated} achats créés`,
      );
    } else {
      console.error(`[Appwrite Interactions] Échec:`, result.error);
    }

    return result;
  } catch (error) {
    console.error("[Appwrite Interactions] Erreur exécution:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";

    return {
      success: false,
      productsCreated: 0,
      purchasesCreated: 0,
      expenseCreated: false,
      totalOperations: 0,
      invoiceId: batchData.invoiceData.invoiceId,
      error: errorMessage,
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Crée des achats groupés avec synchronisation de produits
 *
 * Service principal pour les achats groupés. Envoie toutes les données
 * en un seul lot à la fonction cloud Appwrite qui gère la création.
 *
 * @param mainId - ID de l'événement principal
 * @param productsData - Données des produits avec leurs quantités manquantes
 * @param invoiceData - Données de la facture commune
 * @returns Promise<GroupPurchaseBatchResult> - Résultat de l'opération groupée
 *
 * Flux simplifié :
 * 1. Validation des données d'entrée
 * 2. Préparation des données pour la fonction cloud
 * 3. Exécution unique via la fonction cloud avec retry automatique
 * 4. Retour du résultat
 */
export async function createGroupPurchaseWithSync(
  mainId: string,
  productsData: GroupPurchaseProductData[],
  invoiceData: GroupPurchaseInvoiceData,
): Promise<GroupPurchaseBatchResult> {
  // 1. Validation
  if (!productsData?.length) {
    return {
      success: false,
      results: [],
      totalProductsCreated: 0,
      totalPurchasesCreated: 0,
      totalExpensesCreated: 0,
      error: "Aucun produit à traiter",
    };
  }

  console.log(
    `[Appwrite Interactions] Achat groupé: ${productsData.length} produits à traiter`,
  );

  // 2. Préparer les données
  const batchData = await prepareBatchData(productsData, invoiceData, mainId);

  // 3. Exécuter avec retry automatique
  try {
    const result = await executeWithRetry(
      () => executeGroupPurchaseBatch(batchData),
      {
        operationName: "Achat groupé",
        maxAutoRetries: 1,
        autoRetryDelay: 2000,
      },
    );

    if (!result) {
      throw new Error("Opération annulée ou échouée après tentatives");
    }

    // 4. Retourner le résultat formaté
    return {
      success: result.success,
      results: [result],
      totalProductsCreated: result.productsCreated,
      totalPurchasesCreated: result.purchasesCreated,
      totalExpensesCreated: result.expenseCreated ? 1 : 0,
      error: result.error,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";
    console.error("[Appwrite Interactions] Erreur lors de l'exécution:", error);

    return {
      success: false,
      results: [],
      totalProductsCreated: 0,
      totalPurchasesCreated: 0,
      totalExpensesCreated: 0,
      error: errorMessage,
    };
  }
}
