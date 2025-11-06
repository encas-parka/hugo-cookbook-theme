<script lang="ts">
  import { productsStore } from "../stores/ProductsStore.svelte";
  // utils
  import {
    getProductTypeInfo,
    sortEnrichedProducts,
    formatPurchasesWithBadges,
    formatQuantity,
  } from "../utils/products-display";

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
  } from "@lucide/svelte";

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
</script>

{#snippet editPenIcon()}
  <div
    class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"
  >
    <SquarePen class="h-4 w-4 text-amber-600" />
  </div>
{/snippet}

<div class="bg-base-100 hidden rounded-lg md:block">
  <table class="table w-full">
    <thead class="bg-base-200 sticky top-0 z-10">
      <tr class="bg-base-200">
        <th
          class="hover:bg-base-100 cursor-pointer text-center"
          onclick={() => productsStore.handleSort("productName")}
        >
          <div class="flex items-center justify-center gap-2">
            <LayoutList class="h-4 w-4" />
            Nom du produit
            {#if filters.sortColumn === "productName"}
              {filters.sortDirection === "asc" ? "↑" : "↓"}
            {/if}
          </div>
        </th>
        <th
          class="hover:bg-base-100 cursor-pointer text-center {filters.groupBy ===
          'store'
            ? 'hidden'
            : ''}"
          onclick={() => productsStore.handleSort("store")}
        >
          <div class="flex items-center justify-center gap-2">
            <Store class="h-4 w-4" />
            Magasin
            {#if filters.sortColumn === "store"}
              {filters.sortDirection === "asc" ? "↑" : "↓"}
            {/if}
          </div>
        </th>
        <th
          class="hover:bg-base-100 cursor-pointer text-center"
          onclick={() => productsStore.handleSort("who")}
        >
          <div class="flex items-center justify-center gap-2">
            <Users class="h-4 w-4" />
            Qui
            {#if filters.sortColumn === "who"}
              {filters.sortDirection === "asc" ? "↑" : "↓"}
            {/if}
          </div>
        </th>
        <th
          class="hover:bg-base-100 cursor-pointer text-center {filters.groupBy ===
          'productType'
            ? 'hidden'
            : ''}"
          onclick={() => productsStore.handleSort("productType")}
        >
          <div class="flex items-center justify-center gap-2">
            Type
            {#if filters.sortColumn === "productType"}
              {filters.sortDirection === "asc" ? "↑" : "↓"}
            {/if}
          </div>
        </th>
        <th class="text-center">
          <div class="flex items-center justify-center gap-2">Besoins</div>
        </th>
        <th class="text-center">
          <div class="flex items-center justify-center gap-2">
            <ShoppingCart class="h-4 w-4" />
            Achats / Reccup
          </div>
        </th>

        <th class="text-center">
          <div class="flex items-center justify-center gap-2">
            <ListTodo class="h-4 w-4" /> manquant
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      {#each Object.entries(groupedFilteredProducts) as [groupKey, groupProducts] (groupKey)}
        {#if groupKey !== ""}
          <!-- Header de groupe -->
          {@const groupTypeInfo = getProductTypeInfo(groupKey)}
          <tr class="bg-base-200 sticky top-11 z-10 font-semibold">
            <td colspan="7" class="py-3">
              <div class="flex items-center justify-between">
                <!-- Nom du groupe -->
                <div class="flex items-center gap-2">
                  {#if filters.groupBy === "store"}
                    🏪 {groupKey} ({groupProducts!.length})
                  {:else if filters.groupBy === "productType"}
                    <div class="flex items-center gap-2">
                      <groupTypeInfo.icon class="h-4 w-4" />
                      <span>{groupTypeInfo.displayName}</span>
                      <span class="text-sm opacity-70"
                        >({groupProducts!.length})</span
                      >
                    </div>
                  {:else}
                    📦 {groupKey} ({groupProducts!.length})
                  {/if}
                </div>

                <!-- Actions groupées -->
                <div class="flex items-center gap-2">
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
                    Magasin
                    <SquarePen size={16} />
                  </button>

                  <button
                    class="btn btn-sm btn-info btn-soft"
                    onclick={() =>
                      onOpenGroupEditModal(
                        "who",
                        groupProducts!.map((p) => p.$id),
                        groupProducts!,
                      )}
                    title="Gérer les volontaires pour tous les produits de ce groupe"
                  >
                    <Users size={16} />
                    Volontaires
                    <SquarePen size={16} />
                  </button>

                  <!-- Bouton validation groupée -->
                  {#if groupProducts!.some((p) => p.displayMissingQuantity !== "✅ Complet")}
                    <button
                      class="btn btn-sm btn-success btn-soft"
                      onclick={() => onOpenGroupPurchaseModal(groupProducts!)}
                      title="Ouvrir le modal d'achat groupé"
                    >
                      <ShoppingCart size={16} />
                      Achat groupé
                      <CircleCheckBig size={16} />
                    </button>
                  {/if}
                </div>
              </div>
            </td>
          </tr>
        {/if}

        <!-- Produits du groupe -->

        {#each sortEnrichedProducts(groupProducts || [], filters) as product (product.$id)}
          {@const stats = productsStore.productsStatsByDateRange.get(
            product.$id,
          ) || {
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
          }}
          {@const typeInfo = getProductTypeInfo(product.productType)}
          {@const purchasesBadges = formatPurchasesWithBadges(
            product.purchases || [],
          )}

          <tr
            class="hover:bg-base-200/20 transition-colors {product.status ===
            'isSyncing'
              ? 'animate-pulse border-l-4 border-l-blue-400 bg-blue-50/40'
              : ''}"
          >
            <!-- ======== Product Name ======== -->
            <td
              class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"
              onclick={() => onOpenModal(product.$id, "recettes")}
            >
              <div class="flex items-center justify-between pr-8">
                <div class="flex items-center gap-2">
                  <!-- 🚀 Indicateur de statut de synchronisation -->
                  {#if product.status === "isSyncing"}
                    <div
                      class="flex items-center gap-1 text-blue-600"
                      title="Synchronisation en cours..."
                    >
                      <LoaderCircle class="h-4 w-4 animate-spin" />
                    </div>
                  {/if}
                  <div>
                    <div class="font-medium">
                      {product.productName}
                    </div>
                    {#if product.previousNames && product.previousNames.length > 0}
                      <div class="text-base-content/60 text-xs">
                        Ancien: {product.previousNames[0]}
                      </div>
                    {/if}
                  </div>
                </div>
                <div class="flex gap-1">
                  {#if product.pFrais}
                    <div
                      class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"
                    >
                      <ShoppingBasket class="text-success h-4 w-4" />
                    </div>
                  {/if}
                  {#if product.pSurgel}
                    <div
                      class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"
                    >
                      <Snowflake class="text-info h-4 w-4" />
                    </div>
                  {/if}
                </div>
              </div>
              {@render editPenIcon()}
            </td>
            <!-- ======== Store ======== -->
            <td
              class="{filters.groupBy === 'store'
                ? 'hidden'
                : ''} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"
              onclick={() => onOpenModal(product.$id, "magasins")}
            >
              {#if product.storeInfo?.storeComment}
                <div
                  class="tooltip tooltip-info"
                  data-tip={product.storeInfo?.storeComment}
                >
                  <div class="text-center">
                    {product.storeInfo?.storeName || "-"}
                  </div>
                </div>
              {:else}
                <div class="text-center">
                  {product.storeInfo?.storeName || "-"}
                </div>
              {/if}
              {@render editPenIcon()}
            </td>
            <!-- ======== Who ======== -->
            <td
              class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"
              onclick={() => onOpenModal(product.$id, "volontaires")}
            >
              {#if product.who && product.who.length > 0}
                <div class="flex flex-wrap justify-center gap-2 pr-8">
                  {#each product.who as person (person)}
                    <span class="badge badge-soft badge-info badge-sm"
                      >{person}</span
                    >
                  {/each}
                </div>
              {/if}
              {@render editPenIcon()}
            </td>
            <!-- ======== Type ======== -->
            <td class={filters.groupBy === "productType" ? "hidden" : ""}>
              <span class="flex items-center gap-2 text-center text-sm">
                <typeInfo.icon class="h-3 w-3" />
                {typeInfo.displayName}
              </span>
            </td>
            <!-- ======== Needs ======== -->
            <td
              class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"
              onclick={() => onOpenModal(product.$id, "recettes")}
            >
              <div class="pb-1 text-center font-semibold">
                {stats.formattedQuantities}
              </div>
              {#if stats.nbRecipes || stats.totalAssiettes}
                <div
                  class="text-base-content/70 flex items-center justify-center gap-2 text-xs"
                >
                  <span class="flex items-center gap-1 text-center"
                    >{stats.nbRecipes} <CookingPot class="h-3 w-3" /></span
                  >
                  <span class="flex items-center gap-1 text-center"
                    >{stats.totalAssiettes}
                    <Utensils class="h-3 w-3" /></span
                  >
                </div>
              {/if}
              {@render editPenIcon()}
            </td>

            <!-- ======== Purchases ======== -->
            <td
              class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"
              onclick={() => onOpenModal(product.$id, "achats")}
            >
              <div class="flex flex-wrap justify-center gap-1 py-1">
                {#each purchasesBadges as purchase (purchase.status)}
                  {@const IconComponent = statusIcons[purchase.icon]}
                  <div
                    class="badge badge-soft flex items-center gap-2 {purchase.badgeClass}"
                  >
                    <IconComponent class="h-4 w-4" />
                    <span
                      >{formatQuantity(purchase.quantity, purchase.unit)}</span
                    >
                  </div>
                {/each}
                {#if purchasesBadges.length === 0}
                  <span class="text-center">-</span>
                {/if}
              </div>
              {@render editPenIcon()}
            </td>
            <!-- ======== Missing ======== -->
            <td class="group relative text-center">
              {#if product.displayMissingQuantity !== "✅ Complet"}
                <div class="flex items-center justify-center gap-2">
                  <div class="bg-warning m-auto rounded px-2 py-1">
                    {product.displayMissingQuantity}
                    <!-- Bouton validation rapide -->
                    <button
                      class="btn btn-xs btn-ghost text-base-content/70 btn-circle btn-outline hover:btn-success hover:text-success-content ms-3 transition-all hover:scale-105"
                      onclick={() => onQuickValidation(product)}
                      title="Déclarer comme acheté"
                    >
                      <Check size={16} />
                    </button>
                  </div>
                </div>
              {:else}
                <CircleCheckBig
                  size={28}
                  strokeWidth={3}
                  class="text-success m-auto"
                />
              {/if}

              <!-- 🎯 NOUVEAU : Affichage des disponibilités calculées -->
              {#if stats && stats.formattedAvailableQuantities && stats.formattedAvailableQuantities !== "Équilibré"}
                <div class="mt-1 text-center">
                  <div
                    class="rounded px-1 py-0.5 text-xs {stats.hasAvailable &&
                    stats.hasMissing
                      ? 'border border-amber-300 bg-amber-100 text-amber-800'
                      : stats.hasAvailable
                        ? 'bg-success/10 text-success/80 border-success/30 border'
                        : 'bg-info/10 text-info/80 border-info/30 border'}"
                    title="Bilan à la fin de la période (achats cumulés - besoins cumulés)"
                  >
                    {stats.formattedAvailableQuantities}
                  </div>
                </div>
              {/if}
            </td>
          </tr>
        {/each}
      {/each}
    </tbody>
  </table>

  {#if Object.values(groupedFilteredProducts).flat().length === 0}
    <div class="py-8 text-center">
      <div class="alert alert-info">
        <div>
          <svg
            class="h-6 w-6 shrink-0 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
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
</div>
