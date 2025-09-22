/**
 * bootstrap.js
 * Point d'entrée pour l'application collaborative d'ingrédients
 * Initialise l'app Vue avec les données Appwrite et la configuration
 */

import { createCollaborativeApp } from './app.js';
import { getAppwriteClients, getConfig } from '../appwrite-client.js';

/**
 * Initialise l'application collaborative
 * @param {Object} config - Configuration de l'application
 */
async function initializeCollaborativeApp(config = {}) {
  try {
    // Vérifier la présence du conteneur
    const appRoot = document.querySelector('#collaborativeApp');
    if (!appRoot) {
      console.warn('[Collaborative Bootstrap] Conteneur #collaborativeApp non trouvé');
      return;
    }

    // Configuration par défaut
    const defaultConfig = {
      listId: 'demo_list_123',
      appwriteConfig: {
        endpoint: 'https://cloud.appwrite.io/v1',
        projectId: '6742b5d300099026c7fa',
        databaseId: '689d15b10003a5a13636'
      }
    };

    // Fusionner avec la configuration fournie
    const finalConfig = {
      ...defaultConfig,
      ...config,
      appwriteConfig: {
        ...defaultConfig.appwriteConfig,
        ...(config.appwriteConfig || {})
      }
    };

    // Récupérer l'ID de la liste depuis l'URL si disponible
    const urlParams = new URLSearchParams(window.location.search);
    const listIdFromUrl = urlParams.get('listId');
    if (listIdFromUrl) {
      finalConfig.listId = listIdFromUrl;
    }

    // Récupérer l'ID de la liste depuis les paramètres de la page si disponible
    const pageParams = window.location.pathname.match(/\/list\/([^\/]+)/);
    if (pageParams && pageParams[1]) {
      finalConfig.listId = pageParams[1];
    }

    console.log('[Collaborative Bootstrap] Initialisation avec la configuration:', finalConfig);

    // Créer et monter l'application
    const app = createCollaborativeApp(finalConfig);
    app.mount('#collaborativeApp');

    console.log('[Collaborative Bootstrap] Application collaborative montée avec succès');

  } catch (error) {
    console.error('[Collaborative Bootstrap] Erreur lors de l\'initialisation:', error);
    
    // Afficher un message d'erreur à l'utilisateur
    const appRoot = document.querySelector('#collaborativeApp');
    if (appRoot) {
      appRoot.innerHTML = `
        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading">Erreur de chargement</h4>
          <p>Impossible de charger l'application collaborative. Veuillez rafraîchir la page ou contacter l'administrateur si le problème persiste.</p>
          <hr>
          <p class="mb-0"><small>Erreur technique : ${error.message}</small></p>
        </div>
      `;
    }
  }
}

/**
 * Crée des données de test pour la démonstration
 */
