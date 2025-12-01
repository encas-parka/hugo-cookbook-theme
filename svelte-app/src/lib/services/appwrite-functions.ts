/**
 * Service pour les appels aux fonctions cloud Appwrite
 */

import { getAppwriteInstances, getAppwriteConfig } from './appwrite';

const { APPWRITE_CONFIG } = getAppwriteConfig();

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
        action: 'checkEmails',
        emails,
      }),
      async: false,
    });

    const result = JSON.parse(response.responseBody);

    if (!result.success) {
      throw new Error(result.error || 'Erreur lors de la vérification des emails');
    }

    return result.data;
  } catch (error) {
    console.error('[appwrite-functions] Erreur checkUserEmails:', error);
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
  message?: string,
): Promise<void> {
  try {
    const { functions } = await getAppwriteInstances();

    const response = await functions.createExecution({
      functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
      body: JSON.stringify({
        action: 'invite',
        context: {
          type: 'event',
          id: eventId,
          name: eventName,
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

    console.log(`[appwrite-functions] ${result.processed} invitations envoyées pour l'événement ${eventName}`);
  } catch (error) {
    console.error('[appwrite-functions] Erreur inviteToEvent:', error);
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
        action: 'invite',
        context: {
          type: 'team',
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

    console.log(`[appwrite-functions] ${result.processed} invitations envoyées pour l'équipe ${teamName}`);
  } catch (error) {
    console.error('[appwrite-functions] Erreur inviteToTeam:', error);
    throw error;
  }
}
