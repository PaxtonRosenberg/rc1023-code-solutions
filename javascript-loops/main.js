/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

/* getNumbersToTen Function */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

/* getEvenNumbersToTwenty Function */
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

/* repeatWord Fucntion */
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}

/* logEachCharacter Function */
function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string.charAt(i));
  }
}

/* doubleAll Function */
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

/* getKeys Function */
function getKeys(object) {
  const keys = [];
  for (const x in object) {
    keys.push(x);
  }
  return keys;
}

/* getValues Function */
function getValues(object) {
  const values = [];
  for (const x in object) {
    values.push(object[x]);
  }
  return values;
}
