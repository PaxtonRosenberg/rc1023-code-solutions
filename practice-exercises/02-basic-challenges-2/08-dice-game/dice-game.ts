export type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
export type Simulation = {
  dice1: DiceRoll;
  dice2: DiceRoll;
  sum: number;
  result: 'win' | 'lose' | 'roll again';
};

export function diceGameSimulation(numSimulations: number): Simulation[] {
  const crapsGames: Simulation[] = [];

  for (let i = 0; i < numSimulations; i++) {
    const diceRoll1 = Math.floor(Math.random() * (6 - 1) + 1) as DiceRoll;
    const diceRoll2 = Math.floor(Math.random() * (6 - 1) + 1) as DiceRoll;
    const combinedRoll = diceRoll1 + diceRoll2;
    let gameResult: 'win' | 'lose' | 'roll again';

    if (combinedRoll === 7 || combinedRoll === 11) {
      gameResult = 'win';
    } else if (
      combinedRoll === 2 ||
      combinedRoll === 3 ||
      combinedRoll === 12
    ) {
      gameResult = 'lose';
    } else {
      gameResult = 'roll again';
    }

    const simulation: Simulation = {
      dice1: diceRoll1,
      dice2: diceRoll2,
      sum: combinedRoll,
      result: gameResult,
    };

    crapsGames.push(simulation);
  }

  return crapsGames;
}

const numSimulations = 3;
diceGameSimulation(numSimulations);
