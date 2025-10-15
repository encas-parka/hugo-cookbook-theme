
// Chargé par /login

import {
  getAccount,
  getFunctions,
  getConfig,
  getLocalCmsUser,
  clearAuthData,
  setAuthData,
  isEmailVerified,
  sendVerificationEmail,
  verifyEmail,
} from "./appwrite-client.js";

// Récupération de la configuration
const { APPWRITE_FUNCTION_ID, ACCESS_REQUEST_FUNCTION_ID } = getConfig();

// Extraire le paramètre de redirection de l'URL
function getRedirectUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const redirectParam = urlParams.get('redirect');

  if (redirectParam) {
    // Valider que l'URL est relative pour éviter les redirections malveillantes
    if (redirectParam.startsWith('/') && !redirectParam.startsWith('//')) {
      return redirectParam;
    }
  }

  return null;
}

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
const userEncasGmx = document.getElementById("user-encas-gmx");
const welcomeUser = document.getElementById("welcome-user");
const headerLoggedOut = document.getElementById("header-logged-out");
const headerLoggedIn = document.getElementById("header-logged-in");
const emailNotVerifiedState = document.getElementById("email-not-verified");
const resendVerificationButton = document.getElementById(
  "resend-verification",
);
const logoutButtonUnverified = document.getElementById(
  "logout-button-unverified",
);
const infoMessage = document.getElementById("info-message");
const userEmailToVerify = document.getElementById("user-email-to-verify");

const formEmailPwd = document.getElementById("email-pwd-login");
const formPasswordForgotten = document.getElementById("password-forgotten");
const forgotPasswordButton = document.getElementById('forgot-password-button');
const passwordForgottenForm = document.getElementById('password-forgotten-form');
const submitPasswordForgottenButton = document.getElementById('submit-password-forgotten');
const submitPasswordForgottenSpinner = submitPasswordForgottenButton?.querySelector('.spinner-border');



/**
 * Affiche un état de l'UI et masque les autres.
 * @param {string} state - L'état à afficher ('loading', 'loggedIn', 'loggedOut', 'emailNotVerified', 'forgotPassword')
 * @param {string} message - Message optionnel à afficher dans la bannière d'erreur/info.
 */
function showUIState(state, message = '') {
  // Masquer toutes les sections principales d'abord
  if (loadingState) loadingState.style.display = 'none';
  if (loggedInState) loggedInState.style.display = 'none';
  if (loggedOutState) loggedOutState.style.display = 'none';
  if (emailNotVerifiedState) emailNotVerifiedState.style.display = 'none';
  if (loggedOutSections) loggedOutSections.style.display = 'none';
  if (formEmailPwd) formEmailPwd.style.display = 'none';
  if (formPasswordForgotten) formPasswordForgotten.style.display = 'none';

  // Afficher les sections en fonction de l'état
  switch (state) {
    case 'loading':
      if (loadingState) loadingState.style.display = 'block';
      break;
    case 'loggedIn':
      if (loggedInState) loggedInState.style.display = 'block';
      if (headerLoggedIn) headerLoggedIn.style.display = 'flex';
      if (headerLoggedOut) headerLoggedOut.style.display = 'none';
      const appWriteUserName = localStorage.getItem("appwrite-user-name");
      if (userEncasGmx && appWriteUserName === "encas-cookbook") {
        userEncasGmx.style.display = "block";
      } else if (welcomeUser && appWriteUserName) {
        welcomeUser.textContent = `Bienvenue ${appWriteUserName}`;
      }
      break;
    case 'loggedOut':
      if (loggedOutState) loggedOutState.style.display = 'block';
      if (loggedOutSections) loggedOutSections.style.display = 'flex';
      if (formEmailPwd) formEmailPwd.style.display = 'block';
      if (headerLoggedOut) headerLoggedOut.style.display = 'flex';
      if (headerLoggedIn) headerLoggedIn.style.display = 'none';
      break;
    case 'emailNotVerified':
      if (emailNotVerifiedState) emailNotVerifiedState.style.display = 'block';
      if (loggedOutSections) loggedOutSections.style.display = 'flex';
      if (headerLoggedOut) headerLoggedOut.style.display = 'flex';
      if (headerLoggedIn) headerLoggedIn.style.display = 'none';
      break;
    case 'forgotPassword':
      if (loggedOutState) loggedOutState.style.display = 'block';
      if (loggedOutSections) loggedOutSections.style.display = 'flex';
      if (formPasswordForgotten) formPasswordForgotten.style.display = 'block';
      if (headerLoggedOut) headerLoggedOut.style.display = 'flex';
      if (headerLoggedIn) headerLoggedIn.style.display = 'none';
      break;
  }

  // Afficher le message d'erreur si fourni
  if (errorMessage && message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  } else if (errorMessage) {
    errorMessage.style.display = 'none';
  }

  // Gérer le message d'information pour l'état emailNotVerified
  if (infoMessage) {
    if (state === 'emailNotVerified' && message && message.includes('succès')) {
      infoMessage.textContent = message;
      infoMessage.style.display = 'block';
    } else {
      infoMessage.style.display = 'none';
    }
  }
}

