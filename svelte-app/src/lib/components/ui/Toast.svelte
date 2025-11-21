<script lang="ts">
  import {
    toastService,
    type Toast,
  } from "../../services/toast.service.svelte";
  import { X, LoaderCircle, ChevronDown } from "@lucide/svelte";

  interface Props {
    position?: string;
    padding?: "sm" | "md";
    onShowDetails?: (details: {
      id: string;
      message: string;
      details: any;
    }) => void;
  }

  let {
    position = "toast-right toast-bottom",
    padding = "md",
    onShowDetails,
  }: Props = $props();

  // Dériver les classes de padding
  const paddingClass = $derived(padding === "sm" ? "px-2 py-0.5" : "");

  const toasts = $derived(toastService.toasts);

  // État réactif pour déterminer si un toast doit se fermer automatiquement
  function shouldAutoClose(state: string): boolean {
    return state === "success" || state === "info";
  }

  function dismiss(toast: Toast) {
    toastService.dismiss(toast.id);
  }

  function showDetails(toast: Toast) {
    onShowDetails?.({
      id: toast.id,
      message: toast.message,
      details: toast.details,
    });
  }
</script>

<!-- Conteneur de toasts DaisyUI CORRIGÉ -->
<div class="toast {position} z-50">
  {#each toasts as toast (toast.id)}
    <div class="alert alert-{toast.state} max-w-sm {paddingClass} shadow-lg">
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          {#if toast.state === "loading"}
            <LoaderCircle class="h-5 w-5 animate-spin" />
          {/if}

          <span class="text-xs">{toast.message}</span>
        </div>

        <div class="flex items-center gap-1">
          <!-- Bouton d'action personnalisé -->
          {#if toast.action}
            <button
              class="btn btn-sm btn-primary"
              onclick={toast.action.onClick}
            >
              {toast.action.label}
            </button>
          {/if}

          <!-- Bouton détails si disponible -->
          {#if toast.details}
            <button
              class="btn btn-ghost btn-xs btn-square"
              onclick={() => showDetails(toast)}
              title="Voir les détails"
              aria-label="Voir les détails"
            >
              <ChevronDown class="h-3 w-3" />
            </button>
          {/if}

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
      </div>
    </div>
  {/each}
</div>
