<script lang="ts">
  import type { PosterConfig } from "./poster.types";

  interface Props {
    config: PosterConfig;
  }

  let { config = $bindable() }: Props = $props();
</script>

<div class="bg-base-100 h-full w-full space-y-6 px-4 pt-10 sm:pt-16">
  <!-- Display Options -->
  <section>
    <h3 class="text-base-content mb-4 font-semibold">Éléments à afficher</h3>

    <!-- Display Checkbox Component: Date -->
    <div class="form-control">
      <label class="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          bind:checked={config.showDate}
        />
        <span class="label-text">Date</span>
      </label>
    </div>

    <!-- Display Checkbox Component: Horaire -->
    <div class="form-control">
      <label class="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          bind:checked={config.showHoraire}
        />
        <span class="label-text">Horaire</span>
      </label>
    </div>

    <!-- Display Checkbox Component: Description -->
    <div class="form-control">
      <label class="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          bind:checked={config.showDescription}
        />
        <span class="label-text">Description</span>
      </label>
    </div>

    <!-- Display Checkbox Component: Catégories -->
    <div class="form-control">
      <label class="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          bind:checked={config.showCategories}
        />
        <span class="label-text">Catégories</span>
      </label>
    </div>

    <!-- Display Component: Recettes (always show label) -->
    <div class="form-control">
      <span class="label-text-alt font-semibold">Recette</span>
    </div>

    <!-- Display Checkbox Component: Régimes -->
    <div class="form-control">
      <label class="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          bind:checked={config.showRegimes}
        />
        <span class="label-text">Régimes</span>
      </label>
    </div>

    <!-- Display Checkbox Component: Allergènes -->
    <div class="form-control">
      <label class="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          bind:checked={config.showAllergens}
        />
        <span class="label-text">Allergènes</span>
      </label>
    </div>

    <!-- Display Checkbox Component: Ingrédients -->
    <div class="form-control">
      <label class="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          bind:checked={config.showIngredients}
        />
        <span class="label-text">Liste Ingrédients</span>
      </label>
    </div>
  </section>

  <!-- Print Options -->
  <section>
    <h3 class="text-base-content mb-4 font-semibold">Options d'impression</h3>

    <!-- Page break by category -->
    <div class="form-control">
      <label class="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          bind:checked={config.catPageBreak}
        />
        <span class="label-text">
          Nouvelle page par catégorie (entrée/plat/dessert)
        </span>
      </label>
    </div>

    <!-- Date at top of each page -->
    {#if config.catPageBreak}
      <div class="form-control">
        <label class="label cursor-pointer justify-start gap-3">
          <input
            type="checkbox"
            class="checkbox checkbox-primary"
            bind:checked={config.dateByPageBreak}
          />
          <span class="label-text">Date en haut de chaque page</span>
        </label>
      </div>
    {/if}
  </section>

  <!-- Bottom Message -->
  <section>
    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend"> Message en bas de chaque fiche </legend>
      <label class="input w-full">
        <input
          type="text"
          class="grow"
          placeholder="Ajouter un message..."
          bind:value={config.messageBottom}
        />
      </label>
    </fieldset>
  </section>

  <!-- Font Styles -->
  <section>
    <h3 class="text-base-content mb-4 font-semibold">Styles de police</h3>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend text-sm">Date</legend>
      <select class="select w-full" bind:value={config.fontDate}>
        <option value="montserrat-font">Montserrat (Standard)</option>
        <option value="playfair-display">Playfair (Élégant)</option>
        <option value="oswald-font">Oswald (Bistro/Impact)</option>
        <option value="quicksand-font">Quicksand (Moderne)</option>
        <option value="fira-sans">Fira Sans (Clean)</option>
        <option value="dancing-script">Dancing Script (Cursive)</option>
        <option value="pacifico-regular">Pacifico (Script)</option>
        <option value="caveat-font">Caveat (Manuscrit)</option>
        <option value="gluten-font">Gluten (Funky)</option>
      </select>
    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend text-sm">Horaire</legend>
      <select class="select w-full" bind:value={config.fontHoraire}>
        <option value="montserrat-font">Montserrat (Standard)</option>
        <option value="playfair-display">Playfair (Élégant)</option>
        <option value="oswald-font">Oswald (Bistro/Impact)</option>
        <option value="quicksand-font">Quicksand (Moderne)</option>
        <option value="fira-sans">Fira Sans (Clean)</option>
        <option value="dancing-script">Dancing Script (Cursive)</option>
        <option value="pacifico-regular">Pacifico (Script)</option>
        <option value="caveat-font">Caveat (Manuscrit)</option>
        <option value="gluten-font">Gluten (Funky)</option>
      </select>
    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend text-sm">Catégories</legend>
      <select class="select w-full" bind:value={config.fontCat}>
        <option value="montserrat-font">Montserrat (Standard)</option>
        <option value="playfair-display">Playfair (Élégant)</option>
        <option value="oswald-font">Oswald (Bistro/Impact)</option>
        <option value="quicksand-font">Quicksand (Moderne)</option>
        <option value="fira-sans">Fira Sans (Clean)</option>
        <option value="dancing-script">Dancing Script (Cursive)</option>
        <option value="pacifico-regular">Pacifico (Script)</option>
        <option value="caveat-font">Caveat (Manuscrit)</option>
        <option value="gluten-font">Gluten (Funky)</option>
      </select>
    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend text-sm">Recettes</legend>
      <select class="select w-full" bind:value={config.fontRecettes}>
        <option value="montserrat-font">Montserrat (Standard)</option>
        <option value="playfair-display">Playfair (Élégant)</option>
        <option value="oswald-font">Oswald (Bistro/Impact)</option>
        <option value="quicksand-font">Quicksand (Moderne)</option>
        <option value="fira-sans">Fira Sans (Clean)</option>
        <option value="dancing-script">Dancing Script (Cursive)</option>
        <option value="pacifico-regular">Pacifico (Script)</option>
        <option value="caveat-font">Caveat (Manuscrit)</option>
        <option value="gluten-font">Gluten (Funky)</option>
      </select>
    </fieldset>
  </section>
</div>
