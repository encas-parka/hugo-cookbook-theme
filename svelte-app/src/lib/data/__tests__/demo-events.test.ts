import { describe, it, expect, beforeEach, vi } from "vitest";
import { generateDemoEvent, validateDemoEvent } from "../demo-events";
import type { DemoEventConfig } from "../demo-events";

// Mock RecipesStore
vi.mock("$lib/stores/RecipesStore.svelte", () => ({
  recipesStore: {
    getRecipeByUuid: vi.fn((uuid: string) => {
      // Mock recipes data
      const mockRecipes: Record<string, any> = {
        "taboule-libanais_izh9n9l14w66": {
          uuid: "taboule-libanais_izh9n9l14w66",
          typeR: "entree",
        },
        "mafe-vegetarien-et-riz_ij8i8degl1r6": {
          uuid: "mafe-vegetarien-et-riz_ij8i8degl1r6",
          typeR: "plat",
        },
        "banoffee-vegan-et-sans_2h83u0xlel3u": {
          uuid: "banoffee-vegan-et-sans_2h83u0xlel3u",
          typeR: "dessert",
        },
      };

      return Promise.resolve(mockRecipes[uuid] || null);
    }),
  },
}));

describe("Demo Events Generator", () => {
  describe("Date Generation", () => {
    it("devrait générer des dates dans le futur", async () => {
      const config: DemoEventConfig = {
        name: "Test Event",
        description: "Test",
        durationDays: 1,
        meals: [
          {
            recipes: [
              {
                recipeUuid: "taboule-libanais_izh9n9l14w66",
                plates: 50,
                typeR: "entree",
                hasOwnPlatesNb: false,
              },
            ],
            guests: 50,
            dayOffset: 0,
            time: "12:00",
          },
        ],
      };

      const event = await generateDemoEvent(config);

      const startDate = new Date(event.dateStart);
      const now = new Date();

      expect(startDate.getTime()).toBeGreaterThan(now.getTime());
    });

    it("devrait respecter les dayOffsets", async () => {
      const config: DemoEventConfig = {
        name: "Test Event",
        description: "Test",
        durationDays: 3,
        meals: [
          {
            recipes: [
              {
                recipeUuid: "taboule-libanais_izh9n9l14w66",
                plates: 50,
                typeR: "entree",
                hasOwnPlatesNb: false,
              },
            ],
            guests: 50,
            dayOffset: 0,
            time: "12:00",
          },
          {
            recipes: [
              {
                recipeUuid: "mafe-vegetarien-et-riz_ij8i8degl1r6",
                plates: 50,
                typeR: "plat",
                hasOwnPlatesNb: false,
              },
            ],
            guests: 50,
            dayOffset: 2,
            time: "12:00",
          },
        ],
      };

      const event = await generateDemoEvent(config);

      expect(event.meals).toHaveLength(2);

      const firstMealDate = new Date(event.meals[0].date);
      const secondMealDate = new Date(event.meals[1].date);

      // Vérifier que les meals sont espacés de 2 jours
      const daysDiff =
        (secondMealDate.getTime() - firstMealDate.getTime()) /
        (1000 * 60 * 60 * 24);
      expect(daysDiff).toBeCloseTo(2, 0);
    });
  });

  describe("EventMeal Structure", () => {
    it("devrait générer des EventMeal avec la structure correcte", async () => {
      const config: DemoEventConfig = {
        name: "Test Event",
        description: "Test",
        durationDays: 1,
        meals: [
          {
            recipes: [
              {
                recipeUuid: "taboule-libanais_izh9n9l14w66",
                plates: 50,
                typeR: "entree",
                hasOwnPlatesNb: false,
              },
              {
                recipeUuid: "mafe-vegetarien-et-riz_ij8i8degl1r6",
                plates: 50,
                typeR: "plat",
                hasOwnPlatesNb: false,
              },
            ],
            guests: 50,
            dayOffset: 0,
            time: "12:00",
          },
        ],
      };

      const event = await generateDemoEvent(config);

      expect(event.meals).toHaveLength(1);
      expect(event.meals[0].id).toBeDefined();
      expect(event.meals[0].date).toMatch(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/,
      ); // ISO 8601
      expect(event.meals[0].guests).toBe(50);
      expect(event.meals[0].recipes).toHaveLength(2);
      expect(event.meals[0].recipes[0].recipeUuid).toBe("taboule-libanais_izh9n9l14w66");
      expect(event.meals[0].recipes[0].plates).toBe(50);
      expect(event.meals[0].recipes[0].typeR).toBe("entree");
    });

    it("devrait regrouper les recipes du même moment", async () => {
      const config: DemoEventConfig = {
        name: "Test Event",
        description: "Test",
        durationDays: 1,
        meals: [
          {
            recipes: [
              {
                recipeUuid: "taboule-libanais_izh9n9l14w66",
                plates: 30,
                typeR: "entree",
                hasOwnPlatesNb: false,
              },
              {
                recipeUuid: "mafe-vegetarien-et-riz_ij8i8degl1r6",
                plates: 50,
                typeR: "plat",
                hasOwnPlatesNb: false,
              },
            ],
            guests: 50,
            dayOffset: 0,
            time: "12:00",
          },
        ],
      };

      const event = await generateDemoEvent(config);

      expect(event.meals).toHaveLength(1);
      expect(event.meals[0].recipes).toHaveLength(2);
      expect(event.meals[0].guests).toBe(50);
    });
  });

  describe("allDates Generation", () => {
    it("devrait générer allDates correctement", async () => {
      const config: DemoEventConfig = {
        name: "Test Event",
        description: "Test",
        durationDays: 2,
        meals: [
          {
            recipes: [
              {
                recipeUuid: "taboule-libanais_izh9n9l14w66",
                plates: 50,
                typeR: "entree",
                hasOwnPlatesNb: false,
              },
            ],
            guests: 50,
            dayOffset: 0,
            time: "12:00",
          },
          {
            recipes: [
              {
                recipeUuid: "mafe-vegetarien-et-riz_ij8i8degl1r6",
                plates: 50,
                typeR: "plat",
                hasOwnPlatesNb: false,
              },
            ],
            guests: 50,
            dayOffset: 1,
            time: "12:00",
          },
        ],
      };

      const event = await generateDemoEvent(config);

      expect(event.allDates).toHaveLength(2);
      expect(event.allDates[0]).toMatch(/^\d{4}-\d{2}-\d{2}$/); // YYYY-MM-DD
      expect(event.allDates[1]).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  describe("Event Status", () => {
    it("devrait définir le statut à 'local'", async () => {
      const config: DemoEventConfig = {
        name: "Test Event",
        description: "Test",
        durationDays: 1,
        meals: [
          {
            recipes: [
              {
                recipeUuid: "taboule-libanais_izh9n9l14w66",
                plates: 50,
                typeR: "entree",
                hasOwnPlatesNb: false,
              },
            ],
            guests: 50,
            dayOffset: 0,
            time: "12:00",
          },
        ],
      };

      const event = await generateDemoEvent(config);

      expect(event.status).toBe("local");
    });
  });

  describe("Validation", () => {
    it("devrait valider un événement correct", async () => {
      const config: DemoEventConfig = {
        name: "Test Event",
        description: "Test",
        durationDays: 1,
        meals: [
          {
            recipes: [
              {
                recipeUuid: "taboule-libanais_izh9n9l14w66",
                plates: 50,
                typeR: "entree",
                hasOwnPlatesNb: false,
              },
            ],
            guests: 50,
            dayOffset: 0,
            time: "12:00",
          },
        ],
      };

      const event = await generateDemoEvent(config);

      // Ne devrait pas lancer d'erreur
      expect(() => validateDemoEvent(event)).not.toThrow();
    });

    it("devrait rejeter un événement avec meals non triés", () => {
      const invalidEvent = {
        $id: "test",
        name: "Test",
        status: "local",
        dateStart: new Date().toISOString(),
        dateEnd: new Date().toISOString(),
        allDates: ["2025-01-25"],
        meals: [
          {
            id: "meal-2",
            date: "2025-01-25T20:00:00.000Z",
            guests: 50,
            recipes: [],
          },
          {
            id: "meal-1",
            date: "2025-01-25T12:00:00.000Z",
            guests: 50,
            recipes: [],
          },
        ],
        contributors: [],
        todos: [],
        createdBy: "test",
        createdAt: new Date().toISOString(),
        $updatedAt: new Date().toISOString(),
        $permissions: [],
      };

      expect(() => validateDemoEvent(invalidEvent as any)).toThrow();
    });
  });
});
