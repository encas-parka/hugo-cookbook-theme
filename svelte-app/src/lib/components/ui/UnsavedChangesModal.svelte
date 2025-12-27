<script lang="ts">
  import { AlertTriangle, Save, X } from "@lucide/svelte";

  interface Props {
    isOpen: boolean;
    onConfirm: () => void;
    onSaveAndLeave: () => void;
    onCancel: () => void;
    isSaving?: boolean;
  }

  let {
    isOpen,
    onConfirm,
    onSaveAndLeave,
    onCancel,
    isSaving = false,
  }: Props = $props();
</script>

<div class="modal {isOpen && 'modal-open'}">
  <div class="modal-box">
    <!-- Header -->
    <div class="mb-4 flex items-center justify-between">
      <h3 class="text-lg font-bold">Modifications non sauvegardées</h3>
      <button
        class="btn btn-circle btn-ghost btn-sm"
        onclick={onCancel}
        aria-label="Fermer"
        disabled={isSaving}
      >
        <X class="h-4 w-4" />
      </button>
    </div>

    <!-- Contenu avec alerte -->
    <div class="alert alert-warning alert-soft mb-6">
      <AlertTriangle class="h-5 w-5" />
      <span>
        Vous avez des modifications non sauvegardées. Êtes vous sure de vouloir
        quitter la page ?
      </span>
    </div>

    <!-- Actions -->
    <div class="modal-action">
      <button class="btn btn-ghost" onclick={onCancel} disabled={isSaving}>
        Rester
      </button>
      <button class="btn btn-error" onclick={onConfirm} disabled={isSaving}>
        Abandonner les modifications
      </button>
      <button
        class="btn btn-primary"
        onclick={onSaveAndLeave}
        disabled={isSaving}
      >
        {#if isSaving}
          <span class="loading loading-spinner loading-xs"></span>
          Enregistrement...
        {:else}
          <Save class="mr-1 h-4 w-4" />
          Enregistrer et poursuivre
        {/if}
      </button>
    </div>
  </div>
</div>
