<script lang="ts">
  import {
    BadgeEuro,
    CircleCheck,
    CircleX,
    ClipboardCheck,
    Clock,
    LayoutList,
    MessageCircleQuestionMark,
    Package,
    PackageCheck,
    Receipt,
    ShoppingCart,
    SquarePen,
    Plus,
  } from "@lucide/svelte";
  // Store and global state
  import { productsStore } from "$lib/stores/ProductsStore.svelte";

  // Components
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import GroupPurchaseModal from "$lib/components/eventProducts/GroupPurchaseModal.svelte";
  import AddProductModal from "$lib/components/eventProducts/AddProductModal.svelte";
  import ProductModal from "$lib/components/eventProducts/ProductModal.svelte";
  import ProductsFilters from "$lib/components/eventProducts/ProductsFilters.svelte";
  import ProductsCards from "$lib/components/eventProducts/ProductsCards.svelte";
  import StoreBatchEditModal from "$lib/components/eventProducts/StoreBatchEditModal.svelte";
  import WhoBatchEditModal from "$lib/components/eventProducts/WhoBatchEditModal.svelte";
  import GlobalPurchasesModal from "$lib/components/eventProducts/GlobalPurchasesModal.svelte";
  import EventStats from "$lib/components/EventStats.svelte";

  // Services
  import {
    createQuickValidationPurchases,
    upsertProduct,
  } from "$lib/services/appwrite-interactions";
  import { autoConvertUnit } from "$lib/utils/QuantityFormatter";

  import LeftPanel from "$lib/components/ui/LeftPanel.svelte";

  import { onMount, onDestroy } from "svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import { EventStatsStore } from "$lib/stores/EventStatsStore.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";

  import { navigate } from "../services/simple-router.svelte";

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
  const eventStats = $derived.by(() => new EventStatsStore(eventId));

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
      if (!productsStore.currentMainId) {
        throw new Error("mainId non disponible");
      }

      // ✅ Utilisation directe des données contextuelles de la plage de dates
      const missingQuantities = productInDateRange.missingQuantities || [];
      if (missingQuantities.length === 0) {
        console.log(
          "Aucune quantité manquante à valider pour ce produit dans cette période",
        );
        return;
      }

      // ✅ CONVERSIONS : Les missingQuantités sont négatives, les convertir en positif pour les achats
      // et normaliser les unités (kg→gr., l.→ml)
      const normalizedQuantities = missingQuantities
        .filter((qty) => qty.q < 0) // Uniquement les quantités manquantes (négatives)
        .map((qty) => ({ ...qty, q: Math.abs(qty.q) })) // Convertir en positif pour les achats
        .map((qty) => {
          const { q: quantity, u: unit } = autoConvertUnit(qty.q, qty.u);
          return { q: quantity, u: unit };
        });

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
        normalizedQuantities,
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

  let GlobalPurchasesModalisOpen = $state(false);

  // =========================================================================
  // NAVBAR CONFIGURATION
  // =========================================================================

  $effect(() => {
    const event = eventsStore.getEventById(eventId);
    navBarStore.setConfig({
      eventId: eventId || undefined,
      activeTab: eventId ? 1 : undefined, // Voir les produits = onglet 1
      actions: navActions,
    });
  });

  onDestroy(() => {
    navBarStore.reset();
  });

  // =========================================================================
  // INITIALISATION
  // =========================================================================

  // Récupérer l'eventId depuis les paramètres de route
  let { params } = $props<{ params?: Record<string, string> }>();
  let eventId = $state(params?.id);

  onMount(async () => {
    if (!eventId) {
      console.error("[ProductsPage] eventId est requis");
      return;
    }

    // S'assurer que EventsStore est initialisé
    if (!eventsStore.isInitialized) {
      console.log("[ProductsPage] Initialisation d'EventsStore...");
      await eventsStore.initialize();
    }

    // Vérifier que l'événement existe
    const event = eventsStore.getEventById(eventId);
    if (!event) {
      console.error(`[ProductsPage] Événement ${eventId} introuvable`);
      return;
    }

    // Initialiser ProductsStore
    console.log(
      `[ProductsPage] Initialisation de ProductsStore pour événement ${event.name}`,
    );
    await productsStore.initialize(eventId);
  });
</script>

{#snippet navActions()}
  <div class="flex gap-2">
    <button
      class="btn btn-outline btn-ghost btn-sm"
      onclick={() => (GlobalPurchasesModalisOpen = true)}
      title="Ajouter une dépense générale"
    >
      <BadgeEuro class="mr-1 h-4 w-4" />
      Dépense
    </button>

    <button
      class="btn btn-primary btn-sm"
      onclick={handleOpenAddProductModal}
      title="Ajouter un produit manuellement"
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
  class="space-y-6 {globalState.isMobile ? '' : 'ml-110 print:ml-0'} md:px-16"
>
  <!-- Stats -->
  <div class="flex justify-end py-5 print:hidden">
    <EventStats {eventStats} />
  </div>
  <ProductsCards
    onOpenModal={openModal}
    onOpenGroupEditModal={openGroupEditModal}
    onOpenGroupPurchaseModal={openGroupPurchaseModal}
    onQuickValidation={handleQuickValidation}
  />

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
</div>
