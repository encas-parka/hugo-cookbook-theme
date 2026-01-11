<script lang="ts">
  import {
    CheckCircle2,
    Circle,
    Flag,
    User,
    Clock,
    X,
    CircleDot,
    Pencil,
    Users,
    Plus,
    Minus,
  } from "@lucide/svelte";
  import type { EventTodo } from "$lib/types/events";
  import type { EventTodoPriority, EventTodoStatus } from "$lib/types/events";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { toastService } from "$lib/services/toast.service.svelte";

  interface Props {
    todo: EventTodo;
    eventId: string;
    onEdit: (todo: EventTodo) => void;
    disabled?: boolean;
  }

  let { todo, eventId, onEdit, disabled = false }: Props = $props();

  let isUpdating = $state(false);

  // Parse assignedTo - now it's string[] | null directly
  const assignedList = $derived.by(() => {
    if (!todo.assignedTo) return [];
    return Array.isArray(todo.assignedTo) ? todo.assignedTo : [];
  });

  const isAssigned = $derived(
    globalState.userId && assignedList.includes(globalState.userId),
  );

  // Derived: Status Config
  const statusConfig = $derived.by(() => {
    const s = todo.status as string;
    switch (s) {
      case "done":
        return {
          class: "text-success",
          icon: CheckCircle2,
          label: "Terminé",
          bg: "bg-success/10",
        };
      case "inprogress":
        return {
          class: "text-primary",
          icon: CircleDot,
          label: "En cours",
          bg: "bg-primary/10",
        };
      case "waiting":
        return {
          class: "text-warning",
          icon: Clock,
          label: "En attente",
          bg: "bg-warning/10",
        };
      case "canceled":
        return {
          class: "text-error",
          icon: X,
          label: "Annulé",
          bg: "bg-error/10",
        };
      case "todo":
      default:
        return {
          class: "text-base-content/50",
          icon: Circle,
          label: "À faire",
          bg: "bg-base-200",
        };
    }
  });

  // Derived: Priority Config
  const priorityConfig = $derived.by(() => {
    const p = todo.priority as string;
    switch (p) {
      case "high":
        return { class: "text-error", bg: "bg-error/10", label: "Haute" };
      case "medium":
        return { class: "text-warning", bg: "bg-warning/10", label: "Moyenne" };
      case "low":
      default:
        return { class: "text-info", bg: "bg-info/10", label: "Basse" };
    }
  });

  async function handleToggleStatus() {
    if (isUpdating || disabled) return;

    // Rotate status: todo -> inprogress -> done -> todo
    const s = todo.status as string;
    let next: EventTodoStatus = "todo" as EventTodoStatus;
    if (s === "todo") next = "inprogress" as EventTodoStatus;
    else if (s === "inprogress") next = "done" as EventTodoStatus;
    else next = "todo" as EventTodoStatus;

    isUpdating = true;
    try {
      await eventsStore.updateTodo(eventId, todo.id, { status: next });
    } catch {
      toastService.error("Erreur màj statut");
    } finally {
      isUpdating = false;
    }
  }

  async function handleToggleAssign() {
    if (!globalState.userId || isUpdating || disabled) return;

    const newAssigned = isAssigned
      ? assignedList.filter((id: string) => id !== globalState.userId)
      : [...assignedList, globalState.userId];

    isUpdating = true;
    try {
      await eventsStore.updateTodo(eventId, todo.id, {
        assignedTo: newAssigned.length > 0 ? newAssigned : null,
      });
      toastService.success(
        isAssigned ? "Vous avez quitté la tâche" : "Vous avez rejoint la tâche",
      );
    } catch (e) {
      toastService.error("Erreur assignation");
    } finally {
      isUpdating = false;
    }
  }
</script>

<div
  class="group bg-base-100 hover:bg-base-200/50 border-base-200 relative flex items-center justify-between rounded-lg border p-3 transition-all"
  class:opacity-50={isUpdating}
>
  <!-- Status Indicator / Action -->
  <div class="flex min-w-0 grow items-start gap-3">
    <button
      onclick={handleToggleStatus}
      class="btn btn-ghost btn-circle btn-sm {statusConfig.class} shrink-0"
      title={statusConfig.label}
      {disabled}
    >
      <svelte:component this={statusConfig.icon} class="size-5" />
    </button>

    <div class="flex min-w-0 grow flex-col">
      <div class="flex items-center gap-2">
        <span
          class="truncate font-medium {todo.status === 'done'
            ? 'line-through opacity-50'
            : ''}"
        >
          {todo.taskName}
        </span>
        <!-- Priority Badge -->
        {#if todo.priority && todo.priority !== "low"}
          <div
            class="badge badge-xs {priorityConfig.bg} {priorityConfig.class} border-0"
          >
            {priorityConfig.label}
          </div>
        {/if}
      </div>

      <!-- Meta Row -->
      <div class="mt-1 flex flex-wrap items-center gap-3 text-xs opacity-60">
        <!-- Assignees -->
        <button
          class="hover:text-primary flex items-center gap-1 transition-colors {isAssigned
            ? 'text-primary font-medium'
            : ''}"
          onclick={handleToggleAssign}
          title={isAssigned ? "Quitter" : "Rejoindre"}
          {disabled}
        >
          <Users class="size-3" />
          {assignedList.length} / {todo.requiredPeopleNb || 1}
        </button>

        {#if todo.dueDate}
          <span class="flex items-center gap-1">
            <Clock class="size-3" />
            {new Date(todo.dueDate).toLocaleDateString()}
          </span>
        {/if}

        <!-- Moment -->
        {#if todo.taskOn}
          <span
            class="bg-base-300 rounded px-1.5 text-[10px] tracking-wider uppercase"
          >
            {todo.taskOn === "beforeEvent"
              ? "Avant"
              : todo.taskOn === "afterEvent"
                ? "Après"
                : "Pendant"}
          </span>
        {/if}
      </div>
    </div>
  </div>

  <!-- Actions -->
  <div class="ml-2 flex items-center gap-1">
    <!-- Join/Leave Quick Action -->
    {#if !isAssigned && assignedList.length < (todo.requiredPeopleNb || 1)}
      <button
        class="btn btn-ghost btn-xs btn-square text-primary"
        onclick={handleToggleAssign}
        title="Rejoindre"
        {disabled}
      >
        <Plus class="size-4" />
      </button>
    {/if}

    <button
      class="btn btn-ghost btn-xs btn-square opacity-0 transition-opacity group-hover:opacity-100"
      onclick={() => onEdit(todo)}
      {disabled}
    >
      <Pencil class="size-4" />
    </button>
  </div>
</div>
