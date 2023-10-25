/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

/* isUnderFive Function */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

/* isEven Function */
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

/* startsWithJ Function */
function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

/* isOldEnoughToDrink Function */
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

/* isOldEnoughToDrive Function */
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

/* isOldEnoughToDrinkAndDrive Function */
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age) {
    return false;
  }
}

/* categorizeAcidity Function */
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH <= 6 && pH >= 0) {
    return 'acid';
  } else if (pH >= 8 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

/* introduceWarnerBro Function */
function introduceWarnerBro(name) {
  switch (name) {
    case 'dot':
      return "I'm cute~";
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    default:
      return 'Goodnight everybody!';
  }
}

/* recommendMovie Function */
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Kill Bill: Vol. 1';
    case 'comedy':
      return 'The Hangover';
    case 'horror':
      return 'Alien';
    case 'drama':
      return 'Driving Miss Daisy';
    case 'musical':
      return "Singin' in the Rain";
    case 'sci-fi':
      return '2001: A Space Odyssey';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
