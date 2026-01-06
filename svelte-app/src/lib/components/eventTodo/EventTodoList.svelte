<script lang="ts">
  import { untrack } from "svelte";
  import { Plus, ListTodo, Loader2 } from "@lucide/svelte";
  import { eventTodoStore } from "$lib/stores/EventTodoStore.svelte";
  import EventTodoItem from "./EventTodoItem.svelte";
  import EventTodoModal from "./EventTodoModal.svelte";
  import Fieldset from "../ui/Fieldset.svelte";
  import { toastService } from "$lib/services/toast.service.svelte";
  import type { EventContributor } from "$lib/types/events";
  import type { EventTodo } from "$lib/types/appwrite";

  interface Props {
    eventId: string;
    contributors?: EventContributor[];
  }

  let { eventId, contributors = [] }: Props = $props();

  // Modal State
  let showModal = $state(false);
  let todoToEdit = $state<EventTodo | null>(null);

  // Load Todos
  $effect(() => {
    if (eventId) {
      untrack(() => {
        eventTodoStore.loadTodos(eventId);
      });
    }
  });

  function handleAdd() {
    todoToEdit = null;
    showModal = true;
  }

  function handleEdit(todo: EventTodo) {
    todoToEdit = todo;
    showModal = true;
  }
</script>

<Fieldset legend="Tâches & Organisation">
  <!-- Header / Actions -->
  <div class="mb-4 flex items-center justify-between">
    <div class="flex items-center gap-2 text-sm opacity-60">
      <ListTodo class="size-4" />
      <span>{eventTodoStore.todos.length} tâches</span>
    </div>
    <button class="btn btn-sm btn-primary gap-2" onclick={handleAdd}>
      <Plus class="size-4" /> Nouvelle tâche
    </button>
  </div>

  <!-- List -->
  <div class="max-h-96 space-y-2 overflow-y-auto">
    {#if eventTodoStore.loading && eventTodoStore.todos.length === 0}
      <div class="flex justify-center py-8 opacity-50">
        <Loader2 class="text-primary size-8 animate-spin" />
      </div>
    {:else if eventTodoStore.todos.length === 0}
      <div
        class="text-base-content/50 border-base-200 hover:border-primary/50 cursor-pointer rounded-lg border-2 border-dashed py-8 text-center text-sm italic transition-colors"
        onclick={handleAdd}
        onkeydown={(e) => e.key === "Enter" && handleAdd()}
        role="button"
        tabindex="0"
      >
        Aucune tâche pour le moment.
        <br />
        <span class="text-primary mt-1 inline-block font-medium"
          >Créer la première tâche +</span
        >
      </div>
    {:else}
      {#each eventTodoStore.todos as todo (todo.$id)}
        <EventTodoItem {todo} onEdit={handleEdit} />
      {/each}
    {/if}
  </div>

  <!-- Modal -->
  <EventTodoModal
    open={showModal}
    {eventId}
    {todoToEdit}
    {contributors}
    onClose={() => (showModal = false)}
  />
</Fieldset>
