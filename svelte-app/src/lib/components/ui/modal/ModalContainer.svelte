<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    isOpen: boolean;
    onClose: () => void;
    fullscreenOnMobile?: boolean;
    closeOnBackdropClick?: boolean;
    hasUnsavedChanges?: boolean;
    confirmCloseMessage?: string;
    children: Snippet;
  }

  let {
    isOpen,
    onClose,
    fullscreenOnMobile = true,
    closeOnBackdropClick = false,
    hasUnsavedChanges = false,
    confirmCloseMessage = "Vous avez des modifications non sauvegardées. Voulez-vous vraiment fermer ?",
    children,
  }: Props = $props();

  let showConfirmDialog = $state(false);

  function handleClose() {
    if (hasUnsavedChanges) {
      showConfirmDialog = true;
    } else {
      onClose();
    }
  }

  function confirmClose() {
    showConfirmDialog = false;
    onClose();
  }

  function cancelClose() {
    showConfirmDialog = false;
  }

  // Gestion de la touche ESC
  $effect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !showConfirmDialog) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  });

  // Bloquer le scroll du body quand le modal est ouvert
  $effect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  });
</script>

<div class="modal {isOpen && 'modal-open'}">
  <!-- Modal box -->
  {#if isOpen}
    <div
      class="modal-box flex flex-col p-0 {fullscreenOnMobile
        ? 'fixed inset-0 m-0 h-lvh w-lvw rounded-none md:fixed md:inset-auto md:m-auto md:h-auto md:max-h-[90vh] md:w-full md:max-w-6xl md:rounded-xl'
        : 'max-h-[90vh] w-full max-w-6xl'}"
      role="dialog"
      aria-modal="true"
    >
      {@render children()}
    </div>
  {/if}
</div>

<!-- Confirmation Dialog -->
{#if showConfirmDialog}
  <div class="modal modal-open" style="z-index: 1100">
    <div class="modal-box max-w-md">
      <h3 class="text-lg font-bold">Confirmer la fermeture</h3>
      <p class="py-4">{confirmCloseMessage}</p>
      <div class="modal-action">
        <button class="btn btn-ghost" onclick={cancelClose}>Annuler</button>
        <button class="btn btn-error" onclick={confirmClose}>
          Fermer sans sauvegarder
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  /* S'assurer que le modal est au-dessus de tout */
  :global(.modal) {
    z-index: 1050;
  }
</style>
