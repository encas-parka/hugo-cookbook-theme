<script lang="ts">
  import {
    Search,
    X,
    FunnelIcon,
    SquarePen,
    Store,
    Users,
    User,
    ShoppingCart,
    Snowflake,
    Utensils,
    LayoutList,
    ListTodo,
    Combine,
    LoaderCircle,
    ShoppingBasket,
    CircleCheckBig,
    CookingPot,
    Package,
    MessageCircleQuestionMark,
    Clock,
    CircleCheck,
    CircleX,
    Check,
    Receipt,
    PencilLine,
  } from "@lucide/svelte";

  // Store and global state
  import { productsStore } from "../stores/ProductsStore.svelte";

  // Components
  import ProductModal from "./ProductModal.svelte";
  import WhoBatchEditModal from "./WhoBatchEditModal.svelte";
  import StoreBatchEditModal from "./StoreBatchEditModal.svelte";
  import GroupPurchaseModal from "./GroupPurchaseModal.svelte";
  import ProductDrawerFilters from "./ProductDrawerFilters.svelte";
  import TimelineRange from "./ui/TimelineRange.svelte";

  // Services
  import {
    createQuickValidationPurchases,
    createExpensePurchase,
    upsertProduct,
  } from "../services/appwrite-interactions";

  // utils
  import {
    getProductTypeInfo,
    sortEnrichedProducts,
    formatPurchasesWithBadges,
    formatQuantity,
  } from "../utils/products-display";

  // Mapping des icônes pour les statuts d'achat
  const statusIcons = {
    Package,
    MessageCircleQuestionMark,
    ShoppingCart,
    Clock,
    CircleCheck,
    CircleX,
  };

  // Accès réactif aux valeurs dérivées du store
  const displayProducts = $derived(productsStore.displayProducts);
  const stats = $derived(productsStore.stats);
  const uniqueStores = $derived(productsStore.uniqueStores);
  const uniqueWho = $derived(productsStore.uniqueWho);
  const uniqueProductTypes = $derived(productsStore.uniqueProductTypes);
  const filters = $derived(productsStore.filters);

  // État local : quel produit a son modal ouvert, et sur quel onglet
  let openModalProductId = $state<string | null>(null);
  let openModalTab = $state<string>("recettes");

  // État local pour les modaux groupés
  let whoEditModalOpen = $state(false);
  let storeEditModalOpen = $state(false);
  let groupEditProductIds = $state<string[]>([]);
  let groupEditProducts = $state<any[]>([]);

  // État local pour le modal d'achat groupé
  let groupPurchaseModalOpen = $state(false);
  let groupPurchaseProducts = $state<any[]>([]);

  // Fonctions pour contrôler l'ouverture/fermeture
  function openModal(productId: string, tab: string = "recettes") {
    openModalTab = tab;
    openModalProductId = productId;
  }

  function closeModal() {
    openModalProductId = null;
  }

  // Fonctions pour les modaux groupés
  function openGroupEditModal(
    type: "store" | "who",
    productIds: string[],
    products: any[],
  ) {
    groupEditProductIds = productIds;
    groupEditProducts = products;

    if (type === "who") {
      whoEditModalOpen = true;
    } else {
      storeEditModalOpen = true;
    }
  }

  function closeGroupEditModal(type?: "store" | "who") {
    if (!type || type === "who") {
      whoEditModalOpen = false;
    }
    if (!type || type === "store") {
      storeEditModalOpen = false;
    }
    groupEditProductIds = [];
    groupEditProducts = [];
  }

  function handleGroupEditSuccess(result: any) {
    // Le ProductsStore va automatiquement se mettre à jour via le realtime
    console.log(
      `[ProductsTable] Modification groupée réussie: ${result.updatedCount} produits`,
    );
  }

  // Fonctions pour le modal d'achat groupé
  function openGroupPurchaseModal(products: any[]) {
    // 🚨 FILTRER SEULEMENT LES PRODUITS AVEC QUANTITÉS MANQUANTES
    const productsWithMissingQuantities = products.filter(
      (product) =>
        product.displayMissingQuantity !== "✅ Complet" &&
        product.missingQuantityArray &&
        product.missingQuantityArray.length > 0,
    );

    console.log(
      `[ProductsTable] openGroupPurchaseModal: ${products.length} produits reçus → ${productsWithMissingQuantities.length} produits avec quantités manquantes`,
    );

    groupPurchaseProducts = productsWithMissingQuantities;
    groupPurchaseModalOpen = true;
  }

  function closeGroupPurchaseModal() {
    groupPurchaseModalOpen = false;
    groupPurchaseProducts = [];
  }

  function handleGroupPurchaseSuccess() {
    // Le ProductsStore va automatiquement se mettre à jour via le realtime
    console.log("[ProductsTable] Achat groupé créé avec succès");
    closeGroupPurchaseModal();
  }

  // Validation rapide individuelle
  async function handleQuickValidation(product: any) {
    try {
      if (!productsStore.currentMainId) {
        throw new Error("mainId non disponible");
      }

      const missingQuantities = product.missingQuantityArray || [];
      if (missingQuantities.length === 0) {
        console.log("Aucune quantité manquante à valider pour ce produit");
        return;
      }

      let finalProductId = product.$id;

      // ✅ LOGIQUE DE SYNC : Vérifier isSynced du produit avant création du purchase
      if (!product.isSynced) {
        // Produit local : créer sur Appwrite d'abord
        console.log(
          `[ProductsTable] Produit ${product.$id} local, création pour validation rapide...`,
        );
        const syncedProduct = await upsertProduct(
          product.$id,
          {}, // Pas de modifications spécifiques au produit lui-même
          (id) => productsStore.getEnrichedProductById(id),
        );
        finalProductId = syncedProduct.$id;
        console.log(`[ProductsTable] Produit sync créé: ${finalProductId}`);
      }

      await createQuickValidationPurchases(
        productsStore.currentMainId!,
        finalProductId,
        missingQuantities,
        {
          store: product.storeInfo?.storeName ?? null,
          notes: "",
          invoiceId: `VALID_${Date.now()}`,
        },
      );

      console.log(
        `[ProductsTable] Validation rapide créée pour ${product.productName}`,
      );
    } catch (error) {
      console.error("[ProductsTable] Erreur validation rapide:", error);
      alert("Erreur lors de la validation rapide: " + (error as Error).message);
    }
  }

  // Ouvrir modal de dépense (pour l'instant simple alert)
  function handleAddExpense() {
    // TODO
    return;
  }
