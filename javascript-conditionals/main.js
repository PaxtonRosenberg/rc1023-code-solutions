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
      console.log("I'm cute~");
      break;
    case 'yakko':
    case 'wakko':
      console.log("We're the warner brothers!");
      break;
    default:
      console.log('Goodnight everybody!');
  }
}

/* recommendMovie Function */
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Kill Bill: Vol. 1');
      break;
    case 'comedy':
      console.log('The Hangover');
      break;
    case 'horror':
      console.log('Alien');
      break;
    case 'drama':
      console.log('Driving Miss Daisy');
      break;
    case 'musical':
      console.log("Singin' in the Rain");
      break;
    case 'sci-fi':
      console.log('2001: A Space Odyssey');
      break;
    default:
      console.log(
        'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi'
      );
  }
}
