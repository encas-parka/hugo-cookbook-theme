/**
 * Service Appwrite pour les équipes basées sur la table Kteams
 *
 * Ce service gère les équipes via une table personnalisée Kteams plutôt que
 * l'API Teams native d'Appwrite. Il offre des fonctionnalités CRUD complètes
 * pour la gestion des équipes et de leurs membres.
 */

import { ID, Query, Permission, Role } from "appwrite";
import { getAppwriteInstances, getAppwriteConfig } from "./appwrite";
import type { Kteams } from "../types/appwrite";
import type { KTeamMember, KTeamInvitation } from "$lib/types/aw_kteam.d";

const { APPWRITE_CONFIG } = getAppwriteConfig();

// =============================================================================
// KTEAMS CRUD
// =============================================================================

/**
 * Liste toutes les équipes auxquelles l'utilisateur a accès
 */
export async function listUserTeams(): Promise<{ teams: Kteams[] }> {
  try {
    const { tables, account } = await getAppwriteInstances();
    const user = await account.get();

    // Récupérer les équipes où l'utilisateur est membre ou a été invité
    // On s'appuie sur les permissions Appwrite : l'utilisateur ne verra que les équipes
    // pour lesquelles il a des droits de lecture (membre ou invité)
    const response = await tables.listRows({
      databaseId: APPWRITE_CONFIG.databaseId,
      tableId: "kteams",
    });

    return { teams: response.rows as unknown as Kteams[] };
  } catch (error) {
    console.error("[teams] Error listing teams:", error);
    throw error;
  }
}

/**
 * Récupère une équipe par ID
 */
export async function getTeam(teamId: string): Promise<Kteams> {
  try {
    const { tables } = await getAppwriteInstances();
    const result = await tables.getRow({
      databaseId: APPWRITE_CONFIG.databaseId,
      tableId: "kteams",
      rowId: teamId,
    });
    return result as unknown as Kteams;
  } catch (error) {
    console.error(`[teams] Error getting team ${teamId}:`, error);
    throw error;
  }
}

/**
 * Crée une nouvelle équipe
 */
export async function createTeam(
  name: string,
  description?: string,
): Promise<Kteams> {
  try {
    const { tables, account } = await getAppwriteInstances();
    const user = await account.get();

    const teamId = ID.unique();

    // Créer l'objet membre pour le créateur
    const creatorMember: KTeamMember = {
      id: user.$id,
      name: user.name,
      role: "owner",
      joinedAt: new Date().toISOString(),
    };

    // Créer l'équipe avec le créateur comme premier membre
    const team = await tables.createRow({
      databaseId: APPWRITE_CONFIG.databaseId,
      tableId: "kteams",
      rowId: teamId,
      data: {
        name,
        description: description || null,
        members: [JSON.stringify(creatorMember)], // Stocker l'objet stringifié
        invited: null,
        main: [], // Pas d'événements associés initialement
      },
      // Donner au créateur tous les droits
      permissions: [
        Permission.read(Role.user(user.$id)),
        Permission.update(Role.user(user.$id)),
        Permission.delete(Role.user(user.$id)),
      ],
    });

    console.log(`[teams] Team created: ${teamId}`);
    return team as unknown as Kteams;
  } catch (error) {
    console.error("[teams] Error creating team:", error);
    throw error;
  }
}

/**
 * Met à jour une équipe
 */
export async function updateTeam(
  teamId: string,
  name?: string,
  description?: string,
): Promise<Kteams> {
  try {
    const { tables } = await getAppwriteInstances();

    const updateData: Partial<Kteams> = {};
    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;

    const team = await tables.updateRow({
      databaseId: APPWRITE_CONFIG.databaseId,
      tableId: "kteams",
      rowId: teamId,
      data: updateData,
    });

    console.log(`[teams] Team updated: ${teamId}`);
    return team as unknown as Kteams;
  } catch (error) {
    console.error(`[teams] Error updating team ${teamId}:`, error);
    throw error;
  }
}

/**
 * Supprime une équipe
 */
export async function deleteTeam(teamId: string): Promise<void> {
  try {
    const { tables } = await getAppwriteInstances();
    await tables.deleteRow({
      databaseId: APPWRITE_CONFIG.databaseId,
      tableId: "kteams",
      rowId: teamId,
    });
    console.log(`[teams] Team deleted: ${teamId}`);
  } catch (error) {
    console.error(`[teams] Error deleting team ${teamId}:`, error);
    throw error;
  }
}

// =============================================================================
// GESTION DES MEMBRES
// =============================================================================

/**
 * Ajoute un membre à une équipe
 */
