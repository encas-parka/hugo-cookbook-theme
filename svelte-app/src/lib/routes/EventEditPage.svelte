<script lang="ts">
  import { tick } from "svelte";
  import EventMealCard from "$lib/components/eventEdit/EventMealCard.svelte";
  import PermissionsManager from "$lib/components/PermissionsManager.svelte";
  import { toastService } from "$lib/services/toast.service.svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import { EventStatsStore } from "$lib/stores/EventStatsStore.svelte";
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
  import { navigate, router } from "../services/simple-router.svelte";
  import { untrack, onDestroy, onMount } from "svelte";
  import EventStats from "../components/EventStats.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";
  import { locksService, type AppwriteLock } from "../services/appwrite-locks";
  import UnsavedChangesModal from "../components/ui/UnsavedChangesModal.svelte";

  // ============================================================================
  // PROPS & INITIALISATION
  // ============================================================================

  let { params } = $props<{ params?: Record<string, string> }>();

  // Rendre eventId entièrement réactif aux changements de params
  let eventId = $derived(params?.id);

  // Stats store avec cache statique partagé entre toutes les pages d'événement
  let eventStats = $derived(EventStatsStore.getForEvent(eventId));

  // ============================================================================
  // ÉTAT LOCAL D'ÉDITION (modifiable)
  // ============================================================================

  // Les meals doivent être éditables → $state
  let meals = $state<EventMeal[]>([]);

  // pendingEventName pour l'édition du nom (modifiable pendant l'édition)
  let pendingEventName = $state("");

  const allDates = $derived(meals.map((m) => m.date));

  // État UI
  let isBusy = $state(false); // Quand on sauvegarde/charge
  let isDirty = $state(false); // Quand on a des modifs non sauvegardées
  let isAcquiringLock = $state(false); // Quand on acquiert le lock
  let editingMealIndex = $state<string | null>(null);
  let editingTitle = $state(false);

  // État du verrou externe (via locksService)
  let activeLock = $state<AppwriteLock | null>(null);
  let lockUnsub: (() => void) | null = null;

  // Détection des changements
  function markDirtyAndAcquireLock() {
    if (!eventId || isBusy || isAcquiringLock) return;

    if (!isDirty) {
      console.log("📝 Première modification détectée");
      isDirty = true;
    }

    // Gérer le verrou et l'auto-save
    if (!isLockedByMe) {
      acquireLock();
    } else {
      scheduleAutoSave();
    }
  }

  // ============================================================================
  // GESTION DU LOCK & AUTO-SAVE (LOCAL)
  // ============================================================================

  // Suppression de isSaving (fusionné dans isBusy)

  // ============================================================================
  // DERIVED STATES
  // ============================================================================

  const currentEvent = $derived(eventStats?.currentEvent ?? null);

  // DONNÉES RÉACTIVES DÉRIVÉES EN LECTURE SEULE (Single Source of Truth depuis currentEvent)
  const eventName = $derived(currentEvent?.name ?? "");
  const contributors = $derived(currentEvent?.contributors ?? []);
  const selectedTeams = $derived(currentEvent?.teams ?? []);

  const currentUserStatus = $derived.by(() => {
    const currentUser = contributors.find((c) => c.id === globalState.userId);
    return currentUser?.status;
  });

  const isLockedByOthers = $derived.by(() => {
    if (!activeLock) return false;
    return activeLock.userId !== globalState.userId;
  });

  const isLockedByMe = $derived.by(() => {
    if (!activeLock) return false;
    return activeLock.userId === globalState.userId;
  });

  const canEdit = $derived(
    !eventId ||
      (!isLockedByOthers && currentUserStatus === "accepted" && !isBusy),
  );

  const lockedByUserName = $derived(
    activeLock?.userName || "un autre utilisateur",
  );

  // ============================================================================
  // NAVBAR CONFIGURATION
  // ============================================================================

  $effect(() => {
    navBarStore.setConfig({
      eventId: eventId || undefined,
      actions: navActions,
      isLockedByOthers,
      lockedByUserName,
      hasUnsavedChanges: isDirty && !isLockedByOthers,
    });
  });

  // ============================================================================
  // INITIALISATION (une seule fois)
  // ============================================================================
  let initialized = false;

  $effect(() => {
    if (eventId && !initialized && !isBusy) {
      untrack(async () => {
        isBusy = true;
        try {
          await eventsStore.initialize();

          // Charger les données initiales depuis currentEvent
          if (currentEvent) {
            pendingEventName = currentEvent.name;
            meals = [...currentEvent.meals].sort((a, b) =>
              a.date.localeCompare(b.date),
            );
          }

          // Initialiser l'état du verrou
          activeLock = await locksService.getLock(eventId);

          // S'abonner aux changements du verrou
          lockUnsub = await locksService.subscribeToLock(eventId, (lock) => {
            console.log("[LocksRealtime] Verrou mis à jour:", lock);
            activeLock = lock;
          });

          initialized = true;
        } finally {
          isBusy = false;
        }
      });
    }
  });

  onDestroy(() => {
    navBarStore.reset();
    if (autoSaveTimeout) clearTimeout(autoSaveTimeout);
    if (lockUnsub) {
      lockUnsub();
      lockUnsub = null;
    }
  });

  // ============================================================================
  // LOCK MANAGEMENT
  // ============================================================================

  async function acquireLock(): Promise<boolean> {
    if (!eventId || !globalState.userId || isBusy || isAcquiringLock)
      return false;

    isAcquiringLock = true;
    try {
      const success = await locksService.acquireLock(
        eventId,
        globalState.userId,
        globalState.userName(),
      );

      if (success) {
        // Optimistic update : activer le lock immédiatement pour l'UI
        // Le realtime écrasera avec la vraie valeur du serveur
        activeLock = {
          $id: eventId,
          userId: globalState.userId,
          userName: globalState.userName(),
          expiresAt: new Date(Date.now() + 7 * 60 * 1000).toISOString(),
          $updatedAt: new Date().toISOString(),
        } as AppwriteLock;

        scheduleAutoSave();
        console.log("🔒 Verrou acquis via service");
        return true;
      } else {
        toastService.warning(
          `Cet événement est en cours de modification par ${lockedByUserName}`,
        );
        return false;
      }
    } catch (error) {
      console.error("❌ Erreur acquisition verrou:", error);
      toastService.error("Impossible de verrouiller l'événement");
      return false;
    } finally {
      isAcquiringLock = false;
    }
  }

  async function releaseLock(): Promise<void> {
    if (!eventId || !globalState.userId) return;

    try {
      await locksService.releaseLock(eventId, globalState.userId);
      activeLock = null;
      console.log("🔓 Verrou libéré via service");
    } catch (error) {
      console.error("❌ Erreur libération verrou:", error);
    }
  }

  // ============================================================================
  // NAVIGATION GUARD
  // ============================================================================

  /**
   * Handler pour "Quitter sans sauvegarder"
   */
  async function handleLeaveWithoutSave() {
    // Libérer le lock si on l'a
    if (isLockedByMe) {
      await releaseLock();
    }
  }

  /**
   * Handler pour "Enregistrer et quitter"
   */
  async function handleSaveAndLeave() {
    const success = await saveEventData();

    if (success) {
      await releaseLock();
      toastService.success("Modifications sauvegardées");
    }

    return success;
  }

  // ============================================================================
  // AUTO-SAVE
  // ============================================================================

  // ============================================================================
  // SAUVEGARDE
  // ============================================================================

  function validateEventData() {
    const nameToValidate = pendingEventName || eventName;
    if (!nameToValidate) {
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

  /**
   * Fonction générique de sauvegarde de l'événement
   * @returns true si succès, false si échec
   */
  async function saveEventData(): Promise<boolean> {
    const validation = validateEventData();
    if (!validation.isValid) {
      toastService.error(validation.errorMessage || "Erreur de validation");
      return false;
    }

    const nameToSave = pendingEventName || eventName;

    // IMPORTANT : Reset isDirty AVANT la sauvegarde pour éviter le rechargement realtime
    isDirty = false;

    // En mode création, initialiser contributors avec l'utilisateur courant
    const contributorsToSave = eventId
      ? contributors
      : [
          {
            id: globalState.userId || "",
            name: globalState.userName(),
            status: "accepted" as const,
            invitedAt: new Date().toISOString(),
            respondedAt: new Date().toISOString(),
          },
        ];

    const eventData = {
      name: nameToSave,
      allDates: Array.from(new Set(meals.map((m) => m.date))).sort(),
      dateStart: allDates.length > 0 ? allDates[0] : "",
      dateEnd: allDates.length > 0 ? allDates[allDates.length - 1] : "",
      teams: selectedTeams,
      contributors: contributorsToSave,
      meals,
    };

    try {
      if (eventId) {
        await eventsStore.updateEvent(eventId, eventData);
      } else {
        const savedEvent = await eventsStore.createEvent(eventData);
        // Naviguer vers le nouvel événement créé
        navigate(`/dashboard/eventEdit/${savedEvent.$id}`);
      }

      return true;
    } catch (error) {
      console.error("Erreur sauvegarde:", error);
      toastService.error("Erreur lors de la sauvegarde");
      // Réinitialiser isDirty en cas d'erreur
      isDirty = true;
      return false;
    }
  }

  /**
   * Sauvegarde avec libération du lock (pour auto-save)
   */
  async function performAutoSave(): Promise<void> {
    if (!eventId || isBusy || !isLockedByMe) return;

    isBusy = true;
    const toastId = toastService.loading("Sauvegarde automatique...");

    const success = await saveEventData();

    if (success) {
      await releaseLock();
      toastService.update(toastId, {
        state: "success",
        message: "Modifications sauvegardées automatiquement",
      });
    } else {
      // ⚠️ Données invalides ou erreur → Heartbeat pour maintenir le verrou
      if (eventId && globalState.userId) {
        try {
          await locksService.acquireLock(
            eventId,
            globalState.userId,
            globalState.userName(),
          );
        } catch (e) {
          console.error("Erreur heartbeat lock:", e);
        }
      }

      toastService.update(toastId, {
        state: "warning",
        message: "Impossible de sauvegarder : modifications invalides",
      });
    }

    isBusy = false;
    setTimeout(() => toastService.dismiss(toastId), 3000);
  }

  /**
   * Sauvegarde manuelle avec libération du lock
   */
  async function handleSave() {
    isBusy = true;

    const success = await saveEventData();

    if (success) {
      await releaseLock();
      toastService.success(eventId ? "Événement mis à jour" : "Événement créé");
    }

    isBusy = false;
  }

  let autoSaveTimeout: ReturnType<typeof setTimeout> | null = null;

  function scheduleAutoSave() {
    if (autoSaveTimeout) clearTimeout(autoSaveTimeout);

    autoSaveTimeout = setTimeout(
      () => {
        performAutoSave();
      },
      5 * 60 * 1000, // test (30s). Restore 5 * 60 * 1000
    );

    console.log("⏰ Auto-save programmé dans 30 secondes");
  }

  // ============================================================================
  // Vérifier que l'événement existe (mode édition)
  // ============================================================================
  $effect(() => {
    if (eventId && !currentEvent) {
      toastService.error("Événement introuvable");
      navigate("/dashboard");
    }
  });

  // ============================================================================
  // Synchronisation depuis currentEvent (realtime)
  // ============================================================================
  $effect(() => {
    // Ne synchroniser que si :
    // - currentEvent est disponible
    // - Initialisé
    // - PAS de modifications locales en cours
    // - PAS le lock détenu
    if (!currentEvent || !initialized || isDirty || isLockedByMe) {
      return;
    }

    console.log("📥 Synchronisation depuis currentEvent (realtime)");

    pendingEventName = currentEvent.name;
    meals = [...currentEvent.meals].sort((a, b) =>
      a.date.localeCompare(b.date),
    );
  });

  // Protection beforeunload - Avertir l'utilisateur s'il a des modifications non sauvegardées
  $effect(() => {
    // Capturer la valeur actuelle pour éviter les dépendances dynamiques dans le handler
    const hasLock = isLockedByMe;
    const dirty = isDirty;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasLock || dirty) {
        e.preventDefault();
        e.returnValue =
          "Vous avez des modifications non sauvegardées. Voulez-vous vraiment quitter ?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  });

  // Libération du lock au démontage du composant (navigation away)
  // IMPORTANT: Utiliser onDestroy au lieu du cleanup d'$effect pour éviter
  // les appels prématurés à chaque changement de dépendance
  onDestroy(() => {
    // Annuler l'auto-save en cours
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = null;
    }

    // Libérer le lock si on l'a
    if (eventId && isLockedByMe) {
      console.log("🚪 Démontage du composant, libération du lock...");
      releaseLock();
    }
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
    pendingEventName = (e.target as HTMLInputElement).value;
    markDirtyAndAcquireLock();
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

    markDirtyAndAcquireLock();
  }

  function removeMeal(mealId: string) {
    meals = meals.filter((m) => m.id !== mealId);
    markDirtyAndAcquireLock();
  }

  function handleDateChanged(mealId: string, newDate: string) {
    meals = meals.map((m) => (m.id === mealId ? { ...m, date: newDate } : m));
    markDirtyAndAcquireLock();
  }

  function handleMealModified() {
    markDirtyAndAcquireLock();
  }

  function toggleEditMeal(mealId: string) {
    editingMealIndex = editingMealIndex === mealId ? null : mealId;
  }

  // ============================================================================
  // AUTRES HANDLERS
  // ============================================================================

  async function handleInvitationResponse(accept: boolean) {
    if (!eventId || !globalState.userId) return;

    try {
      isBusy = true;

      const newStatus = accept ? "accepted" : "declined";

      await eventsStore.updateContributorStatus(
        eventId,
        globalState.userId,
        newStatus,
      );

      // Note: contributors est un $derived, il sera mis à jour automatiquement
      // via le realtime quand currentEvent sera mis à jour dans le store

      toastService.success(
        accept ? "Invitation acceptée" : "Invitation déclinée",
      );
    } catch (error) {
      console.error("Erreur réponse invitation:", error);
      toastService.error("Erreur lors de la réponse");
    } finally {
      isBusy = false;
    }
  }
</script>

{$inspect("isBusy", isBusy)}
{$inspect("initialized", initialized)}
{$inspect("isDirty", isDirty)}

{#snippet navActions()}
  <div class="flex items-center gap-2">
    {#if isDirty && !isLockedByOthers}
      <button
        class="btn btn-primary btn-sm"
        onclick={handleSave}
        disabled={isBusy || (eventId && !canEdit)}
      >
        {#if isBusy}
          <span class="loading loading-spinner loading-xs text-primary"></span>
        {:else}
          <Save size={18} class="mr-1" />
        {/if}
        <span class="font-bold">{eventId ? "Enregistrer" : "Créer"}</span>
      </button>
    {:else}
      <button class="btn btn-sm btn-ghost gap-2 opacity-50" disabled>
        <Save size={18} class="mr-1" />
        <span class="font-bold">{eventId ? "Enregistré" : "Créer"}</span>
      </button>
    {/if}
  </div>
{/snippet}

<div class="bg-base-200 min-h-lvh space-y-6 px-2 pt-4 pb-20 md:px-20">
  <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
    <div class="min-w-80 flex-1 gap-2">
      {#if editingTitle || !eventId}
        <input
          type="text"
          class="input input-lg min-w-full shadow-md"
          value={pendingEventName || eventName}
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
              {pendingEventName || eventName || "Nom de l'événement"}
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
          disabled={isBusy}
        >
          Accepter
        </button>
      </div>
    </div>
  {/if}

  {#if isBusy && !initialized}
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
          {contributors}
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

<!-- Modal de confirmation pour modifications non sauvegardées -->
<UnsavedChangesModal
  guardId="eventEdit"
  shouldProtect={() => isDirty || isLockedByMe}
  onLeaveWithoutSave={handleLeaveWithoutSave}
  onSaveAndLeave={handleSaveAndLeave}
  message="Vous avez des modifications non sauvegardées. Voulez-vous vraiment quitter ?"
/>
