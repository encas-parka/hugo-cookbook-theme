// LEGACY / USELESS : we use client side → hugo-cookbook-theme/assets/js/invitation.js
// Ce script gère la logique de la page d'invitation en utilisant une fonction Appwrite

// Utilise le SDK Appwrite depuis le CDN
// Les objets Client, Account et Functions sont disponibles globalement via window.Appwrite

// --- CONFIGURATION APPWRITE ---
const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "689725820024e81781b7";
const INVITATION_FUNCTION_ID = "689c9b030024fbfe8d7f"; // ID de ta fonction d'invitation

// Crée le client Appwrite une seule fois
// Accède aux classes Appwrite via l'objet global
const { Client, Account, Functions } = window.Appwrite;

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);
const functions = new Functions(client); // Remplace Teams par Functions

// Récupère les éléments du DOM
const loadingState = document.getElementById("invitation-auth-loading");
const deniedState = document.getElementById("invitation-auth-denied");
const grantedState = document.getElementById("invitation-auth-granted");
const invitationForm = document.getElementById("invitation-form");
const invitationEmail = document.getElementById("invitation-email");
const invitationButton = document.getElementById("invitation-button");
const errorMessage = document.getElementById("invitation-error-message");
const successMessage = document.getElementById("invitation-success-message");
const spinner = invitationButton?.querySelector(".spinner-border");

/**
 * Affiche un état de l'UI et masque les autres.
 * @param {string} state - L'état à afficher ('loading', 'denied', 'granted')
 */
function showUIState(state) {
  if (loadingState) loadingState.style.display = (state === 'loading') ? 'block' : 'none';
  if (deniedState) deniedState.style.display = (state === 'denied') ? 'block' : 'none';
  if (grantedState) grantedState.style.display = (state === 'granted') ? 'block' : 'none';
}

/**
 * Vérifie si l'utilisateur est authentifié
 * @returns {boolean} - True si l'utilisateur est authentifié, false sinon
 */
function isAuthenticated() {
  return localStorage.getItem('is-authenticated') === 'true';
}

/**
 * Gère la soumission du formulaire d'invitation
 */
if (invitationForm) {
  invitationForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Réinitialise les messages
    if (errorMessage) errorMessage.style.display = "none";
    if (successMessage) successMessage.style.display = "none";

    // Affiche le spinner et désactive le bouton
    if (spinner) spinner.style.display = "inline-block";
    if (invitationButton) invitationButton.disabled = true;

    // Nettoie et valide l'email
    const email = invitationEmail.value.trim();

    // Affiche l'email dans la console pour débogage
    console.log("Email saisi:", `"${email}"`, "Longueur:", email.length);

    // Validation côté client de l'email
    if (!isValidEmail(email)) {
      if (errorMessage) {
        errorMessage.textContent = `L'adresse email "${email}" n'est pas valide. Veuillez vérifier le format de l'email (exemple@domaine.com).`;
        errorMessage.style.display = "block";
      }

      // Masque le spinner et réactive le bouton
      if (spinner) spinner.style.display = "none";
      if (invitationButton) invitationButton.disabled = false;
      return;
    }

    try {
      // Vérifie que le SDK est initialisé
      if (!functions) {
        throw new Error("Le SDK Appwrite n'est pas initialisé");
      }

      // Vérifie d'abord que l'utilisateur est authentifié
      console.log("Vérification de l'authentification utilisateur");

      try {
        const currentUser = await account.get();
        console.log("Utilisateur connecté:", currentUser.email, "ID:", currentUser.$id);

        // Vérifie que l'utilisateur est membre de la team (pas nécessairement owner)
        const teamInfo = await account.getPrefs(); // ou une autre vérification selon ton système
        console.log("Authentification vérifiée pour:", currentUser.email);

      } catch (authError) {
        console.error("Erreur d'authentification:", authError);
        throw new Error("Vous devez être connecté pour inviter des membres.");
      }

      console.log("Envoi de l'invitation via fonction Appwrite pour:", email);

      // Appelle la fonction Appwrite pour envoyer l'invitation
      const response = await functions.createExecution(
        INVITATION_FUNCTION_ID,
        JSON.stringify({ email: email }),
        false // async
      );

      // Parse la réponse
      let result;
      try {
        result = JSON.parse(response.responseBody);
      } catch (parseError) {
        throw new Error("Réponse invalide de la fonction d'invitation");
      }

      if (!result.success) {
        throw new Error(result.message || "Erreur lors de l'envoi de l'invitation");
      }

      // Affiche un message de succès
      if (successMessage) {
        successMessage.textContent = result.message || `L'invitation a été envoyée avec succès à ${email} !`;
        successMessage.style.display = "block";
      }

      // Réinitialise le formulaire
      invitationForm.reset();

    } catch (error) {
      console.error("Erreur lors de l'envoi de l'invitation:", error);
      let errorMsg = "Une erreur est survenue lors de l'envoi de l'invitation.";

      // Gestion des erreurs spécifiques
      if (error.code === 429) {
        errorMsg = "Trop de requêtes. Veuillez réessayer plus tard.";
      } else if (error.message) {
        errorMsg = error.message;
      }

      console.error("Détails de l'erreur:", {
        email: email,
        error: error,
        message: error.message,
        code: error.code
      });

      if (errorMessage) {
        errorMessage.textContent = errorMsg;
        errorMessage.style.display = "block";
      }
    } finally {
      // Masque le spinner et réactive le bouton
      if (spinner) spinner.style.display = "none";
      if (invitationButton) invitationButton.disabled = false;
    }
  });
}

/**
 * Valide le format d'une adresse email
 * @param {string} email - L'email à valider
 * @returns {boolean} - True si l'email est valide, false sinon
 */
function isValidEmail(email) {
  // Vérifie que l'email n'est pas vide
  if (!email || email.length === 0) {
    return false;
  }

  // Nettoie l'email des espaces en début/fin
  email = email.trim();

  // Vérifie qu'il n'y a pas d'espaces dans l'email
  if (/\s/.test(email)) {
    return false;
  }

  // Vérifie la longueur minimale et maximale
  if (email.length < 5 || email.length > 254) {
    return false;
  }

  // Expression régulière pour valider le format de l'email
  // Compatible avec les exigences d'Appwrite, plus flexible
  const emailRegex = /^[a-zA-Z0-9]([a-zA-Z0-9._+-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/;

  // Vérifie aussi qu'il n'y a pas de points consécutifs
  if (email.includes('..')) {
    return false;
  }

  return emailRegex.test(email);
}

/**
 * Logique principale exécutée au chargement de la page
 */
document.addEventListener('DOMContentLoaded', async () => {
  showUIState('loading');

  try {
    // Vérifie si l'utilisateur est authentifié
    if (!isAuthenticated()) {
      showUIState('denied');
      return;
    }

    // Vérifie la session Appwrite
    try {
      await account.get(); // Tente de récupérer la session Appwrite pour vérifier son état
      showUIState('granted');
    } catch (error) {
      // Si account.get() échoue (par exemple, pas de session active ou session expirée)
      console.log("Pas de session Appwrite active ou session invalide pour l'invitation.");
      showUIState('denied');
    }
  } catch (error) {
    console.error("Erreur inattendue au chargement de la page d'invitation:", error);
    showUIState('denied');
  }
});
