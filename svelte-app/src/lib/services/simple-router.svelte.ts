/**
 * Router Simple pour Svelte 5 (Mode Hash)
 *
 * Fonctionnalités :
 * - Navigation via Hash (#)
 * - Paramètres d'URL multiples
 * - Query strings
 * - Support du bouton retour
 * - Guards de route (beforeLeave, beforeEnter)
 */

type RouteParams = Record<string, string>;
type QueryParams = Record<string, string>;

interface RouteInfo {
  path: string;
  params: RouteParams;
  query: QueryParams;
}

interface RouteGuards {
  beforeLeave?: (from: RouteInfo, to: RouteInfo) => boolean | Promise<boolean>;
  beforeEnter?: (to: RouteInfo, from: RouteInfo) => boolean | Promise<boolean>;
}

interface RouteDefinition {
  path: string | RegExp;
  component: any;
  guards?: RouteGuards;
}

interface RouteMatch {
  component: any;
  params: RouteParams;
  query: QueryParams;
  guards?: RouteGuards;
}

class SimpleRouter {
  private routes: RouteDefinition[] = [];
  private currentPath = $state("");
  private currentParams = $state<RouteParams>({});
  private currentQuery = $state<QueryParams>({});
  private currentRouteMatch: RouteMatch | null = null;
  private isNavigating = false;
  private dynamicGuards: Map<string, RouteGuards> = new Map();

  constructor() {
    // Initialiser le path depuis le hash
    this.currentPath = this.getHashPath();
    this.updateQueryParams();

    // Écouter les changements de hash
    window.addEventListener("hashchange", () => {
      const newPath = this.getHashPath();
      this.handleHashChange(newPath);
    });
  }

  /**
   * Définir les routes
   */
  addRoute(path: string | RegExp, component: any, guards?: RouteGuards) {
    this.routes.push({ path, component, guards });
  }

  /**
   * Enregistrer dynamiquement un guard pour une route
   * @param routeKey Clé identifiant la route (ex: '/dashboard/eventEdit/123')
   * @param guards Guards à appliquer
   * @returns Fonction de cleanup
   */
  registerRouteGuard(routeKey: string, guards: RouteGuards): () => void {
    this.dynamicGuards.set(routeKey, guards);

    // Retourner la fonction de cleanup
    return () => {
      this.dynamicGuards.delete(routeKey);
    };
  }

  /**
   * Gérer les changements de hash (incluant bouton précédent/suivant)
   */
  private async handleHashChange(newPath: string) {
    if (this.isNavigating) return;

    // Mettre à jour la query string
    this.updateQueryParams();

    // Construire les infos de route
    const from: RouteInfo = {
      path: this.currentPath,
      params: this.currentParams,
      query: this.currentQuery,
    };

    const to: RouteInfo = {
      path: newPath,
      params: {}, // Sera rempli après matching
      query: this.currentQuery,
    };

    // Priorité 1 : Vérifier les guards dynamiques enregistrés pour la route actuelle
    const dynamicGuard = this.dynamicGuards.get(from.path);
    if (dynamicGuard?.beforeLeave) {
      try {
        const canLeave = await dynamicGuard.beforeLeave(from, to);
        if (!canLeave) {
          console.log(
            "[Router] Navigation annulée par beforeLeave (guard dynamique)",
          );
          window.location.hash = from.path;
          return;
        }
      } catch (error) {
        console.error(
          "[Router] Erreur dans beforeLeave (guard dynamique):",
          error,
        );
      }
    }

    // Priorité 2 : Vérifier les guards statiques de la route actuelle
    if (this.currentRouteMatch?.guards?.beforeLeave) {
      try {
        const canLeave = await this.currentRouteMatch.guards.beforeLeave(
          from,
          to,
        );
        if (!canLeave) {
          console.log(
            "[Router] Navigation annulée par beforeLeave (guard statique)",
          );
          window.location.hash = from.path;
          return;
        }
      } catch (error) {
        console.error(
          "[Router] Erreur dans beforeLeave (guard statique):",
          error,
        );
      }
    }

    // Trouver la nouvelle route
    const newMatch = this.findRouteMatch(newPath);
    if (!newMatch) {
      // Route non trouvée, autoriser la navigation (page 404)
      this.currentPath = newPath;
      this.currentParams = {};
      this.currentRouteMatch = null;
      return;
    }

    // Mettre à jour les params dans "to"
    to.params = newMatch.params;

    // Vérifier le guard beforeEnter de la nouvelle route
    if (newMatch.guards?.beforeEnter) {
      try {
        const canEnter = await newMatch.guards.beforeEnter(to, from);
        if (!canEnter) {
          console.log("[Router] Navigation annulée par beforeEnter");
          // Rétablir l'ancien hash
          window.location.hash = from.path;
          return;
        }
      } catch (error) {
        console.error("[Router] Erreur dans beforeEnter:", error);
      }
    }

    // Navigation autorisée : mettre à jour l'état
    this.currentPath = newPath;
    this.currentParams = newMatch.params;
    this.currentRouteMatch = newMatch;
  }

