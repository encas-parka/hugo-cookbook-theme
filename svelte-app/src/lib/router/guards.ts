/**
 * Guards de route pour sv-router
 *
 * Ce fichier contient les guards qui protègent les routes :
 * - authGuard : Vérifie l'authentification de l'utilisateur
 * - localEventGuard : Vérifie qu'un event est en mode "local" (mode démo)
 *
 * Les guards utilisent le hook beforeLoad de sv-router.
 * Pour bloquer l'accès, on utilise throw navigate('/path').
 */

import type { Hooks } from "sv-router";
import { globalState } from "$lib/stores/GlobalState.svelte";
import { eventsStore } from "$lib/stores/EventsStore.svelte";

/**
 * Guard d'authentification
 *
 * Protège les routes privées en vérifiant que l'utilisateur est authentifié.
 * Redirige vers la home si non authentifié.
 *
 * Utilisation :
 * '/dashboard': {
 *   hooks: authGuard,
 *   '/': DashboardPage
 * }
 */
export const authGuard: Hooks = {
  async beforeLoad({ pathname }) {
    if (!globalState.isAuthenticated) {
      console.log(`[AuthGuard] Accès refusé à ${pathname} > Redirection /`);
      // Import dynamique de navigate pour éviter l'erreur d'export
      const { navigate } = await import("$lib/router");
      throw navigate("/", { replace: true });
    }
  },
};

/**
 * Guard pour le mode démo (events locaux)
 *
 * Vérifie que l'event existe et est bien en statut "local".
 * Attend jusqu'à 3 secondes que l'event soit disponible dans le store.
 *
 * Ce guard est utilisé pour les routes /demo/event/* qui permettent
 * d'éditer des events en mode local sans authentification.
 *
 * Utilisation :
 * '/demo/event/:id': {
 *   hooks: localEventGuard,
 *   '/': EventEditPage
 * }
 */
export const localEventGuard: Hooks = {
  async beforeLoad({ pathname }) {
    // Import dynamique de navigate
    const { navigate } = await import("$lib/router");

    // Extraire l'eventId du pathname
    // Patterns supportés :
    // - /demo/event/:id
    // - /demo/event/recipes/:id
    // - /demo/event/products/:id
    // - /demo/event/posters/:id
    const match = pathname.match(
      /^\/demo\/event\/(?:recipes|products|posters)?\/?([^/]+)$/,
    );

    if (!match) {
      console.log("[LocalEventGuard] Pattern invalide > Redirection /");
      throw navigate("/", { replace: true });
    }

    const eventId = match[1];

    // Attendre que l'event soit disponible (max 3 secondes)
    const maxRetries = 30; // 30 × 100ms = 3000ms
    for (let i = 0; i < maxRetries; i++) {
      const event = eventsStore.getEventById(eventId);

      if (event) {
        // Vérifier que c'est bien un event local
        if (event.status !== "local") {
          console.log("[LocalEventGuard] Event non local > Redirection /");
          throw navigate("/", { replace: true });
        }
        console.log("[LocalEventGuard] Event local validé:", eventId);
        return; // OK, continuer
      }

      // Attendre 100ms avant de réessayer
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    // Event non trouvé après timeout
    console.log(
      "[LocalEventGuard] Event introuvable après timeout > Redirection /",
    );
    throw navigate("/", { replace: true });
  },
};
