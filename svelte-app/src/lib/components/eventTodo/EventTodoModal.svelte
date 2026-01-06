<script lang="ts">
  import {
    Flag,
    Calendar,
    Users,
    Clock,
    Save,
    Plus,
    X,
    Check,
    AlignLeft,
  } from "@lucide/svelte";
  import { eventTodoStore } from "$lib/stores/EventTodoStore.svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import type { EventTodo } from "$lib/types/appwrite";
  import type { EventContributor } from "$lib/types/events";
  // We cannot import Enums from d.ts for values
  import type {
    EventTodoPriority,
    EventTodoStatus,
    EventTodoTaskOn,
  } from "$lib/types/appwrite";

  import { toastService } from "$lib/services/toast.service.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";

  interface Props {
    open: boolean;
    eventId: string;
    todoToEdit?: EventTodo | null;
    contributors?: EventContributor[]; // Passed from parent
    onClose: () => void;
  }

  let {
    open,
    eventId,
    todoToEdit,
    contributors = [],
    onClose,
  }: Props = $props();

  // Form State
  let taskName = $state("");
  let taskDescription = $state("");
  let priority = $state<EventTodoPriority>("medium" as EventTodoPriority);
  let taskOn = $state<EventTodoTaskOn>("onEvent" as EventTodoTaskOn);
  let requiredPeopleNb = $state(1);
  let dueDate = $state<string>(""); // YYYY-MM-DD
  let assignedTo = $state<string[]>([]); // We treat it as array locally

  // Loading State
  let isSaving = $state(false);

  // Initialize from edit mode
  $effect(() => {
    if (open) {
      if (todoToEdit) {
        taskName = todoToEdit.taskName;
        taskDescription = todoToEdit.taskDescription || "";
        priority = (todoToEdit.priority || "medium") as EventTodoPriority;
        taskOn = (todoToEdit.taskOn || "onEvent") as EventTodoTaskOn;
        requiredPeopleNb = todoToEdit.requiredPeopleNb || 1;
        dueDate = todoToEdit.dueDate ? todoToEdit.dueDate.split("T")[0] : "";

        if (todoToEdit.assignedTo) {
          try {
            const parsed = JSON.parse(todoToEdit.assignedTo);
            assignedTo = Array.isArray(parsed)
              ? parsed
              : [todoToEdit.assignedTo];
          } catch {
            assignedTo = [todoToEdit.assignedTo];
          }
        } else {
          assignedTo = [];
        }
      } else {
        resetForm();
      }
    }
  });

  function resetForm() {
    taskName = "";
    taskDescription = "";
    priority = "medium" as EventTodoPriority;
    taskOn = "onEvent" as EventTodoTaskOn;
    requiredPeopleNb = 1;
    dueDate = "";
    assignedTo = [];
  }

  async function handleSave(createAnother = false) {
    if (!taskName.trim()) {
      toastService.warning("Le titre de la tâche est requis");
      return;
    }

    isSaving = true;
    try {
      const payload: Partial<EventTodo> = {
        taskName,
        taskDescription: taskDescription || null,
        priority,
        taskOn,
        requiredPeopleNb,
        dueDate: dueDate ? new Date(dueDate).toISOString() : null,
        assignedTo: assignedTo.length > 0 ? JSON.stringify(assignedTo) : null,

        status: todoToEdit ? undefined : ("todo" as EventTodoStatus),
      };

      if (todoToEdit) {
        await eventTodoStore.updateTodo(todoToEdit.$id, payload);
        toastService.success("Tâche mise à jour");
        handleClose();
      } else {
        await eventTodoStore.createTodo(eventId, payload);
        toastService.success("Tâche créée");
        if (createAnother) {
          resetForm();
          // Keep open
        } else {
          handleClose();
        }
      }
    } catch (e) {
      toastService.error("Erreur lors de la sauvegarde");
      console.error(e);
    } finally {
      isSaving = false;
    }
  }

  function handleClose() {
    resetForm();
    onClose();
  }

  // Helpers
  function toggleAssignee(userId: string) {
    if (assignedTo.includes(userId)) {
      assignedTo = assignedTo.filter((id) => id !== userId);
    } else {
      assignedTo = [...assignedTo, userId];
    }
  }

  function getContributorName(userId: string) {
    if (!contributors) return userId.substring(0, 5) + "...";

    const c = contributors.find((c) => c.id === userId);
    if (c && c.name) return c.name;
    if (userId === globalState.userId) return "Moi";

    return userId.substring(0, 5) + "...";
  }
</script>

