const form = document.querySelector('.login-form');
const inputEmail = document.querySelector("[type = 'email']");
const inputPassword = document.querySelector("[type = 'password']");

form.addEventListener('submit', submit);

function submit(form) {
  form.preventDefault();

  if (inputEmail.value.trim() === '' || inputPassword.value.trim() === '') {
    return alert('All fields must be filled!');
  } else {
    const userInfo = {
      email: inputEmail.value,
      password: inputPassword.value,
    };
    console.log(userInfo);
  }
  form.target.reset();
}
