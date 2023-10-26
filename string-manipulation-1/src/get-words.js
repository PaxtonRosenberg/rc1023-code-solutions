/* exported getWords */
/* PSEUDOCODE:
Define a function named 'getWords' that accepts one arguement, 'string'
Declare a variable that can be changed named 'wordsArray' and assign its value to an empty array
Declare a variable named 'newString' and assign its value to the 'string', splitting out all spaces.
  Assign the value of 'newString' to the 'wordsArray' variable
    Check if the 'string' value is strictly equal to an empty string
      if true, return and empty array.
Otherwise, return the wordsArray variable
*/

/* getWords Function */
function getWords(string) {
  let wordsArray = [];
  const emptyArray = [];
  const newString = string.split(' ');

  wordsArray = newString;

  if (string === '') {
    return emptyArray;
  }
  return wordsArray;
}
