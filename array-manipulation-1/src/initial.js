/* exported initial */
/* PSEUDOCODE:
Define a function named 'initial' that accepts one arguement, 'array'
Define a variable named 'withoutLastElement' to an empty array
  For each index of the array except the last:
    push the array at each index into the 'withoutLastElement' variable
Return the 'withOutLastElement' variable
*/

/* tail Function */
function initial(array) {
  const withOutLastElement = [];
  for (let i = 0; i < array.length - 1; i++) {
    withOutLastElement.push(array[i]);
  }
  return withOutLastElement;
}
