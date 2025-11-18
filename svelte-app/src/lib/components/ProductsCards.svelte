<script lang="ts">
  import { productsStore } from "../stores/ProductsStore.svelte";
  // utils
  import {
    getProductTypeInfo,
    formatPurchasesWithBadges,
    formatQuantity,
  } from "../utils/products-display";

  // Types
  import type { EnrichedProduct } from "../types/store.types";
  import type { ProductRangeStats } from "../types/store.types";

  import {
    LayoutList,
    Store,
    Users,
    ShoppingCart,
    ListTodo,
    LoaderCircle,
    ShoppingBasket,
    Snowflake,
    CookingPot,
    Utensils,
    Check,
    CircleCheckBig,
    SquarePen,
    Package,
    MessageCircleQuestionMark,
    Clock,
    CircleCheck,
    CircleX,
    ClipboardCheck,
    PackageCheck,
    Pencil,
    Plus,
    MessageCircle,
    MessageCircleMore,
    PlusCircle,
    CirclePlus,
    ArrowRightFromLine,
    ArrowDownCircle,
    CircleArrowDown,
    CircleArrowRight,
    ClipboardPenLine,
    CircleAlert,
    History,
  } from "@lucide/svelte";
  import Tooltip from "./ui/Tooltip.svelte";
  import { globalState } from "../stores/GlobalState.svelte";
  import { formatDateWdDayMonthShort } from "../utils/dateRange";

  // Récupérer les icônes de statut depuis le parent pour éviter la duplication
  const statusIcons = {
    Package,
    MessageCircleQuestionMark,
    ShoppingCart,
    Clock,
    CircleCheck,
    CircleX,
    ClipboardCheck,
    PackageCheck,
  };

  const defaultStats: ProductRangeStats = {
    quantities: [],
    formattedQuantities: "",
    nbRecipes: 0,
    totalAssiettes: 0,
    stockResult: [],
    availableQuantities: [],
    missingQuantities: [],
    formattedAvailableQuantities: "Équilibré",
    hasAvailable: false,
    hasMissing: false,
    concernedDates: [],
    recipesByDate: new Map(),
  };

  interface Props {
    onOpenModal: (productId: string, tab?: string) => void;
    onOpenGroupEditModal: (
      type: "store" | "who",
      productIds: string[],
      products: any[],
    ) => void;
    onOpenGroupPurchaseModal: (products: any[]) => void;
    onQuickValidation: (product: any) => void;
  }

  let {
    onOpenModal,
    onOpenGroupEditModal,
    onOpenGroupPurchaseModal,
    onQuickValidation,
  }: Props = $props();

  const groupedFilteredProducts = $derived(
    productsStore.groupedFilteredProducts,
  );
  const filters = $derived(productsStore.filters);

  const formatedStartDateRange = $derived(
    formatDateWdDayMonthShort(productsStore.dateRange.start),
  );
  const formatedEndDateRange = $derived(
    formatDateWdDayMonthShort(productsStore.dateRange.end),
  );

  const formatedDateRange = $derived.by(() => {
    if (productsStore.dateRange.start !== productsStore.dateRange.end) {
      return (
        "du " +
        formatDateWdDayMonthShort(productsStore.dateRange.start) +
        " au " +
        formatDateWdDayMonthShort(productsStore.dateRange.end)
      );
    } else {
      return "le " + formatDateWdDayMonthShort(productsStore.dateRange.start);
    }
  });
</script>

