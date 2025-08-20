// Fichier : assets/js/authAppwrite.js
// Ce script est conçu pour s'exécuter uniquement sur la page /login

// console.log("📦 [authAppwrite.js] === SCRIPT CHARGÉ ===");
// console.log("📦 [authAppwrite.js] URL:", window.location.pathname);
// console.log("📦 [authAppwrite.js] SDK Appwrite:", !!window.Appwrite);
// console.log("📦 [authAppwrite.js] DOM ready:", document.readyState);

import { getAppwriteClients, getAccount, getFunctions, getConfig, getLocalCmsUser, isAuthenticated, getUserEmail, clearAuthData, setAuthData } from './appwrite-client.js';

// Récupération de la configuration
const { APPWRITE_FUNCTION_ID, ACCESS_REQUEST_FUNCTION_ID } = getConfig();

// Récupère les éléments du DOM
const loadingState = document.getElementById("loading-state");
const loggedInState = document.getElementById("user-logged-in");
const loggedOutState = document.getElementById("user-logged-out");
const loggedOutSections = document.getElementById("logged-out-sections");
const loginForm = document.getElementById("login-form");
const logoutButton = document.getElementById("logout-button");
const errorMessage = document.getElementById("error-message");
const loginButton = document.getElementById("login-button");
const loginSpinner = loginButton?.querySelector(".spinner-border");
const userEmailDisplay = document.getElementById("user-email-display");

/**
 * Affiche un état de l'UI et masque les autres.
 * @param {string} state - L'état à afficher ('loading', 'loggedIn', 'loggedOut')
 */
function showUIState(state) {
  if (loadingState) loadingState.style.display = (state === 'loading') ? 'block' : 'none';
  if (loggedInState) loggedInState.style.display = (state === 'loggedIn') ? 'block' : 'none';
  if (loggedOutState) loggedOutState.style.display = (state === 'loggedOut') ? 'block' : 'none';
  if (loggedOutSections) loggedOutSections.style.display = (state === 'loggedOut') ? 'block' : 'none';
}



/**
 * Configure l'authentification du CMS en appelant la fonction Appwrite.
 * Lève une exception en cas d'erreur.
 */
async function setupCmsAuthentication() {
  // console.log("Appel de la fonction Appwrite pour obtenir le token CMS...");

  const functions = await getFunctions();
  const response = await functions.createExecution(
    APPWRITE_FUNCTION_ID,
    '', // Le corps de la requête est vide
    false
  );

  if (response.responseStatusCode !== 200) {
    let serverError = response.responseBody;
    try {
      const parsedBody = JSON.parse(response.responseBody);
      if (parsedBody.error) serverError = parsedBody.error;
    } catch (p_err) { /* ignore */ }
    throw new Error(`Erreur de la fonction (${response.responseStatusCode}): ${serverError}`);
  }

  const cmsAuth = JSON.parse(response.responseBody);
  setAuthData(null, cmsAuth); // L'email sera défini plus tard
  // console.log("Authentification CMS stockée dans localStorage.");
}

/**
 * Logique principale exécutée au chargement de la page de connexion.
 */
