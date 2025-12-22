<script lang="ts">
  import { navigate } from "$lib/services/simple-router.svelte";

  // Props pour recevoir l'eventId et l'onglet actif
  let { eventId, activeTab = 0 }: { eventId: string; activeTab?: number } =
    $props();

  // Configuration des onglets pour les pages d'événement
  const eventTabs = [
    { label: "Éditer l'événement", path: "/dashboard/eventEdit" },
    { label: "Voir les recettes", path: "/dashboard/eventEdit/recipes" },
    { label: "Listes des produits", path: "/dashboard/eventEdit" },
  ];

  function navigateToTab(index: number) {
    if (!eventId) return;

    const tab = eventTabs[index];
    if (index === 1) {
      // Onglet "Voir les recettes" - nouvelle route /recipes
      navigate(`/dashboard/eventEdit/recipes/${eventId}`);
    } else if (index === 2) {
      // Onglet "Voir les produits" - nouvelle route /products
      navigate(`/dashboard/eventEdit/products/${eventId}`);
    } else {
      // Onglet "Éditer l'événement"
      navigate(`/dashboard/eventEdit/${eventId}`);
    }
  }
</script>

<div class="tabs tabs-border">
  {#each eventTabs as tab, index (index)}
    <button
      class="tab font-medium {index === activeTab ? 'tab-active' : ''}"
      onclick={() => navigateToTab(index)}
    >
      {tab.label}
    </button>
  {/each}
</div>
