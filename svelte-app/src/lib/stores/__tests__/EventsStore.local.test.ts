import { describe, it, expect, beforeEach, vi } from 'vitest';
import { EventsStore } from '../EventsStore.svelte';
import type { EnrichedEvent, CreateEventData } from '$lib/types/events.d';
import { MainStatus } from '$lib/types/appwrite.d';

describe('EventsStore - Local Mode', () => {
  let store: EventsStore;
  let mockEvent: EnrichedEvent;

  beforeEach(() => {
    store = new EventsStore();

    // Créer un événement local de test
    mockEvent = {
      $id: 'demo-event-1',
      name: 'Demo Event',
      status: 'local' as MainStatus,
      dateStart: new Date().toISOString(),
      dateEnd: new Date().toISOString(),
      allDates: [],
      meals: [],
      contributors: [],
      todos: [],
      teams: [],
      createdBy: 'demo-system',
      createdAt: new Date().toISOString(),
      $updatedAt: new Date().toISOString(),
      teamsId: null,
      description: null,
      location: null,
      minContrib: 0,
      maxContrib: 0,
      inviteStatus: 'accepted',
    };

    // Injecter directement dans la Map (sans passer par Appwrite)
    (store as any).#events.set(mockEvent.$id, mockEvent);
  });

  describe('Detection du mode local', () => {
    it('devrait détecter un événement local', () => {
      expect((store as any).#isLocalMode('demo-event-1')).toBe(true);
    });

    it('ne devrait pas détecter un événement normal comme local', () => {
      const normalEvent = { ...mockEvent, status: 'published' as MainStatus };
      (store as any).#events.set('normal-event', normalEvent);

      expect((store as any).#isLocalMode('normal-event')).toBe(false);
    });
  });

  describe('Mise à jour des métadonnées', () => {
    it('devrait mettre à jour le nom en mode local', async () => {
      const updated = await store.updateEvent('demo-event-1', { name: 'Updated Demo' });

      expect(updated.name).toBe('Updated Demo');
      expect(updated.$updatedAt).toBeDefined();
    });

    it('devrait mettre à jour le statut en mode local', async () => {
      await store.updateEventStatus('demo-event-1', 'published' as MainStatus);

      const event = (store as any).#events.get('demo-event-1');
      expect(event.status).toBe('published');
    });
  });

  describe('Gestion des meals', () => {
    it('devrait ajouter un meal en mode local', async () => {
      const meal = {
        recipeUuid: 'recipe-1',
        recipe: null,
        plates: 50,
        date: new Date().toISOString(),
      };

      const updated = await store.addMeal('demo-event-1', meal);

      expect(updated.meals).toHaveLength(1);
      expect(updated.meals[0]).toEqual(meal);
    });

    it('devrait mettre à jour un meal en mode local', async () => {
      const meal = {
        recipeUuid: 'recipe-1',
        recipe: null,
        plates: 50,
        date: new Date().toISOString(),
      };

      await store.addMeal('demo-event-1', meal);

      const updatedMeal = { ...meal, plates: 60 };
      const updated = await store.updateMeal('demo-event-1', 0, updatedMeal);

      expect(updated.meals[0].plates).toBe(60);
    });

    it('devrait supprimer un meal en mode local', async () => {
      const meal = {
        recipeUuid: 'recipe-1',
        recipe: null,
        plates: 50,
        date: new Date().toISOString(),
      };

      await store.addMeal('demo-event-1', meal);
      const updated = await store.deleteMeal('demo-event-1', 0);

      expect(updated.meals).toHaveLength(0);
    });
  });

  describe('Gestion des todos', () => {
    it('devrait ajouter un todo en mode local', async () => {
      const todo = {
        id: 'todo-1',
        text: 'Test todo',
        status: 'pending' as const,
        assignedTo: null,
        createdAt: new Date().toISOString(),
      };

      const updated = await store.addTodo('demo-event-1', todo);

      expect(updated.todos).toHaveLength(1);
      expect(updated.todos[0].text).toBe('Test todo');
    });

    it('devrait mettre à jour le statut d\'un todo en mode local', async () => {
      const todo = {
        id: 'todo-1',
        text: 'Test todo',
        status: 'pending' as const,
        assignedTo: null,
        createdAt: new Date().toISOString(),
      };

      await store.addTodo('demo-event-1', todo);
      await store.updateTodoStatus('demo-event-1', 'todo-1', 'completed');

      const event = (store as any).#events.get('demo-event-1');
      expect(event.todos[0].status).toBe('completed');
    });
  });

  describe('Skip Appwrite', () => {
    it('devrait skip syncFromRemote en mode local', async () => {
      const syncSpy = vi.spyOn(store as any, '#loadEvents');

      await store.syncFromRemote();

      expect(syncSpy).not.toHaveBeenCalled();
    });
  });
});
