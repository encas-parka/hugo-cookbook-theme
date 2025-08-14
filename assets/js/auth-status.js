// hugo-cookbook-theme/assets/js/auth-status.js

/**
 * Ce script est chargé sur toutes les pages du site.
 * Il vérifie l'état d'authentification via la présence du token CMS dans localStorage
 * pour mettre à jour l'interface du header. Cette approche est robuste et
 * découplée du fonctionnement interne du CMS Sveltia.
 */

// Utilise le SDK Appwrite depuis le CDN
// Les objets Client et Account sont disponibles globalement via window.Appwrite


// --- CONFIGURATION APPWRITE ---
const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "689725820024e81781b7";

let client, account;

/**
 * Vérifie que le SDK Appwrite est chargé et initialise les clients
 */
function waitForAppwrite(maxAttempts = 50, interval = 100) {
    return new Promise((resolve, reject) => {
        let attempts = 0;
        
        function checkAppwrite() {
            attempts++;
            console.log(`[Auth-Status Debug] Vérification Appwrite - tentative ${attempts}/${maxAttempts}`);
            
            if (window.Appwrite && window.Appwrite.Client && window.Appwrite.Account) {
                console.log("[Auth-Status Debug] Appwrite SDK est chargé");
                
                // Initialiser les clients Appwrite
                const { Client, Account } = window.Appwrite;
                client = new Client()
                    .setEndpoint(APPWRITE_ENDPOINT)
                    .setProject(APPWRITE_PROJECT_ID);
                account = new Account(client);
                
                resolve();
            } else if (attempts >= maxAttempts) {
                console.log("[Auth-Status Debug] Appwrite SDK non chargé après le nombre maximum de tentatives");
                reject(new Error("Le SDK Appwrite n'a pas pu être chargé."));
            } else {
                setTimeout(checkAppwrite, interval);
            }
        }
        
        checkAppwrite();
    });
}

// --- ÉLÉMENTS DU DOM ---
const loggedOutState = document.getElementById('header-logged-out');
const loggedInState = document.getElementById('header-logged-in');
const userEmailDisplay = document.getElementById('header-user-email-display');
const logoutButton = document.getElementById('header-logout-button');

/**
 * Vérifie la validité du token CMS dans localStorage.
 * @returns {boolean} - True si le token est valide, sinon false.
 */
function isCmsUserValid() {
  const cmsUser = localStorage.getItem('sveltia-cms.user');
  if (!cmsUser) return false;
  try {
    const parsedUser = JSON.parse(cmsUser);
    return !!(parsedUser.token && parsedUser.id);
  } catch (e) {
    console.warn('Données CMS corrompues dans localStorage. Nettoyage...');
    localStorage.removeItem('sveltia-cms.user');
    return false;
  }
}

/**
 * Met à jour l'interface du header en se basant sur la présence du token CMS
 * pour éviter les conflits avec le CMS.
 */
function updateHeaderUI() {
  const isAuthenticated = isCmsUserValid();
  const userEmail = localStorage.getItem('appwrite-user-email');

  console.log("auth-status.js: updateHeaderUI appelée.");
  console.log("auth-status.js: isAuthenticated (from CMS token):", isAuthenticated);
  console.log("auth-status.js: userEmail (from localStorage):", userEmail);

  if (isAuthenticated && loggedInState) {
    // Utilisateur est considéré comme connecté
    // Masquer l'état déconnecté (s'il existe)
    if (loggedOutState) loggedOutState.style.display = 'none';
    // Afficher l'état connecté
    loggedInState.style.display = 'block';

    if (userEmailDisplay && userEmail) {
      userEmailDisplay.textContent = userEmail;
    }
  } else {
    // Utilisateur déconnecté (c'est l'état par défaut)
    if (loggedInState) loggedInState.style.display = 'none';
    // loggedOutState est affiché par défaut, pas besoin de le modifier
  }


  // Cacher l'élément de chargement une fois l'UI mise à jour
  const loadingState = document.getElementById('header-auth-loading');
  if (loadingState) {
    loadingState.style.display = 'none';
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
    // S'assurer que le client Appwrite est initialisé
    if (!account) {
      await waitForAppwrite();
    }
    
    // Tente de supprimer la session côté serveur Appwrite
    await account.deleteSession('current');
    console.log("Session Appwrite supprimée avec succès.");
  } catch (error) {
    // On continue même en cas d'erreur (ex: session déjà expirée)
    console.error("Erreur lors de la suppression de la session Appwrite:", error);
  } finally {
    // Nettoyage impératif de toutes les clés d'authentification locales
    localStorage.removeItem('sveltia-cms.user'); // Notre source de vérité
    localStorage.removeItem('appwrite-user-email');
    localStorage.removeItem('is-authenticated');
    console.log("Données d'authentification locales nettoyées.");

    // Redirection vers la page d'accueil pour un état propre
    window.location.href = '/';
  }
}
 
  // --- LOGIQUE PRINCIPALE ---
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Attendre que le SDK Appwrite soit chargé avant d'initialiser
    await waitForAppwrite();
    console.log("[Auth-Status Debug] SDK Appwrite prêt, initialisation terminée");
  } catch (error) {
    console.error("[Auth-Status Debug] Erreur lors du chargement du SDK Appwrite:", error);
  }

  // 1. Mettre à jour l'interface au chargement initial de la page
  updateHeaderUI();

  // 2. Attacher l'écouteur d'événement pour la déconnexion
  if (logoutButton) {
    logoutButton.addEventListener('click', handleLogout);
  }
});