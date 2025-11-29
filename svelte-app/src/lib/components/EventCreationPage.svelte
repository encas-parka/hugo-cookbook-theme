<script lang="ts">
  import {
    ArrowLeft,
    Save,
    Calendar,
    Users,
    Plus,
    UserPlus,
    X,
  } from "@lucide/svelte";
  import { eventsStore } from "../stores/EventsStore.svelte";
  import { teamsStore } from "../stores/TeamsStore.svelte";
  import type { CreateEventData, Meal } from "../types/appwrite.types";
  import EventMealCard from "./EventMealCard.svelte";
  import Fieldset from "./ui/Fieldset.svelte";

  interface Props {
    onBack: () => void;
  }

  let { onBack }: Props = $props();

  // État du formulaire
  let eventName = $state("");
  let dateStart = $state("");
  let dateEnd = $state("");
  let selectedTeams = $state<string[]>([]);
  let contributors = $state<string[]>([]);
  let newContributorEmail = $state("");
  let meals = $state<Meal[]>([]);

  let loading = $state(false);
  let error = $state<string | null>(null);

  // Gestion des Repas
  function addMeal() {
    const newMeal: Meal = {
      date: dateStart || new Date().toISOString().split("T")[0],
      time: "midi",
      guests: 100, // Valeur par défaut
      recipes: [],
    };
    meals = [...meals, newMeal];
  }

  function removeMeal(index: number) {
    meals = meals.filter((_, i) => i !== index);
  }

  function duplicateMeal(index: number) {
    const mealToDuplicate = meals[index];
    const duplicatedMeal = JSON.parse(JSON.stringify(mealToDuplicate)); // Deep copy simple
    meals = [
      ...meals.slice(0, index + 1),
      duplicatedMeal,
      ...meals.slice(index + 1),
    ];
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

  async function handleSave() {
    if (!eventName || !dateStart || !dateEnd) {
      error = "Veuillez remplir tous les champs obligatoires (Nom et Dates)";
      return;
    }

    loading = true;
    error = null;

    try {
      const eventData: CreateEventData = {
        name: eventName,
        dateStart,
        dateEnd,
        teams: selectedTeams,
        contributors,
        meals,
      };

      await eventsStore.createEvent(eventData);
      onBack();
    } catch (err) {
      console.error("Erreur lors de la création de l'événement:", err);
      error =
        "Erreur lors de la création de l'événement. Vérifiez votre connexion.";
    } finally {
      loading = false;
    }
  }
</script>

<div class="space-y-6 pb-20">
  <!-- Header -->
  <div
    class="bg-base-100/95 border-base-200 sticky top-0 z-10 flex items-center justify-between border-b py-4 backdrop-blur"
  >
    <div class="flex items-center gap-4">
      <button class="btn btn-ghost btn-circle" onclick={onBack}>
        <ArrowLeft class="h-6 w-6" />
      </button>
      <div>
        <h2 class="text-2xl font-bold">Nouvel Événement</h2>
        <p class="text-base-content/60 text-sm">
          Créer un menu et planifier les repas
        </p>
      </div>
    </div>
    <button class="btn btn-primary" onclick={handleSave} disabled={loading}>
      {#if loading}
        <span class="loading loading-spinner loading-sm"></span>
      {:else}
        <Save class="mr-2 h-4 w-4" />
      {/if}
      Créer l'événement
    </button>
  </div>

  {#if error}
    <div class="alert alert-error shadow-lg">
      <span>{error}</span>
    </div>
  {/if}

  <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
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

            <!-- Dates -->
            <div class="grid grid-cols-2 gap-2">
              <div class="w-full">
                <label class="label" for="start-date">
                  <span>Début</span>
                </label>
                <input
                  id="start-date"
                  type="date"
                  class="input w-full px-2"
                  bind:value={dateStart}
                />
              </div>
              <div class="w-full">
                <label class="label" for="end-date">
                  <span>Fin</span>
                </label>
                <input
                  id="end-date"
                  type="date"
                  class="input w-full px-2"
                  bind:value={dateEnd}
                />
              </div>
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
    <div class="space-y-6 lg:col-span-2">
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
              <button class="btn btn-primary btn-sm mt-4" onclick={addMeal}>
                Ajouter un repas
              </button>
            </div>
          {:else}
            <div class="space-y-4">
              {#each meals as meal, index}
                <EventMealCard
                  bind:meal={meals[index]}
                  onDelete={() => removeMeal(index)}
                  onDuplicate={() => duplicateMeal(index)}
                />
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
