/**
 * Point d'entrée principal du routeur sv-router
 *
 * Ce fichier initialise le routeur et exporte une API unifiée pour toute l'application.
 *
 * Fonctionnalités :
 * - Configuration du mode hash avec base="#"
 * - Export des fonctions de navigation (navigate, p, isActive, preload)
 * - Export de l'objet route pour accéder aux params/query actuels
 * - Export du composant Router pour App.svelte
 *
 * Migration depuis simple-router :
 * - navigate() → Même API, fonctionne identiquement
 * - getParam('x') → route.params.x
 * - getQuery('x') → route.search.x
 * - router.path → route.pathname
 * - preloadRoute() → preload()
 *
 * Documentation sv-router :
 * - Navigation: https://sv-router.vercel.app/guide/code-based/navigation
 * - Dynamic routes: https://sv-router.vercel.app/guide/code-based/dynamic-routes
 * - Search params: https://sv-router.vercel.app/guide/code-based/search-params
 */

import { createRouter, Router as SvRouter, searchParams } from "sv-router";
import { routes } from "./routes";

/**
 * Création du routeur avec toutes les routes
 * sv-router génère automatiquement le typage des params
 */
const {
  p: baseP,
  navigate: baseNavigate,
  isActive,
  preload,
  route,
} = createRouter(routes);

/**
 * Fonction de navigation avec options par défaut
 *
 * Applique automatiquement :
 * - scrollToTop: 'smooth' → Scroll doux vers le haut de page
 * - viewTransition: true → Active la View Transition API pour des transitions fluides
 *
 * Ces options peuvent être surchargées au cas par cas en les passant explicitement.
 *
 * @example
 * // Navigation avec defaults (scroll + transition)
 * navigate('/dashboard');
 *
 * // Surcharge des options
 * navigate('/dashboard', { scrollToTop: false });
 * navigate('/modal', { viewTransition: false });
 *
 * @param route - La route cible (peut être relative ou absolue)
 * @param options - Options de navigation (surchargent les defaults)
 */
export function navigate(
  ...args: Parameters<typeof baseNavigate>
): ReturnType<typeof baseNavigate> {
  const [target, options] = args;

  return baseNavigate(target, {
    scrollToTop: "smooth",
    viewTransition: true,
    ...options,
  });
}

/**
 * Version originale de navigate SANS les options par défaut
 *
 * À utiliser uniquement quand on ne veut ni scroll ni transition.
 *
 * @example
 * navigateWithoutDefaults('/modal', { scrollToTop: false, viewTransition: false });
 */
export { baseNavigate as navigateWithoutDefaults };

/**
 * p - Construction de chemins type-safe
 *
 * Permet de construire des URLs de manière type-safe en utilisant
 * les paramètres définis dans les routes.
 *
 * @example
 * p('/recipe/:uuid', { params: { uuid: '123' } });
 * // → "/recipe/123"
 */
export { baseP as p };

/**
 * isActive - Vérifie si une route est active
 *
 * Permet de styliser différemment les liens actifs dans la navigation.
 *
 * @example
 * isActive('/dashboard'); // true si sur /dashboard
 * isActive('/recipe/:uuid', { uuid: '123' }); // true si sur /recipe/123
 */
export { isActive };

/**
 * route - Objet contenant les informations sur la route actuelle
 *
 * Permet d'accéder aux paramètres de route, query params, pathname, etc.
 *
 * @example
 * // Paramètres de route
 * const uuid = route.params.uuid;
 *
 * // Query params
 * const tab = route.search.tab;
 *
 * // Pathname actuel
 * const path = route.pathname;
 *
 * // Méta-données
 * const isPublic = route.meta.public;
 */
export { route };

/**
 * preload - Préchargement des routes
 *
 * Permet de précharger une route pour une navigation plus rapide.
 *
 * @example
 * import { preload } from '$lib/router';
 *
 * // Précharger une route
 * preload('/dashboard');
 */
export { preload };

/**
 * Composant Router à utiliser dans App.svelte
 *
 * IMPORTANT: Utiliser <Router base="#"> pour activer le mode hash
 * Cela permet à l'application de fonctionner avec des URLs like #/recipe/123
 *
 * Exemple dans App.svelte :
 * <Router base="#">
 *   <!-- Les routes sont rendues ici automatiquement -->
 * </Router>
 */
export const Router = SvRouter;

/**
 * searchParams - Manipulation réactive des query params
 *
 * Importé depuis sv-router, permet de lire et modifier les query params
 * de manière réactive avec automatique mise à jour de l'URL.
 *
 * @example
 * import { searchParams } from '$lib/router';
 *
 * // Lire
 * const tab = searchParams.get('tab');
 *
 * // Écrire
 * searchParams.set('tab', 'info');
 *
 * // Supprimer
 * searchParams.delete('tab');
 *
 * // Écouter les changements
 * $effect(() => {
 *   console.log('Tab changed:', searchParams.get('tab'));
 * });
 */
export { searchParams };

/**
 * isActiveLink - Utilitaire pour vérifier si un lien est actif
 *
 * Permet de styliser différemment les liens actifs dans la navigation.
 *
 * @example
 * import { isActiveLink } from '$lib/router';
 *
 * <a class:active={isActiveLink('/recipes')}>Recettes</a>
 */
export { isActiveLink } from "sv-router";

/**
 * blockNavigation - Fonction pour bloquer la navigation
 *
 * Utilisé dans UnsavedChangesGuard pour prévenir la perte de données.
 *
 * @example
 * import { blockNavigation } from '$lib/router';
 *
 * blockNavigation(() => {
 *   if (hasUnsavedChanges) {
 *     showWarning();
 *     return false; // Bloque la navigation
 *   }
 *   return true; // Autorise la navigation
 * });
 */
export { blockNavigation } from "sv-router";
