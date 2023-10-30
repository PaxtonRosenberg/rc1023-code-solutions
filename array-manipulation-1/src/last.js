/* exported last */
/* PSEUDOCODE:
Define a function named 'last' that accepts one arguement, 'array'
Define a variable named 'lastElement' and assign its value to the 'array' length - 1
Return the 'lastElement' variable
*/

/* head Function */
function last(array) {
  const lastElement = array[array.length - 1];
  return lastElement;
}
