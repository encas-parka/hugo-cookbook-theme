/**
 * validation.js
 * Script de validation pour tester l'intégration de l'application collaborative
 * Peut être exécuté dans la console du navigateur pour diagnostiquer les problèmes
 */

(function() {
  'use strict';

  const VALIDATION_PREFIX = '[🔍 Validation]';

  /**
   * Utilitaire de logging avec style
   */
  const log = {
    info: (msg) => console.log(`${VALIDATION_PREFIX} ℹ️ ${msg}`),
    success: (msg) => console.log(`${VALIDATION_PREFIX} ✅ ${msg}`),
    warning: (msg) => console.warn(`${VALIDATION_PREFIX} ⚠️ ${msg}`),
    error: (msg) => console.error(`${VALIDATION_PREFIX} ❌ ${msg}`),
    group: (title, fn) => {
      console.group(`${VALIDATION_PREFIX} ${title}`);
      fn();
      console.groupEnd();
    }
  };

  /**
   * Tests de validation
   */
  const ValidationTests = {

    /**
     * Teste la disponibilité des dépendances globales
     */
    testDependencies() {
      log.group('🔧 Test des dépendances', () => {

        // Test Vue.js
        if (window.Vue) {
          log.success(`Vue.js disponible (version: ${window.Vue.version || 'inconnue'})`);
        } else {
          log.error('Vue.js non disponible - Vérifiez le chargement du CDN');
        }

        // Test Appwrite
        if (window.Appwrite) {
          log.success('SDK Appwrite disponible');

          // Test des classes principales
          const requiredClasses = ['Client', 'Databases', 'Query'];
          requiredClasses.forEach(className => {
            if (window.Appwrite[className]) {
              log.success(`Appwrite.${className} disponible`);
            } else {
              log.error(`Appwrite.${className} manquant`);
            }
          });
        } else {
          log.error('SDK Appwrite non disponible - Vérifiez le chargement du CDN');
        }

        // Test Bootstrap
        if (window.bootstrap) {
          log.success('Bootstrap JS disponible');
        } else {
          log.warning('Bootstrap JS non détecté - Les modals pourraient ne pas fonctionner');
        }
      });
    },

    /**
     * Teste la configuration Hugo/Appwrite
     */
    testConfiguration() {
      log.group('⚙️ Test de la configuration', () => {

        // Test configuration Hugo
        if (window.__HUGO_PARAMS__) {
          log.success('Configuration Hugo disponible');

          const config = window.__HUGO_PARAMS__;

          if (config.appwrite) {
            log.success('Configuration Appwrite présente');

            const required = ['endpoint', 'projectId', 'databaseId'];
            required.forEach(key => {
              if (config.appwrite[key]) {
                log.success(`appwrite.${key}: ${config.appwrite[key]}`);
              } else {
                log.error(`appwrite.${key} manquant`);
              }
            });
          } else {
            log.error('Configuration Appwrite manquante dans __HUGO_PARAMS__');
          }

          if (config.listId) {
            log.success(`listId configuré: ${config.listId}`);
          } else {
            log.warning('listId non configuré - utilisera la valeur par défaut');
          }
        } else {
          log.error('window.__HUGO_PARAMS__ non disponible - Configuration Hugo manquante');
        }

        // Test méta tags
        const metaTags = ['appwrite-endpoint', 'appwrite-project-id', 'appwrite-database-id'];
        metaTags.forEach(name => {
          const meta = document.querySelector(`meta[name="${name}"]`);
          if (meta) {
            log.success(`Meta tag ${name}: ${meta.content}`);
          } else {
            log.warning(`Meta tag ${name} manquant`);
          }
        });
      });
    },

    /**
     * Teste l'initialisation de l'application collaborative
     */
    testAppInitialization() {
      log.group('🚀 Test d\'initialisation de l\'application', () => {

        // Test présence du conteneur
        const appContainer = document.querySelector('#collaborativeApp');
        if (appContainer) {
          log.success('Conteneur #collaborativeApp trouvé');

          // Test si l'app Vue est montée
          if (appContainer.__vue_app__) {
            log.success('Application Vue.js montée avec succès');

            // Test de la structure de données Vue
            const vueInstance = appContainer.__vue_app__._instance;
            if (vueInstance && vueInstance.data) {
              log.success('Instance Vue avec données détectée');

              // Test des composants essentiels
              const data = vueInstance.data;
              if (data.ingredients !== undefined) log.success('Propriété ingredients initialisée');
              if (data.historyManager) log.success('HistoryManager initialisé');
              if (data.unitsManager) log.success('UnitsManager initialisé');
              if (data.appwrite && data.database) log.success('Clients Appwrite initialisés');
            }
          } else {
            log.warning('Application Vue.js non montée - Vérifiez l\'initialisation');
          }
        } else {
          log.error('Conteneur #collaborativeApp non trouvé');
        }

        // Test fonction d'initialisation globale
        if (window.initializeCollaborativeApp) {
          log.success('Fonction initializeCollaborativeApp disponible globalement');
        } else {
          log.warning('Fonction initializeCollaborativeApp non exposée globalement');
        }
      });
    },

    /**
     * Teste la connectivité Appwrite
     */
    async testAppwriteConnectivity() {
      log.group('🌐 Test de connectivité Appwrite', async () => {

        if (!window.Appwrite || !window.__HUGO_PARAMS__?.appwrite) {
          log.error('Prérequis manquants pour le test de connectivité');
          return;
        }

        try {
          const { Client } = window.Appwrite;
          const config = window.__HUGO_PARAMS__.appwrite;

          const client = new Client()
            .setEndpoint(config.endpoint)
            .setProject(config.projectId);

          log.success('Client Appwrite créé avec succès');
          log.info(`Endpoint: ${config.endpoint}`);
          log.info(`Project ID: ${config.projectId}`);

          // Test basique de connectivité (ne nécessite pas d'authentification)
          try {
            // Cette requête échouera mais nous indiquera si le serveur répond
            await fetch(config.endpoint + '/health', {
              method: 'GET',
              mode: 'cors'
            });
            log.success('Serveur Appwrite accessible');
          } catch (error) {
            if (error.message.includes('CORS')) {
              log.warning('Possible problème CORS - mais le serveur semble accessible');
            } else {
              log.warning(`Connectivité serveur incertaine: ${error.message}`);
            }
          }

        } catch (error) {
          log.error(`Erreur lors de la création du client Appwrite: ${error.message}`);
        }
      });
    },

    /**
     * Teste les modules JavaScript
     */
    testJavaScriptModules() {
      log.group('📦 Test des modules JavaScript', () => {

        // Test appwrite-client.js
        if (window.AppwriteClient) {
          log.success('Module AppwriteClient chargé');

          const requiredFunctions = [
            'getAppwriteClients',
            'getAccount',
            'getFunctions',
            'isAuthenticatedCms'
          ];

          requiredFunctions.forEach(fn => {
            if (typeof window.AppwriteClient[fn] === 'function') {
              log.success(`AppwriteClient.${fn} disponible`);
            } else {
              log.error(`AppwriteClient.${fn} manquant ou non fonction`);
            }
          });
        } else {
          log.warning('Module AppwriteClient non disponible globalement');
        }

        // Test des modules collaboratifs
        const appContainer = document.querySelector('#collaborativeApp');
        if (appContainer && appContainer.__vue_app__) {
          const vueInstance = appContainer.__vue_app__._instance;
          if (vueInstance && vueInstance.data) {
            const data = vueInstance.data;

            // Test UnitsManager
            if (data.unitsManager && typeof data.unitsManager.consolidateQuantities === 'function') {
              log.success('UnitsManager opérationnel');
            } else {
              log.error('UnitsManager manquant ou non fonctionnel');
            }

            // Test HistoryManager
            if (data.historyManager && typeof data.historyManager.addAction === 'function') {
              log.success('HistoryManager opérationnel');
              log.info(`Historique: ${data.historyManager.history.length} actions`);
            } else {
              log.error('HistoryManager manquant ou non fonctionnel');
            }

            // Test ActionFactory
            if (data.actionFactory && typeof data.actionFactory.createToggleStatusAction === 'function') {
              log.success('ActionFactory opérationnel');
            } else {
              log.error('ActionFactory manquant ou non fonctionnel');
            }
          }
        }

        // Test des utilitaires d'event
        const eventUtils = ['downloadFile', 'copyTable', 'copyOrExport'];
        eventUtils.forEach(util => {
          if (typeof window[util] === 'function') {
            log.success(`Utilitaire ${util} disponible globalement`);
          } else {
            log.warning(`Utilitaire ${util} non disponible globalement`);
          }
        });
      });
    },

    /**
     * Teste les assets CSS
     */
    testCSSAssets() {
      log.group('🎨 Test des assets CSS', () => {

        // Test chargement du CSS collaborative
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
        let collaborativeCSSFound = false;

        stylesheets.forEach(link => {
          if (link.href.includes('collaborative-ingredients')) {
            collaborativeCSSFound = true;
            log.success(`CSS collaborative chargé: ${link.href}`);
          }
        });

        if (!collaborativeCSSFound) {
          log.warning('CSS collaborative non détecté - Vérifiez le build Hugo');
        }

        // Test Bootstrap CSS
        let bootstrapCSSFound = false;
        stylesheets.forEach(link => {
          if (link.href.includes('bootstrap')) {
            bootstrapCSSFound = true;
            log.success(`Bootstrap CSS détecté: ${link.href}`);
          }
        });

        if (!bootstrapCSSFound) {
          log.warning('Bootstrap CSS non détecté');
        }

        // Test classes CSS essentielles
        const testElement = document.createElement('div');
        testElement.className = 'table-container';
        document.body.appendChild(testElement);

        const computedStyle = window.getComputedStyle(testElement);
        if (computedStyle.overflowX === 'auto') {
          log.success('Classes CSS collaboratives appliquées correctement');
        } else {
          log.warning('Classes CSS collaboratives possiblement non chargées');
        }

        document.body.removeChild(testElement);
      });
    },

    /**
     * Teste les données de l'événement (si sur une page single.ingredients)
     */
    testEventData() {
      log.group('📊 Test des données d\'événement', () => {

        // Test app Vue des événements
        const eventApp = document.querySelector('#app');
        if (eventApp) {
          log.success('Conteneur #app (événements) trouvé');

          if (eventApp.__vue_app__) {
            log.success('Application Vue événements montée');

            // Test données globales injectées
            if (window.__EVENT_PAGE_DATA__) {
              log.success('Données événement disponibles globalement');

              const data = window.__EVENT_PAGE_DATA__;
              const requiredFields = ['ingByTypeList', 'datesRepas', 'types'];

              requiredFields.forEach(field => {
                if (data[field]) {
                  log.success(`Champ ${field} présent`);
                } else {
                  log.warning(`Champ ${field} manquant`);
                }
              });
            } else {
              log.warning('window.__EVENT_PAGE_DATA__ non disponible');
            }
          } else {
            log.warning('Application Vue événements non montée');
          }
        } else {
          log.info('Page événement non détectée (normal sur page collaborative)');
        }
      });
    }
  };

  /**
   * Fonction principale de validation
   */
  window.validateCollaborativeApp = async function() {
    console.clear();
    log.info('🚀 Début de la validation de l\'application collaborative');
    console.log('');

    // Exécuter tous les tests
    ValidationTests.testDependencies();
    console.log('');

    ValidationTests.testConfiguration();
    console.log('');

    ValidationTests.testJavaScriptModules();
    console.log('');

    ValidationTests.testCSSAssets();
    console.log('');

    ValidationTests.testAppInitialization();
    console.log('');

    ValidationTests.testEventData();
    console.log('');

    await ValidationTests.testAppwriteConnectivity();
    console.log('');

    // Tests avancés
    await ValidationTests.testCollaborativeFeatures();
    console.log('');

    log.success('🎉 Validation terminée ! Consultez les résultats ci-dessus.');
    log.info('💡 Pour relancer la validation, tapez: validateCollaborativeApp()');
  };

  /**
   * Test rapide de connectivité Appwrite
   */
  window.testAppwriteConnection = async function() {
    console.group('🔗 Test rapide de connexion Appwrite');

    if (!window.__HUGO_PARAMS__?.appwrite) {
      log.error('Configuration Appwrite manquante');
      console.groupEnd();
      return;
    }

    try {
      const config = window.__HUGO_PARAMS__.appwrite;
      const { Client, Databases } = window.Appwrite;

      const client = new Client()
        .setEndpoint(config.endpoint)
        .setProject(config.projectId);

      const databases = new Databases(client);

      // Tenter de lister les bases de données (nécessite des permissions)
      try {
        const result = await databases.list();
        log.success(`Connexion réussie ! ${result.total} base(s) de données accessible(s)`);
      } catch (error) {
        if (error.code === 401) {
          log.warning('Connexion OK mais authentification requise pour accéder aux données');
        } else {
          log.error(`Erreur de connexion: ${error.message}`);
        }
      }
    } catch (error) {
      log.error(`Erreur lors du test: ${error.message}`);
    }

    console.groupEnd();
  };

  /**
   * Test des fonctionnalités collaboratives avancées
   */
  ValidationTests.testCollaborativeFeatures = async function() {
    log.group('⚡ Test des fonctionnalités collaboratives', async () => {
      const appContainer = document.querySelector('#collaborativeApp');

      if (!appContainer || !appContainer.__vue_app__) {
        log.error('Application Vue non disponible pour les tests avancés');
        return;
      }

      const vueInstance = appContainer.__vue_app__._instance;
      const data = vueInstance.data;

      // Test des calculs d'unités
      if (data.unitsManager) {
        try {
          const testQuantities = [
            { value: 500, unit: 'gr.', ingredientName: 'tomates' },
            { value: 0.3, unit: 'kg', ingredientName: 'tomates' }
          ];
          const consolidated = data.unitsManager.consolidateQuantities(testQuantities);
          if (consolidated && consolidated.length > 0) {
            log.success(`Calcul d'unités fonctionnel: ${consolidated[0].formatted}`);
          } else {
            log.error('Erreur dans les calculs d\'unités');
          }
        } catch (error) {
          log.error(`Erreur lors du test UnitsManager: ${error.message}`);
        }
      }

      // Test du système d'historique
      if (data.historyManager) {
        try {
          const initialCount = data.historyManager.history.length;

          // Test d'une action factice
          const testAction = {
            type: 'test',
            description: 'Action de test',
            data: { test: true },
            undo: async () => { console.log('Test undo'); },
            redo: async () => { console.log('Test redo'); }
          };

          data.historyManager.addAction(testAction);

          if (data.historyManager.history.length === initialCount + 1) {
            log.success('Système d\'historique opérationnel');

            // Test undo/redo
            if (data.historyManager.canUndo()) {
              log.success('Fonction Undo disponible');
            }

            if (data.historyManager.canRedo()) {
              log.success('Fonction Redo disponible');
            } else {
              log.info('Aucune action à rétablir (normal)');
            }
          } else {
            log.error('Erreur dans l\'ajout d\'action à l\'historique');
          }
        } catch (error) {
          log.error(`Erreur lors du test HistoryManager: ${error.message}`);
        }
      }

      // Test du temps réel
      if (data.realtimeStatus) {
        if (data.realtimeStatus === 'connected') {
          log.success('Système temps réel connecté');
        } else if (data.realtimeStatus === 'connecting') {
          log.warning('Système temps réel en cours de connexion');
        } else {
          log.error('Système temps réel déconnecté');
        }
      }

      // Test des données d'ingrédients
      if (data.ingredients && Array.isArray(data.ingredients)) {
        log.success(`${data.ingredients.length} ingrédients chargés`);

        if (data.ingredients.length > 0) {
          const ingredient = data.ingredients[0];

          // Test des calculs
          if (typeof vueInstance.ctx.formatTotalNeed === 'function') {
            const totalNeed = vueInstance.ctx.formatTotalNeed(ingredient);
            log.success(`Calcul des besoins fonctionnel: ${totalNeed}`);
          }

          if (typeof vueInstance.ctx.getIngredientBalance === 'function') {
            const balance = vueInstance.ctx.getIngredientBalance(ingredient);
            log.success(`Calcul des balances fonctionnel: ${balance}`);
          }
        }
      } else {
        log.warning('Aucun ingrédient chargé ou format incorrect');
      }

      // Test des modals
      const modals = ['showPurchaseModal', 'showDetailsModal', 'showSnapshotsModal'];
      modals.forEach(modalProp => {
        if (data[modalProp] !== undefined) {
          log.success(`Propriété ${modalProp} initialisée`);
        } else {
          log.warning(`Propriété ${modalProp} manquante`);
        }
      });
    });
  };

  /**
   * Utilitaire pour diagnostiquer l'état de l'application
   */
  window.diagnoseApp = function() {
    console.group('🏥 Diagnostic rapide');

    // État général
    const appContainer = document.querySelector('#collaborativeApp');
    log.info(`App container: ${appContainer ? '✅ Présent' : '❌ Absent'}`);
    log.info(`Vue.js: ${window.Vue ? '✅ Chargé' : '❌ Manquant'}`);
    log.info(`Appwrite: ${window.Appwrite ? '✅ Chargé' : '❌ Manquant'}`);
    log.info(`Config Hugo: ${window.__HUGO_PARAMS__ ? '✅ Présente' : '❌ Absente'}`);

    // Erreurs JavaScript récentes
    if (window.console.memory) {
      log.info(`Mémoire JS utilisée: ${Math.round(window.console.memory.usedJSHeapSize / 1024 / 1024)} MB`);
    }

    console.groupEnd();
  };

  // Auto-initialisation si on est sur la page collaborative
  if (document.readyState === 'complete') {
    if (document.querySelector('#collaborativeApp')) {
      log.info('🔍 Page collaborative détectée. Tapez validateCollaborativeApp() pour valider l\'installation');
    }
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      if (document.querySelector('#collaborativeApp')) {
        log.info('🔍 Page collaborative détectée. Tapez validateCollaborativeApp() pour valider l\'installation');
      }
    });
  }

  log.info('🛠️ Script de validation chargé. Fonctions disponibles:');
  log.info('   - validateCollaborativeApp() : Validation complète');
  log.info('   - testAppwriteConnection() : Test rapide Appwrite');
  log.info('   - diagnoseApp() : Diagnostic rapide');
  log.info('   - testCollaborativeFeatures() : Test des fonctionnalités avancées');

})();
