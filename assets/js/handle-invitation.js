// hugo-cookbook-theme/assets/js/handle-invitation.js

console.log("[Handle-Invitation] Script chargé");

// --- CONFIGURATION APPWRITE ---
const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "689725820024e81781b7";
// L'ID de l'équipe dans laquelle inviter (l'équipe principale, PAS les admins)
const TEAM_ID_TO_INVITE = "689bf6fe0006627d8959";

// --- STOCKAGE LOCAL POUR ÉVITER LES DOUBLONS ---
const INVITATION_SENT_KEY = 'invitation_sent_emails';

// --- DEBUG ---
const DEBUG_MODE = false;

/**
 * Nettoie l'historique des invitations envoyées
 */
function clearInvitationHistory() {
    localStorage.removeItem(INVITATION_SENT_KEY);
    debugLog("Historique des invitations nettoyé");
}

/**
 * Vérifie si une invitation a déjà été envoyée pour un email
 * @param {string} email - L'email à vérifier
 * @returns {boolean} - True si l'invitation a déjà été envoyée
 */
function hasInvitationBeenSent(email) {
    const sentEmails = JSON.parse(localStorage.getItem(INVITATION_SENT_KEY) || '[]');
    return sentEmails.includes(email);
}

/**
 * Marque une invitation comme envoyée
 * @param {string} email - L'email de l'invitation envoyée
 */
function markInvitationAsSent(email) {
    const sentEmails = JSON.parse(localStorage.getItem(INVITATION_SENT_KEY) || '[]');
    if (!sentEmails.includes(email)) {
        sentEmails.push(email);
        localStorage.setItem(INVITATION_SENT_KEY, JSON.stringify(sentEmails));
        debugLog("Invitation marquée comme envoyée", { email });
    }
}

// --- DOM ELEMENTS ---
let statusContainer, statusMessage, statusDetails, loginButton;

/**
 * Journalisation pour le débogage
 */
function debugLog(message, data = null) {
    if (DEBUG_MODE) {
        console.log(`[Handle-Invitation Debug] ${message}`, data || '');
    }
}

/**
 * Vérifie que le SDK Appwrite est chargé
 */
function waitForAppwrite(maxAttempts = 50, interval = 100) {
    return new Promise((resolve, reject) => {
        let attempts = 0;

        function checkAppwrite() {
            attempts++;
            debugLog(`Vérification Appwrite - tentative ${attempts}/${maxAttempts}`);
            debugLog("État de window.Appwrite:", {
                hasAppwrite: !!window.Appwrite,
                hasClient: !!(window.Appwrite && window.Appwrite.Client),
                hasAccount: !!(window.Appwrite && window.Appwrite.Account),
                hasTeams: !!(window.Appwrite && window.Appwrite.Teams)
            });

            if (window.Appwrite && window.Appwrite.Client && window.Appwrite.Account && window.Appwrite.Teams) {
                debugLog("Appwrite SDK est chargé");
                resolve(window.Appwrite);
            } else if (attempts >= maxAttempts) {
                debugLog("Appwrite SDK non chargé après le nombre maximum de tentatives");
                reject(new Error("Le SDK Appwrite n'a pas pu être chargé. Veuillez rafraîchir la page."));
            } else {
                setTimeout(checkAppwrite, interval);
            }
        }

        checkAppwrite();
    });
}

/**
 * Initialise les éléments DOM
 */
function initializeDOMElements() {
    statusContainer = document.getElementById('status-container');
    statusMessage = document.getElementById('status-message');
    statusDetails = document.getElementById('status-details');
    loginButton = document.getElementById('login-button');

    debugLog("Éléments DOM initialisés", {
        statusContainer: !!statusContainer,
        statusMessage: !!statusMessage,
        statusDetails: !!statusDetails,
        loginButton: !!loginButton
    });

    if (!statusContainer || !statusMessage || !statusDetails) {
        throw new Error("Certains éléments DOM requis sont manquants");
    }
}

/**
 * Affiche le résultat final de l'opération.
 * @param {string} type - 'success', 'danger', 'warning', 'info'
 * @param {string} message - Le message à afficher
 */
