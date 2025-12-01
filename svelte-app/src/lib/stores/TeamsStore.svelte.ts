/**
 * TeamsStore - Store de gestion des équipes basées sur la table Kteams avec Svelte 5
 *
 * Architecture:
 * - Gestion des équipes via la table personnalisée Kteams
 * - CRUD équipes (create, update, delete)
 * - Gestion des membres via la fonction Appwrite users_teams_manager
 * - Gestion des contributeurs individuels avec invitations
 * - Cache local pour performance
 * - Realtime pour les changements d'équipes
 *
 * @usage
 * await teamsStore.initialize();
 * const myTeams = teamsStore.teams;
 * await teamsStore.createTeam('Mon équipe');
 * await teamsStore.inviteMembers(['email@example.com'], 'teamId');
 */

import { SvelteMap } from "svelte/reactivity";
import type { Models } from "appwrite";
import type { Kteams } from "../types/appwrite.d";
import {
  listUserTeams,
  getTeam,
  getTeamWithMembers,
  createTeam as createKteam,
  updateTeam as updateKteam,
  deleteTeam as deleteKteam,
  addMember,
  removeMember,
  inviteMembers,
  acceptInvitation,
  getUserTeamIds,
  isTeamMember,
} from "../services/appwrite-teams";
import { globalState } from "./GlobalState.svelte";

// =============================================================================
// TYPES
// =============================================================================

export interface TeamWithMembers extends Kteams {
  members?: any[]; // Informations détaillées sur les membres
}

/**
 * Informations sur une invitation envoyée
 */
export interface InvitationInfo {
  id: string;
  email: string;
  name?: string;
  status: "invited" | "accepted" | "declined";
  invitedAt: string;
  respondedAt?: string;
  eventId?: string; // L'événement auquel le contributeur est invité
  teamId?: string; // L'équipe concernée
}

/**
 * Informations sur un contributeur
 */
export interface ContributorInfo {
  id: string;
  email?: string;
  name?: string;
  status: "invited" | "accepted" | "declined";
  invitedAt: string;
  respondedAt?: string;
  teamId?: string;
}

// =============================================================================
// STORE SINGLETON
// =============================================================================

export class TeamsStore {
  // État réactif - Équipes
  #teams = new SvelteMap<string, TeamWithMembers>();

  // État réactif - Contributeurs/Invitations
  #contributors = new SvelteMap<string, ContributorInfo>(); // Clé: contributorId
  #invitations = new SvelteMap<string, InvitationInfo>(); // Clé: invitationId

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

