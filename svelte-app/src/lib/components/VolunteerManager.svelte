<script lang="ts">
  import { User, UserPlus, Users, X } from "@lucide/svelte";
  import type { ProductModalStateType } from "../types/store.types.js";
  import { productsStore } from "../stores/ProductsStore.svelte.js";
  import BtnGroupCheck from "./ui/BtnGroupCheck.svelte";

  interface Props {
    modalState: ProductModalStateType;
  }

  let { modalState }: Props = $props();

  // État local pour le formulaire
  let localVolunteerList = $state<string[]>([...modalState.whoList]);
  let newVolunteerName = $state("");

  // Créer la liste des items pour BtnGroupCheck
  const volunteerItems = $derived.by(() => {
    // Combiner uniqueWho et localVolunteerList, puis dédupliquer
    const allVolunteers = new Set([
      ...productsStore.uniqueWho,
      ...localVolunteerList,
    ]);

    return Array.from(allVolunteers).map((who) => ({
      id: who,
      label: who,
      selected: localVolunteerList.includes(who),
    }));
  });

  // Validation : formulaire valide si la liste a changé
  const isFormValid = $derived(
    JSON.stringify([...localVolunteerList].sort()) !==
      JSON.stringify([...modalState.whoList].sort()),
  );

  function handleAddVolunteer(name: string) {
    const trimmedName = name.trim();
    if (trimmedName && !localVolunteerList.includes(trimmedName)) {
      // Mutation sécurisée avec Svelte 5
      localVolunteerList = [...localVolunteerList, trimmedName];
    }
  }

  function handleRemoveVolunteer(volunteer: string) {
    // Mutation sécurisée avec Svelte 5
    localVolunteerList = localVolunteerList.filter((v) => v !== volunteer);
  }

  function handleToggleVolunteer(volunteerId: string) {
    if (localVolunteerList.includes(volunteerId)) {
      handleRemoveVolunteer(volunteerId);
    } else {
      handleAddVolunteer(volunteerId);
    }
  }

  // Valider toutes les modifications
  async function handleValidate() {
    if (!isFormValid || !modalState) return;

    await modalState.setWho(localVolunteerList);
  }

  // Annuler les modifications
  function handleCancel() {
    localVolunteerList = [...modalState.whoList];
    newVolunteerName = "";
  }

  function handleQuickAdd() {
    if (newVolunteerName.trim()) {
      handleAddVolunteer(newVolunteerName);
      newVolunteerName = "";
    }
  }
</script>

<div class="space-y-4">
  <div class="card bg-base-200">
    <div class="card-body">
      <h4 class="card-title text-base">Gérer les volontaires</h4>
      <p class="mb-4 text-sm opacity-75">
        Ajoutez ou retirez des volontaires pour ce produit.
      </p>

      <div class="space-y-4">
        <!-- Ajout rapide -->
        <div class="flex gap-2">
          <label class="input w-72">
            <User class="h-4 w-4 opacity-50" />
            <input
              type="text"
              class="w-full"
              placeholder="Ajouter un volontaire..."
              bind:value={newVolunteerName}
              onkeydown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleQuickAdd();
                }
              }}
              disabled={modalState.loading}
            />
          </label>

          <button
            class="btn btn-square btn-primary"
            onclick={handleQuickAdd}
            disabled={modalState.loading || !newVolunteerName.trim()}
          >
            <UserPlus size={16} />
          </button>
        </div>

        <!-- Gestion des volontaires avec BtnGroupCheck -->
        <div>
          <h5 class="mb-2 font-medium">Selection rapide</h5>
          <BtnGroupCheck
            items={volunteerItems}
            onToggleItem={handleToggleVolunteer}
            showIcon={true}
          />
        </div>
      </div>

      <!-- Actions -->
      <div class="card-actions justify-end">
        <button
          class="btn btn-ghost btn-sm"
          onclick={handleCancel}
          disabled={modalState.loading}
        >
          Annuler
        </button>
        <button
          class="btn btn-primary btn-sm"
          onclick={handleValidate}
          disabled={modalState.loading || !isFormValid}
        >
          {#if modalState.loading}
            <span class="loading loading-spinner loading-sm"></span>
          {:else}
            Valider
          {/if}
        </button>
      </div>
    </div>
  </div>
</div>