function showResult(type, message) {
    debugLog(`Affichage du résultat: ${type}`, message);

    if (statusContainer) statusContainer.style.display = 'none';
    if (statusDetails) {
        statusDetails.className = `alert alert-${type} my-2`;
        statusDetails.textContent = message;
        statusDetails.style.display = 'block';
    }
}

/**
 * Met à jour le message de statut
 * @param {string} message - Le message à afficher
 */
function updateStatusMessage(message) {
    debugLog("Mise à jour du message de statut", message);
    if (statusMessage) {
        statusMessage.textContent = message;
    }
}

/**
 * Logique principale
 */
async function handleInvitation() {
    let requesterEmail = null;

    try {
        debugLog("Démarrage du traitement de l'invitation");
        debugLog("URL actuelle:", window.location.href);
        debugLog("Paramètres URL:", window.location.search);

        // 1. Initialiser les éléments DOM
        initializeDOMElements();

        // 2. Attendre que Appwrite soit chargé
        updateStatusMessage("Chargement du SDK Appwrite...");
        const { Client, Account, Teams } = await waitForAppwrite();

        // 3. Initialiser les clients Appwrite
        const client = new Client()
            .setEndpoint(APPWRITE_ENDPOINT)
            .setProject(APPWRITE_PROJECT_ID);

        const account = new Account(client);
        const teams = new Teams(client);

        debugLog("Clients Appwrite initialisés");
        debugLog("Configuration:", {
            endpoint: APPWRITE_ENDPOINT,
            projectId: APPWRITE_PROJECT_ID,
            teamId: TEAM_ID_TO_INVITE
        });

        // 4. Extraire l'email du demandeur depuis l'URL
        const params = new URLSearchParams(window.location.search);
        requesterEmail = params.get('requester');

        debugLog("Email du demandeur extrait", requesterEmail);
        debugLog("Tous les paramètres URL:", Object.fromEntries(params.entries()));

        if (!requesterEmail) {
            debugLog("ERREUR: Email du demandeur manquant");
            showResult('danger', 'Email du demandeur manquant dans l\'URL. Le lien est peut-être corrompu.');
            return;
        }

        // 5. Vérifier si l'administrateur est connecté
        updateStatusMessage("Vérification de votre authentification...");
        debugLog("Tentative de récupération de l'utilisateur courant...");
        const currentUser = await account.get();

        debugLog("Utilisateur connecté", {
            name: currentUser.name,
            email: currentUser.email,
            id: currentUser.$id
        });

        updateStatusMessage(`Connecté en tant que ${currentUser.name}. Envoi de l'invitation à ${requesterEmail}...`);

        // 6. Vérifier si une invitation a déjà été envoyée pour cet email
        debugLog("Vérification des invitations précédentes", { email: requesterEmail });

        if (hasInvitationBeenSent(requesterEmail)) {
            debugLog("Invitation déjà envoyée précédemment pour cet email", { email: requesterEmail });
            showResult('warning', `Une invitation a déjà été envoyée à ${requesterEmail}. Veuillez patienter qu'elle soit acceptée.`);

            // Ajouter un bouton pour réinitialiser l'historique
            if (statusDetails) {
                const resetButton = document.createElement('button');
                resetButton.className = 'btn btn-warning btn-sm ms-2';
                resetButton.textContent = 'Réessayer';
                resetButton.onclick = () => {
                    clearInvitationHistory();
                    window.location.reload();
                };
                statusDetails.appendChild(resetButton);
            }
            return;
        }

        // 7. Envoyer l'invitation à l'équipe
        debugLog("Envoi de l'invitation à l'équipe", {
            teamId: TEAM_ID_TO_INVITE,
            email: requesterEmail,
            roles: ['owner'],
            redirectUrl: `${window.location.origin}/accept-invitation`
        });

        const membership = await teams.createMembership(
            TEAM_ID_TO_INVITE,
            ['owner'], // Rôle "owner" comme demandé
            requesterEmail,
            undefined,
            undefined,
            `${window.location.origin}/accept-invitation` // Page de redirection pour l'invité
        );

        // 8. Stocker l'email pour éviter les doublons
        markInvitationAsSent(requesterEmail);

        debugLog("Invitation envoyée avec succès", { membershipId: membership.$id });
        showResult('success', `Invitation envoyée avec succès à ${requesterEmail} !`);

    } catch (error) {
        // Gérer les erreurs
        console.error("Erreur lors du traitement de l'invitation :", error);
        debugLog("Erreur détectée", {
            code: error.code,
            message: error.message,
            type: error.type,
            response: error.response,
            stack: error.stack
        });

        // Afficher plus de détails en mode debug
        if (DEBUG_MODE) {
            console.error("Détails complets de l'erreur:", error);
        }

        if (error.code === 401 || error.message?.includes('not authenticated') || error.message?.includes('Unauthorized')) { // Non authentifié
            debugLog("Erreur d'authentification");
            showResult('danger', 'Vous devez être connecté en tant qu\'administrateur pour approuver une invitation.');
            if (loginButton) loginButton.style.display = 'inline-block';
        } else if (error.code === 409) { // Conflit
            debugLog("Erreur de conflit (utilisateur déjà invité)");
            showResult('warning', `${requesterEmail || 'cet utilisateur'} est déjà membre de l'équipe ou a déjà une invitation en attente.`);

            // Stocker quand même l'email pour éviter les tentatives futures
            if (requesterEmail) {
                markInvitationAsSent(requesterEmail);
            }
        } else if (error.code === 400) {
            debugLog("Erreur de requête invalide");
            showResult('danger', `Requête invalide : ${error.message || 'Vérifiez les paramètres de l\'invitation'}`);
        } else if (error.message?.includes('Appwrite') || error.message?.includes('SDK')) {
            debugLog("Erreur liée au SDK Appwrite");
            showResult('danger', error.message);
        } else {
            debugLog("Erreur inattendue");
            showResult('danger', `Une erreur inattendue est survenue : ${error.message || 'Erreur inconnue'}`);
        }
    }
}

