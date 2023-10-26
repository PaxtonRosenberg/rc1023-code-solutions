/* exported reverse */
/* PSEUDOCODE:
Define a function named 'reverse' that accepts one arguement, 'array'
Define a variable named 'reOrder' to an empty array
  For each index of the array starting at the last:
    push the array at each index into the 'reOrder' variable
Return the 'reOrder' variable
*/

/* tail Function */
function reverse(array) {
  const reOrder = [];
  for (let i = array.length - 1; i > -1; i--) {
    reOrder.push(array[i]);
  }
  return reOrder;
}
