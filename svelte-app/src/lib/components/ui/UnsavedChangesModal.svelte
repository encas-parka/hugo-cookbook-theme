<script lang="ts">
  import { TriangleAlert, Save, X } from "@lucide/svelte";

  interface Props {
    isOpen: boolean;
    isSaving?: boolean;
    message?: string;
    onLeaveWithoutSave: () => void | Promise<void>;
    onSaveAndLeave: () => void | Promise<void>;
    onCancel: () => void;
  }

  let {
    isOpen,
    isSaving = false,
    message = "Vous avez des modifications non sauvegardées. Voulez-vous quitter sans enregistrer ?",
    onLeaveWithoutSave,
    onSaveAndLeave,
    onCancel,
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
    <div class="alert alert-warning mb-6">
      <TriangleAlert class="h-5 w-5" />
      <span>{message}</span>
    </div>

    <!-- Actions -->
    <div class="modal-action">
      <button class="btn btn-ghost" onclick={onCancel} disabled={isSaving}>
        Rester
      </button>
      <button
        class="btn btn-error"
        onclick={onLeaveWithoutSave}
        disabled={isSaving}
      >
        Quitter sans sauvegarder
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
          Enregistrer et quitter
        {/if}
      </button>
    </div>
  </div>
</div>
