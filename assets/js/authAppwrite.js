import { getAppwriteClients, getAccount, getFunctions, getConfig, getLocalCmsUser, isAuthenticated, getUserEmail, clearAuthData, setAuthData, isEmailVerified, sendVerificationEmail, verifyEmail, getAuthenticationState } from './appwrite-client.js';

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
const userEncasGmx = document.getElementById("user-encas-gmx");
const welcomeUser = document.getElementById("welcome-user");
const headerLoggedOut = document.getElementById("header-logged-out");
const headerLoggedIn = document.getElementById("header-logged-in");
const emailNotVerifiedState = document.getElementById("email-not-verified");
const resendVerificationButton = document.getElementById("resend-verification");
const logoutButtonUnverified = document.getElementById("logout-button-unverified");

/**
 * Affiche un état de l'UI et masque les autres.
 * @param {string} state - L'état à afficher ('loading', 'loggedIn', 'loggedOut', 'emailNotVerified')
 */
function showUIState(state) {
  if (loadingState) loadingState.style.display = (state === 'loading') ? 'block' : 'none';
  const appWriteUserName = localStorage.getItem('appwrite-user-name');
  
  if (state === 'loggedIn') {
    if (loggedInState) loggedInState.style.display = 'block';
    if (loggedOutState) loggedOutState.style.display = 'none';
    if (loggedOutSections) loggedOutSections.style.display = 'none';
    if (emailNotVerifiedState) emailNotVerifiedState.style.display = 'none';
    if (headerLoggedOut) headerLoggedOut.style.display = 'none';
    if (headerLoggedIn) headerLoggedIn.style.display = 'block';

    if (userEncasGmx && appWriteUserName) {
      if (appWriteUserName === "encas-cookbook") {
        userEncasGmx.style.display = 'block';
      } else {
        welcomeUser.textContent = `Bienvenue ${appWriteUserName}`;
      }
    }
  } else if (state === 'loggedOut') {
    if (loggedInState) loggedInState.style.display = 'none';
    if (loggedOutState) loggedOutState.style.display = 'block';
    if (loggedOutSections) loggedOutSections.style.display = 'block';
    if (emailNotVerifiedState) emailNotVerifiedState.style.display = 'none';
    if (headerLoggedOut) headerLoggedOut.style.display = 'block';
    if (headerLoggedIn) headerLoggedIn.style.display = 'none';
  } else if (state === 'emailNotVerified') {
    if (loggedInState) loggedInState.style.display = 'none';
    if (loggedOutState) loggedOutState.style.display = 'none';
    if (loggedOutSections) loggedOutSections.style.display = 'none';
    if (emailNotVerifiedState) emailNotVerifiedState.style.display = 'block';
    if (headerLoggedOut) headerLoggedOut.style.display = 'none';
    if (headerLoggedIn) headerLoggedIn.style.display = 'none';
  }
}



/**
 * Configure l'authentification du CMS en appelant la fonction Appwrite.
 * Lève une exception en cas d'erreur.
 */
