import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns a string formatted with a dollar sign, dollar amount and cents rounded up to the nearest dollar', () => {
    const amount = 49.99999125;
    const result = toDollars(amount);
    expect(result).toEqual('$50.00');
  });
});

describe('divideBy', () => {
  it('divides each number in an array of numbers by a divisor without modifying the original array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const divisor = 4;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([0.25, 0.5, 0.75, 1, 1.25]);
  });
});

describe('multiplyBy', () => {
  it('modifies an object by multiplying each key in an object by a number only if that key is a number', () => {
    const sampleObject = {
      record: 'Paxton',
    };
    const multiplier = 5;
    const answer = multiplyBy(sampleObject, multiplier);
    expect(answer).toEqual(sampleObject);
  });
});
