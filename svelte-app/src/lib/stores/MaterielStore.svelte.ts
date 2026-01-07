import { SvelteMap } from "svelte/reactivity";
import type { Models } from "appwrite";
import { Query } from "appwrite";
import type { Materiel, MaterielLoan } from "$lib/types/appwrite";
import type {
  EnrichedMateriel,
  EnrichedMaterielLoan,
  MaterielFromAppwrite,
  MaterielLoanItem,
  MaterielLoanDetail,
} from "$lib/types/materiel.types";
import {
  listMateriels,
  getMateriel,
  createMateriel,
  updateMateriel,
  deleteMateriel,
  getMaterielRealtimeChannels,
} from "$lib/services/appwrite-materiel";
import {
  listMaterielLoans,
  getMaterielLoan,
  getMaterielLoanRealtimeChannels,
} from "$lib/services/appwrite-materiel-loan";
import {
  createMaterielIDBCache,
  type MaterielIDBCache,
} from "$lib/services/materiel-idb-cache";
import { globalState } from "./GlobalState.svelte";
import { realtimeManager } from "./RealtimeManager.svelte";
import { nativeTeamsStore } from "./NativeTeamsStore.svelte";
import {
  enrichMaterielFromAppwrite,
  enrichLoanFromAppwrite,
  reEnrichMaterielFromLoans,
  parseOwnerFromAppwrite,
  parseLoanItemsFromAppwrite,
  extractMaterielIdsFromLoans,
} from "$lib/utils/materiel.utils";

export class MaterielStore {
  // État réactif
  #materiels = new SvelteMap<string, EnrichedMateriel>();
  #loans = new SvelteMap<string, EnrichedMaterielLoan>();
  #idbCache: MaterielIDBCache | null = null;
  #loading = $state(false);
  #error = $state<string | null>(null);
  #isInitialized = $state(false);
  #lastSyncMateriel = $state<string | null>(null);
  #lastSyncLoans = $state<string | null>(null);

  // Getters simples
  get loading() {
    return this.#loading;
  }
  get error() {
    return this.#error;
  }
  get isInitialized() {
    return this.#isInitialized;
  }
  get count() {
    return this.#materiels.size;
  }

  // Propriétés réactives ($derived)
  #materielsList = $derived(Array.from(this.#materiels.values()));
  get materiels() {
    return this.#materielsList;
  }

  // Loans
  #loansList = $derived(Array.from(this.#loans.values()));
  get loans() {
    return this.#loansList;
  }

