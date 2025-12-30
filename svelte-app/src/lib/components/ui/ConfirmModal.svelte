<script lang="ts">
  import { TriangleAlert, Info, AlertCircle, X } from "@lucide/svelte";

  interface Props {
    isOpen: boolean;
    title: string;
    message: string;
    variant?: "warning" | "info" | "danger";
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    onCancel: () => void;
  }

  let {
    isOpen,
    title,
    message,
    variant = "warning",
    confirmLabel = "Confirmer",
    cancelLabel = "Annuler",
    onConfirm,
    onCancel,
  }: Props = $props();

  // Dérivation des styles selon le variant
  const alertClass = $derived(
    variant === "danger"
      ? "alert-error"
      : variant === "info"
        ? "alert-info"
        : "alert-warning",
  );

  const btnClass = $derived(
    variant === "danger"
      ? "btn-error"
      : variant === "info"
        ? "btn-info"
        : "btn-warning",
  );

  const IconComponent = $derived(
    variant === "danger"
      ? AlertCircle
      : variant === "info"
        ? Info
        : TriangleAlert,
  );
</script>

<div class="modal {isOpen && 'modal-open'}">
  <div class="modal-box">
    <!-- Header -->
    <div class="mb-4 flex items-center justify-between">
      <h3 class="text-lg font-bold">{title}</h3>
      <button
        class="btn btn-circle btn-ghost btn-sm"
        onclick={onCancel}
        aria-label="Fermer"
      >
        <X class="h-4 w-4" />
      </button>
    </div>

    <!-- Contenu avec alerte -->
    <div class="alert {alertClass} mb-6">
      <IconComponent class="h-5 w-5" />
      <span>{message}</span>
    </div>

    <!-- Actions -->
    <div class="modal-action">
      <button class="btn btn-ghost" onclick={onCancel}>
        {cancelLabel}
      </button>
      <button class="btn {btnClass}" onclick={onConfirm}>
        {confirmLabel}
      </button>
    </div>
  </div>
</div>
