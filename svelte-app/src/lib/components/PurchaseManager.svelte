<script lang="ts">
	import { ShoppingCart, Edit2, Save, X } from '@lucide/svelte';
	import type { Products, Purchases } from '../types/appwrite.d.ts';

	interface Props {
		product: Products | null;
		editingPurchases: Purchases[];
		loading: boolean;
		onAddPurchase: () => Promise<void>;
		onStartEditPurchase: (purchase: Purchases) => void;
		onCancelEditPurchase: () => void;
		onSavePurchase: () => Promise<void>;
		onDeletePurchase: (purchaseId: string) => Promise<void>;
	}

	let {
		product,
		editingPurchases,
		loading,
		onAddPurchase,
		onStartEditPurchase,
		onCancelEditPurchase,
		onSavePurchase,
		onDeletePurchase
	}: Props = $props();

	let newPurchase = {
		quantity: '',
		unit: '',
		store: '',
		who: '',
		price: '',
		notes: ''
	};

	let editingPurchase: Purchases | null = null;

	function formatQuantity(quantity: number, unit: string): string {
		if (unit === 'g' && quantity >= 1000) {
			return `${(quantity / 1000).toFixed(1)} kg`;
		} else if (unit === 'ml' && quantity >= 1000) {
			return `${(quantity / 1000).toFixed(1)} l`;
		} else if (unit === 'unités' || unit === 'pièces') {
			return `${quantity} ${unit}`;
		}
		return `${quantity} ${unit}`;
	}

	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString('fr-FR', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		});
	}

	function startEditPurchase(purchase: Purchases) {
		editingPurchase = { ...purchase };
		onStartEditPurchase(purchase);
	}

	function cancelEditPurchase() {
		editingPurchase = null;
		onCancelEditPurchase();
	}

	async function handleSavePurchase() {
		await onSavePurchase();
		editingPurchase = null;
	}

	async function handleDeletePurchase(purchaseId: string) {
		await onDeletePurchase(purchaseId);
	}
</script>

