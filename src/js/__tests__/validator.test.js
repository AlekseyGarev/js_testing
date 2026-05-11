import { validateLuhn, getCardSystem } from '../validator.js';

describe('Card Validator Logic', () => {
  test('should validate correct card numbers via Luhn algorithm', () => {
    expect(validateLuhn('79927398713')).toBe(true);
    expect(validateLuhn('4485123456781234')).toBe(false);
  });

  test('should detect card systems correctly', () => {
    expect(getCardSystem('411111')).toBe('visa');
    expect(getCardSystem('511111')).toBe('mastercard');
    expect(getCardSystem('220011')).toBe('mir');
    expect(getCardSystem('341111')).toBe('amex');
    expect(getCardSystem('unknown')).toBe(null);
  });

  test('should handle spaces in card numbers', () => {
    expect(validateLuhn('7992 7398 713')).toBe(true);
    expect(getCardSystem('4485 1234')).toBe('visa');
  });
});