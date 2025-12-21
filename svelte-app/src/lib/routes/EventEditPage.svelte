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
  import type { EventContributor, EventMeal } from "$lib/types/events";
  import {
    CircleAlert,
    ArrowLeft,
    Calendar,
    ChartBar,
    Plus,
    Save,
    Lock,
    PencilLine,
  } from "@lucide/svelte";
  import { nanoid } from "nanoid";
  import { flip } from "svelte/animate";
  import { navigate } from "../services/simple-router.svelte";
  import { untrack, onDestroy } from "svelte";
  import EventStats from "../components/EventStats.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";

  // ============================================================================
  // PROPS & INITIALISATION
  // ============================================================================

  let { params } = $props<{ params?: Record<string, string> }>();

  // Rendre eventId entièrement réactif aux changements de params
  let eventId = $derived(params?.id);

  // Stats store (LECTURE SEULE - pour les statistiques)
  let eventStats = $derived.by(() => new EventStatsStore(eventId));

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
  let editingTitle = $state(false);

  // ============================================================================
  // GESTION DU LOCK & AUTO-SAVE (LOCAL)
  // ============================================================================

  let isSaving = $state(false);

  // ============================================================================
  // DERIVED STATES
  // ============================================================================

  const currentEvent = $derived(eventStats.currentEvent);

  const currentUserStatus = $derived.by(() => {
    const currentUser = contributors.find((c) => c.id === globalState.userId);
    return currentUser?.status;
  });

  const isLockedByOthers = $derived.by(() => {
    if (!currentEvent?.lockedBy) return false;
    return currentEvent.lockedBy !== globalState.userId;
  });

  const isLockedByMe = $derived.by(() => {
    if (!currentEvent?.lockedBy) return false;
    return currentEvent.lockedBy === globalState.userId;
  });

  const canEdit = $derived(
    !isLockedByOthers && currentUserStatus === "accepted" && !loadingEvent,
  );

  // ============================================================================
  // NAVBAR CONFIGURATION
  // ============================================================================

  $effect(() => {
    navBarStore.setConfig({
      eventId: eventId || undefined,
      activeTab: eventId ? 0 : undefined, // Éditer l'événement = onglet 0
      actions: navActions,
    });
  });

  onDestroy(() => {
    navBarStore.reset();
  });

  // ============================================================================
  // LOCK MANAGEMENT
  // ============================================================================

  async function acquireLock(): Promise<boolean> {
    if (!eventId || !globalState.userId) return false;

    try {
      // Vérifier si un verrou existe déjà
      if (currentEvent?.lockedBy) {
        const lockAge = currentEvent.$updatedAt
          ? (Date.now() - new Date(currentEvent.$updatedAt).getTime()) /
            (1000 * 60 * 10)
          : Infinity;

        // Si le verrou est périmé (> 3 min), le libérer
        if (lockAge > 3) {
          console.log(`🔓 Verrou périmé détecté (${lockAge.toFixed(1)} min)`);
          await eventsStore.updateEvent(eventId, { lockedBy: null });
        } else if (currentEvent.lockedBy !== globalState.userId) {
          toastService.warning("Un autre utilisateur modifie cet événement");
          return false;
        }
      }

      // Acquérir le verrou
      await eventsStore.updateEvent(eventId, { lockedBy: globalState.userId });
      scheduleAutoSave();

      console.log("🔒 Verrou acquis");
      return true;
    } catch (error) {
      console.error("❌ Erreur acquisition verrou:", error);
      toastService.error("Impossible de verrouiller l'événement");
      return false;
    }
  }

  async function releaseLock(): Promise<void> {
    if (!eventId) return;

    try {
      await eventsStore.updateEvent(eventId, { lockedBy: null });
      console.log("🔓 Verrou libéré");
    } catch (error) {
      console.error("❌ Erreur libération verrou:", error);
    }
  }

  // ============================================================================
  // AUTO-SAVE
  // ============================================================================

  function validateEventData() {
    if (!eventName) {
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

    const duplicatedDates = allDates.filter(
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
        errorMessage: `Certaines dates sont en double: ${duplicatedDatesFormatted.join(
          ", ",
        )}. Veuillez corriger avant de sauvegarder.`,
      };
    }

    return { isValid: true };
  }

  async function performAutoSave(): Promise<void> {
    if (!eventId || isSaving || !isLockedByMe) return;

    isSaving = true;
    const toastId = toastService.loading("Sauvegarde automatique...");

    try {
      const validation = validateEventData();

      if (validation.isValid) {
        // ✅ Données valides → Sauvegarder ET libérer le verrou
        await eventsStore.updateEvent(eventId, {
          name: eventName,
          allDates: Array.from(new Set(meals.map((m) => m.date))).sort(),
          dateStart: allDates.length > 0 ? allDates[0] : "",
          dateEnd: allDates.length > 0 ? allDates[allDates.length - 1] : "",
          teams: selectedTeams,
          contributors,
          meals,
          lockedBy: null, // Libérer le verrou
        });

        toastService.update(toastId, {
          state: "success",
          message: "Modifications sauvegardées automatiquement",
        });
      } else {
        // ⚠️ Données invalides → Heartbeat pour maintenir le verrou
        await eventsStore.updateEvent(eventId, {
          lockedBy: globalState.userId, // Garder le verrou
        });

        toastService.update(toastId, {
          state: "warning",
          message: `Impossible de sauvegarder : ${validation.errorMessage}`,
        });
      }
    } catch (error) {
      console.error("Erreur auto-save:", error);
      toastService.update(toastId, {
        state: "error",
        message: "Erreur lors de la sauvegarde automatique",
      });
    } finally {
      isSaving = false;
      setTimeout(() => toastService.dismiss(toastId), 3000);
    }
  }

  function scheduleAutoSave() {
    // Programmer l'auto-save après 5 secondes
    setTimeout(
      () => {
        performAutoSave();
      },
      5 * 60 * 1000,
    );

    console.log("⏰ Auto-save programmé dans 5 minute secondes");
  }

  // ===================
  // EFFECT
  // ===================
  // Synchronisation avec la DB (quand on n'a pas le lock)
  $effect(() => {
    const evt = currentEvent;

    if (evt && !isLockedByMe) {
      console.log("📥 Synchronisation avec la DB");
      eventName = evt.name;
      contributors = [...evt.contributors];
      selectedTeams = evt.teams || [];
      meals = [...evt.meals].sort((a, b) => a.date.localeCompare(b.date));
      newContributors = [];
    }
  });

  // Vérifier que l'événement existe (mode édition)
  $effect(() => {
    if (eventId && !currentEvent) {
      toastService.error("Événement introuvable");
      navigate("/dashboard");
    }
  });

  // Initialiser l'utilisateur courant (mode création)
  $effect(() => {
    if (!eventId && globalState.userId && contributors.length === 0) {
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
  });

  // Protection beforeunload
  $effect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isLockedByMe) {
        e.preventDefault();
        e.returnValue =
          "Vous avez des modifications non sauvegardées. Voulez-vous vraiment quitter ?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (isLockedByMe && eventId) {
        releaseLock();
      }
    };
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
  // HANDLERS DE MODIFICATION
  // ============================================================================

  function handleNameInput(e: Event) {
    eventName = (e.target as HTMLInputElement).value;

    // Acquérir le verrou si on ne l'a pas déjà
    if (!isLockedByMe && eventId) {
      acquireLock();
    }
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

    const newMeal: EventMeal = {
      id: mealId,
      date: defaultDateTime,
      guests: 100,
      recipes: [],
    };

    meals = [...meals, newMeal];
    editingMealIndex = mealId;

    // Acquérir le verrou si on ne l'a pas déjà
    if (!isLockedByMe && eventId) {
      acquireLock();
    }
  }

  function removeMeal(mealId: string) {
    meals = meals.filter((m) => m.id !== mealId);

    if (!isLockedByMe && eventId) {
      acquireLock();
    }
  }

  function handleDateChanged(mealId: string, newDate: string) {
    meals = meals.map((m) => (m.id === mealId ? { ...m, date: newDate } : m));

    if (!isLockedByMe && eventId) {
      acquireLock();
    }
  }

  function handleMealModified() {
    if (!isLockedByMe && eventId) {
      acquireLock();
    }
  }

  function toggleEditMeal(mealId: string) {
    editingMealIndex = editingMealIndex === mealId ? null : mealId;
  }

  // ============================================================================
  // SAUVEGARDE MANUELLE
  // ============================================================================

  async function handleSave() {
    loading = true;

    try {
      const validation = validateEventData();
      if (!validation.isValid) {
        toastService.error(validation.errorMessage || "Erreur de validation");
        return;
      }

      const eventData = {
        name: eventName,
        allDates: Array.from(new Set(meals.map((m) => m.date))).sort(),
        dateStart: allDates.length > 0 ? allDates[0] : "",
        dateEnd: allDates.length > 0 ? allDates[allDates.length - 1] : "",
        teams: selectedTeams,
        contributors,
        meals,
        lockedBy: null, // Toujours libérer le verrou
      };

      if (eventId) {
        await eventsStore.updateEvent(eventId, eventData);
        toastService.success("Événement mis à jour");
      } else {
        const savedEvent = await eventsStore.createEvent(eventData);
        toastService.success("Événement créé");

        // Navigation simple - le $derived fera le reste
        navigate(`/dashboard/eventEdit/${savedEvent.$id}`);
      }
    } catch (err) {
      console.error("Erreur sauvegarde:", err);
      toastService.error("Erreur lors de la sauvegarde");
    } finally {
      loading = false;
    }
  }

  // ============================================================================
  // AUTRES HANDLERS
  // ============================================================================

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
</script>

