/* exported capitalize */
/* PSEUDOCODE:
Define a function named 'capitalize' that accepts one arguement, 'word'
  Declare a new variable named 'capFirstLetter' and assign it's value to an empty string
  Assign the 'capFirstLetter' variable to the uppercased first character of the 'word' arguement , concatenated with the lowercased word sliced from the first character
Return the capFirstLetter variable */

/* capitalize Function */
function capitalize(word) {
  let capFirstLetter = '';
  capFirstLetter = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capFirstLetter;
}
