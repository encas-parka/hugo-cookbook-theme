/**
 * Test du filtrage par date avec heures
 *
 * Vérifie que le bug "30 janvier midi affiche tous les produits du 30 janvier" est corrigé
 */

import { describe, it, expect } from "vitest";
import { calculateProductStatsForDateRange } from "../dateRange";
import type { EnrichedProduct } from "../../types/store.types";

describe("calculateProductStatsForDateRange - Filtrage horaire", () => {
  it("doit inclure uniquement les produits du créneau horaire sélectionné (midi)", () => {
    // Préparer un produit avec des entrées byDate à différentes heures
    const product: EnrichedProduct = {
      id: "test-product",
      name: "Test Product",
      productHugoUuid: "uuid-123",
      byDate: {
        // Midi (12h)
        "2025-01-30T12:00:00.000Z": {
          quantities: [{ q: 2, u: "kg" }],
          recipes: [{ r: "Recipe1", q: 2, u: "kg" }],
          totalConsolidated: [{ q: 2, u: "kg" }],
          totalAssiettes: 20,
        },
        // Soir (19h)
        "2025-01-30T19:00:00.000Z": {
          quantities: [{ q: 3, u: "kg" }],
          recipes: [{ r: "Recipe2", q: 3, u: "kg" }],
          totalConsolidated: [{ q: 3, u: "kg" }],
          totalAssiettes: 30,
        },
      },
      totalNeededArray: [{ q: 5, u: "kg" }],
      totalPurchasesArray: [],
      missingQuantityArray: [{ q: 5, u: "kg" }],
      stockOrTotalPurchases: null,
      displayTotalPurchases: "",
      displayMissingQuantity: "5 kg",
      displayTotalNeeded: "5 kg",
    } as EnrichedProduct;

    // Sélectionner uniquement "30 janvier midi" (12h)
    const stats = calculateProductStatsForDateRange(
      product,
      "2025-01-30T12:00:00.000Z",
      "2025-01-30T12:00:00.000Z",
    );

    // Vérifier que seul le repas de midi est inclus
    expect(stats.datesInSelectedRange).toHaveLength(1);
    expect(stats.datesInSelectedRange[0]).toBe("2025-01-30T12:00:00.000Z");
    expect(stats.totalPortionsInRange).toBe(20); // 20 assiettes pour midi
    expect(stats.totalRecipesInRange).toBe(1); // 1 recette pour midi
  });

  it("doit inclure uniquement les produits du créneau horaire sélectionné (soir)", () => {
    const product: EnrichedProduct = {
      id: "test-product",
      name: "Test Product",
      productHugoUuid: "uuid-123",
      byDate: {
        // Midi (12h)
        "2025-01-30T12:00:00.000Z": {
          quantities: [{ q: 2, u: "kg" }],
          recipes: [{ r: "Recipe1", q: 2, u: "kg" }],
          totalConsolidated: [{ q: 2, u: "kg" }],
          totalAssiettes: 20,
        },
        // Soir (19h)
        "2025-01-30T19:00:00.000Z": {
          quantities: [{ q: 3, u: "kg" }],
          recipes: [{ r: "Recipe2", q: 3, u: "kg" }],
          totalConsolidated: [{ q: 3, u: "kg" }],
          totalAssiettes: 30,
        },
      },
      totalNeededArray: [{ q: 5, u: "kg" }],
      totalPurchasesArray: [],
      missingQuantityArray: [{ q: 5, u: "kg" }],
      stockOrTotalPurchases: null,
      displayTotalPurchases: "",
      displayMissingQuantity: "5 kg",
      displayTotalNeeded: "5 kg",
    } as EnrichedProduct;

    // Sélectionner uniquement "30 janvier soir" (19h)
    const stats = calculateProductStatsForDateRange(
      product,
      "2025-01-30T19:00:00.000Z",
      "2025-01-30T19:00:00.000Z",
    );

    // Vérifier que seul le repas de soir est inclus
    expect(stats.datesInSelectedRange).toHaveLength(1);
    expect(stats.datesInSelectedRange[0]).toBe("2025-01-30T19:00:00.000Z");
    expect(stats.totalPortionsInRange).toBe(30); // 30 assiettes pour soir
    expect(stats.totalRecipesInRange).toBe(1); // 1 recette pour soir
  });

  it("doit inclure tous les repas quand la plage couvre midi et soir", () => {
    const product: EnrichedProduct = {
      id: "test-product",
      name: "Test Product",
      productHugoUuid: "uuid-123",
      byDate: {
        // Midi (12h)
        "2025-01-30T12:00:00.000Z": {
          quantities: [{ q: 2, u: "kg" }],
          recipes: [{ r: "Recipe1", q: 2, u: "kg" }],
          totalConsolidated: [{ q: 2, u: "kg" }],
          totalAssiettes: 20,
        },
        // Soir (19h)
        "2025-01-30T19:00:00.000Z": {
          quantities: [{ q: 3, u: "kg" }],
          recipes: [{ r: "Recipe2", q: 3, u: "kg" }],
          totalConsolidated: [{ q: 3, u: "kg" }],
          totalAssiettes: 30,
        },
      },
      totalNeededArray: [{ q: 5, u: "kg" }],
      totalPurchasesArray: [],
      missingQuantityArray: [{ q: 5, u: "kg" }],
      stockOrTotalPurchases: null,
      displayTotalPurchases: "",
      displayMissingQuantity: "5 kg",
      displayTotalNeeded: "5 kg",
    } as EnrichedProduct;

    // Sélectionner toute la journée du 30 janvier (midi à soir)
    const stats = calculateProductStatsForDateRange(
      product,
      "2025-01-30T12:00:00.000Z",
      "2025-01-30T19:00:00.000Z",
    );

    // Vérifier que les deux repas sont inclus
    expect(stats.datesInSelectedRange).toHaveLength(2);
    expect(stats.totalPortionsInRange).toBe(50); // 20 + 30 assiettes
    expect(stats.totalRecipesInRange).toBe(2); // 2 recettes
  });

  it("ne doit pas inclure les repas d'autres jours", () => {
    const product: EnrichedProduct = {
      id: "test-product",
      name: "Test Product",
      productHugoUuid: "uuid-123",
      byDate: {
        // Jour 1 - Midi
        "2025-01-30T12:00:00.000Z": {
          quantities: [{ q: 2, u: "kg" }],
          recipes: [{ r: "Recipe1", q: 2, u: "kg" }],
          totalConsolidated: [{ q: 2, u: "kg" }],
          totalAssiettes: 20,
        },
        // Jour 2 - Midi
        "2025-01-31T12:00:00.000Z": {
          quantities: [{ q: 3, u: "kg" }],
          recipes: [{ r: "Recipe2", q: 3, u: "kg" }],
          totalConsolidated: [{ q: 3, u: "kg" }],
          totalAssiettes: 30,
        },
      },
      totalNeededArray: [{ q: 5, u: "kg" }],
      totalPurchasesArray: [],
      missingQuantityArray: [{ q: 5, u: "kg" }],
      stockOrTotalPurchases: null,
      displayTotalPurchases: "",
      displayMissingQuantity: "5 kg",
      displayTotalNeeded: "5 kg",
    } as EnrichedProduct;

    // Sélectionner uniquement le 30 janvier
    const stats = calculateProductStatsForDateRange(
      product,
      "2025-01-30T12:00:00.000Z",
      "2025-01-30T12:00:00.000Z",
    );

    // Vérifier que seul le repas du 30 est inclus
    expect(stats.datesInSelectedRange).toHaveLength(1);
    expect(stats.datesInSelectedRange[0]).toBe("2025-01-30T12:00:00.000Z");
    expect(stats.totalPortionsInRange).toBe(20);
  });
});
