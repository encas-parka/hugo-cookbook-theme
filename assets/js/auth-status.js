// hugo-cookbook-theme/assets/js/auth-status.js

/**
 * Ce script est chargé sur toutes les pages du site.
 * Il vérifie l'état d'authentification via la présence du token CMS dans localStorage
 * pour mettre à jour l'interface du header. Cette approche est robuste et
 * découplée du fonctionnement interne du CMS Sveltia.
 */

import { getAccount, isAuthenticatedCms, getUserEmail, clearAuthData,  getLocalEmailVerificationStatus } from './appwrite-client.js';

// --- ÉLÉMENTS DU DOM ---
const loggedOutState = document.getElementById('header-logged-out');
const loggedInState = document.getElementById('header-logged-in');
const userEmailDisplay = document.getElementById('header-user-email-display');
const logoutButton = document.getElementById('header-logout-button');
const btnLoggedOut = document.getElementById('btnLoggedOut');


/**
 * Met à jour l'interface du header en se basant sur l'état d'authentification complet
 * pour gérer les cas où une action utilisateur est requise (email non vérifié).
 */
async function updateHeaderUI() {
  // console.log("🎨 [Auth-Status] updateHeaderUI appelée");

    // Vérifier l'authentification locale (CMS)
    const userEmail = getUserEmail();
    const authenticatedCms = isAuthenticatedCms();
    const emailVerificationStatus = getLocalEmailVerificationStatus();

    if (authenticatedCms) {
      console.log("🔓 [Auth-Status] Utilisateur connecté localement (cms)");
      if (loggedOutState) loggedOutState.style.display = 'none';
      if (loggedInState) loggedInState.style.display = 'block';
      if (userEmailDisplay && userEmail) {
        userEmailDisplay.textContent = userEmail;
      }
    } else if (emailVerificationStatus === 'not_verified') {
      console.log("🔓 [Auth-Status] Email non vérifié");
      if (loggedOutState) {
        btnLoggedOut.className = 'btn btn-outline-warning btn-sm d-flex align-items-center';
        btnLoggedOut.title = 'Email non vérifié';
        loggedOutState.style.display = 'block';
      }


    } else {
      console.log("🔓 [Auth-Status] Utilisateur déconnecté - masquage état connecté");
      if (loggedInState) loggedInState.style.display = 'none';
      if (loggedOutState) loggedOutState.style.display = 'block';
    }
    // console.log("🎨 [Auth-Status] updateHeaderUI terminée");
  }

/**
 * Gère la déconnexion complète de l'utilisateur.
 */
async function handleLogout() {
  if (!logoutButton) return;

  logoutButton.disabled = true;
  logoutButton.textContent = 'Déconnexion...';

  try {
    clearAuthData();
    const account = await getAccount();
    await account.deleteSession('current');
    console.log("Session Appwrite supprimée avec succès.");
  } catch (error) {
    console.error("Erreur lors de la suppression de la session Appwrite:", error);
  } finally {
    window.location.href = '/';
  }
}

// --- LOGIQUE PRINCIPALE ---
document.addEventListener('DOMContentLoaded', async () => {

  if (window.location.pathname === '/login/' || window.location.pathname === '/login') {
    return;
  }
    await updateHeaderUI();

  // 2. Attacher l'écouteur d'événement pour la déconnexion
  if (logoutButton) {
    console.log("✅ [Auth-Status] Écouteur de déconnexion attaché");
    logoutButton.addEventListener('click', handleLogout);
  }
});
