// hugo-cookbook-theme/assets/js/appwrite-client.js
// Module commun pour l'initialisation et la gestion du client Appwrite
// Évite la duplication d'initialisation entre auth-status.js et authAppwrite.js


// --- CONFIGURATION CENTRALE APPWRITE ---
  const APPWRITE_CONFIG = {
      endpoint: "https://cloud.appwrite.io/v1",
      projectId: "689725820024e81781b7",
      databaseId: "689d15b10003a5a13636",
      functions: {
          cmsAuth: "68976500002eb5c6ee4f",
          accessRequest: "689cdea5001a4d74549d"
      },
      collections: {
          main: "main",
          purchases: "purchases",
          products: "products"
      }
  };

// Variables globales pour les clients Appwrite (initialisées une seule fois)
let client = null;
let account = null;
let functions = null;
let databases = null;
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
            if (window.Appwrite && window.Appwrite.Client && window.Appwrite.Account) {
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
 * @returns {Promise<{client, account, functions, databases}>} Les clients initialisés
 */
async function initializeAppwrite() {
    if (client && account && functions && databases) {
        return { client, account, functions, databases };
    }

    if (initializationPromise) {
        return initializationPromise;
    }

    initializationPromise = (async () => {
        try {
            console.log("[Appwrite Client] Début de l'initialisation");
            await waitForAppwrite();

            const { Client, Account, Functions, Databases } = window.Appwrite;

            client = new Client()
                .setEndpoint(APPWRITE_CONFIG.endpoint)
                .setProject(APPWRITE_CONFIG.projectId);

            account = new Account(client);
            functions = new Functions(client);
            databases = new Databases(client);

            console.log("[Appwrite Client] Initialisation terminée avec succès");
            return { client, account, functions, databases };
        } catch (error) {
            console.error("[Appwrite Client] Erreur lors de l'initialisation:", error);
            client = null;
            account = null;
            functions = null;
            databases = null;
            initializationPromise = null;
            throw error;
        }
    })();

    return initializationPromise;
}

// --- Fonctions exportées ---

async function getAppwriteClients() {
    return await initializeAppwrite();
}

async function getAccount() {
    const { account } = await initializeAppwrite();
    return account;
}

async function getTeams() {
    const { Teams } = window.Appwrite;
    if (!client) await initializeAppwrite();
    return new Teams(client);
}

async function getFunctions() {
    const { functions } = await initializeAppwrite();
    return functions;
}

async function getDatabases() {
    const { databases } = await initializeAppwrite();
    return databases;
}

function getConfig() {
    return {
        APPWRITE_ENDPOINT: APPWRITE_CONFIG.endpoint,
        APPWRITE_PROJECT_ID: APPWRITE_CONFIG.projectId,
        APPWRITE_FUNCTION_ID: APPWRITE_CONFIG.functions.cmsAuth,
        ACCESS_REQUEST_FUNCTION_ID: APPWRITE_CONFIG.functions.accessRequest,
        APPWRITE_CONFIG: APPWRITE_CONFIG
    };
}

function isInitialized() {
    return !!(client && account && functions && databases);
}

function getLocalCmsUser() {
    const cmsUser = localStorage.getItem('sveltia-cms.user');
    if (!cmsUser) return null;
    try {
        const parsedUser = JSON.parse(cmsUser);
        if (parsedUser.token && typeof parsedUser.token === 'string' && parsedUser.token.trim() !== '') {
            return parsedUser;
        }
        localStorage.removeItem('sveltia-cms.user');
        return null;
    } catch (e) {
        localStorage.removeItem('sveltia-cms.user');
        return null;
    }
}

function isAuthenticatedCms() {
    return getLocalCmsUser() !== null;
}


/**
 * Vérifie si une session Appwrite active existe.
 * @returns {Promise<boolean>} Vrai si l'utilisateur est authentifié, sinon faux.
 */
async function isAuthenticatedAppwrite() {
    try {
        const acc = await getAccount();
        await acc.get(); // Lève une exception si aucune session n'est active
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * Vérifie si l'utilisateur est connecté avec une session Appwrite valide.
 * Cette fonction vérifie à la fois le compte utilisateur ET la validité de la session.
 * @returns {Promise<boolean>} Vrai si authentifié avec session active, sinon faux
 */
async function isConnectedAppwrite() {
    try {
        const acc = await getAccount();

        // Vérifier le compte utilisateur
        const accountData = await acc.get();
        if (!accountData || !accountData.$id) {
            return false;
        }

        // Vérifier explicitement la session courante
        const session = await acc.getSession('current');
        if (!session || !session.$id) {
            return false;
        }

        // Vérifier que la session n'est pas expirée
        const now = new Date();
        const expireDate = new Date(session.expire);
        if (now >= expireDate) {
            return false;
        }

        // Session valide - retourner true simplement
        return true;

    } catch (error) {
        console.error('Error checking connection:', error);
        return false;
    }
}




async function isEmailVerified() {
    try {
        const acc = await getAccount();
        const user = await acc.get();
        return user.emailVerification || false;
    } catch (error) {
        return false;
    }
}

async function sendVerificationEmail(redirectURL = null) {
    try {
        const acc = await getAccount();
        const verificationURL = redirectURL || `${window.location.origin}/verify-email`;
        await acc.createVerification(verificationURL);
    } catch (error) {
        console.error('[AppwriteClient] Erreur lors de l\'envoi de l\'email de vérification:', error);
        throw error;
    }
}

async function verifyEmail(userId, secret) {
    try {
        const acc = await getAccount();
        await acc.updateVerification(userId, secret);
    } catch (error) {
        console.error('[AppwriteClient] Erreur lors de la vérification d\'email:', error);
        throw error;
    }
}

async function getAuthenticationState() {
    const cmsUser = getLocalCmsUser();
    if (!cmsUser) return { isAuthenticated: false, isEmailVerified: false, email: null, name: null, requiresAction: false };
    try {
        const emailVerified = await isEmailVerified();
        return { isAuthenticated: true, isEmailVerified: emailVerified, email: getUserEmail(), name: getUserName(), requiresAction: !emailVerified };
    } catch (error) {
        return { isAuthenticated: true, isEmailVerified: false, email: getUserEmail(), name: getUserName(), requiresAction: true };
    }
}

function getUserEmail() {
    return localStorage.getItem('appwrite-user-email');
}

function getUserName() {
    return localStorage.getItem('appwrite-user-name');
}

function getLocalEmailVerificationStatus() {
    return localStorage.getItem('email-verification-status');
}

function clearAuthData() {
    localStorage.removeItem('sveltia-cms.user');
    localStorage.removeItem('appwrite-user-email');
    localStorage.removeItem('appwrite-user-name');
    localStorage.removeItem('email-verification-status');
}


/**
 * Valide et prépare les données nécessaires pour la création transactionnelle
 * @param {string} eventId - ID de l'événement
 * @returns {Promise<{eventData, user, contentHash}>} Données validées
 */
async function validateAndPrepareEventData(eventId) {
    console.log(`[Appwrite Client] Validation des données pour l'événement ${eventId}`);

    // Récupérer et valider les données de l'événement
    const response = await fetch(`/evenements/${eventId}/ingredients_aw/index.json`);
    if (!response.ok) throw new Error(`Impossible de récupérer les données de l'événement: ${response.status}`);
    const eventData = await response.json();
    console.log(`[Appwrite Client] Données de l'événement récupérées:`, eventData);

    const { account, databases } = await initializeAppwrite();
    const user = await account.get();
    console.log(`[Appwrite Client] Utilisateur authentifié: ${user.$id}`);

    // Vérifier si l'événement existe déjà
    try {
        await databases.getDocument(APPWRITE_CONFIG.databaseId, APPWRITE_CONFIG.collections.main, eventId);
        console.log(`[Appwrite Client] L'événement ${eventId} existe déjà dans main`);
        window.location.href = `/sv_products/?listId=${eventId}`;
        return null; // Retourner null pour indiquer une redirection
    } catch (error) {
        if (error.code !== 404) {
            throw error;
        }
    }

    // Récupérer le hash depuis les paramètres globaux
    const contentHash = window.__HUGO_PARAMS__?.listContentHash;
    if (!contentHash) {
        throw new Error('Le hash du contenu n\'est pas défini');
    }

    return { eventData, user, contentHash };
}

/**
 * Prépare les opérations pour la transaction Appwrite
 * @param {string} eventId - ID de l'événement
 * @param {object} eventData - Données de l'événement
 * @param {object} user - Utilisateur Appwrite
 * @param {string} contentHash - Hash du contenu
 * @returns {Array} Tableau d'opérations pour createOperations
 */
function prepareTransactionOperations(eventId, eventData, user, contentHash) {
    const operations = [];

    // 1. Créer l'enregistrement main (statut 'active' directement avec transaction)
    operations.push({
        action: 'create',
        databaseId: APPWRITE_CONFIG.databaseId,
        collectionId: APPWRITE_CONFIG.collections.main,
        documentId: eventId,
        data: {
            name: eventData.name || `Événement ${eventId}`,
            originalDataHash: contentHash,
            isActive: true,
            createdBy: user.$id,
            status: 'active',
            error: null
        },
        permissions: [`read("user:${user.$id}")`, `update("user:${user.$id}")`, `delete("user:${user.$id}")`]
    });

    // 2. Créer tous les produits en lot
    if (eventData.ingredients && Array.isArray(eventData.ingredients)) {
        const productOperations = eventData.ingredients.map(ingredient => {
            const productId = `${ingredient.ingredientHugoUuid}_${eventId}`;
            
            return {
                action: 'create',
                databaseId: APPWRITE_CONFIG.databaseId,
                collectionId: APPWRITE_CONFIG.collections.products,
                documentId: productId,
                data: {
                    productHugoUuid: ingredient.ingredientHugoUuid || window.Appwrite.ID.unique(),
                    productName: ingredient.ingredientName || '',
                    productType: ingredient.ingType || '',
                    mainId: eventId,
                    totalNeededConsolidated: JSON.stringify(ingredient.totalNeededConsolidated || []),
                    totalNeededRaw: JSON.stringify(ingredient.totalNeededRaw || []),
                    neededConsolidatedByDate: JSON.stringify(ingredient.neededConsolidatedByDate || []),
                    recipesOccurrences: JSON.stringify(ingredient.recipesOccurrences || []),
                    pFrais: ingredient.pFrais || false,
                    pSurgel: ingredient.pSurgel || false,
                    nbRecipes: ingredient.nbRecipes || 0,
                    totalAssiettes: ingredient.totalAssiettes || 0,
                    conversionRules: ingredient.conversionRules,
                },
                permissions: [`read("user:${user.$id}")`, `update("user:${user.$id}")`, `delete("user:${user.$id}")`]
            };
        });

        operations.push(...productOperations);
    }

    return operations;
}

async function createCollaborativeProductsListFromEvent(eventId) {
    try {
        console.log(`[Appwrite Client] Début de la création transactionnelle pour l'événement ${eventId}`);

        // 1. Validation et préparation des données
        const validationResult = await validateAndPrepareEventData(eventId);
        if (!validationResult) {
            // Redirection déjà gérée dans validateAndPrepareEventData
            return;
        }

        const { eventData, user, contentHash } = validationResult;
        console.log(`[Appwrite Client] Données validées, début de la transaction`);

        // 2. Initialisation Appwrite et création de la transaction
        const { databases } = await initializeAppwrite();
        const transaction = await databases.createTransaction();
        console.log(`[Appwrite Client] Transaction créée: ${transaction.$id}`);

        // 3. Préparation des opérations
        const operations = prepareTransactionOperations(eventId, eventData, user, contentHash);
        console.log(`[Appwrite Client] ${operations.length} opérations préparées`);

        // 4. Exécution des opérations en lot
        await databases.createOperations(transaction.$id, operations);
        console.log(`[Appwrite Client] Opérations exécutées avec succès`);

        // 5. Commit de la transaction
        await databases.updateTransaction(transaction.$id, true);
        console.log(`[Appwrite Client] Transaction validée avec succès`);

        // 6. Redirection vers la liste créée
        console.log(`[Appwrite Client] Opération transactionnelle réussie, redirection`);
        window.location.href = `/sv_products/?listId=${eventId}`;

    } catch (error) {
        console.error(`[Appwrite Client] Erreur lors de la création transactionnelle:`, error);
        
        // Gestion simple des erreurs - plus besoin de nettoyage manuel
        if (error.code === 'conflict') {
            throw new Error('Conflit détecté: les données ont été modifiées par une autre opération. Veuillez réessayer.');
        } else if (error.code === 'transaction_limit_exceeded') {
            throw new Error('Limite de transactions dépassée. Veuillez réduire le nombre d\'ingrédients ou réessayer plus tard.');
        } else {
            throw error;
        }
    }
}

/**
* @deprecated
*/
async function checkExistingCollaborativeList(listId) {
    try {
        const { databases } = await initializeAppwrite();
        // Vérifier si le document existe directement dans la collection 'ingredient_lists'
        const existingList = await databases.getDocument(
            '689d15b10003a5a13636',
            'ingredient_lists',
            listId
        );
        return !!existingList;
    } catch (error) {
        if (error.code === 404) {
            return false; // Le document n'existe pas
        }
        console.error('[Appwrite Client] Erreur lors de la vérification de la liste existante:', error);
        return false;
    }
}

async function checkExistingMainGroup(mainGroupId) {
    try {
        const { databases } = await initializeAppwrite();
        // Vérifier si le document existe directement dans la collection 'main'
        const existingMainGroup = await databases.getDocument(
            '689d15b10003a5a13636',
            'main',
            mainGroupId
        );
        return !!existingMainGroup;
    } catch (error) {
        if (error.code === 404) {
            return false; // Le document n'existe pas
        }
        console.error('[Appwrite Client] Erreur lors de la vérification du main group existant:', error);
        return false;
    }
}

async function logoutGlobal() {
    try {
        clearAuthData();
        const acc = await getAccount();
        await acc.deleteSession('current');
    } catch (error) {
        console.warn("[Appwrite Client] Erreur lors de la déconnexion Appwrite (peut-être déjà déconnecté):", error);
    }
}

function setAuthData(email, name, cmsAuth) {
    localStorage.setItem('appwrite-user-email', email);
    localStorage.setItem('appwrite-user-name', name);
    localStorage.setItem('sveltia-cms.user', JSON.stringify(cmsAuth));
}


/**
 * S'abonne aux mises à jour temps réel pour une liste de collections.
 * Utilise l'API Appwrite subscribe() qui gère automatiquement les connexions WebSocket.
 * @param {string[]} collectionNames - Noms des collections (ex: ['ingredients', 'purchases']).
 * @param {string} listId - ID de la liste (pour filtrage si nécessaire).
 * @param {function} onMessage - Callback pour les messages de données.
 * @param {object} connectionCallbacks - Callbacks pour les événements de connexion.
 * @returns {function} Une fonction pour se désabonner.
 */
export function subscribeToCollections(collectionNames, listId, onMessage, connectionCallbacks = {}) {
    const { onConnect, onDisconnect, onError } = connectionCallbacks;

    if (!client) {
        console.error("Impossible de s'abonner : le client Appwrite n'est pas encore initialisé.");
        onError?.({ message: "Client Appwrite non initialisé" });
        return () => {};
    }

    const channels = collectionNames.map(name => {
        const collectionId = APPWRITE_CONFIG.collections[name];
        if (!collectionId) {
            console.warn(`[Appwrite Client] Nom de collection inconnu dans la configuration: ${name}`);
            return null;
        }
        return `databases.${APPWRITE_CONFIG.databaseId}.collections.${collectionId}.documents`;
    }).filter(Boolean);

    console.log('[Appwrite Client] Abonnement aux canaux en cours...', channels);

    try {
        // La méthode client.subscribe() gère automatiquement la connexion WebSocket
        // selon la documentation officielle Appwrite
        const unsubscribe = client.subscribe(channels, (response) => {
            console.log('[Appwrite Client] Réception temps réel:', response);
            onMessage(response);
        });

        // Selon la documentation Appwrite, la subscription est automatiquement active
        // On peut considérer la connexion comme établie immédiatement
        if (onConnect) {
            setTimeout(() => {
                console.log('[Appwrite Client] Connexion temps réel établie');
                onConnect();
            }, 50);
        }

        return unsubscribe;
    } catch (error) {
        console.error('[Appwrite Client] Erreur lors de la souscription temps réel:', error);
        onError?.(error);
        return () => {}; // Retourner une fonction vide en cas d'erreur
    }
}

// Export des fonctions publiques
export {
    APPWRITE_CONFIG, // Ajouté pour consolider les exports
    getAppwriteClients, getAccount, getFunctions, getTeams, getDatabases, getConfig,
    isInitialized, initializeAppwrite, getLocalCmsUser, isAuthenticatedCms, isAuthenticatedAppwrite, isConnectedAppwrite, getUserEmail,
    getUserName, clearAuthData, setAuthData, logoutGlobal, isEmailVerified,
    sendVerificationEmail, verifyEmail, getLocalEmailVerificationStatus,
     createCollaborativeProductsListFromEvent, checkExistingCollaborativeList, checkExistingMainGroup
};

// Exposition globale pour compatibilité avec les scripts non-module
if (typeof window !== 'undefined') {
    window.AppwriteClient = {
        getAppwriteClients, getAccount, getFunctions, getDatabases, getConfig,
        isInitialized, initializeAppwrite, getLocalCmsUser, isAuthenticatedCms, isAuthenticatedAppwrite, isConnectedAppwrite,
        getUserEmail, getUserName, clearAuthData, setAuthData, logoutGlobal,
        isEmailVerified, sendVerificationEmail, verifyEmail, getLocalEmailVerificationStatus,
        createCollaborativeProductsListFromEvent,  checkExistingMainGroup, subscribeToCollections
    };
}
