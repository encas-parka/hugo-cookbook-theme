import { describe, it, expect } from 'vitest';
import { UnitConverter } from './UnitConverter';

describe('UnitConverter', () => {
  it('should normalize kg to gr', () => {
    const result = UnitConverter.normalize(1.5, 'kg');
    expect(result.quantity).toBe(1500);
    expect(result.unit).toBe('gr.');
    expect(result.hasConversion).toBe(false); // C'est une normalisation, pas une conversion d'ingrédient
  });

  it('should normalize l to ml', () => {
    const result = UnitConverter.normalize(0.5, 'l.');
    expect(result.quantity).toBe(500);
    expect(result.unit).toBe('ml');
  });

  it('should convert spoon of sugar', () => {
    const result = UnitConverter.normalize(2, 'c. à soupe', 'Sucre en poudre');
    expect(result.quantity).toBe(30); // 2 * 15
    expect(result.unit).toBe('gr.');
    expect(result.hasConversion).toBe(true);
  });

  it('should convert spoon of flour', () => {
    const result = UnitConverter.normalize(3, 'c. à soupe', 'Farine T55');
    expect(result.quantity).toBe(30); // 3 * 10
    expect(result.unit).toBe('gr.');
  });

  it('should convert spoon of default liquid', () => {
    const result = UnitConverter.normalize(1, 'c. à soupe', 'Eau');
    expect(result.quantity).toBe(15);
    expect(result.unit).toBe('ml');
  });

  it('should convert coffee spoon of salt', () => {
    const result = UnitConverter.normalize(1, 'c. à café', 'Sel fin');
    expect(result.quantity).toBe(5);
    expect(result.unit).toBe('gr.');
  });

  it('should convert pinch', () => {
    const result = UnitConverter.normalize(2, 'pincée', 'Sel');
    expect(result.quantity).toBe(0.8); // 2 * 0.4
    expect(result.unit).toBe('gr.');
  });

  it('should convert unit of onion', () => {
    const result = UnitConverter.normalize(2, 'unité', 'Oignon jaune');
    expect(result.quantity).toBe(240); // 2 * 120
    expect(result.unit).toBe('gr.');
  });

  it('should handle unknown unit without conversion', () => {
    const result = UnitConverter.normalize(5, 'bottes', 'Radis');
    expect(result.quantity).toBe(5);
    expect(result.unit).toBe('bottes');
    expect(result.hasConversion).toBe(false);
  });
});
