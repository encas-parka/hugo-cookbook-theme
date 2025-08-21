// hugo-cookbook-theme/assets/js/appwrite-client.js
// Module commun pour l'initialisation et la gestion du client Appwrite
// Évite la duplication d'initialisation entre auth-status.js et authAppwrite.js

// --- CONFIGURATION APPWRITE ---
const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "689725820024e81781b7";
const APPWRITE_FUNCTION_ID = "68976500002eb5c6ee4f"; // ID de la fonction cms-auth-function
const ACCESS_REQUEST_FUNCTION_ID = "689cdea5001a4d74549d"; // ID de la fonction d'envoi d'email

// Variables globales pour les clients Appwrite (initialisées une seule fois)
let client = null;
let account = null;
let functions = null;
let initializationPromise = null;

/**
 * Attend que le SDK Appwrite soit chargé et initialise les clients
 * @returns {Promise} Promise qui se résout quand l'initialisation est terminée
 */
function waitForAppwrite(maxAttempts = 50, interval = 100) {
    return new Promise((resolve, reject) => {
        let attempts = 0;

        function checkAppwrite() {
            attempts++;
            // console.log(`[Appwrite Client] Vérification SDK - tentative ${attempts}/${maxAttempts}`);

            if (window.Appwrite && window.Appwrite.Client && window.Appwrite.Account) {
                // console.log("[Appwrite Client] SDK Appwrite chargé avec succès");
                resolve();
            } else if (attempts >= maxAttempts) {
                console.error("[Appwrite Client] SDK Appwrite non chargé après le nombre maximum de tentatives");
                reject(new Error("Le SDK Appwrite n'a pas pu être chargé."));
            } else {
                setTimeout(checkAppwrite, interval);
            }
        }

        checkAppwrite();
    });
}

/**
 * Initialise les clients Appwrite (une seule fois)
 * @returns {Promise<{client, account, functions}>} Les clients initialisés
 */
async function initializeAppwrite() {
    // Si déjà initialisé, retourner les clients existants
    if (client && account && functions) {
        // console.log("[Appwrite Client] Clients déjà initialisés, réutilisation");
        return { client, account, functions };
    }

    // Si une initialisation est en cours, attendre qu'elle se termine
    if (initializationPromise) {
        // console.log("[Appwrite Client] Initialisation en cours, attente...");
        return initializationPromise;
    }

    // Commencer une nouvelle initialisation
    initializationPromise = (async () => {
        try {
            // console.log("[Appwrite Client] Début de l'initialisation");

            // Attendre que le SDK soit chargé
            await waitForAppwrite();

            // Initialiser les clients
            const { Client, Account, Functions } = window.Appwrite;

            client = new Client()
                .setEndpoint(APPWRITE_ENDPOINT)
                .setProject(APPWRITE_PROJECT_ID);

            account = new Account(client);
            functions = new Functions(client);

            // console.log("[Appwrite Client] Initialisation terminée avec succès");

            return { client, account, functions };
        } catch (error) {
            console.error("[Appwrite Client] Erreur lors de l'initialisation:", error);
            // Réinitialiser les variables en cas d'erreur
            client = null;
            account = null;
            functions = null;
            initializationPromise = null;
            throw error;
        }
    })();

    return initializationPromise;
}

/**
 * Récupère les clients Appwrite initialisés
 * @returns {Promise<{client, account, functions}>} Les clients Appwrite
 */
async function getAppwriteClients() {
    return await initializeAppwrite();
}

/**
 * Récupère uniquement le client Account
 * @returns {Promise<Account>} Le client Account
 */
async function getAccount() {
    const { account } = await initializeAppwrite();
    return account;
}

/**
 * Récupère uniquement le client Functions
 * @returns {Promise<Functions>} Le client Functions
 */
async function getFunctions() {
    const { functions } = await initializeAppwrite();
    return functions;
}

/**
 * Récupère uniquement le client Teams
 * @returns {Promise<Teams>} Le client Teams
 */
