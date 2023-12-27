export function formatPhoneNumber(numbers: number[]): string {
  const areaCode = [];
  const firstThreeNums = [];
  const lastFourNums = [];

  for (let i = 0; i <= 2; i++) {
    areaCode.push(numbers[i]);
  }

  areaCode.unshift('(');
  areaCode.push(')');

  for (let i = 0; i < numbers.length; i++) {
    if (i >= 3 && i <= 5) {
      firstThreeNums.push(numbers[i]);
    } else if (i > 5) {
      lastFourNums.push(numbers[i]);
    }
  }
  const phoneNumber =
    areaCode.join('') +
    ' ' +
    firstThreeNums.join('') +
    '-' +
    lastFourNums.join('');
  return phoneNumber;
}

const numbers = [5, 0, 2, 4, 8, 1, 9, 6, 3, 7];
const phoneNumber = formatPhoneNumber(numbers);
console.log(phoneNumber);
