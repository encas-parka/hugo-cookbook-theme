/**
 * TeamsStore - Store de gestion des équipes Appwrite natives avec Svelte 5
 *
 * Architecture:
 * - Gestion des équipes natives Appwrite (pas de collection custom)
 * - CRUD équipes (create, update, delete)
 * - Gestion des membres et rôles
 * - Cache local pour performance
 * - Realtime pour les changements d'équipes
 *
 * @usage
 * await teamsStore.initialize();
 * const myTeams = teamsStore.teams;
 * await teamsStore.createTeam('Mon équipe');
 */

import { SvelteMap } from "svelte/reactivity";
import type { Models } from "appwrite";
import {
  listUserTeams,
  getTeam,
  createTeam as createAppwriteTeam,
  updateTeam as updateAppwriteTeam,
  deleteTeam as deleteAppwriteTeam,
  listTeamMembers,
  createTeamMembership,
  updateMembershipRoles,
  deleteTeamMembership,
  getUserTeamIds,
  isTeamMember,
} from "../services/appwrite-teams";
import { globalState } from "./GlobalState.svelte";

// =============================================================================
// TYPES
// =============================================================================

export interface TeamWithMembers extends Models.Team<Models.Preferences> {
  members?: Models.MembershipList;
}

// =============================================================================
// STORE SINGLETON
// =============================================================================

class TeamsStore {
  // État réactif - Équipes
  #teams = new SvelteMap<string, TeamWithMembers>();
  
  // État UI
  #loading = $state(false);
  #error = $state<string | null>(null);
  #isInitialized = $state(false);



  // Getters publics
  get loading() {
    return this.#loading;
  }

  get error() {
    return this.#error;
  }

  get isInitialized() {
    return this.#isInitialized;
  }

