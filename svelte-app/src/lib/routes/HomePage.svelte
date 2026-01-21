<script lang="ts">
  import { navigate } from "../services/simple-router.svelte";
  import { globalState } from "../stores/GlobalState.svelte";
  import FeatureCard from "../components/ui/FeatureCard.svelte";
  import { ChefHat, ArrowRight } from "@lucide/svelte";
  import { eventsStore } from "../stores/EventsStore.svelte";
  import { toastService } from "../services/toast.service.svelte";

  // Ouvrir l'auth modal via GlobalState
  function openAuthModal() {
    globalState.authModal.isOpen = true;
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

<div class="bg-base-200 min-h-screen">
  <!-- SECTION 1: Hero - Path Hugo + Titre -->
  <section class="hero bg-base-200 min-h-[50vh]">
    <div class="hero-content text-center">
      <div class="max-w-3xl">
        <div class="mb-4 flex justify-center">
          <!-- Logo ou path décoratif -->
          <img src="images/logo.svg" alt="Enka Cookbook" class="size-80" />
        </div>
        <h1 class="cherry-bomb-one-regular text-7xl">Enka Cookbook</h1>
        <p class="text-base-content/70 mt-6 text-xl">
          Outils de planification pour les cantines autogérées
        </p>
      </div>
    </div>
  </section>

  <!-- SECTION 3: CTA Buttons -->
  <section class="bg-base-200 mt-15 mb-5">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center justify-center gap-6">
        <!-- Bouton Voir les recettes avec compteur -->
        <button
          class="btn btn-primary btn-xl"
          onclick={() => navigate("/recipe")}
        >
          <ChefHat size={24} />
          <span class="flex items-baseline gap-2"> Voir les recettes </span>
        </button>

        <!-- Bouton contextualisé selon l'état de connexion -->
        {#if globalState.isAuthenticated}
          <button
            class="btn btn-outline btn-xl"
            onclick={() => navigate("/dashboard")}
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

        <!-- Texte informatif pour les non-connectés -->
        {#if !globalState.isAuthenticated}
          <p class="text-base-content/60 text-center">
            Déjà membre ? Connectez-vous pour gérer vos cantines et équipes
          </p>
        {/if}
      </div>
    </div>
  </section>

  <button class="btn btn-lg btn-primary" onclick={handleDemoEvent}>
    Démo
  </button>

  <!-- SECTION 2: Feature Cards -->
  <section class="bg-base-200 py-16">
    <div class="container mx-auto px-4">
      <div class="grid gap-8">
        <!-- Recettes cards -->
        <div class="grid gap-6 md:grid-cols-3">
          <FeatureCard
            images={["/images/plat.webp", "/images/salade.webp"]}
            title="Partagez vos recettes"
            description="Découvrez et partagez des recettes avec la communauté"
            buttonText="Explorer"
            buttonAction={() => navigate("/recipe")}
            theme="primary"
          />
          <FeatureCard
            images={[
              "/images/home/recipe-print.webp",
              "/images/home/recipe.webp",
            ]}
            title="Imprimez vos recettes"
            description="Générez des fiches recettes propres et professionnelles"
            buttonText="Imprimer"
            theme="primary"
          />
        </div>

        <!-- Cantines autogérées cards -->
        <div class="grid gap-6 md:grid-cols-3">
          <FeatureCard
            images={["/images/doc/explorer.png"]}
            title="Organisation"
            description="Élaborez des menus sur plusieurs jours et organisez-vous en équipes"
            buttonText="Organiser"
            buttonAction={() =>
              globalState.isAuthenticated
                ? navigate("/dashboard")
                : openAuthModal()}
            theme="secondary"
          />
          <FeatureCard
            images={["/images/home/product.webp"]}
            title="Listes de courses"
            description="Générez automatiquement les listes de courses pour vos menus"
            buttonText="Générer"
            buttonAction={() =>
              globalState.isAuthenticated
                ? navigate("/dashboard")
                : openAuthModal()}
            theme="secondary"
          />
          <FeatureCard
            images={["/images/friture.webp"]}
            title="Gestion complète"
            description="Gérez vos stocks, matériel et répartissez les tâches"
            buttonText="Gérer"
            buttonAction={() =>
              globalState.isAuthenticated
                ? navigate("/dashboard")
                : openAuthModal()}
            theme="secondary"
          />
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .cherry-bomb-one-regular {
    font-family: "Cherry Bomb One", system-ui;
    font-weight: 400;
    font-style: normal;
  }
</style>
