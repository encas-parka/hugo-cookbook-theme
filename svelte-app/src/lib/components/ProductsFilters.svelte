<script lang="ts">
  import {
    FunnelIcon,
    FunnelX,
    Search,
    ShoppingBasket,
    Snowflake,
    Store,
    Thermometer,
    User,
    X,
  } from "@lucide/svelte";
  import { productsStore } from "../stores/ProductsStore.svelte";
  import { getProductTypeInfo } from "../utils/products-display";
  import TimelineRange from "./ui/TimelineRange.svelte";
  import Fieldset from "./ui/Fieldset.svelte";
  import { slide } from "svelte/transition";

  const filters = $derived(productsStore.filters);
  const uniqueStores = $derived(productsStore.uniqueStores);
  const uniqueWho = $derived(productsStore.uniqueWho);
  const uniqueProductTypes = $derived(productsStore.uniqueProductTypes);
</script>

<div class="mb-4 flex items-center justify-between pt-10">
  <h3 class="flex items-center gap-2 text-lg font-semibold">
    <FunnelIcon class="h-5 w-5" />
    Filtres
  </h3>
  <button
    class="btn btn-sm btn-error btn-outline"
    onclick={() => productsStore.clearFilters()}
    disabled={!productsStore.hasFilters}
  >
    <FunnelX class="h-4 w-4" />
    Tout effacer
  </button>
</div>

