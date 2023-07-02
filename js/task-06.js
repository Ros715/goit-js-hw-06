const textInput = document.querySelector('#validation-input');
const data = textInput.getAttribute('data-length');
console.log(data);
textInput.onblur = () => {
  if (textInput.value.length === +data) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else if (textInput.value.length === 0) {
    textInput.classList.remove('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
};