  /**
   * Liste des contributeurs
   */
  get contributors() {
    return Array.from(this.#contributors.values());
  }

  /**
   * Liste des invitations
   */
  get invitations() {
    return Array.from(this.#invitations.values());
  }

  /**
   * Nombre de contributeurs
   */
  get contributorsCount() {
    return this.#contributors.size;
  }

  /**
   * Nombre d'invitations en attente
   */
  get pendingInvitationsCount() {
    return Array.from(this.#invitations.values()).filter(
      (inv) => inv.status === "invited",
    ).length;
  }

  // =============================================================================
  // INITIALISATION
  // =============================================================================

  /**
   * Initialise le store
   * 1. Récupère userId
   * 2. Charge les équipes de l'utilisateur
   * 3. Charge les membres de chaque équipe
   * 4. Charge les contributeurs et invitations
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

      // 3. Charger les contributeurs et invitations
      await this.#loadContributors();
      await this.#loadInvitations();

      this.#isInitialized = true;
      console.log(
        `[TeamsStore] Initialisation complétée: ${this.#teams.size} équipes, ${this.#contributors.size} contributeurs, ${this.#invitations.size} invitations`,
      );
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur lors de l'initialisation";
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
          const { team: teamDetails, members } = await getTeamWithMembers(
            team.$id,
          );
          this.#teams.set(team.$id, {
            ...teamDetails,
            members,
          });
        } catch (err) {
          console.error(
            `[TeamsStore] Erreur lors du chargement des membres de ${team.$id}:`,
            err,
          );
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
      const { team: teamDetails, members } = await getTeamWithMembers(teamId);
      if (teamDetails) {
        const teamWithMembers = { ...teamDetails, members };
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
  getTeamMembers(teamId: string): any[] | undefined {
    const team = this.#teams.get(teamId);
    return team?.members;
  }

  /**
   * Récupère un contributeur par ID
   */
  getContributorById(contributorId: string): ContributorInfo | null {
    return this.#contributors.get(contributorId) || null;
  }

  /**
   * Récupère une invitation par ID
   */
  getInvitationById(invitationId: string): InvitationInfo | null {
    return this.#invitations.get(invitationId) || null;
  }

  /**
   * Récupère les invitations pour un événement spécifique
   */
  getInvitationsByEventId(eventId: string): InvitationInfo[] {
    return Array.from(this.#invitations.values()).filter(
      (inv) => inv.eventId === eventId,
    );
  }

  /**
   * Récupère les invitations en attente
   */
  getPendingInvitations(): InvitationInfo[] {
    return Array.from(this.#invitations.values()).filter(
      (inv) => inv.status === "invited",
    );
  }

  /**
   * Vérifie si une adresse email est valide
   */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // =============================================================================
  // API PUBLIQUE - CRUD ÉQUIPES
  // =============================================================================

  /**
   * Crée une nouvelle équipe
   */
  async createTeam(
    name: string,
    description?: string,
  ): Promise<TeamWithMembers> {
    if (!globalState.userId) {
      throw new Error("Utilisateur non connecté");
    }

    try {
      const team = await createKteam(name, description);

      // Charger les membres (devrait contenir le créateur)
      const { members } = await getTeamWithMembers(team.$id);
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
  async updateTeam(
    teamId: string,
    name?: string,
    description?: string,
  ): Promise<TeamWithMembers> {
    try {
      const team = await updateKteam(teamId, name, description);

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
      console.error(
        `[TeamsStore] Erreur lors de la mise à jour de ${teamId}:`,
        err,
      );
      throw err;
    }
  }

  /**
   * Supprime une équipe
   */
  async deleteTeam(teamId: string): Promise<void> {
    try {
      await deleteKteam(teamId);
      this.#teams.delete(teamId);
      console.log(`[TeamsStore] Équipe supprimée: ${teamId}`);
    } catch (err) {
      console.error(
        `[TeamsStore] Erreur lors de la suppression de ${teamId}:`,
        err,
      );
      throw err;
    }
  }

  // =============================================================================
  // API PUBLIQUE - GESTION MEMBRES
  // =============================================================================

  /**
   * Invite des membres à rejoindre une équipe
   */
  async inviteMembers(
    teamId: string,
    emails: string[],
    message?: string,
  ): Promise<void> {
    try {
      await inviteMembers(teamId, emails, message);

      // Recharger l'équipe pour mettre à jour la liste d'invitations
      await this.fetchTeam(teamId);

      console.log(`[TeamsStore] Membres invités dans ${teamId}`);
    } catch (err) {
      console.error(`[TeamsStore] Erreur lors de l'invitation:`, err);
      throw err;
    }
  }

  /**
   * Ajoute un membre à une équipe
   */
  async addMember(
    teamId: string,
    userId: string,
    userEmail?: string,
  ): Promise<void> {
    try {
      await addMember(teamId, userId, userEmail);

      // Recharger l'équipe pour mettre à jour la liste des membres
      await this.fetchTeam(teamId);

      console.log(`[TeamsStore] Membre ajouté à ${teamId}: ${userId}`);
    } catch (err) {
      console.error(`[TeamsStore] Erreur lors de l'ajout du membre:`, err);
      throw err;
    }
  }

  /**
   * Supprime un membre d'une équipe
   */
  async removeMember(teamId: string, userId: string): Promise<void> {
    try {
      await removeMember(teamId, userId);

      // Recharger l'équipe pour mettre à jour la liste des membres
      await this.fetchTeam(teamId);

      console.log(`[TeamsStore] Membre supprimé de ${teamId}: ${userId}`);
    } catch (err) {
      console.error(
        `[TeamsStore] Erreur lors de la suppression du membre:`,
        err,
      );
      throw err;
    }
  }

  // =============================================================================
  // API PUBLIQUE - GESTION DES CONTRIBUTEURS ET INVITATIONS
  // =============================================================================

  /**
   * Ajoute un contributeur à un événement
   */
  async addContributor(
    contributorId: string,
    email?: string,
    name?: string,
    eventId?: string,
  ): Promise<ContributorInfo> {
    try {
      const contributor: ContributorInfo = {
        id: contributorId,
        email,
        name,
        status: "accepted",
        invitedAt: new Date().toISOString(),
      };

      this.#contributors.set(contributorId, contributor);

      console.log(`[TeamsStore] Contributeur ajouté: ${contributorId}`);
      return contributor;
    } catch (err) {
      console.error(
        "[TeamsStore] Erreur lors de l'ajout du contributeur:",
        err,
      );
      throw err;
    }
  }

  /**
   * Supprime un contributeur
   */
  removeContributor(contributorId: string): void {
    if (this.#contributors.has(contributorId)) {
      this.#contributors.delete(contributorId);
      console.log(`[TeamsStore] Contributeur supprimé: ${contributorId}`);
    }
  }

  /**
   * Invite un contributeur par email
   */
  async inviteContributorByEmail(
    email: string,
    eventId: string,
    teamId?: string,
  ): Promise<InvitationInfo> {
    if (!this.isValidEmail(email)) {
      throw new Error("Adresse email invalide");
    }

    try {
      // Vérifier si l'email a déjà été invité pour cet événement
      const existingInvitation = Array.from(this.#invitations.values()).find(
        (inv) => inv.email === email && inv.eventId === eventId,
      );

      if (existingInvitation) {
        throw new Error("Cet email a déjà été invité pour cet événement");
      }

      const invitationId = ID.unique();
      const invitation: InvitationInfo = {
        id: invitationId,
        email,
        status: "invited",
        invitedAt: new Date().toISOString(),
        eventId,
        teamId,
      };

      this.#invitations.set(invitationId, invitation);

      console.log(
        `[TeamsStore] Invitation envoyée: ${email} pour l'événement ${eventId}`,
      );
      return invitation;
    } catch (err) {
      console.error("[TeamsStore] Erreur lors de l'invitation:", err);
      throw err;
    }
  }

  /**
   * Accepte une invitation
   */
  async acceptInvitation(invitationId: string): Promise<void> {
    try {
      const invitation = this.#invitations.get(invitationId);
      if (!invitation) {
        throw new Error("Invitation introuvable");
      }

      // Mettre à jour le statut de l'invitation
      const updatedInvitation: InvitationInfo = {
        ...invitation,
        status: "accepted",
        respondedAt: new Date().toISOString(),
      };

      this.#invitations.set(invitationId, updatedInvitation);

      // Ajouter comme contributeur accepté si l'ID utilisateur est disponible
      if (globalState.userId) {
        const contributor: ContributorInfo = {
          id: globalState.userId,
          email: invitation.email,
          name: invitation.name,
          status: "accepted",
          invitedAt: invitation.invitedAt,
          respondedAt: updatedInvitation.respondedAt,
          teamId: invitation.teamId,
        };

        this.#contributors.set(globalState.userId, contributor);

        // Si l'invitation concerne une équipe, ajouter l'utilisateur à l'équipe
        if (invitation.teamId) {
          await acceptInvitation(globalState.userId, invitation.teamId);
          await this.fetchTeam(invitation.teamId);
        }
      }

      console.log(`[TeamsStore] Invitation acceptée: ${invitationId}`);
    } catch (err) {
      console.error("[TeamsStore] Erreur lors de l'acceptation:", err);
      throw err;
    }
  }

  /**
   * Refuse une invitation
   */
  async declineInvitation(invitationId: string): Promise<void> {
    try {
      const invitation = this.#invitations.get(invitationId);
      if (!invitation) {
        throw new Error("Invitation introuvable");
      }

      // Mettre à jour le statut de l'invitation
      const updatedInvitation: InvitationInfo = {
        ...invitation,
        status: "declined",
        respondedAt: new Date().toISOString(),
      };

      this.#invitations.set(invitationId, updatedInvitation);

      console.log(`[TeamsStore] Invitation refusée: ${invitationId}`);
    } catch (err) {
      console.error("[TeamsStore] Erreur lors du refus:", err);
      throw err;
    }
  }

  /**
   * Annule une invitation en attente
   */
  async cancelInvitation(invitationId: string): Promise<void> {
    try {
      const invitation = this.#invitations.get(invitationId);
      if (!invitation) {
        throw new Error("Invitation introuvable");
      }

      if (invitation.status !== "invited") {
        throw new Error(
          "Seules les invitations en attente peuvent être annulées",
        );
      }

      this.#invitations.delete(invitationId);

      console.log(`[TeamsStore] Invitation annulée: ${invitationId}`);
    } catch (err) {
      console.error("[TeamsStore] Erreur lors de l'annulation:", err);
      throw err;
    }
  }

  // =============================================================================
  // MÉTHODES PRIVÉES
  // =============================================================================

  /**
   * Charge les contributeurs depuis la table Kteams
   */
  async #loadContributors(): Promise<void> {
    try {
      console.log("[TeamsStore] Chargement des contributeurs...");

      this.#contributors.clear();

      // Parcourir toutes les équipes pour extraire les contributeurs
      const teams = this.teams;
      for (const team of teams) {
        // Ajouter les membres comme contributeurs
        if (team.membersId) {
          for (let i = 0; i < team.membersId.length; i++) {
            const memberId = team.membersId[i];
            const memberEmail = team.members[i] || "";

            if (!this.#contributors.has(memberId)) {
              this.#contributors.set(memberId, {
                id: memberId,
                email: memberEmail,
                name: memberEmail.split("@")[0], // Extraire le nom de l'email
                status: "accepted",
                invitedAt: new Date().toISOString(),
                teamId: team.$id,
              });
            }
          }
        }
      }

      console.log(
        `[TeamsStore] ${this.#contributors.size} contributeurs chargés`,
      );
    } catch (err) {
      console.error(
        "[TeamsStore] Erreur lors du chargement des contributeurs:",
        err,
      );
      // Ne pas lancer d'erreur, continuer avec un Map vide
    }
  }

  /**
   * Charge les invitations depuis la table Kteams
   */
  async #loadInvitations(): Promise<void> {
    try {
      console.log("[TeamsStore] Chargement des invitations...");

      this.#invitations.clear();

      // Parcourir toutes les équipes pour extraire les invitations
      const teams = this.teams;
      for (const team of teams) {
        // Ajouter les invitations
        if (team.invited) {
          for (const invite of team.invited) {
            try {
              const inviteData = JSON.parse(invite);
              const invitationId = `${team.$id}_${inviteData.id}`;

              this.#invitations.set(invitationId, {
                id: invitationId,
                email: inviteData.email,
                name: inviteData.name,
                status: inviteData.status,
                invitedAt: inviteData.invitedAt,
                respondedAt: inviteData.respondedAt,
                teamId: team.$id,
              });
            } catch (err) {
              console.error("Erreur lors du parsing d'une invitation:", err);
            }
          }
        }
      }

      console.log(
        `[TeamsStore] ${this.#invitations.size} invitations chargées`,
      );
    } catch (err) {
      console.error(
        "[TeamsStore] Erreur lors du chargement des invitations:",
        err,
      );
      // Ne pas lancer d'erreur, continuer avec un Map vide
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
      this.#contributors.clear();
      this.#invitations.clear();

      await Promise.all([
        this.#loadTeams(),
        this.#loadContributors(),
        this.#loadInvitations(),
      ]);

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
    this.#contributors.clear();
    this.#invitations.clear();
    this.#isInitialized = false;
    console.log("[TeamsStore] Ressources nettoyées");
  }
}

// =============================================================================
// EXPORT SINGLETON
// =============================================================================

export const teamsStore = new TeamsStore();
