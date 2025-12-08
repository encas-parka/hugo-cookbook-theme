import { MediaQuery } from "svelte/reactivity";
import { toastService } from "../services/toast.service.svelte";
import type { OverrideConflict } from "../services/hugo-sync-json";
import { getAppwriteInstances, clearAppwriteCache } from "../services/appwrite";
import { getUserTeamIds } from "../services/appwrite-teams";
import type { Models } from "appwrite";

class GlobalState {
  private isMobileQuery = new MediaQuery("max-width: 1024px");

  // =============================================================================
  // AUTHENTIFICATION
  // =============================================================================

  #user = $state<Models.User<Models.Preferences> | null>(null);
  #userTeams = $state<string[]>([]);
  #authLoading = $state(false);
  #authError = $state<string | null>(null);
  #authInitialized = $state(false);

  get user() {
    return this.#user;
  }

  get userId() {
    return this.#user?.$id ?? null;
  }

  get userEmail() {
    return this.#user?.email ?? null;
  }

  get userTeams() {
    return this.#userTeams;
  }

  get isAuthenticated() {
    return this.#user !== null;
  }

  get authLoading() {
    return this.#authLoading;
  }

  get authError() {
    return this.#authError;
  }

  get authInitialized() {
    return this.#authInitialized;
  }

  /**
   * Initialise l'authentification
   * Récupère l'utilisateur connecté et ses équipes
   */
  async initializeAuth(): Promise<void> {
    if (this.#authInitialized) {
      console.log("[GlobalState] Authentification déjà initialisée");
      return;
    }

    console.log("[GlobalState] Initialisation de l'authentification...");
    this.#authLoading = true;
    this.#authError = null;

    try {
      // Récupérer l'utilisateur connecté
      const { account } = await getAppwriteInstances();
      this.#user = await account.get();

      // LEGACY
      localStorage.setItem("appwrite-user-name", this.#user.name);
      localStorage.setItem("appwrite-user-email", this.#user.email);
      localStorage.setItem("appwrite-user-id", this.#user.$id);

      // Récupérer les équipes
      this.#userTeams = await getUserTeamIds();

      console.log(
        `[GlobalState] Authentifié: ${this.#user.name} (${this.#userTeams.length} équipes)`,
      );
    } catch (error) {
      // Pas connecté ou erreur
      this.#user = null;
      this.#userTeams = [];
      this.#authError =
        error instanceof Error ? error.message : "Erreur d'authentification";

      console.log("[GlobalState] Utilisateur non connecté");
    } finally {
      this.#authLoading = false;
      this.#authInitialized = true; // ✅ Toujours marquer comme initialisé
    }
  }

  /**
   * Réinitialise l'authentification après un login/inscription réussie
   * Force la mise à jour de l'état utilisateur et des équipes
   */
  async refreshAuthAfterLogin(): Promise<void> {
    console.log("[GlobalState] Réinitialisation après login...");
    this.#authLoading = true;
    this.#authError = null;

    try {
      // Récupérer le nouvel utilisateur connecté
      const { account } = await getAppwriteInstances();
      this.#user = await account.get();

      // Mettre à jour localStorage
      localStorage.setItem("appwrite-user-name", this.#user.name);
      localStorage.setItem("appwrite-user-email", this.#user.email);
      localStorage.setItem("appwrite-user-id", this.#user.$id);

      // Récupérer les équipes de l'utilisateur
      this.#userTeams = await getUserTeamIds();

      console.log(
        `[GlobalState] Réinitialisé après login: ${this.#user.name} (${this.#userTeams.length} équipes)`,
      );
    } catch (error) {
      console.error("[GlobalState] Erreur lors de la réinitialisation:", error);
      this.#authError =
        error instanceof Error ? error.message : "Erreur de réinitialisation";
    } finally {
      this.#authLoading = false;
    }
  }

  /**
   * Déconnexion
   */
  async logout(): Promise<void> {
    try {
      // Déconnexion Appwrite (supprime toutes les sessions)
      const { account } = await getAppwriteInstances();
      await account.deleteSession({ sessionId: "current" });

      // Nettoyer le cache Appwrite
      clearAppwriteCache();

      // @LEGACY : Nettoyer localStorage
      localStorage.removeItem("appwrite-user-name");
      localStorage.removeItem("appwrite-user-email");
      localStorage.removeItem("appwrite-user-id");

      // Réinitialiser l'état
      this.#user = null;
      this.#userTeams = [];
      this.#authInitialized = false;

      console.log("[GlobalState] Déconnexion réussie");
    } catch (error) {
      console.error("[GlobalState] Erreur lors de la déconnexion:", error);
      throw error;
    }
  }

  /**
   * Rafraîchit les équipes de l'utilisateur
   * Utile après l'initialisation complète d'Appwrite
   */
  async refreshTeams(): Promise<void> {
    if (!this.#user) {
      console.warn(
        "[GlobalState] Impossible de rafraîchir les équipes: utilisateur non connecté",
      );
      return;
    }

    try {
      const teams = await getUserTeamIds();

      // Mettre à jour seulement si on a récupéré des équipes
      // ou si c'était vide avant (cas d'initialisation)
      if (teams.length > 0 || this.#userTeams.length === 0) {
        this.#userTeams = teams;
        console.log(
          `[GlobalState] Équipes rafraîchies: ${this.#userTeams.length}`,
        );
      }
    } catch (error) {
      console.error(
        "[GlobalState] Erreur lors du rafraîchissement des équipes:",
        error,
      );
    }
  }

  // =============================================================================
  // UI STATE
  // =============================================================================

  get isMobile() {
    return this.isMobileQuery.current;
  }

  get isDesktop() {
    return !this.isMobile;
  }

  userName() {
    // Utiliser le user authentifié si disponible, sinon localStorage
    return this.#user?.name || localStorage.getItem("appwrite-user-name") || "";
  }

  /** Accès aux toasts */
  get toasts() {
    return toastService.toasts;
  }

  /** Accès direct au service de toast */
  get toast() {
    return toastService;
  }

  modalOverride = $state({
    isOpen: false,
    conflicts: [] as OverrideConflict[],
  });

  modal = $state({
    isOpen: false,
  });

  backgroundOperation = $state({
    isRunning: false,
    name: "",
    progress: 0,
  });

  authModal = $state({ isOpen: false });
}

export const globalState = new GlobalState();
