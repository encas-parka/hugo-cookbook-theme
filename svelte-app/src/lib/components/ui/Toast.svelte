<script lang="ts">
  import {
    toastService,
    type Toast,
  } from "../../services/toast.service.svelte";
  import { X, LoaderCircle } from "@lucide/svelte";

  interface Props {
    position?: string;
  }

  let { position = "toast-right toast-bottom" }: Props = $props();

  const toasts = $derived(toastService.toasts);

  // État réactif pour déterminer si un toast doit se fermer automatiquement
  function shouldAutoClose(state: string): boolean {
    return state === "success" || state === "info";
  }

  function dismiss(toast: Toast) {
    toastService.dismiss(toast.id);
  }
</script>

<!-- Conteneur de toasts DaisyUI CORRIGÉ -->
<div class="toast {position} z-50">
  {#each toasts as toast (toast.id)}
    <div
      class="alert alert-{toast.state} max-w-sm px-2 py-0.5 shadow-lg {toast.state ===
      'error'
        ? ''
        : 'alert-soft'}"
    >
      <div class="flex items-center gap-2">
        {#if toast.state === "loading"}
          <LoaderCircle class="h-5 w-5 animate-spin" />
        {/if}

        <span class="text-xs">{toast.message}</span>
      </div>

      <!-- Bouton de fermeture (erreurs uniquement) -->
      {#if toast.state === "error" || !shouldAutoClose(toast.state)}
        <button
          class="btn btn-ghost btn-sm btn-square"
          onclick={() => dismiss(toast)}
          title="Fermer"
          aria-label="Fermer la notification"
        >
          <X class="ms-1 h-4 w-4" />
        </button>
      {/if}
    </div>
  {/each}
</div>