/**
 * Gère la soumission du formulaire de mot de passe oublié.
 * Envoie un email de récupération de mot de passe via Appwrite.
 * @param {Event} event - L'événement de soumission du formulaire.
 */
async function handlePasswordForgottenSubmit(event) {
  event.preventDefault();
  console.log('[AuthAppwrite] Soumission du formulaire de mot de passe oublié');

  const emailInput = document.getElementById('email'); // L'ID de l'input email dans le formulaire "password-forgotten-form"
  const email = emailInput ? emailInput.value : '';

  if (!email) {
    showUIState('forgotPassword', 'Veuillez entrer votre adresse email.');
    return;
  }

  if (submitPasswordForgottenButton) submitPasswordForgottenButton.disabled = true;
  if (submitPasswordForgottenSpinner) submitPasswordForgottenSpinner.style.display = 'inline-block';
  if (errorMessage) errorMessage.style.display = 'none';

  try {
    const account = await getAccount();
    // L'URL de redirection est l'URL où Appwrite redirigera l'utilisateur après qu'il ait cliqué sur le lien dans l'email.
    // Cette page (e.g., /reset-password) sera responsable de finaliser la réinitialisation avec updateRecovery.
    const resetURL = `${window.location.origin}/reset-password`;
    await account.createRecovery(email, resetURL);
    console.log('[AuthAppwrite] Email de réinitialisation de mot de passe envoyé.');
    showUIState('loggedOut', 'Un email de réinitialisation de mot de passe a été envoyé à votre adresse. Veuillez vérifier votre boîte de réception.');
  } catch (error) {
    console.error('[AuthAppwrite] Erreur lors de l\'envoi de l\'email de réinitialisation:', error);
    let userMessage = 'Une erreur est survenue lors de l\'envoi de l\'email de réinitialisation.';
    if (error.response && error.response.code === 404) {
      userMessage = 'Aucun compte n\'est associé à cette adresse email.';
    }
    showUIState('forgotPassword', userMessage);
  } finally {
    if (submitPasswordForgottenButton) submitPasswordForgottenButton.disabled = false;
    if (submitPasswordForgottenSpinner) submitPasswordForgottenSpinner.style.display = 'none';
  }
}

/**
 * Gère la navigation vers le formulaire de mot de passe oublié.
 */
function handleForgotPasswordClick(e) {
  e.preventDefault();
  showUIState('forgotPassword');
}

/**
 * Gère le processus d'authentification CMS après une connexion Appwrite réussie.
 * Appelle la fonction Appwrite 'cms-auth-function' pour obtenir un token CMS.
 */
