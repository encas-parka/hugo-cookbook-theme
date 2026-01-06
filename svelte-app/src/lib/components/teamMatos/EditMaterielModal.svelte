<script lang="ts">
  import { X, Save, Package, MapPin, Users, RotateCcw } from "@lucide/svelte";
  import { materielStore } from "$lib/stores/MaterielStore.svelte";
  import { formatDateDayMonthShort } from "$lib/utils/date-helpers";
  import ModalContainer from "$lib/components/ui/modal/ModalContainer.svelte";
  import ModalHeader from "$lib/components/ui/modal/ModalHeader.svelte";
  import ModalContent from "$lib/components/ui/modal/ModalContent.svelte";
  import ModalFooter from "$lib/components/ui/modal/ModalFooter.svelte";

  interface Props {
    isOpen: boolean;
    materielId: string | null;
    onClose: () => void;
    onSuccess?: () => void;
  }

  let { isOpen, materielId, onClose, onSuccess }: Props = $props();

  // État du formulaire
  let name = $state("");
  let description = $state("");
  let type = $state<string>("");
  let quantity = $state(1);
  let isOperational = $state(true);
  let location = $state("");
  let shareable = $state(false);

  let loading = $state(false);
  let error = $state<string | null>(null);

  // Charger les données du matériel quand l'ID change
  $effect(() => {
    if (!isOpen || !materielId) {
      resetForm();
      return;
    }

    const materiel = materielStore.getMaterielById(materielId);
    if (materiel) {
      name = materiel.name;
      description = materiel.description || "";
      type = materiel.type || "";
      quantity = materiel.quantity;
      location = materiel.location || "";
    }
  });

  // Réinitialiser le formulaire
  function resetForm() {
    name = "";
    description = "";
    type = "";
    quantity = 1;
    isOperational = true;
    location = "";
    shareable = false;
    error = null;
  }

  // Mettre à jour le matériel
  async function updateMateriel() {
    if (!materielId) {
      error = "ID du matériel manquant";
      return;
    }

    if (!name.trim()) {
      error = "Le nom du matériel est requis";
      return;
    }

    if (quantity < 1) {
      error = "La quantité doit être au moins de 1";
      return;
    }

    loading = true;
    error = null;

    try {
      await materielStore.updateMateriel(materielId, {
        name: name.trim(),
        description: description.trim() || undefined,
        type: type || undefined,
        quantity,
        isOperational,
        location: location.trim() || undefined,
        shareable,
      });

      console.log("[EditMaterielModal] Matériel mis à jour:", materielId);
      onSuccess?.();
      resetForm();
      onClose();
    } catch (err: any) {
      error = err.message || "Erreur lors de la mise à jour du matériel";
      console.error("[EditMaterielModal] Erreur:", err);
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
      updateMateriel();
    }
  }

  // Données du matériel actuel
  const currentMateriel = $derived(
    materielId ? materielStore.getMaterielById(materielId) : null,
  );
</script>

<ModalContainer {isOpen} onClose={handleClose}>
  <ModalHeader title="Modifier le matériel" onClose={handleClose} />

  <ModalContent>
    {#if currentMateriel}
      <!-- Informations du propriétaire -->
      <div class="alert alert-soft mb-4">
        <div class="flex items-center gap-2 text-sm">
          <Users class="h-4 w-4" />
          <div>
            {#if currentMateriel.ownerData?.userId}
              <div>
                <span class="font-semibold">Propriétaire :</span>
                {currentMateriel.ownerData.userName}
              </div>
            {:else if currentMateriel.ownerData?.teamId}
              <div>
                <span class="font-semibold">Équipe propriétaire :</span>
                {currentMateriel.ownerData.teamName}
              </div>
            {/if}
          </div>
        </div>
      </div>

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
          <p class="label">
            <span class="label-text-alt text-base-content/60">
              Quantité totale : {currentMateriel.quantity} | Disponible : {currentMateriel.availableQuantity}
              | Emprunté : {currentMateriel.totalLoanedQuantity}
            </span>
          </p>
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

      <!-- Emprunts en cours -->
      {#if currentMateriel.loans.length > 0}
        <div class="divider">Emprunts en cours</div>
        <div class="space-y-2">
          {#each currentMateriel.loans as loan, index}
            <div class="card card-compact border-base-300 bg-base-200 border-2">
              <div class="card-body">
                <div class="flex justify-between">
                  <div>
                    <div class="font-semibold">
                      {loan.responsible} - {loan.quantity} unité(s)
                    </div>
                    <div class="text-base-content/70 text-sm">
                      Du {formatDateDayMonthShort(loan.startDate)} au
                      {formatDateDayMonthShort(loan.endDate)}
                    </div>
                    <div class="text-base-content/70 text-sm">
                      {loan.reason}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
        <p class="text-base-content/60 text-sm">
          💡 La gestion des emprunts sera disponible prochainement
        </p>
      {/if}
    {:else}
      <div class="alert alert-warning">
        <span>Matériel introuvable</span>
      </div>
    {/if}
  </ModalContent>

  <ModalFooter>
    <button class="btn btn-ghost" onclick={handleClose} disabled={loading}>
      Annuler
    </button>
    <button
      class="btn btn-primary"
      onclick={updateMateriel}
      disabled={loading || !currentMateriel || !name.trim() || quantity < 1}
    >
      {#if loading}
        <span class="loading loading-spinner loading-sm"></span>
      {:else}
        <Save class="h-5 w-5" />
      {/if}
      Enregistrer
    </button>
  </ModalFooter>
</ModalContainer>
