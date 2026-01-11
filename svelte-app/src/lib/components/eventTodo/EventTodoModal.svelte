<script lang="ts">
  import {
    Flag,
    Calendar,
    Users,
    Clock,
    Save,
    Plus,
    Check,
    AlignLeft,
  } from "@lucide/svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import type { EventTodo } from "$lib/types/events";
  import type { EventContributor } from "$lib/types/events";
  import type {
    EventTodoPriority,
    EventTodoStatus,
    EventTodoTaskOn,
  } from "$lib/types/events";
  import { nanoid } from "nanoid";
  import { toastService } from "$lib/services/toast.service.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import ModalContainer from "$lib/components/ui/modal/ModalContainer.svelte";
  import ModalHeader from "$lib/components/ui/modal/ModalHeader.svelte";
  import ModalContent from "$lib/components/ui/modal/ModalContent.svelte";
  import ModalFooter from "$lib/components/ui/modal/ModalFooter.svelte";
  import BtnGroupCheck from "$lib/components/ui/BtnGroupCheck.svelte";

  interface Props {
    open: boolean;
    eventId: string;
    todoToEdit?: EventTodo | null;
    contributors?: EventContributor[];
    currentTodos?: EventTodo[];
    onClose: () => void;
    onSave?: (todos: EventTodo[]) => void;
  }

  let {
    open,
    eventId,
    todoToEdit,
    contributors = [],
    currentTodos = [],
    onClose,
    onSave,
  }: Props = $props();

  // Form State
  let taskName = $state("");
  let taskDescription = $state("");
  let priority = $state<EventTodoPriority>("medium" as EventTodoPriority);
  let taskOn = $state<EventTodoTaskOn>("onEvent" as EventTodoTaskOn);
  let requiredPeopleNb = $state(1);
  let dueDate = $state<string>(""); // YYYY-MM-DD
  let assignedTo = $state<string[]>([]); // Array of user IDs

  // Loading State
  let isSaving = $state(false);

  // Initialize from edit mode - use derived to compute initial values
  const initialValues = $derived.by(() => {
    if (!todoToEdit) {
      return {
        taskName: "",
        taskDescription: "",
        priority: "medium" as EventTodoPriority,
        taskOn: "onEvent" as EventTodoTaskOn,
        requiredPeopleNb: 1,
        dueDate: "",
        assignedTo: [] as string[],
      };
    }

    return {
      taskName: todoToEdit.taskName,
      taskDescription: todoToEdit.taskDescription || "",
      priority: (todoToEdit.priority || "medium") as EventTodoPriority,
      taskOn: (todoToEdit.taskOn || "onEvent") as EventTodoTaskOn,
      requiredPeopleNb: todoToEdit.requiredPeopleNb || 1,
      dueDate: todoToEdit.dueDate ? todoToEdit.dueDate.split("T")[0] : "",
      assignedTo: todoToEdit.assignedTo ? [...todoToEdit.assignedTo] : [],
    };
  });

  // Initialize form when modal opens
  $effect(() => {
    if (open) {
      const values = initialValues;
      taskName = values.taskName;
      taskDescription = values.taskDescription;
      priority = values.priority;
      taskOn = values.taskOn;
      requiredPeopleNb = values.requiredPeopleNb;
      dueDate = values.dueDate;
      assignedTo = values.assignedTo;
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
      const now = new Date().toISOString();

      if (todoToEdit) {
        // Update existing todo
        const updates: Partial<EventTodo> = {
          taskName,
          taskDescription: taskDescription || null,
          priority,
          taskOn,
          requiredPeopleNb,
          dueDate: dueDate ? new Date(dueDate).toISOString() : null,
          assignedTo: assignedTo.length > 0 ? assignedTo : null,
        };

        await eventsStore.updateTodo(eventId, todoToEdit.id, updates);
        toastService.success("Tâche mise à jour");
        handleClose();
      } else {
        // Create new todo
        const newTodo: EventTodo = {
          id: nanoid(10),
          taskName,
          taskDescription: taskDescription || null,
          priority,
          taskOn,
          requiredPeopleNb,
          dueDate: dueDate ? new Date(dueDate).toISOString() : null,
          assignedTo: assignedTo.length > 0 ? assignedTo : null,
          status: "todo" as EventTodoStatus,
          locked: false,
          createdAt: now,
          updatedAt: now,
        };

        await eventsStore.addTodo(eventId, newTodo);
        toastService.success("Tâche créée");

        if (createAnother) {
          resetForm();
          // Keep modal open
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

  // Handle assignee toggle from BtnGroupCheck
  function handleToggleAssignee(userId: string) {
    if (assignedTo.includes(userId)) {
      assignedTo = assignedTo.filter((id) => id !== userId);
    } else {
      assignedTo = [...assignedTo, userId];
    }
  }

  // Build items for BtnGroupCheck
  const assigneeItems = $derived.by(() => {
    const items = [
      {
        id: globalState.userId || "",
        label: "Moi",
        selected: assignedTo.includes(globalState.userId || ""),
      },
    ];

    contributors.forEach((contributor) => {
      if (contributor.id !== globalState.userId) {
        items.push({
          id: contributor.id,
          label:
            contributor.name ||
            contributor.email ||
            contributor.id.substring(0, 5),
          selected: assignedTo.includes(contributor.id),
        });
      }
    });

    return items;
  });
</script>

<ModalContainer
  isOpen={open}
  onClose={handleClose}
  maxWidth="lg"
  maxHeight="xl"
>
  <ModalHeader
    title={todoToEdit ? "Modifier la Tâche" : "Nouvelle Tâche"}
    onClose={handleClose}
  />

  <ModalContent>
    <div class="space-y-4">
      <!-- Title -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Titre</legend>
        <label class="input w-full">
          <input
            type="text"
            placeholder="Ex: Acheter du pain, Préparer la salle..."
            class="grow"
            bind:value={taskName}
          />
        </label>
      </fieldset>

      <!-- Description -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend flex items-center gap-2">
          <AlignLeft class="size-4 opacity-50" /> Description
        </legend>
        <textarea
          class="textarea h-24 w-full"
          placeholder="Détails supplémentaires..."
          bind:value={taskDescription}
        ></textarea>
      </fieldset>

      <div class="flex flex-wrap gap-4">
        <!-- Priority -->
        <!-- <fieldset class="fieldset">
          <legend class="fieldset-legend flex items-center gap-2">
            <Flag class="size-4 opacity-50" /> Priorité
          </legend>
          <select class="select w-full" bind:value={priority}>
            <option value="low">Basse</option>
            <option value="medium">Moyenne</option>
            <option value="high">Haute</option>
          </select>
        </fieldset> -->

        <!-- Moment (TaskOn) -->
        <fieldset class="fieldset w-80">
          <legend class="fieldset-legend flex items-center gap-2">
            <Clock class="size-4 opacity-50" /> Moment
          </legend>
          <select class="select w-full" bind:value={taskOn}>
            <option value="beforeEvent">Avant l'événement</option>
            <option value="onEvent">Pendant l'événement</option>
            <option value="afterEvent">Après l'événement</option>
          </select>
        </fieldset>
        <!-- Due Date -->
        <fieldset class="fieldset w-80">
          <legend class="fieldset-legend flex items-center gap-2">
            <Calendar class="size-4 opacity-50" /> Échéance
          </legend>
          <label class="input w-full">
            <input type="date" class="grow" bind:value={dueDate} />
          </label>
        </fieldset>

        <!-- Required People -->
        <fieldset class="fieldset">
          <legend class="fieldset-legend flex items-center gap-2">
            <Users class="size-4 opacity-50" /> Personnes requises
          </legend>
          <label class="input w-full">
            <input
              type="number"
              min="1"
              class="grow"
              bind:value={requiredPeopleNb}
            />
          </label>
        </fieldset>
      </div>

      <!-- Assignees Selection -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend flex items-center gap-2">
          <Users class="size-4 opacity-50" /> Assignation ({assignedTo.length}/{requiredPeopleNb})
          {#if assignedTo.length < requiredPeopleNb}
            <span class="badge badge-warning badge-sm"
              >Manque {requiredPeopleNb - assignedTo.length} pers.</span
            >
          {:else}
            <span class="badge badge-success badge-sm flex items-center gap-1"
              ><Check class="size-3" /> ok</span
            >
          {/if}
        </legend>

        <BtnGroupCheck
          items={assigneeItems}
          size="lg"
          color="primary"
          onToggleItem={handleToggleAssignee}
        />
      </fieldset>
    </div>
  </ModalContent>

  <ModalFooter>
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
  </ModalFooter>
</ModalContainer>
