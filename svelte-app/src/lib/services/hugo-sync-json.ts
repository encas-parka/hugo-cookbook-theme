/**
 * Version simplifiée du système de synchronisation Hugo
 * Paradigmes : KISS + YAGNI
 *
 * Objectif : Mettre à jour les données Hugo tout en préservant les données utilisateur
 *
 * Clé des produits : productSemanticKey (devient $id)
 * - Format : "nom-produit_uuid" (tri alphabétique natif)
 * - Cohérent avec Appwrite
 */

import type { EnrichedProduct, TotalNeededOverrideData, NumericQuantity } from "../types/store.types";
import type { HugoEventData, HugoIngredient } from "./hugo-loader";
import { createEnrichedProductFromHugo } from "./hugo-loader";
import {
  calculateGlobalTotal,
  formatTotalQuantity,
  calculateTotalQuantityArray,
  transformPurchasesToNumericQuantity,
  calculateAndFormatMissing,
} from "../utils/productsUtils";
import { updateTotalOverride } from "./appwrite-interactions";


/**
 * Résultat de la synchronisation
 */
export interface HugoSyncResult {
  added: HugoIngredient[];                    // Nouveaux ingrédients
  updated: string[];                          // Semantic keys mis à jour
  removed: EnrichedProduct[];                 // Produits supprimés
  mergedProductsUpdated: OverrideConflict[];  // Produits isMerged modifiés
  overrideConflicts: OverrideConflict[];      // Conflits totalNeededOverride
  summary: string;                            // Message pour l'utilisateur
}

/**
 * Conflit pour un produit avec totalNeededOverride
 */
export interface OverrideConflict {
  product: EnrichedProduct;
  oldDisplayTotal: string;         // Ancien totalNeeded affiché
  newDisplayTotal: string;         // Nouveau totalNeeded calculé
  currentOverride: TotalNeededOverrideData; // Override actuel
  semanticKey: string;
}

/**
 * Détermine si un produit nécessite une attention spéciale
 */
function requiresUserAttention(product: EnrichedProduct): boolean {
  // Seulement isMerged ou totalNeededOverride
  // Les purchases/stock/who sont juste préservés
  return !!(
    product.isMerged ||
    product.totalNeededOverride
  );
}

/**
 * Compare deux tableaux de NumericQuantity pour déterminer s'ils sont identiques
 * Utilisé pour détecter si les quantités brutes ont changé entre deux versions
 */
function hasQuantitiesChanged(
  oldQuantities: NumericQuantity[] | undefined,
  newQuantities: NumericQuantity[]
): boolean {
  // Si undefined, considérer comme un changement
  if (!oldQuantities) return true;

  // Si longueurs différentes, changement
  if (oldQuantities.length !== newQuantities.length) return true;

  // Comparer chaque élément
  for (let i = 0; i < oldQuantities.length; i++) {
    const oldQ = oldQuantities[i];
    const newQ = newQuantities[i];

    if (oldQ.q !== newQ.q || oldQ.u !== newQ.u) {
      return true; // Différence détectée
    }
  }

  return false; // Pas de différence
}

/**
 * Synchronise les données Hugo avec les produits locaux
 *
 * @param localProducts - Map des produits locaux (clé = productSemanticKey)
 * @param newHugoData - Nouvelles données Hugo
 * @returns Résultat de la synchronisation
 */
