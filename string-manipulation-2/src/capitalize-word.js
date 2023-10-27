/* exported capitalizeWord */
/* PSEUDOCODE:
Define a function named 'capitalizeWord' that accepts one arguement, 'word'
Declare a new variable named 'caps' and assign its value to an empty string
Declare a new variable named 'upperCase' and assign its value to the uppercased version of the first character in the 'word'
Declare a new variable named 'lowerCase' and assign its value to the lowercased version of the word sliced at the first character
  Concatenate the 'upperCase' variable with the 'lowerCase' variable and assign this value to the 'caps' variable
Check if the lowercased version of the 'word' is strictly equal to 'javascript.
    If true, return the string 'JavaScript'
Otherwise, return the 'caps' variable
*/

/* capitalizeWord Function */
function capitalizeWord(word) {
  let caps = '';

  const upperCase = word.charAt(0).toUpperCase();

  const lowerCase = word.slice(1).toLowerCase();

  caps += upperCase + lowerCase;

  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    return caps;
  }
}
