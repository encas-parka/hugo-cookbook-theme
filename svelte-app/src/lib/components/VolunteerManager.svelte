<script lang="ts">
  import { User, Users, X } from "@lucide/svelte";
  import type { ProductModalStateType } from "../types/store.types.js";

  import { productsStore } from "../stores/ProductsStore.svelte.js";

  interface Props {
    modalState: ProductModalStateType;
  }

  let { modalState }: Props = $props();

  // État local pour le formulaire
  let newVolunteer = $state("");

  // Validation : formulaire valide si le nom n'est pas vide ET n'existe pas déjà
  const isFormValid = $derived(
    newVolunteer.trim().length > 0 &&
      !modalState.whoList.includes(newVolunteer.trim()),
  );

  // Appel modalState.Action → appwrite-interraction
  async function handleAddVolunteer() {
    if (!isFormValid || !modalState) return;

    await modalState.addVolunteer(newVolunteer.trim());
    newVolunteer = "";
  }

  async function handleRemoveVolunteer(volunteer: string) {
    await modalState?.removeVolunteer(volunteer);
  }
</script>

<div class="space-y-4">
  <div class="card bg-base-200">
    <div class="card-body">
      <h4 class="card-title text-base">Ajouter un volontaire</h4>
      <label class="input">
        <User class="h-4 w-4 opacity-50" />
        <input
          type="text"
          bind:value={newVolunteer}
          placeholder="Nom du volontaire"
          list="volunteers"
          onkeydown={(e) => {
            if (e.key === "Enter") {
              handleAddVolunteer();
            }
          }}
        />
        <datalist id="volunteers">
          {#each productsStore.uniqueWho as volunteer}
            <option value={volunteer}>{volunteer}</option>
          {/each}
        </datalist>
      </label>

      <div class="grid-col mt-6 grid gap-2">
        <div class="text-base-content/70">Volontaires actuels:</div>
        <div class="flex flex-wrap gap-2">
          {#each modalState.whoList as volunteer (volunteer)}
            <div class="badge badge-primary badge-lg gap-2">
              {volunteer}
              <button
                class="btn btn-ghost btn-xs hover:text-error p-0"
                onclick={() => handleRemoveVolunteer(volunteer)}
                disabled={modalState.loading}
              >
                <X class="h-3 w-3" />
              </button>
            </div>
          {/each}
        </div>
      </div>
      <div class="card-actions mt-4 justify-end">
        <button
          class="btn btn-primary btn-sm"
          onclick={handleAddVolunteer}
          disabled={modalState.loading || !isFormValid}
        >
          {#if modalState.loading}
            <span class="loading loading-spinner loading-sm"></span>
          {:else}
            Ajouter
          {/if}
        </button>
      </div>
    </div>
  </div>
</div>
