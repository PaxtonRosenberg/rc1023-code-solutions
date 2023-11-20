const $countdown = document.querySelector('.countdown-display');
let counter = 4;

function countdown() {
  if (counter > 1) {
    counter--;

    $countdown.textContent = counter;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';

    clearInterval(intervalId);
    console.log('hi');
  }
}

const intervalId = setInterval(countdown, 1000);
