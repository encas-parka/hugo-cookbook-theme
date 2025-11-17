/**
 * Utilitaires pour l'enrichissement des produits
 * Logique de transformation Products → EnrichedProduct
 */

import type { Products, Purchases } from '$lib/types/appwrite';
import type { StoreInfo, EnrichedProduct, TotalNeededOverrideData, NumericQuantity } from '$lib/types/store.types';
import {
  calculateTotalQuantityArray,
  transformPurchasesToNumericQuantity,
  calculateAndFormatMissing,
  formatTotalQuantity,
  safeJsonParse
} from './productsUtils';

/**
 * Crée un EnrichedProduct depuis un Products Appwrite seul
 * ⚠️ Utilisé au sync si le produit n'existe pas localement (cas rare)
 */
export function createEnrichedProductFromAppwrite(product: Products): EnrichedProduct {
  // Calculer depuis purchases
  const totalPurchasesArray = calculateTotalQuantityArray(
    transformPurchasesToNumericQuantity(product.purchases ?? []),
  );

  // byDate manquant = pas de totalNeededArray
  const totalNeededArray: NumericQuantity[] = [];

  const { numeric: missingQuantityArray, display: displayMissingQuantity } =
    calculateAndFormatMissing(totalNeededArray, totalPurchasesArray);

  const stockParsed = safeJsonParse<any>(product.stockReel) ?? null;
  const displayTotalPurchases = formatTotalQuantity(totalPurchasesArray);
  const storeInfo = product.store
    ? safeJsonParse<StoreInfo>(product.store)
    : null;

  const stockOrTotalPurchases = stockParsed
    ? `${stockParsed.quantity} ${stockParsed.unit}`
    : displayTotalPurchases;

  return {
    // Métadonnées Appwrite
    $id: product.$id,
    $createdAt: product.$createdAt,
    $updatedAt: product.$updatedAt,

    // Données métier
    productHugoUuid: product.productHugoUuid,
    productName: product.productName,
    productType: "none",
    pFrais: false, // ← Appwrite n'a pas ces champs (viennent de Hugo)
    pSurgel: false,
    nbRecipes: 0,
    totalAssiettes: 0,
    isSynced: product.isSynced,
    mainId: product.mainId,

    // Données collaboratives (brutes Appwrite)
    status: product.status,
    who: product.who,
    store: product.store,
    stockReel: product.stockReel,
    previousNames: product.previousNames,
    isMerged: product.isMerged,
    mergedFrom: product.mergedFrom,
    mergeDate: product.mergeDate,
    mergeReason: product.mergeReason,
    mergedInto: product.mergedInto,
    totalNeededOverride: product.totalNeededOverride,
    purchases: product.purchases,

    // Hugo (⚠️ manquant, sera vide)
    byDate: null,

    // Calculées
    storeInfo,
    stockParsed,
    totalNeededArray,
    totalPurchasesArray,
    missingQuantityArray,
    stockOrTotalPurchases,
    displayTotalNeeded: "-",
    displayTotalPurchases,
    displayMissingQuantity,
    totalNeededOverrideParsed: safeJsonParse<TotalNeededOverrideData>(
      product.totalNeededOverride,
    ),
    displayTotalOverride: (() => {
      const override = safeJsonParse<TotalNeededOverrideData>(product.totalNeededOverride);
      return override ? formatTotalQuantity([override.totalOverride]) : "";
    })(),
  };
}

/**
 * Met à jour un EnrichedProduct existant avec données Appwrite fraîches
 *
 * 🎯 Stratégie :
 * - Remplacer TOUS les champs bruts Appwrite
 * - Garder byDate (statique, de Hugo)
 * - Recalculer les dérivés
 */
