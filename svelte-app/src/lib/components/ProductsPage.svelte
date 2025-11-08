<script lang="ts">
  import {
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
  } from "@lucide/svelte";
  // Store and global state
  import { productsStore } from "../stores/ProductsStore.svelte";

  // Components
  import { globalState } from "../stores/GlobalState.svelte";
  import GroupPurchaseModal from "./GroupPurchaseModal.svelte";
  import ProductModal from "./ProductModal.svelte";
  import ProductsFilters from "./ProductsFilters.svelte";
  import ProductsTable from "./ProductsTable.svelte";
  import ProductsCards from "./ProductsCards.svelte";
  import StoreBatchEditModal from "./StoreBatchEditModal.svelte";
  import WhoBatchEditModal from "./WhoBatchEditModal.svelte";
  // Services
  import {
    createQuickValidationPurchases,
    upsertProduct,
  } from "../services/appwrite-interactions";

  import LeftPanel from "./ui/LeftPanel.svelte";

  const PANEL_WIDTH = "100";
  const PANEL_SIDE = "ml";
  const PANEL_SIDE_WIDTH = PANEL_SIDE + "-" + PANEL_WIDTH;
  console.log("PANEL_SIDE_WIDTH →", PANEL_SIDE_WIDTH);
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
  const groupedFilteredProducts = $derived(
    productsStore.groupedFilteredProducts,
  );
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

<div class="space-y-6 {globalState.isMobile ? '' : PANEL_SIDE_WIDTH}">
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

  <LeftPanel width={PANEL_WIDTH}>
    <ProductsFilters />
  </LeftPanel>

  <!-- <ProductsTable
    onOpenModal={openModal}
    onOpenGroupEditModal={openGroupEditModal}
    onOpenGroupPurchaseModal={openGroupPurchaseModal}
    onQuickValidation={handleQuickValidation}
  /> -->

  <ProductsCards
    onOpenModal={openModal}
    onOpenGroupEditModal={openGroupEditModal}
    onOpenGroupPurchaseModal={openGroupPurchaseModal}
    onQuickValidation={handleQuickValidation}
  />

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
