/**
 * Service Appwrite pour les équipes basées sur la table Kteams
 *
 * Ce service gère les équipes via une table personnalisée Kteams plutôt que
 * l'API Teams native d'Appwrite. Il offre des fonctionnalités CRUD complètes
 * pour la gestion des équipes et de leurs membres.
 */

import { ID, Query, Permission, Role } from "appwrite";
import { getAppwriteInstances, getAppwriteConfig } from "./appwrite";
import type { Kteams } from "../types/appwrite.d";
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
    const response = await tables.listRows({
      databaseId: APPWRITE_CONFIG.databaseId,
      tableId: "kteams",
      queries: [
        Query.or([
          Query.contains("membersId", user.$id),
          Query.contains("invited", user.$id),
        ]),
      ],
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

    // Créer l'équipe avec le créateur comme premier membre
    const team = await tables.createRow({
      databaseId: APPWRITE_CONFIG.databaseId,
      tableId: "kteams",
      rowId: teamId,
      data: {
        name,
        description: description || null,
        membersId: [user.$id],
        members: [user.email || ""],
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
  userEmail?: string,
): Promise<Kteams> {
  try {
    const { tables } = await getAppwriteInstances();

    // Récupérer l'équipe actuelle
    const team = await getTeam(teamId);

    // Ajouter le membre s'il n'est pas déjà présent
    if (!team.membersId.includes(userId)) {
      const updatedMembersId = [...team.membersId, userId];
      const updatedMembers = [...team.members, userEmail || ""];

      // Mettre à jour l'équipe
      const updatedTeam = await tables.updateRow({
        databaseId: APPWRITE_CONFIG.databaseId,
        tableId: "kteams",
        rowId: teamId,
        data: {
          membersId: updatedMembersId,
          members: updatedMembers,
        },
        // Ajouter les permissions pour le nouveau membre
        permissions: [
          Permission.read(Role.user(userId)),
          Permission.update(Role.user(userId)),
        ],
      });

      // Si l'utilisateur était invité, le retirer de la liste d'invitations
      if (team.invited) {
        const updatedInvited = team.invited.filter(
          (invite) => !JSON.parse(invite).id.includes(userId),
        );

        if (updatedInvited.length !== team.invited.length) {
          await tables.updateRow({
            databaseId: APPWRITE_CONFIG.databaseId,
            tableId: "kteams",
            rowId: teamId,
            data: { invited: updatedInvited },
          });
        }
      }

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

    // Vérifier si le membre est présent
    if (team.membersId.includes(userId)) {
      const updatedMembersId = team.membersId.filter((id) => id !== userId);
      const updatedMembers = team.members.filter(
        (_, index) => team.membersId[index] !== userId,
      );

      // Mettre à jour l'équipe
      const updatedTeam = await tables.updateRow({
        databaseId: APPWRITE_CONFIG.databaseId,
        tableId: "kteams",
        rowId: teamId,
        data: {
          membersId: updatedMembersId,
          members: updatedMembers,
        },
      });

      console.log(`[teams] Member removed from team ${teamId}: ${userId}`);
      return updatedTeam;
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
/**
 * Invite des utilisateurs à rejoindre une équipe (utilise la fonction Appwrite)
 */
export async function inviteMembers(
  teamId: string,
  emails: string[],
  message?: string,
): Promise<{ success: boolean; processed: number; teamName: string }> {
  try {
    const { functions } = await getAppwriteInstances();

    // Appeler la fonction Appwrite pour traiter les invitations
    const response = await functions.createExecution({
      functionId: APPWRITE_CONFIG.functions.usersTeamsManager,
      body: JSON.stringify({
        action: "invite",
        emails,
        teamId,
        message: message || "",
      }),
    });

    const result = JSON.parse(response.responseBody);
    if (!result.success) {
      throw new Error(result.error || "Erreur lors de l'invitation");
    }

    console.log(
      `[teams] Invitations sent for team ${teamId}: ${result.processed} processed`,
    );
    return result;
  } catch (error) {
    console.error(`[teams] Error inviting members to team ${teamId}:`, error);
    throw error;
  }
}

/**
 * Accepte une invitation à rejoindre une équipe
 */
export async function acceptInvitation(
  userId: string,
  teamId: string,
): Promise<Kteams> {
  try {
    const { account } = await getAppwriteInstances();
    const user = await account.get();

    // Ajouter l'utilisateur comme membre
    return await addMember(teamId, userId, user.email);
  } catch (error) {
    console.error(
      `[teams] Error accepting invitation for team ${teamId}:`,
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
  expiration: "24h" | "7j" | "30j" = "24h",
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
    const { account } = await getAppwriteInstances();
    const team = await getTeam(teamId);

    // Récupérer les détails des membres si nécessaire
    // Pour l'instant, on utilise simplement les informations stockées dans l'équipe
    const members = team.membersId.map((memberId, index) => ({
      $id: memberId,
      email: team.members[index] || "",
      name: team.members[index] || "",
    }));

    return { team, members };
  } catch (error) {
    console.error(`[teams] Error getting team with members ${teamId}:`, error);
    throw error;
  }
}
