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
  import GroupPurchaseModal from "$lib/components/GroupPurchaseModal.svelte";
  import AddProductModal from "$lib/components/AddProductModal.svelte";
  import ProductModal from "$lib/components/ProductModal.svelte";
  import ProductsFilters from "$lib/components/ProductsFilters.svelte";
  import ProductsCards from "$lib/components/ProductsCards.svelte";
  import StoreBatchEditModal from "$lib/components/StoreBatchEditModal.svelte";
  import WhoBatchEditModal from "$lib/components/WhoBatchEditModal.svelte";
  import GlobalPurchasesModal from "$lib/components/GlobalPurchasesModal.svelte";
  // Services
  import {
    createQuickValidationPurchases,
    upsertProduct,
  } from "$lib/services/appwrite-interactions";
  import { normalizeUnit } from "$lib/utils/products-display";

  import LeftPanel from "$lib/components/ui/LeftPanel.svelte";

  import { onMount } from "svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";

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
          const { quantity, unit } = normalizeUnit(qty.q, qty.u);
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

<LeftPanel width={PANEL_WIDTH}>
  <ProductsFilters />
</LeftPanel>

<div class="space-y-6 {globalState.isMobile ? '' : 'ml-100'} px-28">
  <!-- Stats -->
  <div class="flex flex-wrap items-center gap-2">
    <div class="badge badge-neutral badge-lg">
      <LayoutList class="mr-1 h-4 w-4" />
      {stats.total}
    </div>

    <button
      class="btn btn-sm btn-outline btn-ghost"
      onclick={() => (GlobalPurchasesModalisOpen = true)}
      title="Ajouter une dépense générale"
    >
      <BadgeEuro class="mr-1 h-4 w-4" />
      Dépense
    </button>

    <button
      class="btn btn-sm btn-primary"
      onclick={handleOpenAddProductModal}
      title="Ajouter un produit manuellement"
    >
      <Plus class="mr-1 h-4 w-4" />
      Produit
    </button>
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