export async function addMember(
  teamId: string,
  userId: string,
  userName: string,
  userEmail?: string,
): Promise<Kteams> {
  try {
    const { tables } = await getAppwriteInstances();

    // Récupérer l'équipe actuelle
    const team = await getTeam(teamId);

    // Vérifier si le membre est déjà présent
    const isAlreadyMember = team.members.some((memberStr) => {
      try {
        const member = JSON.parse(memberStr);
        return member.id === userId;
      } catch {
        return false;
      }
    });

    // Ajouter le membre s'il n'est pas déjà présent
    if (!isAlreadyMember) {
      // Créer le nouveau membre
      const newMember: KTeamMember = {
        id: userId,
        name: userName,
        role: "member",
        joinedAt: new Date().toISOString(),
      };

      const updatedMembers = [
        ...team.members,
        JSON.stringify(newMember), // Stocker l'objet stringifié
      ];

      // Mettre à jour l'équipe
      const updatedTeam = await tables.updateRow({
        databaseId: APPWRITE_CONFIG.databaseId,
        tableId: "kteams",
        rowId: teamId,
        data: {
          members: updatedMembers,
        },
        // Ajouter les permissions pour le nouveau membre
        permissions: [
          Permission.read(Role.user(userId)),
          Permission.update(Role.user(userId)),
        ],
      });

      console.log(`[teams] Member added to team ${teamId}: ${userId}`);
      return updatedTeam as unknown as Kteams;
    }

    return team; // Retourner l'équipe inchangée si le membre était déjà présent
  } catch (error) {
    console.error(`[teams] Error adding member to team ${teamId}:`, error);
    throw error;
  }
}

/**
 * Supprime un membre d'une équipe
 */
export async function removeMember(
  teamId: string,
  userId: string,
): Promise<Kteams> {
  try {
    const { tables } = await getAppwriteInstances();

    // Récupérer l'équipe actuelle
    const team = await getTeam(teamId);

    // Trouver l'index du membre
    const memberIndex = team.members.findIndex((memberStr) => {
      try {
        const member = JSON.parse(memberStr);
        return member.id === userId;
      } catch {
        return false;
      }
    });

    // Vérifier si le membre est présent
    if (memberIndex !== -1) {
      const updatedMembers = team.members.filter(
        (_, index) => index !== memberIndex,
      );

      // Mettre à jour l'équipe
      const updatedTeam = await tables.updateRow({
        databaseId: APPWRITE_CONFIG.databaseId,
        tableId: "kteams",
        rowId: teamId,
        data: {
          members: updatedMembers,
        },
      });

      console.log(`[teams] Member removed from team ${teamId}: ${userId}`);
      return updatedTeam as unknown as Kteams;
    }

    return team; // Retourner l'équipe inchangée si le membre n'était pas présent
  } catch (error) {
    console.error(`[teams] Error removing member from team ${teamId}:`, error);
    throw error;
  }
}

// =============================================================================
// GESTION DES INVITATIONS
// =============================================================================

/**
 * Invite des utilisateurs à rejoindre une équipe (utilise la fonction Appwrite)
 */
// Dans appwrite-teams.ts
export async function inviteMembers(
  teamId: string,
  emails: string[],
  message?: string,
): Promise<{
  success: boolean;
  processed: number;
  contextName: string;
  emailResults?: {
    sent: number;
    failed: number;
    failures: Array<{ email: string; error: string }>;
  };
}> {
  try {
    const { functions, account } = await getAppwriteInstances();
    const user = await account.get();
    const team = await getTeam(teamId);

    const response = await functions.createExecution({
      functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
      body: JSON.stringify({
        action: "invite",
        emails,
        invitedByName: user.name, // ← Envoyer le nom de l'inviteur
        context: {
          type: "team",
          id: teamId,
          name: team.name,
        },
        message: message || "",
      }),
    });

    const result = JSON.parse(response.responseBody);
    if (!result.success) {
      throw new Error(result.error || "Erreur lors de l'invitation");
    }

    // Si certains emails ont échoué, on lève une erreur partielle
    if (result.emailResults && result.emailResults.failed > 0) {
      console.warn(
        `[teams] Certains emails n'ont pas pu être envoyés pour l'équipe ${teamId}: ${result.emailResults.failed}/${result.emailResults.sent + result.emailResults.failed} échecs`,
      );
    }

    return result;
  } catch (error) {
    console.error(`[teams] Error inviting members to team ${teamId}:`, error);
    throw error;
  }
}

/**
 * Valide une invitation via un secret et récupère un token de session
 */
