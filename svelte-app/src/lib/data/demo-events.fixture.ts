import type { Main } from '$lib/types/appwrite.d';

export const DEMO_EVENT_FIXTURE: Main = {
  $id: 'demo-event-test',
  name: 'Événement de Test Local',
  description: 'Ceci est un événement de démonstration en mode local',
  status: 'local' as any,
  dateStart: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // +7 jours
  dateEnd: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(), // +10 jours
  allDates: [],
  meals: [],
  contributors: [],
  todos: [
    JSON.stringify({
      id: 'todo-demo-1',
      text: 'Todo de démonstration',
      status: 'pending',
      assignedTo: null,
      createdAt: new Date().toISOString(),
    })
  ],
  teams: [],
  teamsId: null,
  createdBy: 'demo-system',
  createdAt: new Date().toISOString(),
  $updatedAt: new Date().toISOString(),
  $sequence: 0,
  $tableId: 'main',
  $databaseId: 'enka-cookbook',
  location: null,
  minContrib: 0,
  maxContrib: 0,
  inviteStatus: 'accepted',
} as Main;
