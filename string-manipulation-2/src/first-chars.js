/* exported firstChars */
/* PSEUDOCODE:
Define a function named firstChars that accepts two arguments, 'length' and 'string'
Declare a new variable named 'specificLength' and assign its value to an empty string
  For each character of the 'string' whose index is less than length 'length':
  Check if 'length' is greater than 'string.length'
    If true, return string
    Otherwise concatenate each character into 'specificLength'
return 'specificLength'
*/

/* firstChars Function */
function firstChars(length, string) {
  let specificLength = '';

  for (let i = 0; i < length; i++) {
    if (length > string.length) {
      specificLength = string;
    } else {
      specificLength += string[i];
    }
  }

  return specificLength;
}
