<script lang="ts">
  import type { Products } from '../types/appwrite.d';
  import { Search, Funnel, X, ChevronDown, ChevronRight, FunnelIcon } from '@lucide/svelte';

  interface Props {
    products: Products[];
  }

  let { products }: Props = $props();

  // États réactifs pour les filtres
  let searchQuery = $state('');
  let selectedStores = $state<string[]>([]);
  let selectedWho = $state<string[]>([]);
  let selectedProductType = $state<string>('');
  let showPFrais = $state(true);
  let showPSurgel = $state(true);
  let groupBy = $state<'store' | 'productType' | 'none'>('none');
  let sortColumn = $state<string>('');
  let sortDirection = $state<'asc' | 'desc'>('asc');

  // Extraire les valeurs uniques pour les filtres
  const uniqueStores = $derived([...new Set(products.map(p => p.store).filter(Boolean))] as string[]);
  const uniqueWho = $derived([...new Set(products.flatMap(p => p.who || []).filter(Boolean))] as string[]);
  const uniqueProductTypes = $derived([...new Set(products.map(p => p.productType).filter(Boolean))] as string[]);

  // Filtrer les produits selon les critères
  const filteredProducts = $derived.by(() => {
    let filtered = products;

    // Recherche textuelle
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.productName.toLowerCase().includes(query)
      );
    }

    // Filtre par store
    if (selectedStores.length > 0) {
      filtered = filtered.filter(p => p.store && selectedStores.includes(p.store));
    }

    // Filtre par who
    if (selectedWho.length > 0) {
      filtered = filtered.filter(p =>
        p.who && p.who.some(w => selectedWho.includes(w))
      );
    }

    // Filtre par productType
    if (selectedProductType) {
      filtered = filtered.filter(p => p.productType === selectedProductType);
    }

    // Filtres pFrais/pSurgel
    if (!showPFrais && !showPSurgel) {
      return [];
    }
    if (!showPFrais) {
      filtered = filtered.filter(p => !p.pFrais);
    }
    if (!showPSurgel) {
      filtered = filtered.filter(p => !p.pSurgel);
    }

    return filtered;
  });

  // Grouper les produits
  const groupedProducts = $derived.by(() => {
    if (groupBy === 'none') {
      return { '': filteredProducts };
    }

    const groups: Record<string, Products[]> = {};
    for (const product of filteredProducts) {
      const key = groupBy === 'store' ? (product.store || 'Non défini') : product.productType;
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(product);
    }
    return groups;
  });

  // Trier les produits
  function sortProducts(products: Products[]): Products[] {
    if (!sortColumn) return products;

    return [...products].sort((a, b) => {
      let aVal: any = a[sortColumn as keyof Products];
      let bVal: any = b[sortColumn as keyof Products];

      // Gérer les cas spéciaux
      if (sortColumn === 'totalNeededConsolidated') {
        aVal = parseFloat(aVal) || 0;
        bVal = parseFloat(bVal) || 0;
      } else if (sortColumn === 'purchases') {
        aVal = a.purchases?.length || 0;
        bVal = b.purchases?.length || 0;
      }

      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // Gestionnaire de clics sur les cellules
  function handleCellClick(type: string, product: Products) {
    console.log(`Cell clicked: ${type}`, product);
    // TODO: Ouvrir les modals appropriées
    switch(type) {
      case 'store':
        // Modal pour modifier le store
        break;
      case 'who':
        // Modal pour modifier who
        break;
      case 'purchases':
        // Modal pour voir/éditer les achats
        break;
      case 'productName':
        // Modal pour éditer le produit
        break;
    }
  }

  // Gestionnaire de tri
  function handleSort(column: string) {
    if (sortColumn === column) {
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn = column;
      sortDirection = 'asc';
    }
  }

  // Fonctions utilitaires pour les filtres
  function toggleStore(store: string) {
    if (selectedStores.includes(store)) {
      selectedStores = selectedStores.filter(s => s !== store);
    } else {
      selectedStores = [...selectedStores, store];
    }
  }

  function toggleWho(who: string) {
    if (selectedWho.includes(who)) {
      selectedWho = selectedWho.filter(w => w !== who);
    } else {
      selectedWho = [...selectedWho, who];
    }
  }

  function clearAllFilters() {
    searchQuery = '';
    selectedStores = [];
    selectedWho = [];
    selectedProductType = '';
    showPFrais = true;
    showPSurgel = true;
    groupBy = 'none';
    sortColumn = '';
    sortDirection = 'asc';
  }

  // Calculer les statistiques
  const stats = $derived({
    total: filteredProducts.length,
    frais: filteredProducts.filter(p => p.pFrais).length,
    surgel: filteredProducts.filter(p => p.pSurgel).length,
    merged: filteredProducts.filter(p => p.isMerged).length
  });
</script>

<div class="space-y-6">
  <!-- Stats -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="stat bg-base-200 rounded-lg">
      <div class="stat-title">Total</div>
      <div class="stat-value">{stats.total}</div>
    </div>
    <div class="stat bg-base-200 rounded-lg">
      <div class="stat-title">Frais</div>
      <div class="stat-value text-info">{stats.frais}</div>
    </div>
    <div class="stat bg-base-200 rounded-lg">
      <div class="stat-title">Surgelés</div>
      <div class="stat-value text-success">{stats.surgel}</div>
    </div>
    <div class="stat bg-base-200 rounded-lg">
      <div class="stat-title">Fusionnés</div>
      <div class="stat-value text-warning">{stats.merged}</div>
    </div>
  </div>

  <!-- Filtres -->
  <div class="bg-base-200 rounded-lg p-4">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold flex items-center gap-2">
        <FunnelIcon class="w-5 h-5" />
        Filtres
      </h3>
      <button
        class="btn btn-sm btn-ghost"
        onclick={clearAllFilters}
      >
        <X class="w-4 h-4" />
        Tout effacer
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Recherche -->
      <div class="form-control">
        <label class="label" for="search-input">
          <span class="label-text">Recherche</span>
        </label>
        <div class="input input-bordered flex items-center gap-2">
          <Search class="w-4 h-4" />
          <input
            id="search-input"
            type="text"
            placeholder="Nom du produit..."
            class="grow"
            bind:value={searchQuery}
          />
        </div>
      </div>

      <!-- Filtre par type -->
      <div class="form-control">
        <label class="label" for="product-type-select">
          <span class="label-text">Type de produit</span>
        </label>
        <select id="product-type-select" class="select select-bordered" bind:value={selectedProductType}>
          <option value="">Tous les types</option>
          {#each uniqueProductTypes as type (type)}
            <option value={type}>{type}</option>
          {/each}
        </select>
      </div>

      <!-- Groupement -->
      <div class="form-control">
        <label class="label" for="grouping-select">
          <span class="label-text">Groupement</span>
        </label>
        <select id="grouping-select" class="select select-bordered" bind:value={groupBy}>
          <option value="none">Aucun</option>
          <option value="store">Par magasin</option>
          <option value="productType">Par type</option>
        </select>
      </div>
    </div>

    <!-- Filtres température -->
    <div class="mt-4">
      <fieldset>
        <legend class="label">
          <span class="label-text">Température</span>
        </legend>
        <div class="flex gap-4">
          <label class="cursor-pointer flex items-center gap-2">
            <input
              id="frais-checkbox"
              type="checkbox"
              class="checkbox checkbox-info"
              bind:checked={showPFrais}
            />
            <span>Produits frais</span>
          </label>
          <label class="cursor-pointer flex items-center gap-2">
            <input
              id="surgele-checkbox"
              type="checkbox"
              class="checkbox checkbox-success"
              bind:checked={showPSurgel}
            />
            <span>Produits surgelés</span>
          </label>
        </div>
      </fieldset>
    </div>

    <!-- Filtres par magasin -->
    {#if uniqueStores.length > 0}
      <div class="mt-4">
        <fieldset>
          <legend class="label">
            <span class="label-text">Magasins</span>
          </legend>
          <div class="flex flex-wrap gap-2" role="group">
            {#each uniqueStores as store (store)}
              <button
                class="btn btn-sm {selectedStores.includes(store) ? 'btn-primary' : 'btn-outline'}"
                onclick={() => toggleStore(store)}
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
      <div class="mt-4">
        <fieldset>
          <legend class="label">
            <span class="label-text">Qui</span>
          </legend>
          <div class="flex flex-wrap gap-2" role="group">
            {#each uniqueWho as who (who)}
              <button
                class="btn btn-sm {selectedWho.includes(who) ? 'btn-primary' : 'btn-outline'}"
                onclick={() => toggleWho(who)}
              >
                {who}
              </button>
            {/each}
          </div>
        </fieldset>
      </div>
    {/if}
  </div>

  <!-- Tableau -->
  <div class="bg-base-200 rounded-lg p-4 overflow-x-auto">
    <table class="table w-full">
      <thead>
        <tr class="bg-base-300">
          <th class="cursor-pointer hover:bg-base-400" onclick={() => handleSort('productName')}>
            <div class="flex items-center gap-2">
              Nom du produit
              {#if sortColumn === 'productName'}
                {sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="cursor-pointer hover:bg-base-400" onclick={() => handleSort('store')}>
            <div class="flex items-center gap-2">
              Magasin
              {#if sortColumn === 'store'}
                {sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="cursor-pointer hover:bg-base-400" onclick={() => handleSort('who')}>
            <div class="flex items-center gap-2">
              Qui
              {#if sortColumn === 'who'}
                {sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="cursor-pointer hover:bg-base-400" onclick={() => handleSort('productType')}>
            <div class="flex items-center gap-2">
              Type
              {#if sortColumn === 'productType'}
                {sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th>Temp.</th>
          <th class="cursor-pointer hover:bg-base-400" onclick={() => handleSort('totalNeededConsolidated')}>
            <div class="flex items-center gap-2">
              Quantité totale
              {#if sortColumn === 'totalNeededConsolidated'}
                {sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th>Recettes / Assiettes</th>
          <th class="cursor-pointer hover:bg-base-400" onclick={() => handleSort('purchases')}>
            <div class="flex items-center gap-2">
              Achats
              {#if sortColumn === 'purchases'}
                {sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {#each Object.entries(groupedProducts) as [groupKey, groupProducts] (groupKey)}
          {#if groupKey !== ''}
            <!-- Header de groupe -->
            <tr class="bg-base-300 font-semibold">
              <td colspan="8" class="py-2">
                <div class="flex items-center gap-2">
                  {#if groupBy === 'store'}
                    🏪 {groupKey} ({groupProducts.length})
                  {:else}
                    📦 {groupKey} ({groupProducts.length})
                  {/if}
                </div>
              </td>
            </tr>
          {/if}

          <!-- Produits du groupe -->
          {#each sortProducts(groupProducts) as product (product.$id)}
            <tr class="hover:bg-base-300 transition-colors">
              <td
                class="cursor-pointer hover:bg-blue-50"
                onclick={() => handleCellClick('productName', product)}
              >
                <div class="font-medium">{product.productName}</div>
                {#if product.previousNames && product.previousNames.length > 0}
                  <div class="text-xs text-base-content/60">
                    Ancien: {product.previousNames[0]}
                  </div>
                {/if}
              </td>
              <td
                class="cursor-pointer hover:bg-green-50 font-medium"
                onclick={() => handleCellClick('store', product)}
              >
                {product.store || '-'}
              </td>
              <td
                class="cursor-pointer hover:bg-purple-50"
                onclick={() => handleCellClick('who', product)}
              >
                {#if product.who && product.who.length > 0}
                  <div class="flex flex-wrap gap-1">
                    {#each product.who as person (person)}
                      <span class="badge badge-outline badge-sm">{person}</span>
                    {/each}
                  </div>
                {:else}
                  -
                {/if}
              </td>
              <td>
                <span class="badge badge-ghost">{product.productType}</span>
              </td>
              <td>
                <div class="flex gap-1">
                  {#if product.pFrais}
                    <div class="badge badge-info badge-sm">F</div>
                  {/if}
                  {#if product.pSurgel}
                    <div class="badge badge-success badge-sm">S</div>
                  {/if}
                </div>
              </td>
              <td class="text-right font-semibold">
                {product.totalNeededConsolidated || '0'}
              </td>
              <td class="text-center">
                <div class="text-sm">
                  <div class="font-medium">{product.nbRecipes || 0} rec</div>
                  <div class="text-xs text-gray-600">{product.totalAssiettes || 0} ass</div>
                </div>
              </td>
              <td
                class="cursor-pointer hover:bg-orange-50 text-center"
                onclick={() => handleCellClick('purchases', product)}
              >
                <div class="badge badge-warning badge-sm">
                  {product.purchases?.length || 0} ach{(product.purchases?.length || 0) > 1 ? 'ats' : 'at'}
                </div>
              </td>
            </tr>
          {/each}
        {/each}
      </tbody>
    </table>

    {#if filteredProducts.length === 0}
      <div class="text-center py-8">
        <div class="alert alert-info">
          <div>
            <svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Aucun produit trouvé avec les filtres actuels</span>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Légende -->
  <div class="bg-base-200 rounded-lg p-4">
    <h4 class="font-semibold mb-2">Légende</h4>
    <div class="flex flex-wrap gap-4 text-sm">
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-blue-100 rounded"></div>
        <span>Cliquable (produit)</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-green-100 rounded"></div>
        <span>Cliquable (magasin)</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-purple-100 rounded"></div>
        <span>Cliquable (qui)</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-orange-100 rounded"></div>
        <span>Cliquable (achats)</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="badge badge-info badge-sm">F</div>
        <span>Frais</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="badge badge-success badge-sm">S</div>
        <span>Surgelé</span>
      </div>
    </div>
  </div>
</div>
