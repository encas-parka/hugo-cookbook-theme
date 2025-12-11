/**
 * Service pour les appels aux fonctions cloud Appwrite
 */

import { getAppwriteInstances, getAppwriteConfig } from "./appwrite";

const { APPWRITE_CONFIG } = getAppwriteConfig();

// 1. Fonction de PING (à appeler au onMount de la page d'invitation)
export async function warmUpFunctions() {
  try {
    const { functions } = await getAppwriteInstances();

    // Mode asynchrone (async: true) pour ne pas bloquer l'UI
    await functions.createExecution({
      functionId: "users_teams_manager", // ID de la fonction
      body: JSON.stringify({ action: "ping" }),
      async: true,
    });
  } catch (e) {
    console.warn("Warmup failed", e);
  }
}

/**
 * Vérifie si des emails existent dans Appwrite
 * @returns Record<email, { id, name } | false>
 */
export async function checkUserEmails(
  emails: string[],
): Promise<Record<string, { id: string; name: string } | false>> {
  try {
    const { functions } = await getAppwriteInstances();

    const response = await functions.createExecution({
      functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
      body: JSON.stringify({
        action: "checkEmails",
        emails,
      }),
      async: false,
    });

    const result = JSON.parse(response.responseBody);

    if (!result.success) {
      throw new Error(
        result.error || "Erreur lors de la vérification des emails",
      );
    }

    return result.data;
  } catch (error) {
    console.error("[appwrite-functions] Erreur checkUserEmails:", error);
    throw error;
  }
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
  try {
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

    const result = JSON.parse(response.responseBody);

    if (!result.success) {
      throw new Error(result.error || "Erreur lors de l'invitation");
    }

    console.log(
      `[appwrite-functions] ${result.processed} invitations envoyées pour l'événement ${eventName}`,
    );
  } catch (error) {
    console.error("[appwrite-functions] Erreur inviteToEvent:", error);
    throw error;
  }
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
  try {
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

    const result = JSON.parse(response.responseBody);

    if (!result.success) {
      throw new Error(result.error || "Erreur lors de l'invitation");
    }

    console.log(
      `[appwrite-functions] ${result.processed} invitations envoyées pour l'équipe ${teamName}`,
    );
  } catch (error) {
    console.error("[appwrite-functions] Erreur inviteToTeam:", error);
    throw error;
  }
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
  try {
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

    let result;
    try {
      result = JSON.parse(response.responseBody);
    } catch (parseError) {
      console.error("[appwrite-functions] Erreur de parsing JSON:", parseError);
      console.error(
        "[appwrite-functions] Corps de la réponse:",
        response.responseBody,
      );
      throw new Error(`Réponse invalide du serveur: ${parseError.message}`);
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
  } catch (error) {
    console.error("[appwrite-functions] Erreur acceptInvitation:", error);
    throw error;
  }
}
