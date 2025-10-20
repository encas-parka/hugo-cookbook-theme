<script lang="ts">
	import { Users, X } from '@lucide/svelte';
	import type { EnrichedProduct } from '../types/store.types.js';

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
	const volunteers = $derived(modalState?.whoList ?? []);
	const loading = $derived(modalState?.loading ?? false);

	// État local pour le formulaire
	let newVolunteer = $state('');

	// Validation : formulaire valide si le nom n'est pas vide ET n'existe pas déjà
	const isFormValid = $derived(
		newVolunteer.trim().length > 0 &&
		!volunteers.includes(newVolunteer.trim())
	);

	async function handleAddVolunteer() {
		if (!isFormValid || !modalState) return;

		await modalState.addVolunteer(newVolunteer.trim());
		newVolunteer = '';
	}

	async function handleRemoveVolunteer(volunteer: string) {
		await modalState?.removeVolunteer(volunteer);
	}

</script>

<div class="space-y-4">
	<h3 class="text-lg font-semibold flex items-center gap-2">
		<Users class="w-5 h-5" />
		Gestion des volontaires
	</h3>

	<div class="card bg-base-200">
		<div class="card-body">
			<h4 class="card-title text-base">Ajouter un volontaire</h4>
			<div class="flex gap-2">
				<div class="form-control flex-1">
					<input
						type="text"
						class="input input-bordered input-sm"
						bind:value={newVolunteer}
						placeholder="Nom du volontaire"
						onkeydown={(e) => {
							if (e.key === 'Enter') {
								handleAddVolunteer();
							}
						}}
					/>
				</div>
				<button class="btn btn-primary btn-sm" onclick={handleAddVolunteer} disabled={loading || !isFormValid}>
					{#if loading}
						<span class="loading loading-spinner loading-sm"></span>
					{:else}
						Ajouter
					{/if}
				</button>
			</div>
		</div>
	</div>

	<div class="card bg-base-200">
		<div class="card-body">
			<h4 class="card-title text-base">
				Volontaires
				{#if volunteers.length > 0}
					<span class="badge badge-primary badge-sm">{volunteers.length}</span>
				{/if}
			</h4>
			{#if volunteers.length === 0}
				<div class="text-center py-8 opacity-50">
					<Users class="w-12 h-12 mx-auto mb-2" />
					<p>Aucun volontaire assigné à ce produit</p>
				</div>
			{:else}
				<div class="flex flex-wrap gap-2">
					{#each volunteers as volunteer (volunteer)}
						<div class="badge badge-primary badge-lg gap-2">
							{volunteer}
							<button
								class="btn btn-ghost btn-xs p-0 hover:text-error"
								onclick={() => handleRemoveVolunteer(volunteer)}
								disabled={loading}
							>
								<X class="w-3 h-3" />
							</button>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
