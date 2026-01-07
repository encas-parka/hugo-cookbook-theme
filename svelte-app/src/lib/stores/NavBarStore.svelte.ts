import type { Snippet } from "svelte";

export interface NavBarConfig {
  title?: string;
  backAction?: () => void;
  actions?: Snippet;
  eventId?: string;
  activeTab?: number;
  isLockedByOthers?: boolean;
  lockedByUserName?: string;
  hasUnsavedChanges?: boolean;
  materielContext?: "materiel" | "loans" | null;
  teamId?: string;
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

  get materielContext() {
    return this.#config.materielContext || null;
  }

  get teamId() {
    return this.#config.teamId;
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
