/**
 * Service Appwrite pour les équipes
 *
 * Utilise l'API Teams native d'Appwrite
 * Documentation: https://appwrite.io/docs/references/cloud/client-web/teams
 */

import { ID } from "appwrite";
import { getAppwriteInstances, getAppwriteConfig } from "./appwrite";

// =============================================================================
// TEAMS CRUD
// =============================================================================

/**
 * Liste toutes les équipes de l'utilisateur
 */
export async function listUserTeams() {
  try {
    const { teams } = await getAppwriteInstances();
    return await teams.list();
  } catch (error) {
    console.error("[teams] Error listing teams:", error);
    throw error;
  }
}

/**
 * Récupère une équipe par ID
 */
export async function getTeam(teamId: string) {
  try {
    const { teams } = await getAppwriteInstances();
    return await teams.get(teamId);
  } catch (error) {
    console.error(`[teams] Error getting team ${teamId}:`, error);
    throw error;
  }
}

/**
 * Crée une nouvelle équipe
 */
export async function createTeam(name: string, roles?: string[]) {
  try {
    const { teams } = await getAppwriteInstances();
    const teamId = ID.unique();
    const team = await teams.create(teamId, name, roles);
    console.log(`[teams] Team created: ${teamId}`);
    return team;
  } catch (error) {
    console.error("[teams] Error creating team:", error);
    throw error;
  }
}

/**
 * Met à jour une équipe
 */
export async function updateTeam(teamId: string, name: string) {
  try {
    const { teams } = await getAppwriteInstances();
    const team = await teams.updateName(teamId, name);
    console.log(`[teams] Team updated: ${teamId}`);
    return team;
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
    const { teams } = await getAppwriteInstances();
    await teams.delete({ teamId });
    console.log(`[teams] Team deleted: ${teamId}`);
  } catch (error) {
    console.error(`[teams] Error deleting team ${teamId}:`, error);
    throw error;
  }
}

// =============================================================================
// MEMBERSHIPS
// =============================================================================

/**
 * Liste les membres d'une équipe
 */
export async function listTeamMembers(teamId: string) {
  try {
    const { teams } = await getAppwriteInstances();
    return await teams.listMemberships({ teamId: teamId });
  } catch (error) {
    console.error(`[teams] Error listing members of team ${teamId}:`, error);
    throw error;
  }
}

/**
 * Crée une invitation pour rejoindre une équipe
 */
export async function createTeamMembership(
  teamId: string,
  email: string,
  roles: string[],
  url: string,
) {
  try {
    const { teams } = await getAppwriteInstances();
    const membership = await teams.createMembership({
      teamId,
      roles: roles,
      email: email,
      url: url,
    });
    console.log(`[teams] Membership created for ${email} in team ${teamId}`);
    return membership;
  } catch (error) {
    console.error(`[teams] Error creating membership:`, error);
    throw error;
  }
}

/**
 * Met à jour les rôles d'un membre
 */
export async function updateMembershipRoles(
  teamId: string,
  membershipId: string,
  roles: string[],
) {
  try {
    const { teams } = await getAppwriteInstances();
    const membership = await teams.updateMembership({
      teamId: teamId,
      membershipId: membershipId,
      roles: roles,
    });
    console.log(`[teams] Membership ${membershipId} roles updated`);
    return membership;
  } catch (error) {
    console.error(`[teams] Error updating membership roles:`, error);
    throw error;
  }
}

/**
 * Supprime un membre d'une équipe
 */
export async function deleteTeamMembership(
  teamId: string,
  membershipId: string,
): Promise<void> {
  try {
    const { teams } = await getAppwriteInstances();
    await teams.deleteMembership({
      teamId: teamId,
      membershipId: membershipId,
    });
    console.log(
      `[teams] Membership ${membershipId} deleted from team ${teamId}`,
    );
  } catch (error) {
    console.error(`[teams] Error deleting membership:`, error);
    throw error;
  }
}

// =============================================================================
// HELPERS
// =============================================================================

/**
 * Récupère les IDs de toutes les équipes de l'utilisateur
 * Retourne un tableau vide si Appwrite n'est pas encore initialisé
 */
export async function getUserTeamIds(): Promise<string[]> {
  try {
    const teamsList = await listUserTeams();
    return teamsList.teams.map((team: any) => team.$id);
  } catch (error) {
    // Si Appwrite n'est pas encore initialisé, retourner un tableau vide
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
