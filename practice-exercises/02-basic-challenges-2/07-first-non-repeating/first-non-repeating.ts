export function findFirstNonRepeatingCharacter(
  str: string
): string | undefined {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    const char1 = str[i];

    for (let x = 0; x < str.length; x++) {
      const char2 = str[x];

      if (char1 === char2) {
        count++;
      }
    }
    if (count === 1) {
      return char1;
    }
  }
  return undefined;
}

const str = 'aabccdeff';
findFirstNonRepeatingCharacter(str);
