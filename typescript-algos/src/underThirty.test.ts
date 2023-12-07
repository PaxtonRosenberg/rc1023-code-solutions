import { underThirty } from './underThirty';

// Your code goes here

describe('underThirty', () => {
  it('takes an array of objects that have number ages and returns an array of objects with ages less than 30', () => {
    const people = [
      {
        age: 35,
        name: 'Michael',
      },
      {
        age: 29,
        name: 'Paxton',
      },
      {
        age: 28,
        name: 'Gregory',
      },
    ];
    const result = underThirty(people);
    expect(result).toEqual([
      { age: 29, name: 'Paxton' },
      { age: 28, name: 'Gregory' },
    ]);
  });
});
