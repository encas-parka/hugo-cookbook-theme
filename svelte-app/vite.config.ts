import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), svelte()],
  build: {
    // Cible le dossier static/dist de votre thème Hugo
    outDir: "../static/dist",
    emptyOutDir: true, // Vide le dossier à chaque build (utile pour le dev)
    // Pour des noms de fichiers propres
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },

  // Important pour que les imports fonctionnent correctement
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      $lib: path.resolve(__dirname, "./src/lib"),
    },
  },

  // --- Configuration du serveur de développement ---
  server: {
    // Proxy pour accéder aux données Hugo en mode dev
    proxy: {
      // Rediriger /recettes/ vers le serveur Hugo
      "/recettes": {
        target: "http://localhost:1313", // Serveur Hugo par défaut
        changeOrigin: true,
        configure: (proxy, _options) => {
          proxy.on("error", (_err, _req, _res) => {
            console.log(
              "[Vite Proxy] Hugo server not available for /recettes/",
            );
          });
        },
      },
      // Rediriger /api/ vers le serveur Hugo (pour data.json)
      "/api": {
        target: "http://localhost:1313",
        changeOrigin: true,
        configure: (proxy, _options) => {
          proxy.on("error", (_err, _req, _res) => {
            console.log("[Vite Proxy] Hugo server not available for /api/");
          });
        },
      },
      // Rediriger /data/ vers le dossier static/data de Hugo
      "/data": {
        target: "http://localhost:1313",
        changeOrigin: true,
        configure: (proxy, _options) => {
          proxy.on("error", (_err, _req, _res) => {
            console.log("[Vite Proxy] Hugo server not available for /data/");
          });
        },
      },
    },
    // Très important : pour éviter une boucle infinie
    // Vite ne doit pas "watch" les fichiers qu'il écrit lui-même.
    // // En vrai c'est bon, c'est dans le parent ..?
    // watch: {
    //   ignored: ['**/static/dist/**']
    // }
  },
});
