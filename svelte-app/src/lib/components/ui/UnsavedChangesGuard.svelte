<script lang="ts">
  import {
    navigate,
    router,
    type RouteGuards,
    type RouteInfo,
  } from "$lib/services/simple-router.svelte";
  import UnsavedChangesModal from "./UnsavedChangesModal.svelte";

  interface Props {
    routeKey: string;
    shouldProtect: () => boolean;
    onLeaveWithoutSave: () => void | Promise<void>;
    onSaveAndLeave: () => void | Promise<void>;
    message?: string;
  }

  let {
    routeKey,
    shouldProtect,
    onLeaveWithoutSave,
    onSaveAndLeave,
    message = "Vous avez des modifications non sauvegardées. Voulez-vous quitter sans enregistrer ?",
  }: Props = $props();

  // État du modal
  let showGuardModal = $state(false);
  let isSaving = $state(false);
  let guardResolve: ((value: boolean) => void) | null = null;

  /**
   * Guard beforeLeave appelé par le router
   */
  async function beforeLeave(from: RouteInfo, to: RouteInfo): Promise<boolean> {
    // Si pas de protection nécessaire, autoriser la navigation
    if (!shouldProtect()) {
      return true;
    }

    console.log(`[UnsavedChangesGuard] Navigation protégée pour ${routeKey}`);

    // Afficher le modal
    showGuardModal = true;

    // Retourner une Promise qui sera résolue quand l'utilisateur choisira
    return new Promise<boolean>((resolve) => {
      guardResolve = resolve;
    });
  }

  /**
   * Handler pour "Quitter sans sauvegarder"
   */
  async function handleLeaveWithoutSave() {
    showGuardModal = false;

    // Exécuter le handler fourni par le parent
    await onLeaveWithoutSave();

    // Autoriser la navigation
    if (guardResolve) {
      guardResolve(true);
      guardResolve = null;
    }
  }

  /**
   * Handler pour "Enregistrer et quitter"
   */
  async function handleSaveAndLeave() {
    isSaving = true;

    try {
      // Exécuter le handler de sauvegarde du parent
      // On attend un retour explicite (true/false) ou void (considéré comme succès)
      const result = await onSaveAndLeave();

      // Si le handler retourne explicitement false, on annule le départ
      if (result === false) {
        console.log(
          "[UnsavedChangesGuard] Sauvegarde échouée, navigation annulée",
        );
        return;
      }

      // Fermer le modal
      showGuardModal = false;

      // Autoriser la navigation
      if (guardResolve) {
        guardResolve(true);
        guardResolve = null;
      }
    } catch (error) {
      console.error(
        "[UnsavedChangesGuard] Erreur lors de la sauvegarde:",
        error,
      );
      // On reste sur la page en cas d'erreur bloquante
    } finally {
      isSaving = false;
    }
  }

  /**
   * Handler pour annuler (rester)
   */
  function handleCancel() {
    showGuardModal = false;

    // Refuser la navigation
    if (guardResolve) {
      guardResolve(false);
      guardResolve = null;
    }
  }

  /**
   * Enregistrer le guard au montage du composant
   */
  $effect(() => {
    const guards: RouteGuards = {
      beforeLeave,
    };

    const cleanup = router.registerRouteGuard(routeKey, guards);

    // Cleanup : désenregistrer le guard quand le composant est démonté
    return cleanup;
  });
</script>

<UnsavedChangesModal
  isOpen={showGuardModal}
  {isSaving}
  {message}
  onLeaveWithoutSave={handleLeaveWithoutSave}
  onSaveAndLeave={handleSaveAndLeave}
  onCancel={handleCancel}
/>
