/* exported pick */
/* PSEUDOCODE:
Define a function named 'pick' that accepts two arguments, 'source' and 'keys'
Declare a new variable named 'newObject' and assign its value to an empty object
  For each key in 'source' and for each index of the 'keys' array:
    Check to see if the value of 'keys' is equal to a key in 'source'
      If true, add that key into into the 'newObject' variable
    Check if the key is in 'source' but its value is undefined:
      Delete that key from 'newObject'
Return 'newObject'
  */

/* pick Function */
function pick(source, keys) {
  const newObject = {};

  for (const x in source) {
    for (let i = 0; i < keys.length; i++) {
      if (x === keys[i]) {
        newObject[x] = source[x];
      }
      if (source[x] === undefined) {
        delete newObject[x];
      }
    }
  }
  return newObject;
}

const source = { foo: 1, bar: 2, baz: 3 };
const keys = ['foo', 'baz'];
console.log(pick(source, keys));