async function handleLoginPageLoad() {
  // console.log("🔄 [handleLoginPageLoad] === DÉMARRAGE ===");
  // console.log("🔄 [handleLoginPageLoad] URL actuelle:", window.location.pathname);

  // Afficher l'état de chargement immédiatement
  showUIState('loading');
  // console.log("🔄 [handleLoginPageLoad] État de chargement affiché");

  try {
    // Vérifier d'abord si le SDK Appwrite est disponible
    if (!window.Appwrite) {
      console.error("❌ [handleLoginPageLoad] SDK Appwrite non disponible !");
      throw new Error("SDK Appwrite non chargé");
    }
    // console.log("✅ [handleLoginPageLoad] SDK Appwrite disponible");

    const cmsUser = getLocalCmsUser();
    // console.log("🔍 [handleLoginPageLoad] Token CMS local:", cmsUser ? "✅ Présent et valide" : "❌ Absent ou invalide");

    // CAS 1: Token CMS valide -> L'utilisateur est connecté
    if (cmsUser) {
      // console.log("🔒 [handleLoginPageLoad] === CAS 1: Token CMS valide ===");
      try {
        // console.log("🔄 [handleLoginPageLoad] Initialisation du client Appwrite...");
        const account = await getAccount();
        // console.log("✅ [handleLoginPageLoad] Client Appwrite initialisé");

        // console.log("🔄 [handleLoginPageLoad] Récupération des données utilisateur Appwrite...");
        const appwriteUser = await account.get();
        // console.log("✅ [handleLoginPageLoad] Utilisateur Appwrite récupéré:", appwriteUser.email);

        setAuthData(appwriteUser.email, cmsUser);
        if (userEmailDisplay) userEmailDisplay.textContent = ` (${appwriteUser.email})`;

        // console.log("🎉 [handleLoginPageLoad] Utilisateur connecté - affichage interface");
        showUIState('loggedIn');
        return;
      } catch (appwriteError) {
        console.warn("⚠️ [handleLoginPageLoad] Token CMS présent mais erreur Appwrite:", appwriteError.message);
        clearAuthData();
        // console.log("🧹 [handleLoginPageLoad] Données nettoyées après erreur Appwrite");
      }
    }

    // CAS 2: Pas de token CMS -> L'utilisateur n'est pas connecté
    // console.log("🔓 [handleLoginPageLoad] === CAS 2: Pas de token CMS ===");

    // Nettoyer toutes les clés d'authentification locales d'abord
    clearAuthData();
    // console.log("🧹 [handleLoginPageLoad] Données locales nettoyées");

    // Tenter de supprimer la session Appwrite résiduelle avec timeout
    try {
      // console.log("🔄 [handleLoginPageLoad] Initialisation client pour nettoyage session...");
      const account = await getAccount();
// console.log("✅ [handleLoginPageLoad] Client Appwrite prêt pour nettoyage");

      // console.log("🔄 [handleLoginPageLoad] Suppression session Appwrite résiduelle (timeout: 3s)...");
      // Créer une promesse avec timeout réduit pour éviter les blocages
      const deleteSessionPromise = account.deleteSession('current');
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 3000)
      );

      await Promise.race([deleteSessionPromise, timeoutPromise]);
      // console.log("✅ [handleLoginPageLoad] Session Appwrite résiduelle supprimée");
    } catch (e) {
      if (e.message === 'Timeout') {
        console.warn("⏰ [handleLoginPageLoad] Timeout suppression session (3s) - poursuite");
      } else if (e.code === 401) {
        // console.log("ℹ️ [handleLoginPageLoad] Aucune session active à supprimer");
      } else {
        // console.log("ℹ️ [handleLoginPageLoad] Erreur suppression session (normale):", e.message);
      }
    }

    // console.log("🎯 [handleLoginPageLoad] Affichage interface de connexion");
    showUIState('loggedOut');
// console.log("✅ [handleLoginPageLoad] === TERMINÉ AVEC SUCCÈS ===");

  } catch (error) {
    // Gestion d'erreur globale pour s'assurer qu'on ne reste jamais bloqué sur le spinner
    console.error("💥 [handleLoginPageLoad] === ERREUR CRITIQUE ===");
    console.error("💥 [handleLoginPageLoad] Détails:", error);
    console.error("💥 [handleLoginPageLoad] Stack:", error.stack);

    clearAuthData();
    showUIState('loggedOut');
    // console.log("🔧 [handleLoginPageLoad] Interface de connexion forcée après erreur");
  }
}

/**
 * Gère la soumission du formulaire de connexion.
 */