export function updateExistingProduct(
  product: Products | EnrichedProduct,
  existing: EnrichedProduct,
): EnrichedProduct {
  // Utiliser les nouvelles valeurs si présentes, sinon garder les anciennes
  // Cela protège contre l'écrasement par les payloads partiels du realtime

  // Fusion intelligente des purchases
  const mergedPurchases = product.purchases ?? existing.purchases;

  // Calculer totalPurchasesArray depuis les purchases fusionnées
  const totalPurchasesArray = calculateTotalQuantityArray(
    transformPurchasesToNumericQuantity(mergedPurchases ?? []),
  );
  const displayTotalPurchases = formatTotalQuantity(totalPurchasesArray);

  // Recalculer missing
  const { numeric: missingQuantityArray, display: displayMissingQuantity } =
    calculateAndFormatMissing(existing.totalNeededArray, totalPurchasesArray);

  // Fusion intelligente du stock
  const mergedStockReel = product.stockReel ?? existing.stockReel;
  const stockParsed = mergedStockReel
    ? safeJsonParse<any>(mergedStockReel)
    : existing.stockParsed;

  // Fusion intelligente du store
  const mergedStore = product.store ?? existing.store;
  const storeInfo = mergedStore
    ? safeJsonParse<StoreInfo>(mergedStore)
    : existing.storeInfo;

  const stockOrTotalPurchases = stockParsed
    ? `${stockParsed.quantity} ${stockParsed.unit}`
    : displayTotalPurchases;

  // 📝 Log de debug pour tracer les fusions importantes
  if (product.purchases === undefined && existing.purchases?.length) {
    console.log(
      `[ProductsStore] Fusion intelligente : préservation de ${existing.purchases.length} purchases pour ${existing.productName}`,
    );
  }

  return {
    // ✅ GARDER : toujours garder les données statiques Hugo
    ...existing,

    // ✅ FUSION SÉLECTIVE : seulement si présent dans le payload
    $updatedAt: product.$updatedAt,

    // Champs métier - fusionner seulement si définis
    productName: product.productName ?? existing.productName,
    isSynced: product.isSynced ?? existing.isSynced,
    mainId: product.mainId ?? existing.mainId,

    // 🛡️ CHAMPS CRITIQUES : PROTECTION CONTRE L'ÉCRASEMENT
    status: product.status ?? existing.status,
    who: product.who ?? existing.who,
    store: mergedStore,
    stockReel: mergedStockReel,

    // 🚨 PROTECTION SPÉCIALE pour purchases (le bug principal)
    purchases: mergedPurchases,

    // Autres champs avec protection contre les payloads partiels
    previousNames: product.previousNames ?? existing.previousNames,
    isMerged: product.isMerged ?? existing.isMerged,
    mergedFrom: product.mergedFrom ?? existing.mergedFrom,
    mergeDate: product.mergeDate ?? existing.mergeDate,
    mergeReason: product.mergeReason ?? existing.mergeReason,
    mergedInto: product.mergedInto ?? existing.mergedInto,
    totalNeededOverride:
      product.totalNeededOverride ?? existing.totalNeededOverride,

    // ✅ RECALCULER : les dérivés basés sur les données fusionnées
    storeInfo,
    stockParsed,
    totalPurchasesArray,
    missingQuantityArray,
    stockOrTotalPurchases,
    displayTotalPurchases,
    displayMissingQuantity,
    totalNeededOverrideParsed: safeJsonParse<TotalNeededOverrideData>(
      product.totalNeededOverride ?? existing.totalNeededOverride,
    ),
    displayTotalOverride: (() => {
      const override = safeJsonParse<TotalNeededOverrideData>(
        product.totalNeededOverride ?? existing.totalNeededOverride
      );
      return override ? formatTotalQuantity([override.totalOverride]) : "";
    })(),
  };
}

/**
 * Recalcule les dépendances liées aux purchases pour un produit
 */
export function recalculatePurchaseDependents(product: EnrichedProduct): void {
  // Recalculer totalPurchasesArray
  product.totalPurchasesArray = calculateTotalQuantityArray(
    transformPurchasesToNumericQuantity(product.purchases ?? []),
  );

  // Recalculer missingQuantity et display
  const { numeric: missingQuantityArray, display: displayMissingQuantity } =
    calculateAndFormatMissing(
      product.totalNeededArray,
      product.totalPurchasesArray,
    );

  product.missingQuantityArray = missingQuantityArray;
  product.displayMissingQuantity = displayMissingQuantity;
}
