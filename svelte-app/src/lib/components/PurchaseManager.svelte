<script lang="ts">
	import { ShoppingCart, SquarePen, Save, X } from '@lucide/svelte';
	import type { Purchases } from '../types/appwrite.d.ts';
	import type { ProductModalStateType } from '../types/store.types.js';
	import { formatDate, formatQuantity } from '../utils/products-display.js';

	interface Props {
		modalState: ProductModalStateType;
	}

	let { modalState }: Props = $props();

	// ✅ Validation inline - pas de $derived inutiles
	function isAddFormValid(): boolean {
		return (
			modalState.forms.purchase.quantity !== null &&
			modalState.forms.purchase.quantity !== 0 &&
			modalState.forms.purchase.unit?.trim() !== ''
		);
	}

	function isEditFormValid(purchase: Purchases): boolean {
		return (
			purchase.quantity !== null &&
			purchase.quantity !== 0 &&
			purchase.unit?.trim() !== ''
		);
	}

	// ✅ Pas besoin d'intermédiaires - accès direct au state du modalState
	function handleAddPurchase() {
		if (!isAddFormValid()) return;
		modalState.addPurchase();
	}

	function handleUpdateEditedPurchase() {
		const edited = modalState.editingPurchaseData;
		if (!edited || !isEditFormValid(edited)) return;
		modalState.updateEditedPurchase(edited);
	}

	function handleDeletePurchase(purchaseId: string) {
		modalState.removePurchase(purchaseId);
	}

	function handleStartEdit(purchase: Purchases) {
		modalState.startEditPurchase(purchase);
	}

	function handleCancelEdit() {
		modalState.cancelEditPurchase();
	}

</script>

{#if modalState && modalState.product}
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
						class="input input-bordered"
						bind:value={modalState.forms.purchase.quantity}
						required
					/>
				</div>
				<div class="form-control">
					<label for="purchase-unit" class="label">
						<span class="label-text">Unité</span>
					</label>
					<select
						id="purchase-unit"
						class="select select-bordered"
						bind:value={modalState.forms.purchase.unit}
					>
						<option disabled value="">Sélectionner</option>
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
						bind:value={modalState.forms.purchase.store}
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
						bind:value={modalState.forms.purchase.who}
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
						class="input input-bordered"
						bind:value={modalState.forms.purchase.price}
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
						bind:value={modalState.forms.purchase.notes}
						placeholder="Promotion, remarques..."
					/>
				</div>
			</div>
			<div class="card-actions justify-end mt-4">
				<button
					class="btn btn-primary btn-sm"
					onclick={handleAddPurchase}
					disabled={modalState.loading || !isAddFormValid()}
				>
					{#if modalState.loading}
						<span class="loading loading-spinner loading-sm"></span>
					{:else}
						Ajouter l'achat
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Table des achats -->
	{#if modalState.purchasesList.length === 0}
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
					{#each modalState.purchasesList as purchase (purchase.$id)}
						{#if modalState.editingPurchaseId === purchase.$id}
							<!-- Mode édition -->
							<tr class="bg-warning/10">
								<td>
									<div class="flex gap-2">
										<input
											type="number"
											step="0.01"
											class="input input-bordered w-20"
											bind:value={purchase.quantity}
										/>
										<select class="select select-bordered w-16" bind:value={purchase.unit}>
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
										bind:value={purchase.store}
									/>
								</td>
								<td>
									<input
										type="text"
										class="input input-bordered w-20"
										bind:value={purchase.who}
									/>
								</td>
								<td class="text-xs opacity-75">
									{formatDate(purchase.$createdAt)}
								</td>
								<td>
									<input
										type="number"
										step="0.01"
										class="input input-bordered w-16"
										bind:value={purchase.price}
									/>
								</td>
								<td>
									<input
										type="text"
										class="input input-bordered w-24"
										bind:value={purchase.notes}
									/>
								</td>
								<td>
									<div class="btn-group btn-group-sm">
										<button
											class="btn btn-success btn-sm"
											onclick={handleUpdateEditedPurchase}
											disabled={modalState.loading || !isEditFormValid(purchase)}
										>
											{#if modalState.loading}
												<span class="loading loading-spinner loading-sm"></span>
											{:else}
												<Save class="w-3 h-3" />
											{/if}
										</button>
										<button
											class="btn btn-ghost btn-sm"
											onclick={handleCancelEdit}
										>
											<X class="w-3 h-3" />
										</button>
									</div>
								</td>
							</tr>
						{:else}
							<!-- Mode affichage -->
							<tr>
								<td class="font-medium">
									{formatQuantity(purchase.quantity, purchase.unit)}
								</td>
								<td>{purchase.store || '-'}</td>
								<td>{purchase.who || '-'}</td>
								<td class="text-xs opacity-75">{formatDate(purchase.$createdAt)}</td>
								<td>{purchase.price ? `${purchase.price}€` : '-'}</td>
								<td>{purchase.notes || '-'}</td>
								<td>
									<div class="btn-group btn-group-sm">
										<button
											class="btn btn-ghost btn-sm"
											onclick={() => handleStartEdit(purchase)}
										>
											<SquarePen class="w-4 h-4" />
										</button>
										<button
											class="btn btn-ghost btn-sm text-error"
											onclick={() => handleDeletePurchase(purchase.$id)}
											disabled={modalState.loading}
										>
											{#if modalState.loading}
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
