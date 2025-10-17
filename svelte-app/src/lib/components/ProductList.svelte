<script lang="ts">
  // import type { Product } from '../types/product.types';

  import {
    type Products
  } from '../stores/ProductsStore.svelte';
  interface Props {
    products: Products[];
  }

  let { products }: Props = $props();

  // Compteurs pour le dashboard
  const stats = $derived({
    total: products.length,
    frais: products.filter(p => p.pFrais).length,
    surgel: products.filter(p => p.pSurgel).length,
    merged: products.filter(p => p.isMerged).length
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

  <!-- Tableau -->
  <div class="overflow-x-auto bg-base-200 rounded-lg">
    <table class="table w-full">
      <thead class="bg-base-300">
        <tr>
          <th>Nom</th>
          <th>Type</th>
          <th>Frais</th>
          <th>Surgelé</th>
          <th>Statut</th>
          <th>Recettes</th>
        </tr>
      </thead>
      <tbody>
        {#each products as product (product.$id)}
          <tr class="hover:bg-base-300 transition-colors">
            <td>
              <div class="font-medium text-base-content">{product.productName}</div>
              {#if product.previousNames && product.previousNames.length > 0}
                <div class="text-xs text-base-content/60">
                  Ancien: {product.previousNames[0]}
                </div>
              {/if}
            </td>
            <td>
              <span class="badge badge-ghost">{product.productType}</span>
            </td>
            <td>
              {#if product.pFrais}
                <div class="badge badge-info">Frais</div>
              {:else}
                <span class="text-base-content/40">-</span>
              {/if}
            </td>
            <td>
              {#if product.pSurgel}
                <div class="badge badge-success">Surgelé</div>
              {:else}
                <span class="text-base-content/40">-</span>
              {/if}
            </td>
            <td>
              <div class="flex items-center gap-2">
                {#if product.isMerged}
                  <div class="badge badge-warning badge-sm">Fusionné</div>
                {/if}
                <span class="badge {product.status === 'active'
                  ? 'badge-success'
                  : 'badge-ghost'} badge-sm">
                  {product.status}
                </span>
              </div>
            </td>
            <td>
              <div class="text-right font-semibold">{product.nbRecipes}</div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