async function setupCmsAuthentication() {
  // console.log("🔄 [setupCmsAuthentication] Appel de la fonction Appwrite pour obtenir le token CMS...");

  try {
    // Vérifier d'abord si l'utilisateur a confirmé son email
    const account = await getAccount();
    const appwriteUser = await account.get();

    if (!appwriteUser.emailVerification) {
      console.warn("⚠️ [setupCmsAuthentication] Email non vérifié - impossible d'obtenir le token CMS");
      throw new Error("EMAIL_NOT_VERIFIED");
    }

    const functions = await getFunctions();
    const response = await functions.createExecution(
      APPWRITE_FUNCTION_ID,
      '', // Le corps de la requête est vide
      false
    );

    // console.log("🔍 [setupCmsAuthentication] Réponse reçue - Status:", response.responseStatusCode);
    // console.log("🔍 [setupCmsAuthentication] Corps de réponse:", response.responseBody);

    if (response.responseStatusCode !== 200) {
      let serverError = response.responseBody;
      try {
        const parsedBody = JSON.parse(response.responseBody);
        if (parsedBody.error) serverError = parsedBody.error;
      } catch (p_err) { /* ignore */ }
      console.error("❌ [setupCmsAuthentication] Erreur de la fonction:", serverError);
      throw new Error(`Erreur de la fonction (${response.responseStatusCode}): ${serverError}`);
    }

    const cmsAuth = JSON.parse(response.responseBody);
    // console.log("🔍 [setupCmsAuthentication] Token CMS parsé:", {
    //   hasToken: !!cmsAuth.token,
    //   tokenLength: cmsAuth.token ? cmsAuth.token.length : 0,
    //   hasId: !!cmsAuth.id,
    //   hasEmail: !!cmsAuth.email,
    //   backendName: cmsAuth.backendName
    // });

    localStorage.setItem('sveltia-cms.user', JSON.stringify(cmsAuth)); // Stocker directement le token CMS
    // console.log("✅ [setupCmsAuthentication] Authentification CMS stockée dans localStorage");

    return cmsAuth;
  } catch (error) {
    console.error("❌ [setupCmsAuthentication] Erreur lors de la configuration CMS:", error);
    throw error;
  }
}

