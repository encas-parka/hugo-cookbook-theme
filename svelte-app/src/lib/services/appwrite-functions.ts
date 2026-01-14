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
 * Invite des teams natives à un événement
 * @param eventId - ID de l'événement
 * @param eventName - Nom de l'événement
 * @param teamIds - IDs des teams à inviter
 */
export async function inviteTeamsToEvent(
  eventId: string,
  eventName: string,
  teamIds: string[],
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
          teamIds, // Les teamIds (côté serveur, les emails sont récupérés)
        }),
        async: false, // Synchrone pour attendre le batch update
      });

      const result = safeJsonParse<any>(response.responseBody, {
        context: "inviteTeamsToEvent",
        fallback: null,
      });

      if (!result || !result.success) {
        throw new Error(
          result?.error || "Erreur lors de l'invitation des teams",
        );
      }

      console.log(
        `[appwrite-functions] ${teamIds.length} team(s) invitée(s) à l'événement ${eventName}`,
      );
    },
    {
      context: "AppwriteFunctions.inviteTeamsToEvent",
      timeout: 60000, // 60s car batch update peut être long
      errorMessage: "Erreur lors de l'invitation des teams",
    },
  );
}

/**
 * Retire une team d'un événement
 */
export async function removeTeamFromEvent(
  eventId: string,
  teamId: string,
): Promise<void> {
  return safeOperation(
    async () => {
      const { functions } = await getAppwriteInstances();

      const response = await functions.createExecution({
        functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
        body: JSON.stringify({
          action: "remove-user-from-event",
          mainId: eventId,
          teamId: teamId,
        }),
        async: false,
      });

      const result = safeJsonParse<any>(response.responseBody, {
        context: "removeTeamFromEvent",
        fallback: null,
      });

      if (!result || !result.success) {
        throw new Error(result?.error || "Erreur lors du retrait de la team");
      }

      console.log(
        `[appwrite-functions] Team ${teamId} retirée de l'événement ${eventId}`,
      );
    },
    {
      context: "AppwriteFunctions.removeTeamFromEvent",
      timeout: 60000,
      errorMessage: "Erreur lors du retrait de la team",
    },
  );
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
 * Invite des participants (teams et/ou utilisateurs) à un événement
 * Fonction unifiée avec contrôle des emails aux membres existants
 *
 * @param eventId - ID de l'événement
 * @param eventName - Nom de l'événement
 * @param options - Options d'invitation
 *   @param options.teamIds - IDs des teams à inviter
 *   @param options.emails - Emails des utilisateurs à inviter
 *   @param options.userIds - IDs des utilisateurs à inviter
 *   @param options.message - Message personnalisé (optionnel)
 *   @param options.sendEmailToExistingMembers - Envoyer un email aux membres existants (défaut: true)
 *
 * @returns { success: boolean, processed: number, emailResults?: any }
 */
export async function inviteParticipantsToEvent(
  eventId: string,
  eventName: string,
  options: {
    teamIds?: string[];
    emails?: string[];
    userIds?: string[];
    message?: string;
    sendEmailToExistingMembers?: boolean;
  },
): Promise<{ success: boolean; processed: number; emailResults?: any }> {
  const {
    teamIds = [],
    emails = [],
    userIds = [],
    message,
    sendEmailToExistingMembers = true,
  } = options;

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
          teamIds,
          emails,
          userIds,
          message,
          sendEmailToExistingMembers,
        }),
        async: false,
      });

      const result = safeJsonParse<any>(response.responseBody, {
        context: "inviteParticipantsToEvent",
        fallback: null,
      });

      if (!result || !result.success) {
        throw new Error(result?.error || "Erreur lors de l'invitation");
      }

      console.log(
        `[appwrite-functions] ${result.processed} invitations traitées pour ${eventName}`,
      );

      // ✅ Retourner le résultat détaillé
      return result;
    },
    {
      context: "AppwriteFunctions.inviteParticipantsToEvent",
      timeout: 60000, // 60s car batch update peut être long avec les teams
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

/**
 * Retire un utilisateur d'un événement (supprime son Label)
 * @param mainId - ID de l'événement (main)
 * @param userId - ID de l'utilisateur à retirer
 */
export async function removeUserFromEvent(
  mainId: string,
  userId: string,
): Promise<void> {
  return safeOperation(
    async () => {
      const { functions } = await getAppwriteInstances();

      const response = await functions.createExecution({
        functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
        body: JSON.stringify({
          action: "remove-user-from-event",
          mainId,
          userId,
        }),
        async: false,
      });

      const result = safeJsonParse<any>(response.responseBody, {
        context: "removeUserFromEvent",
        fallback: null,
      });

      if (!result || !result.success) {
        throw new Error(
          result?.error || "Erreur lors du retrait de l'utilisateur",
        );
      }

      console.log(
        `[appwrite-functions] Utilisateur ${userId} retiré de l'événement ${mainId}`,
      );
    },
    {
      context: "AppwriteFunctions.removeUserFromEvent",
      timeout: 10000,
      errorMessage: "Erreur lors du retrait de l'utilisateur",
    },
  );
}
