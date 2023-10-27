/* exported ransomCase */
/* PSEUDOCODE
Define a function named 'ransomCase that accepts one arguement, 'string'
Declare a new variable called 'alternateCaps' and assign its value to an empty string
  For each index of 'string':
    check if the index is 0
      if true, make the character of 'string' lowercase and concatenate into the 'alternateCaps' variable
    check if the index is even by checking if its remainder is NOT divisible by 2
      if true, make the character of 'string' uppercase and concatenate into the 'alternateCaps' variable
    check if there is any other condition
      if true make the character of 'string' uppercase and concatenate into the 'alternateCaps' variable
Return the alternateCaps' variable

/* ransomCase Function */
function ransomCase(string) {
  let alternateCaps = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      alternateCaps += string[i].toLowerCase();
    } else {
      alternateCaps += string[i].toUpperCase();
    }
  }
  return alternateCaps;
}
