export function reverseString(str: string): string {
  let reverseString = '';

  for (let i = str.length - 1; i > -1; i--) {
    reverseString += str[i];
  }
  return reverseString;
}
