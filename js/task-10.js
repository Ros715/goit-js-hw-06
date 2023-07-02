function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('[type="number"]');

function createBoxes() {
  boxes.innerHTML = '';

  const number = input.value;
  const items = [];

  for (let i = 1; i <= number; i += 1) {
    const div = document.createElement('div');

    const p = document.createElement('p');

    div.appendChild(p);

    p.textContent = 'Илья';
    p.style.fontSize = i * 2 + 1 + 'px';
    p.style.textAlign = 'center';
    p.style.verticalAlign = 'middle';

    div.style.backgroundColor = getRandomHexColor();
    div.style.width = i * 10 + 20 + 'px';
    div.style.height = i * 10 + 20 + 'px';
    items.push(div);
  }

  boxes.append(...items);
}

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
