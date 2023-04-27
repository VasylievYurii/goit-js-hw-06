function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorHexCodeRef = document.querySelector('.color');

const getBodyColor = () => {

  colorHexCodeRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = colorHexCodeRef.textContent;
};

changeColorBtn.addEventListener('click', getBodyColor);