/**
 * Vérification initiale rapide du SDK Appwrite
 */
function checkInitialAppwriteStatus() {
    const status = {
        hasAppwrite: !!window.Appwrite,
        hasClient: !!(window.Appwrite && window.Appwrite.Client),
        hasAccount: !!(window.Appwrite && window.Appwrite.Account),
        hasTeams: !!(window.Appwrite && window.Appwrite.Teams)
    };

    debugLog("Vérification initiale du SDK Appwrite:", status);

    if (!status.hasAppwrite) {
        console.error("ERREUR: window.Appwrite n'existe pas");
        return false;
    }

    if (!status.hasClient || !status.hasAccount || !status.hasTeams) {
        console.error("ERREUR: SDK Appwrite incomplet. Composants manquants:", {
            Client: status.hasClient,
            Account: status.hasAccount,
            Teams: status.hasTeams
        });
        return false;
    }

    return true;
}

/**
 * Démarrer le processus lorsque le DOM est chargé
 */

// Vérifier si le DOM est déjà chargé
if (document.readyState === 'loading') {
    // Le DOM est encore en chargement, on attend l'événement
    document.addEventListener('DOMContentLoaded', () => {
        debugLog("DOM chargé via événement, démarrage du processus d'invitation");
        startInvitationProcess();
    });
} else {
    // Le DOM est déjà chargé, on démarre immédiatement
    startInvitationProcess();
}

/**
 * Fonction principale pour démarrer le processus d'invitation
 */
function startInvitationProcess() {
    // Vérification initiale du SDK
    if (!checkInitialAppwriteStatus()) {
        debugLog("ERREUR: SDK Appwrite non disponible au chargement du DOM");
        // On continue quand même, car waitForAppwrite va tenter de charger le SDK
    }

    handleInvitation().catch(error => {
        console.error("Erreur non capturée dans handleInvitation:", error);
        debugLog("ERREUR CRITIQUE non capturée", error);
        if (statusDetails) {
            statusDetails.className = 'alert alert-danger  my-2';
            statusDetails.textContent = 'Une erreur critique est survenue. Veuillez consulter la console pour plus de détails.';
            statusDetails.style.display = 'block';
        }
        if (statusContainer) statusContainer.style.display = 'none';
    });
}

// Ajouter un timeout global pour éviter que la page reste bloquée indéfiniment
setTimeout(() => {
    if (statusContainer && statusContainer.style.display !== 'none') {
        debugLog("Timeout global atteint, affichage d'un message d'erreur");
        showResult('danger', 'Le traitement prend trop de temps. Veuillez vérifier votre connexion et réessayer.');
    }
}, 30000); // 30 secondes