async function createTestDataIfNeeded(config) {
  try {
    if (!window.Appwrite) return false;

    const { Client, Databases } = window.Appwrite;
    const client = new Client()
      .setEndpoint(config.appwriteConfig.endpoint)
      .setProject(config.appwriteConfig.projectId);
    
    const databases = new Databases(client);

    // Vérifier si la liste de test existe
    try {
      await databases.getDocument(
        config.appwriteConfig.databaseId,
        'ingredient_lists',
        config.listId
      );
      console.log('[Collaborative Bootstrap] Liste de test déjà existante');
      return true;
    } catch (error) {
      if (error.code !== 404) throw error;
    }

    console.log('[Collaborative Bootstrap] Création des données de test...');

    // Créer la liste de test
    await databases.createDocument(
      config.appwriteConfig.databaseId,
      'ingredient_lists',
      config.listId,
      {
        eventId: 'demo_event',
        name: 'Liste de démonstration',
        createdBy: 'demo_user',
        isActive: true
      }
    );

    // Créer quelques ingrédients de test
    const testIngredients = [
      {
        ingredientName: 'Tomates',
        ingType: 'legumesFrais',
        originalData: JSON.stringify({
          recipeOccurrences: [
            { recipeName: 'Salade méditerranéenne', quantity: 500, unit: 'gr.', dateService: '2024-01-15', horaire: 'midi' }
          ]
        }),
        trackingData: JSON.stringify({
          purchases: [{ id: 'p1', value: 300, unit: 'gr.', store: 'Marché local', who: 'Alice', date: new Date().toISOString() }],
          stock: { effective: [] },
          status: { ok: false },
          mergedWith: []
        })
      },
      {
        ingredientName: 'Huile d\'olive',
        ingType: 'lof',
        originalData: JSON.stringify({
          recipeOccurrences: [
            { recipeName: 'Salade méditerranéenne', quantity: 3, unit: 'c. à soupe', dateService: '2024-01-15', horaire: 'midi' }
          ]
        }),
        trackingData: JSON.stringify({
          purchases: [],
          stock: { effective: [{ value: 1, unit: 'l.' }] },
          status: { ok: true },
          mergedWith: []
        })
      },
      {
        ingredientName: 'Sel',
        ingType: 'epices',
        originalData: JSON.stringify({
          recipeOccurrences: [
            { recipeName: 'Salade méditerranéenne', quantity: 1, unit: 'c. à café', dateService: '2024-01-15', horaire: 'midi' }
          ]
        }),
        trackingData: JSON.stringify({
          purchases: [],
          stock: { effective: [] },
          status: { ok: false },
          mergedWith: []
        })
      }
    ];

    // Insérer les ingrédients de test
    for (const ingredient of testIngredients) {
      await databases.createDocument(
        config.appwriteConfig.databaseId,
        'ingredients',
        'unique()',
        {
          listId: config.listId,
          isModified: false,
          isMerged: false,
          ...ingredient
        }
      );
    }

    console.log('[Collaborative Bootstrap] Données de test créées avec succès');
    return true;

  } catch (error) {
    console.error('[Collaborative Bootstrap] Erreur lors de la création des données de test:', error);
    return false;
  }
}

/**
 * Récupère la configuration depuis les paramètres Hugo si disponible
 */
function getHugoConfig() {
  try {
    // Récupérer la configuration depuis les meta tags Hugo
    const endpointMeta = document.querySelector('meta[name="appwrite-endpoint"]');
    const projectIdMeta = document.querySelector('meta[name="appwrite-project-id"]');
    const databaseIdMeta = document.querySelector('meta[name="appwrite-database-id"]');

    if (endpointMeta || projectIdMeta || databaseIdMeta) {
      return {
        appwriteConfig: {
          endpoint: endpointMeta?.content,
          projectId: projectIdMeta?.content,
          databaseId: databaseIdMeta?.content
        }
      };
    }

    // Essayer de récupérer depuis window.__HUGO_PARAMS__ si disponible
    if (window.__HUGO_PARAMS__?.appwrite) {
      return {
        appwriteConfig: window.__HUGO_PARAMS__.appwrite,
        listId: window.__HUGO_PARAMS__.listId
      };
    }

    return {};
  } catch (error) {
    console.warn('[Collaborative Bootstrap] Erreur lors de la récupération de la config Hugo:', error);
    return {};
  }
}

// Auto-initialisation quand le DOM est prêt
(function autoInit() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  async function init() {
    const hugoConfig = getHugoConfig();
    
    // Créer les données de test si nécessaire (uniquement en mode démo)
    if (hugoConfig.listId && hugoConfig.listId.includes('demo')) {
      await createTestDataIfNeeded(hugoConfig);
    }
    
    initializeCollaborativeApp(hugoConfig);
  }

  // Attendre que le DOM soit prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Le DOM est déjà prêt, initialiser immédiatement
    init();
  }
})();

// Exposer pour utilisation manuelle si nécessaire
if (typeof window !== 'undefined') {
  window.initializeCollaborativeApp = initializeCollaborativeApp;
}