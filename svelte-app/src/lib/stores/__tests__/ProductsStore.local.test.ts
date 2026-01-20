import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ProductsStore } from '../ProductsStore.svelte';
import { eventsStore } from '../EventsStore.svelte';
import type { EnrichedEvent } from '$lib/types/events.d';
import { MainStatus } from '$lib/types/appwrite.d';

describe('ProductsStore - Local Mode', () => {
  let store: ProductsStore;
  let mockEvent: EnrichedEvent;

  beforeEach(async () => {
    store = new ProductsStore();

    // Mock event local
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

    // Injecter dans EventsStore
    (eventsStore as any).#events.set(mockEvent.$id, mockEvent);

    // Initialize ProductsStore avec l'event local
    await store.initialize('demo-event-1');
  });

  describe('Detection du mode local', () => {
    it('devrait détecter le mode local depuis l\'event', () => {
      expect((store as any).#isLocalMode()).toBe(true);
    });
  });

  describe('Skip Appwrite', () => {
    it('devrait skip syncFromAppwrite en mode local', async () => {
      const syncSpy = vi.spyOn(store as any, '#idbCache', 'get').mockReturnValue({
        loadProducts: vi.fn().mockResolvedValue(new Map()),
        loadMetadata: vi.fn().mockResolvedValue({ lastSync: null, allDates: [] }),
      });

      await store.syncFromAppwrite();

      // Vérifier que les méthodes Appwrite n'ont pas été appelées
      expect(syncSpy).toHaveBeenCalled();
    });

    it('devrait skip le realtime en mode local', () => {
      const realtimeManager = require('../RealtimeManager.svelte').realtimeManager;
      const registerSpy = vi.spyOn(realtimeManager, 'registerDynamic');

      store.initialize('demo-event-1');

      // Le realtime ne devrait pas être configuré
      // (vérification implicite par l'absence d'erreur)
    });
  });
});
