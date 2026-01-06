<script lang="ts">
  import { Package, ArrowRight } from "@lucide/svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import { materielStore } from "$lib/stores/MaterielStore.svelte";

  interface Props {
    loading?: boolean;
  }

  let { loading = false }: Props = $props();

  const myMaterielsCount = $derived(materielStore.myMateriels.length);
  const teamMaterielsCount = $derived(materielStore.teamMateriels.length);
  const totalMaterielsCount = $derived(myMaterielsCount + teamMaterielsCount);
  const shareableCount = $derived(materielStore.shareableMateriels.length);
</script>

<div class="card border-base-200 bg-base-100 border shadow-xl">
  <div class="card-body">
    <h2 class="card-title flex items-center gap-2 text-lg">
      <Package class="text-primary h-6 w-6" />
      Matériel
    </h2>

    {#if loading}
      <div class="flex items-center justify-center py-8">
        <div class="loading loading-spinner loading-md"></div>
      </div>
    {:else}
      <div class="space-y-3">
        <!-- Mon matériel -->
        <div class="flex items-center justify-between">
          <div>
            <div class="text-base-content/70 text-sm">Mon matériel</div>
            <div class="text-2xl font-bold">{myMaterielsCount}</div>
          </div>
        </div>

        <!-- Matériel d'équipe -->
        {#if teamMaterielsCount > 0}
          <div class="divider divider-vertical my-1"></div>
          <div class="flex items-center justify-between">
            <div>
              <div class="text-base-content/70 text-sm">Matériel d'équipe</div>
              <div class="text-2xl font-bold">{teamMaterielsCount}</div>
            </div>
          </div>
        {/if}

        <!-- Matériel partageable -->
        {#if shareableCount > 0}
          <div class="divider divider-vertical my-1"></div>
          <div class="flex items-center justify-between">
            <div>
              <div class="text-base-content/70 text-sm">Partageable</div>
              <div class="text-2xl font-bold">{shareableCount}</div>
            </div>
          </div>
        {/if}

        <!-- Total -->
        <div class="divider divider-vertical my-1"></div>
        <div class="flex items-center justify-between">
          <div>
            <div class="text-base-content/70 text-sm">Total</div>
            <div class="text-primary text-2xl font-bold">{totalMaterielsCount}</div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="card-actions mt-4">
        <button
          class="btn btn-primary btn-block btn-sm"
          onclick={() => navigate("/materiel")}
        >
          Gérer le matériel
          <ArrowRight class="h-4 w-4" />
        </button>
      </div>
    {/if}
  </div>
</div>