async function setupCmsAuthentication() {
  const account = await getAccount();
  const functions = await getFunctions();

  try {
    const user = await account.get();
    // console.log("✅ [setupCmsAuthentication] Utilisateur Appwrite récupéré:", user.email);

    if (!user.emailVerification) {
      // console.warn("⚠️ [setupCmsAuthentication] Email non vérifié pour:", user.email);
      throw new Error("EMAIL_NOT_VERIFIED");
    }

    const payload = JSON.stringify({ email: user.email });
    // console.log("🔄 [setupCmsAuthentication] Appel de la fonction cms-auth avec payload:", payload);

    const result = await functions.createExecution(
      APPWRITE_FUNCTION_ID,
      payload,
      false, // Pas de lecture
      `/cms-auth/${user.email}`,
      "POST",
    );

    // console.log("✅ [setupCmsAuthentication] Exécution de la fonction Appwrite réussie:", result);

    const responseData = JSON.parse(result.responseBody);
    // console.log("🔍 [setupCmsAuthentication] Réponse de la fonction CMS:", responseData);

    if (responseData && responseData.token) {
      const cmsAuth = {
        token: responseData.token,
        id: responseData.user_id, // Ou l'ID retourné par la fonction
        email: user.email,
        name: user.name,
        backendName: "appwrite",
      };
      setAuthData(user.email, user.name, cmsAuth);
      return cmsAuth;
    } else {
      console.error(
        "❌ [setupCmsAuthentication] Réponse de la fonction CMS invalide:",
        responseData,
      );
      throw new Error("Token CMS manquant dans la réponse de la fonction.");
    }
  } catch (error) {
    console.error(
      "❌ [setupCmsAuthentication] Erreur dans setupCmsAuthentication:",
      error,
    );
    throw error;
  }
}

/**
 * Gère la logique de la page de connexion au chargement.
 * Vérifie l'état d'authentification et met à jour l'UI en conséquence.
 */
