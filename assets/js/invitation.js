// hugo-cookbook-theme/assets/js/invitation.js
// Ce script gère la logique de la page d'invitation en utilisant une fonction Appwrite

// Utilise le SDK Appwrite depuis le CDN
// Les objets Client, Account et Functions sont disponibles globalement via window.Appwrite

// --- CONFIGURATION APPWRITE ---
const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "689725820024e81781b7";
const TEAM_ID = "689bf6fe0006627d8959"

// Crée le client Appwrite une seule fois
// Accède aux classes Appwrite via l'objet global
const { Client, Account, Teams } = window.Appwrite;

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);
const teams = new Teams(client);

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
      // 1. Vérifier que l'utilisateur est bien connecté (important pour les permissions)
           const currentUser = await account.get();
           console.log("Utilisateur connecté et autorisé:", currentUser.email);

           // 2. Appeler directement l'API Teams pour créer l'invitation
           console.log(`Envoi de l'invitation à ${email} pour l'équipe ${TEAM_ID}`);

           await teams.createMembership(
             TEAM_ID,
             ['owner'], // Rôle donné à la personne invitée. Mettez 'owner' pour qu'ils puissent inviter à leur tour.
             email,
             undefined, // userId (non requis pour une invitation par email)
             undefined, // phone (non requis)
             `${window.location.origin}/accept-invitation` // URL de redirection après acceptation
           );

           // 3. Afficher le message de succès
           if (successMessage) {
             successMessage.textContent = `L'invitation a été envoyée avec succès à ${email} !`;
             successMessage.style.display = "block";
           }
           invitationForm.reset();

         } catch (error) {
           console.error("Erreur lors de l'envoi de l'invitation:", error);
           let errorMsg = "Une erreur est survenue.";

           if (error.code === 401) { // Unauthorized
             errorMsg = "Vous n'avez pas la permission d'inviter des membres. Seuls les propriétaires de l'équipe le peuvent.";
           } else if (error.code === 409) { // Conflict
             errorMsg = "Cette personne est déjà membre de l'équipe ou a déjà une invitation en attente.";
           } else if (error.message) {
             errorMsg = error.message;
           }

           if (errorMessage) {
             errorMessage.textContent = errorMsg;
             errorMessage.style.display = "block";
           }
         } finally {
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