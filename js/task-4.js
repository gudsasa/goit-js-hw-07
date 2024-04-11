const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', clickSubmit);
function clickSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  const user = {
    email: email,
    password: password,
  };
  form.reset();
  console.log(user);
}
