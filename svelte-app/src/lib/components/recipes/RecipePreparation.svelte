<script lang="ts">
  import { CircleAlert, CookingPot, Lightbulb } from "@lucide/svelte";
  import SvelteMarkdown from "@humanspeak/svelte-markdown";
  import Fieldset from "../ui/Fieldset.svelte";

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
    <Fieldset
      legend="Préparation à l'avance"
      iconComponent={CircleAlert}
      legendSize="text-lg"
      iconSize={18}
    >
      <div class="prose max-w-none">
        <SvelteMarkdown source={preparation24h} />
      </div>
    </Fieldset>
  {/if}

  <!-- Instructions de préparation -->
  <Fieldset
    legend="Préparation"
    iconComponent={CookingPot}
    legendSize="text-lg"
  >
    <div class="prose max-w-none">
      <SvelteMarkdown source={preparation} />
    </div>
  </Fieldset>

  <!-- Astuces -->
  {#if astuces.length > 0}
    <div class="space-y-2 print:space-y-1">
      {#each astuces as { astuce }}
        <div class="card bg-base-100 border print:border-black print:bg-white">
          <div class="card-body p-4 print:p-2">
            <div class="flex items-start gap-2">
              <Lightbulb
                class="text-warning mt-0.5 h-5 w-5 flex-shrink-0 print:hidden"
              />
              <div>
                <div class="text-sm font-semibold print:text-xs">Astuce :</div>
                <div class="text-sm print:text-xs">{astuce}</div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
