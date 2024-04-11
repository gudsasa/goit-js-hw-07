const btnSate = document.querySelector('button[data-create]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const btnStroy = document.querySelector('button[data-destroy]');

btnSate.addEventListener('click', event => {
  destroyBoxes();
  const textVal = input.value.trim();

  if (textVal > 0 && textVal <= 100) {
    createBoxes(textVal);
  }
  input.value = '';
});

btnStroy.addEventListener('click', evDestroy => {
  destroyBoxes();
});

function createBoxes(amount) {
  let length = 30;

  for (let i = 0; i < amount; i++) {
    const box = `<div style="width: ${length}px; height: ${length}px; display:inline-block; margin-right: 28px; margin-top: 32px; background-color: ${getRandomHexColor()};"></div>`;
    boxes.insertAdjacentHTML('beforeend', box);
    length += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
