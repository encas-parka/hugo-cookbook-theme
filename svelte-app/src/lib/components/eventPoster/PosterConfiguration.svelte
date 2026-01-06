<script lang="ts">
  import Fieldset from "../ui/Fieldset.svelte";
  import type { PosterConfig } from "./poster.types";
  import { Bold, Italic } from "@lucide/svelte";

  interface Props {
    config: PosterConfig;
  }

  let { config = $bindable() }: Props = $props();
</script>

<div class="bg-base-200 h-full w-full space-y-6 pt-10 sm:pt-16">
  <!-- Display Options -->
  <Fieldset legend="Éléments à afficher">
    <!-- Display Checkbox Component: Date -->
    <div class="flex flex-wrap gap-x-4 gap-y-1">
      <label class="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          bind:checked={config.showDate}
        />
        <span class="label-text">Date</span>
      </label>

      <!-- Display Checkbox Component: Horaire -->

      <label class="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          bind:checked={config.showHoraire}
        />
        <span class="label-text">Horaire</span>
      </label>

      <!-- Display Checkbox Component: Description -->

      <label class="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          bind:checked={config.showDescription}
        />
        <span class="label-text">Description</span>
      </label>

      <!-- Display Checkbox Component: Catégories -->

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
    <fieldset class="fieldset my-2">
      <!-- Display Checkbox Component: Régimes -->
      <div class="flex flex-wrap gap-x-4 gap-y-1">
        <label class="label cursor-pointer justify-start gap-3">
          <input
            type="checkbox"
            class="checkbox checkbox-primary"
            bind:checked={config.showRegimes}
          />
          <span class="label-text">Régimes</span>
        </label>

        <!-- Display Checkbox Component: Allergènes -->
        <label class="label cursor-pointer justify-start gap-3">
          <input
            type="checkbox"
            class="checkbox checkbox-primary"
            bind:checked={config.showAllergens}
          />
          <span class="label-text">Allergènes</span>
        </label>

        <!-- Display Checkbox Component: Ingrédients -->
        <label class="label cursor-pointer justify-start gap-3">
          <input
            type="checkbox"
            class="checkbox checkbox-primary"
            bind:checked={config.showIngredients}
          />
          <span class="label-text">Liste Ingrédients</span>
        </label>
      </div>
    </fieldset>
  </Fieldset>

  <!-- Print Options -->
  <Fieldset legend="Options d'impression">
    <!-- Page break by category -->
    <div class="mb-4">
      <label class="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          bind:checked={config.catPageBreak}
        />
        <span class="label-text text-wrap">
          Nouvelle page par catégorie (entrée/plat/dessert)
        </span>
      </label>
    </div>

    <!-- Date at top of each page -->
    {#if config.catPageBreak}
      <div class="">
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

    <!-- Vertical centering -->
    <div class="">
      <label class="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary"
          bind:checked={config.centerVertical}
        />
        <span class="label-text">Centrer le contenu sur la page</span>
      </label>
    </div>
  </Fieldset>

  <Fieldset legend="Messages personnalisés">
    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend text-xs opacity-60">
        Message en haut de chaque fiche
      </legend>
      <label class="input input-sm w-full">
        <input
          type="text"
          class="grow"
          placeholder="Ajouter un message en haut..."
          bind:value={config.messageTop}
        />
      </label>
    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend text-xs opacity-60">
        Message en bas de chaque fiche
      </legend>
      <label class="input input-sm w-full">
        <input
          type="text"
          class="grow"
          placeholder="Ajouter un message en bas..."
          bind:value={config.messageBottom}
        />
      </label>
    </fieldset>
  </Fieldset>

  <!-- Font Styles -->
  <Fieldset legend="Personnalisation des textes">
    <div class="space-y-4">
      <!-- Helper for Font Settings -->
      {#snippet fontSetting(
        label,
        fontKey,
        sizeKey,
        boldKey,
        italicKey,
        visible = true,
      )}
        {#if visible}
          <div
            class="border-base-content/5 bg-base-200/30 rounded-xl border p-3"
          >
            <div class="mb-2 flex items-center justify-between">
              <span class="text-xs font-bold uppercase opacity-60">{label}</span
              >
              <div class="flex items-center gap-1">
                <!-- Style controls: Bold/Italic -->
                <div class="mr-2 flex gap-0.5">
                  <button
                    class="btn btn-xs btn-square {config[boldKey] &&
                      'btn-secondary'}"
                    onclick={() => (config[boldKey] = !config[boldKey])}
                    title="Gras"
                  >
                    <Bold class="size-3" />
                  </button>
                  <button
                    class="btn btn-xs btn-square {config[italicKey] &&
                      'btn-secondary'}"
                    onclick={() => (config[italicKey] = !config[italicKey])}
                    title="Italique"
                  >
                    <Italic class="size-3" />
                  </button>
                </div>

                <!-- Size controls -->
                <button
                  class="btn btn-ghost btn-xs btn-square font-bold"
                  onclick={() =>
                    (config[sizeKey] = Math.max(0, config[sizeKey] - 1))}
                  disabled={config[sizeKey] === 0}
                >
                  A-
                </button>
                <div class="flex gap-0.5">
                  {#each [0, 1, 2, 3] as step}
                    <div
                      class="h-1 w-2 rounded-full transition-colors {config[
                        sizeKey
                      ] >= step
                        ? 'bg-secondary'
                        : 'bg-base-content/10'}"
                    ></div>
                  {/each}
                </div>
                <button
                  class="btn btn-ghost btn-xs btn-square font-bold"
                  onclick={() =>
                    (config[sizeKey] = Math.min(3, config[sizeKey] + 1))}
                  disabled={config[sizeKey] === 3}
                >
                  A+
                </button>
              </div>
            </div>

            <select
              class="select select-sm select-bordered w-full"
              bind:value={config[fontKey]}
            >
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
          </div>
        {/if}
      {/snippet}

      {@render fontSetting(
        "Date",
        "fontDate",
        "fontSizeDate",
        "boldDate",
        "italicDate",
        config.showDate,
      )}
      {@render fontSetting(
        "Horaire",
        "fontHoraire",
        "fontSizeHoraire",
        "boldHoraire",
        "italicHoraire",
        config.showHoraire,
      )}
      {@render fontSetting(
        "Catégories",
        "fontCat",
        "fontSizeCat",
        "boldCat",
        "italicCat",
        config.showCategories,
      )}
      {@render fontSetting(
        "Titre Recettes",
        "fontRecettes",
        "fontSizeRecettes",
        "boldRecettes",
        "italicRecettes",
        true,
      )}
      {@render fontSetting(
        "Description",
        "fontDesc",
        "fontSizeDesc",
        "boldDesc",
        "italicDesc",
        config.showDescription,
      )}
      {@render fontSetting(
        "Régimes",
        "fontRegimes",
        "fontSizeRegimes",
        "boldRegimes",
        "italicRegimes",
        config.showRegimes,
      )}
      {@render fontSetting(
        "Ingrédients",
        "fontIng",
        "fontSizeIng",
        "boldIng",
        "italicIng",
        config.showIngredients,
      )}
      {@render fontSetting(
        "Allergènes",
        "fontAlert",
        "fontSizeAlert",
        "boldAlert",
        "italicAlert",
        config.showAllergens,
      )}
      {@render fontSetting(
        "Message Haut",
        "fontTop",
        "fontSizeTop",
        "boldTop",
        "italicTop",
        !!config.messageTop,
      )}
      {@render fontSetting(
        "Message Bas",
        "fontBottom",
        "fontSizeBottom",
        "boldBottom",
        "italicBottom",
        !!config.messageBottom,
      )}
    </div>
  </Fieldset>
</div>