/**
 * Logique principale exécutée au chargement de la page de connexion.
 */
 async function handleLoginPageLoad() {
     showUIState('loading');

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
         const isValidCmsUser = cmsUser &&
                              cmsUser.token &&
                              typeof cmsUser.token === 'string' &&
                              cmsUser.token.trim() !== '' &&
                              cmsUser.token !== '[]' &&
                              cmsUser.token !== 'undefined' &&
                              cmsUser.token !== 'null';

         // console.log("🔍 [handleLoginPageLoad] Token CMS valide:", isValidCmsUser);
         if (cmsUser) {
             // console.log("🔍 [handleLoginPageLoad] Token CMS details - token length:", cmsUser.token?.length, "id:", cmsUser.id);
         }

         // 3. Cas 1: Session Appwrite ET token CMS valide = utilisateur authentifié
         if (appwriteUser && isValidCmsUser) {
             // console.log("✅ [handleLoginPageLoad] Authentification complète - Appwrite + CMS");
             setAuthData(appwriteUser.email, appwriteUser.name, cmsUser);
             if (userEmailDisplay) userEmailDisplay.textContent = ` (${appwriteUser.email})`;
             showUIState('loggedIn');
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
                 const isNewCmsUserValid = newCmsUser &&
                                         newCmsUser.token &&
                                         typeof newCmsUser.token === 'string' &&
                                         newCmsUser.token.trim() !== '' &&
                                         newCmsUser.token !== '[]';

                 if (isNewCmsUserValid) {
                     // console.log("✅ [handleLoginPageLoad] Token CMS récupéré avec succès");
                     setAuthData(appwriteUser.email, appwriteUser.name, newCmsUser);
                     if (userEmailDisplay) userEmailDisplay.textContent = ` (${appwriteUser.email})`;
                     showUIState('loggedIn');
                     return;
                 } else {
                     console.error("❌ [handleLoginPageLoad] Échec de récupération du token CMS");
                     throw new Error("Impossible de récupérer le token CMS");
                 }
             } catch (error) {
                 console.error("❌ [handleLoginPageLoad] Erreur lors de la récupération du token CMS:", error);

                 // Gestion spécifique de l'erreur "email non vérifié"
                 if (error.message === "EMAIL_NOT_VERIFIED") {
                     console.warn("⚠️ [handleLoginPageLoad] Email non vérifié - affichage du message approprié");
                     // Ne pas nettoyer la session, l'utilisateur doit pouvoir vérifier son email
                     showUIState('emailNotVerified'); // Utiliser le nouvel état spécifique
                     return;
                 }

                 // Nettoyer la session Appwrite défaillante pour les autres erreurs
                 try {
                     await account.deleteSession('current');
                 } catch (cleanupError) {
                     console.warn("Erreur lors du nettoyage de la session Appwrite:", cleanupError);
                 }
                 clearAuthData();
                 showUIState('loggedOut');
                 return;
             }
         }

         // 5. Cas 3: Token CMS valide MAIS pas de session Appwrite
         // → Le token CMS seul ne suffit pas, nettoyer
         if (!appwriteUser && isValidCmsUser) {
             // console.log("⚠️ [handleLoginPageLoad] Token CMS valide mais pas de session Appwrite - nettoyage");
             clearAuthData();
             showUIState('loggedOut');
             return;
         }

         // 6. Cas 4: Ni session Appwrite ni token CMS valide
         // console.log("ℹ️ [handleLoginPageLoad] Aucune authentification trouvée - affichage du formulaire");
         clearAuthData(); // Nettoyer au cas où
         showUIState('loggedOut');

     } catch (error) {
         console.error("❌ ERREUR CRITIQUE [handleLoginPageLoad]:", error.message);
         clearAuthData();
         showUIState('loggedOut');
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
             // console.log("🔄 [Connexion] Début de la connexion pour:", email);

             // 1. Connexion Appwrite
             const account = await getAccount();
             await account.createEmailPasswordSession(email, password);
             // console.log("✅ [Connexion] Session Appwrite créée avec succès");
             
             // 1.1 Vérifier immédiatement si l'email est vérifié
             const appwriteUser = await account.get();
             if (!appwriteUser.emailVerification) {
                 console.warn("⚠️ [Connexion] Email non vérifié lors de la connexion");
                 if (loginSpinner) loginSpinner.style.display = "none";
                 if (loginButton) loginButton.disabled = false;
                 // Ne pas nettoyer la session, l'utilisateur doit pouvoir vérifier son email
                 showUIState('emailNotVerified');
                 return;
             }

             // 2. Les détails utilisateur sont déjà récupérés ci-dessus
             // console.log("✅ [Connexion] Détails utilisateur récupérés:", appwriteUser.email);

             // 3. LANCER LA FONCTION DISTANTE POUR CRÉER LE TOKEN CMS
             // console.log("🔄 [Connexion] Récupération du token CMS...");
             await setupCmsAuthentication();

             // 4. Vérifier que le token CMS a bien été créé
             const cmsUser = getLocalCmsUser();
             // console.log("🔍 [Connexion] Token CMS reçu:", cmsUser);

             const isValidCmsUser = cmsUser &&
                                  cmsUser.token &&
                                  typeof cmsUser.token === 'string' &&
                                  cmsUser.token.trim() !== '' &&
                                  cmsUser.token !== '[]' &&
                                  cmsUser.token !== 'undefined' &&
                                  cmsUser.token !== 'null';

             if (!isValidCmsUser) {
                 console.error("❌ [Connexion] Token CMS invalide:", {
                     exists: !!cmsUser,
                     hasToken: !!(cmsUser && cmsUser.token),
                     tokenType: typeof (cmsUser && cmsUser.token),
                     tokenLength: cmsUser && cmsUser.token ? cmsUser.token.length : 0,
                     tokenValue: cmsUser && cmsUser.token ? cmsUser.token.substring(0, 20) + '...' : 'N/A'
                 });
                 throw new Error("Le token CMS n'a pas été créé correctement");
             }

             // console.log("✅ [Connexion] Token CMS valide - longueur:", cmsUser.token.length);

             // 5. Configurer les données d'authentification finales
             setAuthData(appwriteUser.email, appwriteUser.name, cmsUser);

             // 6. Mettre à jour l'interface
             if (userEmailDisplay) userEmailDisplay.textContent = ` (${appwriteUser.email})`;
             // console.log("✅ [Connexion] Connexion terminée avec succès");
             showUIState('loggedIn');

         } catch (error) {
             console.error("❌ [Connexion] Erreur lors de la connexion:", error);

             // Gestion spécifique de l'erreur "email non vérifié"
             if (error.message === "EMAIL_NOT_VERIFIED") {
                 console.warn("⚠️ [Connexion] Email non vérifié - affichage de l'état approprié");
                 if (loginSpinner) loginSpinner.style.display = "none";
                 if (loginButton) loginButton.disabled = false;
                 // Ne pas nettoyer la session, l'utilisateur doit pouvoir vérifier son email
                 showUIState('emailNotVerified');
                 return;
             }

             // Gestion des erreurs Appwrite spécifiques lors de la création de session
             if (error.code === 401 && error.type === 'user_email_not_confirmed') {
                 console.warn("⚠️ [Connexion] Email non confirmé selon Appwrite");
                 if (loginSpinner) loginSpinner.style.display = "none";
                 if (loginButton) loginButton.disabled = false;
                 showUIState('emailNotVerified');
                 return;
             }

             // Nettoyage en cas d'échec pour les autres erreurs
             try {
                 const account = await getAccount();
                 await account.deleteSession('current');
                 // console.log("🧹 [Connexion] Session Appwrite nettoyée");
             } catch (cleanupError) {
                 console.warn("⚠️ [Connexion] Nettoyage session échoué:", cleanupError.message);
             }

             clearAuthData();

             // Message d'erreur utilisateur
             let errorMsg = "Une erreur est survenue. Veuillez réessayer.";
             if (error.type === 'user_invalid_credentials') {
                 errorMsg = "L'email ou le mot de passe est incorrect.";
             } else if (error.code === 429) {
                 errorMsg = "Trop de tentatives de connexion. Veuillez réessayer plus tard.";
             } else if (error.message && error.message.includes("Erreur de la fonction")) {
                 errorMsg = "La configuration de l'accès a échoué. Veuillez contacter un administrateur.";
             } else if (error.message && error.message.includes("token CMS")) {
                 errorMsg = "Erreur lors de la création du token d'accès. Veuillez contacter un administrateur.";
             }

             if (errorMessage) {
                 errorMessage.textContent = errorMsg;
                 errorMessage.style.display = "block";
             }
             if (loginSpinner) loginSpinner.style.display = "none";
             if (loginButton) loginButton.disabled = false;
             showUIState('loggedOut');
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

// --- GESTION DU RENVOI D'EMAIL DE VÉRIFICATION ---

if (resendVerificationButton) {
  resendVerificationButton.addEventListener('click', async (event) => {
    event.preventDefault();
    
    // UI: Démarrage du processus
    resendVerificationButton.disabled = true;
    resendVerificationButton.textContent = 'Envoi en cours...';
    
    try {
      const verificationURL = `${window.location.origin}/verify-email`;
      await sendVerificationEmail(verificationURL);
      
      // Succès
      resendVerificationButton.textContent = 'Email envoyé !';
      resendVerificationButton.className = 'btn btn-success';
      
      // Revert after 3 seconds
      setTimeout(() => {
        resendVerificationButton.textContent = 'renvoyer l\'email de vérification';
        resendVerificationButton.className = 'alert-link';
        resendVerificationButton.disabled = false;
      }, 3000);
      
    } catch (error) {
      console.error('Erreur lors du renvoi d\'email de vérification:', error);
      resendVerificationButton.textContent = 'Erreur - Réessayer';
      resendVerificationButton.className = 'btn btn-danger btn-sm';
      
      // Revert after 3 seconds
      setTimeout(() => {
        resendVerificationButton.textContent = 'renvoyer l\'email de vérification';
        resendVerificationButton.className = 'alert-link';
        resendVerificationButton.disabled = false;
      }, 3000);
    }
  });
}

// --- GESTION DU BOUTON DÉCONNEXION (état email non vérifié) ---

if (logoutButtonUnverified) {
  logoutButtonUnverified.addEventListener('click', async () => {
    showUIState('loading');
    try {
      clearAuthData();
      const account = await getAccount();
      await account.deleteSession('current');
    } catch (error) {
      console.warn("Erreur lors de la déconnexion Appwrite:", error);
    } finally {
      showUIState('loggedOut');
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
  }, 50); // Augmenter légèrement le délai pour s'assurer que tout est chargé
});