</script>

<!-- Snippet pour le bouton d'édition -->
{#snippet editPenIcon()}
  <div
    class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"
  >
    <SquarePen class="h-4 w-4 text-amber-600" />
  </div>
{/snippet}

<div class="space-y-6">
  <!-- Stats -->
  <div class="flex flex-wrap items-center gap-2">
    <div class="badge badge-neutral badge-lg">
      <LayoutList class="mr-1 h-4 w-4" />
      {stats.total}
    </div>

    <button
      class="btn btn-sm btn-outline btn-ghost"
      onclick={handleAddExpense}
      title="Ajouter une dépense générale"
    >
      <Receipt class="mr-1 h-4 w-4" />
      Dépense
    </button>
  </div>

  <!-- Recherche persistante en haut -->
  <div class="bg-base-200 rounded-lg p-4">
    <div class="hidden md:block">
      <div class="mb-4 flex items-center justify-between">
        <h3 class="flex items-center gap-2 text-lg font-semibold">
          <FunnelIcon class="h-5 w-5" />
          Filtres
        </h3>
        <button
          class="btn btn-sm btn-ghost"
          onclick={() => productsStore.clearFilters()}
        >
          <X class="h-4 w-4" />
          Tout effacer
        </button>
      </div>
    </div>
    <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4">
      <div class="form-control">
        <label class="label" for="search-input">
          <span class="label-text">Recherche</span>
        </label>
        <div class="input flex items-center gap-2">
          <Search class="h-4 w-4" />
          <input
            id="search-input"
            type="text"
            placeholder="Nom du produit..."
            class="grow"
            value={filters.searchQuery}
            oninput={(e) => productsStore.setSearchQuery(e.currentTarget.value)}
          />
        </div>
        <!-- Groupement -->
      </div>
      <div class="form-control">
        <label class="label flex" for="grouping-select">
          <span class="label-text">Groupement</span>
        </label>
        <div class="join" id="grouping-select">
          <input
            class="join-item btn btn-sm md:btn-md"
            type="radio"
            name="grouping-options"
            aria-label="Aucun"
            checked={filters.groupBy === "none"}
            onchange={() => productsStore.setGroupBy("none")}
          />
          <input
            class="join-item btn btn-sm md:btn-md"
            type="radio"
            name="grouping-options"
            aria-label="Par magasin"
            checked={filters.groupBy === "store"}
            onchange={() => productsStore.setGroupBy("store")}
          />
          <input
            class="join-item btn btn-sm md:btn-md"
            type="radio"
            name="grouping-options"
            aria-label="Par type"
            checked={filters.groupBy === "productType"}
            onchange={() => productsStore.setGroupBy("productType")}
          />
        </div>
      </div>
    </div>
    <!-- Filtres desktop -->
    <div class="hidden md:block">
      <TimelineRange allDates={productsStore.allDates} />

      <!-- Filtres par type, température, magasin et qui -->
      <div class="mt-4 flex">
        {#if uniqueProductTypes.length > 0}
          <div class="flex-1">
            <fieldset>
              <legend class="label">
                <span class="label-text">Types & Température</span>
              </legend>
              <div class="flex flex-wrap items-center gap-2" role="group">
                {#each uniqueProductTypes as type (type)}
                  {@const typeInfo = getProductTypeInfo(type)}
                  <button
                    class="btn btn-sm {filters.selectedProductTypes.length === 0
                      ? 'btn-soft btn-accent'
                      : filters.selectedProductTypes.includes(type)
                        ? 'btn-accent'
                        : 'btn-dash btn-accent'}"
                    onclick={() => productsStore.toggleProductType(type)}
                  >
                    <typeInfo.icon class="mr-1 h-5 w-5" />
                    {typeInfo.displayName}
                  </button>
                {/each}

                <!-- Filtres température -->
                <button
                  class="btn btn-sm ms-4 {filters.selectedTemperatures
                    .length === 0
                    ? 'btn-soft btn-success'
                    : filters.selectedTemperatures.includes('frais')
                      ? 'btn-success'
                      : 'btn-dash btn-success'}"
                  onclick={() => productsStore.toggleTemperature("frais")}
                >
                  <ShoppingBasket class="h-5 w-5" />
                  Frais
                </button>
                <button
                  class="btn btn-sm {filters.selectedTemperatures.length === 0
                    ? 'btn-soft btn-info'
                    : filters.selectedTemperatures.includes('surgele')
                      ? 'btn-info'
                      : 'btn-dash btn-info'}"
                  onclick={() => productsStore.toggleTemperature("surgele")}
                >
                  <Snowflake class="h-5 w-5" />
                  Surgelés
                </button>

                {#if filters.selectedProductTypes.length > 0 || filters.selectedTemperatures.length > 0}
                  <button
                    class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10"
                    onclick={() =>
                      productsStore.clearTypeAndTemperatureFilters()}
                    title="Effacer les filtres de types et température"
                  >
                    <X class="h-3 w-3" />
                  </button>
                {/if}
              </div>
            </fieldset>
          </div>
        {/if}
      </div>
      <div class="mt-4 flex flex-col gap-6 lg:flex-row">
        {#if uniqueStores.length > 0}
          <div class="flex-1">
            <fieldset>
              <legend class="label">
                <span class="label-text text-sm">Magasins</span>
              </legend>
              <div class="flex flex-wrap items-center gap-2" role="group">
                {#each uniqueStores as store (store)}
                  <button
                    class="btn btn-xs {filters.selectedStores.length === 0
                      ? 'btn-soft btn-accent'
                      : filters.selectedStores.includes(store)
                        ? 'btn-accent'
                        : 'btn-dash btn-accent'}"
                    onclick={() => productsStore.toggleStore(store)}
                  >
                    <Store class="mr-1 h-3 w-3" />
                    {store}
                  </button>
                {/each}
                {#if filters.selectedStores.length > 0}
                  <button
                    class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10"
                    onclick={() => productsStore.clearStoreFilters()}
                    title="Effacer les filtres de magasins"
                  >
                    <X class="h-3 w-3" />
                  </button>
                {/if}
              </div>
            </fieldset>
          </div>
        {/if}

        {#if uniqueWho.length > 0}
          <div class="flex-1">
            <fieldset>
              <legend class="label">
                <span class="label-text text-sm">Qui</span>
              </legend>
              <div class="flex flex-wrap items-center gap-2" role="group">
                {#each uniqueWho as who (who)}
                  <button
                    class="btn btn-xs {filters.selectedWho.length === 0
                      ? ' btn-soft btn-info'
                      : filters.selectedWho.includes(who)
                        ? ' btn-info'
                        : 'btn-dash btn-info'}"
                    onclick={() => productsStore.toggleWho(who)}
                  >
                    <User class="mr-1 h-3 w-3" />
                    {who}
                  </button>
                {/each}
                {#if filters.selectedWho.length > 0}
                  <button
                    class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10"
                    onclick={() => productsStore.clearWhoFilters()}
                    title="Effacer les filtres de qui"
                  >
                    <X class="h-3 w-3" />
                  </button>
                {/if}
              </div>
            </fieldset>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- Tableau Desktop -->
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
        {#each Object.entries(displayProducts) as [groupKey, groupProducts] (groupKey)}
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
                        openGroupEditModal(
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
                        openGroupEditModal(
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
                        onclick={() => openGroupPurchaseModal(groupProducts!)}
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
          {#each sortEnrichedProducts(groupProducts, filters) as product (product.$id)}
            {@const totalNeeded = productsStore.getFormattedTotalNeeded(
              product.$id,
            )}
            {@const typeInfo = getProductTypeInfo(product.productType)}
            {@const purchasesBadges = formatPurchasesWithBadges(
              product.purchases || [],
            )}

            <tr
              class="hover:bg-base-200/20 transition-colors {product.status ===
              'isSyncing'
                ? 'animate-pulse border-l-4 border-l-blue-400 bg-blue-50/30'
                : ''}"
            >
              <td
                class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"
                onclick={() => openModal(product.$id, "recettes")}
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
              <td
                class="{filters.groupBy === 'store'
                  ? 'hidden'
                  : ''} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"
                onclick={() => openModal(product.$id, "magasins")}
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
              <td
                class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"
                onclick={() => openModal(product.$id, "volontaires")}
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
              <td class={filters.groupBy === "productType" ? "hidden" : ""}>
                <span class="flex items-center gap-2 text-center text-sm">
                  <typeInfo.icon class="h-3 w-3" />
                  {typeInfo.displayName}
                </span>
              </td>
              <td
                class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"
                onclick={() => openModal(product.$id, "recettes")}
              >
                <div class="pb-1 text-center font-semibold">
                  {totalNeeded}
                </div>
                {#if product.nbRecipes || product.totalAssiettes}
                  <div
                    class="text-base-content/70 flex items-center justify-center gap-2 text-xs"
                  >
                    <span class="flex items-center gap-1 text-center"
                      >{product?.nbRecipes} <CookingPot class="h-3 w-3" /></span
                    >
                    <span class="flex items-center gap-1 text-center"
                      >{product?.totalAssiettes}
                      <Utensils class="h-3 w-3" /></span
                    >
                  </div>
                {/if}
                {@render editPenIcon()}
              </td>

              <td
                class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"
                onclick={() => openModal(product.$id, "achats")}
              >
                <div class="flex flex-wrap justify-center gap-1 py-1">
                  {#each purchasesBadges as purchase (purchase.status)}
                    {@const IconComponent = statusIcons[purchase.icon]}
                    <div
                      class="badge badge-soft flex items-center gap-2 {purchase.badgeClass}"
                    >
                      <IconComponent class="h-4 w-4" />
                      <span
                        >{formatQuantity(
                          purchase.quantity,
                          purchase.unit,
                        )}</span
                      >
                    </div>
                  {/each}
                  {#if purchasesBadges.length === 0}
                    <span class="text-center">-</span>
                  {/if}
                </div>
                {@render editPenIcon()}
              </td>
              <td class="group relative text-center">
                {#if product.displayMissingQuantity !== "✅ Complet"}
                  <div class="flex items-center justify-center gap-2">
                    <div class="bg-warning m-auto rounded px-2 py-1">
                      {product.displayMissingQuantity}
                      <!-- Bouton validation rapide -->
                      <button
                        class="btn btn-xs btn-ghost text-base-content/70 btn-circle btn-outline hover:btn-success hover:text-success-content ms-3 transition-all hover:scale-105"
                        onclick={() => handleQuickValidation(product)}
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
              </td>
            </tr>
          {/each}
        {/each}
      </tbody>
    </table>

    {#if Object.values(displayProducts).flat().length === 0}
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

  <!-- Vue Mobile Cards -->
</div>

{#if openModalProductId}
  <ProductModal
    productId={openModalProductId}
    initialTab={openModalTab}
    onClose={closeModal}
  />
{/if}

{#if whoEditModalOpen}
  <WhoBatchEditModal
    productIds={groupEditProductIds}
    products={groupEditProducts}
    onClose={() => closeGroupEditModal("who")}
    onSuccess={handleGroupEditSuccess}
  />
{/if}

{#if storeEditModalOpen}
  <StoreBatchEditModal
    productIds={groupEditProductIds}
    products={groupEditProducts}
    onClose={() => closeGroupEditModal("store")}
    onSuccess={handleGroupEditSuccess}
  />
{/if}

{#if groupPurchaseModalOpen}
  <GroupPurchaseModal
    products={groupPurchaseProducts}
    onClose={closeGroupPurchaseModal}
    onSuccess={handleGroupPurchaseSuccess}
  />
{/if}

<ProductDrawerFilters />
