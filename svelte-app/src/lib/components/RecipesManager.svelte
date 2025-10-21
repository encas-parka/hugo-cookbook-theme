<script lang="ts">
	import { Package } from '@lucide/svelte';
	import type { ProductModalStateType } from '../types/store.types.js';
  import { formatDate } from '../utils/products-display.js';



	interface Props {
		modalState: ProductModalStateType;
	}

	let { modalState }: Props = $props();


	// Données dérivées du store
	const recipes = $derived(modalState.recipes);

</script>

<div class="space-y-4">
	<h3 class="text-lg font-semibold flex items-center gap-2">
		<Package class="w-5 h-5" />
		Recettes utilisant ce produit
	</h3>

	{#if recipes.length === 0}
		<div class="text-center py-8 opacity-50">
			<Package class="w-12 h-12 mx-auto mb-2" />
			<p>Aucune recette trouvée pour ce produit</p>
		</div>
	{:else}
		<div class="overflow-x-auto">
			<table class="table table-zebra table-sm">
				<thead>
					<tr>
						<th>Recette</th>
						<th>Quantité</th>
						<th>Date service</th>
						<th>Type plat</th>
						<th>Assiettes</th>
					</tr>
				</thead>
				<tbody>
					{#each recipes as recipe (recipe.recipeName + recipe.dateTimeService)}
						<tr>
							<td class="font-medium">{recipe.recipeName}</td>
							<td>{recipe.quantity} {recipe.unit}</td>
							<td>{formatDate(recipe.dateTimeService)}</td>
							<td>{recipe.assiettes || '-'}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>
