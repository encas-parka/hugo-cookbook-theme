<script lang="ts">
  import {
    Calendar,
    Users,
    Trash2,
    Copy,
    PencilLine,
    Plus,
    Utensils,
    ChefHat,
    X,
  } from "@lucide/svelte";
  import type { Meal, MealRecipe } from "../types/appwrite.types";
  import type { RecipeData } from "../types/recipes.types";
  import RecipeSearchCard from "./RecipeSearchCard.svelte";
  import Fieldset from "./ui/Fieldset.svelte";
  import { recipesStore } from "../stores/RecipesStore.svelte";

  interface Props {
    meal: Meal;
    onDelete: () => void;
    onDuplicate: () => void;
    defaultGuests?: number;
  }

  let {
    meal = $bindable(),
    onDelete,
    onDuplicate,
    defaultGuests = 100,
  }: Props = $props();

  let mode = $state<"edit" | "preview">("edit");
  let isAddingRecipe = $state(false);

  // Initialisation des valeurs par défaut si vide
  if (!meal.guests) meal.guests = defaultGuests;
  if (!meal.recipes) meal.recipes = [];

  function handleAddRecipe(
    recipe: RecipeData,
    type: "entree" | "plat" | "dessert",
    plates: number,
  ) {
    const newRecipe: MealRecipe = {
      recipeUuid: recipe.uuid,
      scaleFactor: plates / recipe.plate,
    };

    meal.recipes = [...meal.recipes, newRecipe];
    isAddingRecipe = false;
  }

  function removeRecipe(index: number) {
    meal.recipes = meal.recipes.filter((_, i) => i !== index);
  }

  function getRecipeDetails(uuid: string) {
    return recipesStore.getRecipeByUuid(uuid);
  }
</script>

<div
  class="card bg-base-100 border-base-200 border shadow-sm transition-all hover:shadow-md"
>
  <div class="card-body p-4">
    <!-- Header avec Actions -->
    <div class="mb-2 flex items-start justify-between">
      <div class="flex items-center gap-2">
        <div class="badge badge-primary badge-outline font-bold">
          {meal.time ? meal.time.toUpperCase() : "REPAS"}
        </div>
        {#if mode === "preview"}
          <span class="font-medium">
            {meal.date || "Date non définie"}
          </span>
          <span class="text-base-content/60 flex items-center gap-1 text-sm">
            <Users class="h-3 w-3" />
            {meal.guests} pers.
          </span>
        {/if}
      </div>

      <div class="flex gap-1">
        {#if mode === "preview"}
          <button
            class="btn btn-ghost btn-xs"
            onclick={() => (mode = "edit")}
            title="Éditer"
          >
            <PencilLine class="h-3 w-3" />
          </button>
        {:else}
          <button
            class="btn btn-ghost btn-xs text-primary"
            onclick={() => (mode = "preview")}
            title="Aperçu"
          >
            Terminer
          </button>
        {/if}
        <button
          class="btn btn-ghost btn-xs"
          onclick={onDuplicate}
          title="Dupliquer"
        >
          <Copy class="h-3 w-3" />
        </button>
        <button
          class="btn btn-ghost btn-xs text-error"
          onclick={onDelete}
          title="Supprimer"
        >
          <Trash2 class="h-3 w-3" />
        </button>
      </div>
    </div>

    {#if mode === "edit"}
      <div class="mt-2 space-y-4">
        <!-- Configuration Repas -->
        <Fieldset legend="Configuration">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <!-- Date -->
            <label class="input input-bordered flex items-center gap-2">
              <Calendar class="h-4 w-4 opacity-50" />
              <input type="date" class="grow" bind:value={meal.date} />
            </label>

            <!-- Horaire -->
            <select
              class="select select-bordered w-full"
              bind:value={meal.time}
            >
              <option value="matin">Matin</option>
              <option value="midi">Midi</option>
              <option value="soir">Soir</option>
            </select>

            <!-- Invités -->
            <label class="input input-bordered flex items-center gap-2">
              <Users class="h-4 w-4 opacity-50" />
              <input
                type="number"
                class="grow"
                placeholder="Invités"
                bind:value={meal.guests}
              />
            </label>
          </div>
        </Fieldset>

        <!-- Liste des Recettes -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <h4 class="flex items-center gap-2 text-sm font-semibold">
              <Utensils class="h-4 w-4" />
              Recettes
            </h4>
            {#if !isAddingRecipe}
              <button
                class="btn btn-xs btn-outline btn-primary"
                onclick={() => (isAddingRecipe = true)}
              >
                <Plus class="mr-1 h-3 w-3" />
                Ajouter
              </button>
            {/if}
          </div>

          {#if meal.recipes.length === 0 && !isAddingRecipe}
            <div
              class="bg-base-200/50 rounded-box text-base-content/60 border-base-300 border border-dashed py-4 text-center text-sm"
            >
              Aucune recette ajoutée
            </div>
          {:else}
            <div class="space-y-2">
              {#each meal.recipes as recipe, i}
                {@const details = getRecipeDetails(recipe.recipeUuid)}
                <div
                  class="bg-base-200/50 group flex items-center justify-between rounded-lg p-2"
                >
                  <div class="flex items-center gap-3">
                    <div class="bg-base-100 rounded-md p-1.5">
                      <ChefHat class="text-primary h-4 w-4" />
                    </div>
                    <div>
                      <div class="text-sm font-medium">
                        {#await details}
                          Chargement...
                        {:then data}
                          {data?.title || "Recette inconnue"}
                        {:catch}
                          Erreur
                        {/await}
                      </div>
                      <div class="text-base-content/60 text-xs">
                        {Math.round(
                          (recipe.scaleFactor || 1) *
                            (details ? (details as any).plate : 1),
                        )} parts
                      </div>
                    </div>
                  </div>
                  <button
                    class="btn btn-ghost btn-xs text-error opacity-0 transition-opacity group-hover:opacity-100"
                    onclick={() => removeRecipe(i)}
                  >
                    <X class="h-3 w-3" />
                  </button>
                </div>
              {/each}

              <!-- Carte d'ajout de recette inline -->
              {#if isAddingRecipe}
                <RecipeSearchCard
                  onSelect={handleAddRecipe}
                  onCancel={() => (isAddingRecipe = false)}
                  defaultPlates={meal.guests}
                />
              {/if}
            </div>
          {/if}
        </div>
      </div>
    {:else}
      <!-- Mode Preview -->
      <div class="space-y-2">
        {#if meal.recipes.length > 0}
          <div class="flex flex-wrap gap-2">
            {#each meal.recipes as recipe}
              {@const details = getRecipeDetails(recipe.recipeUuid)}
              <div class="badge badge-ghost h-auto gap-2 py-1">
                {#await details}
                  <span>...</span>
                {:then data}
                  <span>{data?.title}</span>
                  <span class="badge badge-sm badge-outline">
                    {Math.round(
                      (recipe.scaleFactor || 1) * (data?.plate || 1),
                    )}p
                  </span>
                {/await}
              </div>
            {/each}
          </div>
        {:else}
          <p class="text-base-content/60 text-sm italic">Aucune recette</p>
        {/if}
      </div>
    {/if}
  </div>
</div>
