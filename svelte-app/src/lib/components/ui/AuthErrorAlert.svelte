<script lang="ts">
  import { TriangleAlertIcon,  LogInIcon } from '@lucide/svelte';

  interface Props {
    message: string | null;
  };

  let {message} : Props = $props();

</script>

<div class="alert bg-error/20">
    <div class="flex items-start gap-3 ">
      <TriangleAlertIcon class="stroke-current shrink-0 h-6 w-6 mt-0.5" />

      <div class="flex-1">
        <h3 class="font-bold">Authentification requise</h3>
        <div class="text-sm">{message}</div>
    </div>

    </div>

</div>
