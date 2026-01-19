<script lang="ts">
  import { ArrowDownNarrowWide, ArrowUp, ArrowDown } from "@lucide/svelte";

  type SortBy = "title" | "$createdAt" | "$updatedAt";

  interface Props {
    sortBy: SortBy;
    sortOrder: "asc" | "desc";
    onSortChange: (sortBy: SortBy, sortOrder: "asc" | "desc") => void;
  }

  let { sortBy, sortOrder, onSortChange }: Props = $props();

  // Définit l'ordre pour chaque critère
  const getSortOrder = (field: SortBy): "asc" | "desc" | "inactive" => {
    if (sortBy !== field) return "inactive";
    return sortOrder;
  };

  // Gère le clic sur un bouton de tri
  const handleSortClick = (field: SortBy) => {
    if (field === "title") {
      // Titre: toggle entre asc et desc
      onSortChange(
        "title",
        sortBy === "title" && sortOrder === "asc" ? "desc" : "asc",
      );
    } else {
      // Dates: inactive -> desc -> asc -> inactive
      if (sortBy !== field) {
        onSortChange(field, "desc");
      } else if (sortOrder === "desc") {
        onSortChange(field, "asc");
      } else {
        onSortChange("title", "asc"); // Retour au titre
      }
    }
  };

  // Classes pour les différents états
  const getButtonSortClasses = (field: SortBy) => {
    const order = getSortOrder(field);
    const baseClasses = "btn btn-sm btn-primary btn-outline gap-2";

    if (order === "inactive") {
      return `${baseClasses}`;
    } else if (order === "asc") {
      return `${baseClasses} btn-active`;
    } else {
      return `${baseClasses} btn-active`;
    }
  };

  const getSortIcon = (field: SortBy) => {
    const order = getSortOrder(field);
    if (order === "inactive") return null;
    if (order === "asc") return ArrowUp;
    return ArrowDown;
  };
</script>

<div
  class="bg-base-300 rounded-box flex flex-wrap items-center justify-between gap-6 px-6 py-6"
>
  <fieldset class="fieldset w-full">
    <legend class="legend label"
      ><ArrowDownNarrowWide class="inline size-4" /> Trier par :</legend
    >

    <div class="btn-group">
      <button
        class={getButtonSortClasses("title")}
        onclick={() => handleSortClick("title")}
        aria-label="Trier par titre"
      >
        Titre
      </button>

      <button
        class={getButtonSortClasses("$createdAt")}
        onclick={() => handleSortClick("$createdAt")}
        aria-label="Trier par date de création"
      >
        {#if getSortIcon("$createdAt")}
          {@const Icon = getSortIcon("$createdAt")}
          <Icon size={16} />
        {/if}
        Date de création
      </button>

      <button
        class={getButtonSortClasses("$updatedAt")}
        onclick={() => handleSortClick("$updatedAt")}
        aria-label="Trier par date de modification"
      >
        {#if getSortIcon("$updatedAt")}
          {@const Icon = getSortIcon("$updatedAt")}
          <Icon size={16} />
        {/if}
        Date de modification
      </button>
    </div>
  </fieldset>
</div>
