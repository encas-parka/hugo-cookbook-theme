import { MediaQuery } from "svelte/reactivity";
import { toastService } from "../services/toast.service.svelte";

class GlobalState {
  private isMobileQuery = new MediaQuery("max-width: 1024px");

  get isMobile() {
    return this.isMobileQuery.current;
  }

  get isDesktop() {
    return !this.isMobile;
  }

  userName() {
    return localStorage.getItem("appwrite-user-name") || "";
  }

  /** Accès aux toasts */
  get toasts() {
    return toastService.toasts;
  }

  /** Accès direct au service de toast */
  get toast() {
    return toastService;
  }
}

export const globalState = new GlobalState();
