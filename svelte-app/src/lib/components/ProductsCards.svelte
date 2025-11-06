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

<!-- Vue en cartes pour mobile et desktop -->
<div class="bg-base-100 space-y-4 rounded-lg">
  {#each Object.entries(groupedFilteredProducts) as [groupKey, groupProducts] (groupKey)}
    {#if groupKey !== ""}
      <!-- Header de groupe sticky -->
      {@const groupTypeInfo = getProductTypeInfo(groupKey)}
      <div class="bg-base-200 sticky top-0 z-10 rounded-lg font-semibold">
        <div class="p-4">
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
        </div>
      </div>
    {/if}

    <!-- Cards des produits du groupe -->
    <div class="space-y-3">
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

        <!-- Card du produit -->
        <div
          class="card bg-base-100 border-base-300 border shadow-sm transition-shadow hover:shadow-md {product.status ===
          'isSyncing'
            ? 'animate-pulse border-l-4 border-l-blue-400 bg-blue-50/40'
            : ''}"
        >
          <div class="card-body px-1 py-2">
            <!-- Layout horizontal en 3 sections -->
            <div class="flex flex-col gap-4 lg:flex-row">
              <!-- Section gauche: Identité -->
              <div class="flex-1 lg:w-64 lg:flex-initial">
                <div
                  class="hover:bg-base-50 cursor-pointer rounded p-2 transition-colors"
                  role="button"
                  tabindex="0"
                  onclick={() => onOpenModal(product.$id, "recettes")}
                  onkeydown={(e) =>
                    e.key === "Enter" && onOpenModal(product.$id, "recettes")}
                >
                  <!-- Header avec statut de synchronisation -->
                  <div class="mb-2 flex items-center gap-2">
                    {#if product.status === "isSyncing"}
                      <div
                        class="flex items-center gap-1 text-blue-600"
                        title="Synchronisation en cours..."
                      >
                        <LoaderCircle class="h-4 w-4 animate-spin" />
                      </div>
                    {/if}

                    <div class="flex gap-1">
                      {#if product.pFrais}
                        <div
                          class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full"
                          title="Produit frais"
                        >
                          <ShoppingBasket class="text-success h-3 w-3" />
                        </div>
                      {/if}
                      {#if product.pSurgel}
                        <div
                          class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full"
                          title="Produit surgelé"
                        >
                          <Snowflake class="text-info h-3 w-3" />
                        </div>
                      {/if}
                    </div>
                  </div>

                  <!-- Nom du produit -->
                  <h3 class="mb-1 text-lg font-semibold">
                    {product.productName}
                    {#if product.previousNames && product.previousNames.length > 0}
                      <div class="text-base-content/60 text-sm font-normal">
                        Ancien: {product.previousNames[0]}
                      </div>
                    {/if}
                  </h3>

                  <!-- Type de produit -->
                  <div
                    class="text-base-content/70 flex items-center gap-1 text-sm"
                  >
                    <typeInfo.icon class="h-3 w-3" />
                    {typeInfo.displayName}
                  </div>
                </div>
              </div>

              <!-- Section centrale: Store + Who (verticalement) -->
              <div class="flex-1 space-y-2 lg:w-48 lg:flex-initial">
                <!-- Store -->
                <div class="group relative">
                  <div class="flex items-center gap-2">
                    <div
                      class="hover:bg-base-200 flex-1 cursor-pointer rounded p-2 transition-colors"
                      role="button"
                      tabindex="0"
                      onclick={() => onOpenModal(product.$id, "magasins")}
                      onkeydown={(e) =>
                        e.key === "Enter" &&
                        onOpenModal(product.$id, "magasins")}
                    >
                      <div class="flex items-center gap-2 text-sm">
                        <Store class="text-base-content/50 h-4 w-4" />
                        <span class="font-medium">Magasin:</span>
                      </div>
                      {#if product.storeInfo?.storeName}
                        <div class="mt-1 text-sm font-medium">
                          {product.storeInfo.storeName}
                          {#if product.storeInfo.storeComment}
                            <div
                              class="tooltip tooltip-info"
                              data-tip={product.storeInfo.storeComment}
                            >
                              <span class="text-base-content/50 text-xs"
                                >💬</span
                              >
                            </div>
                          {/if}
                        </div>
                      {:else}
                        <div class="text-base-content/50 text-sm italic">
                          Non défini
                        </div>
                      {/if}
                    </div>

                    <!-- Btn-circle d'édition toujours visible -->
                    <button
                      class="btn btn-circle btn-ghost btn-sm opacity-0 transition-opacity group-hover:opacity-100"
                      onclick={() => onOpenModal(product.$id, "magasins")}
                      title="Modifier le magasin"
                    >
                      <SquarePen class="h-3 w-3 text-amber-600" />
                    </button>
                  </div>
                </div>

                <!-- Who -->
                <div class="group relative">
                  <div class="flex items-center gap-2">
                    <div
                      class="hover:bg-base-200 flex-1 cursor-pointer rounded p-2 transition-colors"
                      role="button"
                      tabindex="0"
                      onclick={() => onOpenModal(product.$id, "volontaires")}
                      onkeydown={(e) =>
                        e.key === "Enter" &&
                        onOpenModal(product.$id, "volontaires")}
                    >
                      <div class="flex items-center gap-2 text-sm">
                        <Users class="text-base-content/50 h-4 w-4" />
                        <span class="font-medium">Volontaires:</span>
                      </div>
                      {#if product.who && product.who.length > 0}
                        <div class="mt-1 flex flex-wrap gap-1">
                          {#each product.who as person (person)}
                            <span
                              class="badge badge-soft badge-info badge-sm text-xs"
                            >
                              {person}
                            </span>
                          {/each}
                        </div>
                      {:else}
                        <div class="text-base-content/50 text-sm italic">
                          Non défini
                        </div>
                      {/if}
                    </div>

                    <!-- Btn-circle d'édition toujours visible -->
                    <button
                      class="btn btn-circle btn-ghost btn-sm opacity-0 transition-opacity group-hover:opacity-100"
                      onclick={() => onOpenModal(product.$id, "volontaires")}
                      title="Modifier les volontaires"
                    >
                      <SquarePen class="h-3 w-3 text-amber-600" />
                    </button>
                  </div>
                </div>
              </div>

              <!-- Section droite: Besoins + Achats + Manquants -->
              <div class="flex-1 space-y-3 lg:w-80 lg:flex-initial">
                <!-- Besoins -->
                <div
                  class="group bg-primary/5 border-primary/20 hover:bg-primary/10 relative cursor-pointer rounded border p-3 transition-colors"
                  role="button"
                  tabindex="0"
                  onclick={() => onOpenModal(product.$id, "recettes")}
                  onkeydown={(e) =>
                    e.key === "Enter" && onOpenModal(product.$id, "recettes")}
                >
                  <div
                    class="text-primary mb-2 flex items-center gap-2 text-sm font-medium"
                  >
                    <ListTodo class="h-4 w-4" />
                    Besoins:
                  </div>
                  <div class="text-primary text-lg font-bold">
                    {stats.formattedQuantities}
                  </div>
                  {#if stats.nbRecipes || stats.totalAssiettes}
                    <div
                      class="text-base-content/70 mt-1 flex items-center gap-3 text-xs"
                    >
                      <span class="flex items-center gap-1"
                        >{stats.nbRecipes} <CookingPot class="h-3 w-3" /></span
                      >
                      <span class="flex items-center gap-1"
                        >{stats.totalAssiettes}
                        <Utensils class="h-3 w-3" /></span
                      >
                    </div>
                  {/if}
                </div>

                <!-- Achats -->
                <div
                  class="group bg-base-50 border-base-200 hover:bg-base-100 relative cursor-pointer rounded border p-3 transition-colors"
                  role="button"
                  tabindex="0"
                  onclick={() => onOpenModal(product.$id, "achats")}
                  onkeydown={(e) =>
                    e.key === "Enter" && onOpenModal(product.$id, "achats")}
                >
                  <div class="mb-2 flex items-center gap-2 text-sm font-medium">
                    <ShoppingCart class="h-4 w-4" />
                    Achats / Récup:
                  </div>
                  <div class="flex flex-wrap gap-1">
                    {#each purchasesBadges as purchase (purchase.status)}
                      {@const IconComponent = statusIcons[purchase.icon]}
                      <div
                        class="badge badge-soft flex items-center gap-1 {purchase.badgeClass}"
                      >
                        <IconComponent class="h-3 w-3" />
                        <span class="text-xs">
                          {formatQuantity(purchase.quantity, purchase.unit)}
                        </span>
                      </div>
                    {/each}
                    {#if purchasesBadges.length === 0}
                      <span class="text-base-content/50 text-sm">-</span>
                    {/if}
                  </div>
                </div>

                <!-- Manquants -->
                <div class="bg-base-50 border-base-200 rounded border p-3">
                  <div class="mb-2 flex items-center gap-2 text-sm font-medium">
                    <ListTodo class="h-4 w-4" />
                    Manquant:
                  </div>
                  {#if product.displayMissingQuantity !== "✅ Complet"}
                    <div class="flex items-center justify-between">
                      <div
                        class="bg-warning rounded px-2 py-1 text-sm font-medium"
                      >
                        {product.displayMissingQuantity}
                      </div>
                      <!-- Bouton validation rapide -->
                      <button
                        class="btn btn-xs btn-ghost text-base-content/70 btn-circle btn-outline hover:btn-success hover:text-success-content transition-all hover:scale-105"
                        onclick={() => onQuickValidation(product)}
                        title="Déclarer comme acheté"
                      >
                        <Check size={14} />
                      </button>
                    </div>
                  {:else}
                    <div class="flex items-center justify-center">
                      <CircleCheckBig
                        size={24}
                        strokeWidth={3}
                        class="text-success"
                      />
                    </div>
                  {/if}

                  <!-- Affichage des disponibilités calculées -->
                  {#if stats && stats.formattedAvailableQuantities && stats.formattedAvailableQuantities !== "Équilibré"}
                    <div class="mt-2">
                      <div
                        class="rounded px-2 py-1 text-center text-xs {stats.hasAvailable &&
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
                </div>
              </div>
            </div>
          </div>
        </div>
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
