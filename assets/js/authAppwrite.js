// Fichier : assets/js/authAppwrite.js
// Ce script est conçu pour s'exécuter uniquement sur la page /login

// Utilise le SDK Appwrite depuis le CDN
// Les objets Client, Account et Functions sont disponibles globalement via window.Appwrite

// --- CONFIGURATION APPWRITE ---
const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1"; // ou votre endpoint self-hosted
const APPWRITE_PROJECT_ID = "689725820024e81781b7"; // Remplacez par votre vrai Project ID
const APPWRITE_FUNCTION_ID = "68976500002eb5c6ee4f"; // ID de votre fonction cms-auth-function

// --------------------

// Crée le client Appwrite une seule fois
// Accède aux classes Appwrite via l'objet global
const { Client, Account, Functions } = window.Appwrite;

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);
const functions = new Functions(client);

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
 * Vérifie l'authentification CMS locale.
 * @returns {object|null} - L'objet utilisateur s'il est valide, sinon null.
 */
function getLocalCmsUser() {
  const cmsUser = localStorage.getItem('sveltia-cms.user');
  if (!cmsUser) return null;
  try {
    const parsedUser = JSON.parse(cmsUser);
    if (parsedUser.token && parsedUser.id) {
      return parsedUser;
    }
    // Si les données sont invalides, on les supprime
    localStorage.removeItem('sveltia-cms.user');
    return null;
  } catch (e) {
    console.warn('Données CMS corrompues dans localStorage. Nettoyage...');
    localStorage.removeItem('sveltia-cms.user');
    return null;
  }
}

/**
 * Configure l'authentification du CMS en appelant la fonction Appwrite.
 * Lève une exception en cas d'erreur.
 */
async function setupCmsAuthentication() {
  console.log("Appel de la fonction Appwrite pour obtenir le token CMS...");
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
  localStorage.setItem('sveltia-cms.user', JSON.stringify(cmsAuth));
  console.log("Authentification CMS stockée dans localStorage.");
}


/**
 * Logique principale exécutée au chargement de la page de connexion.
 */
async function handleLoginPageLoad() {
  console.log("handleLoginPageLoad: Démarrage de la vérification de session...");
  showUIState('loading'); // Assure que l'état de chargement est affiché dès le début

  const cmsUser = getLocalCmsUser();
  console.log("handleLoginPageLoad: Token CMS local (getLocalCmsUser) -", cmsUser ? "Présent et valide" : "Absent ou invalide");

  // CAS 1: Token CMS valide -> L'utilisateur est connecté
  if (cmsUser) {
    console.log("handleLoginPageLoad: CAS 1 - Token CMS valide. L'utilisateur est connecté.");
    try {
      const appwriteUser = await account.get();
      console.log("handleLoginPageLoad: Session Appwrite active pour", appwriteUser.email);
      localStorage.setItem('appwrite-user-email', appwriteUser.email);
      localStorage.setItem('is-authenticated', 'true');
      if (userEmailDisplay) userEmailDisplay.textContent = ` (${appwriteUser.email})`;
      showUIState('loggedIn');
      return;
    } catch (appwriteError) {
      console.warn("handleLoginPageLoad: Token CMS présent mais pas de session Appwrite. Nettoyage...");
      // Si le token CMS existe mais pas de session Appwrite, on nettoie tout
      localStorage.removeItem('sveltia-cms.user');
      localStorage.removeItem('appwrite-user-email');
      localStorage.removeItem('is-authenticated');
    }
  }

  // CAS 2: Pas de token CMS -> L'utilisateur n'est pas connecté
  console.log("handleLoginPageLoad: CAS 2 - Pas de token CMS. Déconnexion forcée d'Appwrite si nécessaire.");
  
  // S'assurer qu'il n'y a pas de session Appwrite résiduelle
  try {
    await account.deleteSession('current');
    console.log("handleLoginPageLoad: Session Appwrite résiduelle supprimée.");
  } catch (e) {
    // Pas de session active, c'est normal
    console.log("handleLoginPageLoad: Aucune session Appwrite à supprimer.");
  }

  // Nettoyer toutes les clés d'authentification locales
  localStorage.removeItem('sveltia-cms.user');
  localStorage.removeItem('appwrite-user-email');
  localStorage.removeItem('is-authenticated');

  showUIState('loggedOut');
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
      await account.createEmailPasswordSession(email, password);
      console.log("Connexion Appwrite réussie.");
      
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
      // Supprimer d'abord le token CMS (notre source de vérité)
      localStorage.removeItem('sveltia-cms.user');
      localStorage.removeItem('appwrite-user-email');
      localStorage.removeItem('is-authenticated');
      
      // Puis tenter de déconnecter d'Appwrite
      await account.deleteSession('current');
      console.log("Déconnexion Appwrite réussie.");
    } catch (error) {
      console.warn("Erreur lors de la déconnexion Appwrite (peut-être déjà déconnecté):", error);
    } finally {
      // Toujours afficher l'état déconnecté
      console.log("Déconnexion terminée. Affichage du formulaire.");
      showUIState('loggedOut');
    }
  });
}


// --- GESTION DU FORMULAIRE DE DEMANDE D'ACCÈS ---

const accessRequestForm = document.getElementById('access-request-form');
const formFeedback = document.getElementById('form-feedback');
const submitButton = accessRequestForm?.querySelector('button[type="submit"]');
const submitSpinner = submitButton?.querySelector('.spinner-border');

// Remplacez cette valeur par l'ID de votre fonction d'envoi d'email
const ACCESS_REQUEST_FUNCTION_ID = "689cdea5001a4d74549d";

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
document.addEventListener('DOMContentLoaded', handleLoginPageLoad);
