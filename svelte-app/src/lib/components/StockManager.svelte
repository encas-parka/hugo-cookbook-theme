<script lang="ts">
	import { Archive } from '@lucide/svelte';
	import type { EnrichedProduct } from '../types/store.types.js';
	import { createProductModalState } from '../stores/ProductModalState.svelte';
	import { productsStore } from '../stores/ProductsStore.svelte';
    import { formatDate, formatQuantity } from '../utils/products-display.js';

	// --- NOUVELLE APPROCHE : Consommation directe de ProductModalState ---
	// Le composant consomme directement le store au lieu de recevoir des props

	interface Props {
		product: EnrichedProduct | null;
	}

	let { product }: Props = $props();

	// Accès direct au store
	const modalState = $derived.by(() => {
		return product ? createProductModalState(product) : null;
	});

	// Données dérivées du store
	const stockEntries = $derived(modalState?.stockEntries ?? []);
	const loading = $derived(modalState?.loading ?? false);
	const stockForm = $derived(modalState!.forms.stock);



	// --- NOUVELLE APPROCHE : Utilisation directe des actions du store ---
	async function handleAddStock() {
		await modalState?.addStock();
	}

	async function handleDeleteStock(index: number) {
		await modalState?.deleteStock(index);
	}

</script>

<div class="space-y-4">
	<h3 class="text-lg font-semibold flex items-center gap-2">
		<Archive class="w-5 h-5" />
		Gestion du stock
	</h3>

	<div class="card bg-base-200">
		<div class="card-body">
			<h4 class="card-title text-base">Ajouter au stock</h4>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
				<div class="form-control">
					<label for="stock-quantity" class="label">
						<span class="label-text">Quantité</span>
					</label>
					<input
						id="stock-quantity"
						type="number"
						step="0.01"
						class="input input-bordered input-sm"
						bind:value={stockForm.quantity}
						required
					/>
				</div>
				<div class="form-control">
					<label for="stock-unit" class="label">
						<span class="label-text">Unité</span>
					</label>
					<select id="stock-unit" class="select select-bordered select-sm" bind:value={stockForm.unit} required>
						<option value="">Sélectionner</option>
						<option value="kg">kg</option>
						<option value="g">g</option>
						<option value="l">l</option>
						<option value="ml">ml</option>
						<option value="unités">unités</option>
						<option value="pièces">pièces</option>
					</select>
				</div>
				<div class="form-control">
					<label for="stock-datetime" class="label">
						<span class="label-text">Date du stock</span>
					</label>
					<input
						id="stock-datetime"
						type="datetime-local"
						class="input input-bordered input-sm"
						bind:value={stockForm.dateTime}
						required
					/>
				</div>
				<div class="form-control">
					<label for="stock-notes" class="label">
						<span class="label-text">Notes</span>
					</label>
					<input
						id="stock-notes"
						type="text"
						class="input input-bordered input-sm"
						bind:value={stockForm.notes}
						placeholder="Origine, remarques..."
					/>
				</div>
			</div>
			<div class="card-actions justify-end mt-4">
				<button class="btn btn-primary btn-sm" onclick={handleAddStock} disabled={loading}>
					{#if loading}
						<span class="loading loading-spinner loading-sm"></span>
					{:else}
						Ajouter au stock
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if stockEntries.length === 0}
		<div class="text-center py-8 opacity-50">
			<Archive class="w-12 h-12 mx-auto mb-2" />
			<p>Aucun stock enregistré pour ce produit</p>
		</div>
	{:else}
		<div class="overflow-x-auto">
			<table class="table table-zebra table-sm">
				<thead>
					<tr>
						<th>Quantité</th>
						<th>Date</th>
						<th>Notes</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each stockEntries as entry, index (entry.dateTime)}
						<tr>
							<td class="font-medium">
								{entry.quantity} {entry.unit}
							</td>
							<td>{formatDate(entry.dateTime)}</td>
							<td>{entry.notes || '-'}</td>
							<td>
								<button
									class="btn btn-ghost btn-xs text-error"
									onclick={() => handleDeleteStock(index)}
									disabled={loading}
								>
									{#if loading}
										<span class="loading loading-spinner loading-xs"></span>
									{:else}
										Supprimer
									{/if}
								</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>
