<script lang="ts">
  import { Store, MapPin } from "@lucide/svelte";
  import type { StoreInfo, ProductModalStateType } from "../types/store.types";
  import { createProductModalState } from "../stores/ProductModalState.svelte";
  import { productsStore } from "../stores/ProductsStore.svelte";
  import Suggestions from "./ui/Suggestions.svelte";

  interface Props {
    modalState: ProductModalStateType;
  }

  let { modalState }: Props = $props();

  // ✅ Utilisation directe de l'état centralisé - pas d'état local
  const storeForm = $derived(
    modalState?.forms?.store || { name: null, comment: null },
  );

  // Validation : formulaire valide si au moins une valeur a changé
  const isFormValid = $derived(modalState?.hasChanges?.store || false);

  async function handleUpdateStore() {
    if (!isFormValid) return;

    const storeInfo: StoreInfo = {
      storeName: modalState.forms.store.name?.trim() || "",
      storeComment: modalState.forms.store.comment?.trim() || undefined,
    };

    await modalState.updateStore(storeInfo);
  }
</script>

<div class="space-y-4">
  <div class="card bg-base-200">
    <div class="card-body">
      <h4 class="card-title text-base">Magasin</h4>
      <p class="mb-4 text-sm opacity-75">
        Définissez le magasin où vous prévoyez d'acheter ce produit.
      </p>

      <div class="grid-col-1 grid gap-4">
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <label class="input">
            <Store class="h-4 w-4 opacity-50" />
            <input
              type="text"
              bind:value={modalState.forms.store.name}
              placeholder="Nom du magasin"
              list="stores"
              maxlength="50"
              onkeydown={(e) => {
                if (e.key === "Enter") {
                  handleUpdateStore();
                }
              }}
            />
          </label>

          <!-- Suggestions de magasins -->
          {#if productsStore.uniqueStores.length > 0}
            <Suggestions
              suggestions={productsStore.uniqueStores.map((store) => ({
                id: store,
                label: store,
                disabled: store === modalState.forms.store.name,
              }))}
              onSuggestionClick={(suggestion) => {
                modalState.forms.store.name = suggestion.label;
              }}
              buttonVariant="btn-outline"
            />
          {/if}
        </div>

        <textarea
          class="textarea flex w-full"
          bind:value={modalState.forms.store.comment}
          placeholder="Commentaire (optionnel)"
          rows="1"
          maxlength="250"
        >
        </textarea>
      </div>

      <div class="card-actions mt-4 justify-end">
        <button
          class="btn btn-ghost btn-sm"
          onclick={() => {
            modalState.forms.store.name = "";
            modalState.forms.store.comment = "";
          }}
          disabled={modalState.loading}
        >
          Effacer
        </button>
      </div>
    </div>
  </div>
</div>
