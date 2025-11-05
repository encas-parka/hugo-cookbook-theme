<script lang="ts">
  import { Archive, Package } from "@lucide/svelte";
  import type { ProductModalStateType } from "../types/store.types.js";
  import { formatDate } from "../utils/products-display.js";

  interface Props {
    modalState: ProductModalStateType;
  }

  let { modalState }: Props = $props();

  // Données dérivées du store

  let isFormValid = $derived(
    modalState &&
      modalState.forms &&
      modalState.forms.stock.quantity &&
      modalState.forms.stock.quantity > 0 &&
      modalState.forms.stock.unit,
  );

  async function handleSetStock() {
    await modalState?.setStock();
  }

  async function handleDeleteStock() {
    await modalState?.removeStock();
  }
</script>

<div class="space-y-4">
  <h3 class="flex items-center gap-2 text-lg font-semibold">
    <Archive class="h-5 w-5" />
    Gestion du stock
  </h3>

  <div class="card bg-base-200">
    <div class="card-body">
      <h4 class="card-title text-base">
        {modalState.stockParsed ? "Modifier le stock" : "Ajouter un stock"}
      </h4>
      <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <label class="input">
          <Package class="h-4 w-4 opacity-50" />
          <input
            placeholder="Quantité"
            type="number"
            step="1"
            bind:value={modalState.forms.stock.quantity}
            minlength="0.01"
            title="La quantité doit être supérieure à 0"
            required
          />
        </label>

        <select
          class="custom-select input w-32"
          bind:value={modalState.forms.stock.unit}
          required
        >
          <option disabled value="">Selectionné l'unité</option>
          <option value="kg">kg</option>
          <option value="gr.">gr.</option>
          <option value="l.">l.</option>
          <option value="ml">ml</option>
          <option value="unité">unité·s</option>
          <option value="bottes">botte·s</option>
        </select>
      </div>

      <div>
        <textarea
          class="textarea flex w-full"
          bind:value={modalState.forms.stock.notes}
          placeholder="Commentaire (optionnel)"
        >
        </textarea>
      </div>
      <div class="card-actions mt-4 justify-end">
        <button
          class="btn btn-ghost btn-sm"
          onclick={() => {
            modalState.forms.stock.quantity = null;
            modalState.forms.store.comment = "";
          }}
          disabled={modalState.loading}
        >
          Effacer
        </button>
      </div>
    </div>
  </div>

  {#if !modalState.stockParsed}
    <div class="py-8 text-center opacity-50">
      <Archive class="mx-auto mb-2 h-12 w-12" />
      <p>Aucun stock enregistré pour ce produit</p>
    </div>
  {:else}
    <div class="card bg-base-100">
      <div class="card-body">
        <h4 class="card-title mb-4 text-base">Stock actuel</h4>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <span class="font-semibold">Quantité:</span>
            <span class="badge badge-primary badge-lg ml-2">
              {modalState.stockParsed.quantity}
              {modalState.stockParsed.unit}
            </span>
          </div>
          <div>
            <span class="font-semibold">Date:</span>
            <span class="ml-2"
              >{formatDate(modalState.stockParsed.dateTime)}</span
            >
          </div>
          {#if modalState.stockParsed.notes}
            <div class="md:col-span-2">
              <span class="font-semibold">Notes:</span>
              <span class="ml-2">{modalState.stockParsed.notes}</span>
            </div>
          {/if}
        </div>
        <div class="card-actions mt-4 justify-end">
          <button
            class="btn btn-error btn-sm"
            onclick={handleDeleteStock}
            disabled={modalState.loading}
          >
            {#if modalState.loading}
              <span class="loading loading-spinner loading-xs"></span>
            {:else}
              Supprimer le stock
            {/if}
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
</style>
