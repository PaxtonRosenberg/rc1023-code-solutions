/* exported isUpperCased */
/* PSEUDOCODE:
Define a function named 'isUpperCased' that accepts one arguement, 'word'
  check if the 'word' arguement is strictly equal to the uppercased version of the 'word' arguement
  if the expression is true, return true.
  otherwise, return false.
  */

/* isUpperCased Function */
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
