<script lang="ts">
  import { tick } from "svelte";
  import EventMealCard from "$lib/components/eventEdit/EventMealCard.svelte";
  import PermissionsManager from "$lib/components/PermissionsManager.svelte";
  import { toastService } from "$lib/services/toast.service.svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import { EventStatsStore } from "$lib/stores/EventStatsStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { teamsStore } from "$lib/stores/TeamsStore.svelte";
  import type {
    EnrichedEvent,
    EventContributor,
    EventMeal,
  } from "$lib/types/events";
  import {
    CircleAlert,
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
  import UnsavedChangesGuard from "../components/ui/UnsavedChangesGuard.svelte";

  // ============================================================================
  // PROPS & INITIALISATION
  // ============================================================================

  let { params } = $props<{ params?: Record<string, string> }>();

  // Rendre eventId entièrement réactif aux changements de params
  let eventId = $derived(params?.id);

  // Stats store avec cache statique partagé entre toutes les pages d'événement
  let eventStats = $derived(EventStatsStore.getForEvent(eventId));

  // Brouillon local d'édition (Zéro écho)
  let draft = $state<EnrichedEvent | null>(null);

  const allDates = $derived(draft?.meals?.map((m) => m.date) || []);

  // État UI
  let isInitialised = $state(false);
  let isBusy = $state(false); // Quand on sauvegarde/charge (maître)
  let isAcquiringLock = $state(false); // Quand on acquiert le lock
  let editingMealIndex = $state<string | null>(null);
  let editingTitle = $state(false);

  // État du verrou externe (via locksService)
  let activeLock = $state<AppwriteLock | null>(null);
  let lockUnsub: (() => void) | null = null;

  // isDirty est maintenant calculé par comparaison JSON avec le store
  const isDirty = $derived.by(() => {
    if (!isInitialised || !currentEvent || !draft) return false;

    // Comparaison du brouillon vs store
    const draftJson = JSON.stringify({
      name: draft.name,
      meals: draft.meals,
    });
    const storeJson = JSON.stringify({
      name: currentEvent.name,
      meals: eventStats?.sortedMeals || [],
    });

    return draftJson !== storeJson;
  });

  /**
   * Assure que le verrou est acquis et crée le brouillon (Draft).
   * C'est le point de passage unique avant TOUTE modification.
   */
  async function ensureLockAndCreateDraft(): Promise<boolean> {
    if (draft) return true; // Déjà en édition

    if (isLockedByOthers) {
      toastService.warning(
        `Cet événement est verrouillé par ${lockedByUserName}`,
      );
      return false;
    }

    const success = await acquireLock();
    if (success && currentEvent) {
      // Création du Snapshot initial
      draft = $state.snapshot(currentEvent);
      // S'assurer que les repas du draft sont triés pour la comparaison isDirty
      if (draft && eventStats?.sortedMeals) {
        draft.meals = $state.snapshot(eventStats.sortedMeals);
      }
      return true;
    }
    return false;
  }

  // ============================================================================

  // Suppression de isSaving (fusionné dans isBusy)

  // ============================================================================
  // DERIVED STATES
  // ============================================================================

  const currentEvent = $derived(eventStats?.currentEvent ?? null);

  // DONNÉES RÉACTIVES DÉRIVÉES EN LECTURE SEULE (Single Source of Truth depuis eventStats)
  const eventName = $derived(eventStats?.eventName ?? "");
  const contributors = $derived(eventStats?.contributors ?? []);
  const selectedTeams = $derived(eventStats?.teams ?? []);

  const currentUserStatus = $derived(
    eventStats?.getContributorStatus(globalState.userId || ""),
  );

  const isLockedByOthers = $derived.by(() => {
    if (!activeLock) return false;
    return activeLock.userId !== globalState.userId;
  });

  const isLockedByMe = $derived.by(() => {
    if (!activeLock) return false;
    return activeLock.userId === globalState.userId;
  });

  const canEdit = $derived(
    (eventStats?.canEdit(globalState.userId || "") ?? false) &&
      !isLockedByOthers &&
      !isBusy,
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
  /*
   * Synchronise l'état local depuis le store ou un événement fourni.
   * Obsolète dans le nouveau paradigme "Draft", mais gardée pour la transition si besoin.
   */
  function syncLocalFromStore(eventOverride: EnrichedEvent | null = null) {
    const targetEvent = eventOverride || currentEvent;
    if (!targetEvent) return;

    draft = $state.snapshot(targetEvent);
    // S'assurer que les repas sont triés
    if (draft && eventStats?.sortedMeals) {
      draft.meals = $state.snapshot(eventStats.sortedMeals);
    }

    console.log(
      `🔄 Brouillon mis à jour (${eventOverride ? "Direct API" : "Store"})`,
    );
  }

  // ============================================================================
  // INITIALISATION
  // ============================================================================

  $effect(() => {
    if (eventId && !isInitialised && !isBusy) {
      untrack(async () => {
        isBusy = true;
        try {
          await eventsStore.initialize();

          // CRITICAL: Force refresh from server to ensure data is fresh
          // (Realtime might have missed events while on another page)
          await eventsStore.fetchEvent(eventId);

          // Mode Vue par défaut (pas de draft initial)
          draft = null;
          console.log("📥 Données initiales chargées (Observateur)");

          // Initialiser l'état du verrou
          activeLock = await locksService.getLock(eventId);

          // S'abonner aux changements du verrou
          lockUnsub = await locksService.subscribeToLock(eventId, (lock) => {
            console.log("[EventEditPage] 🔒 Verrou mis à jour (Realtime):", {
              lockedBy: lock?.userName,
              userId: lock?.userId,
              expiresAt: lock?.expiresAt,
            });
            activeLock = lock;
          });

          isInitialised = true;
        } finally {
          isBusy = false;
        }
      });
    }
  });

  // Synchronisation automatique : Mode "Esclave" (Observateur)
  $effect(() => {
    // Si on n'est pas en train d'éditer (!draft), l'UI suit naturellement le store.
    // On n'a plus besoin d'effet de synchro manuelle ici, car l'UI pointera
    // directement vers currentEvent si draft est null.
    if (isInitialised && !draft && isLockedByMe) {
      // Cas rare : on a le verrou mais pas encore de draft (ex: refresh page)
      ensureLockAndCreateDraft();
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
          expiresAt: new Date(Date.now() + 3 * 60 * 1000).toISOString(),
          $updatedAt: new Date().toISOString(),
        } as AppwriteLock;

        scheduleAutoSave();
        // Le mode Draft sera activé par ensureLockAndCreateDraft
        return true;
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
      draft = null; // Sortie du mode édition
      console.log("🔓 Verrou libéré et brouillon détruit");
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
    // Plus besoin de reset isDirty manuellement, le $derived s'en charge
  }

  /**
   * Handler pour "Enregistrer et quitter"
   */
  async function handleSaveAndLeave() {
    await saveEventData();
    if (isLockedByMe) {
      await releaseLock();
    }
  }

  // ============================================================================
  // AUTO-SAVE
  // ============================================================================

  // ============================================================================
  // SAUVEGARDE
  // ============================================================================

  function validateEventData() {
    if (!draft) return { isValid: false, errorMessage: "Pas de brouillon" };
    const nameToValidate = draft.name;
    if (!nameToValidate) {
      return {
        isValid: false,
        errorMessage: "Veuillez renseigner le nom de l'événement",
      };
    }

    if ((draft?.meals?.length || 0) === 0) {
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

    const nameToSave = draft?.name || eventName;

    // Plus besoin de reset isDirty manuellement, le calcul $derived le fera
    // une fois que le store sera mis à jour.

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
      allDates: Array.from(
        new Set((draft?.meals || []).map((m) => m.date)),
      ).sort() as string[],
      dateStart: allDates.length > 0 ? allDates[0] : "",
      dateEnd: allDates.length > 0 ? allDates[allDates.length - 1] : "",
      teams: selectedTeams,
      contributors: contributorsToSave,
      meals: draft?.meals || [],
    };
    try {
      if (eventId) {
        const updatedEvent = await eventsStore.updateEvent(eventId, eventData);
        // RÉCONCILIATION DIRECTE : On utilise le retour de l'API pour mettre à jour le local.
        // Cela évite d'attendre que le store Singleton se mette à jour via ses effets.
        syncLocalFromStore(updatedEvent);
      } else {
        const savedEvent = await eventsStore.createEvent(eventData);
        // Naviguer vers le nouvel événement créé
        navigate(`/dashboard/eventEdit/${savedEvent.$id}`);
      }

      draft = null; // Succès -> Retour mode Vue
      return true;
    } catch (error) {
      console.error("Erreur sauvegarde:", error);
      toastService.error("Erreur lors de la sauvegarde");
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
      2 * 60 * 1000, // test (30s). Restore 5 * 60 * 1000
    );

    console.log("⏰ Auto-save programmé dans 30 secondes");
  }

  // Nettoyage de l'ancien effet de synchronisation simplifié fusionné dans celui du haut

  // Protection beforeunload - Avertir l'utilisateur s'il a des modifications non sauvegardées
  $effect(() => {
    // Capturer la valeur actuelle pour éviter les dépendances dynamiques dans le handler
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
    if (eventId && draft) {
      console.log("🚪 Démontage du composant, libération du lock et draft...");
      releaseLock();
    }
  });

  // ============================================================================
  // TRI AUTOMATIQUE DES MEALS
  // ============================================================================

  $effect(() => {
    const d = draft;
    if (!d) return;
    const needsSorting = d.meals.some(
      (meal, i) => i > 0 && meal.date < d.meals[i - 1].date,
    );

    if (needsSorting) {
      untrack(() => {
        d.meals = [...d.meals].sort((a, b) => a.date.localeCompare(b.date));
      });
    }
  });

  // ============================================================================
  // HANDLERS DE MODIFICATION
  // ============================================================================

  async function handleNameInput(e: Event) {
    if (await ensureLockAndCreateDraft()) {
      if (draft) draft.name = (e.target as HTMLInputElement).value;
    }
  }

  async function addMeal() {
    if (!(await ensureLockAndCreateDraft()) || !draft) return;
    const mealId = nanoid(6);

    // Déterminer la date par défaut
    let defaultDateTime: string;

    if (draft.meals.length === 0) {
      const today = new Date();
      today.setHours(12, 0, 0, 0);
      defaultDateTime = today.toISOString();
    } else {
      const lastMeal = draft.meals[draft.meals.length - 1];
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

    draft.meals = [...draft.meals, newMeal];
    editingMealIndex = mealId;
  }

  function removeMeal(mealId: string) {
    if (draft) {
      draft.meals = draft.meals.filter((m) => m.id !== mealId);
    }
  }

  function handleDateChanged(mealId: string, newDate: string) {
    if (draft) {
      draft.meals = draft.meals.map((m) =>
        m.id === mealId ? { ...m, date: newDate } : m,
      );
    }
  }

  function handleMealModified() {
    // Dans le mode Draft, les liaisons bind:meal s'occupent de tout.
    // Plus besoin de markDirty manuel.
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
{$inspect("isInitialised", isInitialised)}
{$inspect("isDirty", isDirty)}

{#snippet navActions()}
  <div class="flex items-center gap-2">
    <button
      class="btn btn-primary btn-sm"
      onclick={handleSave}
      disabled={isBusy || (eventId && !isDirty) || (eventId && !canEdit)}
    >
      {#if isBusy}
        <span class="loading loading-spinner loading-xs text-primary"></span>
      {:else}
        <Save size={18} class="mr-1" />
      {/if}
      <span class="font-bold">{eventId ? "Enregistrer" : "Créer"}</span>
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
          value={draft?.name || eventName}
          oninput={handleNameInput}
          onfocus={ensureLockAndCreateDraft}
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
              {draft?.name || eventName || "Nom de l'événement"}
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

  {#if isBusy && !isInitialised}
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
            Repas & Menus ({eventStats?.mealsCount ||
              (draft ? draft.meals.length : currentEvent?.meals?.length || 0)})
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

        {#if (draft ? draft.meals.length : currentEvent?.meals?.length || 0) === 0}
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
            {#each draft ? draft.meals : eventStats?.sortedMeals || [] as meal, $index (meal.id)}
              <div animate:flip={{ delay: 100, duration: 400 }}>
                <EventMealCard
                  meal={draft ? draft.meals[$index] : meal}
                  isEditing={editingMealIndex === meal.id}
                  onEditToggle={async () => {
                    const mId = meal.id;
                    if (mId && (await ensureLockAndCreateDraft())) {
                      toggleEditMeal(mId);
                    }
                  }}
                  onDelete={() => {
                    const mId = meal.id;
                    if (mId) removeMeal(mId);
                  }}
                  onModified={handleMealModified}
                  {allDates}
                  disabled={!canEdit || isLockedByOthers}
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

<!-- Guard de navigation pour modifications non sauvegardées -->
<UnsavedChangesGuard
  routeKey={eventId
    ? `/dashboard/eventEdit/${eventId}`
    : "/dashboard/eventEdit"}
  shouldProtect={() => isDirty || isLockedByMe}
  onLeaveWithoutSave={handleLeaveWithoutSave}
  onSaveAndLeave={handleSaveAndLeave}
  message="Vous avez des modifications non sauvegardées ou vous détenez le verrou. Voulez-vous vraiment quitter ?"
/>
