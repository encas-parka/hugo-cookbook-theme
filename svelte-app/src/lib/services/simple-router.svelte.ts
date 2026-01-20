/**
 * Router Simple pour Svelte 5 (Mode Hash)
 *
 * Fonctionnalités :
 * - Navigation via Hash (#)
 * - Paramètres d'URL multiples
 * - Query strings
 * - Support du bouton retour
 * - Guards de route (beforeLeave, beforeEnter)
 * - Lazy loading des composants
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

// ✅ Support pour lazy loading
type LazyComponent = () => Promise<{ default: any }>;
type RouteComponent = any | LazyComponent;

interface RouteDefinition {
  path: string | RegExp;
  component: RouteComponent;
  guards?: RouteGuards;
}

interface RouteMatch {
  component: any;
  params: RouteParams;
  query: QueryParams;
  guards?: RouteGuards;
  isLoading?: boolean; // Pour indiquer qu'un composant lazy est en cours de chargement
}

class SimpleRouter {
  private routes: RouteDefinition[] = [];
  private currentPath = $state("");
  private currentParams = $state<RouteParams>({});
  private currentQuery = $state<QueryParams>({});
  private currentRouteMatch: RouteMatch | null = null;
  private isNavigating = false;
  private dynamicGuards: Map<string, RouteGuards> = new Map();

  // ✅ Cache des composants lazy chargés
  private componentCache: Map<string, any> = new Map();

  constructor() {
    this.currentPath = this.getHashPath();
    this.updateQueryParams();

    window.addEventListener("hashchange", () => {
      const newPath = this.getHashPath();
      this.handleHashChange(newPath);
    });
  }

  addRoute(
    path: string | RegExp,
    component: RouteComponent,
    guards?: RouteGuards,
  ) {
    this.routes.push({ path, component, guards });
  }

  registerRouteGuard(routeKey: string, guards: RouteGuards): () => void {
    this.dynamicGuards.set(routeKey, guards);
    return () => {
      this.dynamicGuards.delete(routeKey);
    };
  }

  private async handleHashChange(newPath: string) {
    if (this.isNavigating) return;

    this.updateQueryParams();

    const from: RouteInfo = {
      path: this.currentPath,
      params: this.currentParams,
      query: this.currentQuery,
    };

    const to: RouteInfo = {
      path: newPath,
      params: {},
      query: this.currentQuery,
    };

    // Guards dynamiques
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

    // Guards statiques
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
    const newMatch = await this.findRouteMatch(newPath);
    if (!newMatch) {
      this.currentPath = newPath;
      this.currentParams = {};
      this.currentRouteMatch = null;
      return;
    }

    to.params = newMatch.params;

    // beforeEnter
    if (newMatch.guards?.beforeEnter) {
      try {
        const canEnter = await newMatch.guards.beforeEnter(to, from);
        if (!canEnter) {
          console.log("[Router] Navigation annulée par beforeEnter");
          window.location.hash = from.path;
          return;
        }
      } catch (error) {
        console.error("[Router] Erreur dans beforeEnter:", error);
      }
    }

    this.currentPath = newPath;
    this.currentParams = newMatch.params;
    this.currentRouteMatch = newMatch;
  }

  async navigate(path: string, query?: QueryParams) {
    if (this.isNavigating) return;

    this.isNavigating = true;

    try {
      const from: RouteInfo = {
        path: this.currentPath,
        params: this.currentParams,
        query: this.currentQuery,
      };

      const tempMatch = await this.findRouteMatch(path);
      const to: RouteInfo = {
        path,
        params: tempMatch?.params || {},
        query: query || {},
      };

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

      if (tempMatch?.guards?.beforeEnter) {
        const canEnter = await tempMatch.guards.beforeEnter(to, from);
        if (!canEnter) {
          console.log("[Router] Navigation annulée par beforeEnter");
          return;
        }
      }

      const queryString = query
        ? "?" + new URLSearchParams(query).toString()
        : "";
      const fullHash =
        "#" + (path.startsWith("/") ? path : "/" + path) + queryString;

      window.location.hash = fullHash;
    } finally {
      this.isNavigating = false;
    }
  }

  /**
   * ✅ Trouver et charger le composant (avec lazy loading)
   */
  private async findRouteMatch(path: string): Promise<RouteMatch | null> {
    for (const route of this.routes) {
      const match = this.matchRoute(route.path, path);
      if (match) {
        // Résoudre le composant (lazy ou non)
        const component = await this.resolveComponent(
          route.path.toString(),
          route.component,
        );

        return {
          component,
          params: match.params,
          query: this.currentQuery,
          guards: route.guards,
        };
      }
    }
    return null;
  }

  /**
   * ✅ Résoudre un composant (charger si lazy, utiliser cache si déjà chargé)
   */
  private async resolveComponent(
    routePath: string,
    component: RouteComponent,
  ): Promise<any> {
    // Si c'est déjà un composant Svelte, le retourner directement
    if (typeof component !== "function" || component.length > 0) {
      return component;
    }

    // C'est une fonction d'import dynamique
    // Vérifier le cache d'abord
    if (this.componentCache.has(routePath)) {
      return this.componentCache.get(routePath);
    }

    // Charger le composant
    try {
      const module = await component();
      const loadedComponent = module.default;

      // Mettre en cache
      this.componentCache.set(routePath, loadedComponent);

      return loadedComponent;
    } catch (error) {
      console.error(
        `[Router] Erreur lors du chargement du composant pour ${routePath}:`,
        error,
      );
      throw error;
    }
  }

  async match(): Promise<RouteMatch | null> {
    const match = await this.findRouteMatch(this.currentPath);
    if (match) {
      this.currentParams = match.params;
      this.currentRouteMatch = match;
    }
    return match;
  }

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

  private getHashPath(): string {
    const hash = window.location.hash.slice(1);
    const path = hash.split("?")[0];
    return path || "/";
  }

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

  /**
   * ✅ Précharger un composant (optionnel, pour optimisation)
   */
  async preload(path: string): Promise<void> {
    const route = this.routes.find((r) => {
      if (typeof r.path === "string") {
        return r.path === path;
      }
      return false;
    });

    if (route) {
      await this.resolveComponent(route.path.toString(), route.component);
      console.log(`[Router] Composant préchargé: ${path}`);
    }
  }
}

export const router = new SimpleRouter();

export function navigate(path: string, query?: QueryParams) {
  router.navigate(path, query);
}

export function getParam(name: string): string | undefined {
  return router.params[name];
}

export function getQuery(name: string): string | undefined {
  return router.query[name];
}

/**
 * ✅ Helper pour précharger des routes
 */
export function preloadRoute(path: string) {
  return router.preload(path);
}

export type {
  RouteParams,
  QueryParams,
  RouteInfo,
  RouteGuards,
  RouteDefinition,
  RouteComponent,
  LazyComponent,
};
