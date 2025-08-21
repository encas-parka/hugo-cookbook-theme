// hugo-cookbook-theme/assets/js/auth-debug.js
// Script de diagnostic pour l'authentification - à utiliser en console ou sur une page de debug

/**
 * Fonction de diagnostic complète de l'état d'authentification
 */
window.debugAuth = async function() {
    console.log("🔧 === DIAGNOSTIC D'AUTHENTIFICATION ===");

    // 1. Vérifier la disponibilité des dépendances
    console.log("📋 1. VÉRIFICATION DES DÉPENDANCES");
    console.log("   - SDK Appwrite disponible:", !!window.Appwrite);
    console.log("   - AppwriteClient module disponible:", !!window.AppwriteClient);

    if (!window.Appwrite) {
        console.error("❌ SDK Appwrite non chargé - arrêt du diagnostic");
        return;
    }

    // 2. Vérifier le localStorage
    console.log("📋 2. ÉTAT DU LOCALSTORAGE");
    const cmsUserRaw = localStorage.getItem('sveltia-cms.user');
    const appwriteEmail = localStorage.getItem('appwrite-user-email');
    const appwriteName = localStorage.getItem('appwrite-user-name');

    console.log("   - sveltia-cms.user (brut):", cmsUserRaw);
    console.log("   - appwrite-user-email:", appwriteEmail);
    console.log("   - appwrite-user-name:", appwriteName);

    // 3. Parser et valider le token CMS
    console.log("📋 3. VALIDATION DU TOKEN CMS");
    let cmsUser = null;
    let cmsTokenValid = false;

    if (cmsUserRaw) {
        try {
            cmsUser = JSON.parse(cmsUserRaw);
            console.log("   - Token CMS parsé:", {
                hasToken: !!cmsUser.token,
                tokenType: typeof cmsUser.token,
                tokenLength: cmsUser.token ? cmsUser.token.length : 0,
                tokenPreview: cmsUser.token ? cmsUser.token.substring(0, 30) + '...' : 'N/A',
                hasId: !!cmsUser.id,
                id: cmsUser.id,
                hasEmail: !!cmsUser.email,
                email: cmsUser.email,
                hasLogin: !!cmsUser.login,
                login: cmsUser.login,
                backendName: cmsUser.backendName
            });

            // Validation selon la logique actuelle
            cmsTokenValid = cmsUser &&
                           cmsUser.token &&
                           typeof cmsUser.token === 'string' &&
                           cmsUser.token.trim() !== '' &&
                           cmsUser.token !== '[]' &&
                           cmsUser.token !== 'undefined' &&
                           cmsUser.token !== 'null';

            console.log("   - Token CMS valide selon validation actuelle:", cmsTokenValid);
        } catch (e) {
            console.error("   - Erreur de parsing du token CMS:", e);
        }
    } else {
        console.log("   - Aucun token CMS dans localStorage");
    }

    // 4. Vérifier la session Appwrite
    console.log("📋 4. VÉRIFICATION SESSION APPWRITE");
    let appwriteUser = null;
    let appwriteSessionValid = false;

    try {
        if (window.AppwriteClient) {
            const account = await window.AppwriteClient.getAccount();
            appwriteUser = await account.get();
            appwriteSessionValid = true;
            console.log("   - Session Appwrite active:", {
                id: appwriteUser.$id,
                email: appwriteUser.email,
                name: appwriteUser.name,
                emailVerification: appwriteUser.emailVerification,
                status: appwriteUser.status
            });
        } else {
            console.log("   - AppwriteClient non disponible, tentative directe...");
            const client = new window.Appwrite.Client()
                .setEndpoint("https://cloud.appwrite.io/v1")
                .setProject("689725820024e81781b7");
            const account = new window.Appwrite.Account(client);
            appwriteUser = await account.get();
            appwriteSessionValid = true;
            console.log("   - Session Appwrite active (directe):", {
                id: appwriteUser.$id,
                email: appwriteUser.email,
                name: appwriteUser.name
            });
        }
    } catch (e) {
        console.log("   - Pas de session Appwrite active:", e.message);
    }

    // 5. Tester la fonction cms-auth
    console.log("📋 5. TEST DE LA FONCTION CMS-AUTH");
    if (appwriteSessionValid) {
        try {
            const functions = window.AppwriteClient ?
                await window.AppwriteClient.getFunctions() :
                new window.Appwrite.Functions(new window.Appwrite.Client()
                    .setEndpoint("https://cloud.appwrite.io/v1")
                    .setProject("689725820024e81781b7"));

            console.log("   - Appel de la fonction cms-auth...");
            const response = await functions.createExecution(
                "68976500002eb5c6ee4f",
                '',
                false
            );

            console.log("   - Réponse de la fonction:", {
                statusCode: response.responseStatusCode,
                responseBody: response.responseBody
            });

            if (response.responseStatusCode === 200) {
                const functionResult = JSON.parse(response.responseBody);
                console.log("   - Contenu de la réponse:", {
                    hasToken: !!functionResult.token,
                    tokenLength: functionResult.token ? functionResult.token.length : 0,
                    tokenPreview: functionResult.token ? functionResult.token.substring(0, 30) + '...' : 'N/A',
                    backendName: functionResult.backendName,
                    id: functionResult.id,
                    email: functionResult.email,
                    login: functionResult.login
                });
            }
        } catch (e) {
            console.error("   - Erreur lors de l'appel de la fonction cms-auth:", e);
        }
    } else {
        console.log("   - Session Appwrite requise pour tester la fonction cms-auth");
    }

    // 6. Résumé et recommandations
    console.log("📋 6. RÉSUMÉ ET RECOMMANDATIONS");
    console.log("   - Session Appwrite valide:", appwriteSessionValid);
    console.log("   - Token CMS valide:", cmsTokenValid);
    console.log("   - État d'authentification cohérent:", appwriteSessionValid && cmsTokenValid);

    if (!appwriteSessionValid && !cmsTokenValid) {
        console.log("   ✅ État normal : utilisateur non connecté");
    } else if (appwriteSessionValid && cmsTokenValid) {
        console.log("   ✅ État normal : utilisateur authentifié");
    } else if (appwriteSessionValid && !cmsTokenValid) {
        console.log("   ⚠️ Problème : session Appwrite OK mais token CMS manquant/invalide");
        console.log("   → La fonction setupCmsAuthentication devrait être appelée");
    } else {
        console.log("   ⚠️ Problème : token CMS présent mais pas de session Appwrite");
        console.log("   → Le token CMS devrait être nettoyé");
    }

    console.log("🔧 === FIN DU DIAGNOSTIC ===");
};

/**
 * Fonction pour nettoyer complètement l'authentification
 */
window.clearAllAuth = function() {
    console.log("🧹 Nettoyage complet de l'authentification...");
    localStorage.removeItem('sveltia-cms.user');
    localStorage.removeItem('appwrite-user-email');
    localStorage.removeItem('appwrite-user-name');
    console.log("✅ Nettoyage terminé");
};

/**
 * Fonction pour simuler la validation du token CMS
 */
window.validateCmsToken = function(token) {
    console.log("🔍 Validation du token CMS:", token);

    const isValid = token &&
                   typeof token === 'string' &&
                   token.trim() !== '' &&
                   token !== '[]' &&
                   token !== 'undefined' &&
                   token !== 'null';

    console.log("Résultat de validation:", isValid);
    return isValid;
};

console.log("🔧 Scripts de diagnostic chargés !");
console.log("Utilisez debugAuth() pour diagnostiquer l'authentification");
console.log("Utilisez clearAllAuth() pour nettoyer complètement");
console.log("Utilisez validateCmsToken(token) pour tester la validation");
