import { MediaQuery } from 'svelte/reactivity';

class GlobalState {
  private isMobileQuery = new MediaQuery('max-width: 767px');
  
  get isMobile() {
    return this.isMobileQuery.current;
  }
  
  userName() {
    return localStorage.getItem("appwrite-user-name") || "";
  }
}

export const globalState = new GlobalState();
