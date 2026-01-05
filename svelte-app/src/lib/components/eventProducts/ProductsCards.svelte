<script lang="ts">
  import { productsStore } from "$lib/stores/ProductsStore.svelte";
  // utils
  import {
    getProductTypeInfo,
    formatPurchasesWithBadges,
  } from "$lib/utils/products-display";
  import { detectOverrideMismatch } from "$lib/utils/productsUtils";

  // Types
  import type { ProductRangeStats } from "$lib/types/store.types";
  import { ProductModel } from "$lib/models/ProductModel.svelte";

  import {
    Store,
    Users,
    ShoppingCart,
    Check,
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
    ClipboardPenLine,
    CircleAlert,
  } from "@lucide/svelte";
  import Tooltip from "$lib/components/ui/Tooltip.svelte";
  import DateBadge from "$lib/components/ui/DateBadge.svelte";
  import { globalState, hoverHelp } from "$lib/stores/GlobalState.svelte";
  import {
    DayMonthMoment,
    formatDateWdDayMonthShort,
  } from "$lib/utils/date-helpers";
  import { calculateDateDisplayInfo } from "$lib/utils/dateRange";
  import IconSprite from "../ui/IconSprite.svelte";

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
        class="bg-primary @container sticky {globalState.isMobile
          ? 'top-11'
          : 'top-16 rounded-lg'} z-2 flex flex-wrap items-center justify-between px-4 py-2 shadow-md @md:flex-nowrap print:shadow-none"
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

        {#if !globalState.isMobile}
          <div class="text-primary-content px-2">
            {#if productsStore.dateStore.isFullRange}
              <div class="font-semibold">Sur toute la période</div>
            {:else if productsStore.dateStore.start !== productsStore.dateStore.end}
              du <span class="font-semibold">
                {DayMonthMoment(productsStore.dateStore.start)}
              </span>
              au
              <span class="font-semibold">
                {DayMonthMoment(productsStore.dateStore.end)}</span
              >
            {:else}
              le <span class="font-semibold"
                >{DayMonthMoment(productsStore.dateStore.start)}
              </span>
            {/if}
          </div>
        {:else}
          <div class="text-primary-content">
            {#if !productsStore.dateStore.isFullRange && productsStore.dateStore.start !== productsStore.dateStore.end}
              <span class="font-semibold"
                >{DayMonthMoment(productsStore.dateStore.start)} → {DayMonthMoment(
                  productsStore.dateStore.end,
                )}</span
              >
            {:else}
              le <span class="font-semibold"
                >{DayMonthMoment(productsStore.dateStore.start, true)}</span
              >
            {/if}
          </div>
        {/if}

        <!-- Actions groupées -->
        {#if shouldShowActionButtons}
          <div class="ms-auto flex flex-wrap items-center justify-end gap-2">
            <button
              class="btn btn-xs md:btn-sm btn-primary btn-soft"
              onclick={() =>
                onOpenGroupEditModal(
                  "store",
                  groupProducts!.map((p) => p.data.$id),
                  groupProducts!.map((p) => p.data),
                )}
              onmouseenter={() =>
                (hoverHelp.msg =
                  "Définissez un magasin où seront acheté tous les produits de ce groupe")}
              onmouseleave={() => hoverHelp.reset()}
              title="Attribuer un magasin à tous les produits de ce groupe"
            >
              <Store size={16} />
              <span class="hidden @md:block">Magasin</span>
              <SquarePen size={16} />
            </button>

            <button
              class="btn btn-xs md:btn-sm btn-primary btn-soft"
              onclick={() =>
                onOpenGroupEditModal(
                  "who",
                  groupProducts!.map((p) => p.data.$id),
                  groupProducts!.map((p) => p.data),
                )}
              onmouseenter={() =>
                (hoverHelp.msg =
                  "Définissez qui est responsable de l'achat de tous les produits de ce groupe")}
              onmouseleave={() => hoverHelp.reset()}
              title="Gérer les volontaires pour tous les produits de ce groupe"
            >
              <Users size={16} />
              <span class="hidden @md:block"> Volontaires </span>
              <SquarePen size={16} />
            </button>

            <!-- Bouton validation groupée -->
            {#if groupProducts!.some((p) => p.data.displayMissingQuantity !== "✅ Complet")}
              <button
                class="btn btn-xs md:btn-sm btn-primary btn-soft"
                onclick={() =>
                  onOpenGroupPurchaseModal(groupProducts!.map((p) => p.data))}
                title="Ouvrir le modal d'achat groupé"
                onmouseenter={() =>
                  (hoverHelp.msg =
                    "Déclarez tout ou partie des produits de ce groupe comme acheté")}
                onmouseleave={() => hoverHelp.reset()}
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
    <div class="space-y-4 sm:space-y-2">
      {#each groupProducts as productModel (productModel.data.$id)}
        {@const product = productModel.data}
        {@const productInDateRange = productModel.stats}
        {@const typeInfo = getProductTypeInfo(product.productType)}
        {@const purchasesBadges = formatPurchasesWithBadges(
          product.purchases || [],
        )}
        {@const totalNeededOverride = product.totalNeededOverrideParsed}
        {@const overrideMismatch = detectOverrideMismatch(product)}
        <!-- Card du produit -->
        <div
          class="card bg-base-100 {globalState.isMobile &&
            'border-base-300 border shadow'} {product.status === 'isSyncing'
            ? 'border-accent bg-accent/30 animate-pulse border-2'
            : ''}"
        >
          <div class="card-body p-2">
            <!-- Première ligne: Titre/Type à gauche, Store/Who à droite -->
            <div class="flex items-start justify-between">
              <!-- Section gauche: Titre & Type (prend la place disponible) -->
              <div
                class="flex flex-1 cursor-pointer flex-wrap items-center gap-4"
                role="button"
                tabindex="0"
                onclick={() => onOpenModal(product.$id, "recettes")}
                onkeydown={(e) =>
                  e.key === "Enter" && onOpenModal(product.$id, "recettes")}
                onmouseenter={() =>
                  (hoverHelp.msg = "Afficher les informations sur ce produit")}
                onmouseleave={() => hoverHelp.reset()}
              >
                <!-- Nom du produit & type icon -->
                <div
                  class="text-primary flex items-center gap-2 text-base font-semibold"
                >
                  <typeInfo.icon class="h-4 w-4" />{product.productName}
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
                  {#if product.pF}
                    <div
                      class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full"
                      title="Produit frais"
                    >
                      <ShoppingBasket class="text-success h-4 w-4" />
                    </div>
                  {/if}
                  {#if product.pS}
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

                <!-- 📅 Dates concernées (desktop only: sinon wrap degeu) -->
                {#if !globalState.isMobile && productInDateRange.concernedDates.length > 0}
                  <div class="text-base-content/60">
                    <div class="flex flex-wrap items-center gap-1">
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
                <div class="ml-4 flex gap-2 self-start">
                  <!-- Store -->
                  <button
                    title="Modifier le magasin"
                    class="btn btn-soft btn-xs sm:btn-sm group relative {product
                      .storeInfo?.storeName
                      ? 'btn-success'
                      : ''}"
                    onclick={() => onOpenModal(product.$id, "magasins")}
                    onkeydown={(e) =>
                      e.key === "Enter" && onOpenModal(product.$id, "magasins")}
                    onmouseenter={() =>
                      (hoverHelp.msg =
                        "Définissez le magasin où acheter le produit")}
                    onmouseleave={() => hoverHelp.reset()}
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
                    class="btn btn-xs sm:btn-sm btn-soft group relative {product.who &&
                    product.who?.length > 0
                      ? 'btn-success'
                      : ''}"
                    onclick={() => onOpenModal(product.$id, "volontaires")}
                    onkeydown={(e) =>
                      e.key === "Enter" &&
                      onOpenModal(product.$id, "volontaires")}
                    onmouseenter={() =>
                      (hoverHelp.msg =
                        "Déclarez qui est responsable de l'achat de ce produit")}
                    onmouseleave={() => hoverHelp.reset()}
                  >
                    <Users size={18} />
                    {#if product.who && product.who.length}
                      {#if product.who.length > 1}
                        <div class="ml-1 flex gap-1">
                          {product.who
                            .slice(0, 2)
                            .map((person) => person.slice(0, 5))
                            .join(" | ")}...
                          {#if product.who.length > 2}
                            <span class="text-base-content/50 text-xs"
                              >+{product.who.length - 2}</span
                            >
                          {/if}
                        </div>
                      {:else if product.who.length === 1}
                        {product.who}
                      {/if}
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

            <!-- 📅 Dates concernées (mobile only) -->
            {#if globalState.isMobile && productInDateRange.concernedDates.length > 0}
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
            <!-- Deuxième ligne: Groupe Besoins + Achats + Manquants (flex wrap) -->
            <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing">
              <!-- Besoins -->
              <div class="flex min-w-[300px] flex-1 flex-col">
                <div class="text-base-content/60 ms-1 text-sm">
                  <!-- <ListTodo class="bg-base-200 m-1 inline h-4 w-4" /> -->
                  Besoins total sur la période
                </div>
                <div
                  id="needs-card"
                  role="button"
                  tabindex="0"
                  class=" bg-base-300/80 relative flex flex-1 cursor-pointer flex-wrap items-start justify-between gap-x-4 gap-y-1 rounded-lg p-3 shadow-sm"
                  onclick={() => onOpenModal(product.$id, "recettes")}
                  onkeydown={(e) =>
                    e.key === "Enter" && onOpenModal(product.$id, "recettes")}
                  onmouseenter={() =>
                    (hoverHelp.msg =
                      "Afficher les informations sur ce produit")}
                  onmouseleave={() => hoverHelp.reset()}
                >
                  <!-- absolute label -->
                  <!-- <div
                    class="text-base-content/60 bg-base-200 rounded-t-box absolute -top-2 left-0 px-4 pt-1 text-sm font-medium"
                  >
                    <ListTodo class="bg-base-200 m-1 inline h-4 w-4" />
                    Besoins total sur la période
                  </div> -->

                  <div class="ms-2 flex items-end justify-center gap-4">
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
                      <div class="text-base-content/90 flex items-center gap-2">
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

                  <!-- Bouton d'achat rapide -->
                  {#if shouldShowActionButtons && productInDateRange.hasMissing}
                    <button
                      class="btn btn-sm btn-outline btn-primary ms-auto"
                      onclick={(e) => {
                        e.stopPropagation();
                        onQuickValidation(product, productInDateRange);
                      }}
                      onmouseenter={() =>
                        (hoverHelp.msg = "Ajouter aux achats effectués")}
                      onmouseleave={() => hoverHelp.reset()}
                    >
                      <span class="text-xs"
                        ><span class="font-light">manque : </span>
                        {productInDateRange.formattedMissingQuantities}</span
                      >
                      <span class="text-primary">
                        <IconSprite name="add-to-cart" size={16} /></span
                      >
                    </button>
                  {:else if shouldShowActionButtons}
                    <CircleCheckBig size={24} class="text-success ms-auto" />
                  {/if}
                  {#if shouldShowActionButtons && overrideMismatch?.hasMismatch}
                    <div
                      id="override_alert"
                      class="alert alert-warning alert-outline mt-1"
                    >
                      <CircleAlert size={18} />
                      <span>
                        Les menus ont été modifié depuis la définition manuelle
                        des besoins:
                        {#if overrideMismatch.platesChanged}
                          {overrideMismatch.details
                            ?.oldPlates}→{overrideMismatch.details?.newPlates} couverts
                        {/if}
                        {#if overrideMismatch.recipesChanged}
                          {overrideMismatch.details
                            ?.oldRecipes}→{overrideMismatch.details?.newRecipes}
                          recettes
                        {/if}
                      </span>
                    </div>
                  {/if}
                </div>
              </div>
              <!-- Achats -->
              <div class="flex min-w-[300px] flex-1 flex-col">
                <div class="text-base-content/60 ms-1 text-sm">
                  <!-- <ListTodo class="bg-base-200 m-1 inline h-4 w-4" /> -->
                  Achat / reccup effectué
                </div>

                <div
                  class="group hover:ring-accent/60 bg-base-300/80 relative flex flex-1 cursor-pointer items-start justify-between gap-2 rounded-lg p-3 shadow-sm transition-colors hover:ring-2"
                  role="button"
                  tabindex="0"
                  onclick={() => onOpenModal(product.$id, "achats")}
                  onkeydown={(e) =>
                    e.key === "Enter" && onOpenModal(product.$id, "achats")}
                  onmouseenter={() =>
                    (hoverHelp.msg = "Déclarez des achats effectués")}
                  onmouseleave={() => hoverHelp.reset()}
                >
                  <!-- <div class="flex flex-wrap items-start gap-0 self-start">
                  <div
                    class="text-base-content/80 bg-base-200 rounded-t-box border-t-base-200 group-hover:border-accent/60 absolute -top-2 left-0 border-t-2 px-4 py-1 text-sm font-medium"
                  >
                    <ShoppingCart class="inline h-4 w-4" />
                    Achats / Récup effectués
                  </div>
                </div> -->
                  <!-- Liste des achats -->
                  <ShoppingCart class="h-4 w-4 opacity-60" />
                  <div
                    class="text-base-content/30 blocktransition-opacity ms-2 text-xs italic {!shouldShowActionButtons
                      ? 'hidden'
                      : 'group-hover:block'} sm:hidden"
                  >
                    ajouter un achat
                  </div>
                  <div class="ms-auto flex flex-wrap gap-1.5">
                    {#each purchasesBadges as purchase, index (index)}
                      {@const IconComponent = statusIcons[purchase.icon]}
                      <div
                        class="badge badge-outline badge-lg flex flex-col items-center gap-1 {purchase.badgeClass}"
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
                      <div class="text-base-content/50 text-xs italic">
                        aucun
                      </div>
                    {/if}
                  </div>
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
