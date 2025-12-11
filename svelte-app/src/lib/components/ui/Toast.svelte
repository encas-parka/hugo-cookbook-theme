<script lang="ts">
  import {
    toastService,
    type Toast,
    type ToastAction,
  } from "$lib/services/toast.service.svelte";
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

  function handleActionClick(toast: Toast, action: ToastAction) {
    action.onClick();
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
          <!-- Boutons d'action personnalisés -->
          {#if toast.actions && toast.actions.length > 0}
            {#each toast.actions as action}
              <button
                class="btn btn-sm btn-primary"
                onclick={() => handleActionClick(toast, action)}
              >
                {action.label}
              </button>
            {/each}
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

          <!-- Bouton de fermeture (erreurs et warnings uniquement) -->
          {#if toast.state === "error" || toast.state === "warning" || !shouldAutoClose(toast.state)}
            <button
              class="btn btn-ghost btn-sm btn-circle absolute top-1 right-1"
              onclick={() => dismiss(toast)}
              title="Fermer"
              aria-label="Fermer la notification"
            >
              <X class="h-4 w-4" />
            </button>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>
