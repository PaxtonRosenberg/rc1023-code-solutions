let $clicked = true;

const $openModal = document.querySelector('.open-modal');

const $no = document.querySelector('.no');

const $hidden = document.querySelector('.hidden');

function popupWindow(event) {
  if ($clicked) {
    $clicked = false;

    $hidden.className = 'overlay';
  } else {
    $clicked = true;

    $hidden.className = 'hidden';
  }
}

$openModal.addEventListener('click', popupWindow);

$no.addEventListener('click', popupWindow);
