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
            console.log(`[Appwrite Client] Vérification SDK - tentative ${attempts}/${maxAttempts}`);
            
            if (window.Appwrite && window.Appwrite.Client && window.Appwrite.Account) {
                console.log("[Appwrite Client] SDK Appwrite chargé avec succès");
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
        console.log("[Appwrite Client] Clients déjà initialisés, réutilisation");
        return { client, account, functions };
    }

    // Si une initialisation est en cours, attendre qu'elle se termine
    if (initializationPromise) {
        console.log("[Appwrite Client] Initialisation en cours, attente...");
        return initializationPromise;
    }

    // Commencer une nouvelle initialisation
    initializationPromise = (async () => {
        try {
            console.log("[Appwrite Client] Début de l'initialisation");
            
            // Attendre que le SDK soit chargé
            await waitForAppwrite();
            
            // Initialiser les clients
            const { Client, Account, Functions } = window.Appwrite;
            
            client = new Client()
                .setEndpoint(APPWRITE_ENDPOINT)
                .setProject(APPWRITE_PROJECT_ID);
            
            account = new Account(client);
            functions = new Functions(client);
            
            console.log("[Appwrite Client] Initialisation terminée avec succès");
            
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
        console.warn('[Appwrite Client] Données CMS corrompues dans localStorage. Nettoyage...');
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
 * Récupère l'email de l'utilisateur depuis le localStorage
 * @returns {string|null} L'email de l'utilisateur ou null
 */
function getUserEmail() {
    return localStorage.getItem('appwrite-user-email');
}

/**
 * Nettoie toutes les données d'authentification locales
 */
function clearAuthData() {
    localStorage.removeItem('sveltia-cms.user');
    localStorage.removeItem('appwrite-user-email');
    localStorage.removeItem('is-authenticated'); // Nettoyage de l'ancienne clé pour la compatibilité
    console.log("[Appwrite Client] Données d'authentification locales nettoyées");
}

/**
 * Configure les données d'authentification locales
 * @param {string} email - L'email de l'utilisateur
 * @param {object} cmsAuth - L'objet d'authentification CMS
 */
function setAuthData(email, cmsAuth) {
    localStorage.setItem('appwrite-user-email', email);
    localStorage.setItem('sveltia-cms.user', JSON.stringify(cmsAuth));
    // Ne plus utiliser is-authenticated, la présence du token CMS est suffisante
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
    clearAuthData,
    setAuthData
};