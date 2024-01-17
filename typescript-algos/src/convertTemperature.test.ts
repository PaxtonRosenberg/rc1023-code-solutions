import { convertTemperature } from './convertTemperature';

// Your code goes here

describe('convertTemperature', () => {
  it('returns an array of kelvin and farenheit temperatures converted from celsius', () => {
    const celsius = 100;
    const result = convertTemperature(celsius);
    expect(result).toEqual([373.15, 212]);
  });
});
