const mainContainer = document.querySelector("#container");
const colorBtn = document.querySelector("#color-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const clearBtn = document.querySelector("#clear-btn");
const gridBtn = document.querySelector("#grid-btn");

let size = 16;

const setGridSize = (color = "#000") => {
  mainContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  mainContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i <= size * size; i++) {
    let divs = document.createElement("div");
    divs.addEventListener("mouseover", () => divs.style.background = color);
    mainContainer.appendChild(divs);
  }
};

setGridSize();

const clearGrid = function() {
  mainContainer.innerHTML = ''
};

gridBtn.addEventListener("click", () => {
  clearGrid();
  size = prompt("Size:");
  setGridSize();
});

rainbowBtn.addEventListener("click", () => {
  const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
  };

  const getRandomColor = () => {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);

    return `hsl(${h}deg, ${s}%, ${l}%)`;
  };

  const randomColor = getRandomColor();

  setGridSize(16, randomColor);
  divs.addEventListener("mouseover", () => divs.style.background = randomColor);
});

clearBtn.addEventListener("click", () => {
  clearGrid();
  setGridSize();
});