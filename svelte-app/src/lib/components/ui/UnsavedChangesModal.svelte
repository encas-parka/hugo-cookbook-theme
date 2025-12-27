<script lang="ts">
  import { AlertTriangle, Save, X } from "@lucide/svelte";
  import { navigate, router } from "$lib/services/simple-router.svelte";

  interface Props {
    guardId: string;
    shouldProtect: () => boolean;
    onLeaveWithoutSave: () => void | Promise<void>;
    onSaveAndLeave: () => void | Promise<void>;
    message?: string;
  }

  let {
    guardId,
    shouldProtect,
    onLeaveWithoutSave,
    onSaveAndLeave,
    message = "Vous avez des modifications non sauvegardées. Voulez-vous quitter sans enregistrer ?",
  }: Props = $props();

  // ============================================================================
  // ÉTAT INTERNE DU MODAL
  // ============================================================================

  let isOpen = $state(false);
  let isSaving = $state(false);
  let pendingNavigation = $state<{
    path: string;
    query?: Record<string, string>;
  } | null>(null);
  let guardResolve: ((value: boolean) => void) | null = null;

  // ============================================================================
  // LOGIQUE DU NAVIGATION GUARD
  // ============================================================================

  /**
   * Guard de navigation appelé par le router
   */
  async function navigationGuard(
    targetPath: string,
    targetQuery?: Record<string, string>,
  ): Promise<boolean> {
    // Si pas de protection nécessaire, autoriser la navigation
    if (!shouldProtect()) {
      return true;
    }

    console.log(
      `[UnsavedChangesModal] Navigation interceptée vers ${targetPath}`,
    );

    // Stocker les détails de la navigation en attente
    pendingNavigation = { path: targetPath, query: targetQuery };

    // Afficher le modal
    isOpen = true;

    // Retourner une Promise qui sera résolue quand l'utilisateur choisira
    return new Promise<boolean>((resolve) => {
      guardResolve = resolve;
    });
  }

  // Enregistrer le guard au montage du composant
  $effect(() => {
    const cleanup = router.registerGuard(guardId, navigationGuard);
    return cleanup;
  });

  // ============================================================================
  // HANDLERS DU MODAL
  // ============================================================================

  /**
   * Handler pour "Quitter sans sauvegarder"
   */
  async function handleLeaveWithoutSave() {
    // Désenregistrer le guard AVANT de naviguer pour éviter les problèmes
    router.unregisterGuard(guardId);

    isOpen = false;

    // Exécuter le handler fourni par le parent
    await onLeaveWithoutSave();

    // Autoriser la navigation
    if (guardResolve) {
      guardResolve(true);
      guardResolve = null;
    }

    // Effectuer la navigation
    if (pendingNavigation) {
      navigate(pendingNavigation.path, pendingNavigation.query);
      pendingNavigation = null;
    }
  }

  /**
   * Handler pour "Enregistrer et quitter"
   */
  async function handleSaveAndLeave() {
    isSaving = true;

    try {
      // Désenregistrer le guard AVANT de naviguer
      router.unregisterGuard(guardId);

      // Exécuter le handler de sauvegarde du parent
      await onSaveAndLeave();

      // Fermer le modal
      isOpen = false;

      // Autoriser la navigation
      if (guardResolve) {
        guardResolve(true);
        guardResolve = null;
      }

      // Effectuer la navigation
      if (pendingNavigation) {
        navigate(pendingNavigation.path, pendingNavigation.query);
        pendingNavigation = null;
      }
    } finally {
      isSaving = false;
    }
  }

  /**
   * Handler pour "Rester" (annuler la navigation)
   */
  function handleCancelNavigation() {
    isOpen = false;
    pendingNavigation = null;

    // Refuser la navigation
    if (guardResolve) {
      guardResolve(false);
      guardResolve = null;
    }
  }
</script>

<div class="modal {isOpen && 'modal-open'}">
  <div class="modal-box">
    <!-- Header -->
    <div class="mb-4 flex items-center justify-between">
      <h3 class="text-lg font-bold">Modifications non sauvegardées</h3>
      <button
        class="btn btn-circle btn-ghost btn-sm"
        onclick={handleCancelNavigation}
        aria-label="Fermer"
        disabled={isSaving}
      >
        <X class="h-4 w-4" />
      </button>
    </div>

    <!-- Contenu avec alerte -->
    <div class="alert alert-warning mb-6">
      <AlertTriangle class="h-5 w-5" />
      <span>{message}</span>
    </div>

    <!-- Actions -->
    <div class="modal-action">
      <button
        class="btn btn-ghost"
        onclick={handleCancelNavigation}
        disabled={isSaving}
      >
        Rester
      </button>
      <button
        class="btn btn-error"
        onclick={handleLeaveWithoutSave}
        disabled={isSaving}
      >
        Quitter sans sauvegarder
      </button>
      <button
        class="btn btn-primary"
        onclick={handleSaveAndLeave}
        disabled={isSaving}
      >
        {#if isSaving}
          <span class="loading loading-spinner loading-xs"></span>
          Enregistrement...
        {:else}
          <Save class="mr-1 h-4 w-4" />
          Enregistrer et quitter
        {/if}
      </button>
    </div>
  </div>
</div>
