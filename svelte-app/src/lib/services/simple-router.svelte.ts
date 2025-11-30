/**
 * Router Simple pour Svelte 5 (Mode Hash)
 * 
 * Fonctionnalités :
 * - Navigation via Hash (#)
 * - Paramètres d'URL multiples
 * - Query strings
 * - Support du bouton retour
 * - Protection d'authentification
 */

type RouteParams = Record<string, string>;
type QueryParams = Record<string, string>;

interface RouteMatch {
  component: any;
  params: RouteParams;
  query: QueryParams;
}

interface RouteDefinition {
  path: string | RegExp;
  component: any;
  guard?: () => boolean | Promise<boolean>;
}

class SimpleRouter {
  private routes: RouteDefinition[] = [];
  private currentPath = $state('');
  private currentParams = $state<RouteParams>({});
  private currentQuery = $state<QueryParams>({});

  constructor() {
    // Initialiser le path depuis le hash
    this.currentPath = this.getHashPath();
    this.updateQueryParams();

    // Écouter les changements de hash
    window.addEventListener('hashchange', () => {
      this.currentPath = this.getHashPath();
      this.updateQueryParams();
    });
  }

  /**
   * Définir les routes
   */
  addRoute(path: string | RegExp, component: any, guard?: () => boolean | Promise<boolean>) {
    this.routes.push({ path, component, guard });
  }

  /**
   * Naviguer vers un path
   */
  navigate(path: string, query?: QueryParams) {
    // Construire le hash : #/path?query
    const queryString = query ? '?' + new URLSearchParams(query).toString() : '';
    const fullHash = '#' + (path.startsWith('/') ? path : '/' + path) + queryString;
    
    window.location.hash = fullHash;
    // La mise à jour de l'état se fera via l'événement hashchange
  }

  /**
   * Obtenir le composant actuel et ses paramètres
   */
  async match(): Promise<RouteMatch | null> {
    for (const route of this.routes) {
      const match = this.matchRoute(route.path, this.currentPath);
      
      if (match) {
        // Vérifier le guard si présent
        if (route.guard) {
          const allowed = await route.guard();
          if (!allowed) {
            return null;
          }
        }

        this.currentParams = match.params;
        
        return {
          component: route.component,
          params: match.params,
          query: this.currentQuery
        };
      }
    }
    
    return null;
  }

  /**
   * Matcher un path contre une définition de route
   */
  private matchRoute(routePath: string | RegExp, currentPath: string): { params: RouteParams } | null {
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
      return '([^/]+)';
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
    const path = hash.split('?')[0]; // Enlever la query string
    return path || '/'; // Par défaut /
  }

  /**
   * Mettre à jour les query params depuis le hash
   */
  private updateQueryParams() {
    const hash = window.location.hash.slice(1);
    const queryPart = hash.split('?')[1];
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
