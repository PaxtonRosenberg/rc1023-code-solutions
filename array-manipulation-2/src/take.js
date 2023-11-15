/* exported take */
/* PSEUDOCODE:
Define a function named 'take' that accepts two parameters, array and count
Declare a new variable named 'updatedArray' and assign its value to an empty array
  For each index of the array up to the count length:
    Check if count is bigger than the length of the array
      if true, 'updatedArray' will equal 'array'
    Otherwise, take each value and put it into the 'updatedArray' variable
Return updatedArray
*/

/* take Function */
function take(array, count) {
  let updatedArray = [];

  for (let i = 0; i < count; i++) {
    if (count > array.length) {
      updatedArray = array;
    } else {
      updatedArray.push(array[i]);
    }
  }
  return updatedArray;
}
