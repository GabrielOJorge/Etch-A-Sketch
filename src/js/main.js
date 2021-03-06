const sketch = document.querySelector("#sketch");
const randomColorBtn = document.querySelector("#random-color-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const clearBtn = document.querySelector("#clear-btn");
const sizeValue = document.querySelectorAll(".size-value");
const sliderSize = document.querySelector("#slider-size");
const colorInput = document.querySelector("#color-input");

let size = sliderSize.value;
let color = colorInput.value;
let currentMode = "color";

sizeValue.forEach(value => {
  value.textContent = size;
});

const setGrid = () => {
  sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", changeColor);
    sketch.appendChild(div);
  }

};

const changeColor = div => { 
  currentMode === "rainbow" ? 
  div.target.style.backgroundColor = getRandomColor() : 
  div.target.style.backgroundColor = color;
};

const clearGrid = () => {
  while (sketch.lastChild) {
    sketch.removeChild(sketch.lastChild);
  }
};

const getRandomColor = () => {
  let randomColor = '#';
  for (let i = 0; i < 6; i++){
     const random = Math.random();
     const bit = (random * 16) | 0;
     randomColor += (bit).toString(16);
  };
  return randomColor;
};

sliderSize.oninput = (() => {
  size = sliderSize.value;
  
  sizeValue.forEach(value => {
    value.textContent = size;
  });

  clearGrid();
  setGrid();
});

colorInput.addEventListener("click", () => {
  currentMode = "color";
  color = colorInput.value;
});

colorInput.oninput = (() => {
  currentMode = "color";
  color = colorInput.value;
});

randomColorBtn.addEventListener("click", () => {
  currentMode = "randomColor";
  const randomColor = getRandomColor();
  color = randomColor;
  colorInput.value = color;
});

rainbowBtn.addEventListener("click", () => {
  currentMode = "rainbow";
});

clearBtn.addEventListener("click", () => {
  clearGrid();
  setGrid();
});

window.onload = () => {
  color = "#000";
  colorInput.value = "#000";
  
  size = 16;
  sliderSize.value = 16;

  sizeValue.forEach(value => {
    value.textContent = size;
  });

  setGrid();
};