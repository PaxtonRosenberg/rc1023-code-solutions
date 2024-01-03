import { firstChars } from './first-chars';

// Your code goes here

describe('firstChars', () => {
  it('should return the first character if the length is one', () => {
    const word = 'Paxton';
    const length = 1;
    const result = firstChars(length, word);
    expect(result).toBe('P');
  });
});