async function getTeams() {
    const { Client, Teams } = window.Appwrite;
    if (!client) {
        await initializeAppwrite();
    }
    const teams = new Teams(client);
    return teams;
}

/**
 * Récupère les constantes de configuration
 * @returns {Object} Configuration Appwrite
 */
function getConfig() {
    return {
        APPWRITE_ENDPOINT,
        APPWRITE_PROJECT_ID,
        APPWRITE_FUNCTION_ID,
        ACCESS_REQUEST_FUNCTION_ID
    };
}

/**
 * Vérifie si les clients sont déjà initialisés
 * @returns {boolean} True si les clients sont initialisés
 */
function isInitialized() {
    return !!(client && account && functions);
}

/**
 * Vérifie l'authentification CMS locale (source de vérité principale)
 * @returns {object|null} L'objet utilisateur s'il est valide, sinon null
 */
function getLocalCmsUser() {
    const cmsUser = localStorage.getItem('sveltia-cms.user');
    // console.log('🔍 [getLocalCmsUser] Token brut depuis localStorage:', cmsUser);

    if (!cmsUser) {
        // console.log('ℹ️ [getLocalCmsUser] Aucun token CMS dans localStorage');
        return null;
    }

    try {
        const parsedUser = JSON.parse(cmsUser);
        // console.log('🔍 [getLocalCmsUser] Token parsé:', {
        //     hasToken: !!parsedUser.token,
        //     tokenType: typeof parsedUser.token,
        //     tokenLength: parsedUser.token ? parsedUser.token.length : 0,
        //     tokenPreview: parsedUser.token ? parsedUser.token.substring(0, 20) + '...' : 'N/A',
        //     hasId: !!parsedUser.id,
        //     hasEmail: !!parsedUser.email,
        //     backendName: parsedUser.backendName
        // });

        if (parsedUser.token && typeof parsedUser.token === 'string' && parsedUser.token.trim() !== '') {
            // console.log('✅ [getLocalCmsUser] Token CMS valide');
            return parsedUser;
        }

        // Si les données sont invalides, on les supprime
        // console.log('⚠️ [getLocalCmsUser] Token CMS invalide - nettoyage');
        localStorage.removeItem('sveltia-cms.user');
        return null;
    } catch (e) {
        console.warn('❌ [getLocalCmsUser] Données CMS corrompues dans localStorage. Nettoyage...', e);
        localStorage.removeItem('sveltia-cms.user');
        return null;
    }
}

/**
 * Vérifie si l'utilisateur est authentifié (basé sur le token CMS)
 * @returns {boolean} True si l'utilisateur est authentifié
 */
function isAuthenticated() {
    return getLocalCmsUser() !== null;
}

/**
 * Vérifie si l'email de l'utilisateur est vérifié
 * @returns {Promise<boolean>} True si l'email est vérifié
 */
async function isEmailVerified() {
    try {
        const account = await getAccount();
        const user = await account.get();
        return user.emailVerification || false;
    } catch (error) {
        console.warn('[AppwriteClient] Impossible de vérifier l\'état de vérification d\'email:', error);
        return false;
    }
}

/**
 * Envoie un email de vérification à l'utilisateur connecté
 * @param {string} redirectURL - URL vers laquelle rediriger après vérification
 * @returns {Promise<void>}
 */
async function sendVerificationEmail(redirectURL = null) {
    try {
        const account = await getAccount();
        const verificationURL = redirectURL || `${window.location.origin}/verify-email`;
        await account.createVerification(verificationURL);
        console.log('[AppwriteClient] Email de vérification envoyé avec succès');
    } catch (error) {
        console.error('[AppwriteClient] Erreur lors de l\'envoi de l\'email de vérification:', error);
        throw error;
    }
}

/**
 * Vérifie l'email avec les paramètres de vérification
 * @param {string} userId - ID de l'utilisateur
 * @param {string} secret - Secret de vérification
 * @returns {Promise<void>}
 */
