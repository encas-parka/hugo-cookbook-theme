<script lang="ts">
  import {
    ArrowLeft,
    Save,
    Calendar,
    Users,
    Plus,
    UserPlus,
    X,
    AlertCircle,
  } from "@lucide/svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import { teamsStore } from "$lib/stores/TeamsStore.svelte";
  import type { CreateEventData, Meal } from "$lib/types/appwrite.types";
  import { nanoid } from "nanoid";
  import EventMealCard from "$lib/components/eventEdit/EventMealCard.svelte";
  import Fieldset from "$lib/components/ui/Fieldset.svelte";
  import { getEvent, parseMeals } from "$lib/services/appwrite-events";
  import { fade } from "svelte/transition";
  import { dateToDateTime } from "$lib/utils/date-helpers";
  import { flip } from "svelte/animate";

  // Props du router
  let { params } = $props<{ params?: Record<string, string> }>();

  const eventId = $derived(params?.id);

  // État du formulaire
  let eventName = $state("");
  let selectedTeams = $state<string[]>([]);
  let contributors = $state<string[]>([]);
  let newContributorEmail = $state("");
  let meals = $state<Meal[]>([]);

  let loading = $state(false);
  let loadingEvent = $state(false);
  let error = $state<string | null>(null);

  // État pour gérer l'édition unique des repas
  let editingMealIndex = $state<string | null>(null);

  // Calculer automatiquement les dates depuis les repas (garder l'heure complète)
  const allDates = $derived.by(() => {
    const dates = meals.map((meal) => meal.date).filter(Boolean);
    return [...new Set(dates)].sort();
  });

  // Les repas sont maintenant maintenus triés par date dans le tableau meals
  // Pas besoin d'un tableau dérivé sortedMeals

  const dateStart = $derived(allDates.length > 0 ? allDates[0] : "");
  const dateEnd = $derived(
    allDates.length > 0 ? allDates[allDates.length - 1] : "",
  );

  // Charger l'événement si un ID est fourni
  $effect(() => {
    if (eventId) {
      loadingEvent = true;
      error = null;

      getEvent(eventId)
        .then((event) => {
          if (event) {
            // Remplir les states avec les données de l'événement
            eventName = event.name || "";
            selectedTeams = event.teams || [];
            contributors = event.contributors || [];
            meals = parseMeals(event).sort((a, b) =>
              a.date.localeCompare(b.date),
            );
          } else {
            error = "Événement introuvable";
          }
        })
        .catch((err) => {
          console.error("Erreur lors du chargement de l'événement:", err);
          error = "Erreur lors du chargement de l'événement";
        })
        .finally(() => {
          loadingEvent = false;
        });
    } else {
      // Réinitialiser le formulaire pour un nouvel événement
      eventName = "";
      selectedTeams = [];
      contributors = [];
      meals = [];
    }
  });

  function goBack() {
    history.back();
  }

  // Gestion des Repas
  function addMeal() {
    // Générer un UUID court pour identifier ce repas de manière unique
    const mealId = nanoid(6);

    // Déterminer la date/heure par défaut en fonction de la dernière date
    let defaultDateTime: string;

    if (allDates.length === 0) {
      // S'il n'y a aucune date, utiliser aujourd'hui à midi
      const today = new Date();
      today.setHours(12, 0, 0, 0);
      defaultDateTime = today.toISOString();
    } else {
      // Récupérer la dernière date dans allDates (qui est déjà trié)
      const lastDateString = allDates[allDates.length - 1];
      const lastDate = new Date(lastDateString);
      const lastHour = lastDate.getHours();

      // Appliquer notre logique: midi (12h) -> soir (20h) -> lendredi midi
      if (lastHour < 14) {
        // Si le dernier repas était à midi, proposer le soir du même jour
        lastDate.setHours(20, 0, 0, 0);
      } else {
        // Si le dernier repas était le soir, proposer midi le lendemain
        lastDate.setDate(lastDate.getDate() + 1);
        lastDate.setHours(12, 0, 0, 0);
      }

      defaultDateTime = lastDate.toISOString();
    }

    // Vérifier si un repas existe déjà avec cette date+time (doublon)
    if (meals.some((meal) => meal.date === defaultDateTime)) {
      error = "Un repas existe déjà à cette date et heure";
      return;
    }

    const newMeal: Meal = {
      id: mealId, // Ajouter un UUID court
      date: defaultDateTime,
      guests: 100,
      recipes: [],
    };

    // Ajouter le nouveau repas et trier par date
    meals = [...meals, newMeal].sort((a, b) => a.date.localeCompare(b.date));
    // Mettre le nouveau repas en mode édition en utilisant l'UUID
    editingMealIndex = mealId;
  }

  function removeMeal(mealId: string) {
    meals = meals.filter((meal) => meal.id !== mealId);
  }

  function duplicateMeal(mealId: string) {
    return; // FIX setDate pour éviter conflit
    const mealToDuplicate = meals.find((meal) => meal.id === mealId);
    if (!mealToDuplicate) return;

    // Créer une copie du repas avec un nouvel UUID
    const duplicatedMeal = {
      ...JSON.parse(JSON.stringify(mealToDuplicate)),
      id: nanoid(6), // Générer un nouvel UUID pour le duplicata
    };

    const originalDate = new Date(mealToDuplicate.date);
    originalDate.setDate(originalDate.getDate() + 1);
    duplicatedMeal.date = originalDate.toISOString();

    // Ajouter et trier par date
    meals = [...meals, duplicatedMeal].sort((a, b) =>
      a.date.localeCompare(b.date),
    );
  }

  // Gestion des Contributeurs
  function addContributor() {
    if (newContributorEmail && !contributors.includes(newContributorEmail)) {
      contributors = [...contributors, newContributorEmail];
      newContributorEmail = "";
    }
  }

  function removeContributor(email: string) {
    contributors = contributors.filter((c) => c !== email);
  }

  function toggleTeam(teamId: string) {
    if (selectedTeams.includes(teamId)) {
      selectedTeams = selectedTeams.filter((id) => id !== teamId);
    } else {
      selectedTeams = [...selectedTeams, teamId];
    }
  }

  function toggleEditMeal(mealId: string) {
    editingMealIndex = editingMealIndex === mealId ? null : mealId;
  }

  /* Gestion des keydown 'enter'|'tab' sur l'input searchRecipe */
  function handleEmptySearchSubmit(currentMealId: string) {
    // Obtenir l'index du repas dans le tableau
    const currentIndex = meals.findIndex((meal) => meal.id === currentMealId);

    // Vérifier s'il y a un prochain repas
    if (currentIndex < meals.length - 1) {
      // Ouvrir le prochain repas en mode édition
      const nextMeal = meals[currentIndex + 1];
      if (nextMeal.id) {
        editingMealIndex = nextMeal.id;
      } else {
        // Si le repas n'a pas d'ID, en générer un
        nextMeal.id = nanoid(6);
        editingMealIndex = nextMeal.id;
      }
    } else {
      // Créer un nouveau repas
      addMeal();
    }
  }

  function handleDateChanged(mealId: string, newDate: string) {
    // Réordonner les repas par date après un changement
    meals = meals.sort((a, b) => a.date.localeCompare(b.date));
  }

  async function handleSave() {
    if (!eventName) {
      error = "Veuillez renseigner le nom de l'événement";
      return;
    }

    if (meals.length === 0) {
      error = "Veuillez ajouter au moins un repas";
      return;
    }

    loading = true;
    error = null;

    try {
      const eventData: CreateEventData = {
        name: eventName,
        dateStart,
        dateEnd,
        allDates, // Tableau de toutes les dates uniques
        teams: selectedTeams,
        contributors,
        meals,
      };

      if (eventId) {
        // Mise à jour d'un événement existant
        await eventsStore.updateEvent(eventId, eventData);
      } else {
        // Création d'un nouvel événement
        await eventsStore.createEvent(eventData);
      }

      goBack();
    } catch (err) {
      console.error("Erreur lors de la sauvegarde de l'événement:", err);
      error =
        "Erreur lors de la sauvegarde de l'événement. Vérifiez votre connexion.";
    } finally {
      loading = false;
    }
  }
