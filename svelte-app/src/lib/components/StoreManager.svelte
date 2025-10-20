<script lang="ts">
	import { Store } from '@lucide/svelte';
	import type { StoreInfo, EnrichedProduct } from '../types/store.types';
	import { createProductModalState } from '../stores/ProductModalState.svelte';
	interface Props {
		product: EnrichedProduct | null;
	}

	let { product }: Props = $props();

	// Accès direct au store
	const modalState = $derived.by(() => {
		return product ? createProductModalState(product) : null;
	});

	// Données dérivées du store
	const loading = $derived(modalState?.loading ?? false);
	const storeForm = $derived(modalState?.forms.store);
	const editingStoreData = $derived(modalState?.edit.store);

	// État local pour le formulaire (synchronisé avec le store)
	// svelte-ignore  state_referenced_locally
	let storeName = $state(storeForm?.name || '');
	// svelte-ignore  state_referenced_locally
	let storeComment = $state(storeForm?.comment || '');

	// Synchroniser avec le store quand les données changent
	$effect(() => {
		if (storeForm) {
			storeName = storeForm.name || '';
			storeComment = storeForm.comment || '';
		}
	});

	async function handleUpdateStore() {
		const storeInfo: StoreInfo | null = storeName.trim()
			? { storeName: storeName.trim(), storeComment: storeComment.trim() || '' }
			: null;

		await modalState?.updateStore(storeInfo?.storeName || null);
	}

	function handleQuickSelectStore(store: string) {
		storeName = store;
	}

</script>

<div class="space-y-4">
	<h3 class="text-lg font-semibold flex items-center gap-2">
		<Store class="w-5 h-5" />
		Gestion des magasins
	</h3>

	<div class="card bg-base-200">
		<div class="card-body">
			<h4 class="card-title text-base">Magasin principal</h4>
			<p class="text-sm opacity-75 mb-4">
				Définissez le magasin où ce produit est généralement acheté
			</p>

			<!-- Nom du magasin -->
			<div class="form-control mb-3">
				<label class="label" for="store-name">
					<span class="label-text">Nom du magasin</span>
				</label>
				<input
					id="store-name"
					type="text"
					class="input input-bordered input-sm"
					bind:value={storeName}
					placeholder="Ex: Carrefour, Leclerc..."
					onkeydown={(e) => {
						if (e.key === 'Enter') {
							handleUpdateStore();
						}
					}}
				/>
			</div>

			<!-- Commentaire du magasin -->
			<div class="form-control mb-4">
				<label class="label" for="store-comment">
					<span class="label-text">Commentaire (optionnel)</span>
				</label>
				<textarea
					id="store-comment"
					class="textarea textarea-bordered textarea-sm"
					bind:value={storeComment}
					placeholder="Ex: Près de la caisse, rayon frais, etc."
					rows="2"
				></textarea>
			</div>

			<div class="flex gap-2 mb-4">
				<button class="btn btn-primary btn-sm" onclick={handleUpdateStore} disabled={loading}>
					{#if loading}
						<span class="loading loading-spinner loading-sm"></span>
					{:else}
						Mettre à jour
					{/if}
				</button>
				<button
					class="btn btn-ghost btn-sm"
					onclick={() => { storeName = ''; storeComment = ''; }}
					disabled={loading}
				>
					Effacer
				</button>
			</div>

			<div class="divider"></div>

			<div class="form-control">
				<label class="label" for="suggested-stores">
					<span class="label-text text-sm">Suggestions rapides</span>
				</label>
				<div class="flex flex-wrap gap-2" id="suggested-stores">
					{#each ['Carrefour', 'Intermarché', 'Leclerc', 'Auchan', 'Lidl', 'Aldi', 'Casino', 'Monoprix', 'Franprix', 'Bio c\' Bon', 'Naturalia'] as store (store)}
						<button
							class="btn btn-outline btn-xs"
							onclick={() => handleQuickSelectStore(store)}
							disabled={loading}
						>
							{store}
						</button>
					{/each}
				</div>
			</div>

			<div class="divider"></div>

			<div class="alert alert-info">
				<Store class="w-4 h-4" />
				<div>
					<h4 class="font-semibold">Information sur le magasin actuel</h4>
					{#if product?.storeInfo}
						<p class="text-sm">
							<strong>Magasin défini :</strong> {product.storeInfo.storeName}
							{#if product.storeInfo.storeComment}
								<br><small class="opacity-75">{product.storeInfo.storeComment}</small>
							{/if}
						</p>
					{:else if product?.store}
						<p class="text-sm">
							<strong>Magasin défini :</strong> {product.store}
						</p>
					{:else}
						<p class="text-sm">
							Aucun magasin n'est encore défini pour ce produit
						</p>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
