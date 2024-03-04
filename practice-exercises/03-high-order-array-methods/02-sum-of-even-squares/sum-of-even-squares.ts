export function sumOfEvenSquares(numbers: number[]): number {
  const evenNums = numbers.filter((number) => number % 2 === 0);
  const squaredEvens = evenNums.map((evenNum) => Math.pow(evenNum, 2));
  const sumOfSquaredEvens = squaredEvens.reduce((total, squaredEven) => {
    return total + squaredEven;
  }, 0);
  return sumOfSquaredEvens;
}

const numbers = [1, 2, 3, 4, 5];
sumOfEvenSquares(numbers);