export async function validateInvitation(
  teamId: string,
  userId: string,
  secret: string,
): Promise<{ token: string; userId: string }> {
  try {
    const { functions } = await getAppwriteInstances();

    const response = await functions.createExecution({
      functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
      body: JSON.stringify({
        action: "exchange-invite",
        teamId,
        userId,
        secret,
      }),
    });

    const result = JSON.parse(response.responseBody);

    if (!result.success) {
      throw new Error(result.error || "L'invitation est invalide ou expirée.");
    }

    return { token: result.token, userId: result.userId };
  } catch (error) {
    console.error("[teams] Error validating invitation:", error);
    throw error;
  }
}

/**
 * Accepte une invitation (utilise la fonction distante)
 */
export async function acceptInvitation(
  userId: string,
  teamId: string,
): Promise<Kteams> {
  try {
    const { functions } = await getAppwriteInstances();

    const response = await functions.createExecution({
      functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
      body: JSON.stringify({
        action: "accept-invitation",
        userId,
        context: {
          type: "team",
          id: teamId,
        },
      }),
    });

    const result = JSON.parse(response.responseBody);
    if (!result.success) {
      throw new Error(result.error || "Erreur lors de l'acceptation");
    }

    // Retourner l'équipe mise à jour
    return await getTeam(teamId);
  } catch (error) {
    console.error(
      `[teams] Error accepting invitation for team ${teamId}:`,
      error,
    );
    throw error;
  }
}

/**
 * Refuse une invitation à rejoindre une équipe
 */
export async function declineInvitation(
  userId: string,
  teamId: string,
): Promise<void> {
  try {
    const { account } = await getAppwriteInstances();
    const user = await account.get();

    // Retirer l'utilisateur de la liste 'invited'
    await removeMember(teamId, userId);
  } catch (error) {
    console.error(
      `[teams] Error declining invitation for team ${teamId}:`,
      error,
    );
    throw error;
  }
}

/**
 * Crée un lien public pour accéder à une équipe
 */
export async function createPublicLink(
  teamId: string,
  expiration: "24h" | "7j" | "30j" = "30j", // TODO
  permissions: ("read" | "write" | "delete")[] = ["read"],
): Promise<{ success: boolean; publicUrl: string; expiresAt: string }> {
  try {
    const { functions } = await getAppwriteInstances();

    // Appeler la fonction Appwrite pour créer le lien public
    const response = await functions.createExecution({
      functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
      body: JSON.stringify({
        action: "public-link",
        collectionId: "kteams",
        documentId: teamId,
        expiration,
        permissions,
      }),
    });

    const result = JSON.parse(response.responseBody);
    if (!result.success) {
      throw new Error(
        result.error || "Erreur lors de la création du lien public",
      );
    }

    console.log(
      `[teams] Public link created for team ${teamId}: ${result.publicUrl}`,
    );
    return result;
  } catch (error) {
    console.error(
      `[teams] Error creating public link for team ${teamId}:`,
      error,
    );
    throw error;
  }
}

// =============================================================================
// HELPERS
// =============================================================================

/**
 * Récupère les IDs de toutes les équipes de l'utilisateur
 * Retourne un tableau vide si l'utilisateur n'est pas authentifié
 */
export async function getUserTeamIds(): Promise<string[]> {
  try {
    const teamsList = await listUserTeams();
    return teamsList.teams.map((team: Kteams) => team.$id);
  } catch (error) {
    console.warn(
      "[teams] Impossible de récupérer les équipes (Appwrite pas encore initialisé?):",
      error,
    );
    return [];
  }
}

/**
 * Vérifie si l'utilisateur est membre d'une équipe
 */
export async function isTeamMember(teamId: string): Promise<boolean> {
  try {
    const teamIds = await getUserTeamIds();
    return teamIds.includes(teamId);
  } catch (error) {
    console.error("[teams] Error checking team membership:", error);
    return false;
  }
}

/**
 * Récupère les informations détaillées d'une équipe avec ses membres
 */
export async function getTeamWithMembers(
  teamId: string,
): Promise<{ team: Kteams; members: any[] }> {
  try {
    const team = await getTeam(teamId);

    // Parser les membres depuis le tableau members
    const members = team.members.map((memberStr) => {
      try {
        return JSON.parse(memberStr);
      } catch (e) {
        // En cas d'erreur de parsing, retourner un objet minimal
        return {
          $id: "unknown",
          email: memberStr.includes("@") ? memberStr : "",
          name: memberStr.includes("@") ? memberStr.split("@")[0] : memberStr,
        };
      }
    });

    return { team, members };
  } catch (error) {
    console.error(`[teams] Error getting team with members ${teamId}:`, error);
    throw error;
  }
}
