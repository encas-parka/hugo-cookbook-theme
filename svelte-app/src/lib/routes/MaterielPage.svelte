<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Plus, Package, LoaderCircle, Users, Globe } from "@lucide/svelte";
  import { materielStore } from "$lib/stores/MaterielStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { nativeTeamsStore } from "$lib/stores/NativeTeamsStore.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";
  import MaterielCard from "$lib/components/teamMatos/MaterielCard.svelte";
  import MaterielForm from "$lib/components/teamMatos/MaterielForm.svelte";
  import CreateMaterielModal from "$lib/components/teamMatos/CreateMaterielModal.svelte";
  import EditMaterielModal from "$lib/components/teamMatos/EditMaterielModal.svelte";
  import { slide } from "svelte/transition";

  // État de la page
  let showForm = $state(false);
  let createModalOpen = $state(false);
  let editModalMaterielId = $state<string | null>(null);
  let activeTab = $state<"my" | "teams" | "shareable">("my");

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

  // Après création
  function handleMaterielCreated(materielId: string) {
    console.log("[MaterielPage] Matériel créé:", materielId);
    closeCreateModal();
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

{#snippet navActions()}
  <button class="btn btn-primary btn-sm" onclick={openCreateModal}>
    <Plus class="h-4 w-4" />
    Ajouter
  </button>
{/snippet}

<div class="mx-auto max-w-7xl px-4 py-8">
  <!-- Bouton dépliable pour ajouter du matériel -->
  {#if !showForm}
    <div class="mb-6 text-center">
      <button class="btn btn-block btn-dash" onclick={toggleForm}>
        <Plus class="h-4 w-4" />
        "Ajouter du matériel"
      </button>
    </div>
  {/if}
  <!-- Formulaire déployable -->
  {#if showForm}
    <div class="card bg-base-100 mb-6 shadow-lg" transition:slide>
      <div class="card-body">
        <MaterielForm onSubmit={handleMaterielSubmit} onCancel={closeForm} />
      </div>
    </div>
  {/if}

  <!-- Contenu -->
  {#if !globalState.isAuthenticated}
    <div class="alert alert-warning">
      <span>Vous devez être connecté pour voir le matériel.</span>
    </div>
  {:else if materielStore.loading && materielStore.count === 0}
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
    <div class="tabs tabs-boxed bg-base-200 mb-6">
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
    </div>

    <!-- Liste du matériel -->
    {#if activeTab === "my" && materielStore.myMateriels.length === 0}
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
    {:else}
      <!-- Grille de matériel -->
      <div class="grid grid-cols-1">
        {#each getActiveList() as materiel (materiel.$id)}
          <MaterielCard
            {materiel}
            onEdit={(materielId) => openEditModal(materielId)}
          />
        {/each}
      </div>
    {/if}
  {/if}
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
