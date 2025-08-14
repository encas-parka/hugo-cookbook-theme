// hugo-cookbook-theme/assets/js/accept-invitation.js
// Ce script gère la logique de la page d'acceptation d'invitation en utilisant l'API Teams d'Appwrite
// Et la finalisation du compte avec la définition du mot de passe.

// Utilise le SDK Appwrite depuis le CDN
// Les objets Client, Account et Teams sont disponibles globalement via window.Appwrite

// --- CONFIGURATION APPWRITE ---
const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "689725820024e81781b7";
const TEAM_ID = "689bf6fe0006627d8959"; // ID de votre équipe de contributeurs
const APPWRITE_FUNCTION_ID = "68976500002eb5c6ee4f"; // ID de la fonction cms-auth-function

// Crée le client Appwrite une seule fois
// Accède aux classes Appwrite via l'objet global
const { Client, Account, Teams, Functions } = window.Appwrite;

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);
const teams = new Teams(client);
const functions = new Functions(client);

// Récupère les éléments du DOM
const loadingState = document.getElementById("accept-invitation-loading");
const errorState = document.getElementById("accept-invitation-error");
const successState = document.getElementById("accept-invitation-success");
const errorMessage = document.getElementById("error-message");

// Section et formulaire pour le mot de passe
const setPasswordSection = document.getElementById('set-password-section');
const setPasswordForm = document.getElementById('set-password-form');
const newPasswordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const setPasswordError = document.getElementById('set-password-error');
const setPasswordButton = document.getElementById('set-password-button');
const setPasswordSpinner = setPasswordButton?.querySelector('.spinner-border');
const finalSuccessMessage = document.getElementById('final-success-message');

/**
 * Affiche un état de l'UI et masque les autres.
 * @param {string} state - L'état à afficher ('loading', 'error', 'success', 'setPassword')
 */
function showUIState(state) {
  if (loadingState) loadingState.style.display = (state === 'loading') ? 'block' : 'none';
  if (errorState) errorState.style.display = (state === 'error') ? 'block' : 'none';

  // Le succès de l'invitation et le formulaire de mot de passe sont liés
  const isSuccessState = (state === 'success' || state === 'setPassword');
  if (successState) successState.style.display = isSuccessState ? 'block' : 'none';
  if (setPasswordSection) setPasswordSection.style.display = (state === 'setPassword') ? 'block' : 'none';
}

/**
 * Récupère les paramètres de requête de l'URL
 * @returns {URLSearchParams} - Les paramètres de requête
 */
function getQueryParams() {
  return new URLSearchParams(window.location.search);
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
    throw new Error(`Erreur de la fonction CMS (${response.responseStatusCode}): ${serverError}`);
  }

  const cmsAuth = JSON.parse(response.responseBody);
  localStorage.setItem('sveltia-cms.user', JSON.stringify(cmsAuth));
  console.log("Authentification CMS stockée dans localStorage.");
}

/**
 * Met à jour le mot de passe de l'utilisateur actuellement authentifié.
 * Gère la validation en interne.
 * @param {string} newPassword - Le nouveau mot de passe.
 * @param {string} confirmPassword - La confirmation du mot de passe.
 * @throws {Error} si la validation échoue ou si l'API Appwrite renvoie une erreur.
 */
async function updateUserPassword(newPassword, confirmPassword) {
  if (!newPassword || newPassword.length < 8) {
    throw new Error("Le mot de passe doit contenir au moins 8 caractères.");
  }
  if (newPassword !== confirmPassword) {
    throw new Error("Les mots de passe ne correspondent pas.");
  }
  // L'appel à l'API est déjà dans un contexte authentifié
  await account.updatePassword(newPassword);
  console.log("Le mot de passe de l'utilisateur a été mis à jour avec succès.");
}

/**
 * Accepte l'invitation et, en cas de succès, affiche le formulaire de mot de passe.
 */
async function acceptInvitation() {
  showUIState('loading');

  try {
    const queryParams = getQueryParams();
    const teamId = queryParams.get('teamId');
    const membershipId = queryParams.get('membershipId');
    const userId = queryParams.get('userId');
    const secret = queryParams.get('secret');

    if (!teamId || !membershipId || !userId || !secret) {
      throw new Error("Paramètres d'invitation manquants dans l'URL.");
    }
    if (teamId !== TEAM_ID) {
      throw new Error("Cette invitation n'est pas valide pour cette application.");
    }

    // Accepte l'invitation. Une session est créée en arrière-plan.
    console.log("Acceptation de l'invitation:", { teamId, membershipId, userId, secret });
    await teams.updateMembershipStatus(teamId, membershipId, userId, secret);

    localStorage.setItem('is-authenticated', 'true');

    // Affiche le message de succès et le formulaire pour définir le mot de passe
    showUIState('setPassword');

  } catch (error) {
    console.error("Erreur lors de l'acceptation de l'invitation:", error);
    let errorMsg = "Une erreur est survenue lors du traitement de votre invitation.";
    if (error.code === 401) {
      errorMsg = "Vous devez être connecté pour accepter cette invitation. Veuillez vous connecter ou créer un compte.";
    } else if (error.code === 404) {
      errorMsg = "Cette invitation n'existe pas ou a expiré.";
    } else if (error.code === 409) {
      errorMsg = "Cette invitation a déjà été acceptée.";
    } else if (error.message) {
      errorMsg = error.message;
    }

    if (errorMessage) errorMessage.textContent = errorMsg;
    showUIState('error');
  }
}

/**
 * Gère la soumission du formulaire de mot de passe.
 */
if (setPasswordForm) {
  setPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    setPasswordError.style.display = 'none';
    setPasswordSpinner.style.display = 'inline-block';
    setPasswordButton.disabled = true;

    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    try {
      // Étape 1: Mettre à jour le mot de passe
      await updateUserPassword(newPassword, confirmPassword);

      // Étape 2: Obtenir le token CMS
      await setupCmsAuthentication();

      // Étape 3: Afficher le succès final
      if(successState) successState.style.display = 'none';
      if(setPasswordSection) setPasswordSection.style.display = 'none';
      if(finalSuccessMessage) finalSuccessMessage.style.display = 'block';

    } catch (error) {
      // L'erreur (validation ou API) est directement affichée à l'utilisateur
      console.error("Erreur lors de la finalisation du compte:", error);
      showPasswordError(error.message); // On utilise error.message qui est déjà clair
    } finally {
      setPasswordSpinner.style.display = 'none';
      // On ne ré-active le bouton que si le processus n'est pas allé au bout
      if (finalSuccessMessage.style.display !== 'block') {
         setPasswordButton.disabled = false;
      }
    }
  });
}

function showPasswordError(message) {
  setPasswordError.textContent = message;
  setPasswordError.style.display = 'block';
  setPasswordSpinner.style.display = 'none';
  setPasswordButton.disabled = false;
}

/**
 * Logique principale exécutée au chargement de la page
 */
document.addEventListener('DOMContentLoaded', async () => {
  const queryParams = getQueryParams();
  if (queryParams.has('teamId') && queryParams.has('membershipId') &&
      queryParams.has('userId') && queryParams.has('secret')) {
    acceptInvitation();
  } else {
    if (errorMessage) {
      errorMessage.textContent = "Aucune invitation trouvée dans l'URL. Veuillez vérifier le lien d'invitation.";
    }
    showUIState('error');
  }
});