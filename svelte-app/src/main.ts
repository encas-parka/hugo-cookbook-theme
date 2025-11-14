import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

// Déterminer le target selon l'environnement
const targetElement = import.meta.env.DEV
  ? document.getElementById('app') // Développement local
  : document.getElementById('app_products') // Production HUGO

if (!targetElement) {
  throw new Error(`Élément target non trouvé: ${import.meta.env.DEV ? '#app' : '#app_products'}`)
}

const app = mount(App, {
  target: targetElement,
})

export default app