<div class="space-y-4 rounded-lg">
  {#each Object.entries(groupedFilteredProducts) as [groupKey, gProducts] (groupKey)}
    {@const groupProducts : EnrichedProduct[] = gProducts}
    {#if groupKey !== ""}
      <!-- Header de groupe sticky -->
      {@const groupTypeInfo = getProductTypeInfo(groupKey)}
      <div
        class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"
      >
        <!-- Nom du groupe -->
        <div class="flex items-center gap-2 font-semibold @md:min-w-48">
          {#if filters.groupBy === "store"}
            🏪 {groupKey} ({groupProducts!.length})
          {:else if filters.groupBy === "productType"}
            <div class="text-primary-content flex items-center gap-2">
              <groupTypeInfo.icon class="h-4 w-4" />
              <span>{groupTypeInfo.displayName}</span>
              <span class="text-sm opacity-70">({groupProducts!.length})</span>
            </div>
          {:else}
            📦 {groupKey} ({groupProducts!.length})
          {/if}
        </div>

        <div class="text-primary-content">
          {#if productsStore.dateRange.start !== productsStore.dateRange.end}
            du <span class="font-semibold">{formatedStartDateRange}</span> au
            <span class="font-semibold">{formatedEndDateRange}</span>
          {:else}
            le <span class="font-semibold">{formatedStartDateRange}</span>
          {/if}
        </div>

        <!-- Actions groupées -->
        {#if !productsStore.isEventPassed}
          <div class="flex flex-wrap items-center justify-end gap-2">
            <button
              class="btn btn-sm btn-primary btn-soft"
              onclick={() =>
                onOpenGroupEditModal(
                  "store",
                  groupProducts!.map((p) => p.$id),
                  groupProducts!,
                )}
              title="Attribuer un magasin à tous les produits de ce groupe"
            >
              <Store size={16} />
              <span class="hidden @md:block">Magasin</span>
              <SquarePen size={16} />
            </button>

            <button
              class="btn btn-sm btn-primary btn-soft"
              onclick={() =>
                onOpenGroupEditModal(
                  "who",
                  groupProducts!.map((p) => p.$id),
                  groupProducts!,
                )}
              title="Gérer les volontaires pour tous les produits de ce groupe"
            >
              <Users size={16} />
              <span class="hidden @md:block"> Volontaires </span>
              <SquarePen size={16} />
            </button>

            <!-- Bouton validation groupée -->
            {#if groupProducts!.some((p) => p.displayMissingQuantity !== "✅ Complet")}
              <button
                class="btn btn-sm btn-primary btn-soft"
                onclick={() => onOpenGroupPurchaseModal(groupProducts!)}
                title="Ouvrir le modal d'achat groupé"
              >
                <ShoppingCart size={16} />
                <span class="hidden @md:block"> Achat groupé </span>
                <CircleCheckBig size={16} />
              </button>
            {/if}
          </div>
        {/if}
      </div>
    {/if}

    <!-- Cards des produits du groupe -->
    <div class="space-y-1">
      {#each groupProducts as product (product.$id)}
        {@const stats =
          productsStore.productsStatsByDateRange.get(product.$id) ||
          defaultStats}
        {@const typeInfo = getProductTypeInfo(product.productType)}
        {@const purchasesBadges = formatPurchasesWithBadges(
          product.purchases || [],
        )}
        {@const totalNeededOverride = product.totalNeededOverrideParsed}
        <!-- Card du produit -->
        <div
          class="card bg-base-100 border-base-300 {product.status ===
          'isSyncing'
            ? 'animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40'
            : ''}"
        >
          <div class="card-body p-2">
            <!-- Première ligne: Titre/Type à gauche, Store/Who à droite -->
            <div class="flex items-center justify-between">
              <!-- Section gauche: Titre & Type (prend la place disponible) -->
              <div
                class="flex flex-1 cursor-pointer gap-4"
                role="button"
                tabindex="0"
                onclick={() => onOpenModal(product.$id, "recettes")}
                onkeydown={(e) =>
                  e.key === "Enter" && onOpenModal(product.$id, "recettes")}
              >
                <!-- Nom du produit & type -->
                <div
                  class="ms-4 flex items-center gap-2 text-base font-semibold"
                >
                  <typeInfo.icon
                    class="text-base-content/80 h-4 w-4"
                  />{product.productName}
                  {#if product.previousNames && product.previousNames.length > 0}
                    <div class="text-base-content/60 text-sm font-normal">
                      Ancien: {product.previousNames[0]}
                    </div>
                  {/if}
                </div>
                <!-- icone and sync spinner -->
                <div class="flex gap-1">
                  {#if product.pFrais}
                    <div
                      class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full"
                      title="Produit frais"
                    >
                      <ShoppingBasket class="text-success h-4 w-4" />
                    </div>
                  {/if}
                  {#if product.pSurgel}
                    <div
                      class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full"
                      title="Produit surgelé"
                    >
                      <Snowflake class="text-info h-4 w-4" />
                    </div>
                  {/if}
                </div>
                {#if product.status === "isSyncing"}
                  <div
                    class="text-accent flex items-center gap-1"
                    title="Synchronisation en cours..."
                  >
                    <LoaderCircle class="h-4 w-4 animate-spin" />
                  </div>
                {/if}

                <!-- 📅 Dates concernées -->
                {#if stats.concernedDates.length > 0}
                  <div class="text-base-content/60">
                    <div class="flex flex-wrap gap-1">
                      {#each stats.concernedDates as date (date)}
                        {@const recipes = stats.recipesByDate.get(date) || []}
                        <!-- Wrapper avec tooltip si des recettes sont présentes -->
                        {#if recipes.length > 0}
                          <div
                            class="tooltip"
                            data-tip={recipes.map((r) => r.r).join(", ")}
                          >
                            <div
                              class="badge badge-outline badge-sm hover:badge-primary"
                            >
                              {new Date(date).toLocaleDateString("fr-FR", {
                                weekday: "short",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                        {:else}
                          <div
                            class="badge badge-outline badge-xs hover:badge-primary"
                          >
                            {new Date(date).toLocaleDateString("fr-FR", {
                              weekday: "short",
                              day: "numeric",
                            })}
                          </div>
                        {/if}
                      {/each}
                    </div>
                  </div>
                {/if}
              </div>

              <!-- Section droite: Store & Who (horizontal, wrap) -->
              {#if !productsStore.isEventPassed}
                <div class="ml-4 flex gap-2">
                  <!-- Store -->
                  <button
                    title="Modifier le magasin"
                    class="btn btn-soft btn-sm group relative {product.storeInfo
                      ?.storeName
                      ? 'btn-success'
                      : ''}"
                    onclick={() => onOpenModal(product.$id, "magasins")}
                    onkeydown={(e) =>
                      e.key === "Enter" && onOpenModal(product.$id, "magasins")}
                  >
                    <Store size={18} />
                    {#if product.storeInfo?.storeName}
                      <div class="ml-1">
                        {product.storeInfo.storeName}
                      </div>
                      {#if product.storeInfo?.storeComment}
                        <div class="ml-1">
                          <Tooltip
                            tip={product.storeInfo.storeComment}
                            icon={MessageCircleMore}
                            iconSize={14}
                          />
                        </div>
                      {/if}
                    {:else}
                      <div class="ml-1 text-sm font-medium">?</div>
                    {/if}
                  </button>

                  <!-- Who -->
                  <button
                    title="Modifier les volontaires"
                    class="btn btn-sm btn-soft group relative {product.who &&
                    product.who?.length > 0
                      ? 'btn-success'
                      : ''}"
                    onclick={() => onOpenModal(product.$id, "volontaires")}
                    onkeydown={(e) =>
                      e.key === "Enter" &&
                      onOpenModal(product.$id, "volontaires")}
                  >
                    <Users size={18} />
                    {#if product.who && product.who.length > 0}
                      <div class="ml-1 flex gap-1">
                        {product.who
                          .slice(0, 2)
                          .map((person) => person.slice(0, 3))
                          .join(" | ")}
                        {#if product.who.length > 2}
                          <span class="text-base-content/50 text-xs"
                            >+{product.who.length - 2}</span
                          >
                        {/if}
                      </div>
                    {:else}
                      <div class="ml-1 text-sm font-medium">?</div>
                    {/if}
                  </button>
                </div>
              {:else}
                <!-- Affichage lecture seule en mode archive -->
                <div class="mx-4 flex gap-2 opacity-60">
                  {#if product.storeInfo?.storeName}
                    <div class="flex items-center gap-1 text-sm">
                      <Store size={16} />
                      {product.storeInfo.storeName}
                    </div>
                  {/if}
                  {#if product.who && product.who.length > 0}
                    <div class="flex items-center gap-1 text-sm">
                      <Users size={16} />
                      {product.who.join(", ")}
                    </div>
                  {/if}
                </div>
              {/if}
            </div>

            <!-- Deuxième ligne: Groupe Besoins + Achats + Manquants (flex wrap) -->
            <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing">
              <!-- Besoins -->
              <div
                id="needs-card"
                class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm"
                role="button"
                tabindex="0"
                onclick={() => onOpenModal(product.$id, "recettes")}
                onkeydown={(e) =>
                  e.key === "Enter" && onOpenModal(product.$id, "recettes")}
              >
                <div class="flex flex-wrap gap-x-4 gap-y-0">
                  <div
                    class="text-base-content/80 flex items-center gap-2 text-sm font-medium"
                  >
                    <ListTodo class="h-4 w-4" />
                    Besoins
                  </div>
                  <div class="ms-auto flex items-center gap-4 self-end">
                    <div
                      class="text-base font-bold {stats.hasMissing &&
                      !productsStore.isEventPassed
                        ? 'text-error'
                        : 'text-success'}"
                    >
                      <!-- affichage override -->
                      {#if totalNeededOverride?.totalOverride}
                        <div
                          class="tooltip flex items-center gap-2"
                          data-tip="Besoin total modifié manuellement"
                        >
                          <span class="text-base-content/70 line-through"
                            >{stats.formattedQuantities}</span
                          >
                          <ClipboardPenLine class="h-4 w-4" />
                          {totalNeededOverride.totalOverride.q}
                          {totalNeededOverride.totalOverride.u}
                        </div>
                      {:else}
                        <span> {stats.formattedQuantities}</span>
                      {/if}
                    </div>
                    {#if stats.nbRecipes || stats.totalAssiettes}
                      <div
                        class="text-base-content/70 flex items-center gap-2 text-sm"
                      >
                        <span class="flex items-center gap-1">
                          {stats.nbRecipes}
                          <CookingPot class="h-3 w-3" />
                        </span>
                        <span class="flex items-center gap-1">
                          {stats.totalAssiettes}
                          <Utensils class="h-3 w-3" />
                        </span>
                      </div>
                    {/if}
                  </div>
                </div>

                <!-- Bouton d'achat rapide -->
                {#if !productsStore.isEventPassed && stats.hasMissing}
                  <button
                    class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"
                    onclick={(e) => {
                      e.stopPropagation();
                      onQuickValidation(product);
                    }}
                    title="Acheter le manquant ({stats.formattedAvailableQuantities})"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 14 14"
                      ><path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M.625 0a.625.625 0 1 0 0 1.25h1.818l.205 1.94l.644 6.105a1.626 1.626 0 0 0 1.619 1.455h6.208c.746 0 1.397-.506 1.579-1.23l1.253-5a1.626 1.626 0 0 0-1.579-2.02h-8.54L3.627.56A.625.625 0 0 0 3.006 0zm3.91 9.164L3.964 3.75h8.408c.247 0 .425.23.366.466l-1.253 5a.38.38 0 0 1-.366.284H4.911a.376.376 0 0 1-.376-.336m5.72-3.134a.75.75 0 0 0-1.129-.988l-1.48 1.69l-.526-.395a.75.75 0 1 0-.9 1.2l1.083.813a.75.75 0 0 0 1.015-.106zm1.816 6.845a1.125 1.125 0 1 0-2.25 0a1.125 1.125 0 0 0 2.25 0M4.446 11.75a1.125 1.125 0 1 1 0 2.25a1.125 1.125 0 0 1 0-2.25"
                        clip-rule="evenodd"
                      /></svg
                    >
                    <span class="text-xs"
                      >{stats.formattedAvailableQuantities}</span
                    >
                    {#if globalState.isMobile}
                      <CircleArrowDown size={18} />
                    {:else}
                      <CircleArrowRight size={18} />
                    {/if}
                  </button>
                {:else if !productsStore.isEventPassed}
                  <CircleCheckBig size={24} class="text-success ms-auto" />
                {/if}
                {#if !productsStore.isEventPassed && totalNeededOverride?.hasUnresolvedChangedSinceOverride}
                  <div
                    id="override_alert"
                    class="alert alert-warning alert-soft mt-1 px-1 py-0.5"
                  >
                    <CircleAlert size={18} />
                    <span
                      >Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span
                    >
                  </div>
                {/if}
              </div>

              <!-- Achats -->
              <div
                class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2"
                role="button"
                tabindex="0"
                onclick={() => onOpenModal(product.$id, "achats")}
                onkeydown={(e) =>
                  e.key === "Enter" && onOpenModal(product.$id, "achats")}
              >
                <div class="flex flex-wrap items-start gap-0 self-start">
                  <div
                    class="text-base-content/80 flex items-center gap-2 text-sm font-medium"
                  >
                    <ShoppingCart class="h-4 w-4" />
                    Achats / Récup:
                  </div>
                  <div
                    class="text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity {productsStore.isEventPassed
                      ? ''
                      : 'group-hover:opacity-100'} sm:opacity-0"
                  >
                    ajouter un achat
                  </div>
                </div>
                <!-- Liste des achats -->
                <div class="flex flex-wrap gap-1.5">
                  {#each purchasesBadges as purchase, index (index)}
                    {@const IconComponent = statusIcons[purchase.icon]}
                    <div
                      class="badge badge-outline flex items-center gap-1 {purchase.badgeClass}"
                    >
                      <IconComponent class="h-4 w-4" />
                      <span class="text-sm font-medium text-nowrap">
                        {purchase.quantity}
                        {purchase.unit}
                      </span>
                    </div>
                  {/each}
                  {#if purchasesBadges.length === 0}
                    <span class="text-base-content/50 text-xs italic"
                      >aucun</span
                    >
                  {/if}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="divider my-0.5 py-0"></div> -->
      {/each}
    </div>
  {/each}
</div>

{#if Object.values(groupedFilteredProducts).flat().length === 0}
  <div class="py-8 text-center">
    <div class="alert alert-info">
      <div>
        <svg
          class="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>Aucun produit trouvé avec les filtres actuels</span>
      </div>
    </div>
  </div>
{/if}
