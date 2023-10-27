/* exported lastChars */
/* PSEUDOCODE:
Define a function named 'lastChars' that accepts two arguments, 'length' and 'string'
Declare a new variable named 'reverseLength' and assign its value to an empty string
  For each character of the 'string' starting the index of the 'string' arguement's length - the 'length' argument:
  Check if 'length' is greater than 'string.length'
    If true, return string
    Otherwise concatenate each character into 'specificLength'
return 'reverseLength'
*/

/* lastChars Function */
function lastChars(length, string) {
  let reverseLength = '';

  for (let i = string.length - length; i < string.length; i++) {
    if (length > string.length) {
      reverseLength = string;
    } else {
      reverseLength += string[i];
    }
  }

  return reverseLength;
}
