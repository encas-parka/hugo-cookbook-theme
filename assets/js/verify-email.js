// hugo-cookbook-theme/assets/js/verify-email.js
// Script pour gérer la vérification d'email via les paramètres URL

import { verifyEmail, getAuthenticationState, getAccount, setAuthData, getLocalCmsUser } from './appwrite-client.js';

document.addEventListener('DOMContentLoaded', async () => {
  // --- ÉLÉMENTS DU DOM ---
  const loadingState = document.getElementById('loading-state');
  const successState = document.getElementById('success-state');
  const errorState = document.getElementById('error-state');
  const expiredState = document.getElementById('expired-state');
  const errorMessage = document.getElementById('error-message');
  const retryButton = document.getElementById('retry-button');
  const retrySpinner = retryButton?.querySelector('.spinner-border');
  const configState = document.getElementById('config-state');
  const editButton = document.getElementById('edit-button');

  // --- RÉCUPÉRATION DES PARAMÈTRES URL ---
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const secret = urlParams.get('secret');

  /**
   * Affiche un état spécifique de l'UI
   * @param {string} state - 'loading', 'success', 'error', 'expired'
   */
  function showState(state) {
    if (loadingState) loadingState.style.display = state === 'loading' ? 'block' : 'none';
    if (successState) successState.style.display = state === 'success' ? 'block' : 'none';
    if (errorState) errorState.style.display = state === 'error' ? 'block' : 'none';
    if (expiredState) expiredState.style.display = state === 'expired' ? 'block' : 'none';
    if (configState) configState.style.display = state === 'config' ? 'block' : 'none';
  }

  /**
   * Appelle la fonction CMS pour récupérer le token après vérification
   */
  async function setupCmsAuthentication() {
    const { APPWRITE_FUNCTION_ID } = await import('./appwrite-client.js').then(module => module.getConfig());
    
    try {
      const account = await getAccount();
      const appwriteUser = await account.get();
      
      if (!appwriteUser.emailVerification) {
        throw new Error("EMAIL_NOT_VERIFIED");
      }

      // Importer getFunctions dynamiquement
      const { getFunctions } = await import('./appwrite-client.js');
      const functions = await getFunctions();

      console.log('[Verify Email] Appel de la fonction CMS...');
      const execution = await functions.createExecution(
        APPWRITE_FUNCTION_ID,
        JSON.stringify({
          action: "get-cms-token",
          userId: appwriteUser.$id
        }),
        false
      );

      console.log('[Verify Email] Réponse de la fonction CMS:', execution.responseBody);

      let result;
      try {
        result = JSON.parse(execution.responseBody);
      } catch (parseError) {
        console.error('[Verify Email] Erreur de parsing de la réponse CMS:', parseError);
        throw new Error(`Erreur de parsing: ${execution.responseBody}`);
      }

      if (!result.success) {
        throw new Error(`Erreur de la fonction CMS: ${result.error || 'Erreur inconnue'}`);
      }

      const cmsUser = result.user;
      if (!cmsUser || !cmsUser.token || typeof cmsUser.token !== 'string' || cmsUser.token.trim() === '') {
        throw new Error("Token CMS invalide reçu de la fonction");
      }

      // Configurer les données d'authentification
      setAuthData(appwriteUser.email, appwriteUser.name, cmsUser);
      
      console.log('[Verify Email] Configuration CMS terminée avec succès');
      return true;
    } catch (error) {
      console.error('[Verify Email] Erreur lors de la configuration CMS:', error);
      throw error;
    }
  }

  /**
   * Tente de vérifier l'email avec les paramètres fournis
   */
  async function attemptVerification() {
    try {
      console.log('[Verify Email] Tentative de vérification avec userId:', userId);
      await verifyEmail(userId, secret);
      
      // Succès de la vérification
      console.log('[Verify Email] Vérification réussie');
      
      // Afficher l'état de configuration
      showState('config');
      
      // Configurer l'authentification CMS
      try {
        await setupCmsAuthentication();
        console.log('[Verify Email] Configuration complète terminée');
        showState('success');
        
        // Activer le bouton d'édition
        if (editButton) {
          editButton.disabled = false;
          editButton.classList.remove('btn-secondary');
          editButton.classList.add('btn-primary');
        }
      } catch (cmsError) {
        console.error('[Verify Email] Erreur lors de la configuration CMS:', cmsError);
        if (errorMessage) {
          errorMessage.textContent = 'Email vérifié mais erreur lors de la configuration du compte. Veuillez vous reconnecter.';
        }
        showState('error');
      }
      
    } catch (error) {
      console.error('[Verify Email] Erreur lors de la vérification:', error);
      
      // Analyser le type d'erreur
      if (error.code === 401 || error.message?.includes('invalid') || error.message?.includes('expired')) {
        // Lien invalide ou expiré
        showState('expired');
      } else {
        // Autre erreur
        if (errorMessage) {
          errorMessage.textContent = error.message || 'Une erreur inattendue est survenue lors de la vérification.';
        }
        showState('error');
      }
    }
  }

  // --- GESTION DU BOUTON RÉESSAYER ---
  if (retryButton) {
    retryButton.addEventListener('click', async () => {
      retryButton.disabled = true;
      if (retrySpinner) retrySpinner.style.display = 'inline-block';
      showState('loading');
      
      await attemptVerification();
      
      retryButton.disabled = false;
      if (retrySpinner) retrySpinner.style.display = 'none';
    });
  }

  // --- LOGIQUE PRINCIPALE ---
  
  // Vérifier la présence des paramètres requis
  if (!userId || !secret) {
    console.warn('[Verify Email] Paramètres manquants - userId:', !!userId, 'secret:', !!secret);
    if (errorMessage) {
      errorMessage.textContent = 'Lien de vérification invalide. Les paramètres requis sont manquants.';
    }
    showState('error');
    return;
  }

  // Attendre un court délai pour l'animation de chargement
  setTimeout(async () => {
    await attemptVerification();
  }, 500);
});