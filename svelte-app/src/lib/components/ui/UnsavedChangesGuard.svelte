<script lang="ts">
  import { blockNavigation } from "sv-router";
  import { navigate } from "$lib/router";
  import UnsavedChangesModal from "./UnsavedChangesModal.svelte";

  interface Props {
    routeKey: string;
    shouldProtect: () => boolean;
    onLeaveWithoutSave: () => void | Promise<void>;
    onSaveAndLeave: () => boolean | void | Promise<boolean | void>;
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

  // ✅ sv-router utilise blockNavigation() au lieu des guards dynamiques
  // Ce callback est appelé avant chaque navigation
  // Retourne true pour autoriser, false pour bloquer
  blockNavigation(() => {
    // Si pas de protection nécessaire, autoriser la navigation
    if (!shouldProtect()) {
      return true;
    }

    console.log(`[UnsavedChangesGuard] Navigation protégée pour ${routeKey}`);

    // Bloquer la navigation et afficher le modal
    showGuardModal = true;
    return false; // Bloque la navigation
  });

  /**
   * Handler pour "Quitter sans sauvegarder"
   */
  async function handleLeaveWithoutSave() {
    showGuardModal = false;

    // Exécuter le handler fourni par le parent
    await onLeaveWithoutSave();

    // La navigation continue automatiquement car on retourne true
    // Note: sv-router appellera à nouveau le blocker, il faut donc être prêt
    // On utilise un trick : on réinitialise shouldProtect temporairement
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
      // Note: void sera casté en undefined ici
      if (result === (false as boolean | undefined)) {
        console.log(
          "[UnsavedChangesGuard] Sauvegarde échouée, navigation annulée",
        );
        return;
      }

      // Fermer le modal
      showGuardModal = false;

      // Autoriser la navigation - le blocker sera appelé à nouveau
      // mais shouldProtect() retournera false car les changements sont sauvegardés
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
    // La navigation reste bloquée car le modal est fermé mais shouldProtect() est toujours true
  }
</script>

<UnsavedChangesModal
  isOpen={showGuardModal}
  {isSaving}
  {message}
  onLeaveWithoutSave={handleLeaveWithoutSave}
  onSaveAndLeave={handleSaveAndLeave}
  onCancel={handleCancel}
/>
