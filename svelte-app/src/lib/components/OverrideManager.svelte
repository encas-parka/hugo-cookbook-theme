<script lang="ts">
  import { PencilLine, MessageCircle } from "@lucide/svelte";
  import type {
    ProductModalStateType,
    TotalNeededOverrideData,
  } from "../types/store.types.js";
  import { formatQuantity } from "../utils/products-display.js";
  interface Props {
    modalState: ProductModalStateType;
  }

  let { modalState }: Props = $props();

  // Données dérivées du store
  const overrideData = $derived(modalState.product?.totalNeededOverrideParsed);
  const totalNeededArray = $derived(modalState.product?.totalNeededArray || []);
  const displayTotalNeeded = $derived(
    modalState.product?.displayTotalNeeded || [],
  );

  // État du formulaire
  let editMode = $state(false);
  let quantity = $state(
    modalState.product?.totalNeededOverrideParsed?.totalOverride.q ||
      modalState.product?.totalNeededArray[0]?.q ||
      0,
  );
  let unit = $state(
    modalState.product?.totalNeededOverrideParsed?.totalOverride.u ||
      modalState.product?.totalNeededArray[0]?.u ||
      "",
  );
  let comment = $state(
    modalState.product?.totalNeededOverrideParsed?.comment || "",
  );

  let isFormValid = $derived(quantity > 0 && unit.trim() !== "");

  async function handleSetOverride() {
    if (!modalState) return;

    const overrideData: TotalNeededOverrideData = {
      totalOverride: { q: quantity, u: unit },
      comment,
    };

    await modalState.setOverride(overrideData);
    editMode = false;
  }

  async function handleRemoveOverride() {
    if (!modalState) return;
    await modalState.removeOverride();
    editMode = false;
  }
</script>

<div class="mb-2 space-y-4">
  <!-- Quantité calculée affichée en référence -->
  <div
    class="card border-base-300 border {editMode
      ? 'bg-base-200'
      : 'bg-base-100'}"
  >
    <div class="card-body p-4">
      {#if !editMode}
        <div class="flex items-center justify-between">
          <div>
            <span class="text-base-content/80">Besoin total</span>
            {#if overrideData}
              <span class="badge badge-warning badge-sm ms-2"
                >Modifié manuellement</span
              >
            {/if}
            <div class="text-lg font-medium">
              {#if overrideData}
                {formatQuantity(
                  overrideData.totalOverride.q,
                  overrideData.totalOverride.u,
                )}
                {#if overrideData.comment}
                  <div
                    class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"
                  >
                    <MessageCircle />
                    {overrideData.comment}
                  </div>
                {/if}
              {:else}
                {displayTotalNeeded}
              {/if}
            </div>
          </div>
        </div>
        <button
          class="btn btn-sm btn-primary btn-outline ms-auto w-fit"
          onclick={() => (editMode = true)}>Modifier</button
        >
      {:else}
        <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <label class="input">
            <PencilLine class="h-4 w-4 opacity-50" />
            <input
              placeholder="Quantité"
              type="number"
              step="0.01"
              bind:value={quantity}
              min="0.01"
              title="La quantité doit être supérieure à 0"
              required
            />
          </label>

          <select class="custom-select input w-32" bind:value={unit} required>
            <option disabled value="">Sélectionner l'unité</option>
            <option value="kg">kg</option>
            <option value="gr.">gr.</option>
            <option value="l.">l.</option>
            <option value="ml">ml</option>
            <option value="unité">unité·s</option>
            <option value="bottes">botte·s</option>
          </select>
        </div>

        <div>
          <div class="">
            <div class="label">
              <span class="label-text">Commentaire (optionnel)</span>
            </div>
            <textarea
              class="textarea flex w-full"
              bind:value={comment}
              placeholder=""
              rows="2"
              maxlength="250"
            ></textarea>
            {#if comment.length >= 250}
              <div class="text-error text-sm">
                Limite de caractères atteinte
              </div>
            {/if}
          </div>
        </div>

        <div class="card-actions mt-4 justify-between">
          <button
            class="btn btn-ghost btn-sm text-error"
            onclick={handleRemoveOverride}
            disabled={modalState.loading}
          >
            {#if modalState.loading}
              <span class="loading loading-spinner loading-sm"></span>
            {:else}
              Réinitialiser le total calculé ({displayTotalNeeded}).
            {/if}
          </button>

          <button
            class="btn btn-primary btn-sm"
            onclick={handleSetOverride}
            disabled={modalState.loading || !isFormValid}
          >
            {#if modalState.loading}
              <span class="loading loading-spinner loading-sm"></span>
            {:else}
              Appliquer
            {/if}
          </button>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
</style>
