// hugo-cookbook-theme/assets/js/auth-status.js

/**
 * Ce script est chargé sur toutes les pages du site.
 * Il vérifie l'état d'authentification via la présence du token CMS dans localStorage
 * pour mettre à jour l'interface du header. Cette approche est robuste et
 * découplée du fonctionnement interne du CMS Sveltia.
 */

import { getAccount, isAuthenticated, getUserEmail, clearAuthData, getAuthenticationState } from './appwrite-client.js';

// --- ÉLÉMENTS DU DOM ---
const loggedOutState = document.getElementById('header-logged-out');
const loggedInState = document.getElementById('header-logged-in');
const userEmailDisplay = document.getElementById('header-user-email-display');
const logoutButton = document.getElementById('header-logout-button');



/**
 * Met à jour l'interface du header en se basant sur l'état d'authentification complet
 * pour gérer les cas où une action utilisateur est requise (email non vérifié).
 */
async function updateHeaderUI() {
  // console.log("🎨 [Auth-Status] updateHeaderUI appelée");
  
  try {
    // Vérifier d'abord l'authentification locale (CMS)
    const userEmail = getUserEmail();
    const authenticated = isAuthenticated();
    
    if (authenticated) {
      // Utilisateur authentifié localement - afficher l'état connecté
      if (loggedOutState) loggedOutState.style.display = 'none';
      if (loggedInState) loggedInState.style.display = 'block';

      if (userEmailDisplay && userEmail) {
        userEmailDisplay.textContent = userEmail;
      }

      // Essayer de récupérer l'état complet d'authentification pour la vérification d'email
      try {
        const authState = await getAuthenticationState();
        
        // Styliser différemment le bouton si une action est requise
        const userDropdownButton = document.getElementById('navbarUserDropdown');
        if (userDropdownButton) {
          if (authState.requiresAction) {
            // console.log("⚠️ [Auth-Status] Action requise - style d'avertissement");
            userDropdownButton.className = 'btn btn-warning btn-sm dropdown-toggle d-flex align-items-center';
            userDropdownButton.title = 'Email non vérifié - Cliquez pour plus d\'informations';
          } else {
            // console.log("✅ [Auth-Status] Aucune action requise - style normal");
            userDropdownButton.className = 'btn btn-primary btn-sm dropdown-toggle d-flex align-items-center';
            userDropdownButton.title = 'Menu utilisateur';
          }
        }
      } catch (authError) {
        // Si impossible de vérifier l'état Appwrite, utiliser un style d'avertissement par défaut
        console.warn("⚠️ [Auth-Status] Impossible de vérifier l'état email - utilisation style d'avertissement:", authError);
        const userDropdownButton = document.getElementById('navbarUserDropdown');
        if (userDropdownButton) {
          userDropdownButton.className = 'btn btn-warning btn-sm dropdown-toggle d-flex align-items-center';
          userDropdownButton.title = 'Statut de vérification inconnu - Cliquez pour plus d\'informations';
        }
      }
    } else {
      // console.log("🔓 [Auth-Status] Utilisateur déconnecté - masquage état connecté");
      if (loggedInState) loggedInState.style.display = 'none';
      if (loggedOutState) loggedOutState.style.display = 'block';
    }

    // console.log("🎨 [Auth-Status] updateHeaderUI terminée");
  } catch (error) {
    console.warn("⚠️ [Auth-Status] Erreur critique lors de la mise à jour du header:", error);
    // Fallback vers l'ancien comportement en cas d'erreur critique
    const userEmail = getUserEmail();
    const authenticated = isAuthenticated();
    if (loggedInState && authenticated) {
      if (loggedOutState) loggedOutState.style.display = 'none';
      loggedInState.style.display = 'block';
      if (userEmailDisplay && userEmail) {
        userEmailDisplay.textContent = userEmail;
      }
      // Style d'avertissement par défaut en cas d'erreur
      const userDropdownButton = document.getElementById('navbarUserDropdown');
      if (userDropdownButton) {
        userDropdownButton.className = 'btn btn-warning btn-sm dropdown-toggle d-flex align-items-center';
        userDropdownButton.title = 'Erreur de vérification - Cliquez pour plus d\'informations';
      }
    } else {
      if (loggedInState) loggedInState.style.display = 'none';
      if (loggedOutState) loggedOutState.style.display = 'block';
    }
  }
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
    // console.log("Session Appwrite supprimée avec succès.");
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
    // console.log("✅ [Auth-Status] Écouteur de déconnexion attaché");
    logoutButton.addEventListener('click', handleLogout);
  }
});
