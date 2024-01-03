import { charCounts } from './charCounts';

// Your code goes here

describe('charCounts', () => {
  it('returns an object where the keys are the letters in word and the values are how many times that letter appears in the word', () => {
    const word = 'class';
    const result = charCounts(word);
    expect(result).toEqual({ c: 1, l: 1, a: 1, s: 2 });
  });
});
