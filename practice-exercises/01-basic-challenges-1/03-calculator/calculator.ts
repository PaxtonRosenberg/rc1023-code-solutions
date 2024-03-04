export function calculator(
  num1: number,
  num2: number,
  operator: string
): number | string {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  } else {
    return 'please use a valid operator: + - * /';
  }
}