<dialog class="modal modal-bottom sm:modal-middle" class:modal-open={open}>
  <div class="modal-box p-0 sm:max-w-lg">
    <!-- Header -->
    <div
      class="bg-base-200/50 border-base-200 flex items-center justify-between border-b px-6 py-4"
    >
      <h3 class="text-lg font-bold">
        {todoToEdit ? "Modifier la Tâche" : "Nouvelle Tâche"}
      </h3>
      <button
        type="button"
        class="btn btn-sm btn-circle btn-ghost"
        onclick={handleClose}
      >
        <X class="size-5" />
      </button>
    </div>

    <!-- Body -->
    <div class="space-y-4 px-6 py-6">
      <!-- Title -->
      <div class="form-control w-full">
        <label class="label" for="taskName">
          <span class="label-text font-medium">Titre</span>
        </label>
        <input
          id="taskName"
          type="text"
          placeholder="Ex: Acheter du pain, Préparer la salle..."
          class="input input-bordered w-full"
          bind:value={taskName}
        />
      </div>

      <!-- Description -->
      <div class="form-control w-full">
        <label class="label" for="taskDesc">
          <span class="label-text flex items-center gap-2">
            <AlignLeft class="size-4 opacity-50" /> Description
          </span>
        </label>
        <textarea
          id="taskDesc"
          class="textarea textarea-bordered h-24"
          placeholder="Détails supplémentaires..."
          bind:value={taskDescription}
        ></textarea>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <!-- Priority -->
        <div class="form-control w-full">
          <label class="label" for="priority">
            <span class="label-text flex items-center gap-2">
              <Flag class="size-4 opacity-50" /> Priorité
            </span>
          </label>
          <select
            id="priority"
            class="select select-bordered w-full"
            bind:value={priority}
          >
            <option value="low">Basse</option>
            <option value="medium">Moyenne</option>
            <option value="high">Haute</option>
          </select>
        </div>

        <!-- Moment (TaskOn) -->
        <div class="form-control w-full">
          <label class="label" for="taskOn">
            <span class="label-text flex items-center gap-2">
              <Clock class="size-4 opacity-50" /> Moment
            </span>
          </label>
          <select
            id="taskOn"
            class="select select-bordered w-full"
            bind:value={taskOn}
          >
            <option value="beforeEvent">Avant l'événement</option>
            <option value="onEvent">Pendant l'événement</option>
            <option value="afterEvent">Après l'événement</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <!-- Due Date -->
        <div class="form-control w-full">
          <label class="label" for="dueDate">
            <span class="label-text flex items-center gap-2">
              <Calendar class="size-4 opacity-50" /> Échéance
            </span>
          </label>
          <input
            id="dueDate"
            type="date"
            class="input input-bordered w-full"
            bind:value={dueDate}
          />
        </div>

        <!-- Required People -->
        <div class="form-control w-full">
          <label class="label" for="reqPeople">
            <span class="label-text flex items-center gap-2">
              <Users class="size-4 opacity-50" /> Personnes requises
            </span>
          </label>
          <input
            id="reqPeople"
            type="number"
            min="1"
            class="input input-bordered w-full"
            bind:value={requiredPeopleNb}
          />
        </div>
      </div>

      <!-- Assignees Selection -->
      <div class="form-control w-full">
        <label class="label" for="assignees">
          <span class="label-text flex items-center gap-2">
            <Users class="size-4 opacity-50" /> Assignation ({assignedTo.length}/{requiredPeopleNb})
          </span>
          {#if assignedTo.length < requiredPeopleNb}
            <span class="label-text-alt text-warning"
              >Manque {requiredPeopleNb - assignedTo.length} pers.</span
            >
          {:else}
            <span class="label-text-alt text-success flex items-center gap-1"
              ><Check class="size-3" /> Complet</span
            >
          {/if}
        </label>

        <div
          class="border-base-200 rounded-box bg-base-100/50 flex flex-wrap gap-2 border p-3"
        >
          <!-- Current User Quick Add -->
          {#if globalState.userId}
            <button
              type="button"
              class="btn btn-sm {assignedTo.includes(globalState.userId)
                ? 'btn-primary'
                : 'btn-outline border-dashed'}"
              onclick={() =>
                globalState.userId && toggleAssignee(globalState.userId)}
            >
              {assignedTo.includes(globalState.userId)
                ? "Moi (Assigné)"
                : "+ Me mandater"}
            </button>
          {/if}

          <!-- List other contributors available -->
          {#each contributors as contributor}
            {#if contributor.id !== globalState.userId}
              <button
                class="btn btn-sm {assignedTo.includes(contributor.id)
                  ? 'btn-neutral'
                  : 'btn-ghost border-dashed'}"
                onclick={() => toggleAssignee(contributor.id)}
              >
                {contributor.name ||
                  contributor.email ||
                  contributor.id.substring(0, 5)}
                {#if assignedTo.includes(contributor.id)}
                  <X class="ml-1 size-3" />
                {:else}
                  <Plus class="ml-1 size-3" />
                {/if}
              </button>
            {/if}
          {/each}

          {#if contributors.length === 0}
            <span class="text-xs opacity-50"
              >Aucun autre contributeur trouvé.</span
            >
          {/if}
        </div>
      </div>
    </div>

    <!-- Footer Actions -->
    <div
      class="modal-action bg-base-100 border-base-200 mt-0 border-t px-6 py-4"
    >
      {#if !todoToEdit}
        <button
          type="button"
          class="btn btn-ghost"
          onclick={() => handleSave(true)}
          disabled={isSaving}
        >
          <Plus class="size-4" /> Sauvegarder & Créer
        </button>
      {/if}
      <button
        type="button"
        class="btn btn-primary"
        onclick={() => handleSave(false)}
        disabled={isSaving}
      >
        {#if isSaving}
          <span class="loading loading-spinner loading-sm"></span>
        {:else}
          <Save class="size-4" />
        {/if}
        {todoToEdit ? "Mettre à jour" : "Créer la tâche"}
      </button>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button onclick={handleClose}>close</button>
  </form>
</dialog>
