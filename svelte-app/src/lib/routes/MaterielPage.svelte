<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import {
    Plus,
    Package,
    LoaderCircle,
    Users,
    Globe,
    ArrowRightLeft,
  } from "@lucide/svelte";
  import { materielStore } from "$lib/stores/MaterielStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { nativeTeamsStore } from "$lib/stores/NativeTeamsStore.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";
  import MaterielCard from "$lib/components/teamMatos/MaterielCard.svelte";
  import MaterielForm from "$lib/components/teamMatos/MaterielForm.svelte";
  import CreateMaterielModal from "$lib/components/teamMatos/CreateMaterielModal.svelte";
  import EditMaterielModal from "$lib/components/teamMatos/EditMaterielModal.svelte";
  import CreateLoanModal from "$lib/components/teamMatos/CreateLoanModal.svelte";
  import LoansList from "$lib/components/teamMatos/LoansList.svelte";
  import MaterielFilters, {
    type MaterielFiltersType,
  } from "$lib/components/teamMatos/MaterielFilters.svelte";
  import LeftPanel from "$lib/components/ui/LeftPanel.svelte";
  import { slide } from "svelte/transition";
  import type { EnrichedMateriel } from "$lib/types/materiel.types";

  // État de la page
  let showForm = $state(false);
  let createModalOpen = $state(false);
  let editModalMaterielId = $state<string | null>(null);
  let createLoanModalOpen = $state(false);
  let activeTab = $state<"my" | "teams" | "shareable" | "loans">("my");

  // État des filtres
  let filters = $state<MaterielFiltersType>({
    types: [],
    locations: [],
    statuses: [],
    loanStatus: "all",
  });

  // Basculer l'affichage du formulaire
  function toggleForm() {
    showForm = !showForm;
  }

  function closeForm() {
    showForm = false;
  }

  // Ouvrir le modal de création
  function openCreateModal() {
    createModalOpen = true;
  }

  // Fermer le modal de création
  function closeCreateModal() {
    createModalOpen = false;
  }

  // Ouvrir le modal d'édition
  function openEditModal(materielId: string) {
    editModalMaterielId = materielId;
  }

  // Fermer le modal d'édition
  function closeEditModal() {
    editModalMaterielId = null;
  }

  // Ouvrir le modal de création d'emprunt
  function openCreateLoanModal() {
    createLoanModalOpen = true;
  }

  // Fermer le modal de création d'emprunt
  function closeCreateLoanModal() {
    createLoanModalOpen = false;
  }

  // Après création
  function handleMaterielCreated(materielId: string) {
    console.log("[MaterielPage] Matériel créé:", materielId);
    closeCreateModal();
  }

  // Après création d'emprunt
  function handleLoanCreated() {
    console.log("[MaterielPage] Emprunt créé avec succès");
    closeCreateLoanModal();
  }

  // Gestion de la soumission du formulaire
  async function handleMaterielSubmit(data: any) {
    try {
      await materielStore.createMateriel(data);
      closeForm();
      console.log("[MaterielPage] Matériel créé avec succès");
    } catch (err) {
      console.error("[MaterielPage] Erreur création:", err);
    }
  }

  // Après édition
  function handleMaterielUpdated() {
    console.log("[MaterielPage] Matériel mis à jour");
    closeEditModal();
  }

  function getActiveList() {
    switch (activeTab) {
      case "my":
        return materielStore.myMateriels;
      case "teams":
        return materielStore.teamMateriels;
      case "shareable":
        return materielStore.shareableMateriels;
      default:
        return [];
    }
  }

  // Types disponibles
  const availableTypes = [
    "electronic",
    "manual",
    "other",
    "tools",
    "dish",
    "cooking",
    "gaz",
    "hygiene",
  ];

  // Statuts disponibles
  const availableStatuses = ["ok", "lost", "loan", "reserved", "torepair"];

  // Localisations uniques (dérivées de l'onglet actif)
  const availableLocations = $derived.by(() => {
    const materiels = getActiveList();
    const locations = new Set<string>();
    materiels.forEach((m) => {
      if (m.location) locations.add(m.location);
    });
    return Array.from(locations).sort();
  });

  // Helper pour déterminer le statut d'emprunt
  function getMaterielLoanStatus(
    materiel: EnrichedMateriel,
  ): "available" | "planned" | "active" | null {
    const now = new Date();

    // Vérifier si a des prêts actifs
    const hasActiveLoans = materiel.loanDetails.some((loan) => {
      const start = new Date(loan.startDate);
      const end = new Date(loan.endDate);
      return start <= now && end >= now;
    });

    if (hasActiveLoans) return "active";

    // Vérifier si a des prêts planifiés
    const hasPlannedLoans = materiel.loanDetails.some((loan) => {
      const start = new Date(loan.startDate);
      return start > now;
    });

    if (hasPlannedLoans) return "planned";

    // Vérifier si disponible
    if (materiel.availableQuantity > 0) return "available";

    return null;
  }

  // Liste des matériels filtrés
  const filteredMateriels = $derived.by(() => {
    const materiels = getActiveList();

    const hasActiveFilters =
      filters.types.length > 0 ||
      filters.locations.length > 0 ||
      filters.statuses.length > 0 ||
      filters.loanStatus !== "all";

    if (!hasActiveFilters) return materiels;

    return materiels.filter((materiel) => {
      // Type (OU logique)
      const typeMatch =
        filters.types.length === 0 ||
        (materiel.type && filters.types.includes(materiel.type));

      // Localisation (OU logique)
      const locationMatch =
        filters.locations.length === 0 ||
        (materiel.location && filters.locations.includes(materiel.location));

      // Statut (OU logique)
      const statusMatch =
        filters.statuses.length === 0 ||
        filters.statuses.includes(materiel.status);

      // Statut d'emprunt (correspondance exacte)
      let loanMatch = true;
      if (filters.loanStatus !== "all") {
        const loanStatus = getMaterielLoanStatus(materiel);
        loanMatch = loanStatus === filters.loanStatus;
      }

      return typeMatch && locationMatch && statusMatch && loanMatch;
    });
  });

  // Fonction reset des filtres
  function resetFilters() {
    filters = {
      types: [],
      locations: [],
      statuses: [],
      loanStatus: "all",
    };
  }

  // Initialisation
  onMount(async () => {
    try {
      // S'assurer que les stores sont initialisés
      if (!nativeTeamsStore.isInitialized) {
        await nativeTeamsStore.initialize();
      }

      if (!materielStore.isInitialized) {
        await materielStore.initialize();
      }
    } catch (error) {
      console.error("[MaterielPage] Erreur lors de l'initialisation:", error);
    }
  });

  // =============================================================================
  // NAVBAR CONFIGURATION
  // =============================================================================

  $effect(() => {
    navBarStore.setConfig({
      title: "Matériel",
      actions: navActions,
    });
  });

  onDestroy(() => {
    navBarStore.reset();
  });
