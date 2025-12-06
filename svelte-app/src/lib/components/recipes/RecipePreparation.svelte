<script lang="ts">
  import { Lightbulb } from "@lucide/svelte";
  import SvelteMarkdown from "svelte-markdown";

  interface Astuce {
    astuce: string;
  }

  interface Props {
    preparation: string;
    preparation24h?: string;
    astuces?: Astuce[];
  }

  let { preparation, preparation24h, astuces = [] }: Props = $props();
</script>

<div class="space-y-4">
  <!-- Alerte préparation 24h -->
  {#if preparation24h}
    <div class="alert alert-warning">
      <div>
        <h5 class="font-bold">A prévoir à l'avance !</h5>
        <div class="prose prose-sm max-w-none">
          <SvelteMarkdown source={preparation24h} />
        </div>
      </div>
    </div>
  {/if}

  <!-- Instructions de préparation -->
  <div class="prose max-w-none">
    <SvelteMarkdown source={preparation} />
  </div>

  <!-- Astuces -->
  {#if astuces.length > 0}
    <div class="space-y-2">
      {#each astuces as { astuce }}
        <div class="card bg-base-200">
          <div class="card-body p-4">
            <div class="flex items-start gap-2">
              <Lightbulb class="text-warning mt-0.5 h-5 w-5 flex-shrink-0" />
              <div>
                <div class="text-sm font-semibold">Astuce :</div>
                <div class="text-sm">{astuce}</div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
