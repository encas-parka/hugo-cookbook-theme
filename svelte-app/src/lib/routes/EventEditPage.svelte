<script lang="ts">
  import EventMealCard from "$lib/components/eventEdit/EventMealCard.svelte";
  import PermissionsManager from "$lib/components/PermissionsManager.svelte";
  import { toastService } from "$lib/services/toast.service.svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import {
    eventStatsStore,
    EventStatsStore,
  } from "$lib/stores/EventStatsStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { teamsStore } from "$lib/stores/TeamsStore.svelte";
  import type {
    CreateEventData,
    EventContributor,
    EventMeal,
  } from "$lib/types/events";
  import {
    AlertCircle,
    ArrowLeft,
    Calendar,
    ChartBar,
    Plus,
    QrCode,
    Save,
    Lock,
  } from "@lucide/svelte";
  import { nanoid } from "nanoid";
  import { flip } from "svelte/animate";
  import { MainStatus } from "$lib/types/appwrite.d";
  import { navigate } from "../services/simple-router.svelte";
  import { untrack } from "svelte";

  // ============================================================================
  // PROPS & INITIALISATION
  // ============================================================================

  let { params } = $props<{ params?: Record<string, string> }>();
  let eventId = $state(params?.id);

  // Stats store (LECTURE SEULE - pour les statistiques)
  let eventStats = $state(new EventStatsStore(eventId));

  // ============================================================================
  // ÉTAT LOCAL D'ÉDITION (source de vérité pendant l'édition)
  // ============================================================================

  let eventName = $state("");
  let meals = $state<EventMeal[]>([]);
  let contributors = $state<EventContributor[]>([]);
  let selectedTeams = $state<string[]>([]);
  let newContributors = $state<EventContributor[]>([]);
  const allDates = $derived(meals.map((m) => m.date));

  // État UI
  let loading = $state(false);
  let loadingEvent = $state(false);
  let editingMealIndex = $state<string | null>(null);

  // État de verrouillage
  let isModified = $state(false);
  let hasTriggeredLock = $state(false);

  // ============================================================================
  // DERIVED STATES
  // ============================================================================

  const currentEvent = $derived(eventStats.currentEvent);

  const currentUserStatus = $derived.by(() => {
    const currentUser = contributors.find((c) => c.id === globalState.userId);
    return currentUser?.status;
  });

  const isLockedByMe = $derived(
    isModified && currentEvent?.status === MainStatus.LOCKED,
  );

  const isLockedByOthers = $derived(
    !isModified && currentEvent?.status === MainStatus.LOCKED,
  );

  const canEdit = $derived(
    !isLockedByOthers && currentUserStatus === "accepted" && !loadingEvent,
  );

  const hasUnsavedChanges = $derived(isModified);

  // ============================================================================
  // INITIALISATION DEPUIS LE STORE (une seule fois)
  // ============================================================================

  $effect(() => {
    const evt = currentEvent;

    // Ne synchroniser que si on n'a pas de modifications locales
    if (evt && !isModified) {
      eventName = evt.name || "";
      selectedTeams = evt.teams || [];
      contributors = evt.contributors || [];
      meals = [...evt.meals].sort((a, b) => a.date.localeCompare(b.date));
      newContributors = [];
    } else if (eventId && !evt) {
      toastService.error("Événement introuvable");
      navigate("/dashboard");
    } else if (!eventId && globalState.userId) {
      // Mode création: initialiser avec l'utilisateur courant
      if (contributors.length === 0) {
        contributors = [
          {
            id: globalState.userId,
            name: globalState.userName(),
            status: "accepted" as const,
            invitedAt: new Date().toISOString(),
            respondedAt: new Date().toISOString(),
          },
        ];
      }
    }

    loadingEvent = false;
  });

  // ============================================================================
  // TRI AUTOMATIQUE DES MEALS
  // ============================================================================

  $effect(() => {
    const needsSorting = meals.some(
      (meal, i) => i > 0 && meal.date < meals[i - 1].date,
    );

    if (needsSorting) {
      untrack(() => {
        meals = [...meals].sort((a, b) => a.date.localeCompare(b.date));
      });
    }
  });

  // ============================================================================
  // VERROUILLAGE AUTOMATIQUE
  // ============================================================================

  async function lockEventIfNeeded() {
    if (!eventId || hasTriggeredLock || isModified) return;

    hasTriggeredLock = true;
    isModified = true;

    try {
      await eventsStore.updateEventStatus(eventId, MainStatus.LOCKED);
      console.log("🔒 Événement verrouillé automatiquement");
    } catch (err) {
      console.error("❌ Erreur verrouillage:", err);
      hasTriggeredLock = false;
      isModified = false;
      toastService.error("Impossible de verrouiller l'événement");
    }
  }

  async function unlockEvent() {
    if (!eventId || !isModified) return;

    try {
      await eventsStore.updateEventStatus(eventId, MainStatus.ACTIVE);
      isModified = false;
      hasTriggeredLock = false;
      console.log("🔓 Événement déverrouillé");
    } catch (err) {
      console.error("❌ Erreur déverrouillage:", err);
    }
  }

  // Gestion du verrouillage externe
  $effect(() => {
    if (isModified && isLockedByOthers) {
      alert(
        "Un autre utilisateur a pris le contrôle. Vos modifications seront perdues.",
      );
      isModified = false;
      hasTriggeredLock = false;
    }
  });

  // Cleanup au démontage
  $effect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isModified) {
        e.preventDefault();
        e.returnValue = "Modifications non sauvegardées";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (isModified && eventId) {
        unlockEvent();
      }
    };
  });

  // ============================================================================
  // HANDLERS DE MODIFICATION (déclenchent le verrouillage)
  // ============================================================================

  function handleNameInput(e: Event) {
    eventName = (e.target as HTMLInputElement).value;
    lockEventIfNeeded(); // Seulement quand l'USER tape
  }

  function addMeal() {
    const mealId = nanoid(6);

    // Déterminer la date par défaut
    let defaultDateTime: string;

    if (meals.length === 0) {
      const today = new Date();
      today.setHours(12, 0, 0, 0);
      defaultDateTime = today.toISOString();
    } else {
      const lastMeal = meals[meals.length - 1];
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

    // Vérifier les doublons
    // USELESS ?
    // if (meals.some((m) => m.date === defaultDateTime)) {
    //   toastService.error("Un repas existe déjà à cette date et heure");
    //   return;
    // }

    const newMeal: EventMeal = {
      id: mealId,
      date: defaultDateTime,
      guests: 100,
      recipes: [],
    };

    // Ajout simple - le tri sera automatique via l'effect
    meals = [...meals, newMeal];
    editingMealIndex = mealId;

    lockEventIfNeeded();
  }

  function removeMeal(mealId: string) {
    meals = meals.filter((m) => m.id !== mealId);
    lockEventIfNeeded();
  }

  function handleDateChanged(mealId: string, newDate: string) {
    // Modification simple - le tri sera automatique
    meals = meals.map((m) => (m.id === mealId ? { ...m, date: newDate } : m));
    lockEventIfNeeded();
  }

  function toggleEditMeal(mealId: string) {
    editingMealIndex = editingMealIndex === mealId ? null : mealId;
  }

  // ============================================================================
  // SAUVEGARDE
  // ============================================================================

  async function handleSave() {
    // Validations
    if (!eventName) {
      toastService.error("Veuillez renseigner le nom de l'événement");
      return;
    }

    if (meals.length === 0) {
      toastService.error("Veuillez ajouter au moins un repas");
      return;
    }

    if (newContributors.length > 0) {
      toastService.warning(
        `Il y a ${newContributors.length} invitation(s) en attente.`,
      );
      return;
    }

    loading = true;

    try {
      // ✅ Calculer allDates UNIQUEMENT ici, au moment de la sauvegarde
      const uniqueSortedDates = Array.from(
        new Set(meals.map((m) => m.date)),
      ).sort();

      const eventData: CreateEventData = {
        name: eventName,
        allDates: uniqueSortedDates,
        dateStart: uniqueSortedDates[0],
        dateEnd: uniqueSortedDates[allDates.length - 1],
        teams: selectedTeams,
        contributors,
        meals,
      };

      let savedEvent;

      if (eventId) {
        // Mise à jour
        savedEvent = await toastService.track(
          eventsStore.updateEvent(eventId, eventData),
          {
            loading: "Mise à jour...",
            success: "Événement mis à jour",
            error: "Erreur lors de la mise à jour",
          },
        );

        await unlockEvent();
      } else {
        // Création
        savedEvent = await toastService.track(
          eventsStore.createEvent(eventData),
          {
            loading: "Création...",
            success: "Événement créé",
            error: "Erreur lors de la création",
          },
        );

        eventId = savedEvent.$id;
        isModified = false;
        hasTriggeredLock = false;
      }

      navigate(`/eventEdit/${eventId}`);
    } catch (err) {
      console.error("Erreur sauvegarde:", err);
      toastService.error("Erreur lors de la sauvegarde");

      if (eventId) {
        await unlockEvent();
      }
    } finally {
      loading = false;
    }
  }

  // ============================================================================
  // AUTRES HANDLERS
  // ============================================================================

  function goBack() {
    history.back();
  }

  async function handleInvitationResponse(accept: boolean) {
    if (!eventId || !globalState.userId) return;

    try {
      loading = true;

      const newStatus = accept ? "accepted" : "declined";

      await eventsStore.updateContributorStatus(
        eventId,
        globalState.userId,
        newStatus,
      );

      contributors = contributors.map((c) =>
        c.id === globalState.userId
          ? { ...c, status: newStatus, respondedAt: new Date().toISOString() }
          : c,
      );

      toastService.success(
        accept ? "Invitation acceptée" : "Invitation déclinée",
      );
    } catch (error) {
      console.error("Erreur réponse invitation:", error);
      toastService.error("Erreur lors de la réponse");
    } finally {
      loading = false;
    }
  }

  function handleEmptySearchSubmit(currentMealId: string) {
    const currentIndex = meals.findIndex((m) => m.id === currentMealId);

    if (currentIndex < meals.length - 1) {
      const nextMeal = meals[currentIndex + 1];
      editingMealIndex = nextMeal.id || nanoid(6);
    } else {
      addMeal();
    }
  }

  $inspect("isModified", isModified);
</script>

<div class="bg-base-200 space-y-6 px-2 pb-20 md:px-36">
  <!-- Header -->
  <div
    class="bg-base-200 border-base-200 flex items-center justify-between border-b py-4 backdrop-blur"
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
        disabled={!canEdit || loading || loadingEvent}
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

  <!-- Alerte de verrouillage par un autre utilisateur -->
  {#if isLockedByOthers}
    <div class="alert alert-warning">
      <Lock class="h-6 w-6 shrink-0" />
      <div>
        <h3 class="font-bold">Événement en cours de modification</h3>
        <div class="text-xs">
          Un autre utilisateur est en train de modifier cet événement. Les
          contrôles sont temporairement désactivés.
        </div>
      </div>
    </div>
  {/if}

  <!-- Alerte de modifications non sauvegardées -->
  {#if hasUnsavedChanges}
    <div class="alert alert-info">
      <Save class="h-6 w-6 shrink-0" />
      <div>
        <h3 class="font-bold">Modifications non sauvegardées</h3>
        <div class="text-xs">
          Vous avez des modifications en cours. L'événement est verrouillé pour
          éviter les conflits.
        </div>
      </div>
    </div>
  {/if}

  <!-- Alerte d'invitation pour les utilisateurs invités -->
  {#if currentUserStatus === "invited"}
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
                    placeholder="Nom de l'événement"
                    value={eventName}
                    oninput={handleNameInput}
                    disabled={!canEdit}
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
          disabled={!canEdit}
        />

        <!-- Statistiques de l'événement -->
        {#if eventStats && eventId}
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title mb-4 flex items-center gap-2 text-lg">
                <ChartBar class="text-primary h-5 w-5" />
                Statistiques
              </h3>

              <div class="grid grid-cols-2 gap-2 text-sm">
                <div class="stat bg-base-200 rounded-lg p-3 text-center">
                  <div class="stat-value text-primary">
                    {eventStats.mealsCount}
                  </div>
                  <div class="stat-desc">Repas</div>
                </div>
                <div class="stat bg-base-200 rounded-lg p-3 text-center">
                  <div class="stat-value text-primary">
                    {eventStats.totalGuests}
                  </div>
                  <div class="stat-desc">Invités totaux</div>
                </div>
                <div class="stat bg-base-200 rounded-lg p-3 text-center">
                  <div class="stat-value text-primary">
                    {eventStats.totalRecipes}
                  </div>
                  <div class="stat-desc">Recettes uniques</div>
                </div>
                <div class="stat bg-base-200 rounded-lg p-3 text-center">
                  <div class="stat-value text-primary">
                    {eventStats.contributorsStats.total}
                  </div>
                  <div class="stat-desc">Contributeurs</div>
                </div>
              </div>

              <div class="mt-4 space-y-1 text-sm">
                <div class="flex justify-between">
                  <span class="text-base-content/60"
                    >Statut de l'événement:</span
                  >
                  <span
                    class="badge badge-sm badge-{eventStats.eventStatus ===
                    'active'
                      ? 'success'
                      : 'warning'}"
                  >
                    {eventStats.eventStatus}
                  </span>
                </div>
                <div class="flex justify-between">
                  <span class="text-base-content/60">Statut temporel:</span>
                  {#if eventStats?.isEventPast}
                    <span class="badge badge-sm badge-error">Terminé</span>
                  {:else if eventStats?.isEventCurrent}
                    <span class="badge badge-sm badge-success">En cours</span>
                  {:else}
                    <span class="badge badge-sm badge-info">À venir</span>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>

      <!-- Colonne Droite : Repas -->
      <div class="space-y-6 md:px-4 lg:col-span-3">
        <div class="mb-6 flex items-center justify-between">
          <h3 class="card-title text-lg">
            Repas & Menus ({eventStats?.mealsCount || meals.length})
          </h3>
          <button
            class="btn btn-primary btn-sm"
            onclick={addMeal}
            disabled={!canEdit}
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
                  onDateChanged={handleDateChanged}
                  onModified={lockEventIfNeeded}
                  {allDates}
                  disabled={!canEdit}
                />
              </div>
            {/each}
          </div>
        {/if}
        <div class="flex">
          <button
            class="btn btn-soft btn-primary btn-block mt-4"
            onclick={addMeal}
            disabled={!canEdit}
          >
            <Plus class="mr-1 h-4 w-4" />
            Ajouter un repas
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>
