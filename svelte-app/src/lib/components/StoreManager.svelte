<script lang="ts">
  import { Store, MapPin } from "@lucide/svelte";
  import type { StoreInfo, ProductModalStateType } from "../types/store.types";
  import { createProductModalState } from "../stores/ProductModalState.svelte";
  import { productsStore } from "../stores/ProductsStore.svelte";

  interface Props {
    modalState: ProductModalStateType;
  }

  let { modalState }: Props = $props();

  const storeForm = $derived(modalState.forms.store);
  // Données initiales du produit
  const initialStoreName = $derived(storeForm.name || "");
  const initialStoreComment = $derived(storeForm.comment || "");

  // État local pour le formulaire
  // svelte-ignore  state_referenced_locally
  let storeName = $state(initialStoreName);
  // svelte-ignore  state_referenced_locally
  let storeComment = $state(initialStoreComment);

  // Validation : formulaire valide si au moins une valeur a changé
  const isFormValid = $derived(
    storeName.trim() !== (storeForm.name || "") ||
      storeComment.trim() !== (storeForm.comment || ""),
  );

  async function handleUpdateStore() {
    if (!isFormValid) return;

    const storeInfo: StoreInfo = {
      storeName: storeName.trim(),
      storeComment: storeComment.trim(),
    };

    await modalState.updateStore(storeInfo);
  }

  function handleQuickSelectStore(store: string) {
    storeName = store;
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
        <label class="input">
          <Store class="h-4 w-4 opacity-50" />
          <input
            type="text"
            bind:value={storeName}
            placeholder="Nom du magasin"
            list="stores"
            maxlength="50"
            onkeydown={(e) => {
              if (e.key === "Enter") {
                handleUpdateStore();
              }
            }}
          />
          <datalist id="stores">
            {#each productsStore.uniqueStores as store}
              <option value={store}>{store}</option>
            {/each}
          </datalist>
        </label>
        <textarea
          class="textarea flex w-full"
          bind:value={storeComment}
          placeholder="Commentaire (optionnel)"
          rows="1"
          maxlength="250"
        >
        </textarea>
      </div>

      <div class="card-actions mt-4 justify-end">
        <button
          class="btn btn-primary btn-sm"
          onclick={handleUpdateStore}
          disabled={modalState.loading || !isFormValid}
        >
          {#if modalState.loading}
            <span class="loading loading-spinner loading-sm"></span>
          {:else}
            Mettre à jour
          {/if}
        </button>
        <button
          class="btn btn-ghost btn-sm"
          onclick={() => {
            storeName = "";
            storeComment = "";
          }}
          disabled={modalState.loading}
        >
          Effacer
        </button>
      </div>
    </div>
  </div>
</div>
