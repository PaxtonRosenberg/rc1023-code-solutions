/* exported isLowerCased */
/* PSEUDOCODE:
Define a function named 'isLowerCased' that accepts one arguement, 'word'
Return truthy if 'word' is strictly equal to the lowercased version of 'word'
*/

/* isLowerCased Function */
function isLowerCased(word) {
  return word === word.toLowerCase();
}
