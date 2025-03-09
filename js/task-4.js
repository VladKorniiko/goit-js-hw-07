const form = document.querySelector('.login-form');
form.addEventListener('submit', handelSummit);

function handelSummit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (!email || !password) {
    alert(`All form fields must be filled in`);
  }

  const obj = {
    email: email,
    password: password,
  };

  console.log(obj);
  event.target.reset();
}
