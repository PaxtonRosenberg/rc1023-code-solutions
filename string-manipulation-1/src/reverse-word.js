/* exported reverseWord */
/* PSEUDOCODE:
Define a function named 'reverseWord' that accepts one arguement, 'word'
Declare a variable named 'reverse' and assign its value to an empty string
  For each index of the 'word' starting from the last index and working down:
   concatenate each index of word into the 'reverse' variable
Return the 'reverse' variable
*/

/* reverseWord Function */
function reverseWord(word) {
  let reverse = '';

  for (let i = word.length - 1; i > -1; i--) {
    reverse += word[i];
  }
  return reverse;
}
