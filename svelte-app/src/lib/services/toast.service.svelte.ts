/**
 * Types d'états des toasts
 */
export type ToastState = "loading" | "success" | "error" | "info" | "warning";

/**
 * Source du toast
 */
export type ToastSource = "user" | "realtime-other" | "system";

/**
 * Interface pour une action de toast
 */
export interface ToastAction {
  label: string;
  onClick: () => void;
}

/**
 * Interface pour un toast
 */
export interface Toast {
  /** ID unique du toast */
  id: string;
  /** État actuel du toast */
  state: ToastState;
  /** Message à afficher */
  message: string;
  /** Timestamp de création */
  timestamp: number;
  /** Source de l'action */
  source: ToastSource;
  /** Délai d'auto-fermeture (ID du setTimeout) */
  timeoutId?: number;
  /** Durée d'auto-fermeture personnalisée en ms */
  autoCloseDelay?: number;
  /** Détails optionnels pour affichage dans un modal */
  details?: any;
  /** Actions optionnelles (boutons) */
  actions?: ToastAction[];
}

/**
 * Options pour la création d'un toast
 */
export interface ToastOptions {
  /** ID personnalisé optionnel */
  id?: string;
  /** État initial */
  state: ToastState;
  /** Message à afficher */
  message: string;
  /** Source de l'action */
  source?: ToastSource;
  /** Délai d'auto-fermeture personnalisé */
  autoCloseDelay?: number;
  /** Détails optionnels pour affichage dans un modal */
  details?: any;
  /** Actions optionnelles (boutons) */
  actions?: ToastAction[];
}

/**
 * Options pour le tracking d'une opération asynchrone
 */
export interface ToastTrackOptions {
  /** Message pendant le chargement */
  loading: string;
  /** Message en cas de succès */
  success?: string;
  /** Message en cas d'erreur */
  error?: string;
  /** ID personnalisé du toast */
  id?: string;
  /** Durée d'auto-fermeture pour le toast de succès */
  successDelay?: number;
  /** Durée d'auto-fermeture pour le toast d'erreur */
  errorDelay?: number;
}

/**
 * Service de gestion des toasts
 */
export class ToastService {
  /** Array des toasts actifs avec réactivité Svelte 5 */
  #toasts = $state<Toast[]>([]);
  /** Maximum de toasts simultanés */
  readonly MAX_TOASTS = 3;

  /** Accès en lecture seule aux toasts */
  get toasts(): Toast[] {
    return [...this.#toasts].sort((a, b) => b.timestamp - a.timestamp);
  }

  /**
   * Crée un nouveau toast avec stratégie de limitation
   */
  create(options: ToastOptions): string {
    const id = options.id || crypto.randomUUID();
    const toast: Toast = {
      id,
      state: options.state,
      message: options.message,
      timestamp: Date.now(),
      source: options.source || "user",
      timeoutId: undefined,
      autoCloseDelay: options.autoCloseDelay,
      details: options.details,
      actions: options.actions || [],
    };

    // Stratégie simple : 1 toast utilisateur + toasts secondaires
    this.#addToQueue(toast);

    return id;
  }

  /**
   * Met à jour un toast existant
   */
  update(id: string, updates: Partial<ToastOptions>): void {
    const index = this.#toasts.findIndex((t) => t.id === id);
    if (index === -1) return;

    // Annuler l'auto-fermeture précédente
    const existingToast = this.#toasts[index];
    if (existingToast.timeoutId) {
      clearTimeout(existingToast.timeoutId);
    }

    // Appliquer les mises à jour
    this.#toasts[index] = {
      ...existingToast,
      state: updates.state || existingToast.state,
      message: updates.message || existingToast.message,
      source: updates.source || existingToast.source,
      actions: updates.actions || existingToast.actions,
      autoCloseDelay:
        updates.autoCloseDelay !== undefined
          ? updates.autoCloseDelay
          : existingToast.autoCloseDelay,
    };

    // Nouvelle auto-fermeture si nécessaire
    this.#scheduleAutoClose(this.#toasts[index]);
  }

  /**
   * Suit une opération asynchrone avec un toast
   */
  async track<T>(promise: Promise<T>, options: ToastTrackOptions): Promise<T> {
    // Toast loading
    const toastId = this.create({
      id: options.id,
      state: "loading",
      message: options.loading,
      source: "user",
    });

    try {
      const result = await promise;

      // Succès
      this.update(toastId, {
        state: "success",
        message: options.success || "Opération réussie",
        autoCloseDelay: options.successDelay,
      });

      return result;
    } catch (error) {
      // Erreur
      this.update(toastId, {
        state: "error",
        message: options.error || "Erreur lors de l'opération",
        autoCloseDelay: options.errorDelay,
      });

      throw error;
    }
  }

