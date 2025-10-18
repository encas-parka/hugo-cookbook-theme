<script lang="ts">
	import { Store } from '@lucide/svelte';
	import type { Products } from '../types/appwrite.d.ts';

	interface Props {
		product: Products | null;
		editingStore: string;
		loading: boolean;
		onUpdateStore: (store: string) => Promise<void>;
	}

	let {
		product,
		editingStore,
		loading,
		onUpdateStore
	}: Props = $props();

	async function handleUpdateStore() {
		await onUpdateStore(editingStore);
	}

	function handleQuickSelectStore(store: string) {
		editingStore = store;
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
			<div class="flex gap-2">
				<div class="form-control flex-1">
					<input
						type="text"
						class="input input-bordered input-sm"
						bind:value={editingStore}
						placeholder="Ex: Carrefour, Leclerc..."
						onkeydown={(e) => {
							if (e.key === 'Enter') {
								handleUpdateStore();
							}
						}}
					/>
				</div>
				<button class="btn btn-primary btn-sm" onclick={handleUpdateStore} disabled={loading || editingStore === product?.store}>
					{#if loading}
						<span class="loading loading-spinner loading-sm"></span>
					{:else}
						Mettre à jour
					{/if}
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
					{#if product?.store}
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
