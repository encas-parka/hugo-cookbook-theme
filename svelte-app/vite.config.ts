import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  // IMPORTANT : basePath pour les assets
  // En production : '/' car baseof.html charge déjà /dist/assets/index.js
  // Les imports relatifs fonctionneront depuis ce point d'entrée
  base: "/",

  plugins: [
    tailwindcss(),
    svelte(),
    visualizer({
      open: true,
      gzipSize: true,
      filename: "./dist/stats.html",
    }),
  ],
  build: {
    // Cible le dossier static/dist de votre thème Hugo
    outDir: "../static/dist",
    emptyOutDir: true, // Vide le dossier à chaque build (utile pour le dev)

    // Optimisations importantes
    minify: "esbuild",
    // Important pour le code splitting
    target: "es2020",

    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",

        manualChunks(id) {
          // Éditeur (TipTap + markdown) - seulement quand utilisé

          // Icons Lucide (gros morceau)
          if (id.includes("@lucide/svelte")) {
            return "icons";
          }

          // Appwrite SDK
          if (id.includes("appwrite")) {
            return "appwrite";
          }
        },
      },
    },
  },

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
      "/icons": {
        target: "http://localhost:1313",
        changeOrigin: true,
        configure: (proxy, _options) => {
          proxy.on("error", (_err, _req, _res) => {
            console.log("[Vite Proxy] Hugo server not available for /icons/");
          });
        },
      },
      "/images": {
        target: "http://localhost:1313",
        changeOrigin: true,
        configure: (proxy, _options) => {
          proxy.on("error", (_err, _req, _res) => {
            console.log("[Vite Proxy] Hugo server not available for /images/");
          });
        },
      },
    },
  },
});
