<script lang="ts">
  import { Package, ArrowRight } from "@lucide/svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import { materielStore } from "$lib/stores/MaterielStore.svelte";

  interface Props {
    loading?: boolean;
  }

  let { loading = false }: Props = $props();
</script>

<div class="card border-base-200 bg-base-100 border shadow-xl">
  <div class="card-body">
    <h2 class="card-title flex items-center gap-2 text-xl">
      <Package class="text-primary h-6 w-6" />
      Matériel
    </h2>

    {#if loading}
      <div class="flex items-center justify-center py-8">
        <div class="loading loading-spinner loading-md"></div>
      </div>
    {:else}
      <div class="space-y-3">
        <div class="card card-sm bg-base-300">
          <div class="card-body text-center">
            <p class="font-medium">Gérez le matériel collectif de cantine :</p>
            <p>inventaire, gestion des emprunt, partage, etc.</p>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="card-actions mt-4">
        <button
          class="btn btn-primary btn-soft btn-block btn-lg"
          onclick={() => navigate("/dashboard/materiel")}
        >
          Inventaire
          <ArrowRight class="h-4 w-4" />
        </button>
        <button
          class="btn btn-primary btn-soft btn-block btn-lg"
          onclick={() => navigate("/dashboard/loans")}
        >
          Réservations
          <ArrowRight class="h-4 w-4" />
        </button>
      </div>
    {/if}
  </div>
</div>
