<script lang="ts">
  import EventMealCard from "$lib/components/eventEdit/EventMealCard.svelte";
  import PermissionsManager from "$lib/components/PermissionsManager.svelte";
  import { toastService } from "$lib/services/toast.service.svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { nativeTeamsStore as teamsStore } from "$lib/stores/NativeTeamsStore.svelte";
  import type { EventMeal } from "$lib/types/events";
  import { Calendar, Plus, Save } from "@lucide/svelte";
  import { nanoid } from "nanoid";
  import { flip } from "svelte/animate";
  import { navigate } from "../services/simple-router.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";

  // ============================================================================
  // STATE
  // ============================================================================

  let meals = $state<EventMeal[]>([]);
  let eventName = $state("");
  let isBusy = $state(false);
  let editingMealIndex = $state<string | null>(null);

  // Meals triés par date pour l'affichage
  const sortedMeals = $derived(
    [...meals].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    ),
  );

  // Il y a des modifications si on a des données
  const hasData = $derived(eventName.trim().length > 0 || meals.length > 0);

  // Teams sélectionnées pour les permissions
  let selectedTeams = $state<string[]>([]);

  // ============================================================================
  // NAVBAR CONFIGURATION
  // ============================================================================

  $effect(() => {
    navBarStore.setConfig({
      actions: navActions,
    });
  });

  // ============================================================================
  // VALIDATION
  // ============================================================================

  function validateEventData() {
    if (!eventName.trim()) {
      return {
        isValid: false,
        errorMessage: "Veuillez renseigner le nom de l'événement",
      };
    }

    if (meals.length === 0) {
      return {
        isValid: false,
        errorMessage: "Veuillez ajouter au moins un repas",
      };
    }

    // Vérification des doublons
    const allDatesValidation = meals.map((m) => m.date);
    const duplicatedDates = allDatesValidation.filter(
      (date, index, self) => self.indexOf(date) !== index,
    );

    if (duplicatedDates.length > 0) {
      const duplicatedDatesFormatted = duplicatedDates.map((date) => {
        try {
          return new Date(date).toLocaleString("fr-FR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
        } catch (e) {
          return date;
        }
      });

      return {
        isValid: false,
        errorMessage: `Certaines dates sont en double: ${duplicatedDatesFormatted.join(", ")}`,
      };
    }

    return { isValid: true };
  }

  // ============================================================================
  // SAUVEGARDE
  // ============================================================================

  async function saveEventData(): Promise<boolean> {
    const validation = validateEventData();
    if (!validation.isValid) {
      toastService.error(validation.errorMessage || "Erreur de validation");
      return false;
    }

    // Initialiser contributors avec l'utilisateur courant
    const contributorsToSave = [
      {
        id: globalState.userId || "",
        name: globalState.userName(),
        status: "accepted" as const,
        invitedAt: new Date().toISOString(),
        respondedAt: new Date().toISOString(),
      },
    ];

    const allDatesSorted = Array.from(
      new Set(sortedMeals.map((m) => m.date)),
    ).sort();

    const eventData = {
      name: eventName,
      allDates: allDatesSorted as string[],
      dateStart: allDatesSorted.length > 0 ? allDatesSorted[0] : "",
      dateEnd:
        allDatesSorted.length > 0
          ? allDatesSorted[allDatesSorted.length - 1]
          : "",
      teams: selectedTeams,
      contributors: contributorsToSave,
      meals: sortedMeals,
    };

    try {
      const savedEvent = await eventsStore.createEvent(eventData);
      navigate(`/dashboard/eventEdit/${savedEvent.$id}`);
      return true;
    } catch (error) {
      console.error("Erreur sauvegarde:", error);
      toastService.error("Erreur lors de la création");
      return false;
    }
  }

  async function handleSave() {
    isBusy = true;

    const success = await saveEventData();

    if (success) {
      toastService.success("Événement créé");
    }

    isBusy = false;
  }

  // ============================================================================
  // HANDLERS
  // ============================================================================

  function handleNameInput(e: Event) {
    eventName = (e.target as HTMLInputElement).value;
  }

  function addMeal() {
    const mealId = nanoid(6);

    // Déterminer la date par défaut
    let defaultDateTime: string;

    if (sortedMeals.length === 0) {
      const today = new Date();
      today.setHours(12, 0, 0, 0);
      defaultDateTime = today.toISOString();
    } else {
      const lastMeal = sortedMeals[sortedMeals.length - 1];
      const lastDate = new Date(lastMeal.date);
      const lastHour = lastDate.getHours();

      if (lastHour < 14) {
        lastDate.setHours(20, 0, 0, 0);
      } else {
        lastDate.setDate(lastDate.getDate() + 1);
        lastDate.setHours(12, 0, 0, 0);
      }

      defaultDateTime = lastDate.toISOString();
    }

    const newMeal: EventMeal = {
      id: mealId,
      date: defaultDateTime,
      guests: 100,
      recipes: [],
    };

    meals = [...meals, newMeal];
    editingMealIndex = mealId;
  }

  function removeMeal(mealId: string) {
    meals = meals.filter((m) => m.id !== mealId);
  }

  function toggleEditMeal(mealId: string) {
    editingMealIndex = editingMealIndex === mealId ? null : mealId;
  }

  // ============================================================================
  // CLEANUP
  // ============================================================================

  $effect(() => {
    return () => {
      navBarStore.reset();
    };
  });
</script>

{#snippet navActions()}
  <div class="flex items-center gap-2">
    <button
      class="btn btn-accent btn-sm"
      onclick={handleSave}
      disabled={isBusy || !hasData}
    >
      {#if isBusy}
        <span class="loading loading-spinner loading-xs text-primary"></span>
      {:else}
        <Save size={18} class="mr-1" />
      {/if}
      <span class="font-bold">Créer</span>
    </button>
  </div>
{/snippet}

<div class="bg-base-200 min-h-lvh space-y-6 px-2 pt-4 pb-20 md:px-20">
  <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
    <div class="min-w-80 flex-1 gap-2">
      <input
        type="text"
        class="input input-lg min-w-full shadow-md"
        value={eventName}
        oninput={handleNameInput}
        disabled={isBusy}
        placeholder="Nom de l'événement"
      />
    </div>
  </div>

  {#if isBusy}
    <div class="flex items-center justify-center py-20">
      <div class="flex flex-col items-center gap-4">
        <span class="loading loading-spinner loading-lg text-primary"></span>
        <p class="text-base-content/60">Création de l'événement...</p>
      </div>
    </div>
  {:else}
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <!-- Colonne Gauche : Permissions -->
      <div class="space-y-6 lg:col-span-1">
        <PermissionsManager
          contributors={[]}
          {teamsStore}
          {eventsStore}
          userId={globalState.userId || ""}
          userTeams={globalState.userTeams || []}
          eventId={undefined}
        />
      </div>

      <!-- Colonne Droite : Repas -->
      <div class="space-y-6 md:px-4 lg:col-span-3">
        <div class="mb-6 flex items-center justify-between">
          <h3 class="card-title text-lg">
            Repas & Menus ({sortedMeals.length})
          </h3>
          <button class="btn btn-primary btn-sm" onclick={addMeal}>
            <Plus class="mr-1 h-4 w-4" />
            Ajouter un repas
          </button>
        </div>

        {#if sortedMeals.length === 0}
          <div
            class="text-base-content/60 bg-base-200 rounded-box border-base-200 flex flex-col items-center justify-center border-2 border-dashed py-12"
          >
            <div class="bg-base-200 mb-4 rounded-full p-4">
              <Calendar class="h-8 w-8 opacity-50" />
            </div>
            <p class="font-medium">Aucun repas planifié</p>
            <p class="mt-1 text-sm">
              Commencez par ajouter un repas à votre événement
            </p>
          </div>
        {:else}
          <div class="space-y-4">
            {#each sortedMeals as meal (meal.id)}
              <div animate:flip={{ delay: 100, duration: 400 }}>
                <EventMealCard
                  bind:meal={meals[meals.findIndex((m) => m.id === meal.id)]}
                  isEditing={editingMealIndex === meal.id}
                  onEditToggle={() => toggleEditMeal(meal.id || "")}
                  onDelete={() => removeMeal(meal.id || "")}
                  allDates={meals.map((m) => m.date)}
                  disabled={false}
                />
              </div>
            {/each}
          </div>
        {/if}
        <div class="flex">
          <button
            class="btn btn-outline btn-primary btn-block mt-4"
            onclick={addMeal}
          >
            <Plus class="mr-1 h-4 w-4" />
            Ajouter un repas
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>
