

<script>
  import { FunnelIcon, ShoppingBasket, Snowflake, X } from '@lucide/svelte';
    import { productsStore } from '../stores/ProductsStore.svelte';
    import { getProductTypeInfo } from '../utils/products-display';

    let filtersDrawerOpen = $state(false);
    const filters = $derived(productsStore.filters);
    const uniqueStores = $derived(productsStore.uniqueStores);
    const uniqueWho = $derived(productsStore.uniqueWho);
    const uniqueProductTypes = $derived(productsStore.uniqueProductTypes);

</script>

<div class="drawer drawer-end">
  <input
    id="filters-drawer"
    type="checkbox"
    class="drawer-toggle"
    bind:checked={filtersDrawerOpen}
  />

  <div class="drawer-side">
    <label for="filters-drawer" class="drawer-overlay"></label>

    <!-- Filtres mobile dans le drawer -->
    <div class="menu bg-base-200 min-h-full w-80 p-4">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-semibold flex items-center gap-2">
          <FunnelIcon class="w-5 h-5" />
          Filtres
        </h3>
        <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle">
          <X class="w-4 h-4" />
        </label>
      </div>

      <!-- Groupement -->
      <div class="form-control mb-4">
        <label class="label" for="grouping-select-mobile">
          <span class="label-text">Groupement</span>
        </label>
        <div class="join join-vertical">
          <input
            class="join-item btn"
            type="radio"
            name="grouping-options-mobile"
            aria-label="Aucun"
            checked={filters.groupBy === 'none'}
            onchange={() => productsStore.setGroupBy('none')}
          />
          <input
            class="join-item btn"
            type="radio"
            name="grouping-options-mobile"
            aria-label="Par magasin"
            checked={filters.groupBy === 'store'}
            onchange={() => productsStore.setGroupBy('store')}
          />
          <input
            class="join-item btn"
            type="radio"
            name="grouping-options-mobile"
            aria-label="Par type"
            checked={filters.groupBy === 'productType'}
            onchange={() => productsStore.setGroupBy('productType')}
          />
        </div>
      </div>

      <!-- Filtres par type et température mobile -->
      <div class="mb-6">
        <fieldset>
          <legend class="label mb-2">
            <span class="label-text">Types & Température</span>
          </legend>
          <div class="flex flex-wrap gap-2 mb-3" role="group">
            {#each uniqueProductTypes as type (type)}
              {@const typeInfo = getProductTypeInfo(type)}
              <button
                class="btn btn-sm {
                  filters.selectedProductTypes.length === 0
                    ? 'btn-soft btn-accent'
                    : filters.selectedProductTypes.includes(type)
                      ? 'btn-accent'
                      : 'btn-dash btn-accent'
                }"
                onclick={() => productsStore.toggleProductType(type)}
              >
                <typeInfo.icon class="w-3 h-3 mr-1" />
                {typeInfo.displayName}
              </button>
            {/each}
          </div>

          <div class="flex flex-wrap gap-2" role="group">
            <button
              class="btn btn-sm {
                filters.selectedTemperatures.length === 0
                  ? 'btn-soft btn-success'
                  : filters.selectedTemperatures.includes('frais')
                    ? 'btn-success'
                    : 'btn-dash btn-success'
              }"
              onclick={() => productsStore.toggleTemperature('frais')}
            >
              <ShoppingBasket class="w-3 h-3" />
              Frais
            </button>
            <button
              class="btn btn-sm {
                filters.selectedTemperatures.length === 0
                  ? 'btn-soft btn-info'
                  : filters.selectedTemperatures.includes('surgele')
                    ? 'btn-info'
                    : 'btn-dash btn-info'
              }"
              onclick={() => productsStore.toggleTemperature('surgele')}
            >
              <Snowflake class="w-3 h-3" />
              Surgelés
            </button>

            {#if filters.selectedProductTypes.length > 0 || filters.selectedTemperatures.length > 0}
              <button
                class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10"
                onclick={() => productsStore.clearTypeAndTemperatureFilters()}
                title="Effacer les filtres de types et température"
              >
                <X class="w-3 h-3" />
              </button>
            {/if}
          </div>
        </fieldset>
      </div>

      <!-- Filtres par magasin -->
      {#if uniqueStores.length > 0}
        <div class="mb-6">
          <fieldset>
            <legend class="label mb-2">
              <span class="label-text">Magasins</span>
            </legend>
            <div class="flex flex-wrap gap-2" role="group">
              {#each uniqueStores as store (store)}
                <button
                  class="btn btn-sm {
                    filters.selectedStores.length === 0
                      ? 'btn-soft btn-accent'
                      : filters.selectedStores.includes(store)
                        ? 'btn-accent'
                        : 'btn-dash btn-accent'
                  }"
                  onclick={() => productsStore.toggleStore(store)}
                >
                  {store}
                </button>
              {/each}
            </div>
          </fieldset>
        </div>
      {/if}

      <!-- Filtres par who -->
      {#if uniqueWho.length > 0}
        <div class="mb-6">
          <fieldset>
            <legend class="label mb-2">
              <span class="label-text">Qui</span>
            </legend>
            <div class="flex flex-wrap gap-2" role="group">
              {#each uniqueWho as who (who)}
                <button
                  class="btn btn-sm {
                    filters.selectedWho.length === 0
                      ? 'btn-soft btn-accent'
                      : filters.selectedWho.includes(who)
                        ? 'btn-accent'
                        : 'btn-dash btn-accent'
                  }"
                  onclick={() => productsStore.toggleWho(who)}
                >
                  {who}
                </button>
              {/each}
            </div>
          </fieldset>
        </div>
      {/if}

      <!-- Actions -->
      <div class="divider"></div>
      <button
        class="btn btn-primary w-full mb-2"
        onclick={() => {
          productsStore.clearFilters();
          filtersDrawerOpen = false;
        }}
      >
        <X class="w-4 h-4 mr-2" />
        Tout effacer
      </button>
      <label for="filters-drawer" class="btn btn-outline w-full">
        Appliquer
      </label>
    </div>
  </div>
</div>

<!-- FAB flottant pour mobile -->
<div class="md:hidden fixed bottom-4 left-4 z-50">
  <label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg">
    <FunnelIcon class="w-6 h-6" />
  </label>
</div>
