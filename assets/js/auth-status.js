// hugo-cookbook-theme/assets/js/auth-status.js

/**
 * Ce script est chargé sur toutes les pages du site.
 * Il vérifie l'état d'authentification via la présence du token CMS dans localStorage
 * pour mettre à jour l'interface du header. Cette approche est robuste et
 * découplée du fonctionnement interne du CMS Sveltia.
 */

import { getAccount, isAuthenticated, getUserEmail, clearAuthData } from './appwrite-client.js';

// --- ÉLÉMENTS DU DOM ---
const loggedOutState = document.getElementById('header-logged-out');
const loggedInState = document.getElementById('header-logged-in');
const userEmailDisplay = document.getElementById('header-user-email-display');
const logoutButton = document.getElementById('header-logout-button');



/**
 * Met à jour l'interface du header en se basant sur la présence du token CMS
 * pour éviter les conflits avec le CMS.
 */
function updateHeaderUI() {
  const authenticated = isAuthenticated();
  const userEmail = getUserEmail();

  // console.log("🎨 [Auth-Status] updateHeaderUI appelée");
  // console.log("🎨 [Auth-Status] isAuthenticated (from CMS token):", authenticated);
  // console.log("🎨 [Auth-Status] userEmail (from localStorage):", userEmail);

  if (authenticated && loggedInState) {
    // console.log("✅ [Auth-Status] Utilisateur connecté - affichage état connecté");
    // Utilisateur est considéré comme connecté
    // Masquer l'état déconnecté (s'il existe)
    if (loggedOutState) loggedOutState.style.display = 'none';
    // Afficher l'état connecté
    loggedInState.style.display = 'block';

    if (userEmailDisplay && userEmail) {
      userEmailDisplay.textContent = userEmail;
      // console.log("📧 [Auth-Status] Email affiché:", userEmail);
    }
  } else {
    // console.log("🔓 [Auth-Status] Utilisateur déconnecté - masquage état connecté");
    // Utilisateur déconnecté (c'est l'état par défaut)
    if (loggedInState) loggedInState.style.display = 'none';
    // loggedOutState est affiché par défaut, pas besoin de le modifier
  }

  // Cacher l'élément de chargement une fois l'UI mise à jour
  const loadingState = document.getElementById('header-auth-loading');
  if (loadingState) {
    loadingState.style.display = 'none';
    // console.log("🔄 [Auth-Status] État de chargement masqué");
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
    // Utilise le client Appwrite du module commun
    const account = await getAccount();

    // Tente de supprimer la session côté serveur Appwrite
    await account.deleteSession('current');
    // console.log("Session Appwrite supprimée avec succès.");
  } catch (error) {
    // On continue même en cas d'erreur (ex: session déjà expirée)
    console.error("Erreur lors de la suppression de la session Appwrite:", error);
  } finally {
    // Nettoyage impératif de toutes les clés d'authentification locales
    clearAuthData();

    // Redirection vers la page d'accueil pour un état propre
    window.location.href = '/';
  }
}

// --- LOGIQUE PRINCIPALE ---
document.addEventListener('DOMContentLoaded', async () => {
  // console.log("📄 [Auth-Status] === DÉMARRAGE ===");
  // console.log("📄 [Auth-Status] URL actuelle:", window.location.pathname);
  // console.log("📄 [Auth-Status] SDK Appwrite disponible:", !!window.Appwrite);
  // console.log("📄 [Auth-Status] Éléments DOM:", {
  //   loggedOutState: !!loggedOutState,
  //   loggedInState: !!loggedInState,
  //   userEmailDisplay: !!userEmailDisplay,
  //   logoutButton: !!logoutButton
  // });

  // Vérifier si on est sur la page de login pour éviter les conflits
  if (window.location.pathname === '/login/' || window.location.pathname === '/login') {
    // console.log("⚠️ [Auth-Status] Page de login détectée, délégation à authAppwrite.js - ARRÊT");
    return;
  }

  try {
    // console.log("🔄 [Auth-Status] Initialisation du client Appwrite...");
    // Initialiser le client Appwrite via le module commun
    await getAccount();
    // console.log("✅ [Auth-Status] Client Appwrite prêt");
  } catch (error) {
    console.error("❌ [Auth-Status] Erreur lors de l'initialisation Appwrite:", error);
    console.error("❌ [Auth-Status] Stack:", error.stack);
  }

  // 1. Mettre à jour l'interface au chargement initial de la page
  // console.log("🔄 [Auth-Status] Mise à jour de l'interface...");
  updateHeaderUI();

  // 2. Attacher l'écouteur d'événement pour la déconnexion
  if (logoutButton) {
    // console.log("✅ [Auth-Status] Écouteur de déconnexion attaché");
    logoutButton.addEventListener('click', handleLogout);
  } else {
    // console.log("ℹ️ [Auth-Status] Pas de bouton de déconnexion trouvé");
  }

  // console.log("✅ [Auth-Status] === TERMINÉ ===");
});