async function verifyEmail(userId, secret) {
    try {
        const account = await getAccount();
        await account.updateVerification(userId, secret);
        console.log('[AppwriteClient] Email vérifié avec succès');
    } catch (error) {
        console.error('[AppwriteClient] Erreur lors de la vérification d\'email:', error);
        throw error;
    }
}

/**
 * Récupère l'état d'authentification complet de l'utilisateur
 * @returns {Promise<object>} État d'authentification avec vérification email
 */
async function getAuthenticationState() {
    const cmsUser = getLocalCmsUser();
    const userEmail = getUserEmail();
    const userName = getUserName();
    
    if (!cmsUser) {
        return {
            isAuthenticated: false,
            isEmailVerified: false,
            email: null,
            name: null,
            requiresAction: false
        };
    }

    try {
        const emailVerified = await isEmailVerified();
        return {
            isAuthenticated: true,
            isEmailVerified: emailVerified,
            email: userEmail,
            name: userName,
            requiresAction: !emailVerified
        };
    } catch (error) {
        console.warn('[AppwriteClient] Erreur lors de la récupération de l\'état d\'authentification:', error);
        return {
            isAuthenticated: true,
            isEmailVerified: false,
            email: userEmail,
            name: userName,
            requiresAction: true
        };
    }
}

/**
 * Récupère l'email de l'utilisateur depuis le localStorage
 * @returns {string|null} L'email de l'utilisateur ou null
 */
function getUserEmail() {
    return localStorage.getItem('appwrite-user-email');
}

/**
 * Récupère le nom de l'utilisateur depuis le localStorage
 * @returns {string|null} Le nom de l'utilisateur ou null
 */
function getUserName() {
    return localStorage.getItem('appwrite-user-name');
}

/**
 * Nettoie toutes les données d'authentification locales
 */
function clearAuthData() {
    localStorage.removeItem('sveltia-cms.user');
    localStorage.removeItem('appwrite-user-email');
    localStorage.removeItem('appwrite-user-name');
    // console.log("[Appwrite Client] Données d'authentification locales nettoyées");
}

/**
 * Déconnexion globale - supprime la session Appwrite et nettoie les données locales
 * @returns {Promise<void>}
 */
async function logoutGlobal() {
    try {
        // Nettoyer d'abord les données locales
        clearAuthData();

        // Supprimer la session Appwrite
        const account = await getAccount();
        await account.deleteSession('current');
        // console.log("[Appwrite Client] Déconnexion globale réussie");
    } catch (error) {
        console.warn("[Appwrite Client] Erreur lors de la déconnexion Appwrite (peut-être déjà déconnecté):", error);
    }
}

/**
 * Configure les données d'authentification locales
 * @param {string} email - L'email de l'utilisateur
 * @param {string} name - Le nom de l'utilisateur
 * @param {object} cmsAuth - L'objet d'authentification CMS
 */
function setAuthData(email, name, cmsAuth) {
    localStorage.setItem('appwrite-user-email', email);
    localStorage.setItem('appwrite-user-name', name);
    localStorage.setItem('sveltia-cms.user', JSON.stringify(cmsAuth));
}

// Export des fonctions publiques
export {
    getAppwriteClients,
    getAccount,
    getFunctions,
    getTeams,
    getConfig,
    isInitialized,
    initializeAppwrite,
    getLocalCmsUser,
    isAuthenticated,
    getUserEmail,
    getUserName,
    clearAuthData,
    setAuthData,
    logoutGlobal,
    isEmailVerified,
    sendVerificationEmail,
    verifyEmail,
    getAuthenticationState
};


// Exposition globale pour compatibilité avec les scripts non-module
if (typeof window !== 'undefined') {
    window.AppwriteClient = {
        getAppwriteClients,
        getAccount,
        getFunctions,
        getTeams,
        getConfig,
        isInitialized,
        initializeAppwrite,
        getLocalCmsUser,
        isAuthenticated,
        getUserEmail,
        getUserName,
        clearAuthData,
        setAuthData,
        logoutGlobal,
        isEmailVerified,
        sendVerificationEmail,
        verifyEmail,
        getAuthenticationState
    };
}
