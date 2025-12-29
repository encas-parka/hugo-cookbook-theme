<script lang="ts">
  import { productsStore } from "$lib/stores/ProductsStore.svelte";
  // utils
  import {
    getProductTypeInfo,
    formatPurchasesWithBadges,
  } from "$lib/utils/products-display";

  // Types
  import type { ProductRangeStats } from "$lib/types/store.types";
  import { ProductModel } from "$lib/models/ProductModel.svelte";

  import {
    Store,
    Users,
    ShoppingCart,
    Check,
    ListTodo,
    LoaderCircle,
    ShoppingBasket,
    Snowflake,
    CookingPot,
    Utensils,
    CircleCheckBig,
    SquarePen,
    Package,
    MessageCircleQuestionMark,
    Clock,
    CircleCheck,
    CircleX,
    ClipboardCheck,
    PackageCheck,
    MessageCircleMore,
    CircleArrowDown,
    CircleArrowRight,
    ClipboardPenLine,
    CircleAlert,
  } from "@lucide/svelte";
  import Tooltip from "$lib/components/ui/Tooltip.svelte";
  import DateBadge from "$lib/components/ui/DateBadge.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { formatDateWdDayMonthShort } from "$lib/utils/date-helpers";
  import { calculateDateDisplayInfo } from "$lib/utils/dateRange";

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
    Check,
  };

  const defaultStats: ProductRangeStats = {
    quantities: [],
    formattedQuantities: "",
    nbRecipes: 0,
    totalAssiettes: 0,
    stockResult: [],
    availableQuantities: [],
    missingQuantities: [],
    formattedMissingQuantities: "",
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
    onQuickValidation: (product: any, productInDateRange: any) => void;
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
  const filters = productsStore.filters;

  const formatedStartDateRange = formatDateWdDayMonthShort(
    productsStore.dateStore.start,
  );
  const formatedEndDateRange = formatDateWdDayMonthShort(
    productsStore.dateStore.end,
  );

  // Dérivé pour déterminer si les boutons d'action doivent être affichés
  const shouldShowActionButtons = $derived(
    !productsStore.dateStore.isEventPassed &&
      !productsStore.dateStore.hasPastDatesInRange,
  );
</script>

<div class="space-y-4 rounded-lg print:hidden">
  {#each Object.entries(groupedFilteredProducts) as [groupKey, gProducts] (groupKey)}
    {@const groupProducts : ProductModel[] = gProducts}
    {#if groupKey !== ""}
      <!-- Header de groupe sticky -->
      {@const groupTypeInfo = getProductTypeInfo(groupKey)}
      <div
        class="bg-primary @container sticky top-16 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-md @md:flex-nowrap print:shadow-none"
      >
        <!-- Nom du groupe -->
        <div class="flex items-center gap-2 font-bold md:text-lg @md:min-w-48">
          {#if filters.groupBy === "store"}
            <div class="text-primary-content flex items-center gap-2">
              <Store class="size-4 md:size-5" />
              {groupKey} ({groupProducts!.length})
            </div>
          {:else if filters.groupBy === "productType"}
            <div class="text-primary-content flex items-center gap-2">
              <groupTypeInfo.icon class="size-4 md:size-5" />
              <span>{groupTypeInfo.displayName}</span>
              <span class="text-sm opacity-70">({groupProducts!.length})</span>
            </div>
          {:else}
            📦 {groupKey} ({groupProducts!.length})
          {/if}
        </div>

        <div class="text-primary-content">
          {#if productsStore.dateStore.isFullRange}
            <div class="font-semibold">Sur toute la période</div>
          {:else if productsStore.dateStore.start !== productsStore.dateStore.end}
            du <span class="font-semibold">{formatedStartDateRange}</span> au
            <span class="font-semibold">{formatedEndDateRange}</span>
          {:else}
            le <span class="font-semibold">{formatedStartDateRange}</span>
          {/if}
        </div>

        <!-- Actions groupées -->
        {#if shouldShowActionButtons}
          <div class="ms-auto flex flex-wrap items-center justify-end gap-2">
            <button
              class="btn btn-sm btn-primary btn-soft"
              onclick={() =>
                onOpenGroupEditModal(
                  "store",
                  groupProducts!.map((p) => p.data.$id),
                  groupProducts!.map((p) => p.data),
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
                  groupProducts!.map((p) => p.data.$id),
                  groupProducts!.map((p) => p.data),
                )}
              title="Gérer les volontaires pour tous les produits de ce groupe"
            >
              <Users size={16} />
              <span class="hidden @md:block"> Volontaires </span>
              <SquarePen size={16} />
            </button>

            <!-- Bouton validation groupée -->
            {#if groupProducts!.some((p) => p.data.displayMissingQuantity !== "✅ Complet")}
              <button
                class="btn btn-sm btn-primary btn-soft"
                onclick={() =>
                  onOpenGroupPurchaseModal(groupProducts!.map((p) => p.data))}
                title="Ouvrir le modal d'achat groupé"
              >
                <ShoppingCart size={16} />
                <span class="hidden @md:block"> Achat groupé </span>
                <CircleCheckBig size={16} />
              </button>
            {/if}
          </div>
        {:else if productsStore.dateStore.hasPastDatesInRange}
          <div class="flex flex-wrap items-center justify-end gap-2">
            <div
              class="alert px-4 py-1"
              title="Contient des dates passées - actions non disponibles"
            >
              <Clock size={16} />
              <span class="hidden @md:block">
                Période partiellement passée
              </span>
            </div>
          </div>
        {/if}
      </div>
    {/if}

    <!-- Cards des produits du groupe -->
    <div class="space-y-1">
      {#each groupProducts as productModel (productModel.data.$id)}
        {@const product = productModel.data}
        {@const productInDateRange = productModel.stats}
        {@const typeInfo = getProductTypeInfo(product.productType)}
        {@const purchasesBadges = formatPurchasesWithBadges(
          product.purchases || [],
        )}
        {@const totalNeededOverride = product.totalNeededOverrideParsed}
        <!-- Card du produit -->
        <div
          class="card bg-base-100 border-base-300 {product.status ===
          'isSyncing'
            ? 'border-accent bg-accent/30 animate-pulse border-2'
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
                  {#if !product.productHugoUuid}
                    <div
                      class="tooltip"
                      data-tip="Ajouté manuellement, ne fait pas partie des recette"
                    >
                      <ClipboardPenLine class="text-warning h-4 w-4" />
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
                {#if productInDateRange.concernedDates.length > 0}
                  <div class="text-base-content/60">
                    <div class="flex flex-wrap gap-1">
                      {#each productInDateRange.concernedDates as date (date)}
                        {@const recipes =
                          productInDateRange.recipesByDate.get(date) || []}
                        {@const dateDisplayInfo =
                          productModel.data.dateDisplayInfo[date] ||
                          calculateDateDisplayInfo(date)}
                        <DateBadge {dateDisplayInfo} {recipes} />
                      {/each}
                    </div>
                  </div>
                {/if}
              </div>

              <!-- Section droite: Store & Who (horizontal, wrap) -->
              {#if shouldShowActionButtons}
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
                class="bg-base-200 hover:bg-base-300 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm"
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
                      class="text-base font-bold {productInDateRange.hasMissing &&
                      shouldShowActionButtons
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
                            >{productInDateRange.formattedQuantities}</span
                          >
                          <ClipboardPenLine class="h-4 w-4" />
                          {totalNeededOverride.totalOverride.q}
                          {totalNeededOverride.totalOverride.u}
                        </div>
                      {:else}
                        <span> {productInDateRange.formattedQuantities}</span>
                      {/if}
                    </div>
                    {#if productInDateRange.nbRecipes || productInDateRange.totalAssiettes}
                      <div
                        class="text-base-content/70 flex items-center gap-2 text-sm"
                      >
                        <span class="flex items-center gap-1">
                          {productInDateRange.nbRecipes}
                          <CookingPot class="h-3 w-3" />
                        </span>
                        <span class="flex items-center gap-1">
                          {productInDateRange.totalAssiettes}
                          <Utensils class="h-3 w-3" />
                        </span>
                      </div>
                    {/if}
                  </div>
                </div>

                <!-- Bouton d'achat rapide -->
                {#if shouldShowActionButtons && productInDateRange.hasMissing}
                  <button
                    class="btn btn-sm btn-soft btn-ghost hover:btn-success ms-auto"
                    onclick={(e) => {
                      e.stopPropagation();
                      onQuickValidation(product, productInDateRange);
                    }}
                    title="Declarer la quantité manquante ({productInDateRange.formattedMissingQuantities}) achetée"
                  >
                    <div class="cart-icon"></div>
                    <span class="text-xs"
                      >{productInDateRange.formattedMissingQuantities}</span
                    >
                    {#if globalState.isMobile}
                      <CircleArrowDown size={18} />
                    {:else}
                      <CircleArrowRight size={18} />
                    {/if}
                  </button>
                {:else if shouldShowActionButtons}
                  <CircleCheckBig size={24} class="text-success ms-auto" />
                {/if}
                {#if shouldShowActionButtons && totalNeededOverride?.hasUnresolvedChangedSinceOverride}
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
                class="group bg-base-200 hover:bg-base-300 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2"
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
                    Achats / Récup effectués:
                  </div>
                  <div
                    class="text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity {!shouldShowActionButtons
                      ? ''
                      : 'group-hover:opacity-100'} sm:opacity-0"
                  >
                    ajouter un achat
                  </div>
                </div>
                <!-- Liste des achats -->
                <div class="flex flex-wrap justify-end gap-1.5">
                  {#each purchasesBadges as purchase, index (index)}
                    {@const IconComponent = statusIcons[purchase.icon]}
                    <div
                      class="badge badge-outline flex h-fit flex-col items-center gap-1 py-1 {purchase.badgeClass}"
                    >
                      <div class="flex items-center gap-1">
                        <IconComponent class="h-4 w-4" />
                        <span class="text-sm font-medium text-nowrap">
                          {purchase.quantity}
                          {purchase.unit}
                        </span>
                      </div>
                      {#if purchase.deliveryDate}
                        <span class="text-xs opacity-75">
                          livré le: {purchase.deliveryDate}
                        </span>
                      {/if}
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

<!-- Vue TABLEAU pour l'impression (Alternative compacte) -->
<div class="hidden w-full print:block">
  {#each Object.entries(groupedFilteredProducts) as [groupKey, groupProducts] (groupKey)}
    <div class="break-inside-avoid">
      {#if groupKey !== ""}
        <div class="mt-6 mb-2">
          <div class="border-b-2 border-gray-800 pb-1 font-bold uppercase">
            {groupKey === "Non défini" ? "Groupe inconnu" : groupKey}
            <span class="ml-2 text-sm font-normal normal-case opacity-70"
              >({groupProducts.length} produits)</span
            >
            <span class="float-right ml-auto text-xs font-normal opacity-50">
              {#if productsStore.dateStore.isFullRange}
                Toute la période
              {:else if productsStore.dateStore.start !== productsStore.dateStore.end}
                du {formatedStartDateRange} au {formatedEndDateRange}
              {:else}
                le {formatedStartDateRange}
              {/if}
            </span>
          </div>
        </div>
      {/if}

      <table class="table-compact table w-full border-collapse">
        <thead>
          <tr class="border-b border-gray-400 bg-gray-100 text-left">
            <th class="w-1/12 border px-2 py-1">Check</th>
            <th class="w-4/12 border px-2 py-1">Produit</th>
            <th class="w-2/12 border px-2 py-1">Besoin</th>
            {#if filters.groupBy === "store"}
              <th class="w-3/12 border px-2 py-1">Qui / Type</th>
            {:else}
              <th class="w-3/12 border px-2 py-1">Store / Qui</th>
            {/if}
            <th class="w-2/12 border px-2 py-1 text-right">Acheté</th>
          </tr>
        </thead>
        <tbody>
          {#each groupProducts as productModel (productModel.data.$id)}
            {@const product = productModel.data}
            {@const productInDateRange = productModel.stats}

            <tr class="break-inside-avoid border-b border-gray-300">
              <td class="border px-2 py-1 text-center">
                <div class="mx-auto h-4 w-4 border border-gray-400"></div>
              </td>
              <td class="border px-2 py-1 font-medium">
                {product.productName}
                {#if product.previousNames && product.previousNames.length > 0}
                  <span class="block text-[9pt] font-normal opacity-60"
                    >(Ancien: {product.previousNames[0]})</span
                  >
                {/if}
              </td>
              <td class="border px-2 py-1 text-sm font-bold">
                {#if product.totalNeededOverrideParsed?.totalOverride}
                  {product.totalNeededOverrideParsed.totalOverride.q}
                  {product.totalNeededOverrideParsed.totalOverride.u}
                {:else}
                  {productInDateRange.formattedQuantities}
                {/if}
              </td>
              <td class="border px-2 py-1 text-sm">
                {#if filters.groupBy === "store"}
                  <!-- Si groupé par STORE, on montre WHO et TYPE -->
                  <div class="flex gap-6">
                    {#if product.who?.length}
                      <div class="font-medium">{product.who.join(", ")}</div>
                    {/if}
                    <div class="text-[9pt] opacity-70">
                      {product.productType || "Autre"}
                    </div>
                  </div>
                {:else}
                  <!-- Sinon (groupé par TYPE ou aucun), on montre STORE et WHO -->
                  <div class="flex gap-6">
                    {#if product.storeInfo?.storeName}
                      <div class="font-medium">
                        {product.storeInfo.storeName}
                      </div>
                    {/if}
                    {#if product.who?.length}
                      <div class="text-[9pt] opacity-70">
                        {product.who.join(", ")}
                      </div>
                    {/if}
                  </div>
                {/if}
              </td>
              <td class="border px-2 py-1 text-right text-sm">
                {#if product.purchases?.length}
                  <div class="flex flex-col items-end gap-0.5">
                    {#each product.purchases as p}
                      <div class="text-nowrap">{p.quantity} {p.unit}</div>
                    {/each}
                  </div>
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
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
