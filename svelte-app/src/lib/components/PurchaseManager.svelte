<script lang="ts">
	import { ShoppingCart, SquarePen, Save, X } from '@lucide/svelte';
	import type { Purchases } from '../types/appwrite.d.ts';
    import { createProductModalState } from '../stores/ProductModalState.svelte.js';
    import type { EnrichedProduct } from '../types/store.types.js';
    import { formatDate, formatQuantity } from '../utils/products-display.js';



	interface Props {
		product: EnrichedProduct;
	}

	let { product }: Props = $props();

	const modalState = $derived(createProductModalState(product));

	// Données dérivées du store - plus besoin de fallbacks grâce à ProductModalState
	const purchases = $derived(modalState.purchasesList);
	const loading = $derived(modalState.loading ?? false);

	const purchaseForm = $derived(modalState.forms.purchase);

	const editingPurchaseData = $derived(modalState?.edit.purchase);
	const editingPurchaseId = $derived(modalState?.editingPurchaseId ?? null);

	// État de validation du formulaire pour l'édition
	const isFormValid = $derived(
		modalState &&
		purchaseForm.quantity !== null && purchaseForm.quantity !== 0   &&
		purchaseForm.unit?.trim() !== ''
	);

	const isEditingFormValid = $derived(
		modalState &&
		editingPurchaseData.quantity !== null && editingPurchaseData.quantity !== 0   &&
		editingPurchaseData.unit?.trim() !== ''
	);

	function startEditPurchase(purchase: Purchases) {
		modalState?.startEditPurchase(purchase);
	}

	function cancelEditPurchase() {
		modalState?.cancelEditPurchase();
	}

	async function handleUpdateEditedPurchase() {
		if (!isEditingFormValid) return;
		await modalState!.updateEditedPurchase();
	}

	async function handleDeletePurchase(purchaseId: string) {
		await modalState?.deletePurchase(purchaseId);
	}

	async function handleAddPurchase() {
		await modalState?.addPurchase();
	}

</script>

{#if product && modalState}
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
						class="input input-bordered validator"
						bind:value={purchaseForm.quantity}
						required
					/>
				</div>
				<div class="form-control">
					<label for="purchase-unit" class="label">
						<span class="label-text">Unité</span>
					</label>
					<select id="purchase-unit" class="select select-bordered validator" required bind:value={purchaseForm.unit} >
						<option disabled selected value="">Sélectionner</option>
						<option value="kg">kg</option>
						<option value="gr.">gr.</option>
						<option value="l.">l.</option>
						<option value="ml">ml</option>
						<option value="unité">unités</option>
						<option value="bottes">botte·s</option>
					</select>
				</div>
				<div class="form-control">
					<label for="purchase-store" class="label">
						<span class="label-text">Magasin</span>
					</label>
					<input
						id="purchase-store"
						type="text"
						class="input input-bordered"
						bind:value={purchaseForm.store}
						placeholder="Ex: Marché"
					/>
				</div>
				<div class="form-control">
					<label for="purchase-who" class="label">
						<span class="label-text">Qui a acheté ?</span>
					</label>
					<input
						id="purchase-who"
						type="text"
						class="input input-bordered"
						bind:value={purchaseForm.who}
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
						step="1"
						class="input input-bordered"
						bind:value={purchaseForm.price}
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
						class="input input-bordered"
						bind:value={purchaseForm.notes}
						placeholder="Promotion, remarques..."
					/>
				</div>
			</div>
			<div class="card-actions justify-end mt-4">
				<button class="btn btn-primary btn-sm" onclick={handleAddPurchase} disabled={loading || !isFormValid}>
					{#if loading}
						<span class="loading loading-spinner loading-sm"></span>
					{:else}
						Ajouter l'achat
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if purchases.length === 0}
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
					{#each purchases as purchase, index (index)}
						{#if editingPurchaseId === purchase.$id}
							<tr class="bg-warning/10">
								<td>
									<div class="flex gap-2">
										<input
											type="number"
											step="0.01"
											class="input input-bordered w-20"
											bind:value={editingPurchaseData.quantity}
										/>
										<select class="select select-bordered w-16" bind:value={editingPurchaseData.unit}>
											<option value="kg">kg</option>
											<option value="gr.">gr.</option>
											<option value="l.">l.</option>
											<option value="ml">ml</option>
											<option value="unité">unité·s</option>
											<option value="bottes">botte·s</option>
										</select>
									</div>
								</td>
								<td>
									<input
										type="text"
										class="input input-bordered w-24"
										bind:value={editingPurchaseData.store}
									/>
								</td>
								<td>
									<input
										type="text"
										class="input input-bordered w-20"
										bind:value={editingPurchaseData.who}
									/>
								</td>
								<td class="text-xs opacity-75">
									{formatDate(purchase.$createdAt)}
								</td>
								<td>
									<input
										type="number"
										step="1"
										class="input input-bordered w-16"
										bind:value={editingPurchaseData.price}
									/>
								</td>
								<td>
									<input
										type="text"
										class="input input-bordered w-24"
										bind:value={editingPurchaseData.notes}
									/>
								</td>
								<td>
									<div class="btn-group btn-group-sm">
										<button
											class="btn btn-success btn-sm"
											onclick={handleUpdateEditedPurchase}
											disabled={loading || !isEditingFormValid}
										>
											{#if loading}
												<span class="loading loading-spinner loading-sm"></span>
											{:else}
												<Save class="w-3 h-3" />
											{/if}
										</button>
										<button class="btn btn-ghost btn-sm" onclick={cancelEditPurchase}>
											<X class="w-3 h-3" />
										</button>
									</div>
								</td>
							</tr>
						{:else}
							<tr >
								<td class="font-medium">
									{formatQuantity(purchase.quantity, purchase.unit)}
								</td>
								<td>{purchase.store}</td>
								<td>{purchase.who}</td>
								<td class="text-xs opacity-75">{formatDate(purchase.$createdAt)}</td>
								<td>{purchase.price ? `${purchase.price}€` : '-'}</td>
								<td>{purchase.notes || '-'}</td>
								<td>
									<div class="btn-group btn-group-sm">
										<button
											class="btn btn-ghost btn-sm"
											onclick={() => startEditPurchase(purchase)}
										>
											<SquarePen class="w-4 h-4" />
										</button>
										<button
											class="btn btn-ghost btn-sm text-error"
											onclick={() => handleDeletePurchase(purchase.$id)}
											disabled={loading}
										>
											{#if loading}
												<span class="loading loading-spinner loading-sm"></span>
											{:else}
												<X class="w-4 h-4" />
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
{/if}
