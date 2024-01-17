const $leftArrow = document.querySelector('.fa-chevron-left');
const $rightArrow = document.querySelector('.fa-chevron-right');
const $circle1 = document.getElementById('first');
const $circle2 = document.getElementById('second');
const $circle3 = document.getElementById('third');
const $circle4 = document.getElementById('fourth');
const $circle5 = document.getElementById('fifth');
const $image = document.querySelector('img');

let counter = 0;

function imgAttribute() {
  if (counter === 0) {
    $image.setAttribute('src', 'images/001.png');
  } else if (counter === 1) {
    $image.setAttribute('src', 'images/004.png');
  } else if (counter === 2) {
    $image.setAttribute('src', 'images/007.png');
  } else if (counter === 3) {
    $image.setAttribute('src', 'images/025.png');
  } else if (counter === 4) {
    $image.setAttribute('src', 'images/039.png');
  }
}

function circleBackground() {
  if (counter === 0) {
    $circle1.className = 'fa-solid fa-circle fa-xl selected-circle-color';
    $circle5.className = 'fa-solid fa-circle fa-xl bg-color';
  } else if (counter === 1) {
    $circle2.className = 'fa-solid fa-circle fa-xl selected-circle-color';
    $circle1.className = 'fa-solid fa-circle fa-xl bg-color';
  } else if (counter === 2) {
    $circle3.className = 'fa-solid fa-circle fa-xl selected-circle-color';
    $circle2.className = 'fa-solid fa-circle fa-xl bg-color';
  } else if (counter === 3) {
    $circle4.className = 'fa-solid fa-circle fa-xl selected-circle-color';
    $circle3.className = 'fa-solid fa-circle fa-xl bg-color';
  } else if (counter === 4) {
    $circle5.className = 'fa-solid fa-circle fa-xl selected-circle-color';
    $circle4.className = 'fa-solid fa-circle fa-xl bg-color';
    $circle1.className = 'fa-solid fa-circle fa-xl bg-color';
  }
}

function rotateImages() {
  if (counter === 0) {
    counter++;
    imgAttribute();
    circleBackground();
  } else if (counter === 1) {
    counter++;
    imgAttribute();
    circleBackground();
  } else if (counter === 2) {
    counter++;
    imgAttribute();
    circleBackground();
  } else if (counter === 3) {
    counter++;
    imgAttribute();
    circleBackground();
  } else if (counter === 4) {
    counter = 0;
    imgAttribute();
    circleBackground();
  }
}

setInterval(rotateImages, 3000);

function imgAttributeLeftArrow() {
  if (counter === 0) {
    $image.setAttribute('src', 'images/039.png');
  } else if (counter === 1) {
    $image.setAttribute('src', 'images/001.png');
  } else if (counter === 2) {
    $image.setAttribute('src', 'images/004.png');
  } else if (counter === 3) {
    $image.setAttribute('src', 'images/007.png');
  } else if (counter === 4) {
    $image.setAttribute('src', 'images/025.png');
  }
}

function circleBackgroundLeftArrow() {
  if (counter === 0) {
    $circle1.className = 'fa-solid fa-circle fa-xl bg-color';
    $circle5.className = 'fa-solid fa-circle fa-xl selected-circle-color';
  } else if (counter === 1) {
    $circle1.className = 'fa-solid fa-circle fa-xl selected-circle-color';
    $circle2.className = 'fa-solid fa-circle fa-xl bg-color';
  } else if (counter === 2) {
    $circle2.className = 'fa-solid fa-circle fa-xl selected-circle-color';
    $circle3.className = 'fa-solid fa-circle fa-xl bg-color';
  } else if (counter === 3) {
    $circle3.className = 'fa-solid fa-circle fa-xl selected-circle-color';
    $circle4.className = 'fa-solid fa-circle fa-xl bg-color';
  } else if (counter === 4) {
    $circle4.className = 'fa-solid fa-circle fa-xl selected-circle-color';
    $circle5.className = 'fa-solid fa-circle fa-xl bg-color';
    $circle1.className = 'fa-solid fa-circle fa-xl bg-color';
  }
}

$leftArrow.addEventListener('click', function () {
  if (counter === 0) {
    imgAttributeLeftArrow();
    circleBackgroundLeftArrow();
    counter = 4;
  } else if (counter === 1) {
    imgAttributeLeftArrow();
    circleBackgroundLeftArrow();
    counter = 0;
  } else if (counter === 2) {
    imgAttributeLeftArrow();
    circleBackgroundLeftArrow();
    counter = 1;
  } else if (counter === 3) {
    imgAttributeLeftArrow();
    circleBackgroundLeftArrow();
    counter = 2;
  } else if (counter === 4) {
    imgAttributeLeftArrow();
    circleBackgroundLeftArrow();
    counter = 3;
  }
});

function imgAttributeRightArrow() {
  if (counter === 0) {
    $image.setAttribute('src', 'images/004.png');
  } else if (counter === 1) {
    $image.setAttribute('src', 'images/007.png');
  } else if (counter === 2) {
    $image.setAttribute('src', 'images/025.png');
  } else if (counter === 3) {
    $image.setAttribute('src', 'images/039.png');
  } else if (counter === 4) {
    $image.setAttribute('src', 'images/001.png');
  }
}

function circleBackgroundRightArrow() {
  if (counter === 0) {
    $circle1.className = 'fa-solid fa-circle fa-xl bg-color';
    $circle2.className = 'fa-solid fa-circle fa-xl selected-circle-color';
  } else if (counter === 1) {
    $circle3.className = 'fa-solid fa-circle fa-xl selected-circle-color';
    $circle2.className = 'fa-solid fa-circle fa-xl bg-color';
  } else if (counter === 2) {
    $circle4.className = 'fa-solid fa-circle fa-xl selected-circle-color';
    $circle3.className = 'fa-solid fa-circle fa-xl bg-color';
  } else if (counter === 3) {
    $circle5.className = 'fa-solid fa-circle fa-xl selected-circle-color';
    $circle4.className = 'fa-solid fa-circle fa-xl bg-color';
  } else if (counter === 4) {
    $circle1.className = 'fa-solid fa-circle fa-xl selected-circle-color';
    $circle5.className = 'fa-solid fa-circle fa-xl bg-color';
  }
}

$rightArrow.addEventListener('click', function () {
  if (counter === 0) {
    imgAttributeRightArrow();
    circleBackgroundRightArrow();
    counter = 1;
  } else if (counter === 1) {
    imgAttributeRightArrow();
    circleBackgroundRightArrow();
    counter = 2;
  } else if (counter === 2) {
    imgAttributeRightArrow();
    circleBackgroundRightArrow();
    counter = 3;
  } else if (counter === 3) {
    imgAttributeRightArrow();
    circleBackgroundRightArrow();
    counter = 4;
  } else if (counter === 4) {
    imgAttributeRightArrow();
    circleBackgroundRightArrow();
    counter = 0;
  }
});
