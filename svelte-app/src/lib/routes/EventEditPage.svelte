<script lang="ts">
  import EventMealCard from "$lib/components/eventEdit/EventMealCard.svelte";
  import PermissionsManager from "$lib/components/PermissionsManager.svelte";
  import { toastService } from "$lib/services/toast.service.svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { teamsStore } from "$lib/stores/TeamsStore.svelte";
  import type {
    CreateEventData,
    EventContributor,
    EventMeal,
  } from "$lib/types/events";
  import { AlertCircle, ArrowLeft, Calendar, Plus, Save } from "@lucide/svelte";
  import { nanoid } from "nanoid";
  import { flip } from "svelte/animate";

  // Props du router
  let { params } = $props<{ params?: Record<string, string> }>();

  let eventId = $state(params?.id);

  import { acceptInvitation } from "$lib/services/appwrite-functions";

  // État du formulaire
  let eventName = $state("");
  let selectedTeams = $state<string[]>([]);
  let contributors = $state<EventContributor[]>([]);
  let newContributors = $state<EventContributor[]>([]); // Nouveaux contributeurs à inviter
  let meals = $state<EventMeal[]>([]);

  let loading = $state(false);
  let loadingEvent = $state(false);
  let error = $state<string | null>(null);

  // État pour gérer l'ouverture du modal d'invitation après création
  let openInviteModal = $state(false);

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

  import { untrack } from "svelte";
  import { navigate } from "../services/simple-router.svelte";

  import { onMount } from "svelte";

  onMount(async () => {
    // S'assurer que le store est initialisé (charge le cache et lance le realtime global)
    if (!eventsStore.isInitialized && globalState.isAuthenticated) {
      console.log(
        "[EventEditPage] Initialisation forcée de EventsStore pour le Realtime...",
      );
      await eventsStore.initialize();
    }
  });

  // Charger l'événement si un ID est fourni ou réinitialiser
  $effect(() => {
    // On track uniquement eventId et l'état d'initialisation
    const id = eventId;
    const initialized = eventsStore.isInitialized;

    untrack(() => {
      // Si le store n'est pas encore initialisé, on attend (l'effet se relancera quand initialized passera à true)
      if (!initialized && globalState.isAuthenticated) {
        console.log("[EventEditPage] Attente de l'initialisation du store...");
        return;
      }

      if (id) {
        loadingEvent = true;

        // Essayer de récupérer depuis le cache en mémoire d'abord (maintenant fiable car init terminé)
        const cachedEvent = eventsStore.getEventById(id);

        if (cachedEvent) {
          console.log(`[EventEditPage] Événement ${id} trouvé dans le store`);
          eventName = cachedEvent.name || "";
          selectedTeams = cachedEvent.teams || [];
          contributors = cachedEvent.contributors || [];
          meals = (cachedEvent.meals || []).sort((a, b) =>
            a.date.localeCompare(b.date),
          );
          newContributors = [];
          loadingEvent = false;
        } else {
          // Fallback : fetch depuis Appwrite si pas en cache ET que l'init est fini
          console.log(
            `[EventEditPage] Événement ${id} introuvable en cache après init, fetch manuel...`,
          );
          eventsStore
            .fetchEvent(id)
            .then((event) => {
              if (event) {
                eventName = event.name || "";
                selectedTeams = event.teams || [];
                contributors = event.contributors || [];
                meals = (event.meals || []).sort((a, b) =>
                  a.date.localeCompare(b.date),
                );
                newContributors = [];
              } else {
                toastService.error("Événement introuvable");
              }
            })
            .catch((err) => {
              console.error("Erreur lors du chargement de l'événement:", err);
              toastService.error("Erreur lors du chargement de l'événement");
            })
            .finally(() => {
              loadingEvent = false;
            });
        }
      } else {
        // Réinitialiser le formulaire pour un nouvel événement
        eventName = "";
        selectedTeams = [];
        meals = [];
        contributors = [];
        newContributors = [];
      }
    });
  });

  // Effet séparé pour ajouter l'utilisateur courant comme contributeur en mode création
  $effect(() => {
    // Si on est en mode création (pas d'eventId) et qu'on a un userId
    if (!eventId && globalState.userId) {
      untrack(() => {
        // Si la liste est vide, on ajoute l'utilisateur
        if (contributors.length === 0) {
          contributors = [
            {
              id: globalState.userId!,
              name: globalState.userName(),
              status: "accepted" as const,
              invitedAt: new Date().toISOString(),
              respondedAt: new Date().toISOString(),
            },
          ];
        }
      });
    }
  });

  function goBack() {
    history.back();
  }

  // INVITED OR ACCEPTED
  // TODO IMPROVE → derived ?
  let isCurrentUserInvited = $state(false);

  let isCurrentUserAccepted = $state(false);

  $effect(() => {
    const currentUser = contributors.find(
      (contributor) => contributor.id === globalState.userId,
    );
    if (currentUser && currentUser.status === "accepted") {
      isCurrentUserAccepted = true;
    }
    if (currentUser && currentUser.status === "invited") {
      isCurrentUserInvited = true;
    }
  });

  async function handleInvitationResponse(accept: boolean) {
    if (!eventId || !globalState.userId) return;

    try {
      loading = true;

      if (accept) {
        // Utiliser la fonction distante pour accepter l'invitation
        await acceptInvitation("event", eventId, globalState.userId);

        // Mettre à jour l'état local
        contributors = contributors.map((contributor) =>
          contributor.id === globalState.userId
            ? {
                ...contributor,
                status: "accepted",
                respondedAt: new Date().toISOString(),
              }
            : contributor,
        );

        toastService.success("Vous avez accepté l'invitation");
      } else {
        // Pour décliner, on peut utiliser updateContributorStatus car c'est juste un changement de statut
        await eventsStore.updateContributorStatus(
          eventId,
          globalState.userId,
          "declined",
        );

        // Mettre à jour l'état local
        contributors = contributors.map((contributor) =>
          contributor.id === globalState.userId
            ? {
                ...contributor,
                status: "declined",
                respondedAt: new Date().toISOString(),
              }
            : contributor,
        );

        toastService.success("Vous avez décliné l'invitation");
      }
    } catch (error) {
      console.error("Erreur lors de la réponse à l'invitation:", error);
      toastService.error("Erreur lors de la réponse à l'invitation");
    } finally {
      loading = false;
    }
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
      toastService.error("Un repas existe déjà à cette date et heure");
      return;
    }

    const newMeal: EventMeal = {
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

  // Gestion des équipes
  function toggleTeam(teamId: string) {
    if (selectedTeams.includes(teamId)) {
      selectedTeams = selectedTeams.filter((id) => id !== teamId);
    } else {
      selectedTeams = [...selectedTeams, teamId];

      // Ajouter tous les membres de l'équipe comme contributeurs invités
      const team = teamsStore.getTeamById(teamId);
      if (team && team.members) {
        const now = new Date().toISOString();
        const newContributors: EventContributor[] = team.members
          .filter((member) => member.id !== globalState.userId) // Ne pas ré-ajouter le créateur
          .map((member) => ({
            id: member.id,
            name: member.name,
            status: "invited" as const,
            invitedAt: now,
            teamId: teamId,
          }));

        // Ajouter les nouveaux contributeurs sans dupliquer
        contributors = [
          ...contributors,
          ...newContributors.filter(
            (newContributor) =>
              !contributors.some(
                (existing) => existing.id === newContributor.id,
              ),
          ),
        ];
      }
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
      toastService.error("Veuillez renseigner le nom de l'événement", {
        autoCloseDelay: 5000,
      });
      return;
    }

    if (meals.length === 0) {
      toastService.error("Veuillez ajouter au moins un repas", {
        autoCloseDelay: 5000,
      });
      return;
    }

    // Vérifier s'il y a des invitations en attente
    if (newContributors.length > 0) {
      toastService.warning(
        `Il y a ${newContributors.length} invitation(s) en attente. Veuillez les envoyer avant de sauvegarder.`,
        { autoCloseDelay: 5000 },
      );
      return;
    }

    loading = true;

    try {
      const eventData: CreateEventData = {
        name: eventName,
        dateStart,
        dateEnd,
        allDates,
        teams: selectedTeams,
        contributors: contributors, // Ne sauvegarder que les contributeurs déjà persistés
        meals,
      };

      let savedEvent;

      if (eventId) {
        // Mise à jour d'un événement existant
        savedEvent = await toastService.track(
          eventsStore.updateEvent(eventId, eventData),
          {
            loading: "Mise à jour de l'événement...",
            success: "Événement mis à jour avec succès",
            error: "Erreur lors de la mise à jour de l'événement",
          },
        );
      } else {
        // Création d'un nouvel événement
        savedEvent = await toastService.track(
          eventsStore.createEvent(eventData),
          {
            loading: "Création de l'événement...",
            success: "Événement créé avec succès",
            error: "Erreur lors de la création de l'événement",
          },
        );
        eventId = savedEvent.$id;
        console.log("eventId:", eventId);
      }
    } catch (err) {
      console.error("Erreur lors de la sauvegarde de l'événement:", err);
      toastService.error(
        "Erreur lors de la sauvegarde de l'événement. Vérifiez votre connexion.",
      );
    } finally {
      loading = false;

      navigate(`/eventEdit/${eventId}`);
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
    <div class="flex gap-2">
      {#if eventId}
        <button
          class="btn btn-outline"
          onclick={() => navigate(`/eventProducts/${eventId}`)}
        >
          Voir les produits
        </button>
      {/if}
      <button
        class="btn btn-primary"
        onclick={handleSave}
        disabled={loading || loadingEvent || !isCurrentUserAccepted}
      >
        {#if loading}
          <span class="loading loading-spinner loading-sm"></span>
        {:else}
          <Save class="mr-2 h-4 w-4" />
        {/if}
        {eventId ? "Enregistrer" : "Créer l'événement"}
      </button>
    </div>
  </div>

  <!-- Alerte d'invitation pour les utilisateurs invités -->
  {#if isCurrentUserInvited}
    <div class="alert alert-info">
      <AlertCircle class="h-6 w-6 shrink-0" />
      <div>
        <h3 class="font-bold">Invitation à participer</h3>
        <div class="text-xs">
          Vous avez été invité à participer à cet événement. Acceptez pour
          pouvoir modifier le menu et les repas.
        </div>
      </div>
      <div class="flex gap-2">
        <button
          class="btn"
          onclick={() => handleInvitationResponse(true)}
          disabled={loading}
        >
          Accepter
        </button>
      </div>
    </div>
  {/if}

  {#if loadingEvent}
    <div class="flex items-center justify-center py-20">
      <div class="flex flex-col items-center gap-4">
        <span class="loading loading-spinner loading-lg text-primary"></span>
        <p class="text-base-content/60">Chargement de l'événement...</p>
      </div>
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
        <PermissionsManager
          bind:selectedTeams
          bind:contributors
          bind:newContributors
          {teamsStore}
          {eventsStore}
          userId={globalState.userId || ""}
          userTeams={globalState.userTeams || []}
          {eventId}
          openModalRequest={openInviteModal}
        />
      </div>

      <!-- Colonne Droite : Repas -->
      <div class="space-y-6 lg:col-span-3">
        <div class="card bg-base-100 min-h-[500px] shadow-xl">
          <div class="card-body">
            <div class="mb-6 flex items-center justify-between">
              <h3 class="card-title text-lg">Repas & Menus ({meals.length})</h3>
              <button
                class="btn btn-primary btn-sm"
                onclick={addMeal}
                disabled={!isCurrentUserAccepted}
              >
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
                      disabled={!isCurrentUserAccepted}
                    />
                  </div>
                {/each}
              </div>
            {/if}
            <div class="flex">
              <button
                class="btn btn-soft btn-primary btn-block mt-4"
                onclick={addMeal}
                disabled={!isCurrentUserAccepted}
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
