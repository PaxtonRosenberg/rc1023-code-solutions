/* exported drop */
/* PSEUDOCODE:
Define a function named 'drop' that accepts two arguements, 'array' and 'count'
Declare a new variable named 'updatedArray' and assign its value to an empty array
  For each index of 'array' starting after the 'count' value:
    Check if count is greater than the length of 'array'
      if true, assign the value of 'array' to 'updateArray'
    Otherwise:
      put the values at the array index into the 'updateArray' variable
Return 'updatedArray'
*/

/* drop Function */
function drop(array, count) {
  let updatedArray = [];

  for (let i = count; i < array.length; i++) {
    if (count > array.length) {
      updatedArray = array;
    } else {
      updatedArray.push(array[i]);
    }
  }

  return updatedArray;
}
