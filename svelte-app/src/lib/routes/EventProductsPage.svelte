<script lang="ts">
  import {
    BadgeEuro,
    CircleCheck,
    CircleX,
    ClipboardCheck,
    Clock,
    LayoutList,
    Loader2,
    MessageCircleQuestionMark,
    Package,
    PackageCheck,
    Receipt,
    ShoppingCart,
    SquarePen,
    Plus,
    Calendar,
    CircleHelp,
    HelpCircle,
    Info,
    X,
    PanelRightClose,
    EyeClosed,
    SquareArrowOutUpRight,
    Triangle,
    CircleAlert,
  } from "@lucide/svelte";
  // Store and global state
  import { productsStore } from "$lib/stores/ProductsStore.svelte";

  // Components
  import { globalState, hoverHelp } from "$lib/stores/GlobalState.svelte";
  import GroupPurchaseModal from "$lib/components/eventProducts/GroupPurchaseModal.svelte";
  import AddProductModal from "$lib/components/eventProducts/AddProductModal.svelte";
  import ProductModal from "$lib/components/eventProducts/ProductModal.svelte";
  import ProductsFilters from "$lib/components/eventProducts/ProductsFilters.svelte";
  import ProductsCards from "$lib/components/eventProducts/ProductsCards.svelte";
  import StoreBatchEditModal from "$lib/components/eventProducts/StoreBatchEditModal.svelte";
  import WhoBatchEditModal from "$lib/components/eventProducts/WhoBatchEditModal.svelte";
  import GlobalPurchasesModal from "$lib/components/eventProducts/GlobalPurchasesModal.svelte";
  import EventStats from "$lib/components/EventStats.svelte";
  import EventInvitationAlert from "$lib/components/EventInvitationAlert.svelte";

  // Services
  import { UnitConverter } from "$lib/utils/UnitConverter";
  import { warmUpEnkaData } from "$lib/services/appwrite-warmup";
  import { toastService } from "$lib/services/toast.service.svelte";

  import LeftPanel from "$lib/components/ui/LeftPanel.svelte";

  import { onMount, onDestroy } from "svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";

  import { navigate } from "../services/simple-router.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";
  import { formatDateShort } from "../utils/products-display";
  import { on } from "svelte/events";
  import InfoCollapse from "../components/ui/InfoCollapse.svelte";

  // Dont work properly
  const PANEL_WIDTH = "100";
  const PANEL_SIDE = "ml";
  const PANEL_SIDE_WIDTH = PANEL_SIDE + "-" + PANEL_WIDTH;
  // console.log("PANEL_SIDE_WIDTH →", PANEL_SIDE_WIDTH);
  // Mapping des icônes pour les statuts d'achat
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

  // Accès réactif aux valeurs dérivées du store
  const stats = $derived(productsStore.stats);

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

  // État local pour le modal d'ajout de produit
  let isAddProductModalOpen = $state(false);

  // État de chargement
  let isLoading = $state(true);

  // WARM-UP
  $effect(() => {
    warmUpEnkaData();
  });

  // =========================================================================
  // INITIALISATION
  // =========================================================================

  // Récupérer l'eventId depuis les paramètres de route
  let { params } = $props<{ params?: Record<string, string> }>();
  let eventId = $state(params?.id);
  const currentEvent = $derived(
    eventId ? eventsStore.getEventById(eventId) : null,
  );

  // Déterminer le basePath selon le mode (demo ou normal)
  const basePath = $derived.by(() => {
    return (currentEvent?.status as string) === "local"
      ? "/demo/event"
      : "/dashboard/eventEdit";
  });

  // Calculer les informations de l'événement
  const eventName = $derived(currentEvent?.name ?? "");
  const startDate = $derived(currentEvent?.dateStart ?? null);
  const endDate = $derived(currentEvent?.dateEnd ?? null);

  const eventIsPassed = $derived(endDate && new Date() > new Date(endDate));

  onMount(async () => {
    try {
      if (!eventId) {
        console.error("[EventProductsPage] eventId est requis");
        isLoading = false;
        return;
      }

      // Note: EventsStore est déjà initialisé via App.svelte (loadCache + syncFromRemote)

      // Vérifier que l'événement existe
      const event = eventsStore.getEventById(eventId);
      if (!event) {
        console.error(`[EventProductsPage] Événement ${eventId} introuvable`);
        isLoading = false;
        return;
      }

      // Initialiser ProductsStore
      console.log(
        `[EventProductsPage] Initialisation de ProductsStore pour événement ${event.name}`,
      );
      await productsStore.initialize(eventId);
    } catch (error) {
      console.error(
        "[EventProductsPage] Erreur lors de l'initialisation:",
        error,
      );
    } finally {
      isLoading = false;
    }
  });

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
    const productsWithMissingQuantities = products.filter((product) => {
      const productModel = productsStore.getProductModelById(product.$id);
      return productModel?.stats.hasMissing;
    });

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

  function handleOpenAddProductModal() {
    isAddProductModalOpen = true;
  }

  // Validation rapide individuelle
  async function handleQuickValidation(product: any, productInDateRange: any) {
    try {
      const missingQuantities = productInDateRange.missingQuantities || [];
      if (missingQuantities.length === 0) {
        console.log(
          "Aucune quantité manquante à valider pour ce produit dans cette période",
        );
        return;
      }

      // CONVERSIONS : Les missingQuantities sont négatives, les convertir en positif pour les achats
      // et normaliser les unités (kg→gr., l.→ml) pour le stockage
      const normalizedQuantities = missingQuantities
        .filter((qty) => qty.q < 0)
        .map((qty) => ({ ...qty, q: Math.abs(qty.q) }))
        .map((qty) => {
          const normalized = UnitConverter.normalize(qty.q, qty.u);
          return { q: normalized.quantity, u: normalized.unit };
        });

      // Utiliser ProductsStore qui a déjà le guard intégré
      await productsStore.createPurchase(product.$id, normalizedQuantities, {
        store: product.storeInfo?.storeName ?? null,
        notes: "",
        invoiceId: `VALID_${Date.now()}`,
      });

      console.log(
        `[ProductsTable] Validation rapide créée pour ${product.productName}`,
      );
    } catch (error) {
      console.error("[ProductsTable] Erreur validation rapide:", error);
      alert("Erreur lors de la validation rapide: " + (error as Error).message);
    }
  }

  let GlobalPurchasesModalisOpen = $state(false);

  // =========================================================================
  // PERMISSIONS & INVITATION
  // =========================================================================

  /**
   * Vérifie si l'utilisateur peut éditer les produits de l'événement
   * Même logique que EventEditPage
   */
  const canEdit = $derived(
    eventsStore.canUserEditEvent(eventId || "", globalState.userId || ""),
  );

  /**
   * Gère la réponse à l'invitation (accepter/refuser)
   */
  async function handleInvitationResponse(accept: boolean) {
    if (!eventId || !globalState.userId) return;

    try {
      isLoading = true;

      const newStatus = accept ? "accepted" : "declined";

      await eventsStore.updateContributorStatus(
        eventId,
        globalState.userId,
        newStatus,
      );

      toastService.success(
        accept ? "Invitation acceptée" : "Invitation déclinée",
      );
    } catch (error) {
      console.error("Erreur réponse invitation:", error);
      toastService.error("Erreur lors de la réponse");
    } finally {
      isLoading = false;
    }
  }

  // =========================================================================
  // NAVBAR CONFIGURATION
  // =========================================================================

  $effect(() => {
    navBarStore.setConfig({
      eventId: eventId || undefined,
      basePath,
      actions: navActions,
    });
  });

  onDestroy(() => {
    navBarStore.reset();
  });

  //
