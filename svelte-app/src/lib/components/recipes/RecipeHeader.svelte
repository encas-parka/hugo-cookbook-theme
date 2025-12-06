<script lang="ts">
  import { ChefHat } from "@lucide/svelte";

  interface Props {
    title: string;
    author?: string;
    category?: string;
  }

  let { title, author, category }: Props = $props();
</script>

<div class="mb-6">
  <h1 class="mb-2 flex items-center gap-3 text-4xl font-bold">
    <ChefHat class="text-primary h-10 w-10" />
    {title}
  </h1>

  {#if author}
    <p class="text-base-content/60 text-lg">une recette de {author}</p>
  {/if}
</div>
