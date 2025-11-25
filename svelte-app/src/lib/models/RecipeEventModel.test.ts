import { describe, it, expect } from 'vitest';
import { RecipeModel, type RecipeData } from './RecipeModel.svelte';

// Mock Svelte runes for testing environment if needed, 
// but Vitest usually handles TS files fine. 
// Note: Testing Svelte 5 runes in pure JS/TS files might require specific setup 
// or running in a browser-like environment. 
// For this unit test, we assume the class behaves like a standard JS class 
// but we might need to manually trigger updates if the reactivity system isn't active.
// However, $derived are computed properties, so accessing them should work.

describe('RecipeModel', () => {
  const mockRecipe: RecipeData = {
    title: 'Gâteau Test',
    plate: 10,
    ingredients: [
      { ingredient: 'Farine', quantite: 500, unit: 'gr.' },
      { ingredient: 'Oeufs', quantite: 5, unit: 'pièce' },
      { ingredient: 'Sucre', quantite: 1, unit: 'kg' } // Test conversion
    ]
  };

  it('should initialize with base data', () => {
    const model = new RecipeModel(mockRecipe);
    expect(model.baseData.title).toBe('Gâteau Test');
    expect(model.targetGuests).toBe(10);
    expect(model.scaleFactor).toBe(1);
  });

  it('should scale ingredients correctly for double guests', () => {
    const model = new RecipeModel(mockRecipe);
    model.setGuests(20); // Double

    expect(model.scaleFactor).toBe(2);
    
    const flour = model.scaledIngredients.find(i => i.ingredient === 'Farine');
    expect(flour?.scaledQuantity).toBe(1000);
    expect(flour?.normalizedQuantity).toBe(1000);
    expect(flour?.normalizedUnit).toBe('gr.');

    const eggs = model.scaledIngredients.find(i => i.ingredient === 'Oeufs');
    expect(eggs?.scaledQuantity).toBe(10);
  });

  it('should scale and normalize ingredients (kg -> gr)', () => {
    const model = new RecipeModel(mockRecipe);
    model.setGuests(5); // Half

    expect(model.scaleFactor).toBe(0.5);

    const sugar = model.scaledIngredients.find(i => i.ingredient === 'Sucre');
    // Base: 1kg. Scaled: 0.5kg. Normalized: 500gr.
    expect(sugar?.scaledQuantity).toBe(0.5); 
    expect(sugar?.normalizedQuantity).toBe(500);
    expect(sugar?.normalizedUnit).toBe('gr.');
  });
});
