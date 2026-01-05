<script lang="ts">
  import type { Snippet } from "svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";

  type ModalSize = "sm" | "lg" | "xl";

  interface Props {
    isOpen: boolean;
    onClose: () => void;
    fullscreenOnMobile?: boolean;
    closeOnBackdropClick?: boolean;
    hasUnsavedChanges?: boolean;
    confirmCloseMessage?: string;
    minWidth?: ModalSize;
    minHeight?: ModalSize;
    maxWidth?: ModalSize;
    maxHeight?: ModalSize;
    children: Snippet;
  }

  let {
    isOpen,
    onClose,
    fullscreenOnMobile = true,
    closeOnBackdropClick = false,
    hasUnsavedChanges = false,
    confirmCloseMessage = "Vous avez des modifications non sauvegardées. Voulez-vous vraiment fermer ?",
    minWidth,
    minHeight,
    maxWidth,
    maxHeight = "xl",
    children,
  }: Props = $props();

  // Fonctions utilitaires pour contourner le tree-shaking de Tailwind
  // Toutes les classes doivent être mentionnées explicitement
  function getSizeClass(
    size: ModalSize,
    dimension: "min-w" | "min-h" | "max-w" | "max-h",
  ): string {
    const sizeMap: Record<ModalSize, Record<typeof dimension, string>> = {
      sm: {
        "min-w": "min-w-[30vw]",
        "min-h": "min-h-[30vh]",
        "max-w": "max-w-[30vw]",
        "max-h": "max-h-[30vh]",
      },
      lg: {
        "min-w": "min-w-[50vw]",
        "min-h": "min-h-[50vh]",
        "max-w": "max-w-[50vw]",
        "max-h": "max-h-[50vh]",
      },
      xl: {
        "min-w": "min-w-[90vw]",
        "min-h": "min-h-[90vh]",
        "max-w": "max-w-[90vw]",
        "max-h": "max-h-[90vh]",
      },
    };

    return sizeMap[size][dimension];
  }

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
      class="modal-box flex flex-col p-0 {fullscreenOnMobile &&
      globalState.isMobile
        ? 'fixed inset-0 m-0 h-lvh w-lvw rounded-none'
        : 'fixed m-auto'} {globalState.isDesktop &&
        !minWidth &&
        !maxWidth &&
        'w-auto'} {globalState.isDesktop &&
        minWidth &&
        getSizeClass(minWidth, 'min-w')} {globalState.isDesktop &&
        minHeight &&
        getSizeClass(minHeight, 'min-h')} {globalState.isDesktop &&
        maxWidth &&
        getSizeClass(maxWidth, 'max-w')} {globalState.isDesktop &&
        maxHeight &&
        getSizeClass(maxHeight, 'max-h')}"
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
