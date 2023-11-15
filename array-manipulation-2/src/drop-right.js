/* exported dropRight */
/* PSEUDOCODE:
Define a function named 'dropRight' that accepts 2 arguements, 'array' and 'count'
Declare a new variable named 'updatedArray' and assign its value to an empty array
  Check if the count is bigger than the length of the array
    if true, return 'updatedArray'
      For each index of the array until the index equals the array length minus 'count'
        move the array values at each index into 'updatedArray'
Return 'updatedArray'

/* dropRight Function */
function dropRight(array, count) {
  const updatedArray = [];

  if (count > array.length) {
    return updatedArray;
  }

  for (let i = 0; i < array.length - count; i++) {
    updatedArray.push(array[i]);
  }

  return updatedArray;
}
