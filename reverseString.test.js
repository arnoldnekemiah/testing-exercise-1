const reverseString = require('./reverseString');

describe('reverseString function', () => {
  test('should reverse a string correctly', () => {
    expect(reverseString('Hello')).toBe('olleH');
  });

  test('should reverse an empty string to an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('should reverse a string containing special characters', () => {
    expect(reverseString('!@#$')).toBe('$#@!');
  });

  test('should reverse a long string', () => {
    expect(reverseString('abcdefghijklmnopqrstuvwxyz')).toBe('zyxwvutsrqponmlkjihgfedcba');
  });
});