</script>

{#snippet navActions()}{/snippet}

<!-- Filtres - Sidebar Desktop / Drawer Mobile -->
<LeftPanel width="100">
  <MaterielFilters
    bind:filters
    disabled={false}
    {availableTypes}
    {availableLocations}
    {availableStatuses}
    onReset={resetFilters}
  />
</LeftPanel>

<!-- Contenu principal -->
<div class="p-4 lg:ml-100">
  <div class="mx-auto max-w-7xl px-4 py-8">
    <!-- Bouton dépliable pour ajouter du matériel -->
    {#if !showForm}
      <div class="mb-6 text-end">
        <button class="btn btn-wide btn-primary" onclick={toggleForm}>
          <Plus class="h-4 w-4" />
          "Ajouter du matériel"
        </button>
      </div>
    {/if}
    <!-- Formulaire déployable -->
    {#if showForm}
      <div class="card bg-base-100 mb-6 shadow-lg" transition:slide>
        <div class="card-body">
          <MaterielForm
            showStatus={false}
            onSubmit={handleMaterielSubmit}
            onCancel={closeForm}
          />
        </div>
      </div>
    {/if}

    <!-- Contenu -->
    {#if !globalState.isAuthenticated}
      <div class="alert alert-warning">
        <span>Vous devez être connecté pour voir le matériel.</span>
      </div>
    {:else if materielStore.loading && nativeTeamsStore.loading}
      <div class="flex min-h-96 items-center justify-center">
        <div class="flex flex-col items-center gap-4">
          <LoaderCircle class="text-primary h-12 w-12 animate-spin" />
          <p class="text-base-content/60 text-sm">Chargement du matériel...</p>
        </div>
      </div>
    {:else if materielStore.error}
      <div class="alert alert-error shadow-lg">
        <span>{materielStore.error}</span>
      </div>
    {:else}
      <!-- Onglets de filtrage -->
      <div class="tabs tabs-border bg-base-200 tabs-lg mb-6">
        <button
          class="tab {activeTab === 'my' ? 'tab-active' : ''}"
          onclick={() => (activeTab = "my")}
        >
          <Package class="mr-2 h-4 w-4" />
          Mon matériel
          <span class="badge badge-sm badge-neutral ml-2">
            {materielStore.myMateriels.length}
          </span>
        </button>
        <button
          class="tab {activeTab === 'teams' ? 'tab-active' : ''}"
          onclick={() => (activeTab = "teams")}
        >
          <Users class="mr-2 h-4 w-4" />
          Matériel de mes équipes
          <span class="badge badge-sm badge-neutral ml-2">
            {materielStore.teamMateriels.length}
          </span>
        </button>
        <button
          class="tab {activeTab === 'shareable' ? 'tab-active' : ''}"
          onclick={() => (activeTab = "shareable")}
        >
          <Globe class="mr-2 h-4 w-4" />
          Matériel partageable
          <span class="badge badge-sm badge-neutral ml-2">
            {materielStore.shareableMateriels.length}
          </span>
        </button>
        <button
          class="tab {activeTab === 'loans' ? 'tab-active' : ''}"
          onclick={() => (activeTab = "loans")}
        >
          <ArrowRightLeft class="mr-2 h-4 w-4" />
          Emprunts
          <span class="badge badge-sm badge-neutral ml-2">
            {materielStore.loans.length}
          </span>
        </button>
      </div>

      <!-- Contenu de l'onglet Emprunts -->
      {#if activeTab === "loans"}
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold">Gestion des emprunts</h2>
            <button
              class="btn btn-primary btn-sm"
              onclick={openCreateLoanModal}
            >
              <Plus class="h-4 w-4" />
              Nouvel emprunt
            </button>
          </div>
          <LoansList />
        </div>
      {:else}
        <!-- Liste du matériel -->
        {#if filteredMateriels.length === 0}
          <!-- Vérifier si c'est à cause des filtres ou vraiment vide -->
          {#if filters.types.length > 0 || filters.locations.length > 0 || filters.statuses.length > 0 || filters.loanStatus !== "all"}
            <!-- Aucun résultat avec les filtres -->
            <div class="py-12 text-center">
              <p class="text-base-content/60 mb-4 text-lg">
                Aucun matériel ne correspond aux critères de filtrage...
              </p>
              <button class="btn btn-warning btn-sm" onclick={resetFilters}>
                Effacer les filtres
              </button>
            </div>
          {:else if activeTab === "my" && materielStore.myMateriels.length === 0}
            <!-- Empty state -->
            <div
              class="bg-base-200 rounded-box border-base-200 border-2 border-dashed py-20 text-center"
            >
              <div class="bg-base-200 mb-4 inline-block rounded-full p-4">
                <Package class="h-8 w-8 opacity-50" />
              </div>
              <h3 class="mb-2 text-lg font-bold">Aucun matériel</h3>
              <p class="text-base-content/60 mb-6">
                Vous n'avez pas encore créé de matériel.
              </p>
              <button class="btn btn-primary btn-sm" onclick={openCreateModal}>
                Créer mon premier matériel
              </button>
            </div>
          {:else if activeTab === "teams" && materielStore.teamMateriels.length === 0}
            <!-- Empty state équipes -->
            <div
              class="bg-base-200 rounded-box border-base-200 border-2 border-dashed py-20 text-center"
            >
              <div class="bg-base-200 mb-4 inline-block rounded-full p-4">
                <Users class="h-8 w-8 opacity-50" />
              </div>
              <h3 class="mb-2 text-lg font-bold">Aucun matériel d'équipe</h3>
              <p class="text-base-content/60 mb-6">
                Vos équipes n'ont pas encore de matériel.
              </p>
            </div>
          {:else if activeTab === "shareable" && materielStore.shareableMateriels.length === 0}
            <!-- Empty state partageable -->
            <div
              class="bg-base-200 rounded-box border-base-200 border-2 border-dashed py-20 text-center"
            >
              <div class="bg-base-200 mb-4 inline-block rounded-full p-4">
                <Globe class="h-8 w-8 opacity-50" />
              </div>
              <h3 class="mb-2 text-lg font-bold">Aucun matériel partageable</h3>
              <p class="text-base-content/60">
                Aucun matériel partageable n'est disponible pour le moment.
              </p>
            </div>
          {/if}
        {:else}
          <!-- Grille de matériel -->
          <div class="grid grid-cols-1">
            {#each filteredMateriels as materiel (materiel.$id)}
              <MaterielCard
                {materiel}
                onEdit={(materielId) => openEditModal(materielId)}
              />
            {/each}
          </div>
        {/if}
      {/if}
    {/if}
  </div>
</div>

<!-- Modals -->
<CreateMaterielModal
  isOpen={createModalOpen}
  onClose={closeCreateModal}
  onSuccess={handleMaterielCreated}
/>

<EditMaterielModal
  materielId={editModalMaterielId}
  isOpen={editModalMaterielId !== null}
  onClose={closeEditModal}
  onSuccess={handleMaterielUpdated}
/>

<CreateLoanModal
  isOpen={createLoanModalOpen}
  onClose={closeCreateLoanModal}
  onSuccess={handleLoanCreated}
/>