  // Matériels dont l'utilisateur est owner (userId)
  #myMaterielsList = $derived.by(() => {
    if (!globalState.userId) return [];
    return this.#materielsList.filter(
      (m) => m.ownerData?.userId === globalState.userId,
    );
  });
  get myMateriels() {
    return this.#myMaterielsList;
  }

  // Matériels des équipes de l'utilisateur
  #teamMaterielsList = $derived.by(() => {
    if (!globalState.userId) return [];

    // Récupérer les IDs des équipes de l'utilisateur
    const myTeamIds = nativeTeamsStore.myTeams.map((t) => t.$id);

    return this.#materielsList.filter(
      (m) => m.ownerData?.teamId && myTeamIds.includes(m.ownerData.teamId),
    );
  });
  get teamMateriels() {
    return this.#teamMaterielsList;
  }

  // Matériels partageables des autres
  #shareableMaterielsList = $derived.by(() => {
    if (!globalState.userId) return [];

    const myTeamIds = nativeTeamsStore.myTeams.map((t) => t.$id);

    return this.#materielsList.filter((m) => {
      // Vérifier si le matériel est partageable avec au moins une de mes équipes
      const isShareableWithMyTeams = m.shareableWith?.some((teamId) =>
        myTeamIds.includes(teamId),
      );

      return (
        isShareableWithMyTeams &&
        m.ownerData?.userId !== globalState.userId &&
        !(m.ownerData?.teamId && myTeamIds.includes(m.ownerData.teamId))
      );
    });
  });
  get shareableMateriels() {
    return this.#shareableMaterielsList;
  }

  // Matériels avec quantité disponible
  #availableMaterielsList = $derived.by(() => {
    return this.#materielsList.filter((m) => m.isAvailable);
  });
  get availableMateriels() {
    return this.#availableMaterielsList;
  }

  // =============================================================================
  // INITIALISATION
  // =============================================================================

  async initialize(): Promise<void> {
    if (this.#isInitialized) return;

    this.#loading = true;
    this.#error = null;

    try {
      if (!globalState.userId) {
        this.#isInitialized = true;
        return;
      }

      // 1. Créer le cache IDB
      this.#idbCache = await createMaterielIDBCache();

      // 2. Charger depuis IDB
      await this.#loadFromCache();

      // 3. Sync incrémentiel avec Appwrite
      await this.#syncFromAppwrite();

      // 4. Setup realtime
      await this.#setupRealtime();

      this.#isInitialized = true;
      console.log(
        `[MaterielStore] Initialisé : ${this.#materiels.size} matériels, ${this.#loans.size} emprunts`,
      );
    } catch (err) {
      this.#error =
        err instanceof Error ? err.message : "Erreur d'initialisation";
      console.error("[MaterielStore] Init error:", err);
    } finally {
      this.#loading = false;
    }
  }

  async #loadFromCache(): Promise<void> {
    if (!this.#idbCache) return;

    try {
      // Charger les matériels
      const materielsMap = await this.#idbCache.loadMateriels();
      materielsMap.forEach((materiel) => {
        this.#materiels.set(materiel.$id, materiel);
      });

      // Charger les emprunts
      const loansMap = await this.#idbCache.loadLoans();
      loansMap.forEach((loan) => {
        const enriched = enrichLoanFromAppwrite(loan);
        this.#loans.set(loan.$id, enriched);
      });

      // Charger les métadonnées
      const metadata = await this.#idbCache.loadMetadata();
      this.#lastSyncMateriel = metadata.lastSyncMateriel;
      this.#lastSyncLoans = metadata.lastSyncLoans;

      console.log(
        `[MaterielStore] ${this.#materiels.size} matériels et ${this.#loans.size} emprunts chargés du cache IDB`,
      );
    } catch (err) {
      console.warn("[MaterielStore] Erreur lecture cache IDB, ignoré:", err);
    }
  }

  async #syncFromAppwrite(): Promise<void> {
    try {
      // 1. Sync Materiel (modifiés depuis lastSyncMateriel)
      const materielQueries = this.#lastSyncMateriel
        ? [
            Query.greaterThan("$updatedAt", this.#lastSyncMateriel),
            Query.limit(100),
          ]
        : [Query.limit(100)];

      const updatedMateriels = await listMateriels(materielQueries);

      for (const doc of updatedMateriels) {
        const enriched = this.#enrichMaterielFromLoans(doc);
        this.#materiels.set(doc.$id, enriched);
        this.#idbCache?.upsertMateriel(enriched);
      }

      this.#lastSyncMateriel = new Date().toISOString();

      // 2. Sync MaterielLoan (modifiés depuis lastSyncLoans)
      const loanQueries = this.#lastSyncLoans
        ? [
            Query.greaterThan("$updatedAt", this.#lastSyncLoans),
            Query.limit(100),
          ]
        : [Query.limit(100)];

      const updatedLoans = await listMaterielLoans(loanQueries);

      for (const loan of updatedLoans) {
        const enriched = enrichLoanFromAppwrite(loan);
        this.#loans.set(loan.$id, enriched);
        this.#idbCache?.upsertLoan(loan);

        // Ré-enrichir les matériels affectés
        this.#reEnrichMaterielsFromLoan(enriched);
      }

      this.#lastSyncLoans = new Date().toISOString();

      // 3. Persister les métadonnées
      await this.#idbCache?.saveMetadata({
        lastSyncMateriel: this.#lastSyncMateriel,
        lastSyncLoans: this.#lastSyncLoans,
      });

      console.log("[MaterielStore] Sync terminé");
    } catch (err) {
      console.error("[MaterielStore] Erreur sync:", err);
      throw err;
    }
  }

  async #setupRealtime(): Promise<void> {
    const channels = [
      ...getMaterielRealtimeChannels(),
      ...getMaterielLoanRealtimeChannels(),
    ];

    realtimeManager.register(channels, async (response: any) => {
      console.log("[MaterielStore] ⚡️ Realtime RECEIVED:", response.events);

      const event = response.events[0];
      const [, , , , collectionId, documentId] = event.split(".");

      if (collectionId === "materiel") {
        await this.#handleMaterielRealtime(event, documentId);
      } else if (collectionId === "materiel_loan") {
        await this.#handleLoanRealtime(event, documentId);
      }
    });
  }

  async #handleMaterielRealtime(event: string, documentId: string) {
    try {
      // Pour les événements create et update, on doit récupérer le document complet
      if (event.includes(".create") || event.includes(".update")) {
        const doc = await getMateriel(documentId);
        if (doc) {
          const enriched = this.#enrichMaterielFromLoans(doc);
          this.#materiels.set(doc.$id, enriched);
          this.#idbCache?.upsertMateriel(enriched);
        }
      } else if (event.includes(".delete")) {
        this.#materiels.delete(documentId);
        this.#idbCache?.deleteMateriel(documentId);
      }
    } catch (err) {
      console.error("[MaterielStore] Erreur realtime Materiel:", err);
    }
  }

  async #handleLoanRealtime(event: string, documentId: string) {
    try {
      // Pour les événements create et update, on doit récupérer le document complet
      if (event.includes(".create") || event.includes(".update")) {
        const loan = await getMaterielLoan(documentId);
        if (loan) {
          const enriched = enrichLoanFromAppwrite(loan);
          this.#loans.set(loan.$id, enriched);
          this.#idbCache?.upsertLoan(loan);
          this.#reEnrichMaterielsFromLoan(enriched);
        }
      } else if (event.includes(".delete")) {
        // Conserver le loan pour le ré-enrichissement avant suppression
        const loan = this.#loans.get(documentId);
        if (loan) {
          // ✅ Plus d'await : ré-enrichissement synchrone avec données locales
          this.#reEnrichMaterielsFromLoan(loan);
        }
        this.#loans.delete(documentId);
        this.#idbCache?.deleteLoan(documentId);
      }
    } catch (err) {
      console.error("[MaterielStore] Erreur realtime Loan:", err);
    }
  }

  // =============================================================================
  // ENRICHISSEMENT
  // =============================================================================

  /**
   * Enrichit un matériel en calculant ses emprunts actifs depuis #loans
   * Utilise les utilitaires de parsing pour garantir la cohérence
   */
  #enrichMaterielFromLoans(doc: Materiel): EnrichedMateriel {
    const allLoans = Array.from(this.#loans.values());
    return enrichMaterielFromAppwrite(doc, allLoans);
  }

  /**
   * Ré-enrichit les matériels affectés par un emprunt
   * Version optimisée : utilise les données locales, pas d'appel API
   */
  #reEnrichMaterielsFromLoan(loan: EnrichedMaterielLoan): void {
    // ✅ Utiliser les items déjà parsés du loan enrichi
    const loanItems = loan.materielItems;

    // Récupérer tous les loans pour le recalcul
    const allLoans = Array.from(this.#loans.values());

    for (const item of loanItems) {
      const materiel = this.#materiels.get(item.materielId);
      if (materiel) {
        // ✅ Utiliser les données locales, pas d'appel API
        const enriched = reEnrichMaterielFromLoans(materiel, allLoans);
        this.#materiels.set(item.materielId, enriched);
        this.#idbCache?.upsertMateriel(enriched);
      }
    }
  }

  // =============================================================================
  // API PUBLIQUE
  // =============================================================================

  getMaterielById(materielId: string): EnrichedMateriel | undefined {
    return this.#materiels.get(materielId);
  }

  getLoanById(loanId: string): EnrichedMaterielLoan | undefined {
    return this.#loans.get(loanId);
  }

  /**
   * Crée un nouveau matériel
   */
  async createMateriel(data: {
    name: string;
    description?: string;
    type?: string;
    quantity: number;
    status?: string;
    location?: string;
    shareableWith?: string[];
    owner: string; // JSON string de MaterielOwner
  }): Promise<EnrichedMateriel> {
    this.#loading = true;
    this.#error = null;

    try {
      if (!globalState.userId) {
        throw new Error("Utilisateur non connecté");
      }

      const doc = await createMateriel(data as any, globalState.userId);
      const enriched = this.#enrichMaterielFromLoans(doc);
      this.#materiels.set(doc.$id, enriched);
      this.#idbCache?.upsertMateriel(enriched);

      return enriched;
    } catch (err) {
      this.#error = err instanceof Error ? err.message : "Erreur de création";
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  /**
   * Met à jour un matériel
   */
  async updateMateriel(
    materielId: string,
    data: {
      name?: string;
      description?: string;
      type?: string;
      quantity?: number;
      status?: string;
      location?: string;
      shareableWith?: string[];
      owner?: string;
    },
  ): Promise<void> {
    this.#loading = true;
    this.#error = null;

    try {
      const doc = await updateMateriel(materielId, data);
      const enriched = this.#enrichMaterielFromLoans(doc);
      this.#materiels.set(doc.$id, enriched);
      this.#idbCache?.upsertMateriel(enriched);
    } catch (err) {
      this.#error =
        err instanceof Error ? err.message : "Erreur de mise à jour";
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  /**
   * Supprime un matériel
   */
  async deleteMateriel(materielId: string): Promise<void> {
    this.#loading = true;
    this.#error = null;

    try {
      await deleteMateriel(materielId);
      this.#materiels.delete(materielId);
      this.#idbCache?.deleteMateriel(materielId);
    } catch (err) {
      this.#error =
        err instanceof Error ? err.message : "Erreur de suppression";
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  // =============================================================================
  // API PUBLIQUE - LOANS
  // =============================================================================

  /**
   * Crée un emprunt avec plusieurs matériels
   */
  async createLoan(data: {
    startDate: string;
    endDate: string;
    responsibleId: string;
    responsibleName: string;
    ownerId: string;
    ownerName: string;
    ownerType: "user" | "team";
    materiels: MaterielLoanItem[];
    notes?: string;
  }): Promise<EnrichedMaterielLoan> {
    this.#loading = true;
    this.#error = null;

    try {
      if (!globalState.userId) {
        throw new Error("Utilisateur non connecté");
      }

      const { createMaterielLoan } = await import(
        "$lib/services/appwrite-materiel-loan"
      );

      const loan = await createMaterielLoan(data, globalState.userId);

      // Enrichir le loan créé pour le retour
      const enriched = enrichLoanFromAppwrite(loan);

      // Le realtime va gérer la mise à jour locale
      return enriched;
    } catch (err) {
      this.#error = err instanceof Error ? err.message : "Erreur de création";
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  /**
   * Met à jour un emprunt
   */
  async updateLoan(
    loanId: string,
    data: {
      startDate?: string;
      endDate?: string;
      materiels?: MaterielLoanItem[];
      status?: string;
      notes?: string;
      completedAt?: string;
      returnedAt?: string;
      returnNotes?: string;
    },
  ): Promise<void> {
    this.#loading = true;
    this.#error = null;

    try {
      const { updateMaterielLoan } = await import(
        "$lib/services/appwrite-materiel-loan"
      );

      const payload: any = {};

      if (data.startDate !== undefined) payload.startDate = data.startDate;
      if (data.endDate !== undefined) payload.endDate = data.endDate;
      if (data.materiels !== undefined) payload.materiels = data.materiels;
      if (data.status !== undefined) payload.status = data.status;
      if (data.notes !== undefined) payload.notes = data.notes;
      if (data.completedAt !== undefined)
        payload.completedAt = data.completedAt;
      if (data.returnedAt !== undefined) payload.returnedAt = data.returnedAt;
      if (data.returnNotes !== undefined)
        payload.returnNotes = data.returnNotes;

      await updateMaterielLoan(loanId, payload);

      // Le realtime va gérer la mise à jour locale
    } catch (err) {
      this.#error =
        err instanceof Error ? err.message : "Erreur de mise à jour";
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  /**
   * Accepte un emprunt
   */
  async acceptLoan(loanId: string): Promise<void> {
    await this.updateLoan(loanId, { status: "accepted" });
  }

  /**
   * Refuse un emprunt
   */
  async refuseLoan(loanId: string): Promise<void> {
    await this.updateLoan(loanId, { status: "refused" });
  }

  /**
   * Annule un emprunt
   */
  async cancelLoan(loanId: string): Promise<void> {
    await this.updateLoan(loanId, { status: "canceled" });
  }

  /**
   * Marque un emprunt comme retourné (avec état du matériel)
   */
  async returnLoan(
    loanId: string,
    data: {
      materiels: MaterielLoanItem[]; // Avec lost/broken mis à jour
      returnNotes?: string;
    },
  ): Promise<void> {
    await this.updateLoan(loanId, {
      status: "returned",
      returnedAt: new Date().toISOString(),
      returnNotes: data.returnNotes,
      materiels: data.materiels,
    });
  }

  /**
   * Termine complété un emprunt
   */
  async completeLoan(loanId: string): Promise<void> {
    await this.updateLoan(loanId, {
      status: "completed",
      completedAt: new Date().toISOString(),
    });
  }

  /**
   * Supprime un emprunt
   */
  async deleteLoan(loanId: string): Promise<void> {
    this.#loading = true;
    this.#error = null;

    try {
      const { deleteMaterielLoan } = await import(
        "$lib/services/appwrite-materiel-loan"
      );

      // Ré-enrichir les matériels avant suppression
      const loan = this.#loans.get(loanId);
      if (loan) {
        // ✅ Plus d'await : ré-enrichissement synchrone avec données locales
        this.#reEnrichMaterielsFromLoan(loan);
      }

      await deleteMaterielLoan(loanId);

      // Le realtime va gérer le reste
    } catch (err) {
      this.#error =
        err instanceof Error ? err.message : "Erreur de suppression";
      throw err;
    } finally {
      this.#loading = false;
    }
  }
}

// Singleton
export const materielStore = new MaterielStore();
