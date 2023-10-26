/* exported getLastChar */
/* PSEUDOCODE:
Define a function named 'getLastChar' that accepts one arguement, 'string'
  Declare a new variable named 'lastChar' and assign it to an empty string
  Assign the 'lastChar' variable to the character to 1 less than the 'string' arguement's length
Return the 'lastChar' variable */

/* getLastChar Function */
function getLastChar(string) {
  let lastChar = '';
  lastChar = string.charAt(string.length - 1);
  return lastChar;
}
