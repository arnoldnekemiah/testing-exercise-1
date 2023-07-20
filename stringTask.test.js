const stringLength = require('./stringTask');

describe('stringLength function', () => {
  test('should return the correct character count of a valid string', () => {
    expect(stringLength('Hello')).toBe(5);
  });

  test('should throw an error for a non-string input', () => {
    expect(() => {
      stringLength(42);
    }).toThrowError('Input should be a string');
  });

  test('should throw an error for an empty string', () => {
    expect(() => {
      stringLength('');
    }).toThrowError('String must be at least 1 character long');
  });

  test('should throw an error for a string longer than 10 characters', () => {
    expect(() => {
      stringLength('This is a very long string');
    }).toThrowError('String cannot be longer than 10 characters');
  });
});