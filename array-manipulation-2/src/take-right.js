/* exported takeRight */
/* PSEUDOCODE:
Define a function named 'takeRight' that accepts two arguements, 'array' and 'count'
Declare a new variable named 'updatedArray' and assign its value to an empty array
  For each index starting at the index of the length of the array minus 'count':
    Check if 'count' is greater than the length of 'array'
      If true, copy the original array and assign its value to 'updatedArray'
    Otherwise:
      add the array value at each index into 'updatedArray'
Return 'updatedArray'

*/

/* takeRight Function */
function takeRight(array, count) {
  let updatedArray = [];

  for (let i = array.length - count; i < array.length; i++) {
    if (count > array.length) {
      updatedArray = [...array];
    } else {
      updatedArray.push(array[i]);
    }
  }
  return updatedArray;
}
