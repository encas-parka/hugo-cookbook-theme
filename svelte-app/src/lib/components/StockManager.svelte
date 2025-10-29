<script lang="ts">
  import { Archive, Package, WeightIcon } from "@lucide/svelte";
  import type { ProductModalStateType } from "../types/store.types.js";
  import { formatDate } from "../utils/products-display.js";

  interface Props {
    modalState: ProductModalStateType;
  }

  let { modalState }: Props = $props();

  // Données dérivées du store

  let isFormValid = $derived(
    modalState &&
      modalState.forms.stock.quantity &&
      modalState.forms.stock.quantity > 0 &&
      modalState.forms.stock.unit,
  );

  async function handleAddStock() {
    await modalState?.addStock();
  }

  async function handleDeleteStock(index: number) {
    await modalState?.removeStock(index);
  }
</script>

<div class="space-y-4">
  <h3 class="flex items-center gap-2 text-lg font-semibold">
    <Archive class="h-5 w-5" />
    Gestion du stock
  </h3>

  <div class="card bg-base-200">
    <div class="card-body">
      <h4 class="card-title text-base">Ajouter au stock</h4>
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
          {modalState.forms.stock.notes}
        </textarea>
      </div>
      <div class="card-actions mt-4 justify-end">
        <button
          class="btn btn-primary btn-sm"
          onclick={handleAddStock}
          disabled={modalState.loading || !isFormValid}
        >
          {#if modalState.loading}
            <span class="loading loading-spinner loading-sm"></span>
          {:else}
            Ajouter au stock
          {/if}
        </button>
      </div>
    </div>
  </div>

  {#if modalState.stockEntries.length === 0}
    <div class="py-8 text-center opacity-50">
      <Archive class="mx-auto mb-2 h-12 w-12" />
      <p>Aucun stock enregistré pour ce produit</p>
    </div>
  {:else}
    <div class="overflow-x-auto">
      <table class="table-zebra table-sm table">
        <thead>
          <tr>
            <th>Quantité</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each modalState.stockEntries as entry, index (entry.dateTime)}
            <tr>
              <td class="font-medium">
                {entry.quantity}
                {entry.unit}
              </td>
              <td>{formatDate(entry.dateTime)}</td>
              <td>{entry.notes || "-"}</td>
              <td>
                <button
                  class="btn btn-ghost btn-xs text-error"
                  onclick={() => handleDeleteStock(index)}
                  disabled={modalState.loading}
                >
                  {#if modalState.loading}
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

<style>
</style>
