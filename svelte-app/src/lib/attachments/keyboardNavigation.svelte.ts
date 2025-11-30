import type { Attachment } from "svelte/attachments";

/**
 * Attachment pour gérer la navigation au clavier et le focus automatique
 * dans les champs de recherche de recettes
 *
 * @param options - Options de configuration
 * @param options.onEmptySubmit - Callback appelé quand Entrée/Tab est pressé sur un champ vide
 * @param options.shouldFocus - Si true, le champ recevra le focus automatiquement
 * @returns Attachment Svelte 5
 */
export function keyboardNavigation(options: {
  onEmptySubmit?: () => void;
  shouldFocus?: boolean;
}): Attachment {
  return (element) => {
    // Focus automatique si demandé
    if (options.shouldFocus) {
      // Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
      requestAnimationFrame(() => {
        element.focus();
      });
    }

    // Gestionnaire d'événements clavier
    const handleKeydown = (event: KeyboardEvent) => {
      // Vérifier si le champ est vide et si Entrée ou Tab est pressé
      if (
        (event.key === "Enter" || event.key === "Tab") &&
        element instanceof HTMLInputElement &&
        element.value.trim() === ""
      ) {
        event.preventDefault();
        options.onEmptySubmit?.();
      }
    };

    // Ajouter l'écouteur d'événements
    element.addEventListener("keydown", handleKeydown);

    // Fonction de nettoyage
    return () => {
      element.removeEventListener("keydown", handleKeydown);
    };
  };
}
