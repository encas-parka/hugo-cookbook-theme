<script lang="ts">
  import RecipeIngredientsEditor from "$lib/components/recipeEdit/RecipeIngredientsEditor.svelte";
  import { Utensils, FileText, Clock, Lightbulb } from "@lucide/svelte";

  interface Props {
    recipe: any;
    validationErrors: any;
    canEdit: boolean;
  }

  let { recipe, validationErrors, canEdit }: Props = $props();
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
  <!-- Ingrédients -->
  <div
    class="card bg-base-100 shadow-xl {validationErrors.ingredients
      ? 'ring-error ring-2'
      : ''}"
  >
    <div class="card-body">
      <h2 class="card-title mb-4">
        <Utensils class="h-5 w-4" />
        Ingrédients
      </h2>
      <!-- Éditeur d'ingrédients -->
      <RecipeIngredientsEditor
        bind:ingredients={recipe.ingredients}
        disabled={!canEdit}
      />
      {#if validationErrors.ingredients && recipe.ingredients.length === 0}
        <div class="alert alert-error mt-4">
          <span class="text-sm">{validationErrors.ingredients}</span>
        </div>
      {/if}
    </div>
  </div>

  <!-- Préparation -->
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title mb-4">
        <FileText class="h-5 w-4" />
        Préparation
      </h2>

      <fieldset class="fieldset">
        <legend class="fieldset-legend">Instructions de préparation</legend>
        <label
          class="textarea h-64 w-full {validationErrors.preparation
            ? 'textarea-error'
            : ''}"
        >
          <textarea
            id="recipe-preparation"
            bind:value={recipe.preparation}
            placeholder="Décrivez les étapes de préparation..."
            disabled={!canEdit}
            maxlength="15000"
            class="h-full w-full resize-none bg-transparent outline-none {validationErrors.preparation
              ? 'textarea-error'
              : ''}"
            aria-describedby="preparation-help"
            aria-required="true"
          ></textarea>
        </label>
        {#if validationErrors.preparation}
          <div class="fieldset-label">
            <span class="fieldset-label-text-alt text-error"
              >{validationErrors.preparation}</span
            >
          </div>
        {/if}
        <div class="fieldset-label justify-end">
          <span
            class="fieldset-label-text-alt {recipe.preparation.length > 15000
              ? 'text-error'
              : 'opacity-70'}"
          >
            {recipe.preparation.length} / 15 000
          </span>
        </div>
      </fieldset>

      <fieldset class="fieldset mt-4">
        <legend class="fieldset-legend">
          <Clock class="inline h-4 w-4" />
          Préparation 24h à l'avance (optionnel)
        </legend>
        <label
          class="textarea h-fit w-full {validationErrors.preparation24h
            ? 'textarea-error'
            : ''}"
        >
          <textarea
            id="recipe-preparation24h"
            bind:value={recipe.preparation24h}
            placeholder="Étapes à réaliser la veille..."
            disabled={!canEdit}
            maxlength="15000"
            class="h-full w-full resize-none bg-transparent outline-none"
          ></textarea>
        </label>
        <div class="fieldset-label flex justify-between">
          {#if validationErrors.preparation24h}
            <span class="fieldset-label-text-alt text-error"
              >{validationErrors.preparation24h}</span
            >
          {:else}
            <span></span>
          {/if}
          <span
            class="fieldset-label-text-alt {(recipe.preparation24h?.length ||
              0) > 15000
              ? 'text-error'
              : 'opacity-70'}"
          >
            {recipe.preparation24h?.length || 0} / 15 000
          </span>
        </div>
      </fieldset>

      <div class="divider"></div>

      <!-- Management des Astuces -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="flex items-center gap-2 font-semibold">
            <Lightbulb class="text-warning h-4 w-4" />
            Astuces et conseils
          </h3>
          <button
            type="button"
            onclick={() => {
              recipe.astuces = [...recipe.astuces, { astuce: "" }];
            }}
            disabled={!canEdit}
            class="btn btn-outline btn-primary btn-xs"
          >
            + Ajouter une astuce
          </button>
        </div>

        {#if recipe.astuces.length === 0}
          <p class="py-2 text-sm italic opacity-50">Aucune astuce ajoutée</p>
        {:else}
          <div class="space-y-3">
            {#each recipe.astuces as astuceObj, i (i)}
              <div class="flex flex-col gap-1">
                <div class="flex items-start gap-2">
                  <div class="flex-1">
                    <textarea
                      bind:value={astuceObj.astuce}
                      placeholder="Ex: Ajouter un filet d'huile d'olive au moment de servir"
                      disabled={!canEdit}
                      class="textarea textarea-bordered h-20 w-full text-sm {validationErrors
                        .astuces?.[i]
                        ? 'textarea-error'
                        : ''}"
                      maxlength="250"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    onclick={() => {
                      recipe.astuces = recipe.astuces.filter(
                        (_, idx) => idx !== i,
                      );
                    }}
                    disabled={!canEdit}
                    class="btn btn-ghost btn-circle btn-sm text-error"
                    title="Supprimer l'astuce"
                  >
                    ×
                  </button>
                </div>
                <div class="flex justify-between px-1">
                  {#if validationErrors.astuces?.[i]}
                    <span class="text-error text-xs"
                      >{validationErrors.astuces[i]}</span
                    >
                  {:else}
                    <span></span>
                  {/if}
                  <span
                    class="text-xs {astuceObj.astuce.length > 250
                      ? 'text-error font-bold'
                      : 'opacity-50'}"
                  >
                    {astuceObj.astuce.length} / 250
                  </span>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