</script>

{#snippet navActions()}
  <div class="flex gap-2">
    <button
      class="btn btn-primary"
      onclick={handleOpenAddProductModal}
      title="Ajouter un produit manuellement"
      disabled={!canEdit}
    >
      <Plus class="mr-1 h-4 w-4" />
      Produit
    </button>
  </div>
{/snippet}
<LeftPanel width={PANEL_WIDTH}>
  <ProductsFilters />
</LeftPanel>

<div
  class="space-y-6 pt-6 md:px-16 {globalState.isDesktop &&
    'ml-110 print:ml-0'} "
>
  {#if isLoading}
    <!-- Loader pendant le chargement -->
    <div class="flex min-h-96 items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <Loader2 class="text-primary h-12 w-12 animate-spin" />
        <p class="text-base-content/60 text-sm">Chargement des produits...</p>
      </div>
    </div>
  {:else}
    <!-- Alerte d'invitation pour les utilisateurs invités -->
    <EventInvitationAlert
      {currentEvent}
      isBusy={isLoading}
      onRespond={handleInvitationResponse}
    />

    <!-- Contenu une fois chargé -->
    <div
      class="rounded-box border-base-300 bg-base-100 flex flex-wrap items-baseline justify-between gap-4 border-2 p-4"
    >
      <div class="flex w-full flex-wrap justify-between gap-6">
        <h1>
          {eventName}
        </h1>
        <div class="text-base-content/70 text-base">
          {#if startDate && endDate}
            <Calendar class="inline h-4 w-4" />
            {formatDateShort(startDate)} au {formatDateShort(endDate)}
          {:else if startDate}
            <Calendar class="inline h-4 w-4" />
            {formatDateShort(startDate)}
          {/if}
        </div>
      </div>
      <!-- Stats -->
      {#if currentEvent}
        <div class="flex-grow py-4 print:hidden">
          <EventStats {currentEvent} />
        </div>
      {/if}

      <!-- card deense et produits ok/manquant -->
      <div class="flex w-full flex-wrap justify-end gap-10">
        {#if eventIsPassed}
          <div
            class="alert alert-warning alert-soft max-sm:alert-vertical self-center"
            id="info-past-event"
          >
            <CircleAlert size={20} class="shrink-0" />
            Toutes les dates de cet événement sont passées. Il n'est plus possible
            de modifier les produits.
          </div>
        {/if}
        {#if !eventIsPassed}
          <!-- Carte des produits complétés/manquants -->
          <div class="card card-xs sm:card:sm border-2 border-orange-700">
            <div class="card-body">
              <div class="card-title text-orange-800">
                <PackageCheck class="text-orange-800 opacity-60" />
                Produits
              </div>

              <div class="flex items-center justify-center px-2">
                <!-- <div class="text-center">
                <div class="text-success text-lg font-bold md:text-2xl">
                  {productsStore.completionStats.completed}
                </div>
                <div class="text-base-content/60 text-xs">Ok</div>
              </div>
              <div class="divider divider-horizontal mx-1"></div> -->
                <div class="text-center">
                  <div class="text-error text-lg font-bold md:text-2xl">
                    {productsStore.completionStats.missing}
                  </div>
                  <div class="text-base-content/60 text-xs">Manquants</div>
                </div>
              </div>
            </div>
          </div>
        {/if}
        <!-- Carte des dépenses -->
        <div
          class="card card-xs sm:card-sm border-2 border-orange-700 shadow hover:bg-orange-700/10"
        >
          <button
            class="card-body cursor-pointer"
            onclick={() => (GlobalPurchasesModalisOpen = true)}
            title="Ajouter une dépense générale"
            onmouseenter={() =>
              (hoverHelp.msg = "Consulter ou modifie le détail des dépenses")}
            onmouseleave={() => hoverHelp.reset()}
            disabled={!canEdit}
          >
            <div class="card-title text-orange-800">
              <BadgeEuro class="text-orange-800 opacity-60" />
              Dépense
            </div>
            <div class="text-base-content/70 text-center text-lg font-medium">
              {productsStore.financialStats.totalGlobal} €
            </div>
            <SquarePen
              class="text-base-content/60 absolute right-3 bottom-2 size-4"
            />
          </button>
        </div>
      </div>
    </div>
    <ProductsCards
      {currentEvent}
      onOpenModal={openModal}
      onOpenGroupEditModal={openGroupEditModal}
      onOpenGroupPurchaseModal={openGroupPurchaseModal}
      onQuickValidation={handleQuickValidation}
      disabled={!canEdit}
    />
  {/if}

  <!-- Vue Mobile Cards -->

  <ProductModal
    productId={openModalProductId || ""}
    initialTab={openModalTab}
    onClose={closeModal}
  />

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

  <AddProductModal bind:open={isAddProductModalOpen} />

  <GlobalPurchasesModal bind:isOpen={GlobalPurchasesModalisOpen} />

  {#if globalState.isDesktop}
    <div class="fixed bottom-0 left-0 z-50 transition-all">
      <div
        class="rounded-tr-box bg-blue-100 text-blue-800 {hoverHelp.isExpanded
          ? ' w-fit px-4 py-2'
          : '  cursor-pointer px-3 py-2'}"
      >
        {#if hoverHelp.isExpanded}
          <div class="flex items-center justify-center">
            <Info class="me-2 size-5" />
            {hoverHelp.msg}

            <button
              class="btn btn-xs btn-circle btn-ghost ms-3"
              onclick={() => hoverHelp.collapse()}
            >
              <X class="h-4 w-4" />
            </button>
          </div>
        {:else}
          <div
            class="flex items-center justify-center"
            onclick={() => hoverHelp.expand()}
          >
            <Info class="size-6" />
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>
