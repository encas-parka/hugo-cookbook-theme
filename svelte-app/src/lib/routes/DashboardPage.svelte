<script lang="ts">
  import {
    Plus,
    Calendar,
    BookOpen,
    Settings,
    LoaderCircle,
    Sparkles,
    Users,
    Clock,
    ChefHat,
    ArrowRight,
  } from "@lucide/svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import { teamsStore } from "$lib/stores/TeamsStore.svelte";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { navigate } from "$lib/services/simple-router.svelte";

  import TeamSummaryCard from "$lib/components/dashboard/TeamSummaryCard.svelte";
  import CurrentEventsCard from "$lib/components/dashboard/CurrentEventsCard.svelte";
  import LatestRecipesCard from "$lib/components/dashboard/LatestRecipesCard.svelte";

  // Données fictives pour les recettes (en attendant la vraie logique)
  // Correspond aux types Recettes dans appwrite.d.ts
  const mockRecipes = [
    {
      $id: "recipe_1",
      title: "Tarte aux pommes",
      plate: 8,
      ingredients: JSON.stringify([
        [
          "ing_pomme",
          "6",
          "unités",
          "1200",
          "g",
          "Pommes fermes",
          [],
          "fruits",
        ],
        [
          "ing_farine",
          "300",
          "g",
          "300",
          "g",
          "Farine T55",
          ["gluten"],
          "base",
        ],
        [
          "ing_beurre",
          "150",
          "g",
          "150",
          "g",
          "Beurre doux",
          ["lactose"],
          "base",
        ],
        ["ing_sucre", "100", "g", "100", "g", "Sucre en poudre", [], "base"],
        ["ing_oeufs", "2", "unités", "2", "unités", "Oeufs", [], "base"],
      ]),
      preparation:
        "Préparer la pâte brisée. Peler et couper les pommes. Disposer les pommes sur la pâte. Saupoudrer de sucre et cuire à 180°C pendant 45 minutes.",
      draft: false,
      typeR: "dessert" as const,
      categories: ["dessert", "fruits", "traditionnel"],
      regime: ["vegetarien"],
      isPublished: true,
      publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // Il y a 1 jour
      createdBy: globalState.userId || "user_1",
      teams: [],
      contributors: [globalState.userId || "user_1"],
      $createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
      $updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    },
    {
      $id: "recipe_2",
      title: "Quiche Lorraine",
      plate: 6,
      ingredients: JSON.stringify([
        [
          "ing_farine",
          "250",
          "g",
          "250",
          "g",
          "Farine T55",
          ["gluten"],
          "base",
        ],
        [
          "ing_beurre",
          "100",
          "g",
          "100",
          "g",
          "Beurre doux",
          ["lactose"],
          "base",
        ],
        ["ing_oeufs", "3", "unités", "3", "unités", "Oeufs", [], "base"],
        [
          "ing_creme",
          "200",
          "ml",
          "200",
          "ml",
          "Crème fraîche",
          ["lactose"],
          "base",
        ],
        ["ing_lardons", "150", "g", "150", "g", "Lardons fumés", [], "viande"],
        [
          "ing_fromage",
          "100",
          "g",
          "100",
          "g",
          "Gruyère râpé",
          ["lactose"],
          "base",
        ],
      ]),
      preparation:
        "Préparer la pâte brisée. Faire revenir les lardons. Battre les oeufs avec la crème. Disposer les lardons dans le fond de tarte, verser l'appareil à quiche et saupoudrer de fromage. Cuire à 180°C pendant 35 minutes.",
      draft: false,
      typeR: "plat" as const,
      categories: ["plat", "salé", "traditionnel"],
      regime: [],
      isPublished: true,
      publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), // Il y a 3 jours
      createdBy: globalState.userId || "user_1",
      teams: [],
      contributors: [globalState.userId || "user_1"],
      $createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
      $updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    },
    {
      $id: "recipe_3",
      title: "Poulet basquaise",
      plate: 4,
      ingredients: JSON.stringify([
        ["ing_poulet", "800", "g", "800", "g", "Poulet découpé", [], "viande"],
        [
          "ing_poivron",
          "2",
          "unités",
          "400",
          "g",
          "Poivrons rouges",
          [],
          "legumes",
        ],
        ["ing_oignon", "2", "unités", "200", "g", "Oignons", [], "legumes"],
        ["ing_ail", "3", "gousses", "3", "gousses", "Ail", [], "legumes"],
        ["ing_coucours", "400", "g", "400", "g", "Courgettes", [], "legumes"],
        [
          "ing_piment",
          "1",
          "unité",
          "1",
          "unité",
          "Piment d'Espelette",
          [],
          "epices",
        ],
        ["ing_vin", "150", "ml", "150", "ml", "Vin blanc sec", [], "base"],
        [
          "ing_bouillon",
          "250",
          "ml",
          "250",
          "ml",
          "Bouillon de poulet",
          [],
          "base",
        ],
      ]),
      preparation:
        "Faire dorer les morceaux de poulet. Faire revenir les oignons et l'ail. Ajouter les poivrons et courgettes coupés en dés. Déglacer avec le vin blanc, ajouter le bouillon et le piment. Couvrir et laisser mijoter 45 minutes à feu doux.",
      draft: false,
      typeR: "plat" as const,
      categories: ["plat", "viande", "basque"],
      regime: [],
      isPublished: true,
      publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // Il y a 1 semaine
      createdBy: globalState.userId || "user_1",
      teams: [],
      contributors: [globalState.userId || "user_1"],
      $createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
      $updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
    },
  ];

  const now = new Date();

  // Traitement des événements - utiliser les derived properties du store
  const currentEvents = $derived(eventsStore.currentEvents);
  const upcomingEvents = $derived(eventsStore.upcomingEvents);
  const pastEventsCount = $derived(eventsStore.pastEventsCount);

  // Invitations fictives (en attendant la vraie logique)
  const mockInvitations = [
    {
      $id: "inv1",
      teamName: "Équipe Famille",
      invitedBy: "Marie",
      status: "pending" as const,
    },
    {
      $id: "inv2",
      teamName: "Amis Foodies",
      invitedBy: "Thomas",
      status: "pending" as const,
    },
  ];

  // Fonctions de navigation
  function onCreateEvent() {
    navigate("/eventEdit");
  }

  function onCreateRecipe() {
    // TODO: Implémenter la navigation vers la création de recette
    console.log("Navigate to create recipe");
  }
