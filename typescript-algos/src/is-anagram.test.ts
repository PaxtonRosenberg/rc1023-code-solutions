import { isAnagram } from './is-anagram';

// Your code goes here

describe('isAnagram', () => {
  it('returns true or false depending on whether two strings are anagrams', () => {
    const firstString = 'agrees';
    const secondString = 'grease';
    const result = isAnagram(firstString, secondString);
    expect(result).toEqual(true);
  });
});
