function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeBtn = document.querySelector('button.change-color')
const body = document.querySelector('body')
const colorText = document.querySelector('span.color')

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  body.style.color = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}

changeBtn.addEventListener("click", changeColor);