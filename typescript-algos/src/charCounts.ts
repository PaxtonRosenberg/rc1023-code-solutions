export function charCounts(word: string): Record<string, number> {
  type EmptyObj = Record<string, number>;
  const obj: EmptyObj = {};

  for (let i: number = 0; i < word.length; i++) {
    const char: string = word[i].toLowerCase();
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
