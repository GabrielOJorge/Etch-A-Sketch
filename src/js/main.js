const sketch = document.querySelector("#sketch");
const randomColorBtn = document.querySelector("#random-color-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const clearBtn = document.querySelector("#clear-btn");
const sizeValue = document.querySelectorAll(".size-value");
const sliderSize = document.querySelector("#slider-size");
const colorInput = document.querySelector("#color-input");

let size = sliderSize.value;
let color = colorInput.value;

sizeValue.forEach(value => {
  value.textContent = size;
});

const setGrid = () => {
  sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  for (let i = 0; i < size * size; i++) {
    let divs = document.createElement("div");
    divs.addEventListener("mouseover", () => divs.style.background = color)
    sketch.appendChild(divs);
  }
};

const setRainbowGrid = () => {
  sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  for (let i = 0; i <= size * size; i++) {
    const randomColor = getRandomColor();
    let divs = document.createElement("div");
    divs.addEventListener("mouseover", () => divs.style.background = randomColor);
    sketch.appendChild(divs);
  }
};

setGrid();

const clearGrid = () => {
  while (sketch.lastChild) {
    sketch.removeChild(sketch.lastChild);
  }
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
  
  sizeValue.forEach(value => {
    value.textContent = size;
  });

  clearGrid();
  setGrid();
});

colorInput.oninput = (() => {
  color = colorInput.value;
});

randomColorBtn.addEventListener("click", () => {
  const randomColor = getRandomColor();
  color = randomColor;
});

rainbowBtn.addEventListener("click", () => {
  clearGrid();
  setRainbowGrid();
});

clearBtn.addEventListener("click", () => {
  clearGrid();
  setGrid();
});