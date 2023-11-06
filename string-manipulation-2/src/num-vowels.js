/* exported numVowels */
/* PSEUDOCODE:
Define a function named 'numVowels' that accepts one argument 'string' which can be any JavaScript String
Declare a changeable variable named 'numberOfVowels' and assign its value to 0
Declare a variable named 'vowels' and assign its value to an array of all lowercase vowels
  For each character of the 'string':
    check if that lowercase version of the character is included in the 'vowels' array
      if true, increment 'numberOfVowels by 1
return numberOfVowels
*/

/* numVowels Function */
function numVowels(string) {
  let numberOfVowels = 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const i of string) {
    if (vowels.includes(i.toLowerCase())) {
      numberOfVowels++;
    }
  }

  return numberOfVowels;
}
