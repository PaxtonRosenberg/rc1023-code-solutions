export function isPalindrome(str: string): boolean {
  const newStr = str.toLowerCase().replaceAll(',', '').split(' ').join('');
  let reverseStr = '';

  for (let i = newStr.length - 1; i > -1; i--) {
    reverseStr += newStr[i];
  }
  const palindrome = reverseStr === newStr;
  return palindrome;
}

const str: string = 'A man, a plan, a canal, Panama';

isPalindrome(str);
