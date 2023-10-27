/* exported truncate */
/* PSEUDOCODE:
Define a function named 'truncate' that accepts two arguements, 'length' and 'string'
Declare a new variable named 'newString' and assign its value to an empty string
Declare a new variable named 'ellipsis' and assign its value to the string '...'
  Check if the length of the 'string' is less than the 'length' arguement
    if true, return the 'string' concatenated with the 'ellipsis' variable
  Check if the length of the 'string' is greater than the 'length' arguement
    For each index of the string up to the 'length' arguement:
      Concatenate the 'newString' variable with the 'string' at each index
Return the 'newString' variable concatenated with the 'ellipsis' variable
*/

/* truncate Function */
function truncate(length, string) {
  let newString = '';

  const ellipsis = '...';

  if (string.length < length) {
    return string + ellipsis;
  }

  if (string.length > length) {
    for (let i = 0; i < length; i++) {
      newString += string[i];
    }
  }

  return newString + ellipsis;
}
