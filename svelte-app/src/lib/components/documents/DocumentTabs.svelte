<script lang="ts">
  import { Edit3, Eye } from "@lucide/svelte";

  // Props
  interface Props {
    mode: "edit" | "preview";
    disabled?: boolean;
    onModeChange: (mode: "edit" | "preview") => void;
  }

  let { mode, disabled = false, onModeChange }: Props = $props();

  function handleModeChange(newMode: "edit" | "preview") {
    if (!disabled) {
      onModeChange(newMode);
    }
  }
</script>

<div class="rounded-box bg-secondary/10 px-4 py-1">
  <div class="tabs tabs-border justify-center">
    <button
      class="tab gap-2 font-semibold"
      class:tab-active={mode === "edit"}
      onclick={() => handleModeChange("edit")}
      disabled={disabled}
    >
      <Edit3 class="h-4 w-4" />
      Édition
    </button>
    <button
      class="tab gap-2 font-semibold"
      class:tab-active={mode === "preview"}
      onclick={() => handleModeChange("preview")}
      >
      <Eye class="h-4 w-4" />
      Aperçu
    </button>
  </div>
</div>
