/* exported chunk */
/* PSEUDOCODE:
Define a function named 'chunk' that accepts 2 arguements, 'array' and 'size'
Declare a new variable named 'chunkArray' and assign its value to an empty array
Declare a new variable named 'leftoverArray' and assign its value to an empty array
  Check if 'chunk' is larger than the length of 'array'
    If true, return an empty array
  For each index of 'array':
    Check if the index is less than 'size'
      if true, move the array values at each index into 'chunkArray'
    Otherwise:
      the array at each index will equal 'leftoverArray'
  Outside of the loop, merge 'chunkArray' with 'leftoverArray' and set them equal to a new variable named newArrays
Return newArrays
*/

/* chunk function */
function chunk(array, size) {
  const newArray = [];

  let storageArray = [];

  for (let i = 0; i < array.length; i++) {
    storageArray.push(array[i]);

    if (storageArray.length === size || i === array.length - 1) {
      newArray.push(storageArray);
      storageArray = [];
    }
  }

  return newArray;
}

const array = [false, true, false, true];
const size = 3;
console.log('chunk Result:', chunk(array, size));
