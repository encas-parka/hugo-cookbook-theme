<script lang="ts">
  import { navigate, router } from "$lib/services/simple-router.svelte";

  // Props : eventId uniquement, l'onglet actif est déterminé par l'URL
  let { eventId }: { eventId: string } = $props();

  // Configuration des onglets pour les pages d'événement
  const eventTabs = [
    { label: "Éditer l'événement", path: "/dashboard/eventEdit" },
    { label: "Voir les recettes", path: "/dashboard/eventEdit/recipes" },
    { label: "Listes des produits", path: "/dashboard/eventEdit/products" },
  ];

  // Déterminer l'onglet actif depuis l'URL courante
  const activeTab = $derived.by(() => {
    const currentPath = router.path;

    // Pattern matching pour déterminer l'onglet
    if (currentPath.includes("/eventEdit/recipes/")) return 1;
    if (currentPath.includes("/eventEdit/products/")) return 2;
    // Par défaut, si on est sur /dashboard/eventEdit/:id (sans /recipes ou /products)
    if (currentPath.includes("/eventEdit/") && eventId) {
      // Vérifier que le path contient bien l'eventId
      const eventEditPattern = new RegExp(
        `/dashboard/eventEdit/${eventId}(/?$)`,
      );
      if (eventEditPattern.test(currentPath)) return 0;
    }

    return 0; // Défaut
  });

  function navigateToTab(index: number) {
    if (!eventId) return;

    if (index === 1) {
      navigate(`/dashboard/eventEdit/recipes/${eventId}`);
    } else if (index === 2) {
      navigate(`/dashboard/eventEdit/products/${eventId}`);
    } else {
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
