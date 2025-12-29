<script lang="ts">
  interface Props {
    value: string | null;
    disabled?: boolean;
    id?: string;
  }

  let { value = $bindable(), disabled = false, id }: Props = $props();
</script>

<textarea
  class="textarea w-full text-sm"
  bind:value
  placeholder="Commentaire (optionnel)"
  rows="2"
  maxlength="250"
  {disabled}
  {id}
></textarea>