async function handleLoginPageLoad() {
  showUIState("loading");

  try {
    if (!window.Appwrite) {
      console.error("❌ [handleLoginPageLoad] SDK Appwrite non disponible !");
      throw new Error("SDK Appwrite non chargé");
    }
    // console.log("✅ [handleLoginPageLoad] SDK Appwrite disponible");

    const account = await getAccount();
    const cmsUser = getLocalCmsUser();
    let appwriteUser = null;

    // Debug: Afficher l'état du token CMS
    // console.log("🔍 [handleLoginPageLoad] Token CMS brut:", cmsUser);

    // 1. Tenter de récupérer la session Appwrite active
    try {
      appwriteUser = await account.get();
      // console.log("✅ [handleLoginPageLoad] Session Appwrite trouvée:", appwriteUser.email);
    } catch (e) {
      // console.log("ℹ️ [handleLoginPageLoad] Pas de session Appwrite active:", e.message);
    }

    // 2. Vérifier si le token CMS est valide (validation plus permissive)
    const isValidCmsUser =
      cmsUser &&
      cmsUser.token &&
      typeof cmsUser.token === "string" &&
      cmsUser.token.trim() !== "" &&
      cmsUser.token !== "[]" &&
      cmsUser.token !== "undefined" &&
      cmsUser.token !== "null";

    // console.log("🔍 [handleLoginPageLoad] Token CMS valide:", isValidCmsUser);
    if (cmsUser) {
      // console.log("🔍 [handleLoginPageLoad] Token CMS details - token length:", cmsUser.token?.length, "id:", cmsUser.id);
    }

    // 3. Cas 1: Session Appwrite ET token CMS valide = utilisateur authentifié
    if (appwriteUser && isValidCmsUser) {
      // console.log("✅ [handleLoginPageLoad] Authentification complète - Appwrite + CMS");
      setAuthData(appwriteUser.email, appwriteUser.name, cmsUser);
      if (userEmailDisplay)
        userEmailDisplay.textContent = ` (${appwriteUser.email})`;
      showUIState("loggedIn");

      // Rediriger si nécessaire
      const redirectUrl = getRedirectUrl();
      if (redirectUrl) {
        console.log("[AuthAppwrite] Utilisateur déjà authentifié, redirection vers:", redirectUrl);
        window.location.href = redirectUrl;
      }
      return;
    }

    // 4. Cas 2: Session Appwrite valide MAIS pas de token CMS (ou invalide)
    // → Tenter de récupérer un nouveau token CMS
    if (appwriteUser && !isValidCmsUser) {
      // console.log("⚠️ [handleLoginPageLoad] Session Appwrite OK mais token CMS manquant/invalide");
      try {
        // console.log("🔄 [handleLoginPageLoad] Tentative de récupération du token CMS...");
        await setupCmsAuthentication();
        const newCmsUser = getLocalCmsUser();
        const isNewCmsUserValid =
          newCmsUser &&
          newCmsUser.token &&
          typeof newCmsUser.token === "string" &&
          newCmsUser.token.trim() !== "" &&
          newCmsUser.token !== "[]";

        if (isNewCmsUserValid) {
          // console.log("✅ [handleLoginPageLoad] Token CMS récupéré avec succès");
          setAuthData(appwriteUser.email, appwriteUser.name, newCmsUser);
          if (userEmailDisplay)
            userEmailDisplay.textContent = ` (${appwriteUser.email})`;
          showUIState("loggedIn");

          // Rediriger si nécessaire
          const redirectUrl = getRedirectUrl();
          if (redirectUrl) {
            console.log("[AuthAppwrite] Token CMS récupéré, redirection vers:", redirectUrl);
            window.location.href = redirectUrl;
          }
          return;
        } else {
          console.error(
            "❌ [handleLoginPageLoad] Échec de récupération du token CMS",
          );
          throw new Error("Impossible de récupérer le token CMS");
        }
      } catch (error) {
        console.error(
          "❌ [handleLoginPageLoad] Erreur lors de la récupération du tokpen CMS:",
          error,
        );

        // Gestion spécifique de l'erreur "email non vérifié"
        if (error.message === "EMAIL_NOT_VERIFIED") {
          console.warn(
            "⚠️ [handleLoginPageLoad] Email non vérifié - affichage du message approprié",
          );
          // Afficher l'email de l'utilisateur à vérifier
          if (userEmailToVerify && appwriteUser) {
            userEmailToVerify.textContent = appwriteUser.email;
          }
          // Ne pas nettoyer la session, l'utilisateur doit pouvoir pouvoir vérifier son email
          showUIState("emailNotVerified"); // Utiliser le nouvel état spécifique
          return;
        }

        // Nettoyer la session Appwrite défaillante pour les autres erreurs
        try {
          await account.deleteSession("current");
        } catch (cleanupError) {
          console.warn(
            "Erreur lors du nettoyage de la session Appwrite:",
            cleanupError,
          );
        }
        clearAuthData();
        showUIState("loggedOut");
        return;
      }
    }

    // 5. Cas 3: Token CMS valide MAIS pas de session Appwrite
    // → Le token CMS seul ne suffit pas, nettoyer
    if (!appwriteUser && isValidCmsUser) {
      // console.log("⚠️ [handleLoginPageLoad] Token CMS valide mais pas de session Appwrite - nettoyage");
      clearAuthData();
      showUIState("loggedOut");
      return;
    }

    // 6. Cas 4: Ni session Appwrite ni token CMS valide
    // console.log("ℹ️ [handleLoginPageLoad] Aucune authentification trouvée - affichage du formulaire");
    clearAuthData(); // Nettoyer au cas où
    showUIState("loggedOut");
  } catch (error) {
    console.error("❌ ERREUR CRITIQUE [handleLoginPageLoad]:", error.message);
    clearAuthData();
    showUIState("loggedOut");
  }
}

