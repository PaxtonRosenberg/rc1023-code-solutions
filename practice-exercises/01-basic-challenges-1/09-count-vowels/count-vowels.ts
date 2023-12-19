export function countVowels(str: string): number {
  const vowels: string[] = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  let counter: number = 0;
  const newStr: string[] = str.split('');

  for (let i = 0; i < newStr.length; i++) {
    if (vowels.includes(newStr[i])) {
      counter++;
    }
  }
  return counter;
}
