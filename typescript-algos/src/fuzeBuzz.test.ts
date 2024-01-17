import { fuzeBuzz } from './fuzeBuzz';

// Your code goes here

describe('fuzeBuzz', () => {
  it('takes numbers from 1 up to a limit and checks if they are divisble by 15, 3 and 5 to return an array with a specific string', () => {
    const limit = 15;
    const result = fuzeBuzz(limit);
    expect(result).toEqual([
      '1',
      '2',
      'Learning',
      '4',
      'Fuze',
      'Learning',
      '7',
      '8',
      'Learning',
      'Fuze',
      '11',
      'Learning',
      '13',
      '14',
      'LearningFuze',
    ]);
  });
});