/**
 * Gère la soumission du formulaire de connexion.
 * Crée une session Appwrite et tente de récupérer un token CMS.
 * @param {Event} event - L'événement de soumission du formulaire.
 */
async function handleLoginSubmit(event) {
  event.preventDefault();
  if (loginButton) loginButton.disabled = true;
  if (loginSpinner) loginSpinner.style.display = "inline-block";
  if (errorMessage) errorMessage.style.display = "none";

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const account = await getAccount();
    const session = await account.createEmailPasswordSession(email, password);
    // console.log("✅ [handleLoginSubmit] Session Appwrite créée:", session);

    // Tenter de récupérer le token CMS
    await setupCmsAuthentication();

    const cmsUser = getLocalCmsUser();
    if (cmsUser) {
      // console.log("✅ [handleLoginSubmit] Authentification CMS réussie après login.");
      setAuthData(email, session.providerUid, cmsUser); // Utiliser providerUid comme nom temporaire si le nom n'est pas disponible
      handleRedirect(); // Rediriger ou recharger la page
    } else {
      console.error(
        "❌ [handleLoginSubmit] Impossible de récupérer le token CMS après la connexion.",
      );
      throw new Error("Impossible de récupérer le token CMS.");
    }
  } catch (error) {
    console.error("❌ [handleLoginSubmit] Erreur de connexion:", error);
    let userMessage = "Échec de la connexion. Veuillez vérifier vos identifiants.";

    if (error.code === 401 || error.code === 400) {
      userMessage = "Email ou mot de passe incorrect.";
    } else if (error.message === "EMAIL_NOT_VERIFIED") {
      userMessage = "Votre email n'est pas vérifié. Veuillez vérifier votre boîte de réception ou cliquer sur 'Renvoyer l'email'.";
      showUIState("emailNotVerified", userMessage);
      return;
    } else if (error.message.includes("Account with the given email already exists")) {
        userMessage = "Un compte avec cet email existe déjà.";
    }

    showUIState("loggedOut", userMessage); // Afficher l'état déconnecté avec un message d'erreur
  } finally {
    if (loginButton) loginButton.disabled = false;
    if (loginSpinner) loginSpinner.style.display = "none";
  }
}

/**
 * Redirige l'utilisateur vers l'URL spécifiée dans le paramètre redirect, ou rechargera la page.
 */
function handleRedirect() {
  const redirectUrl = getRedirectUrl();
  if (redirectUrl) {
    window.location.href = redirectUrl;
  } else {
    window.location.reload();
  }
}

/**
 * Gère la déconnexion de l'utilisateur.
 * Supprime la session Appwrite et nettoie les données locales.
 */
async function handleLogout() {
  clearAuthData(); // Nettoyer les données locales immédiatement
  try {
    const account = await getAccount();
    await account.deleteSession("current");
    console.log("✅ [handleLogout] Déconnexion Appwrite réussie.");
  } catch (error) {
    console.warn(
      "⚠️ [handleLogout] Erreur lors de la déconnexion Appwrite (peut-être déjà déconnecté):",
      error,
    );
  } finally {
    window.location.reload(); // Recharger la page pour afficher l'état déconnecté
  }
}

/**
 * Gère le renvoi de l'email de vérification.
 */
async function handleResendVerification() {
  if (resendVerificationButton) resendVerificationButton.disabled = true;

  // Récupérer le spinner existant dans le bouton
  const resendSpinner = resendVerificationButton?.querySelector('.spinner-border');
  if (resendSpinner) resendSpinner.style.display = 'inline-block';

  try {
    await sendVerificationEmail();
    showUIState("emailNotVerified", "Email de vérification renvoyé avec succès ! Veuillez vérifier votre boîte de réception.");
  } catch (error) {
    console.error("❌ [handleResendVerification] Erreur lors du renvoi de l'email de vérification:", error);
    showUIState("emailNotVerified", "Erreur lors du renvoi de l'email de vérification. Veuillez réessayer plus tard.");
  } finally {
    if (resendVerificationButton) resendVerificationButton.disabled = false;
    // Masquer le spinner
    if (resendSpinner) resendSpinner.style.display = 'none';
  }
}

