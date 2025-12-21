<script lang="ts">
  import { ChefHat } from "@lucide/svelte";

  interface Props {
    title: string;
    author?: string;
    category?: string;
  }

  let { title, author, category }: Props = $props();
</script>

<div class="mb-6 print:hidden">
  <h1
    class="mb-2 flex items-center gap-3 text-4xl font-bold print:gap-2 print:text-2xl"
  >
    <ChefHat class="text-primary h-10 w-10 print:h-6 print:w-6" />
    {title}
  </h1>

  {#if author}
    <p class="text-base-content/60 text-lg print:text-sm">
      une recette de {author}
    </p>
  {/if}
</div>
