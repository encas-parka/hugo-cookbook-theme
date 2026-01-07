<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Plus } from "@lucide/svelte";
  import { materielStore } from "$lib/stores/MaterielStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";
  import CreateLoanModal from "$lib/components/teamMatos/CreateLoanModal.svelte";
  import LoansList from "$lib/components/teamMatos/LoansList.svelte";

  // État de la page
  let createLoanModalOpen = $state(false);

  // Ouvrir le modal de création d'emprunt
  function openCreateLoanModal() {
    createLoanModalOpen = true;
  }

  // Fermer le modal de création d'emprunt
  function closeCreateLoanModal() {
    createLoanModalOpen = false;
  }

  // Après création d'emprunt
  function handleLoanCreated() {
    console.log("[LoansPage] Emprunt créé avec succès");
    closeCreateLoanModal();
  }

  // Initialisation
  onMount(async () => {
    try {
      // S'assurer que le store est initialisé
      if (!materielStore.isInitialized) {
        await materielStore.initialize();
      }
    } catch (error) {
      console.error("[LoansPage] Erreur lors de l'initialisation:", error);
    }
  });

  // =============================================================================
  // NAVBAR CONFIGURATION
  // =============================================================================

  $effect(() => {
    navBarStore.setConfig({
      title: "Emprunts",
      materielContext: "loans",
      actions: navActions,
    });
  });

  // Cleanup
  onDestroy(() => {
    navBarStore.reset();
  });
</script>

{#snippet navActions()}
  <button class="btn btn-primary btn-sm gap-2" onclick={openCreateLoanModal}>
    <Plus size={16} />
    Créer un emprunt
  </button>
{/snippet}

<div class="container mx-auto p-4">
  <!-- Liste des emprunts -->
  <LoansList />
</div>

<!-- Modal de création d'emprunt -->
<CreateLoanModal
  isOpen={createLoanModalOpen}
  onClose={closeCreateLoanModal}
  onSuccess={handleLoanCreated}
/>
