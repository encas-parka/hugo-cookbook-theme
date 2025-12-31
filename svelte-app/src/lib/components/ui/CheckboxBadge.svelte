<script lang="ts">
  interface Props {
    checked: boolean;
    label: string;
    color?:
      | "primary"
      | "secondary"
      | "accent"
      | "success"
      | "warning"
      | "error"
      | "info";
    rounded?: string;
    padding?: string;
    disabled?: boolean;
    badge?: string | null;
    size?: "xs" | "sm" | "lg" | "md";
    onchange: () => void;
  }

  let {
    checked,
    label,
    color = "secondary",
    rounded = "rounded-lg",
    padding = "px-2 py-0.5 pe-3",
    disabled = false,
    badge = null,
    size = "sm",
    onchange,
  }: Props = $props();

  // Classes CSS basées sur la couleur
  const bgClass = $derived(
    checked
      ? color === "primary"
        ? "bg-primary/30 hover:bg-primary/20"
        : color === "secondary"
          ? "bg-secondary/30 hover:bg-secondary/20"
          : color === "accent"
            ? "bg-accent/30 hover:bg-accent/20"
            : color === "success"
              ? "bg-success/30 hover:bg-success/20"
              : color === "warning"
                ? "bg-warning/30 hover:bg-warning/20"
                : color === "error"
                  ? "bg-error/30 hover:bg-error/20"
                  : color === "info"
                    ? "bg-info/30 hover:bg-info/20"
                    : "bg-secondary/30 hover:bg-secondary/20"
      : color === "primary"
        ? "bg-primary/10 hover:bg-primary/5"
        : color === "secondary"
          ? "bg-secondary/10 hover:bg-secondary/5"
          : color === "accent"
            ? "bg-accent/10 hover:bg-accent/5"
            : color === "success"
              ? "bg-success/10 hover:bg-success/5"
              : color === "warning"
                ? "bg-warning/10 hover:bg-warning/5"
                : color === "error"
                  ? "bg-error/10 hover:bg-error/5"
                  : color === "info"
                    ? "bg-info/10 hover:bg-info/5"
                    : "bg-secondary/10 hover:bg-secondary/5",
  );

  const badgeColorClass = $derived(
    color === "primary"
      ? "badge-primary"
      : color === "secondary"
        ? "badge-secondary"
        : color === "accent"
          ? "badge-accent"
          : color === "success"
            ? "badge-success"
            : color === "warning"
              ? "badge-warning"
              : color === "error"
                ? "badge-error"
                : color === "info"
                  ? "badge-info"
                  : "badge-secondary",
  );

  const sizeClass = $derived(
    size === "xs"
      ? "checkbox-xs"
      : size === "sm"
        ? "checkbox-sm"
        : size === "lg"
          ? "checkbox-lg"
          : size === "md"
            ? "checkbox-md"
            : "checkbox-sm",
  );
</script>

<label
  class="text-base-content/80 label {bgClass} cursor-pointer justify-start {rounded} {padding}"
  class:opacity-50={disabled}
>
  <input
    type="checkbox"
    class="checkbox {sizeClass} bg-base-100"
    {checked}
    {onchange}
    {disabled}
  />
  <span class="label-text flex-1">{label}</span>
  {#if badge}
    <span class="badge badge-sm {badgeColorClass}">{badge}</span>
  {/if}
</label>
