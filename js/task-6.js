function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  boxContainer.innerHTML = ''; 
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    elements.push(box);
    size += 10;
  }

  boxContainer.append(...elements);
}

function destroyBoxes() {
  boxContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100!');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);
