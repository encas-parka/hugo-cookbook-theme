/**
 * Service pour les appels aux fonctions cloud Appwrite
 */

import { getAppwriteInstances, getAppwriteConfig } from "./appwrite";
import { safeOperation, safeJsonParse } from "$lib/utils/safe-operation";

const { APPWRITE_CONFIG } = getAppwriteConfig();

// 1. Fonction de PING (à appeler au onMount de la page d'invitation)
export async function warmUpFunctions() {
  await safeOperation(
    async () => {
      const { functions } = await getAppwriteInstances();

      // Mode asynchrone (async: true) pour ne pas bloquer l'UI
      await functions.createExecution({
        functionId: "users_teams_manager", // ID de la fonction
        body: JSON.stringify({ action: "ping" }),
        async: true,
      });
    },
    {
      context: "AppwriteFunctions.warmUp",
      timeout: 5000,
      silent: true, // Pas de toast pour le warmup
      errorMessage: undefined, // Pas de message d'erreur
    },
  ).catch(() => {
    // Ignorer les erreurs de warmup
    console.warn("[AppwriteFunctions] Warmup failed (ignorable)");
  });
}

/**
 * Vérifie si des emails existent dans Appwrite
 * @returns Record<email, { id, name } | false>
 */
export async function checkUserEmails(
  emails: string[],
): Promise<Record<string, { id: string; name: string } | false>> {
  return safeOperation(
    async () => {
      const { functions } = await getAppwriteInstances();

      const response = await functions.createExecution({
        functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
        body: JSON.stringify({
          action: "checkEmails",
          emails,
        }),
        async: false,
      });

      // ✅ Parsing sécurisé
      const result = safeJsonParse<any>(response.responseBody, {
        context: "checkUserEmails",
        fallback: null,
      });

      if (!result || !result.success) {
        throw new Error(
          result?.error || "Erreur lors de la vérification des emails",
        );
      }

      return result.data;
    },
    {
      context: "AppwriteFunctions.checkUserEmails",
      timeout: 15000, // 15s pour une cloud function
      errorMessage: "Erreur lors de la vérification des emails",
    },
  );
}

/**
 * Invite des utilisateurs à un événement
 */
export async function inviteToEvent(
  eventId: string,
  eventName: string,
  emails: string[],
  userIds: string[] = [],
  message?: string,
): Promise<void> {
  return safeOperation(
    async () => {
      const { functions } = await getAppwriteInstances();

      const response = await functions.createExecution({
        functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
        body: JSON.stringify({
          action: "invite",
          context: {
            type: "event",
            id: eventId,
            name: eventName,
          },
          emails,
          userIds,
          message,
        }),
        async: false,
      });

      // ✅ Parsing sécurisé
      const result = safeJsonParse<any>(response.responseBody, {
        context: "inviteToEvent",
        fallback: null,
      });

      if (!result || !result.success) {
        throw new Error(result?.error || "Erreur lors de l'invitation");
      }

      console.log(
        `[appwrite-functions] ${result.processed} invitations envoyées pour l'événement ${eventName}`,
      );
    },
    {
      context: "AppwriteFunctions.inviteToEvent",
      timeout: 20000, // 20s pour l'envoi d'emails
      errorMessage: "Erreur lors de l'invitation",
    },
  );
}

/**
 * Invite des utilisateurs à une équipe
 */
export async function inviteToTeam(
  teamId: string,
  teamName: string,
  emails: string[],
  message?: string,
): Promise<void> {
  return safeOperation(
    async () => {
      const { functions } = await getAppwriteInstances();

      const response = await functions.createExecution({
        functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
        body: JSON.stringify({
          action: "invite",
          context: {
            type: "team",
            id: teamId,
            name: teamName,
          },
          emails,
          message,
        }),
        async: false,
      });

      // ✅ Parsing sécurisé
      const result = safeJsonParse<any>(response.responseBody, {
        context: "inviteToTeam",
        fallback: null,
      });

      if (!result || !result.success) {
        throw new Error(result?.error || "Erreur lors de l'invitation");
      }

      console.log(
        `[appwrite-functions] ${result.processed} invitations envoyées pour l'équipe ${teamName}`,
      );
    },
    {
      context: "AppwriteFunctions.inviteToTeam",
      timeout: 20000, // 20s pour l'envoi d'emails
      errorMessage: "Erreur lors de l'invitation",
    },
  );
}

/**
 * Accepte une invitation (équipe ou événement)
 * MAintenant uniquemement pour "team"  on utilise maintenant une fonction client.
 * TOTO : Migrer aussi pour team ?
 */
export async function acceptInvitation(
  contextType: "team" | "event",
  contextId: string,
  userId: string,
): Promise<{
  success: boolean;
  message: string;
  context: { type: string; id: string };
}> {
  return safeOperation(
    async () => {
      const { functions } = await getAppwriteInstances();

      console.log(
        `[appwrite-functions] Envoi de la demande d'acceptation pour ${contextType} ${contextId}`,
      );

      const response = await functions.createExecution({
        functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
        body: JSON.stringify({
          action: "accept-invitation",
          userId,
          context: {
            type: contextType,
            id: contextId,
          },
        }),
        async: false,
      });

      console.log(`[appwrite-functions] Réponse reçue:`, response);

      // Vérifier si responseBody existe et n'est pas vide
      if (!response.responseBody || response.responseBody.trim() === "") {
        throw new Error("Réponse vide de la fonction Appwrite");
      }

      // ✅ Parsing sécurisé
      let result = safeJsonParse<any>(response.responseBody, {
        context: "acceptInvitation",
        fallback: null,
      });

      if (!result) {
        throw new Error("Réponse invalide du serveur");
      }

      if (!result.success) {
        throw new Error(
          result.error || "Erreur lors de l'acceptation de l'invitation",
        );
      }

      console.log(
        `[appwrite-functions] Invitation acceptée avec succès pour ${contextType} ${contextId}`,
      );

      return result;
    },
    {
      context: "AppwriteFunctions.acceptInvitation",
      timeout: 15000, // 15s pour une cloud function
      errorMessage: "Erreur lors de l'acceptation de l'invitation",
    },
  );
}
