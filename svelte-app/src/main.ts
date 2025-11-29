import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

// Déterminer le conteneur de montage selon le mode
// - Mode header-only (pages Hugo) : monte dans #svelte-header
// - Mode dashboard (/dashboard) : monte dans #app (dev) ou #app_products (prod)
let targetElement: HTMLElement | null = null;

if (import.meta.env.DEV) {
  // Développement : toujours monter dans #app
  targetElement = document.getElementById('app');
} else {
  // Production : déterminer selon la page
  const isDashboardPage = window.location.pathname.startsWith('/dashboard');
  
  if (isDashboardPage) {
    // Page dashboard : monter dans #app_products (conteneur Hugo pour le dashboard)
    targetElement = document.getElementById('app_products') || document.getElementById('app');
  } else {
    // Page Hugo normale : monter dans #svelte-header
    targetElement = document.getElementById('svelte-header');
  }
}

if (!targetElement) {
  console.error('[Svelte] Aucun conteneur de montage trouvé');
  throw new Error(`Élément target non trouvé`);
}

console.log(`[Svelte] Montage dans: #${targetElement.id}`);

const app = mount(App, {
  target: targetElement,
})

export default app