<div class="mb-4 grid grid-cols-1 items-center justify-between gap-4">
  <div class="">
    <label class="label" for="search-input">
      <span class="label-text">Recherche</span>
    </label>
    <div class="input flex items-center gap-2">
      <Search class="h-4 w-4" />
      <input
        id="search-input"
        type="text"
        placeholder="Nom du produit..."
        class="grow"
        value={filters.searchQuery}
        oninput={(e) => productsStore.setSearchQuery(e.currentTarget.value)}
      />
      <button
        class="btn btn-xs btn-circle btn-error btn-outline opacity-60"
        onclick={() => productsStore.setSearchQuery("")}
        disabled={!filters.searchQuery}
      >
        <X class="h-4 w-4" />
      </button>
    </div>
    <!-- Groupement -->
  </div>
  <div class="mb-4">
    <label class="label flex" for="grouping-select">
      <span class="label-text">Groupement</span>
    </label>
    <div class="join" id="grouping-select">
      <input
        class="join-item btn btn-sm md:btn-md"
        type="radio"
        name="grouping-options"
        aria-label="Aucun"
        checked={filters.groupBy === "none"}
        onchange={() => productsStore.setGroupBy("none")}
      />
      <input
        class="join-item btn btn-sm md:btn-md"
        type="radio"
        name="grouping-options"
        aria-label="Par magasin"
        checked={filters.groupBy === "store"}
        onchange={() => productsStore.setGroupBy("store")}
      />
      <input
        class="join-item btn btn-sm md:btn-md"
        type="radio"
        name="grouping-options"
        aria-label="Par type"
        checked={filters.groupBy === "productType"}
        onchange={() => productsStore.setGroupBy("productType")}
      />
    </div>
  </div>
  {#if !productsStore.hasSingleDateEvent}
    <Fieldset legend="Date incluses" bgClass="bg-base-100">
      <TimelineRange dateStore={productsStore.dateStore} />

      {#if productsStore.hasPastDatesInRange}
        <div class="alert alert-warning" transition:slide>
          Cette période contient des dates passées. Les achats ne sont plus
          possibles pour ces dates.
        </div>
      {/if}
    </Fieldset>
  {/if}

  <!-- Filtres par type, température, magasin et qui -->
  {#if uniqueProductTypes.length > 0}
    <Fieldset legend="Types & Température" iconComponent={Thermometer}>
      <div class="mb-2 flex flex-wrap items-center gap-2" role="group">
        {#each uniqueProductTypes as type (type)}
          {@const typeInfo = getProductTypeInfo(type)}
          <button
            class="btn btn-sm {filters.selectedProductTypes.length === 0
              ? 'btn-soft btn-secondary'
              : filters.selectedProductTypes.includes(type)
                ? 'btn-secondary'
                : 'btn-dash btn-secondary'}"
            onclick={() => productsStore.toggleProductType(type)}
          >
            <typeInfo.icon class="mr-1 h-5 w-5" />
            {typeInfo.displayName}
          </button>
        {/each}
      </div>
      <!-- Filtres température -->
      <div class="flex flex-wrap items-center gap-2" role="group">
        <button
          class="btn btn-sm {filters.selectedTemperatures.length === 0
            ? 'btn-soft btn-success'
            : filters.selectedTemperatures.includes('frais')
              ? 'btn-success'
              : 'btn-dash btn-success'}"
          onclick={() => productsStore.toggleTemperature("frais")}
          title="Filtrer les légumes ou produits à conserver au frais"
        >
          <ShoppingBasket class="h-5 w-5" />
          Frais
        </button>
        <button
          class="btn btn-sm {filters.selectedTemperatures.length === 0
            ? 'btn-soft btn-info'
            : filters.selectedTemperatures.includes('surgele')
              ? 'btn-info'
              : 'btn-dash btn-info'}"
          onclick={() => productsStore.toggleTemperature("surgele")}
          title="Filtrer les roduits à concerver au congélateur"
        >
          <Snowflake class="h-5 w-5" />
          Surgelés
        </button>
      </div>
      {#if filters.selectedProductTypes.length > 0 || filters.selectedTemperatures.length > 0}
        <button
          class="btn btn-xs btn-circle btn-outline text-error ms-auto"
          onclick={() => productsStore.clearTypeAndTemperatureFilters()}
          title="Effacer les filtres de types et température"
        >
          <FunnelX size={16} />
        </button>
      {:else}
        <div class="text-base-content/60 p-1 text-end text-xs italic">
          aucun filtre sélectionné
        </div>
      {/if}
    </Fieldset>
  {/if}
  {#if uniqueStores.length > 0}
    <Fieldset legend="Magasins" iconComponent={Store}>
      <div class="flex flex-wrap items-center gap-2" role="group">
        {#each uniqueStores as store (store)}
          <button
            class="btn btn-sm {filters.selectedStores.length === 0
              ? 'btn-soft btn-secondary'
              : filters.selectedStores.includes(store)
                ? 'btn-secondary'
                : 'btn-dash btn-secondary'}"
            onclick={() => productsStore.toggleStore(store)}
          >
            {store}
          </button>
        {/each}
        {#if filters.selectedStores.length > 0}
          <button
            class="btn btn-xs btn-circle btn-outline text-error ms-auto"
            onclick={() => productsStore.clearStoreFilters()}
            title="Effacer les filtres de magasins"
          >
            <FunnelX size={16} />
          </button>
        {/if}
      </div>
    </Fieldset>
  {/if}

  {#if uniqueWho.length > 0}
    <Fieldset legend="Qui" iconComponent={User}>
      <div class="flex flex-wrap items-center gap-2" role="group">
        {#each uniqueWho as who (who)}
          <button
            class="btn btn-sm {filters.selectedWho.length === 0
              ? ' btn-soft btn-secondary'
              : filters.selectedWho.includes(who)
                ? ' btn-secondary'
                : 'btn-dash btn-secondary'}"
            onclick={() => productsStore.toggleWho(who)}
          >
            {who}
          </button>
        {/each}
        {#if filters.selectedWho.length > 0}
          <button
            class="btn btn-xs btn-circle btn-outline btn-error ms-auto"
            onclick={() => productsStore.clearWhoFilters()}
            title="Effacer les filtres de qui"
          >
            <FunnelX size={16} />
          </button>
        {/if}
      </div>
    </Fieldset>
  {/if}
</div>
