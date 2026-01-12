<script lang="ts">
  import { navigate } from "../services/simple-router.svelte";
  import { globalState } from "../stores/GlobalState.svelte";
  import { recipesStore } from "../stores/RecipesStore.svelte";
  import {
    ChefHat,
    ArrowRight,
    BookOpen,
    Users,
    ShoppingCart,
    Package,
    Sparkles,
  } from "@lucide/svelte";

  // Ouvrir l'auth modal du HeaderNav
  function openAuthModal() {
    const event = new CustomEvent("open-auth-modal");
    window.dispatchEvent(event);
  }
</script>

<div class="bg-base-200 min-h-screen">
  <!-- SECTION 1: Hero - Path Hugo + Titre -->
  <section class="hero bg-base-200 min-h-[50vh]">
    <div class="hero-content text-center">
      <div class="max-w-3xl">
        <div class="mb-4 flex justify-center">
          <!-- Logo ou path décoratif -->
          <img src="/data/logo.svg" alt="Enka Cookbook" class="" />
        </div>
        <h1 class="text-6xl font-black tracking-tight">Enka Cookbook</h1>
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

  <!-- SECTION 2: Les 2 Cards -->
  <section class="bg-base-200 py-16">
    <div class="container mx-auto px-4">
      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Card 1: Recettes (1/3) -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="card-title text-primary mb-4 justify-center">
              <BookOpen size={32} />
              <h2 class="text-2xl">Recettes</h2>
            </div>
            <ul class="text-base-content/80 space-y-3">
              <li class="flex items-start gap-2">
                <Sparkles size={16} class="text-primary mt-1 flex-shrink-0" />
                <span>Partagez vos recettes et découvrez celles des autres</span
                >
              </li>
              <li class="flex items-start gap-2">
                <Sparkles size={16} class="text-primary mt-1 flex-shrink-0" />
                <span
                  >Dupliquez et adaptez facilement les recettes existantes</span
                >
              </li>
              <li class="flex items-start gap-2">
                <Sparkles size={16} class="text-primary mt-1 flex-shrink-0" />
                <span
                  >Ajustement automatique des quantités selon le nombre de
                  couverts</span
                >
              </li>
              <li class="flex items-start gap-2">
                <Sparkles size={16} class="text-primary mt-1 flex-shrink-0" />
                <span>Imprimez vos recettes proprement</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Card 2: Cantine (2/3) -->
        <div class="card bg-base-100 shadow-xl lg:col-span-2">
          <div class="card-body">
            <div class="card-title text-secondary mb-4 justify-center">
              <Users size={32} />
              <h2 class="text-2xl">Cantines autogérées</h2>
            </div>
            <div class="grid gap-6 md:grid-cols-2">
              <div>
                <h3 class="text-base-content mb-3 font-semibold">
                  <ShoppingCart
                    size={20}
                    class="text-secondary mr-2 inline-block"
                  />Organisation
                </h3>
                <ul class="text-base-content/80 space-y-2">
                  <li>• Élaborez des menus, sur plusieurs jours si besoin</li>
                  <li>• Organisez-vous en équipes</li>
                  <li>• Générez automatiquement les listes de courses</li>
                  <li>• Etablissez et répartissez-vous les tâches</li>
                </ul>
              </div>
              <div>
                <h3 class="text-base-content mb-3 font-semibold">
                  <Package
                    size={20}
                    class="text-secondary mr-2 inline-block"
                  />Gestion
                </h3>
                <ul class="text-base-content/80 space-y-2">
                  <li>• Imprimez les recettes et affiches des menus</li>
                  <li>• Gérez vos stocks et votre matériel</li>
                  <li>• Découvrez des cantines autogérées près de chez vous</li>
                  <li>• Rejoignez des équipes existantes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