  /**
   * Liste réactive des équipes
   */
  get teams() {
    return Array.from(this.#teams.values());
  }

  /**
   * IDs des équipes de l'utilisateur
   */
  get teamIds() {
    return Array.from(this.#teams.keys());
  }

  /**
   * Nombre d'équipes
   */
  get count() {
    return this.#teams.size;
  }

  // =============================================================================
  // INITIALISATION
  // =============================================================================

  /**
   * Initialise le store
   * 1. Récupère userId
   * 2. Charge les équipes de l'utilisateur
   * 3. Charge les membres de chaque équipe
   */
  async initialize(): Promise<void> {
    if (this.#isInitialized) {
      console.log("[TeamsStore] Déjà initialisé");
      return;
    }

    console.log("[TeamsStore] Initialisation...");
    this.#loading = true;
    this.#error = null;

    try {
      // 1. Vérifier l'authentification
      if (!globalState.userId) {
        console.log("[TeamsStore] Utilisateur non connecté");
        this.#isInitialized = true;
        return;
      }

      // 2. Charger les équipes
      await this.#loadTeams();

      this.#isInitialized = true;
      console.log(`[TeamsStore] Initialisation complétée: ${this.#teams.size} équipes`);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Erreur lors de l'initialisation";
      this.#error = message;
      console.error("[TeamsStore]", message, err);
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  /**
   * Charge les équipes de l'utilisateur
   */
  async #loadTeams(): Promise<void> {
    try {
      console.log("[TeamsStore] Chargement des équipes...");
      
      const response = await listUserTeams();
      
      // Charger les détails et membres de chaque équipe
      for (const team of response.teams) {
        try {
          const members = await listTeamMembers(team.$id);
          this.#teams.set(team.$id, {
            ...team,
            members,
          });
        } catch (err) {
          console.error(`[TeamsStore] Erreur lors du chargement des membres de ${team.$id}:`, err);
          // Ajouter l'équipe sans les membres
          this.#teams.set(team.$id, team);
        }
      }
      
      console.log(`[TeamsStore] ${this.#teams.size} équipes chargées`);
    } catch (err) {
      console.error("[TeamsStore] Erreur lors du chargement:", err);
      throw err;
    }
  }

  // =============================================================================
  // API PUBLIQUE - LECTURE
  // =============================================================================

  /**
   * Récupère une équipe par ID
   */
  getTeamById(teamId: string): TeamWithMembers | null {
    return this.#teams.get(teamId) || null;
  }

  /**
   * Récupère une équipe depuis Appwrite (force refresh)
   */
  async fetchTeam(teamId: string): Promise<TeamWithMembers | null> {
    try {
      const team = await getTeam(teamId);
      if (team) {
        const members = await listTeamMembers(teamId);
        const teamWithMembers = { ...team, members };
        this.#teams.set(teamId, teamWithMembers);
        return teamWithMembers;
      }
      return null;
    } catch (err) {
      console.error(`[TeamsStore] Erreur lors du fetch de ${teamId}:`, err);
      return null;
    }
  }

  /**
   * Vérifie si l'utilisateur est membre d'une équipe
   */
  async isMemberOf(teamId: string): Promise<boolean> {
    return await isTeamMember(teamId);
  }

  /**
   * Récupère les membres d'une équipe
   */
  getTeamMembers(teamId: string): Models.MembershipList | undefined {
    const team = this.#teams.get(teamId);
    return team?.members;
  }

  // =============================================================================
  // API PUBLIQUE - CRUD ÉQUIPES
  // =============================================================================

  /**
   * Crée une nouvelle équipe
   */
  async createTeam(name: string, roles?: string[]): Promise<TeamWithMembers> {
    if (!globalState.userId) {
      throw new Error("Utilisateur non connecté");
    }

    try {
      const team = await createAppwriteTeam(name, roles);
      
      // Charger les membres (devrait contenir le créateur)
      const members = await listTeamMembers(team.$id);
      const teamWithMembers = { ...team, members };
      
      this.#teams.set(team.$id, teamWithMembers);
      console.log(`[TeamsStore] Équipe créée: ${team.$id}`);
      return teamWithMembers;
    } catch (err) {
      console.error("[TeamsStore] Erreur lors de la création:", err);
      throw err;
    }
  }

  /**
   * Met à jour une équipe
   */
  async updateTeam(teamId: string, name: string): Promise<TeamWithMembers> {
    try {
      const team = await updateAppwriteTeam(teamId, name);
      
      // Garder les membres existants
      const existingTeam = this.#teams.get(teamId);
      const teamWithMembers = {
        ...team,
        members: existingTeam?.members,
      };
      
      this.#teams.set(teamId, teamWithMembers);
      console.log(`[TeamsStore] Équipe mise à jour: ${teamId}`);
      return teamWithMembers;
    } catch (err) {
      console.error(`[TeamsStore] Erreur lors de la mise à jour de ${teamId}:`, err);
      throw err;
    }
  }

  /**
   * Supprime une équipe
   */
  async deleteTeam(teamId: string): Promise<void> {
    try {
      await deleteAppwriteTeam(teamId);
      this.#teams.delete(teamId);
      console.log(`[TeamsStore] Équipe supprimée: ${teamId}`);
    } catch (err) {
      console.error(`[TeamsStore] Erreur lors de la suppression de ${teamId}:`, err);
      throw err;
    }
  }

  // =============================================================================
  // API PUBLIQUE - GESTION MEMBRES
  // =============================================================================

  /**
   * Invite un membre à rejoindre une équipe
   */
  async inviteMember(
    teamId: string,
    email: string,
    roles: string[],
    url: string
  ): Promise<void> {
    try {
      await createTeamMembership(teamId, email, roles, url);
      
      // Recharger les membres
      const members = await listTeamMembers(teamId);
      const team = this.#teams.get(teamId);
      if (team) {
        this.#teams.set(teamId, { ...team, members });
      }
      
      console.log(`[TeamsStore] Membre invité dans ${teamId}`);
    } catch (err) {
      console.error(`[TeamsStore] Erreur lors de l'invitation:`, err);
      throw err;
    }
  }

  /**
   * Met à jour les rôles d'un membre
   */
  async updateMemberRoles(
    teamId: string,
    membershipId: string,
    roles: string[]
  ): Promise<void> {
    try {
      await updateMembershipRoles(teamId, membershipId, roles);
      
      // Recharger les membres
      const members = await listTeamMembers(teamId);
      const team = this.#teams.get(teamId);
      if (team) {
        this.#teams.set(teamId, { ...team, members });
      }
      
      console.log(`[TeamsStore] Rôles mis à jour pour ${membershipId}`);
    } catch (err) {
      console.error(`[TeamsStore] Erreur lors de la mise à jour des rôles:`, err);
      throw err;
    }
  }

  /**
   * Supprime un membre d'une équipe
   */
  async removeMember(teamId: string, membershipId: string): Promise<void> {
    try {
      await deleteTeamMembership(teamId, membershipId);
      
      // Recharger les membres
      const members = await listTeamMembers(teamId);
      const team = this.#teams.get(teamId);
      if (team) {
        this.#teams.set(teamId, { ...team, members });
      }
      
      console.log(`[TeamsStore] Membre ${membershipId} supprimé de ${teamId}`);
    } catch (err) {
      console.error(`[TeamsStore] Erreur lors de la suppression du membre:`, err);
      throw err;
    }
  }

  // =============================================================================
  // UTILITAIRES
  // =============================================================================

  /**
   * Force le rechargement des équipes
   */
  async reload(): Promise<void> {
    console.log("[TeamsStore] Rechargement...");
    this.#loading = true;
    this.#error = null;

    try {
      this.#teams.clear();
      await this.#loadTeams();
      console.log("[TeamsStore] Rechargement complété");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur lors du rechargement";
      this.#error = message;
      console.error("[TeamsStore]", message, err);
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  /**
   * Nettoie les ressources
   */
  destroy(): void {
    this.#teams.clear();
    this.#isInitialized = false;
    console.log("[TeamsStore] Ressources nettoyées");
  }
}

// =============================================================================
// EXPORT SINGLETON
// =============================================================================

export const teamsStore = new TeamsStore();
