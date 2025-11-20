<script lang="ts">
  import { productsStore } from "../stores/ProductsStore.svelte";
  import { createExpensePurchase, updatePurchase } from "../services/appwrite-interactions";
  import type { Purchases } from "../types/appwrite";
  import { BadgeEuro, PenLine, PenSquare, Plus, SquarePen } from "@lucide/svelte";
  import StoreInput from "./ui/StoreInput.svelte";
  import WhoInput from "./ui/WhoInput.svelte";
  import PriceInput from "./ui/PriceInput.svelte";
  import CommentTextarea from "./ui/CommentTextarea.svelte";

  let { isOpen = $bindable(false) } = $props();

  let loading = $state(false);
  let error = $state<string | null>(null);
  let showAddForm = $state(false);

  // Formulaire d'ajout
  let newExpense = $state({
    invoiceTotal: 0,
    store: "",
    notes: "",
    who: "",
  });
  
  let editingPurchaseId = $state<string | null>(null);

  // Initialiser "who" avec l'utilisateur courant
  $effect(() => {
    if (isOpen && !editingPurchaseId) {
        const currentUser = localStorage.getItem("appwrite-user-name");
        if (currentUser) {
            newExpense.who = currentUser;
        }
    }
  });

  // Tri
  let sortColumn = $state<"date" | "amount" | "store" | "who">("date");
  let sortDirection = $state<"asc" | "desc">("desc");

  // Données dérivées du store
  let stats = $derived(productsStore.financialStats);
  let purchases = $derived(stats.allPurchases);

  // Filtrage et Tri local pour l'affichage
  let displayedPurchases = $derived.by(() => {
    let sorted = [...purchases];

    sorted.sort((a, b) => {
      let valA: any;
      let valB: any;

      switch (sortColumn) {
        case "date":
          valA = new Date(a.orderDate || a.$createdAt).getTime();
          valB = new Date(b.orderDate || b.$createdAt).getTime();
          break;
        case "amount":
          valA = a.invoiceTotal || a.price || 0;
          valB = b.invoiceTotal || b.price || 0;
          break;
        case "store":
          valA = (a.store || "").toLowerCase();
          valB = (b.store || "").toLowerCase();
          break;
        case "who":
          valA = (a.who || "").toLowerCase();
          valB = (b.who || "").toLowerCase();
          break;
      }

      if (valA < valB) return sortDirection === "asc" ? -1 : 1;
      if (valA > valB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  });

  function toggleSort(column: "date" | "amount" | "store" | "who") {
    if (sortColumn === column) {
      sortDirection = sortDirection === "asc" ? "desc" : "asc";
    } else {
      sortColumn = column;
      sortDirection = "desc"; // Default desc for new column usually better for dates/amounts
    }
  }

  async function handleAddOrUpdateExpense() {
    if (!newExpense.invoiceTotal || newExpense.invoiceTotal <= 0) {
      error = "Le montant doit être supérieur à 0";
      return;
    }

    loading = true;
    error = null;

    try {
      const mainId = productsStore.currentMainId; 
      if (!mainId) throw new Error("Aucun événement principal actif");

      if (editingPurchaseId) {
        // Mode Édition
        await updatePurchase(editingPurchaseId, {
            price: newExpense.invoiceTotal,
            invoiceTotal: newExpense.invoiceTotal,
            store: newExpense.store,
            notes: newExpense.notes,
            who: newExpense.who
        });
      } else {
        // Mode Création
        await createExpensePurchase(
            mainId,
            undefined, // invoiceId auto-généré
            newExpense.invoiceTotal,
            newExpense.store,
            newExpense.notes,
            newExpense.who
        );
      }

      // Reset form
      resetForm();
    } catch (e: any) {
      console.error("Erreur sauvegarde dépense:", e);
      error = e.message;
    } finally {
      loading = false;
    }
  }

  function resetForm() {
    const currentUser = localStorage.getItem("appwrite-user-name") || "";
    newExpense = {
      invoiceTotal: 0,
      store: "",
      notes: "",
      who: currentUser,
    };
    editingPurchaseId = null;
    showAddForm = false;
  }

  function startEdit(purchase: Purchases) {
    newExpense = {
        invoiceTotal: purchase.invoiceTotal || purchase.price || 0,
        store: purchase.store || "",
        notes: purchase.notes || "",
        who: purchase.who || "",
    };
    editingPurchaseId = purchase.$id;
    showAddForm = true;
  }

  function formatDate(dateStr: string | null) {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function formatPrice(amount: number | null) {
    return (amount || 0).toFixed(2) + " €";
  }
</script>

<dialog class="modal {isOpen ? 'modal-open' : ''}">
  <div class="modal-box w-11/12 max-w-5xl h-[90vh] flex flex-col p-0 bg-base-100">
    <!-- Header -->
    <div class="p-4 border-b border-base-300 flex justify-between items-center bg-base-200 sticky top-0 z-10">
      <h3 class="font-bold text-lg flex items-center gap-2">
      <BadgeEuro />
        Gestion des Dépenses
      </h3>
      <button class="btn btn-sm btn-circle btn-ghost" onclick={() => (isOpen = false)}>✕</button>
    </div>

    <!-- Content -->
    <div class="flex-1 overflow-y-auto p-4 space-y-6">
      
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="stats shadow bg-primary text-primary-content">
          <div class="stat">
            <div class="stat-title text-primary-content/80">Total Global</div>
            <div class="stat-value">{formatPrice(stats.totalGlobal)}</div>
            <div class="stat-desc text-primary-content/80">{purchases.length} transactions</div>
          </div>
        </div>
        
        <!-- Breakdown Lists -->
        <div class="card bg-base-200 shadow-sm p-4">
            <h4 class="font-semibold mb-2 text-sm uppercase tracking-wider opacity-70">Par Magasin</h4>
            <div class="overflow-y-auto max-h-24 text-sm space-y-1">
                {#each Object.entries(stats.byStore).sort((a, b) => b[1] - a[1]) as [store, amount]}
                    <div class="flex justify-between">
                        <span>{store}</span>
                        <span class="font-mono">{formatPrice(amount)}</span>
                    </div>
                {/each}
            </div>
        </div>

        <div class="card bg-base-200 shadow-sm p-4">
            <h4 class="font-semibold mb-2 text-sm uppercase tracking-wider opacity-70">Par Acheteur</h4>
            <div class="overflow-y-auto max-h-24 text-sm space-y-1">
                {#each Object.entries(stats.byWho).sort((a, b) => b[1] - a[1]) as [who, amount]}
                    <div class="flex justify-between">
                        <span>{who}</span>
                        <span class="font-mono">{formatPrice(amount)}</span>
                    </div>
                {/each}
            </div>
        </div>
      </div>

      <!-- Toolbar -->
      <div class="flex justify-between items-center">
        <h4 class="font-bold text-sm uppercase opacity-70">Liste des transactions</h4>
        {#if !showAddForm}
            <button class="btn btn-primary btn-sm" onclick={() => showAddForm = true}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Ajouter une dépense
            </button>
        {/if}
      </div>

      <!-- Add Expense Form -->
      {#if showAddForm}
        <div class="card bg-base-200 shadow-md animate-in fade-in slide-in-from-top-4 duration-300">
          <div class="card-body p-4">
            <h4 class="card-title text-sm">{editingPurchaseId ? 'Modifier la dépense' : 'Nouvelle Dépense'}</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PriceInput
                bind:value={newExpense.invoiceTotal}
                disabled={loading}
              />
              <StoreInput
                bind:value={newExpense.store}
                suggestions={productsStore.uniqueStores}
                disabled={loading}
              />
              <WhoInput
                bind:value={newExpense.who}
                suggestions={productsStore.uniqueWho}
                disabled={loading}
              />
              <CommentTextarea
                bind:value={newExpense.notes}
                disabled={loading}
              />
            </div>
            <div class="card-actions justify-end mt-2">
              <button class="btn btn-sm btn-ghost" onclick={resetForm}>Annuler</button>
              <button class="btn btn-sm btn-primary" onclick={handleAddOrUpdateExpense} disabled={loading}>
                {#if loading}<span class="loading loading-spinner loading-xs"></span>{/if}
                {editingPurchaseId ? 'Enregistrer' : 'Ajouter'}
              </button>
            </div>
            {#if error}
              <div class="text-error text-xs mt-2">{error}</div>
            {/if}
          </div>
        </div>
      {/if}

      <!-- Purchases Table -->
      <div class="overflow-x-auto bg-base-100 rounded-lg border border-base-200">
        <table class="table table-zebra table-xs w-full">
          <thead class="bg-base-200 sticky top-0">
            <tr>
              <th class="cursor-pointer hover:bg-base-300" onclick={() => toggleSort("date")}>
                Date {sortColumn === 'date' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th>Description</th>
              <th class="cursor-pointer hover:bg-base-300" onclick={() => toggleSort("store")}>
                Magasin {sortColumn === 'store' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th class="cursor-pointer hover:bg-base-300" onclick={() => toggleSort("who")}>
                Qui {sortColumn === 'who' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th class="cursor-pointer hover:bg-base-300 text-right" onclick={() => toggleSort("amount")}>
                Montant {sortColumn === 'amount' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th><PenLine size={14}/></th>
            </tr>
          </thead>
          <tbody>
            {#each displayedPurchases as purchase (purchase.$id)}
              <tr class="hover">
                <td class="whitespace-nowrap">{formatDate(purchase.orderDate || purchase.$createdAt)}</td>

                <td class="max-w-xs truncate">
                    {#if purchase.status === 'expense'}
                        <span class="italic text-base-content/70">{purchase.notes || "-"}</span>
                    {:else}
                        <span class="font-medium">{purchase['_productName'] || "Produit inconnu"}</span>
                        {#if purchase.notes}
                            <span class="text-xs text-base-content/50 ml-1">- {purchase.notes}</span>
                        {/if}
                    {/if}
                </td>
                <td>{purchase.store || "-"}</td>
                <td>{purchase.who || "-"}</td>
                <td class="text-right font-mono font-bold">
                    {formatPrice(purchase.invoiceTotal || purchase.price)}
                </td>
                <td>
                    <button class="btn btn-ghost btn-square" onclick={() => startEdit(purchase)}>
                        <SquarePen size={14}/>
                    </button>
                </td>
              </tr>
            {/each}
            {#if displayedPurchases.length === 0}
                <tr>
                    <td colspan="7" class="text-center py-8 text-base-content/50">Aucune dépense trouvée</td>
                </tr>
            {/if}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Footer -->
    <div class="py-1 px-4 border-t border-base-300 bg-base-200 flex justify-between items-center sticky bottom-0 z-10">
          <button class="btn btn-ghost ms-auto" onclick={() => (isOpen = false)}>Fermer</button>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button onclick={() => (isOpen = false)}>close</button>
  </form>
</dialog>
