const $formElements = document.getElementById('contact-form');

function handleFocus(event) {
  console.log('focus event fired');

  console.log('event.target.name:', event.target.name);
}

for (let i = 0; i < $formElements.length; i++) {
  $formElements[i].addEventListener('focus', handleFocus);
}

function handleBlur(event) {
  console.log('blur event fired');

  console.log('event.target.name:', event.target.name);
}

for (let i = 0; i < $formElements.length; i++) {
  $formElements[i].addEventListener('blur', handleBlur);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name);

  console.log('value of', event.target.name + ':', event.target.value);
}

for (let i = 0; i < $formElements.length; i++) {
  $formElements[i].addEventListener('input', handleInput);
}
