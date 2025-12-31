<script lang="ts">
  import {
    PencilLine,
    MessageCircle,
    SquarePen,
    CookingPot,
    Utensils,
    MessageSquare,
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

    // Récupérer les valeurs actuelles stockées
    const currentOverride =
      modalState.product?.totalNeededOverrideParsed?.totalOverride;
    const currentComment =
      modalState.product?.totalNeededOverrideParsed?.comment || "";

    // Vérifier si les valeurs ont changé
    const hasChanged =
      storedQuantity !== currentOverride?.q ||
      storedUnit !== currentOverride?.u ||
      comment !== currentComment;

    if (hasChanged) {
      const overrideData: TotalNeededOverrideData = {
        totalOverride: { q: storedQuantity, u: storedUnit },
        comment,
      };

      await modalState.setOverride(overrideData);
    }

    // Fermer le mode édition dans tous les cas
    modalState.uiStates.overrideManagerEditMode = false;
  }

  async function handleRemoveOverride() {
    if (!modalState) return;
    await modalState.removeOverride();

    modalState.uiStates.overrideManagerEditMode = false;
  }
</script>

{#if modalState.product}
  <div class="space-y-3">
    <!-- Ancienne quantité calculée -->
    {#if overrideData?.oldTotalDisplay && hasUnresolvedChangedSinceOverride}
      <div
        class="rounded-box bg-base-200 flex items-center justify-between px-4 py-3"
      >
        <span class="text-base-content/70">Ancien calcul</span>
        <span class="font-bold">{overrideData?.oldTotalDisplay}</span>
      </div>
    {/if}

    <!-- Besoins calculés -->
    <div
      class="rounded-box bg-base-200 flex items-center justify-between px-4 py-3"
    >
      <span class="text-base-content/70 font-medium">Besoin total calculés</span
      >
      <div class="flex items-center gap-3">
        <span class="text-base-content/60 flex items-center gap-1 text-xs">
          {modalState.product.nbRecipes}
          <CookingPot class="h-3 w-3" />
        </span>
        <span class="text-base-content/60 flex items-center gap-1 text-xs">
          {modalState.product.totalAssiettes}
          <Utensils class="h-3 w-3" />
        </span>
        <span class="ms-3 font-bold"
          >{modalState.product.displayTotalNeeded}</span
        >
      </div>
    </div>

    <!-- Mode édition des besoins redéfinis -->
    {#if editMode}
      <div
        class="rounded-box bg-primary/10 flex flex-wrap items-center gap-3 px-4 py-3"
        in:slide
      >
        <span class="text-base-content/70 font-medium"
          >Besoin redéfinis manuellement</span
        >
        <QuantityInput bind:quantity bind:unit />
        <CommentText bind:value={comment} />
        <div class="ms-auto flex items-center gap-4">
          <button class="btn-link" onclick={handleRemoveOverride}>
            supprimer</button
          >

          <button
            class="btn btn-primary btn-sm"
            onclick={handleSetOverride}
            disabled={modalState.loading || !isFormValid}
          >
            {#if modalState.loading}
              <span class="loading loading-spinner loading-sm"></span>
            {:else}
              ✓
            {/if}
          </button>
        </div>
      </div>
    {:else}
      <!-- Affichage des besoins redéfinis ou bouton d'action -->
      {#if overrideDisplay && overrideData}
        <div
          class="rounded-box bg-primary/10 flex items-center justify-between px-4 py-3"
        >
          <div class="flex items-center gap-3">
            <span class="text-base-content/70 font-medium"
              >Besoins redéfinis manuellement</span
            >
            {#if !isArchiveMode}
              <button
                class="btn btn-ghost btn-sm btn-circle"
                onclick={() =>
                  (modalState.uiStates.overrideManagerEditMode = true)}
                title="Modifier"
              >
                <PencilLine size={16} />
              </button>
            {/if}
            {#if overrideData.comment}
              <div class="chat-bubble relative text-sm">
                {overrideData.comment}
                <MessageSquare
                  size={12}
                  class="text-base-content/60 absolute top-0 right-0"
                />
              </div>
            {/if}
          </div>
          <div class="flex items-center gap-2">
            <span class="font-bold">{overrideDisplay}</span>
          </div>
        </div>
      {:else if !isArchiveMode}
        <!-- Bouton Redéfinir les besoins -->
        <div class="flex justify-end">
          <button
            class="btn btn-primary btn-sm btn-soft"
            onclick={() => (modalState.uiStates.overrideManagerEditMode = true)}
          >
            Redéfinir manuellement les besoins
            <SquarePen size={16} />
          </button>
        </div>
      {/if}
    {/if}
  </div>
{/if}

<style>
</style>