// Fonction pour gérer l'envoi de la demande d'accès
async function handleAccessRequest(event) {
  event.preventDefault();
  const form = event.target;
  const submitButton = form.querySelector('#Form-submit');
  const submitSpinner = submitButton.querySelector('.spinner-border');
  const emailInput = form.querySelector('#contact-form-email');
  const messageInput = form.querySelector('#contact-form-message');
  const formFeedback = document.getElementById('form-feedback');

  if (submitButton) submitButton.disabled = true;
  if (submitSpinner) submitSpinner.style.display = 'inline-block';
  if (formFeedback) {
    formFeedback.style.display = 'none';
    formFeedback.className = 'mb-3'; // Réinitialiser les classes
  }

  const email = emailInput.value;
  const message = messageInput.value;

  if (!email || !message) {
    if (formFeedback) {
      formFeedback.textContent = 'Veuillez remplir tous les champs.';
      formFeedback.classList.add('alert', 'alert-danger');
      formFeedback.style.display = 'block';
    }
    if (submitButton) submitButton.disabled = false;
    if (submitSpinner) submitSpinner.style.display = 'none';
    return;
  }

  try {
    const functions = await getFunctions();
    const payload = JSON.stringify({ email, message });
    console.log("[AccessRequest] Appel de la fonction de demande d'accès avec payload:", payload);

    const result = await functions.createExecution(
      ACCESS_REQUEST_FUNCTION_ID,
      payload,
      false, // Ne pas lire
      `/access-request/${email}`,
      "POST",
    );

    console.log("[AccessRequest] Exécution de la fonction Appwrite réussie:", result);

    if (result.statusCode === 200) {
      if (formFeedback) {
        formFeedback.textContent = 'Votre demande d\'accès a été envoyée avec succès ! Nous vous recontacterons bientôt.';
        formFeedback.classList.add('alert', 'alert-success');
        formFeedback.style.display = 'block';
      }
      form.reset();
    } else {
      const errorData = JSON.parse(result.responseBody);
      throw new Error(errorData.message || `Erreur Appwrite: ${result.statusCode}`);
    }
  } catch (error) {
    console.error('[AccessRequest] Erreur lors de l\'envoi de la demande d\'accès:', error);
    if (formFeedback) {
      formFeedback.textContent = `Erreur : ${error.message || 'Une erreur est survenue lors de l\'envoi de votre demande.'}`;
      formFeedback.classList.add('alert', 'alert-danger');
      formFeedback.style.display = 'block';
    }
  } finally {
    if (submitButton) submitButton.disabled = false;
    if (submitSpinner) submitSpinner.style.display = 'none';
  }
}


// Attacher les écouteurs d'événements une fois que le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
  handleLoginPageLoad();

  if (loginForm) {
    loginForm.addEventListener("submit", handleLoginSubmit);
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", handleLogout);
  }

  if (logoutButtonUnverified) {
    logoutButtonUnverified.addEventListener("click", handleLogout);
  }

  if (resendVerificationButton) {
    resendVerificationButton.addEventListener("click", handleResendVerification);
  }

  if (forgotPasswordButton) {
    forgotPasswordButton.addEventListener('click', handleForgotPasswordClick);
  }

  if (passwordForgottenForm) {
    passwordForgottenForm.addEventListener('submit', handlePasswordForgottenSubmit);
  }

  const accessRequestForm = document.getElementById('access-request-form');
  if (accessRequestForm) {
    accessRequestForm.addEventListener('submit', handleAccessRequest);
  }
});
