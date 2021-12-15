const mainContainer = document.querySelector("#container");
const randomColorBtn = document.querySelector("#random-color-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const clearBtn = document.querySelector("#clear-btn");
const sizeValue = document.querySelectorAll(".size-value");
const sliderSize = document.querySelector("#slider-size");
const colorInput = document.querySelector("#color-input");

let size = sliderSize.value;
let color = colorInput.value;

for (let i = 0; i < sizeValue.length; i++) {
  sizeValue[i].textContent = size;
}

const setGridSize = () => {
  mainContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  mainContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  for (let i = 0; i <= size * size; i++) {
    let divs = document.createElement("div");
    divs.addEventListener("mouseover", () => divs.style.background = color)
    mainContainer.appendChild(divs);
  }
};

setGridSize();

const clearGrid = function() {
  mainContainer.innerHTML = ''
};

const getRandomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);

  return `hsl(${h}deg, ${s}%, ${l}%)`;
};

sliderSize.oninput = (() => {
  size = sliderSize.value;
  
  for (let i = 0; i < sizeValue.length; i++) {
    sizeValue[i].textContent = size;
  }

  clearGrid();
  setGridSize();
});

colorInput.oninput = (() => {
  color = colorInput.value;
});

randomColorBtn.addEventListener("click", () => {
  const randomColor = getRandomColor();
  color = randomColor;
});

clearBtn.addEventListener("click", () => {
  clearGrid();
  setGridSize();
});