{#snippet navActions()}
  <div class="flex gap-2">
    <button
      class="btn btn-primary btn-sm"
      onclick={handleSave}
      disabled={!canEdit ||
        loading ||
        loadingEvent ||
        (eventId && !isLockedByMe)}
    >
      {#if loading}
        <span class="loading loading-spinner loading-sm"></span>
      {:else}
        <Save class="mr-2 h-4 w-4" />
      {/if}
      {eventId ? "Enregistrer" : "Créer l'événement"}
    </button>
  </div>
{/snippet}

<div class="bg-base-200 min-h-lvh space-y-6 px-2 pt-4 pb-20 md:px-20">
  <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
    <div class="min-w-80 flex-1 gap-2">
      {#if editingTitle || !eventId}
        <input
          type="text"
          class="input input-lg min-w-full shadow-md"
          value={eventName}
          oninput={handleNameInput}
          onblur={() => (editingTitle = false)}
          disabled={!canEdit}
          placeholder="Nom de l'événement"
        />
      {:else}
        <button
          class="btn btn-ghost"
          onclick={() => (editingTitle = !editingTitle)}
          disabled={!canEdit}
        >
          <div class="flex items-baseline gap-4">
            <div class="text-4xl font-bold">
              {eventName || "Nom de l'événement"}
            </div>
            <PencilLine class="h-4 w-4" />
          </div>
        </button>
      {/if}
    </div>
    {#if eventStats}
      <EventStats {eventStats} />
    {/if}
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

  <!-- Alerte d'invitation pour les utilisateurs invités -->
  {#if currentUserStatus === "invited"}
    <div class="alert alert-info">
      <CircleAlert class="h-6 w-6 shrink-0" />
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
        />
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
                  onModified={handleMealModified}
                  {allDates}
                  disabled={!canEdit}
                />
              </div>
            {/each}
          </div>
        {/if}
        <div class="flex">
          <button
            class="btn btn-outline btn-primary btn-block mt-4"
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
