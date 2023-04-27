function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const inputRef = document.querySelector('#controls > input');

const boxesPlace = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = Number(inputRef.value);
  console.log("value:", amount);
  const boxesArray = [];

  for (let i = 0; i < amount; i++){

    const divBox = document.createElement("div");

    for (let j = 0; j <= i; j++){

      let size = 30 + (i*10);

      divBox.style.width = `${size}px`;
      divBox.style.height = `${size}px`;
    }

    divBox.style.backgroundColor = getRandomHexColor();
    divBox.style.margin = '10px auto';
    
    boxesArray.push(divBox);
    
  }
  
  boxesPlace.append(...boxesArray);
};

function destroyBoxes () {
  return boxesPlace.innerHTML = '';
}



