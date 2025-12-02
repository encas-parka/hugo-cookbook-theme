import { toastService } from "../services/toast.service.svelte";

export interface RetryOptions {
  /** Nom de l'opération pour les messages */
  operationName: string;
  /** Message de succès */
  successMessage?: string;
  /** Message d'erreur */
  errorMessage?: string;
  /** Nombre de tentatives automatiques (défaut: 1) */
  maxAutoRetries?: number;
  /** Délai avant auto-retry en ms (défaut: 1000) */
  autoRetryDelay?: number;
  /** Callback en cas de succès */
  onSuccess?: (result: any) => void;
  /** Callback en cas d'échec final */
  onError?: (error: any) => void;
}

/**
 * Exécute une opération avec stratégie de réessai (auto + manuel)
 */
/**
 * Exécute une opération avec stratégie de réessai (auto + manuel)
 * Retourne une Promise qui ne se résout qu'en cas de succès ou d'abandon définitif.
 */
export function executeWithRetry<T>(
  operation: () => Promise<T>,
  options: RetryOptions,
): Promise<T | null> {
  const { operationName, maxAutoRetries = 1, autoRetryDelay = 1000 } = options;

  let attempt = 1;
  let toastId: string | null = null;

  return new Promise<T | null>((resolve, reject) => {
    const tryOperation = async (isManualRetry = false) => {
      try {
        // Feedback visuel
        if (isManualRetry) {
          toastId = toastService.loading(`Tentative de ${operationName}...`);
        } else if (attempt > 1) {
          if (toastId) {
            toastService.update(toastId, {
              state: "loading",
              message: `${operationName} (Tentative ${attempt}/${maxAutoRetries + 1})...`,
            });
          } else {
            toastId = toastService.loading(
              `${operationName} (Tentative ${attempt}/${maxAutoRetries + 1})...`,
            );
          }
        } else {
          toastId = toastService.loading(`${operationName} en cours...`);
        }

        const result = await operation();

        // Succès
        if (toastId) {
          toastService.update(toastId, {
            state: "success",
            message: options.successMessage || `${operationName} réussie !`,
            actions: undefined,
          });
        }
        options.onSuccess?.(result);
        resolve(result);
      } catch (error) {
        console.error(
          `[RetryUtils] Erreur ${operationName} (Tentative ${attempt}):`,
          error,
        );
        const errMessage =
          error instanceof Error ? error.message : "Erreur inconnue";

        // Auto-retry
        if (attempt <= maxAutoRetries) {
          attempt++;

          if (toastId) {
            toastService.update(toastId, {
              state: "loading",
              message: `Erreur. Nouvelle tentative dans ${autoRetryDelay / 1000}s...`,
            });
          }

          setTimeout(() => tryOperation(false), autoRetryDelay);
          return;
        }

        // Échec de l'auto-retry -> Proposer Retry Manuel
        if (toastId) {
          toastService.update(toastId, {
            state: "error",
            message: `Échec ${operationName}: ${errMessage}`,
            actions: {
              label: "Réessayer",
              onClick: () => {
                toastService.dismiss(toastId!);
                tryOperation(true);
              },
            },
          });
        }

        // On ne resolve/reject PAS ici, on attend que l'utilisateur clique sur Réessayer.
        // Si l'utilisateur ferme le toast (via la croix), la promise restera pendante...
        // Idéalement il faudrait un callback onDismiss sur le toast pour rejecter la promise.
        // Mais pour l'instant, le comportement "bloquant" est ce qu'on veut pour ne pas casser la boucle.
        options.onError?.(error);
      }
    };

    tryOperation(false);
  });
}
