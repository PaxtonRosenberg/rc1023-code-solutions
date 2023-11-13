let characterIndex = 0;

let rightLetter = 0;

let wrongLetter = 0;

const space = ' ';

const $body = document.querySelector('body');

const $span = document.querySelectorAll('span');

const $popup = document.querySelector('.popup');

const $accuracy = document.querySelector('.accuracy');

const $restart = document.querySelector('.start-over');

function characterTyped(event) {
  if ($span[characterIndex].textContent === space && event.key === space) {
    $span[characterIndex].className = 'correct';

    characterIndex++;

    rightLetter++;
  } else if (event.key === $span[characterIndex].textContent) {
    $span[characterIndex].className = 'correct';

    characterIndex++;

    rightLetter++;

    if (characterIndex === $span.length) {
      $accuracy.innerHTML =
        'Accuracy: ' +
        Math.floor((rightLetter / (rightLetter + wrongLetter)) * 100) +
        '%';

      $popup.className = 'popup';
    }
  } else {
    $span[characterIndex].className = 'incorrect';

    wrongLetter++;
  }
}

function startOver(event) {
  characterIndex = 0;
  rightLetter = 0;
  wrongLetter = 0;

  for (let i = 0; i < $span.length; i++) {
    $span[i].className = '';
  }

  $popup.className = 'popup hidden';
}

$body.addEventListener('keydown', characterTyped);
$restart.addEventListener('click', startOver);
