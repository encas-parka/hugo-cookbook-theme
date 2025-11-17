<script lang="ts">
import {globalState} from '../../stores/GlobalState.svelte';

let {children} = $props();

</script>

<dialog class="modal" onclose={() => globalState.modal.isOpen = false}>
  <div class="modal-box flex w-full max-w-6xl flex-col overflow-auto">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">

    </div>
  </div>
</dialog>
