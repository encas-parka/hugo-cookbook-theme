// =============================================================================
// SERVICES D'ACHAT GROUPÉ AVEC SYNC
// =============================================================================

export interface GroupPurchaseProductData {
  productId: string;
  isSynced: boolean;
  productData?: any; // Données complètes du produit si !isSynced
  missingQuantities: Array<{ q: number; u: string }>;
}

export interface GroupPurchaseInvoiceData {
  invoiceId: string;
  invoiceTotal?: number;
  store?: string;
  notes?: string;
  who?: string;
}

export interface GroupPurchaseBatchData {
  productsToCreate: Array<{
    productId: string;
    productData: any;
  }>;
  purchasesToCreate: Array<{
    productId: string;
    quantity: number;
    unit: string;
    status?: string;
    notes?: string;
    store?: string;
    who?: string;
    price?: number;
    orderDate?: string | null;
    deliveryDate?: string | null;
    createdBy?: string | null;
  }>;
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
 * Calcule le nombre total d'opérations nécessaires pour un achat groupé
 * @param productsData - Données des produits à traiter
 * @param invoiceData - Données de la facture (pour savoir s'il faut créer une expense)
 * @returns Nombre total d'opérations
 */
function calculateRequiredOperations(
  productsData: GroupPurchaseProductData[],
  invoiceData: GroupPurchaseInvoiceData,
): number {
  const productsOperations = productsData.reduce((total, product) => {
    const productOperations = product.isSynced ? 0 : 1; // Création produit si non sync
    const purchaseOperations = product.missingQuantities.length; // Achats
    return total + productOperations + purchaseOperations;
  }, 0);

  // Ajouter 1 opération pour l'expense globale si invoiceTotal est défini
  const expenseOperation = invoiceData.invoiceTotal ? 1 : 0;

  return productsOperations + expenseOperation;
}

/**
 * Prépare les données d'un lot pour l'envoi à la fonction cloud
 * @param productsBatch - Lot de produits à traiter
 * @param invoiceData - Données de la facture
 * @returns Données formatées pour la fonction cloud
 */
async function prepareBatchData(
  productsBatch: GroupPurchaseProductData[],
  invoiceData: GroupPurchaseInvoiceData,
): Promise<{
  mainId: string;
  batchData: GroupPurchaseBatchData;
  invoiceData: GroupPurchaseInvoiceData;
}> {
  const productsToCreate = productsBatch
    .filter((product) => !product.isSynced)
    .map((product) => ({
      productId: product.productId,
      productData: product.productData,
    }));

  // Récupérer l'utilisateur connecté
  let currentUserId = null;
  try {
    if (!(window as any).AppwriteClient) {
      throw new Error("AppwriteClient non disponible");
    }
    const account = await (window as any).AppwriteClient.getAccount();
    const user = await account.get();
    currentUserId = user.$id;
  } catch (error) {
    console.warn(
      "[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",
      error,
    );
  }

  const purchasesToCreate = productsBatch.flatMap((product) =>
    product.missingQuantities.map((quantity) => ({
      productId: product.productId,
      quantity: quantity.q,
      unit: quantity.u,
      status: "delivered",
      notes: invoiceData.notes || "",
      store: invoiceData.store || "",
      who: invoiceData.who || null,
      price: null,
      orderDate: null,
      deliveryDate: null,
      createdBy: currentUserId,
    })),
  );

  // Récupérer le mainId depuis le premier produit
  const mainId = productsBatch[0]?.productData?.mainId;

  return {
    mainId,
    batchData: {
      productsToCreate,
      purchasesToCreate,
    },
    invoiceData,
  };
}

/**
 * Crée des achats groupés avec synchronisation de produits (gère les lots > 100 opérations)
 *
 * Service principal pour les achats groupés qui gère automatiquement la limitation
 * des 100 opérations par transaction Appwrite en divisant l'opération en lots.
 *
 * @param mainId - ID de l'événement principal
 * @param productsData - Données des produits avec leurs quantités manquantes
 * @param invoiceData - Données de la facture commune
 * @returns Promise<GroupPurchaseBatchResult> - Résultat de l'opération groupée
 *
 * Flux :
 * 1. Calculer le nombre total d'opérations nécessaires
 * 2. Diviser en lots de 100 opérations maximum
 * 3. Exécuter chaque lot via la fonction cloud
 * 4. Agréger les résultats et gérer les erreurs
 */
export async function createGroupPurchaseWithSync(
  mainId: string,
  productsData: GroupPurchaseProductData[],
  invoiceData: GroupPurchaseInvoiceData,
): Promise<GroupPurchaseBatchResult> {
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

  // S'assurer que tous les produits ont le mainId correct
  productsData.forEach((product) => {
    if (product.productData) {
      product.productData.mainId = mainId;
    }
  });

  // 1. Calculer le nombre total d'opérations
  const totalOperations = calculateRequiredOperations(
    productsData,
    invoiceData,
  );
  console.log(
    `[Appwrite Interactions] Achat groupé: ${productsData.length} produits, ${totalOperations} opérations totales`,
  );

  // 2. Diviser en lots si nécessaire
  const maxOperationsPerBatch = 100;
  const batches: GroupPurchaseProductData[][] = [];

  if (totalOperations <= maxOperationsPerBatch) {
    // Un seul lot suffit
    batches.push(productsData);
  } else {
    // Diviser en lots de 100 opérations maximum
    let currentBatch: GroupPurchaseProductData[] = [];
    let currentBatchOperations = 0;

    for (const product of productsData) {
      const productOperations =
        (product.isSynced ? 0 : 1) + product.missingQuantities.length;

      if (currentBatchOperations + productOperations > maxOperationsPerBatch) {
        // Démarrer un nouveau lot
        if (currentBatch.length > 0) {
          batches.push(currentBatch);
        }
        currentBatch = [product];
        currentBatchOperations = productOperations;
      } else {
        // Ajouter au lot actuel
        currentBatch.push(product);
        currentBatchOperations += productOperations;
      }
    }

    // Ajouter le dernier lot
    if (currentBatch.length > 0) {
      batches.push(currentBatch);
    }
  }

  console.log(
    `[Appwrite Interactions] Découpage en ${batches.length} lots pour respecter la limite de 100 opérations`,
  );

  // 3. Exécuter chaque lot
  const results: GroupPurchaseResult[] = [];
  let totalProductsCreated = 0;
  let totalPurchasesCreated = 0;
  let totalExpensesCreated = 0;

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(
      `[Appwrite Interactions] Exécution du lot ${i + 1}/${batches.length} (${batch.length} produits)`,
    );

    try {
      const batchData = await prepareBatchData(batch, invoiceData);
      const result = await executeGroupPurchaseBatch(batchData);
      results.push(result);

      if (result.success) {
        totalProductsCreated += result.productsCreated;
        totalPurchasesCreated += result.purchasesCreated;
        totalExpensesCreated += result.expenseCreated ? 1 : 0;
      } else {
        // Arrêter en cas d'erreur sur un lot
        console.error(
          `[Appwrite Interactions] Erreur sur le lot ${i + 1}: ${result.error}`,
        );
        break;
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erreur inconnue";
      console.error(
        `[Appwrite Interactions] Erreur lors de l'exécution du lot ${i + 1}:`,
        error,
      );

      results.push({
        success: false,
        productsCreated: 0,
        purchasesCreated: 0,
        expenseCreated: false,
        totalOperations: 0,
        invoiceId: invoiceData.invoiceId,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      } as GroupPurchaseResult);

      break; // Arrêter en cas d'erreur
    }
  }

  const success = results.every((r) => r.success);
  const hasError = results.some((r) => !r.success);

  return {
    success,
    results,
    totalProductsCreated,
    totalPurchasesCreated,
    totalExpensesCreated,
    error: hasError ? "Un ou plusieurs lots ont échoué" : undefined,
  };
}

/**
 * Exécute un lot d'achat groupé via la fonction cloud
 * @param batchData - Données du lot à exécuter
 * @returns Promise<GroupPurchaseResult> - Résultat du lot
 */
async function executeGroupPurchaseBatch(batchData: {
  mainId: string;
  batchData: GroupPurchaseBatchData;
  invoiceData: GroupPurchaseInvoiceData;
}): Promise<GroupPurchaseResult> {
  try {
    if (!(window as any).AppwriteClient) {
      throw new Error("AppwriteClient non disponible");
    }

    const functions = await (window as any).AppwriteClient.getFunctions();
    const config = (window as any).AppwriteClient.getConfig();

    const payload = {
      operation: "createGroupPurchaseWithSync",
      data: batchData,
    };

    console.log(
      `[Appwrite Interactions] Exécution du lot: ${batchData.batchData.productsToCreate.length} produits à créer, ${batchData.batchData.purchasesToCreate.length} achats à créer`,
    );

    const execution = await functions.createExecution(
      config.APPWRITE_CONFIG.functions.batchUpdate, // Réutiliser la fonction existante
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

    const result = JSON.parse(execution.responseBody) as GroupPurchaseResult;

    if (result.success) {
      console.log(
        `[Appwrite Interactions] Lot exécuté avec succès: ${result.productsCreated} produits créés, ${result.purchasesCreated} achats créés`,
      );
    } else {
      console.error(`[Appwrite Interactions] Lot échoué:`, result.error);
    }

    return result;
  } catch (error) {
    console.error("[Appwrite Interactions] Erreur exécution lot:", error);
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
