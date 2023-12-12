import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const num1: number = Number(process.argv[2]);
const num2: number = Number(process.argv[4]);
const operator: string = process.argv[3];
const invalid: string =
  'Please enter a valid operator: plus, minus, times or over';

if (operator === 'plus') {
  console.log(add(num1, num2));
} else if (operator === 'minus') {
  console.log(subtract(num1, num2));
} else if (operator === 'times') {
  console.log(multiply(num1, num2));
} else if (operator === 'over') {
  console.log(divide(num1, num2));
} else {
  console.log(invalid);
}
