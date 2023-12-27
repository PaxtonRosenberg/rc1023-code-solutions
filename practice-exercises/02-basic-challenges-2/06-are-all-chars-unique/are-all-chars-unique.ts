export function areAllCharactersUnique(str: string): boolean {
  const array: string[] = [];
  let uniqueChar = false;

  if (str === '') {
    uniqueChar = true;
  }

  for (let i = 0; i < str.length; i++) {
    if (!array.includes(str[i])) {
      uniqueChar = true;
      array.push(str[i]);
    } else {
      uniqueChar = false;
    }
  }
  return uniqueChar;
}

const str = '';
areAllCharactersUnique(str);
