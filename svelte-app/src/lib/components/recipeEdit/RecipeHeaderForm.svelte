<script lang="ts">
  import { RecettesTypeR } from "$lib/types/recipes.types";
  import MultiSelect from "$lib/components/ui/MultiSelect.svelte";
  import {
    BookOpen,
    Utensils,
    FileText,
    ChefHat,
    Thermometer,
    Flame,
    MapPin,
  } from "@lucide/svelte";

  interface Props {
    recipe: any;
    recipeInfo: any;
    validationErrors: any;
    canEdit: boolean;
  }

  let { recipe, recipeInfo, validationErrors, canEdit }: Props = $props();
</script>

<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title mb-4">
      <BookOpen class="h-5 w-5" />
      Informations générales
    </h2>

    <div class="flex flex-col gap-6">
      <!-- Titre et Couverts -->
      <fieldset class="fieldset w-96">
        <legend class="fieldset-legend">Titre de la recette</legend>
        <label class="input {validationErrors.title ? 'input-error' : ''}">
          <BookOpen class="h-4 w-4 opacity-50" />
          <input
            id="recipe-title"
            type="text"
            bind:value={recipe.title}
            placeholder="Ex: Houmous maison"
            disabled={!canEdit}
            maxlength="100"
            aria-describedby="title-help"
            aria-required="true"
          />
        </label>
        <div class="fieldset-label" id="title-help">
          <span class="fieldset-label-text-alt opacity-70"
            >Maximum 100 caractères</span
          >
          {#if validationErrors.title}
            <span class="fieldset-label-text-alt text-error"
              >{validationErrors.title}</span
            >
          {/if}
        </div>
      </fieldset>
      <div class="flex flex-wrap justify-between gap-10">
        <div class="flex flex-col gap-2">
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Nombre de couverts</legend>
            <label class="input">
              <Utensils class="h-4 w-4 opacity-50" />
              <input
                id="recipe-plate"
                type="number"
                bind:value={recipe.plate}
                min="1"
                max="10000"
                disabled={!canEdit}
                aria-describedby="plate-help"
                aria-required="true"
              />
            </label>
            <div class="fieldset-label" id="plate-help">
              <span class="fieldset-label-text-alt opacity-70"
                >Quantités indiquées pour combien ?</span
              >
            </div>
          </fieldset>

          <fieldset class="fieldset flex-1">
            <legend class="fieldset-legend">Description des quantités</legend>
            <label class="input w-lg">
              <FileText class="h-4 w-4 opacity-50" />
              <input
                id="recipe-quantite-desc"
                type="text"
                bind:value={recipe.quantite_desc}
                placeholder="Ex: '24 parts par gastro'; '2 beignets/personne' ..."
                disabled={!canEdit}
                maxlength="100"
              />
            </label>
            <div class="fieldset-label">
              <span class="fieldset-label-text-alt opacity-70"
                >Précision sur les quantités / parts</span
              >
            </div>
          </fieldset>
        </div>

        <fieldset
          class="fieldset bg-base-200/70 w-fit space-y-4 self-start rounded-xl p-6"
        >
          <label class="flex cursor-pointer items-center gap-2">
            <span class="me-2"
              >Avez-vous testé la recette pour le nombre de couverts indiqué ?</span
            >
            <input
              type="radio"
              name="check"
              checked={recipe?.check === true}
              onchange={() => recipe && (recipe.check = true)}
              disabled={!canEdit}
              class="radio radio-primary radio-sm"
            />
            <span class="text-sm">Oui</span>
            <input
              type="radio"
              name="check"
              checked={recipe?.check === false}
              onchange={() => recipe && (recipe.check = false)}
              disabled={!canEdit}
              class="radio radio-primary radio-sm"
            />
            <span class="text-sm">Non</span>
          </label>
          <label class="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              class="checkbox checkbox-primary checkbox-sm mt-1"
              bind:checked={recipe.draft}
              disabled={!canEdit || recipe.check !== true}
            />
            <div class="flex max-w-md flex-col">
              <p class="text-sm font-medium">Brouillon</p>
              <p class="opacity-70">
                Les brouillons sont visibles uniquement pour les
                utilisateur·ices inscrite, mais peuvent tout de même être
                ajoutés à vos événements.
              </p>
              {#if recipe.check !== true}
                <p class="text-warning/70">
                  Une recette non testée est forcément conservée en brouillon.
                </p>
              {/if}
            </div>
          </label>
        </fieldset>
      </div>

      <fieldset class="fieldset w-full">
        <legend class="fieldset-legend">Description</legend>
        <textarea
          name="description"
          id="description"
          maxlength="200"
          bind:value={recipe.description}
          placeholder="Brève description de la recette"
          disabled={!canEdit}
          class="textarea w-full"
        ></textarea>
        <span class="fieldset-label">Maximum 200 charactères</span>
      </fieldset>

      <!-- Type et Catégories -->
      <div class="flex flex-col gap-6 sm:flex-row sm:items-start">
        <fieldset class="fieldset sm:w-auto">
          <legend class="fieldset-legend">Type de recette</legend>
          <label class="select {validationErrors.typeR ? 'select-error' : ''}">
            <ChefHat class="h-4 w-4 opacity-50" />
            <select
              id="recipe-type"
              bind:value={recipe.typeR}
              disabled={!canEdit}
              aria-describedby="type-help"
            >
              <option value="" disabled selected>Sélectionner un type</option>
              <option value={RecettesTypeR.ENTREE}>Entrée</option>
              <option value={RecettesTypeR.PLAT}>Plat</option>
              <option value={RecettesTypeR.DESSERT}>Dessert</option>
              <option value={RecettesTypeR.AUTRE}>Autre</option>
            </select>
          </label>
          {#if validationErrors.typeR}
            <div class="fieldset-label">
              <span class="fieldset-label-text-alt text-error"
                >{validationErrors.typeR}</span
              >
            </div>
          {/if}
        </fieldset>

        <div class="flex-1 sm:max-w-md">
          {#if recipeInfo && recipeInfo.categories && recipe.categories}
            <MultiSelect
              options={recipeInfo.categories}
              bind:selected={recipe.categories}
              label="Sous-Catégories"
              placeholder="Rechercher une catégorie..."
              disabled={!canEdit}
              closeOnSelect={true}
            />
          {/if}
        </div>
      </div>

      <!-- Température et Cuisson -->
      <div class="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div class="flex-1 sm:max-w-xs">
          <div class="label flex gap-1">
            <Thermometer class="h-4 w-4" />
            <span>Température de service</span>
          </div>
          <label
            class="select w-full {validationErrors.serveHot
              ? 'select-error'
              : ''}"
          >
            <select
              id="recipe-servehot"
              bind:value={recipe.serveHot}
              disabled={!canEdit}
            >
              <option value="" disabled selected>--</option>
              <option value={true}>Chaud</option>
              <option value={false}>Froid</option>
            </select>
          </label>
          {#if validationErrors.serveHot}
            <div class="fieldset-label">
              <span class="fieldset-label-text-alt text-error"
                >{validationErrors.serveHot}</span
              >
            </div>
          {/if}
        </div>

        <div class="flex-1 sm:max-w-xs">
          <div class="label flex gap-1">
            <Flame class="h-4 w-4" />
            <span>Nécessite une cuisson</span>
          </div>
          <label
            class="select w-full {validationErrors.cuisson
              ? 'select-error'
              : ''}"
          >
            <select bind:value={recipe.cuisson} disabled={!canEdit}>
              <option value="" disabled selected>--</option>
              <option value={true}>Oui</option>
              <option value={false}>Non</option>
            </select>
          </label>
          {#if validationErrors.cuisson}
            <div class="fieldset-label">
              <span class="fieldset-label-text-alt text-error"
                >{validationErrors.cuisson}</span
              >
            </div>
          {/if}
        </div>
      </div>

      <!-- Le reste -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Saison -->
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Saisons</legend>
          <div class="flex flex-wrap gap-2">
            {#each [{ value: "printemps", label: "Printemps" }, { value: "ete", label: "Été" }, { value: "automne", label: "Automne" }, { value: "hiver", label: "Hiver" }] as season (season.value)}
              <label class="flex cursor-pointer items-center gap-1">
                <input
                  type="checkbox"
                  bind:group={recipe.saison}
                  value={season.value}
                  disabled={!canEdit}
                  class="checkbox checkbox-sm"
                />
                <span class="text-sm">{season.label}</span>
              </label>
            {/each}
          </div>
          <div class="fieldset-label opacity-70">
            Si certains ingrédients ne se trouvent qu'à certaines saisons...
          </div>
        </fieldset>

        <!-- Spécialité -->
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Spécialité</legend>
          <label class="input">
            <MapPin class="h-4 w-4 opacity-50" />
            <input
              type="text"
              bind:value={recipe.region}
              placeholder="Ex: Basque, Italien"
              disabled={!canEdit}
              maxlength="50"
            />
          </label>
        </fieldset>

        <!-- Matériel nécessaire -->
        {#if recipe.materiel && recipeInfo && recipeInfo.materiel}
          <div class="lg:col-span-1">
            <MultiSelect
              options={recipeInfo.materiel}
              bind:selected={recipe.materiel}
              label="Matériel nécessaire"
              placeholder="Rechercher du matériel..."
              disabled={!canEdit}
              closeOnSelect={true}
            />
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
