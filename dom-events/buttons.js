const $clickButton = document.querySelector('.click-button');
/*
single click function
*/
function handleClick(event) {
  console.log('button clicked');

  console.log('event:', event);

  console.log('event.target:', event.target);
}

$clickButton.addEventListener('click', handleClick);

/*
hover over function
*/
const $hoverOver = document.querySelector('.hover-button');

function handleMouseover(event) {
  console.log('button hovered');

  console.log('event:', event);

  console.log('event.target:', event.target);
}

$hoverOver.addEventListener('mouseover', handleMouseover);

/*
double click function
*/
const $doubleClick = document.querySelector('.double-click-button');

function handleDoubleClick(event) {
  console.log('button double clicked');

  console.log('event:', event);

  console.log('event.target:', event.target);
}

$doubleClick.addEventListener('dblclick', handleDoubleClick);
