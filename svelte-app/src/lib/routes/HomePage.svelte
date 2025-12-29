<script lang="ts">
  import { navigate } from "../services/simple-router.svelte";
  import { globalState } from "../stores/GlobalState.svelte";
  import { ChefHat, ArrowRight } from "@lucide/svelte";
</script>

<div class="hero bg-base-200 min-h-[calc(100vh-4rem)]">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Enka Cookbook</h1>
      <p class="py-6">
        Organisez vos événements culinaires, gérez vos équipes et planifiez vos
        repas collaborativement.
      </p>
      <div class="flex justify-center gap-4">
        <button class="btn btn-primary" onclick={() => navigate("/recipe")}>
          <ChefHat class="mr-2 h-5 w-5" />
          Voir les recettes
        </button>
        {#if globalState.isAuthenticated}
          <button
            class="btn btn-outline"
            onclick={() => navigate("/dashboard")}
          >
            Accéder au tableau de bord
            <ArrowRight class="ml-2 h-5 w-5" />
          </button>
        {:else}
          <!-- L'authentification se fait via le HeaderNav -->
          <p class="text-base-content/70 mt-4 text-sm">
            Connectez-vous pour gérer vos événements
          </p>
        {/if}
      </div>
    </div>
  </div>
</div>
