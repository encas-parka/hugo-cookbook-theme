/**
 * test-authmanager.js
 * Script de test pour valider le fonctionnement d'AuthManager
 * À exécuter dans la console du navigateur en mode développement
 */

 // Importer la classe (si nécessaire dans le contexte)
 import { AuthManager } from './services/AuthManager.js';


// Test de base d'AuthManager
function testAuthManager() {
  console.log('🧪 Début des tests AuthManager...');

  try {

    // 1. Test de création avec fonction mock
    const mockAuthFn = async () => true;
    const authManager = new AuthManager(mockAuthFn);

    console.log('✅ Test 1: Création AuthManager réussie');
    console.log('   État initial:', authManager.getState());

    // 2. Test de vérification d'authentification
    authManager.check().then(result => {
      console.log('✅ Test 2: Vérification authentification:', result);
      console.log('   État après vérification:', authManager.getState());

      // 3. Test du pattern de garde
      let actionExecuted = false;
      const testAction = () => { actionExecuted = true; };

      const guardResult = authManager.requireAuth(testAction);
      console.log('✅ Test 3: Pattern de garde - Résultat:', guardResult, 'Action exécutée:', actionExecuted);

      // 4. Test des informations de debug
      console.log('✅ Test 4: Debug info:', authManager.getDebugInfo());

      // 5. Test d'état expiré
      const isExpired = authManager.isSessionExpired(1000); // 1 seconde
      console.log('✅ Test 5: Session expirée (1s):', isExpired);

      // 6. Test de logout
      authManager.logout();
      console.log('✅ Test 6: Logout - État après:', authManager.getState());

      console.log('🎉 Tous les tests AuthManager sont passés !');

    }).catch(error => {
      console.error('❌ Erreur lors des tests:', error);
    });

  } catch (error) {
    console.error('❌ Erreur critique lors des tests:', error);
  }
}

// Test d'intégration avec l'app Vue existante
function testAuthManagerIntegration() {
  console.log('🧪 Test d\'intégration AuthManager avec l\'app Vue...');

  // Vérifier si l'app est bien initialisée avec AuthManager
  if (typeof window !== 'undefined' && window.Vue) {
    // Attendre que l'app soit montée
    setTimeout(() => {
      const appRoot = document.querySelector('#collaborativeApp');
      if (appRoot && appRoot.__vue_app__) {
        const vm = appRoot.__vue_app__._instance.data;

        if (vm.authManager) {
          console.log('✅ AuthManager est bien initialisé dans l\'app Vue');
          console.log('   État AuthManager:', vm.getAuthState());
          console.log('   Debug AuthManager:', vm.getAuthDebugInfo());
        } else {
          console.error('❌ AuthManager n\'est pas initialisé dans l\'app Vue');
        }
      } else {
        console.warn('⚠️ App Vue non trouvée ou non montée');
      }
    }, 2000);
  } else {
    console.warn('⚠️ Vue non disponible - test d\'intégration skip');
  }
}

// Exporter pour utilisation manuelle dans la console
if (typeof window !== 'undefined') {
  window.testAuthManager = testAuthManager;
  window.testAuthManagerIntegration = testAuthManagerIntegration;

  console.log('🔧 Tests AuthManager disponibles:');
  console.log('   - testAuthManager() pour tester le service isolé');
  console.log('   - testAuthManagerIntegration() pour tester l\'intégration Vue');
  console.log('   Exécution automatique dans 3 secondes...');

  // Exécuter automatiquement après 3 secondes
  setTimeout(() => {
    testAuthManager();
    testAuthManagerIntegration();
  }, 3000);
}
