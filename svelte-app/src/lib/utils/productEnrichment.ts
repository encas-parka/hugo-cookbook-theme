/**
 * Utilitaires pour l'enrichissement des produits
 * Logique de transformation Products → EnrichedProduct
 */

import type { Products, Purchases } from '$lib/types/appwrite';
import type {
  EnrichedProduct,
  NumericQuantity,
  StoreInfo,
  TotalNeededOverrideData,
  ManualSpecs,
} from '../types/store.types';
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
  // Parser les specs (métadonnées manuelles)
  const specsParsed = safeJsonParse<ManualSpecs>(product.specs) ?? null;

  // Calculer depuis purchases
  const totalPurchasesArray = calculateTotalQuantityArray(
    transformPurchasesToNumericQuantity(product.purchases ?? []),
  );

  // byDate manquant = pas de totalNeededArray par défaut
  let totalNeededArray: NumericQuantity[] = [];

  // Si produit manuel avec quantité définie dans specs, on l'utilise comme besoin
  if (specsParsed?.quantity) {
    totalNeededArray = [specsParsed.quantity];
  }

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
    productHugoUuid: product.productHugoUuid || "" ,
    productName: product.productName,
    productType: product.productType || "none",
    // Utiliser les specs pour pFrais/pSurgel, sinon false
    pFrais: specsParsed?.pFrais ?? false,
    pSurgel: specsParsed?.pSurgel ?? false,
    nbRecipes: 0,
    totalAssiettes: 0,
    isSynced: product.isSynced,
    mainId: product.mainId,
    totalNeededRaw: [],

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
    specs: product.specs,

    // Hugo (⚠️ manquant, sera vide)
    byDate: {},

    // Calculées
    storeInfo,
    stockParsed,
    specsParsed, // utile ?
    totalNeededArray,
    totalPurchasesArray,
    missingQuantityArray,
    stockOrTotalPurchases,
    displayTotalNeeded: formatTotalQuantity(totalNeededArray), // Afficher le besoin manuel
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

  // Fusion intelligente des specs
  const mergedSpecs = product.specs ?? existing.specs;
  const specsParsed = mergedSpecs
    ? safeJsonParse<ManualSpecs>(mergedSpecs)
    : existing.specsParsed;

  // Calculer totalPurchasesArray depuis les purchases fusionnées
  const totalPurchasesArray = calculateTotalQuantityArray(
    transformPurchasesToNumericQuantity(mergedPurchases ?? []),
  );
  const displayTotalPurchases = formatTotalQuantity(totalPurchasesArray);

  // Recalculer totalNeededArray (si manuel)
  let totalNeededArray = existing.totalNeededArray;
  // Si c'est un produit manuel (pas de lien Hugo) et qu'on a des specs, on met à jour le besoin
  if (!existing.productHugoUuid && specsParsed?.quantity) {
    totalNeededArray = [specsParsed.quantity];
  }

  // Recalculer missing
  const { numeric: missingQuantityArray, display: displayMissingQuantity } =
    calculateAndFormatMissing(totalNeededArray, totalPurchasesArray);

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
    productType: product.productType ?? existing.productType,
    isSynced: product.isSynced ?? existing.isSynced,
    mainId: product.mainId ?? existing.mainId,

    // Mettre à jour pFrais/pSurgel depuis les specs si disponibles
    pFrais: specsParsed?.pFrais ?? existing.pFrais,
    pSurgel: specsParsed?.pSurgel ?? existing.pSurgel,

    // 🛡️ CHAMPS CRITIQUES : PROTECTION CONTRE L'ÉCRASEMENT
    status: product.status ?? existing.status,
    who: product.who ?? existing.who,
    store: mergedStore,
    stockReel: mergedStockReel,
    specs: mergedSpecs,

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
    specsParsed,
    totalNeededArray,
    totalPurchasesArray,
    missingQuantityArray,
    stockOrTotalPurchases,
    displayTotalPurchases,
    displayMissingQuantity,
    displayTotalNeeded: formatTotalQuantity(totalNeededArray),
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
