/**
 * Service pour les données de développement
 * Permet de utiliser un JSON local au lieu du JSON généré par HUGO
 */

import type { HugoEventData, HugoIngredient } from "./hugo-loader";
import { createEnrichedProductsFromHugo } from "./hugo-loader";

// Détection de l'environnement de développement
const isDev = import.meta.env.DEV;

/**
 * Charge les données de développement depuis un JSON local
 */
export async function loadDevEventData(listId: string): Promise<HugoEventData> {
  try {
    // Essayer de charger depuis le dossier public/dev-data
    const response = await fetch(`/dev-data/${listId}.json`);

    if (!response.ok) {
      throw new Error(`Fichier de dev non trouvé: /dev-data/${listId}.json`);
    }

    const data = await response.json();
    console.log(`[DevData] Données chargées depuis /dev-data/${listId}.json`);
    return data;
  } catch (error) {
    console.warn(`[DevData] Impossible de charger les données de dev pour ${listId}:`, error);

    // Fallback : données de démonstration génériques
    return createFallbackDevData(listId);
  }
}

/**
 * Vérifie si des données de dev existent pour un listId
 */
export async function hasDevData(listId: string): Promise<boolean> {
  try {
    const response = await fetch(`/dev-data/${listId}.json`, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Crée des données de démonstration basiques si aucun JSON de dev n'est trouvé
 */
function createFallbackDevData(listId: string): HugoEventData {
  const fallbackIngredients: HugoIngredient[] = [
    {
      ingredientHugoUuid: "dev-001",
      ingredientName: "Farine",
      productSemanticKey: "farine",
      ingType: "Épicerie",
      totalAssiettes: 4,
      nbRecipes: 2,
      pFrais: false,
      pSurgel: false,
      byDate: {
        "2024-01-01": {
          recipes: ["Recipe 1", "Recipe 2"],
          totalNeeded: [{ q: 500, u: "g" }]
        }
      },
      totalNeededRaw: [{ q: 500, u: "g" }]
    },
    {
      ingredientHugoUuid: "dev-002",
      ingredientName: "Œufs",
      productSemanticKey: "oeufs",
      ingType: "Produits frais",
      totalAssiettes: 4,
      nbRecipes: 1,
      pFrais: true,
      pSurgel: false,
      byDate: {
        "2024-01-01": {
          recipes: ["Recipe 1"],
          totalNeeded: [{ q: 4, u: "unités" }]
        }
      },
      totalNeededRaw: [{ q: 4, u: "unités" }]
    },
    {
      ingredientHugoUuid: "dev-003",
      ingredientName: "Lait",
      productSemanticKey: "lait",
      ingType: "Produits frais",
      totalAssiettes: 4,
      nbRecipes: 1,
      pFrais: true,
      pSurgel: false,
      byDate: {
        "2024-01-01": {
          recipes: ["Recipe 2"],
          totalNeeded: [{ q: 250, u: "ml" }]
        }
      },
      totalNeededRaw: [{ q: 250, u: "ml" }]
    }
  ];

  return {
    mainGroup_id: listId,
    name: `Event de démonstration (${listId})`,
    hugoContentHash: "dev-fallback-hash",
    allDates: ["2024-01-01"],
    ingredients: fallbackIngredients
  };
}

/**
 * Fonction utilitaire pour générer un fichier de dev data depuis les données HUGO existantes
 * À utiliser une fois pour créer le fichier initial
 */
export async function generateDevFileFromHugo(listId: string): Promise<void> {
  if (!isDev) {
    console.warn("[DevData] Cette fonction n'est disponible qu'en développement");
    return;
  }

  try {
    // Charger les données HUGO réelles
    const { loadHugoEventData } = await import("./hugo-loader");
    const hugoData = await loadHugoEventData(listId);

    // Créer un blob et le télécharger
    const dataStr = JSON.stringify(hugoData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${listId}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    console.log(`[DevData] Fichier ${listId}.json téléchargé. Placez-le dans public/dev-data/`);
  } catch (error) {
    console.error("[DevData] Erreur lors de la génération du fichier de dev:", error);
  }
}
