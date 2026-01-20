<script lang="ts">
  interface Props {
    message: string;
  }

  let { message }: Props = $props();
</script>

<div class="alert alert-error max-md:alert-vertical shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"
    />
  </svg>
  <div>
    <h3 class="font-bold">Erreur</h3>
    <div class="text-sm">{message}</div>
  </div>
</div>
