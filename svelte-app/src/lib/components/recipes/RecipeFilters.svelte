<script lang="ts">
  import {
    Eraser,
    UtensilsCrossed,
    Salad,
    Cookie,
    Flame,
    Cloud,
    Calendar,
  } from "@lucide/svelte";
  import Fieldset from "$lib/components/ui/Fieldset.svelte";
  import AutocompleteInput from "$lib/components/ui/AutocompleteInput.svelte";
  import BadgeList from "$lib/components/ui/BadgeList.svelte";
  import { globalState } from "../../stores/GlobalState.svelte";
  import CheckboxBadge from "../ui/CheckboxBadge.svelte";

  interface Filters {
    categories: string[];
    regimes: string[];
    temperature: string;
    cuisson: string;
    saison: string;
    onlyTested: boolean;
    ingredients: string[];
  }

  interface Props {
    filters: Filters;
    disabled?: boolean;
    availableCategories: string[];
    availableRegimes: string[];
    availableIngredients: string[];
    onReset: () => void;
  }

  let {
    filters = $bindable(),
    disabled = false,
    availableCategories,
    availableRegimes,
    availableIngredients,
    onReset,
  }: Props = $props();

  // Gestion des checkboxes multiples
  function toggleArrayItem(array: string[], item: string) {
    const index = array.indexOf(item);
    if (index === -1) {
      array.push(item);
    } else {
      array.splice(index, 1);
    }
    // Trigger reactivity
    filters = { ...filters };
  }

  // Gestion des ingrédients avec autocomplete
  let ingredientSearch = $state("");

  function addIngredient(ingredient: string) {
    if (!filters.ingredients.includes(ingredient)) {
      filters.ingredients.push(ingredient);
      // Trigger reactivity
      filters = { ...filters };
    }
  }

  function removeIngredient(ingredient: string, index: number) {
    const idx = filters.ingredients.indexOf(ingredient);
    if (idx !== -1) {
      filters.ingredients.splice(idx, 1);
      // Trigger reactivity
      filters = { ...filters };
    }
  }

  // Filtrer les ingrédients disponibles pour l'autocomplétion
  let availableIngredientsForAutocomplete = $derived(
    availableIngredients.filter((ing) => !filters.ingredients.includes(ing)),
  );
</script>

<div class="mt-16 space-y-4" class:opacity-30={disabled}>
  <div class="mb-4 flex items-center justify-between">
    <h4 class="text-lg font-bold">Filtres</h4>
    <button class="btn btn-warning btn-sm" onclick={onReset} {disabled}>
      <Eraser class="h-4 w-4" />
      Effacer
    </button>
  </div>

  <!-- Catégories -->
  <Fieldset legend="Catégories" iconComponent={UtensilsCrossed}>
    <div class="flex flex-wrap gap-3">
      {#each availableCategories as category}
        <CheckboxBadge
          checked={filters.categories.includes(category)}
          label={category}
          onchange={() => toggleArrayItem(filters.categories, category)}
          {disabled}
        />
      {/each}
    </div>
  </Fieldset>

  <!-- Régimes -->
  <Fieldset legend="Régimes" iconComponent={Salad}>
    <div class="flex flex-wrap gap-3">
      {#each availableRegimes as regime}
        <CheckboxBadge
          checked={filters.regimes.includes(regime)}
          label={regime}
          onchange={() => toggleArrayItem(filters.regimes, regime)}
          {disabled}
        />
      {/each}
    </div>
  </Fieldset>

  <!-- Ingrédients -->
  <Fieldset legend="Ingrédients" iconComponent={Cookie}>
    <!-- Input avec autocomplétion -->
    <div class="mb-3">
      <AutocompleteInput
        items={availableIngredientsForAutocomplete}
        onSelect={addIngredient}
        placeholder="Ajouter un ingrédient..."
        {disabled}
        minQueryLength={1}
        bind:value={ingredientSearch}
      />
    </div>

    <!-- Liste des ingrédients sélectionnés -->
    <div>
      <div class="mb-2 text-xs font-medium">
        Ingrédients sélectionnés ({filters.ingredients.length})
      </div>
      <BadgeList
        items={filters.ingredients}
        onRemove={removeIngredient}
        badgeClass="badge-success"
        {disabled}
        itemKey={(item, index) => item}
      />
    </div>
  </Fieldset>

  <!-- Recettes testées -->
  <Fieldset legend="Recettes testées uniquement">
    <label class="label cursor-pointer justify-start gap-2">
      <input
        type="checkbox"
        class="toggle toggle-primary"
        bind:checked={filters.onlyTested}
        {disabled}
      />
    </label>
  </Fieldset>

  <!-- Service (Température) -->
  <Fieldset legend="Service" iconComponent={Flame}>
    <select
      class="select select-bordered select-sm w-full"
      bind:value={filters.temperature}
      {disabled}
    >
      <option value="">Indifférent</option>
      <option value="Chaud">Servir chaud</option>
      <option value="Froid">Servir froid</option>
    </select>
  </Fieldset>

  <!-- Cuisson -->
  <Fieldset legend="Cuisson" iconComponent={Cloud}>
    <select
      class="select select-bordered select-sm w-full"
      bind:value={filters.cuisson}
      {disabled}
    >
      <option value="">Indifférent</option>
      <option value="Oui">Avec cuisson</option>
      <option value="Non">Sans cuisson</option>
    </select>
  </Fieldset>

  <!-- Saison -->
  <Fieldset legend="Saison" iconComponent={Calendar}>
    <select
      class="select select-bordered select-sm w-full"
      bind:value={filters.saison}
      {disabled}
    >
      <option value="">Indifférent</option>
      <option value="printemps">Printemps</option>
      <option value="ete">Été</option>
      <option value="automne">Automne</option>
      <option value="hiver">Hiver</option>
    </select>
  </Fieldset>
</div>