export async function syncHugoData(
  localProducts: Map<string, EnrichedProduct>,
  newHugoData: HugoEventData
): Promise<HugoSyncResult> {

  const result: HugoSyncResult = {
    added: [],
    updated: [],
    removed: [],
    mergedProductsUpdated: [],
    overrideConflicts: [],
    summary: ""
  };

  // ========================================
  // Index par UUID pour retrouver les produits
  // Clé = UUID Hugo, Valeur = semantic key
  // ========================================
  const uuidToSemanticKey = new Map<string, string>();
  for (const [semanticKey, product] of localProducts) {
    uuidToSemanticKey.set(product.productHugoUuid, semanticKey);
  }

  // Set des semantic keys distantes pour détecter les suppressions
  const remoteSemanticKeys = new Set<string>();

  // ========================================
  // PHASE 1 : Traiter les ingrédients Hugo
  // ========================================
  for (const ingredient of newHugoData.ingredients) {
    const semanticKey = ingredient.productSemanticKey ||
                       `${newHugoData.mainGroup_id}_${ingredient.ingredientHugoUuid}`;

    remoteSemanticKeys.add(semanticKey);

    const existingSemanticKey = uuidToSemanticKey.get(ingredient.ingredientHugoUuid);
    const localProduct = existingSemanticKey
      ? localProducts.get(existingSemanticKey)
      : undefined;

    if (!localProduct) {
      // NOUVEAU PRODUIT
      result.added.push(ingredient);

      const newProduct = createEnrichedProductFromHugo(
        ingredient,
        newHugoData.mainGroup_id
      );
      localProducts.set(newProduct.$id, newProduct);

    } else {
      // MISE À JOUR

      // Vérifier si les quantités ont réellement changé
      const hasChanged = hasQuantitiesChanged(
        localProduct.totalNeededRaw,
        ingredient.totalNeededRaw
      );

      if (hasChanged) {
        // Détecter les conflits AVANT la mise à jour
        const conflict = detectOverrideConflict(localProduct, ingredient);
        if (conflict) {
          result.overrideConflicts.push(conflict);
        }

        // Détecter les produits isMerged modifiés
        if (localProduct.isMerged) {
          const oldTotal = localProduct.displayTotalNeeded;
          updateHugoData(localProduct, ingredient);

          result.mergedProductsUpdated.push({
            product: localProduct,
            oldDisplayTotal: oldTotal,
            newDisplayTotal: localProduct.displayTotalNeeded,
            currentOverride: localProduct.totalNeededOverrideParsed!,
            semanticKey
          });
        } else {
          // Mise à jour normale
          updateHugoData(localProduct, ingredient);
        }

        // Marquer comme mis à jour SEULEMENT si les quantités ont changé
        result.updated.push(semanticKey);
      }

      // Remettre le produit dans la Map avec la bonne clé (même si pas de changement)
      localProducts.set(semanticKey, localProduct);
    }
  }

  // ========================================
  // PHASE 2 : Détecter les suppressions
  // ========================================
  for (const [semanticKey, product] of localProducts) {
    if (!remoteSemanticKeys.has(semanticKey)) {
      result.removed.push(product);

      // Supprimer seulement si pas de données utilisateur à préserver
      if (!requiresUserAttention(product) &&
          !product.purchases?.length &&
          !product.stockReel &&
          !product.who?.length) {
        localProducts.delete(semanticKey);
      }
      // Sinon, le produit reste mais sera marqué comme obsolète
    }
  }

  // ========================================
  // PHASE 3 : Traiter les conflits d'override
  // ========================================
  if (result.overrideConflicts.length > 0) {
    await processOverrideConflicts(result.overrideConflicts);
  }

  // ========================================
  // PHASE 4 : Générer le résumé
  // ========================================
  result.summary = generateSummary(result);

  return result;
}

/**
 * Détecte si un produit avec totalNeededOverride a des quantités modifiées
 */
function detectOverrideConflict(
  localProduct: EnrichedProduct,
  remoteIngredient: HugoIngredient
): OverrideConflict | null {

  // Pas de conflit si pas d'override
  if (!localProduct.totalNeededOverride || !localProduct.totalNeededOverrideParsed) {
    return null;
  }


  // Calculer le nouveau total
  const newTotalNeededArray = calculateGlobalTotal(remoteIngredient.byDate);
  const newDisplayTotal = formatTotalQuantity(newTotalNeededArray);

  // Comparer avec l'ancien total
  const oldDisplayTotal = localProduct.displayTotalNeeded;

  // Conflit si les totaux diffèrent
  if (oldDisplayTotal !== newDisplayTotal) {
    return {
      product: localProduct,
      oldDisplayTotal,
      newDisplayTotal,
      currentOverride: localProduct.totalNeededOverrideParsed,
      semanticKey: localProduct.$id
    };
  }

  return null;
}

/**
 * Traite les conflits d'override en mettant à jour Appwrite et les données locales
 */
