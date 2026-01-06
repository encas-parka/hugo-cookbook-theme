<script lang="ts">
  import { X, Plus, Package, MapPin, Users } from "@lucide/svelte";
  import { materielStore } from "$lib/stores/MaterielStore.svelte";
  import { nativeTeamsStore } from "$lib/stores/NativeTeamsStore.svelte";
  import ModalContainer from "$lib/components/ui/modal/ModalContainer.svelte";
  import ModalHeader from "$lib/components/ui/modal/ModalHeader.svelte";
  import ModalContent from "$lib/components/ui/modal/ModalContent.svelte";
  import ModalFooter from "$lib/components/ui/modal/ModalFooter.svelte";

  interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: (materielId: string) => void;
  }

  let { isOpen, onClose, onSuccess }: Props = $props();

  // État du formulaire
  let name = $state("");
  let description = $state("");
  let type = $state<string>("");
  let quantity = $state(1);
  let isOperational = $state(true);
  let location = $state("");
  let shareable = $state(false);
  let ownerType = $state<"me" | "team">("me");
  let selectedTeamId = $state("");

  let loading = $state(false);
  let error = $state<string | null>(null);

  // Réinitialiser le formulaire
  function resetForm() {
    name = "";
    description = "";
    type = "";
    quantity = 1;
    isOperational = true;
    location = "";
    shareable = false;
    ownerType = "me";
    selectedTeamId = "";
    error = null;
  }

  // Créer le matériel
  async function createMateriel() {
    if (!name.trim()) {
      error = "Le nom du matériel est requis";
      return;
    }

    if (quantity < 1) {
      error = "La quantité doit être au moins de 1";
      return;
    }

    if (ownerType === "team" && !selectedTeamId) {
      error = "Veuillez sélectionner une équipe";
      return;
    }

    loading = true;
    error = null;

    try {
      const materiel = await materielStore.createMateriel({
        name: name.trim(),
        description: description.trim() || undefined,
        type: type || undefined,
        quantity,
        location: location.trim() || undefined,
        ownerType,
        teamId: selectedTeamId || undefined,
      });

      console.log("[CreateMaterielModal] Matériel créé:", materiel);
      onSuccess?.(materiel.$id);
      resetForm();
      onClose();
    } catch (err: any) {
      error = err.message || "Erreur lors de la création du matériel";
      console.error("[CreateMaterielModal] Erreur:", err);
    } finally {
      loading = false;
    }
  }

  // Fermer et réinitialiser
  function handleClose() {
    resetForm();
    onClose();
  }

  // Gestion de la touche Entrée
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      createMateriel();
    }
  }
</script>

<ModalContainer {isOpen} onClose={handleClose}>
  <ModalHeader title="Ajouter du matériel" onClose={handleClose} />

  <ModalContent>
    <form onsubmit={(e) => e.preventDefault()} class="space-y-4">
      <!-- Nom * -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Nom du matériel *</legend>
        <label class="validator input w-full">
          <input
            type="text"
            class="grow"
            required
            bind:value={name}
            placeholder="Ex: Mixeur professionnel"
            maxlength="100"
            disabled={loading}
            onkeydown={handleKeydown}
          />
        </label>
      </fieldset>

      <!-- Description -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Description</legend>
        <textarea
          class="textarea w-full"
          rows="3"
          bind:value={description}
          placeholder="Décrivez le matériel..."
          maxlength="500"
          disabled={loading}
        ></textarea>
      </fieldset>

      <!-- Type -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Type</legend>
        <select class="select w-full" bind:value={type} disabled={loading}>
          <option value="">Sélectionner...</option>
          <option value="electronic">Électronique</option>
          <option value="manual">Manuel</option>
          <option value="cooking">Cuisine</option>
          <option value="other">Autre</option>
        </select>
      </fieldset>

      <!-- Quantité * -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Quantité *</legend>
        <label class="validator input w-full">
          <input
            type="number"
            class="grow"
            required
            min="1"
            bind:value={quantity}
            disabled={loading}
          />
        </label>
      </fieldset>

      <!-- Localisation -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Localisation</legend>
        <label class="input w-full">
          <input
            type="text"
            class="grow"
            bind:value={location}
            placeholder="Ex: Bureau, Stock, Cuisine..."
            disabled={loading}
          />
        </label>
      </fieldset>

      <!-- Propriétaire * -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend flex items-center gap-2">
          <Users class="h-4 w-4" />
          Propriétaire *
        </legend>
        <select class="select w-full" bind:value={ownerType} disabled={loading}>
          <option value="me">Moi</option>
          <option value="team">Une de mes équipes</option>
        </select>
      </fieldset>

      {#if ownerType === "team"}
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Équipe *</legend>
          <select
            class="validator select w-full"
            bind:value={selectedTeamId}
            required
            disabled={loading}
          >
            <option value="">Sélectionner une équipe...</option>
            {#each nativeTeamsStore.myTeams as team}
              <option value={team.$id}>{team.name}</option>
            {/each}
          </select>
        </fieldset>
      {/if}

      <!-- Options -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Options</legend>

        <!-- Partageable -->
        <label class="label cursor-pointer justify-start gap-3">
          <input
            type="checkbox"
            class="toggle toggle-primary"
            bind:checked={shareable}
            disabled={loading}
          />
          <span class="label-text"> Matériel partageable entre équipes </span>
        </label>

        <!-- Opérationnel -->
        <label class="label cursor-pointer justify-start gap-3">
          <input
            type="checkbox"
            class="toggle toggle-success"
            bind:checked={isOperational}
            disabled={loading}
          />
          <span class="label-text">Matériel en état opérationnel</span>
        </label>
      </fieldset>

      <!-- Message d'erreur -->
      {#if error}
        <div class="alert alert-error">
          <span class="text-sm">{error}</span>
        </div>
      {/if}
    </form>
  </ModalContent>

  <ModalFooter>
    <button class="btn btn-ghost" onclick={handleClose} disabled={loading}>
      Annuler
    </button>
    <button
      class="btn btn-primary"
      onclick={createMateriel}
      disabled={loading ||
        !name.trim() ||
        quantity < 1 ||
        (ownerType === "team" && !selectedTeamId)}
    >
      {#if loading}
        <span class="loading loading-spinner loading-sm"></span>
      {:else}
        <Plus class="h-5 w-5" />
      {/if}
      Créer
    </button>
  </ModalFooter>
</ModalContainer>
