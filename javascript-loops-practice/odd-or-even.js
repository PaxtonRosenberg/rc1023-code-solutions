/* exported oddOrEven */
function oddOrEven(numbers) {
  const evenOrOddArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenOrOddArray.push('even');
    } else {
      evenOrOddArray.push('odd');
    }
  }
  return evenOrOddArray;
}
