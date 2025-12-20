import type { Snippet } from "svelte";

export interface BreadcrumbItem {
  label: string;
  path?: string;
  action?: () => void;
}

export interface NavBarConfig {
  breadcrumbs?: BreadcrumbItem[];
  title?: string;
  backAction?: () => void;
  actions?: Snippet;
}

class NavBarStore {
  #config = $state<NavBarConfig>({
    breadcrumbs: [],
    title: "",
  });

  get breadcrumbs() {
    return this.#config.breadcrumbs || [];
  }

  get title() {
    // Si on a des breadcrumbs, on peut retourner le dernier label comme titre de secours
    if (this.#config.breadcrumbs && this.#config.breadcrumbs.length > 0) {
      return this.#config.breadcrumbs[this.#config.breadcrumbs.length - 1].label;
    }
    return this.#config.title || "ENKA Cookbook";
  }

  get backAction() {
    return this.#config.backAction;
  }

  get actions() {
    return this.#config.actions;
  }

  setConfig(config: NavBarConfig) {
    this.#config = {
      ...config,
    };
  }

  reset() {
    this.#config = {
      breadcrumbs: [],
      title: "",
    };
  }
}

export const navBarStore = new NavBarStore();
