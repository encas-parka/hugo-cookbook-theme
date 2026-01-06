import { SvelteMap } from "svelte/reactivity";
import type { Models } from "appwrite";
import type { Materiel } from "$lib/types/appwrite";
import type {
  EnrichedMateriel,
  MaterielLoan,
  MaterielOwner,
  MaterielFilters,
} from "$lib/types/materiel";
import {
  listMaterielsAppwrite,
  getMaterielAppwrite,
  createMaterielAppwrite,
  updateMaterielAppwrite,
  deleteMaterielAppwrite,
  getMaterielRealtimeChannels,
} from "$lib/services/appwrite-materiel";
import { globalState } from "./GlobalState.svelte";
import { realtimeManager } from "./RealtimeManager.svelte";
import { nativeTeamsStore } from "./NativeTeamsStore.svelte";

export class MaterielStore {
  // État réactif
  #materiels = new SvelteMap<string, EnrichedMateriel>();
  #loading = $state(false);
  #error = $state<string | null>(null);
  #isInitialized = $state(false);

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

  // Matériels dont l'utilisateur est owner (userId)
  #myMaterielsList = $derived(() => {
    if (!globalState.userId) return [];
    return this.#materielsList.filter(
      (m) => m.ownerData?.userId === globalState.userId,
    );
  });
  get myMateriels() {
    return this.#myMaterielsList();
  }

  // Matériels des équipes de l'utilisateur
  #teamMaterielsList = $derived(() => {
    if (!globalState.userId) return [];

    // Récupérer les IDs des équipes de l'utilisateur
    const myTeamIds = nativeTeamsStore.myTeams.map((t) => t.$id);

    return this.#materielsList.filter(
      (m) => m.ownerData?.teamId && myTeamIds.includes(m.ownerData.teamId),
    );
  });
  get teamMateriels() {
    return this.#teamMaterielsList();
  }

  // Matériels partageables des autres
  #shareableMaterielsList = $derived(() => {
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
    return this.#shareableMaterielsList();
  }

  // Matériels avec quantité disponible
  #availableMaterielsList = $derived(() => {
    return this.#materielsList.filter((m) => m.isAvailable);
  });
  get availableMateriels() {
    return this.#availableMaterielsList();
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

      await this.#loadMateriels();
      await this.#setupRealtime();

      this.#isInitialized = true;
      console.log(
        `[MaterielStore] Initialisé : ${this.#materiels.size} matériels`,
      );
    } catch (err) {
      this.#error =
        err instanceof Error ? err.message : "Erreur d'initialisation";
      console.error("[MaterielStore] Init error:", err);
    } finally {
      this.#loading = false;
    }
  }

  async #loadMateriels(): Promise<void> {
    const documents = await listMaterielsAppwrite();

    for (const doc of documents) {
      const enriched = this.#enrichMateriel(doc);
      this.#materiels.set(doc.$id, enriched);
    }
  }

  async #setupRealtime(): Promise<void> {
    const channels = getMaterielRealtimeChannels();

    realtimeManager.register(channels, async (response: any) => {
      console.log("[MaterielStore] ⚡️ Realtime RECEIVED:", response.events);

      // Recharger tout pour simplifier
      await this.#loadMateriels();
    });
  }

  // =============================================================================
  // ENRICHISSEMENT
  // =============================================================================

  #enrichMateriel(doc: Models.Document & Materiel): EnrichedMateriel {
    // Parsing du owner
    const ownerData: MaterielOwner = doc.owner
      ? JSON.parse(doc.owner)
      : {
          userName: "",
          userId: "",
          teamName: "",
          teamId: "",
        };

    // Parsing des emprunts
    const loans: MaterielLoan[] =
      doc.loan?.map((item) => JSON.parse(item)) || [];

    // Calcul des quantités
    const totalLoanedQuantity = loans.reduce(
      (sum, loan) => sum + loan.quantity,
      0,
    );
    const availableQuantity = doc.quantity - totalLoanedQuantity;
    const isAvailable = availableQuantity > 0;
    const isFullyLoaned = availableQuantity === 0;

    return {
      $id: doc.$id,
      name: doc.name,
      description: doc.description,
      type: doc.type,
      quantity: doc.quantity,
      location: doc.location,
      loan: doc.loan,
      owner: doc.owner,
      status: doc.status,
      shareableWith: doc.shareableWith,
      loans,
      ownerData,
      availableQuantity,
      totalLoanedQuantity,
      isAvailable,
      isFullyLoaned,
    };
  }

  // =============================================================================
  // API PUBLIQUE
  // =============================================================================

  getMaterielById(materielId: string): EnrichedMateriel | undefined {
    return this.#materiels.get(materielId);
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
      const payload = {
        name: data.name,
        description: data.description || null,
        type: data.type || null,
        quantity: data.quantity,
        status: data.status || "ok",
        location: data.location || null,
        shareableWith: data.shareableWith || null,
        owner: data.owner, // Déjà au format JSON string
        loan: [] as string[],
      };

      const doc = await createMaterielAppwrite(payload);
      const enriched = this.#enrichMateriel(doc);
      this.#materiels.set(doc.$id, enriched);

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
      const doc = await updateMaterielAppwrite(materielId, data);
      const enriched = this.#enrichMateriel(doc);
      this.#materiels.set(doc.$id, enriched);
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
      await deleteMaterielAppwrite(materielId);
      this.#materiels.delete(materielId);
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
