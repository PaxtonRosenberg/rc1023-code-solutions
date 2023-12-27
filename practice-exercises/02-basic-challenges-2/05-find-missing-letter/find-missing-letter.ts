export function findMissingLetter(arr: string[]): string | undefined {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const startIndex = alphabet.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    const arrayLetter = arr[i];
    const alphabetLetter = alphabet[startIndex + i];
    if (arrayLetter !== alphabetLetter) {
      return alphabetLetter;
    }
  }

  return undefined;
}

const arr = ['a', 'b', 'c', 'e'];
findMissingLetter(arr);
