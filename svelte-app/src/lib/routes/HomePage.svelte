<script lang="ts">
  import { navigate } from "../services/simple-router.svelte";
  import { globalState } from "../stores/GlobalState.svelte";
  import FeatureHero from "../components/ui/FeatureHero.svelte";
  import { ChefHat, ArrowRight } from "@lucide/svelte";
  import { eventsStore } from "../stores/EventsStore.svelte";
  import { toastService } from "../services/toast.service.svelte";
  import { fade, fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { cubicInOut } from "svelte/easing";

  // Ouvrir l'auth modal via GlobalState
  function openAuthModal() {
    globalState.authModal.isOpen = true;
  }

  export function fadeScale(
    node,
    { duration = 300, delay = 0, start = 0.8 } = {},
  ) {
    return {
      delay,
      duration,
      easing: cubicInOut,
      css: (t) => `
        opacity: ${t};
        transform: scale(${start + (1 - start) * t});
      `,
    };
  }

  async function handleDemoEvent() {
    try {
      const toastId = toastService.loading("Chargement de la démo...");

      // ✅ Lazy initialization du store pour le mode public
      if (!eventsStore.isInitialized) {
        await eventsStore.initializeForPublic();
      }

      // ✅ Récupérer le premier event démo
      const demoEvents = eventsStore.events.filter(
        (e) => (e.status as string) === "local",
      );

      if (demoEvents.length === 0) {
        toastService.update(toastId, {
          state: "error",
          message: "Aucun événement de démo disponible",
          autoCloseDelay: 3000,
        });
        return;
      }

      const demoEvent = demoEvents[0];

      toastService.dismiss(toastId);

      // ✅ Naviguer vers l'édition de l'event démo
      navigate(`/demo/event/${demoEvent.$id}`);
    } catch (error) {
      console.error("[HomePage] Erreur chargement démo:", error);
      toastService.error("Erreur lors du chargement de la démo");
    }
  }
</script>

<div class="bg-base-200 overflow-y-auto">
  <!-- SECTION 1: Hero - Path Hugo + Titre -->
  <section
    class="hero bg-base-200 flex min-h-[90vh] snap-start flex-col justify-center gap-20"
  >
    <div class="hero-content text-center">
      <div class="max-w-3xl">
        <div class="mb-4 flex justify-center" in:fade={{ duration: 800 }}>
          <!-- Logo ou path décoratif -->
          <img src="images/logo.svg" alt="Enka Cookbook" class="size-80" />
        </div>
        <h1
          class="cherry-bomb-one-regular text-7xl transition-all"
          in:fly={{ y: 30, duration: 600, delay: 100 }}
        >
          Enka Cookbook
        </h1>
        <p
          class="text-base-content/70 mt-6 text-xl"
          in:fly={{ y: 20, duration: 800, delay: 200 }}
        >
          Outils de planification pour les cantines autogérées
        </p>
      </div>
    </div>
    <div
      class="flex flex-wrap items-center justify-center gap-6"
      in:fadeScale={{ duration: 400, delay: 400, start: 0.9 }}
    >
      <!-- Bouton Voir les recettes avec compteur -->
      <button
        class="btn btn-primary btn-xl"
        onclick={() => navigate("/recipe")}
        in:fadeScale={{ duration: 400, delay: 450, start: 0.9 }}
      >
        <ChefHat size={24} />
        <span class="flex items-baseline gap-2"> Voir les recettes </span>
      </button>

      <!-- Bouton contextualisé selon l'état de connexion -->
      {#if globalState.isAuthenticated}
        <button
          class="btn btn-outline btn-xl"
          onclick={() => navigate("/dashboard")}
          in:fadeScale={{ duration: 400, delay: 500, start: 0.9 }}
        >
          <ArrowRight size={24} />
          Accéder au tableau de bord
        </button>
      {:else}
        <button class="btn btn-secondary btn-xl" onclick={openAuthModal}>
          Créer un compte pour commencer
          <ArrowRight size={24} />
        </button>
      {/if}

      <button
        class="btn btn-lg btn-primary"
        in:fadeScale={{ duration: 400, delay: 550, start: 0.8 }}
        onclick={handleDemoEvent}
      >
        Démo
      </button>
      <!-- Texte informatif pour les non-connectés -->
      {#if !globalState.isAuthenticated}
        <p class="text-base-content/60 text-center">
          Déjà membre ? Connectez-vous pour gérer vos cantines et équipes
        </p>
      {/if}
    </div>
  </section>

  <!-- SECTION 3: Feature Heroes - Stack vertical avec scroll-snap -->
  <div class="flex flex-col gap-4 pb-40">
    <!-- Groupe 2: Organisation -->
    <FeatureHero
      image="/images/home/edit_event.webp"
      title="Organisation"
      description="Élaborez des menus sur plusieurs jours et organisez-vous en équipes"
      buttonText="Voir la démo"
      buttonAction={handleDemoEvent}
      theme="secondary"
    ></FeatureHero>

    <FeatureHero
      image="/images/home/product.webp"
      title="Listes de courses"
      description="Générez automatiquement les listes de courses de vos menus"
      theme="secondary"
    >
      <ul>
        <li>Suivez l'avancement des achats</li>
        <li>Notez les dépenses</li>
        <li>Répartissez vous les courses</li>
      </ul>
    </FeatureHero>

    <FeatureHero
      image={["/images/home/matos.webp"]}
      title="Gérez le matos collectifs"
      description="Maintenez un inventaires, gérer les emprunts"
      theme="secondary"
    />

    <FeatureHero
      image="/images/home/recipe-print.webp"
      title="Imprimez facilement les recettes"
      description="L'impression des recettes est optimisé pour un rendu noir et blanc, sans l'interface web"
      theme="primary"
    />
  </div>
</div>

<style>
  .cherry-bomb-one-regular {
    font-family: "Cherry Bomb One", system-ui;
    font-weight: 400;
    font-style: normal;
  }
</style>
