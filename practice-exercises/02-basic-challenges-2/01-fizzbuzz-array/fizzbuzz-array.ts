export function fizzBuzzArray(num: number): (string | number)[] {
  const newArray: (string | number)[] = [];

  for (let i = 1; i < num + 1; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      newArray.push('FizzBuzz');
    } else if (i % 5 === 0) {
      newArray.push('Buzz');
    } else if (i % 3 === 0) {
      newArray.push('Fizz');
    } else {
      newArray.push(i);
    }
  }
  return newArray;
}