  /**
   * Naviguer vers un path
   */
  async navigate(path: string, query?: QueryParams) {
    if (this.isNavigating) return;

    this.isNavigating = true;

    try {
      // Construire les infos de route
      const from: RouteInfo = {
        path: this.currentPath,
        params: this.currentParams,
        query: this.currentQuery,
      };

      // Trouver la nouvelle route pour avoir les params
      const tempMatch = this.findRouteMatch(path);
      const to: RouteInfo = {
        path,
        params: tempMatch?.params || {},
        query: query || {},
      };

      // Vérifier beforeLeave de la route actuelle
      if (this.currentRouteMatch?.guards?.beforeLeave) {
        const canLeave = await this.currentRouteMatch.guards.beforeLeave(
          from,
          to,
        );
        if (!canLeave) {
          console.log("[Router] Navigation annulée par beforeLeave");
          return;
        }
      }

      // Vérifier beforeEnter de la nouvelle route
      if (tempMatch?.guards?.beforeEnter) {
        const canEnter = await tempMatch.guards.beforeEnter(to, from);
        if (!canEnter) {
          console.log("[Router] Navigation annulée par beforeEnter");
          return;
        }
      }

      // Construire le hash : #/path?query
      const queryString = query
        ? "?" + new URLSearchParams(query).toString()
        : "";
      const fullHash =
        "#" + (path.startsWith("/") ? path : "/" + path) + queryString;

      // Effectuer la navigation
      window.location.hash = fullHash;

      // Note : la mise à jour de l'état se fera via hashchange
    } finally {
      this.isNavigating = false;
    }
  }

  /**
   * Trouver la route correspondant au path
   */
  private findRouteMatch(path: string): RouteMatch | null {
    for (const route of this.routes) {
      const match = this.matchRoute(route.path, path);
      if (match) {
        return {
          component: route.component,
          params: match.params,
          query: this.currentQuery,
          guards: route.guards,
        };
      }
    }
    return null;
  }

  /**
   * Obtenir le composant actuel et ses paramètres
   */
  async match(): Promise<RouteMatch | null> {
    const match = this.findRouteMatch(this.currentPath);
    if (match) {
      this.currentParams = match.params;
      this.currentRouteMatch = match;
    }
    return match;
  }

  /**
   * Matcher un path contre une définition de route
   */
  private matchRoute(
    routePath: string | RegExp,
    currentPath: string,
  ): { params: RouteParams } | null {
    if (routePath instanceof RegExp) {
      const match = currentPath.match(routePath);
      if (match) {
        return { params: match.groups || {} };
      }
      return null;
    }

    const paramNames: string[] = [];
    const regexPattern = routePath.replace(/:([^/]+)/g, (_, paramName) => {
      paramNames.push(paramName);
      return "([^/]+)";
    });

    const regex = new RegExp(`^${regexPattern}$`);
    const match = currentPath.match(regex);

    if (match) {
      const params: RouteParams = {};
      paramNames.forEach((name, index) => {
        params[name] = match[index + 1];
      });
      return { params };
    }

    return null;
  }

  /**
   * Extraire le path depuis le hash
   * Ex: #/eventEdit?id=1 -> /eventEdit
   */
  private getHashPath(): string {
    const hash = window.location.hash.slice(1); // Enlever le #
    const path = hash.split("?")[0]; // Enlever la query string
    return path || "/"; // Par défaut /
  }

  /**
   * Mettre à jour les query params depuis le hash
   */
  private updateQueryParams() {
    const hash = window.location.hash.slice(1);
    const queryPart = hash.split("?")[1];
    const query: QueryParams = {};

    if (queryPart) {
      const params = new URLSearchParams(queryPart);
      params.forEach((value, key) => {
        query[key] = value;
      });
    }

    this.currentQuery = query;
  }

  get path() {
    return this.currentPath;
  }

  get params() {
    return this.currentParams;
  }

  get query() {
    return this.currentQuery;
  }
}

/**
 * Instance globale du router
 */
export const router = new SimpleRouter();

/**
 * Helper pour naviguer
 */
export function navigate(path: string, query?: QueryParams) {
  router.navigate(path, query);
}

/**
 * Helper pour obtenir un paramètre
 */
export function getParam(name: string): string | undefined {
  return router.params[name];
}

/**
 * Helper pour obtenir un query param
 */
export function getQuery(name: string): string | undefined {
  return router.query[name];
}

/**
 * Types exportés
 */
export type {
  RouteParams,
  QueryParams,
  RouteInfo,
  RouteGuards,
  RouteDefinition,
};
