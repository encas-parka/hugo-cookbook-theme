<script lang="ts">
  import {
    PencilLine,
    MessageCircle,
    SquarePen,
    CookingPot,
    Utensils,
  } from "@lucide/svelte";
  import type {
    ProductModalStateType,
    TotalNeededOverrideData,
  } from "$lib/types/store.types.js";
  import QuantityInput from "../ui/QuantityInput.svelte";
  import CommentText from "../ui/CommentText.svelte";
  import { fade, slide } from "svelte/transition";
  import {
    autoConvertUnit,
    applyStandardRounding,
  } from "$lib/utils/QuantityFormatter";

  interface Props {
    modalState: ProductModalStateType;
    isArchiveMode: boolean;
  }

  let { modalState, isArchiveMode }: Props = $props();

  // Données dérivées du store
  const overrideData = $derived(modalState.product?.totalNeededOverrideParsed);
  const overrideDisplay = $derived(modalState.product?.displayTotalOverride);
  const totalNeededArray = $derived(modalState.product?.totalNeededArray);
  let hasUnresolvedChangedSinceOverride = $derived(
    overrideData?.hasUnresolvedChangedSinceOverride,
  );

  // État du formulaire - utilisation de l'état centralisé pour editMode
  let editMode = $derived(modalState.uiStates.overrideManagerEditMode);

  // Valeurs brutes depuis le stockage (toujours en gr./ml pour les poids/volumes)
  let rawSourceQuantity = $derived(
    modalState.product?.totalNeededOverrideParsed?.totalOverride.q ||
      modalState.product?.totalNeededArray[0]?.q ||
      0,
  );
  let rawSourceUnit = $derived(
    modalState.product?.totalNeededOverrideParsed?.totalOverride.u ||
      modalState.product?.totalNeededArray[0]?.u ||
      "",
  );

  // Conversion pour l'affichage utilisateur-friendly (kg/l si >= 1000)
  // Utiliser $state pour permettre la modification par l'utilisateur
  function getInitialValues() {
    if (!rawSourceQuantity || !rawSourceUnit) {
      return { quantity: 0, unit: "" };
    }
    const { q: convertedQty, u: convertedUnit } = autoConvertUnit(
      rawSourceQuantity,
      rawSourceUnit,
    );
    return {
      quantity: applyStandardRounding(convertedQty, convertedUnit),
      unit: convertedUnit,
    };
  }

  let quantity = $state(getInitialValues().quantity);
  let unit = $state(getInitialValues().unit);
  let comment = $state(
    modalState.product?.totalNeededOverrideParsed?.comment || "",
  );

  // Réinitialiser les valeurs quand on entre en mode édition
  $effect(() => {
    if (editMode) {
      const initialValues = getInitialValues();
      quantity = initialValues.quantity;
      unit = initialValues.unit;
      comment = modalState.product?.totalNeededOverrideParsed?.comment || "";
    }
  });

  let isFormValid = $derived(quantity > 0 && unit.trim() !== "");

  async function handleSetOverride() {
    if (!modalState) return;

    // Conversion pour le stockage (kg→gr, l→ml) afin de normaliser
    const { q: storedQuantity, u: storedUnit } = autoConvertUnit(
      quantity,
      unit,
    );

    const overrideData: TotalNeededOverrideData = {
      totalOverride: { q: storedQuantity, u: storedUnit },
      comment,
    };

    await modalState.setOverride(overrideData);
    modalState.uiStates.overrideManagerEditMode = false;
  }

  async function handleRemoveOverride() {
    if (!modalState) return;
    await modalState.removeOverride();
    modalState.uiStates.overrideManagerEditMode = false;
  }
</script>

{#if modalState.product}
  <div class="mb-2 space-y-4">
    <!-- Quantité calculée affichée en référence -->

    <div class="bg-base-200 relative mb-4 flex rounded-xl p-4">
      <div class="grid">
        <div class="flex gap-4">
          {#if overrideData?.oldTotalDisplay && hasUnresolvedChangedSinceOverride}
            <div class="card bg-base-100 flex justify-between px-4 py-2">
              <div class="stat-title">Ancienne quantité calculée</div>
              <div class="stat-value text-content-base/90 text-end text-lg">
                {overrideData?.oldTotalDisplay}
              </div>
              <div class="stat-desc italic">
                avant la mise a jour des recettes ou menus
              </div>
            </div>
          {/if}

          <div class="card bg-base-100 flex justify-between px-4 py-2">
            <div class="stat-title">Besoins calculées</div>
            <div class="stat-value text-content-base/90 text-end text-lg">
              {modalState.product.displayTotalNeeded}
            </div>
            <div class="ms-auto flex flex-wrap gap-4">
              <span class="flex items-center gap-1">
                {modalState.product.nbRecipes}
                <CookingPot class="h-3 w-3" />
              </span>
              <span class="flex items-center gap-1">
                {modalState.product.totalAssiettes}
                <Utensils class="h-3 w-3" />
              </span>
            </div>
            {#if overrideData?.oldTotalDisplay && hasUnresolvedChangedSinceOverride}
              <div class="stat-desc italic">Recettes actuelles</div>
            {/if}
          </div>

          <!-- Besoin redéfini par l'utilisateur -->
          {#if overrideDisplay && overrideData}
            <div class="card bg-base-100 flex justify-between px-4 py-2">
              <div class="stat-title">Besoins redéfinie manuellement</div>
              <div class="stat-value text-content-base/70 text-end text-lg">
                {overrideDisplay}
              </div>
              {#if overrideData.comment}
                <div class="chat-bubble relative ms-auto mt-2 text-sm">
                  {overrideData.comment}
                  <MessageCircle
                    size={16}
                    class="text-base-content/60 absolute right-1 bottom-1 "
                  />
                </div>
              {/if}
            </div>
          {/if}
          {#if !isArchiveMode && !editMode}
            <div class="ms-auto mt-auto">
              <button
                class="btn btn-primary btn-sm btn-soft"
                onclick={() =>
                  (modalState.uiStates.overrideManagerEditMode = true)}
              >
                {#if overrideData}
                  Redéfinir les besoins
                {:else}
                  Définir manuellement les besoins
                {/if}
                <SquarePen size={16} />
              </button>
            </div>
          {/if}
        </div>

        {#if editMode}
          <div class="mt-4 flex flex-wrap items-center gap-4" in:slide>
            <QuantityInput bind:quantity bind:unit />
            <CommentText bind:value={comment} />
            <div class="ms-auto">
              <button
                class="btn btn-ghost btn-sm"
                onclick={() =>
                  (modalState.uiStates.overrideManagerEditMode = false)}
              >
                Annuler
              </button>
              <button
                class="btn btn-soft btn-primary btn-sm"
                onclick={handleRemoveOverride}
                disabled={modalState.loading}
              >
                {#if modalState.loading}
                  <span class="loading loading-spinner loading-sm"></span>
                {:else}
                  Réinitialiser le total calculé ({modalState.product
                    .displayTotalNeeded}).
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
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
</style>
