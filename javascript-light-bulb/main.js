let $lightbulbOn = true;

const $lightbulb = document.querySelector('.lightbulb');

const $background = document.querySelector('body');

function turnOnAndOff(event) {
  if ($lightbulbOn) {
    $lightbulbOn = false;

    $lightbulb.className = 'lightbulb-off';

    $background.className = 'off';
  } else {
    $lightbulbOn = true;

    $lightbulb.className = 'lightbulb';

    $background.className = 'on';
  }
}

$lightbulb.addEventListener('click', turnOnAndOff);
