const $form = document.getElementById('contact-form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  const $name = $form.elements[0].value;

  const $email = $form.elements[1].value;

  const $message = $form.elements[2].value;

  const formObject = {
    name: $name,
    email: $email,
    message: $message,
  };

  console.log(formObject);

  $form.reset();
});
