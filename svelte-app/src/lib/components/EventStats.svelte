<script lang="ts">
  import {
    ChartBar,
    Utensils,
    CookingPot,
    Users,
    CalendarDays,
    Calendar,
    ShoppingCart,
  } from "@lucide/svelte";

  let { eventStats } = $props();
</script>

<div class="flex flex-wrap gap-2 font-medium">
  <!-- Repas -->
  <div class="badge badge-soft badge-primary badge-lg flex items-center gap-2">
    <CalendarDays class="h-4 w-4" />
    <span>{eventStats.mealsCount} Repas</span>
  </div>

  <!-- Couverts -->
  <div
    class="badge badge-soft badge-secondary badge-lg flex items-center gap-2"
  >
    <Utensils class="h-4 w-4" />
    <span>{eventStats.totalGuests} Couverts</span>
  </div>

  <!-- Recettes -->
  <div class="badge badge-soft badge-accent badge-lg flex items-center gap-2">
    <CookingPot class="h-4 w-4" />
    <span>{eventStats.totalRecipes} Recettes</span>
  </div>

  <!-- Ingrédients -->
  <div class="badge badge-soft badge-warning badge-lg flex items-center gap-2">
    <ShoppingCart class="h-4 w-4" />
    <span>{eventStats.totalIngredients} Ingrédients</span>
  </div>

  <!-- Contributeurs -->
  <div class="badge badge-soft badge-info badge-lg flex items-center gap-2">
    <Users class="h-4 w-4" />
    <span>{eventStats.contributorsStats.total} Participant·es</span>
  </div>
</div>
