<script lang="ts">
  import { blockNavigation, navigate } from "$lib/router";
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

  // Stocker l'URL de navigation pour la re-déclencher après réponse utilisateur
  let blockedUrl = $state<string | null>(null);

  // Flag pour empêcher le re-blocage lors de la navigation programmatique
  let isNavigatingAway = $state(false);

  // Ce callback est appelé avant chaque navigation
  // Retourne true pour autoriser, false pour bloquer
  blockNavigation(() => {
    // Si on est en train de naviguer programmatiquement, autoriser
    if (isNavigatingAway) {
      return true;
    }

    // Si pas de protection nécessaire, autoriser la navigation
    if (!shouldProtect()) {
      return true;
    }

    // Récupérer la destination de navigation depuis window.location.hash
    // En mode hash (#/path), le chemin est dans le hash
    const destinationPath = window.location.hash.slice(1) || "/"; // Enlever le # initial

    // Stocker l'URL de destination
    blockedUrl = destinationPath;

    console.log(
      `[UnsavedChangesGuard] Navigation protégée pour ${routeKey} - vers: ${destinationPath}`,
    );

    // Bloquer la navigation et afficher le modal
    showGuardModal = true;
    return false; // Bloque la navigation
  });

  /**
   * Handler pour "Quitter sans sauvegarder"
   */
  async function handleLeaveWithoutSave() {
    // Fermer le modal
    showGuardModal = false;

    // Exécuter le handler fourni par le parent
    await onLeaveWithoutSave();

    // Re-déclencher manuellement la navigation vers l'URL bloquée
    if (blockedUrl) {
      console.log(
        "[UnsavedChangesGuard] Quitter sans sauvegarder - Navigation vers:",
        blockedUrl,
      );

      // Activer le flag pour empêcher le re-blocage
      isNavigatingAway = true;

      // Naviguer vers la destination initiale
      navigate(blockedUrl);

      // Réinitialiser après un court délai
      setTimeout(() => {
        isNavigatingAway = false;
        blockedUrl = null;
      }, 100);
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
      // Note: void sera casté en undefined ici
      if (result === (false as boolean | undefined)) {
        console.log(
          "[UnsavedChangesGuard] Sauvegarde échouée, navigation annulée",
        );
        return;
      }

      // Fermer le modal
      showGuardModal = false;

      // Re-déclencher la navigation après sauvegarde réussie
      if (blockedUrl) {
        console.log(
          "[UnsavedChangesGuard] Sauvegarde réussie - Navigation vers:",
          blockedUrl,
        );

        // Activer le flag pour empêcher le re-blocage
        isNavigatingAway = true;

        // Naviguer vers la destination initiale
        navigate(blockedUrl);

        // Réinitialiser après un court délai
        setTimeout(() => {
          isNavigatingAway = false;
          blockedUrl = null;
        }, 100);
      }
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
    blockedUrl = null;
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