  /**
   * Ferme un toast
   */
  dismiss(id: string): void {
    const index = this.#toasts.findIndex((t) => t.id === id);
    if (index === -1) return;

    const toast = this.#toasts[index];
    if (toast.timeoutId) {
      clearTimeout(toast.timeoutId);
    }

    this.#toasts.splice(index, 1);
  }

  /**
   * Ferme tous les toasts
   */
  dismissAll(): void {
    this.#toasts.forEach((toast) => {
      if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
      }
    });
    this.#toasts = [];
  }

  /**
   * Stratégie d'ajout simple et efficace
   */
  #addToQueue(newToast: Toast): void {
    if (newToast.source === "user") {
      // Remplacer le toast utilisateur existant
      const userIndex = this.#toasts.findIndex((t) => t.source === "user");
      if (userIndex >= 0) {
        this.#toasts[userIndex] = newToast;
      } else {
        this.#toasts.push(newToast);
      }
    } else {
      // Ajouter un toast secondaire (max 2)
      const secondaryToasts = this.#toasts.filter((t) => t.source !== "user");
      if (secondaryToasts.length >= 2) {
        // Supprimer le plus ancien
        const oldestSecondary = secondaryToasts[0];
        this.dismiss(oldestSecondary.id);
      }
      this.#toasts.push(newToast);
    }

    // Limiter le total
    if (this.#toasts.length > this.MAX_TOASTS) {
      this.#toasts.splice(0, this.#toasts.length - this.MAX_TOASTS);
    }

    // Auto-fermeture
    this.#scheduleAutoClose(newToast);
  }

  /**
   * Programme l'auto-fermeture si nécessaire
   */
  #scheduleAutoClose(toast: Toast): void {
    // Auto-fermeture pour success, info, error et warning si un délai est spécifié
    const hasCustomDelay = toast.autoCloseDelay !== undefined;
    const canAutoClose =
      toast.state === "success" ||
      toast.state === "info" ||
      (toast.state === "error" && hasCustomDelay) ||
      (toast.state === "warning" && hasCustomDelay);

    if (!canAutoClose) {
      return;
    }

    // Durée par défaut selon le type et la source, ou durée personnalisée si spécifiée
    let delay: number;

    if (toast.autoCloseDelay !== undefined) {
      // Utiliser la durée personnalisée
      delay = toast.autoCloseDelay;
    } else {
      // Utiliser les durées par défaut
      switch (toast.state) {
        case "success":
        case "info":
          delay = toast.source === "realtime-other" ? 4000 : 2000;
          break;
        case "warning":
          // Par défaut, les warnings ne s'auto-ferment pas
          if (!toast.autoCloseDelay) return;
          delay = toast.autoCloseDelay;
          break;
        case "error":
          // Les erreurs ne s'auto-ferment que si un délai est spécifié
          if (!toast.autoCloseDelay) return;
          delay = toast.autoCloseDelay;
          break;
        default:
          return;
      }
    }

    toast.timeoutId = setTimeout(() => {
      this.dismiss(toast.id);
    }, delay) as unknown as number;
  }

  /**
   * Méthodes utilitaires simples
   */
  success(
    message: string,
    options?: { details?: any; autoCloseDelay?: number },
  ): string {
    return this.create({
      state: "success",
      message,
      details: options?.details,
      autoCloseDelay: options?.autoCloseDelay,
    });
  }

  error(
    message: string,
    options?: { details?: any; autoCloseDelay?: number },
  ): string {
    return this.create({
      state: "error",
      message,
      details: options?.details,
      autoCloseDelay: options?.autoCloseDelay,
    });
  }

  warning(
    message: string,
    options?: {
      source?: ToastSource;
      details?: any;
      actions?: ToastAction[];
      autoCloseDelay?: number;
    },
  ): string {
    return this.create({
      state: "warning",
      message,
      source: options?.source || "system",
      details: options?.details,
      actions: options?.actions,
      autoCloseDelay: options?.autoCloseDelay,
    });
  }

  info(
    message: string,
    options?: { source?: ToastSource; details?: any; autoCloseDelay?: number },
  ): string {
    return this.create({
      state: "info",
      message,
      source: options?.source || "system",
      details: options?.details,
      autoCloseDelay: options?.autoCloseDelay,
    });
  }

  loading(
    message: string,
    options?: { details?: any; autoCloseDelay?: number },
  ): string {
    return this.create({
      state: "loading",
      message,
      details: options?.details,
      autoCloseDelay: options?.autoCloseDelay,
    });
  }
}

/**
 * Instance singleton
 */
export const toastService = new ToastService();
