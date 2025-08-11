// Fichier : assets/js/auth.js

// Importe le SDK Appwrite depuis le CDN
import { Client, Account, Functions } from "https://cdn.jsdelivr.net/npm/appwrite@15.0.0/+esm";

// --- CONFIGURATION APPWRITE ---
const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1"; // ou votre endpoint self-hosted
const APPWRITE_PROJECT_ID = "votre-project-id-reel"; // Remplacez par votre vrai Project ID
const APPWRITE_FUNCTION_ID = "votre-function-id-reel"; // ID de votre fonction cms-auth-function

// --------------------

// Crée le client Appwrite une seule fois
const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);
const functions = new Functions(client);

// Récupère les éléments du DOM avec lesquels nous allons interagir
const loggedInState = document.getElementById("user-logged-in");
const loggedOutState = document.getElementById("user-logged-out");
const loginForm = document.getElementById("login-form");
const logoutButton = document.getElementById("logout-button");
const errorMessage = document.getElementById("error-message");
const loginButton = document.getElementById("login-button");
const loginSpinner = loginButton.querySelector(".spinner-border");
const userEmailDisplay = document.getElementById("user-email-display");

/**
 * Fonction pour configurer l'authentification du CMS et rediriger.
 */
async function setupCmsAuthenticationAndRedirect() {
  try {
    // Appelle votre fonction Appwrite pour récupérer le token CMS
    const response = await functions.createExecution(
      APPWRITE_FUNCTION_ID,
      JSON.stringify({ action: 'get-cms-auth' }), // données à envoyer à votre fonction
      false // asynchrone = false pour attendre la réponse
    );

    if (response.responseStatusCode !== 200) {
      throw new Error(`Erreur de la fonction: ${response.responseBody}`);
    }

    const cmsAuth = JSON.parse(response.responseBody);
    localStorage.setItem('sveltia-cms.user', JSON.stringify(cmsAuth));

    window.location.href = "/sveltia/";

  } catch (e) {
    console.error("Erreur lors de la configuration de l'authentification CMS :", e);
    errorMessage.textContent = "Impossible de configurer la connexion au CMS. Erreur : " + e.message;
    errorMessage.style.display = "block";
  }
}

/**
 * Gère la soumission du formulaire de connexion
 */
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  // Affiche le spinner et désactive le bouton
  loginSpinner.style.display = "inline-block";
  loginButton.disabled = true;
  errorMessage.style.display = "none";

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    // Tente de connecter l'utilisateur avec Appwrite
    const session = await account.createEmailPasswordSession(email, password);

    if (session) {
      // Si la connexion réussit, configure l'auth CMS et redirige
      await setupCmsAuthenticationAndRedirect();
    }
  } catch (error) {
    // En cas d'erreur de connexion, l'afficher
    console.error("Erreur de connexion:", error);
    errorMessage.textContent = "L'email ou le mot de passe est incorrect.";
    errorMessage.style.display = "block";

    // Cache le spinner et réactive le bouton en cas d'erreur
    loginSpinner.style.display = "none";
    loginButton.disabled = false;
  }
});

/**
 * Gère la déconnexion
 */
logoutButton.addEventListener("click", async () => {
  try {
    // Vide le local storage à la déconnexion
    localStorage.removeItem('sveltia-cms.user');

    // Déconnecte l'utilisateur d'Appwrite
    await account.deleteSession('current');

    // Recharge la page pour mettre à jour l'état
    location.reload();
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
    // Même en cas d'erreur, on recharge pour être sûr
    location.reload();
  }
});

/**
 * Vérifie l'état de connexion au chargement de la page
 */
async function checkAuthState() {
  try {
    // Récupère la session actuelle
    const user = await account.get();

    if (user) {
      // L'utilisateur est connecté
      loggedInState.style.display = "block";
      loggedOutState.style.display = "none";
      // Affiche l'email de l'utilisateur
      if (user.email) {
        userEmailDisplay.textContent = ` (${user.email})`;
      }
    }
  } catch (error) {
    // Aucune session active ou erreur
    loggedInState.style.display = "none";
    loggedOutState.style.display = "block";
    userEmailDisplay.textContent = "";
  }
}

// Vérifie l'état d'authentification au chargement de la page
document.addEventListener('DOMContentLoaded', checkAuthState);
