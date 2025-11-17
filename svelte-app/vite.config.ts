import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), svelte()],
  build: {
      // Cible le dossier static/dist de votre thème Hugo
      outDir: '../static/dist',
      emptyOutDir: true, // Vide le dossier à chaque build (utile pour le dev)
      // Pour des noms de fichiers propres
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]'
        }
      }
    },

    // Important pour que les imports fonctionnent correctement
    resolve: {
       alias: {
         '@': path.resolve(__dirname, './src'),
         '$lib': path.resolve(__dirname, './src/lib')
       }
     },

    // --- Configuration du serveur de développement ---
    server: {
      // Très important : pour éviter une boucle infinie
      // Vite ne doit pas "watch" les fichiers qu'il écrit lui-même.
      // // En vrai c'est bon, c'est dans le parent ..?
      // watch: {
      //   ignored: ['**/static/dist/**']
      // }
    }
})
