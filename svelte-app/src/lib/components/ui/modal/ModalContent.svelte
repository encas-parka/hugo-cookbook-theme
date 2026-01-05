<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="flex-1 overflow-y-auto px-4 py-4">
  {@render children()}
</div>
