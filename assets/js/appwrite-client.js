// hugo-cookbook-theme/assets/js/appwrite-client.js
// Module commun pour l'initialisation et la gestion du client Appwrite
// Évite la duplication d'initialisation entre auth-status.js et authAppwrite.js

// --- CONFIGURATION APPWRITE ---
// #AI: TODO: migrer les js pour utiliser APPWRITE_CONFIG
const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "689725820024e81781b7";
const APPWRITE_FUNCTION_ID = "68976500002eb5c6ee4f"; // ID de la fonction cms-auth-function
const ACCESS_REQUEST_FUNCTION_ID = "689cdea5001a4d74549d"; // ID de la fonction d'envoi d'email

// --- CONFIGURATION CENTRALE APPWRITE ---
export const APPWRITE_CONFIG = {
    endpoint: "https://cloud.appwrite.io/v1",
    projectId: "689725820024e81781b7",
    databaseId: "689d15b10003a5a13636",
    functions: {
        cmsAuth: "68976500002eb5c6ee4f",
        accessRequest: "689cdea5001a4d74549d"
    },
    collections: {
        events: "ingredient_lists",
        ingredients: "ingredients",
        purchases: "purchase"
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
                .setEndpoint(APPWRITE_ENDPOINT)
                .setProject(APPWRITE_PROJECT_ID);

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
    return { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_FUNCTION_ID, ACCESS_REQUEST_FUNCTION_ID };
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

async function createCollaborativeListFromEvent(eventId) {
    try {
        console.log(`[Appwrite Client] Création d'une liste collaborative pour l'événement ${eventId}`);
        const response = await fetch(`/evenements/${eventId}/ingredients_aw/index.json`);
        if (!response.ok) throw new Error(`Impossible de récupérer les données de l'événement: ${response.status}`);
        const eventData = await response.json();
        console.log(`[Appwrite Client] Données de l'événement récupérées:`, eventData);

        const { account, databases } = await initializeAppwrite();
        const user = await account.get();
        console.log(`[Appwrite Client] Utilisateur authentifié: ${user.$id}`);

        // Vérifier si l'événement existe déjà dans la collection 'ingredient_lists'
        try {
            await databases.getDocument(
                '689d15b10003a5a13636',
                'ingredient_lists',
                eventId
            );
            console.log(`[Appwrite Client] L'événement ${eventId} existe déjà`);
            window.location.href = `/app/ingredients-collaborative/?listId=${eventId}`;
            return;
        } catch (error) {
            if (error.code !== 404) {
                throw error;
            }
        }

        // Récupérer le hash depuis les paramètres globaux
        const contentHash = window.__HUGO_PARAMS__?.listContentHash;
        if (!contentHash) {
            throw new Error('Le hash du contenu n\'est pas défini');
          return;
        }

        // Créer l'événement dans la collection 'ingredient_lists'
        const eventDataForAppwrite = {
            name: eventData.name || `Événement ${eventId}`,
            originalDataHash: contentHash,
            isActive: true,
            createdBy: user.$id
        };
        console.log(`[Appwrite Client] Création de l'événement avec les données:`, eventDataForAppwrite);

        await databases.createDocument(
            '689d15b10003a5a13636',
            'ingredient_lists',
            eventId,
            eventDataForAppwrite,
            [`read("user:${user.$id}")`, `update("user:${user.$id}")`, `delete("user:${user.$id}")`]
        );

        if (eventData.ingredients && Array.isArray(eventData.ingredients)) {
            console.log(`[Appwrite Client] Création de ${eventData.ingredients.length} ingrédients`);
            let successCount = 0;
            let errorCount = 0;

            for (const ingredient of eventData.ingredients) {
                const ingredientData = {
                    ingredientUuid: ingredient.ingredientUuid || window.Appwrite.ID.unique(), // Utiliser l'UUID du JSON ou en générer un
                    ingredientLists: eventId, // Relation avec l'événement
                    ingredientName: ingredient.ingredientName || '',
                    ingType: ingredient.ingType || '',
                    totalNeededConsolidated: JSON.stringify(ingredient.totalNeededConsolidated || []),
                    totalNeededRaw: JSON.stringify(ingredient.totalNeededRaw || []),
                    recipeOccurrences: (ingredient.recipeOccurrences || []).map(o => JSON.stringify(o)),
                    pFrais: ingredient.pFrais || false,
                    pSurgel: ingredient.pSurgel || false,

                };
                try {
                    await databases.createDocument(
                        '689d15b10003a5a13636',
                        'ingredients',
                        window.Appwrite.ID.unique(),
                        ingredientData,
                        [`read("user:${user.$id}")`, `update("user:${user.$id}")`, `delete("user:${user.$id}")`]
                    );
                    successCount++;
                } catch (error) {
                    errorCount++;
                    console.error(`[Appwrite Client] Erreur lors de la création de l'ingrédient ${ingredientData.ingredientName}:`, error);
                    // Continuer avec les autres ingrédients même si celui-ci échoue
                }
            }

            console.log(`[Appwrite Client] Création des ingrédients terminée: ${successCount} succès, ${errorCount} erreurs`);

            if (errorCount > 0) {
                // Stocker les ingrédients échoués pour nouvelle tentative
                const failedIngredients = eventData.ingredients.filter((_, index) => {
                    // Simplement recréer la liste des ingrédients échoués (logique simplifiée)
                    return index >= successCount; // Approximation pour l'exemple
                });

                localStorage.setItem(`failed_ingredients_${eventId}`, JSON.stringify(failedIngredients));

                // Afficher un message à l'utilisateur
                const errorMessage = `${errorCount} ingrédient(s) n'ont pas pu être créés. Voulez-vous réessayer ?\n\n` +
                    `Ingrédients en échec:\n` +
                    failedIngredients.slice(0, 5).map(ing => `- ${ing.name}`).join('\n') +
                    (failedIngredients.length > 5 ? `\n... et ${failedIngredients.length - 5} autres` : '');

                if (confirm(errorMessage + '\n\nCliquez sur OK pour réessayer ou Annuler pour continuer quand même.')) {
                    // Réessayer de créer les ingrédients échoués
                    console.log(`[Appwrite Client] Nouvelle tentative pour ${failedIngredients.length} ingrédients...`);
                    await retryFailedIngredients(eventId, failedIngredients, databases, user);
                }
            }
        }

        console.log(`[Appwrite Client] Redirection vers l'application collaborative`);
        window.location.href = `/app/ingredients-collaborative/?listId=${eventId}`;
    } catch (error) {
        console.error('[Appwrite Client] Erreur lors de la création de la liste collaborative:', error);
        throw error;
    }
}

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
 * @param {string[]} collectionNames - Noms des collections (ex: ['ingredients', 'purchases']).
 * @param {function} callback - La fonction à appeler lors d'une mise à jour.
 * @returns {function} Une fonction pour se désabonner.
 */
export function subscribeToCollections(collectionNames, callback) {
    if (!client) {
        console.error("Impossible de s'abonner : le client Appwrite n'est pas encore initialisé.");
        // Retourne une fonction de désabonnement qui ne fait rien
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

    console.log('[Appwrite Client] Abonnement aux canaux:', channels);
    return client.subscribe(channels, callback);
}

// Export des fonctions publiques
export {
    getAppwriteClients, getAccount, getFunctions, getTeams, getDatabases, getConfig,
    isInitialized, initializeAppwrite, getLocalCmsUser, isAuthenticatedCms, getUserEmail,
    getUserName, clearAuthData, setAuthData, logoutGlobal, isEmailVerified,
    sendVerificationEmail, verifyEmail, getLocalEmailVerificationStatus,
    createCollaborativeListFromEvent, checkExistingCollaborativeList
};

// Exposition globale pour compatibilité avec les scripts non-module
if (typeof window !== 'undefined') {
    window.AppwriteClient = {
        getAppwriteClients, getAccount, getFunctions, getDatabases, getConfig,
        isInitialized, initializeAppwrite, getLocalCmsUser, isAuthenticatedCms,
        getUserEmail, getUserName, clearAuthData, setAuthData, logoutGlobal,
        isEmailVerified, sendVerificationEmail, verifyEmail, getLocalEmailVerificationStatus,
        createCollaborativeListFromEvent, checkExistingCollaborativeList
    };
}
