/* exported getKeys */
/* PSEUDOCODE:
Define a function named 'getKeys' that accepts one arguement, 'object'
Declare a variable named 'keys' and assign its value to an empty array
  For each key in the 'object':
    Push the 'object' keys into the 'key' variable
Return the 'keys' variable

/* getKeys Function */
function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
