export function highestScoringWord(str: string): string {
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

  const words = str.split(' ');

  const wordScore = words.map((word) => {
    let score = 0;

    for (const letter of word) {
      score += alphabet.indexOf(letter);
    }
    return score;
  });
  let highestScore = 0;
  let highestIndex = 0;
  for (let i = 0; i < wordScore.length; i++) {
    if (wordScore[i] > highestScore) {
      highestScore = wordScore[i];
      highestIndex = i;
    }
  }
  return words[highestIndex];
}

const str = 'the cow jumped over the moon';
highestScoringWord(str);