async function processOverrideConflicts(conflicts: OverrideConflict[]): Promise<void> {
  for (const conflict of conflicts) {
    // Enrichir totalNeededOverride avec les nouvelles données
    const updatedOverride: TotalNeededOverrideData = {
      ...conflict.currentOverride,
      hasUnresolvedChangedSinceOverride: true,
      oldTotalDisplay: conflict.oldDisplayTotal,
      newTotalDisplay: conflict.newDisplayTotal
    };

    const updatedOverrideString = JSON.stringify(updatedOverride);

    try {
      // Mettre à jour Appwrite avec la fonction dédiée
      // ✅ Le produit local sera mis à jour automatiquement via le realtime
      await updateTotalOverride(
        conflict.product.$id,
        updatedOverride,
        false  // putUpdatedBy: false
      );

    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'override pour ${conflict.product.$id}:`, error);
      // Continuer avec les autres conflits même si celui-ci échoue
    }
  }
}

/**
 * Met à jour UNIQUEMENT les données Hugo d'un produit existant
 * Préserve TOUTES les données utilisateur (purchases, stock, who, store, etc.)
 */
function updateHugoData(
  localProduct: EnrichedProduct,
  remoteIngredient: HugoIngredient
): void {
  // ✅ Remplacer les données Hugo (statiques)
  localProduct.byDate = remoteIngredient.byDate;
  localProduct.nbRecipes = remoteIngredient.nbRecipes;
  localProduct.totalAssiettes = remoteIngredient.totalAssiettes;
  localProduct.productType = remoteIngredient.ingType;
  localProduct.pFrais = remoteIngredient.pFrais || false;
  localProduct.pSurgel = remoteIngredient.pSurgel || false;

  // ✅ Recalculer les données dérivées
  recalculateDerivedData(localProduct);

  // 🔒 Les données utilisateur restent intactes :
  // - purchases, stockReel, who, store, status
  // - isMerged, totalNeededOverride, etc.
}

/**
 * Recalcule les données dérivées après mise à jour Hugo
 * (Logique extraite de votre HugoDataMerger)
 */
function recalculateDerivedData(product: EnrichedProduct): void {

  // Recalculer totalNeededArray
  product.totalNeededArray = calculateGlobalTotal(product.byDate);
  product.displayTotalNeeded = formatTotalQuantity(product.totalNeededArray);

  // Recalculer les quantités manquantes
  const totalPurchasesArray = calculateTotalQuantityArray(
    transformPurchasesToNumericQuantity(product.purchases)
  );

  const { numeric: missingQuantityArray, display: displayMissingQuantity } =
    calculateAndFormatMissing(product.totalNeededArray, totalPurchasesArray);

  product.totalPurchasesArray = totalPurchasesArray;
  product.missingQuantityArray = missingQuantityArray;
  product.displayMissingQuantity = displayMissingQuantity;

  // Mettre à jour stockOrTotalPurchases
  product.stockOrTotalPurchases =
    product.purchases.length > 0
      ? product.displayTotalPurchases
      : product.displayTotalNeeded;
}

/**
 * Génère un résumé lisible pour l'utilisateur
 */
function generateSummary(result: HugoSyncResult): string {
  const parts: string[] = [];

  if (result.added.length > 0 || result.updated.length > 0 || result.removed.length > 0) {
    parts.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: ")
  }
  if (result.added.length > 0) {
    parts.push(`${result.added.length} nouveau(x) ingrédient(s)`);
  }

  if (result.updated.length > 0) {
    parts.push(` ${result.updated.length} ingrédient(s) mis à jour`);
  }

  if (result.overrideConflicts.length > 0) {
    parts.push(
      `⚠️ ${result.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`
    );
  }

  if (result.mergedProductsUpdated.length > 0) {
    parts.push(
      `🔀 ${result.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`
    );
  }

  if (result.removed.length > 0) {
    const withData = result.removed.filter(p =>
      p.purchases?.length || p.stockReel || p.who?.length
    ).length;

    if (withData > 0) {
      parts.push(`⚠️ ${withData} suppression(s) avec données conservées`);
    } else {
      parts.push(`${result.removed.length} ingrédient(s) supprimé(s)`);
    }
  }

  return parts.length > 0
    ? parts.join(", ")
    : "Aucune modification détectée";
}
