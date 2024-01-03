export function convertTemperature(celsius: number): number[] {
  const kelvin: number = celsius + 273.15;
  const fahrenheit: number = celsius * 1.8 + 32;

  return [kelvin, fahrenheit];
}