<div class="space-y-4">
	<h3 class="text-lg font-semibold flex items-center gap-2">
		<ShoppingCart class="w-5 h-5" />
		Gestion des achats
	</h3>

	<div class="card bg-base-200">
		<div class="card-body">
			<h4 class="card-title text-base">Ajouter un achat</h4>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
				<div class="form-control">
					<label for="purchase-quantity" class="label">
						<span class="label-text">Quantité</span>
					</label>
					<input
						id="purchase-quantity"
						type="number"
						step="0.01"
						class="input input-bordered input-sm"
						bind:value={newPurchase.quantity}
						required
					/>
				</div>
				<div class="form-control">
					<label for="purchase-unit" class="label">
						<span class="label-text">Unité</span>
					</label>
					<select id="purchase-unit" class="select select-bordered select-sm" bind:value={newPurchase.unit} required>
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
					<label for="purchase-store" class="label">
						<span class="label-text">Magasin</span>
					</label>
					<input
						id="purchase-store"
						type="text"
						class="input input-bordered input-sm"
						bind:value={newPurchase.store}
						placeholder="Ex: Carrefour"
					/>
				</div>
				<div class="form-control">
					<label for="purchase-who" class="label">
						<span class="label-text">Qui a acheté ?</span>
					</label>
					<input
						id="purchase-who"
						type="text"
						class="input input-bordered input-sm"
						bind:value={newPurchase.who}
						placeholder="Votre nom"
					/>
				</div>
				<div class="form-control">
					<label for="purchase-price" class="label">
						<span class="label-text">Prix (€)</span>
					</label>
					<input
						id="purchase-price"
						type="number"
						step="0.01"
						class="input input-bordered input-sm"
						bind:value={newPurchase.price}
						placeholder="0.00"
					/>
				</div>
				<div class="form-control">
					<label for="purchase-notes" class="label">
						<span class="label-text">Notes</span>
					</label>
					<input
						id="purchase-notes"
						type="text"
						class="input input-bordered input-sm"
						bind:value={newPurchase.notes}
						placeholder="Promotion, remarques..."
					/>
				</div>
			</div>
			<div class="card-actions justify-end mt-4">
				<button class="btn btn-primary btn-sm" onclick={onAddPurchase} disabled={loading}>
					{#if loading}
						<span class="loading loading-spinner loading-sm"></span>
					{:else}
						Ajouter l'achat
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if editingPurchases.length === 0}
		<div class="text-center py-8 opacity-50">
			<ShoppingCart class="w-12 h-12 mx-auto mb-2" />
			<p>Aucun achat enregistré pour ce produit</p>
		</div>
	{:else}
		<div class="overflow-x-auto">
			<table class="table table-zebra table-sm">
				<thead>
					<tr>
						<th>Quantité</th>
						<th>Magasin</th>
						<th>Qui</th>
						<th>Date</th>
						<th>Prix</th>
						<th>Notes</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each editingPurchases as purchase (purchase.$id)}
						{#if editingPurchase?.$id === purchase.$id}
							<tr class="bg-warning/10">
								<td>
									<div class="flex gap-2">
										<input
											type="number"
											step="0.01"
											class="input input-bordered input-xs w-20"
											bind:value={editingPurchase.quantity}
										/>
										<select class="select select-bordered select-xs w-16" bind:value={editingPurchase.unit}>
											<option value="kg">kg</option>
											<option value="g">g</option>
											<option value="l">l</option>
											<option value="ml">ml</option>
											<option value="unités">unités</option>
											<option value="pièces">pièces</option>
										</select>
									</div>
								</td>
								<td>
									<input
										type="text"
										class="input input-bordered input-xs w-24"
										bind:value={editingPurchase.store}
									/>
								</td>
								<td>
									<input
										type="text"
										class="input input-bordered input-xs w-20"
										bind:value={editingPurchase.who}
									/>
								</td>
								<td class="text-xs opacity-75">
									{formatDate(purchase.dateTimePurchase)}
								</td>
								<td>
									<input
										type="number"
										step="0.01"
										class="input input-bordered input-xs w-16"
										bind:value={editingPurchase.price}
									/>
								</td>
								<td>
									<input
										type="text"
										class="input input-bordered input-xs w-24"
										bind:value={editingPurchase.notes}
									/>
								</td>
								<td>
									<div class="btn-group btn-group-xs">
										<button
											class="btn btn-success btn-xs"
											onclick={handleSavePurchase}
											disabled={loading}
										>
											{#if loading}
												<span class="loading loading-spinner loading-xs"></span>
											{:else}
												<Save class="w-3 h-3" />
											{/if}
										</button>
										<button class="btn btn-ghost btn-xs" onclick={cancelEditPurchase}>
											<X class="w-3 h-3" />
										</button>
									</div>
								</td>
							</tr>
						{:else}
							<tr>
								<td class="font-medium">
									{formatQuantity(purchase.quantity, purchase.unit)}
								</td>
								<td>{purchase.store}</td>
								<td>{purchase.who}</td>
								<td class="text-xs opacity-75">{formatDate(purchase.dateTimePurchase)}</td>
								<td>{purchase.price ? `${purchase.price}€` : '-'}</td>
								<td>{purchase.notes || '-'}</td>
								<td>
									<div class="btn-group btn-group-sm">
										<button
											class="btn btn-ghost btn-xs"
											onclick={() => startEditPurchase(purchase)}
										>
											<Edit2 class="w-3 h-3" />
										</button>
										<button
											class="btn btn-ghost btn-xs text-error"
											onclick={() => handleDeletePurchase(purchase.$id)}
											disabled={loading}
										>
											{#if loading}
												<span class="loading loading-spinner loading-xs"></span>
											{:else}
												<X class="w-3 h-3" />
											{/if}
										</button>
									</div>
								</td>
							</tr>
						{/if}
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>