</script>

<div class="mx-auto max-w-11/12 space-y-6 px-4 py-8 pb-20">
  <!-- Header -->
  <div
    class="bg-base-100/95 border-base-200 flex items-center justify-between border-b py-4 backdrop-blur"
  >
    <div class="flex items-center gap-4">
      <button class="btn btn-ghost btn-circle" onclick={goBack}>
        <ArrowLeft class="h-6 w-6" />
      </button>
      <div>
        <h2 class="text-2xl font-bold">
          {eventId ? "Éditer" : "Nouvel"} Événement
        </h2>
        <p class="text-base-content/60 text-sm">
          {eventId
            ? "Modifier le menu et les repas"
            : "Créer un menu et planifier les repas"}
        </p>
      </div>
    </div>
    <button
      class="btn btn-primary"
      onclick={handleSave}
      disabled={loading || loadingEvent}
    >
      {#if loading}
        <span class="loading loading-spinner loading-sm"></span>
      {:else}
        <Save class="mr-2 h-4 w-4" />
      {/if}
      {eventId ? "Enregistrer" : "Créer l'événement"}
    </button>
  </div>

  {#if loadingEvent}
    <div class="flex items-center justify-center py-20">
      <div class="flex flex-col items-center gap-4">
        <span class="loading loading-spinner loading-lg text-primary"></span>
        <p class="text-base-content/60">Chargement de l'événement...</p>
      </div>
    </div>
  {:else if error}
    <div class="alert alert-error shadow-lg">
      <span>{error}</span>
    </div>
  {:else}
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <!-- Colonne Gauche : Infos & Permissions -->
      <div class="space-y-6 lg:col-span-1">
        <!-- Informations Générales -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title mb-4 flex items-center gap-2 text-lg">
              <Calendar class="text-primary h-5 w-5" />
              Informations
            </h3>

            <div class="space-y-4">
              <!-- Nom de l'événement -->
              <div class="w-full">
                <label class="input flex items-center gap-2">
                  <Calendar class="h-4 w-4 opacity-50" />
                  <input
                    id="event-name"
                    type="text"
                    class="grow"
                    placeholder="Nom d l'événement"
                    bind:value={eventName}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Permissions -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title mb-4 flex items-center gap-2 text-lg">
              <Users class="text-secondary h-5 w-5" />
              Permissions
            </h3>

            <!-- Équipes -->
            <fieldset class="fieldset">
              <legend class="fieldset-legend">Équipes</legend>
              <div class="flex flex-col gap-2">
                {#each teamsStore.teams as team}
                  <label
                    class="label border-base-200 hover:bg-base-200/50 cursor-pointer justify-start gap-3 rounded-lg border p-2 transition-colors"
                  >
                    <input
                      type="checkbox"
                      class="checkbox checkbox-primary checkbox-sm"
                      checked={selectedTeams.includes(team.$id)}
                      onchange={() => toggleTeam(team.$id)}
                    />
                    <span>{team.name}</span>
                  </label>
                {/each}
                {#if teamsStore.teams.length === 0}
                  <p class="text-base-content/60 text-xs italic">
                    Aucune équipe disponible
                  </p>
                {/if}
              </div>
            </fieldset>

            <div class="divider my-2"></div>

            <!-- Contributeurs -->
            <fieldset class="fieldset">
              <legend class="fieldset-legend"> Contributeurs > </legend>
              <div class="mb-2 flex gap-2">
                <input
                  type="email"
                  placeholder="email@exemple.com"
                  class="input input-sm w-full"
                  bind:value={newContributorEmail}
                  onkeydown={(e) => e.key === "Enter" && addContributor()}
                />
                <button class="btn btn-sm btn-square" onclick={addContributor}>
                  <UserPlus class="h-4 w-4" />
                </button>
              </div>

              <div class="flex flex-wrap gap-2">
                {#each contributors as email}
                  <div class="badge badge-outline gap-2 pr-1">
                    {email}
                    <button
                      onclick={() => removeContributor(email)}
                      class="btn btn-ghost btn-xs btn-circle h-4 min-h-0 w-4"
                    >
                      <X class="h-3 w-3" />
                    </button>
                  </div>
                {/each}
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <!-- Colonne Droite : Repas -->
      <div class="space-y-6 lg:col-span-3">
        <div class="card bg-base-100 min-h-[500px] shadow-xl">
          <div class="card-body">
            <div class="mb-6 flex items-center justify-between">
              <h3 class="card-title text-lg">Repas & Menus ({meals.length})</h3>
              <button class="btn btn-primary btn-sm" onclick={addMeal}>
                <Plus class="mr-1 h-4 w-4" />
                Ajouter un repas
              </button>
            </div>

            {#if meals.length === 0}
              <div
                class="text-base-content/60 bg-base-200/30 rounded-box border-base-200 flex flex-col items-center justify-center border-2 border-dashed py-12"
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
                {#each meals as meal, $index (meal.id)}
                  <div animate:flip={{ delay: 100, duration: 400 }}>
                    <EventMealCard
                      bind:meal={meals[$index]}
                      isEditing={editingMealIndex === meal.id}
                      onEditToggle={() => meal.id && toggleEditMeal(meal.id)}
                      onDelete={() => meal.id && removeMeal(meal.id)}
                      onDuplicate={() => meal.id && duplicateMeal(meal.id)}
                      {allDates}
                      onEmptySearchSubmit={() =>
                        meal.id && handleEmptySearchSubmit(meal.id)}
                      onDateChanged={handleDateChanged}
                    />
                  </div>
                {/each}
              </div>
            {/if}
            <div class="flex">
              <button
                class="btn btn-soft btn-primary btn-block mt-4"
                onclick={addMeal}
              >
                <Plus class="mr-1 h-4 w-4" />
                Ajouter un repas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
