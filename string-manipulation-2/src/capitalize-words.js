/* exported capitalizeWords */
/* PSEUDOCODE:
Define a function named 'capitalizeWords that accepts one arguement, 'string'
Declare a new variable named 'stringArray' and assign its value to the 'string' split at each space
Declare a new variable named 'capStringArray' and assign its value to an empty array
Declare a changeable variable named 'newString' and assign its value to an empty string
  For each index of the 'stringArray':
  Declare a new variable named 'firstChar' and assign its value to to the uppercase version of the first character of 'stringArray' at each index
  Declare a new variable named 'restOfWord' and assign its value to to the lowercase version of all characters sliced at the first character of 'stringArray' at each index
  Push the concatenation of 'firstChar' and 'restOfWord' into 'capStringArray'
  Assign the value of 'capStringArray' joined with spaces to 'newString'
Return the 'newString' variable
*/

/* capitalizeWords Function */
function capitalizeWords(string) {
  const stringArray = string.split(' ');

  const capStringArray = [];

  let newString = '';

  for (let i = 0; i < stringArray.length; i++) {
    const firstChar = stringArray[i].charAt(0).toUpperCase();

    const restOfWord = stringArray[i].slice(1).toLowerCase();

    capStringArray.push(firstChar + restOfWord);

    newString = capStringArray.join(' ');
  }

  return newString;
}
