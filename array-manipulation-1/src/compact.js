/* exported compact */
/* PSEUDOCODE:
Define a function named 'compact' that accepts one arguement, 'array'
Define a variable named 'removeFalse' to an empty array
  For each index of the array:
    check if the array at each index is truthy
    if truthy, push the array values at each index into the 'removeFalse' variable
Return the 'removeFalse' variable
*/

/* tail Function */
function compact(array) {
  const removeFalse = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      removeFalse.push(array[i]);
    }
  }
  return removeFalse;
}
