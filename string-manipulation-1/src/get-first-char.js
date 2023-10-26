/* exported getFirstChar */
/* PSEUDOCODE:
Define a function named 'getFirstChar' that accepts one arguement, 'string'
  Declare a variable named 'firstChar' and assign it to an empty string
  Take the character in the first index of the 'string' arguement and move it into the 'firstChar' variable
Return the value of the firstChar variable
*/

/* getFirstChar Function */
function getFirstChar(string) {
  let firstChar = '';
  firstChar = string.charAt(0);
  return firstChar;
}