</script>

<div class="bg-base-200/30 min-h-screen">
  <!-- Header principal -->
  <div
    class="bg-base-100 border-base-200 bg-opacity-90 sticky top-0 z-10 border-b backdrop-blur-sm"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div>
          <h1
            class="text-base-content flex items-center gap-2 text-2xl font-bold"
          >
            <Sparkles class="text-primary h-6 w-6" />
            Tableau de Bord
          </h1>
          <p class="text-base-content/60 text-sm">
            Bienvenue {globalState.user?.name || ""} ! Voici un aperçu de votre activité.
          </p>
        </div>

        <!-- Actions rapides -->
        <div class="flex gap-2">
          <button class="btn btn-primary" onclick={onCreateEvent}>
            <Calendar class="h-4 w-4" />
            Nouvel Événement
          </button>
          <button class="btn btn-secondary" onclick={onCreateRecipe}>
            <BookOpen class="h-4 w-4" />
            Créer une Recette
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Contenu principal -->
  <div class="mx-auto max-w-7xl px-4 py-8">
    {#if !globalState.isAuthenticated}
      <!-- État non connecté -->
      <div
        class="bg-base-100 border-base-200 rounded-xl border p-8 text-center shadow-sm"
      >
        <Settings class="mx-auto mb-4 h-16 w-16 opacity-20" />
        <h2 class="mb-2 text-xl font-semibold">
          Connectez-vous pour accéder à votre tableau de bord
        </h2>
        <p class="text-base-content/60 mb-6">
          Connectez-vous pour voir vos équipes, événements et recettes.
        </p>
        <button
          class="btn btn-primary"
          onclick={() => {
            // TODO: Ouvrir le modal d'authentification
            console.log("Open auth modal");
          }}
        >
          Se connecter
        </button>
      </div>
    {:else if eventsStore.loading && teamsStore.loading}
      <!-- État de chargement -->
      <div class="flex items-center justify-center py-20">
        <div class="text-center">
          <LoaderCircle
            class="text-primary mx-auto mb-4 h-12 w-12 animate-spin"
          />
          <p class="text-base-content/60">
            Chargement de votre tableau de bord...
          </p>
        </div>
      </div>
    {:else if eventsStore.error || teamsStore.error}
      <!-- État d'erreur -->
      <div class="alert alert-error shadow-lg">
        <span
          >{eventsStore.error ||
            teamsStore.error ||
            "Une erreur est survenue"}</span
        >
      </div>
    {:else}
      <!-- Tableau de bord -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <!-- Colonne principale (2/3) -->
        <div class="space-y-6 lg:col-span-2">
          <!-- Événements -->
          <CurrentEventsCard
            {currentEvents}
            {upcomingEvents}
            {pastEventsCount}
            loading={eventsStore.loading}
          />

          <!-- Dernières recettes -->
          <LatestRecipesCard recipes={mockRecipes} loading={false} />
        </div>

        <!-- Colonne latérale (1/3) -->
        <div class="space-y-6">
          <!-- Résumé des équipes -->
          <TeamSummaryCard
            teams={teamsStore.teams}
            invitations={mockInvitations}
            loading={teamsStore.loading}
          />
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  /* Styles spécifiques au dashboard si nécessaire */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
