/* exported tail */
/* PSEUDOCODE:
Define a function named 'tail' that accepts one arguement, 'array'
Define a variable named 'withoutFirstElement' to an empty array
  For each index of the array after the first:
    push the array at each index into the 'withoutFirstElement' variable
Return the 'withOutFirstElement' variable
*/

/* tail Function */
function tail(array) {
  const withOutFirstElement = [];
  for (let i = 1; i < array.length; i++) {
    withOutFirstElement.push(array[i]);
  }
  return withOutFirstElement;
}
