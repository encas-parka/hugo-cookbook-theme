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
  import type { EventTodo } from "$lib/types/appwrite";
  import type { EventTodoPriority, EventTodoStatus } from "$lib/types/appwrite";
  import { eventTodoStore } from "$lib/stores/EventTodoStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { toastService } from "$lib/services/toast.service.svelte";

  interface Props {
    todo: EventTodo;
    onEdit: (todo: EventTodo) => void;
  }

  let { todo, onEdit }: Props = $props();

  let isDeleting = $state(false);

  // Parse assignedTo
  const assignedList = $derived.by(() => {
    try {
      if (!todo.assignedTo) return [];
      const parsed = JSON.parse(todo.assignedTo);
      return Array.isArray(parsed) ? parsed : [todo.assignedTo];
    } catch {
      return todo.assignedTo ? [todo.assignedTo] : [];
    }
  });

  const isAssigned = $derived(
    globalState.userId && assignedList.includes(globalState.userId),
  );

  // Derived: Status Config
  const statusConfig = $derived.by(() => {
    // Cast strict string to Enum type if needed, or compare as string
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
    // Rotate status: todo -> inprogress -> done -> todo
    const s = todo.status as string;
    let next: EventTodoStatus = "todo" as EventTodoStatus;
    if (s === "todo") next = "inprogress" as EventTodoStatus;
    else if (s === "inprogress") next = "done" as EventTodoStatus;
    else next = "todo" as EventTodoStatus;

    try {
      await eventTodoStore.updateTodo(todo.$id, { status: next });
    } catch {
      toastService.error("Erreur màj statut");
    }
  }

  async function handleToggleAssign() {
    if (!globalState.userId) return;

    const newAssigned = isAssigned
      ? assignedList.filter((id: string) => id !== globalState.userId)
      : [...assignedList, globalState.userId];

    try {
      // Stringify as per my convention
      await eventTodoStore.updateTodo(todo.$id, {
        assignedTo: newAssigned.length > 0 ? JSON.stringify(newAssigned) : null,
      });
      toastService.success(
        isAssigned ? "Vous avez quitté la tâche" : "Vous avez rejoint la tâche",
      );
    } catch (e) {
      toastService.error("Erreur assignation");
    }
  }
</script>

<div
  class="group bg-base-100 hover:bg-base-200/50 border-base-200 relative flex items-center justify-between rounded-lg border p-3 transition-all"
>
  <!-- Status Indicator / Action -->
  <div class="flex min-w-0 grow items-start gap-3">
    <button
      onclick={handleToggleStatus}
      class="btn btn-ghost btn-circle btn-sm {statusConfig.class} shrink-0"
      title={statusConfig.label}
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
      >
        <Plus class="size-4" />
      </button>
    {/if}

    <button
      class="btn btn-ghost btn-xs btn-square opacity-0 transition-opacity group-hover:opacity-100"
      onclick={() => onEdit(todo)}
    >
      <Pencil class="size-4" />
    </button>
  </div>
</div>
