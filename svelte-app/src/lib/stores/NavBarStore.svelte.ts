import type { Snippet } from "svelte";

export interface BreadcrumbItem {
  label: string;
  path?: string;
  action?: () => void;
  active?: boolean;
}

export interface NavBarConfig {
  title?: string;
  backAction?: () => void;
  actions?: Snippet;
  tabs?: BreadcrumbItem[];
  eventId?: string;
  activeTab?: number;
  isLockedByOthers?: boolean;
  lockedByUserName?: string;
  hasUnsavedChanges?: boolean;
}

class NavBarStore {
  #config = $state<NavBarConfig>({
    title: "",
  });

  get title() {
    return this.#config.title || "ENKA Cookbook";
  }

  get backAction() {
    return this.#config.backAction;
  }

  get actions() {
    return this.#config.actions;
  }

  get tabs() {
    return this.#config.tabs || [];
  }

  get eventId() {
    return this.#config.eventId;
  }

  get activeTab() {
    return this.#config.activeTab || 0;
  }

  get isLockedByOthers() {
    return this.#config.isLockedByOthers || false;
  }

  get lockedByUserName() {
    return this.#config.lockedByUserName || "";
  }

  get hasUnsavedChanges() {
    return this.#config.hasUnsavedChanges || false;
  }

  setConfig(config: NavBarConfig) {
    this.#config = {
      ...config,
    };
  }

  reset() {
    this.#config = {
      title: "",
    };
  }
}

export const navBarStore = new NavBarStore();
