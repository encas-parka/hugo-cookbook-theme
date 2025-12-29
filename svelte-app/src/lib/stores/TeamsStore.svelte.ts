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
import type { Kteams } from "$lib/types/appwrite.d";
import type {
  EnrichedTeam,
  KTeamMember,
  KTeamInvitation,
} from "$lib/types/aw_kteam.d";
import {
  listUserTeams,
  getTeam,
  createTeam as createKteam,
  updateTeam as updateKteam,
  deleteTeam as deleteKteam,
  addMember,
  removeMember,
  inviteMembers,
  acceptInvitation,
  isTeamMember,
} from "$lib/services/appwrite-teams";
import { globalState } from "./GlobalState.svelte";
import { ID } from "appwrite";

// =============================================================================
// STORE SINGLETON
// =============================================================================

export class TeamsStore {
  // État réactif - Équipes
  #teams = new SvelteMap<string, EnrichedTeam>();

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
   * Invitations en attente pour l'utilisateur connecté
   */
  get myPendingInvitations() {
    if (!globalState.userEmail) return [];

    // Rechercher dans toutes les équipes les invitations correspondant à l'email de l'utilisateur
    const pendingInvites: Array<{
      teamId: string;
      teamName: string;
      invitation: KTeamInvitation;
    }> = [];

    this.#teams.forEach((team) => {
      // Use fallback empty string to avoid undefined checks if email isn't critical here
      const userEmail = globalState.userEmail || "";
      if (!userEmail) return;

      const myInvite = team.invited?.find(
        (inv) =>
          inv.email.toLowerCase() === userEmail.toLowerCase() &&
          inv.status === "invited",
      );

      if (myInvite) {
        pendingInvites.push({
          teamId: team.$id,
          teamName: team.name,
          invitation: myInvite,
        });
      }
    });

    return pendingInvites;
  }

  // =============================================================================
  // INITIALISATION
  // =============================================================================

  /**
   * Initialise le store
   * 1. Récupère userId
   * 2. Charge les équipes de l'utilisateur
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
      console.log(
        `[TeamsStore] Initialisation complétée: ${this.#teams.size} équipes`,
      );
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur lors de l'initialisation";
      this.#error = message;
      // On ne throw pas ici pour ne pas bloquer l'app si les équipes ne chargent pas
      console.error("[TeamsStore] Initialization error (non-fatal):", message);
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

      // Charger les détails et parser les membres de chaque équipe
      for (const team of response.teams) {
        try {
          // Parser les membres
          const parsedMembers: KTeamMember[] = team.members.map((memberStr) =>
            this.#safeParseMember(memberStr),
          );

          // Parser les invitations
          const parsedInvited: KTeamInvitation[] = team.invited
            ? team.invited.map((inviteStr) =>
                this.#safeParseInvitation(inviteStr),
              )
            : [];

          const enrichedTeam: EnrichedTeam = {
            ...team,
            members: parsedMembers,
            invited: parsedInvited,
          };

          this.#teams.set(team.$id, enrichedTeam);
        } catch (err) {
          console.error(
            `[TeamsStore] Erreur lors du parsing de l'équipe ${team.$id}:`,
            err,
          );
        }
      }

      console.log(`[TeamsStore] ${this.#teams.size} équipes chargées`);
    } catch (err) {
      console.error("[TeamsStore] Erreur lors du chargement:", err);
      throw err;
    }
  }

  /**
   * Parse un membre de manière sécurisée
   */
  #safeParseMember(memberStr: string): KTeamMember {
    try {
      if (!memberStr) throw new Error("Empty member string");
      const parsed = JSON.parse(memberStr);
      // Validation basique
      return {
        id: parsed.id || "unknown",
        name: parsed.name || "Inconnu",
        role: parsed.role || "member",
        joinedAt: parsed.joinedAt || new Date().toISOString(),
      };
    } catch (e) {
      // Fallback pour les anciens formats ou données corrompues
      return {
        id: "unknown",
        name: memberStr.includes("@")
          ? memberStr.split("@")[0]
          : memberStr || "Inconnu",
        role: "member",
        joinedAt: new Date().toISOString(),
      };
    }
  }

  /**
   * Parse une invitation de manière sécurisée
   */
  #safeParseInvitation(inviteStr: string): KTeamInvitation {
    try {
      if (!inviteStr) throw new Error("Empty invite string");
      const parsed = JSON.parse(inviteStr);
      return {
        email: parsed.email || "unknown@example.com",
        status: parsed.status || "invited",
        invitedAt: parsed.invitedAt || new Date().toISOString(),
        invitedBy: parsed.invitedBy || "unknown",
        name: parsed.name,
      };
    } catch (e) {
      return {
        email: inviteStr.includes("@") ? inviteStr : "unknown@example.com",
        status: "invited",
        invitedAt: new Date().toISOString(),
        invitedBy: "unknown",
      };
    }
  }

  // =============================================================================
  // API PUBLIQUE - LECTURE
  // =============================================================================

  /**
   * Récupère une équipe par ID
   */
  getTeamById(teamId: string): EnrichedTeam | null {
    return this.#teams.get(teamId) || null;
  }

  /**
   * Récupère une équipe depuis Appwrite (force refresh)
   */
  async fetchTeam(teamId: string): Promise<EnrichedTeam | null> {
    try {
      // On recharge tout pour simplifier le parsing (réutilise la logique de loadTeams mais pour une seule équipe)
      // Mais getTeamWithMembers n'est plus adapté car il retourne {team, members} où members est any[]
      // On va utiliser getTeam directement et parser
      const team = await getTeam(teamId);

      if (team) {
        // Parser les membres
        const parsedMembers: KTeamMember[] = team.members.map((memberStr) =>
          this.#safeParseMember(memberStr),
        );

        // Parser les invitations
        const parsedInvited: KTeamInvitation[] = team.invited
          ? team.invited.map((inviteStr) =>
              this.#safeParseInvitation(inviteStr),
            )
          : [];

        const enrichedTeam: EnrichedTeam = {
          ...team,
          members: parsedMembers,
          invited: parsedInvited,
        };

        this.#teams.set(teamId, enrichedTeam);
        return enrichedTeam;
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
  getTeamMembers(teamId: string): KTeamMember[] | undefined {
    const team = this.#teams.get(teamId);
    return team?.members;
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
  async createTeam(name: string, description?: string): Promise<EnrichedTeam> {
    if (!globalState.userId) {
      throw new Error("Utilisateur non connecté");
    }

    try {
      const team = await createKteam(name, description);

      // Parser le membre créateur (qui est déjà un JSON string dans team.members[0])
      const creatorMember = this.#safeParseMember(team.members[0]);

      const enrichedTeam: EnrichedTeam = {
        ...team,
        members: [creatorMember],
        invited: [],
      };

      this.#teams.set(team.$id, enrichedTeam);
      console.log(`[TeamsStore] Équipe créée: ${team.$id}`);
      return enrichedTeam;
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
  ): Promise<EnrichedTeam> {
    try {
      const team = await updateKteam(teamId, name, description);

      // Garder les membres existants (car updateKteam retourne Kteams avec members stringifiés)
      const existingTeam = this.#teams.get(teamId);

      // Si on a l'équipe en cache, on réutilise ses membres parsés
      // Sinon on parse ceux retournés par l'update (qui sont des strings)
      let members: KTeamMember[] = [];
      let invited: KTeamInvitation[] = [];

      if (existingTeam) {
        members = existingTeam.members;
        invited = existingTeam.invited;
      } else {
        // Fallback parsing si pas en cache (rare)
        members = team.members.map((m) => this.#safeParseMember(m));
        invited = team.invited
          ? team.invited.map((i) => this.#safeParseInvitation(i))
          : [];
      }

      const enrichedTeam: EnrichedTeam = {
        ...team,
        members,
        invited,
      };

      this.#teams.set(teamId, enrichedTeam);
      console.log(`[TeamsStore] Équipe mise à jour: ${teamId}`);
      return enrichedTeam;
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
  async inviteTeamMember(
    teamId: string,
    emails: string[],
    message?: string,
  ): Promise<void> {
    try {
      const result = await inviteMembers(teamId, emails, message);

      // Recharger l'équipe pour mettre à jour la liste d'invitations
      await this.fetchTeam(teamId);

      if (result.emailResults && result.emailResults?.failed > 0) {
        // Avertissement si certains emails ont échoué
        const failedCount = result.emailResults.failed;
        const totalSent = result.emailResults.sent;

        console.warn(
          `[TeamsStore] ${failedCount}/${failedCount + totalSent} invitations n'ont pas pu être envoyées`,
        );

        // TODO use Toast ?
        throw new Error(
          `${result.processed} invitations traitées, mais ${failedCount} emails n'ont pas pu être envoyés. Vérifiez les adresses email et réessayez.`,
        );
      } else {
        console.log(
          `[TeamsStore] ${result.processed} membres invités dans ${teamId}`,
        );
      }
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
      await addMember(teamId, userId, userEmail || "");

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

  /**
   * Accepte une invitation à rejoindre une équipe
   */
  async acceptTeamInvitation(teamId: string): Promise<void> {
    try {
      if (!globalState.userId) throw new Error("Utilisateur non connecté");

      await acceptInvitation(globalState.userId, teamId);

      // Recharger l'équipe
      await this.fetchTeam(teamId);

      console.log(`[TeamsStore] Invitation acceptée pour l'équipe: ${teamId}`);
    } catch (err) {
      console.error("[TeamsStore] Erreur lors de l'acceptation:", err);
      throw err;
    }
  }

  /**
   * Refuse une invitation à rejoindre une équipe
   */
  async declineTeamInvitation(teamId: string): Promise<void> {
    // TODO: Implémenter le refus d'invitation côté Appwrite si nécessaire
    // Pour l'instant, on peut simplement retirer l'utilisateur de la liste 'invited'
    // Mais cela nécessite une fonction cloud ou une logique spécifique
    console.warn("[TeamsStore] declineTeamInvitation non implémenté");
  }

  // =============================================================================
  // MÉTHODES PRIVÉES
  // =============================================================================

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
