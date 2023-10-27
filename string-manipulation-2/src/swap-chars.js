/* exported swapChars */
/* PSEUDOCODE:
Define a function named 'swapChars' that accepts 3 arguements, 'firstIndex', 'secondIndex' and 'string'
Declare a new variable named 'swapped' and assign its value to an empty string
  For each index of the 'string':
    Check if the index is the same as 'firstIndex'
      If true, add the character at position 'secondIndex' to 'swapped'
    Check if the index is the same as 'secondIndex'
      If true, add the character at position 'firstIndex' to 'swapped'
    If neither is true:
      add the character at the current index to 'swapped'
Return 'swapped'
*/

/* swapChars Function */
function swapChars(firstIndex, secondIndex, string) {
  let swapped = '';

  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapped += string.charAt(secondIndex);
    } else if (i === secondIndex) {
      swapped += string.charAt(firstIndex);
    } else {
      swapped += string.charAt(i);
    }
  }

  return swapped;
}