if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (loginSpinner) loginSpinner.style.display = "inline-block";
    if (loginButton) loginButton.disabled = true;
    if (errorMessage) errorMessage.style.display = "none";

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
      const account = await getAccount();
      await account.createEmailPasswordSession(email, password);
      // console.log("Connexion Appwrite réussie.");

      // Récupérer le token CMS
      await setupCmsAuthentication();

      // Relancer la logique de la page pour mettre à jour l'UI
      await handleLoginPageLoad();

    } catch (error) {
      console.error("Erreur de connexion:", error);
      let errorMsg = "L'email ou le mot de passe est incorrect.";
      if (error.code === 429) {
        errorMsg = "Trop de tentatives de connexion. Veuillez réessayer plus tard.";
      }
      if (errorMessage) {
        errorMessage.textContent = errorMsg;
        errorMessage.style.display = "block";
      }
      if (loginSpinner) loginSpinner.style.display = "none";
      if (loginButton) loginButton.disabled = false;
    }
  });
}

/**
 * Gère la déconnexion.
 */
if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    showUIState('loading');
    try {
      // Supprimer d'abord les données d'authentification locales (notre source de vérité)
      clearAuthData();

      // Puis tenter de déconnecter d'Appwrite
      const account = await getAccount();
      await account.deleteSession('current');
      // console.log("Déconnexion Appwrite réussie.");
    } catch (error) {
      console.warn("Erreur lors de la déconnexion Appwrite (peut-être déjà déconnecté):", error);
    } finally {
      // Toujours afficher l'état déconnecté
      // console.log("Déconnexion terminée. Affichage du formulaire.");
      showUIState('loggedOut');
    }
  });
}

// --- GESTION DU FORMULAIRE DE DEMANDE D'ACCÈS ---

const accessRequestForm = document.getElementById('access-request-form');
const formFeedback = document.getElementById('form-feedback');
const submitButton = accessRequestForm?.querySelector('button[type="submit"]');
const submitSpinner = submitButton?.querySelector('.spinner-border');

if (accessRequestForm) {
  accessRequestForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // UI: Démarrage de la soumission
    if (submitButton) submitButton.disabled = true;
    if (submitSpinner) submitSpinner.style.display = 'inline-block';
    if (formFeedback) {
        formFeedback.innerHTML = ''; // Nettoyer les messages précédents
        formFeedback.className = 'mb-3'; // Reset class
    }

    const email = document.getElementById('contact-form-email').value;
    const message = document.getElementById('contact-form-message').value;

    try {
      const payload = JSON.stringify({ email, message });

      const functions = await getFunctions();
      const result = await functions.createExecution(
        ACCESS_REQUEST_FUNCTION_ID,
        payload,
        false // `async` = false, pour attendre le résultat
      );

      const responseBody = JSON.parse(result.responseBody);

      if (result.responseStatusCode === 200 && responseBody.success) {
        // Succès
        if (formFeedback) {
            formFeedback.className = 'alert alert-success my-4';
            formFeedback.textContent = 'Votre demande a bien été envoyée. Les administrateur·ices essayeront de répondre à votre demande bientôt.';
        }
        accessRequestForm.reset(); // Vider le formulaire
      } else {
        // Échec côté serveur
        throw new Error(responseBody.error || 'Une erreur inconnue est survenue.');
      }

    } catch (error) {
      console.error("Erreur lors de l'envoi de la demande d'accès:", error);
      if (formFeedback) {
        formFeedback.className = 'alert alert-danger my-4';
        formFeedback.textContent = `Erreur : ${error.message || "Impossible d'envoyer la demande. Veuillez réessayer plus tard."}`;
      }
    } finally {
      // UI: Fin de la soumission
      if (submitButton) submitButton.disabled = false;
      if (submitSpinner) submitSpinner.style.display = 'none';
    }
  });
}

// Lancement de la logique au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  // console.log("📄 [authAppwrite.js] DOMContentLoaded déclenché");
  // console.log("📄 [authAppwrite.js] URL:", window.location.pathname);
  // console.log("📄 [authAppwrite.js] SDK Appwrite disponible:", !!window.Appwrite);

  // Ajouter un délai minimal pour s'assurer que tous les scripts sont chargés
  setTimeout(() => {
    // console.log("📄 [authAppwrite.js] Lancement handleLoginPageLoad après délai");
    handleLoginPageLoad();
  }, 10);
});
