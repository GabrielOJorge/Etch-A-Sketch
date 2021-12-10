const mainContainer = document.querySelector("#container");
const clearBtn = document.querySelector("#clear-btn")

for (let i = 0; i <= 256; i++) {
  let divs = document.createElement("div");
  divs.addEventListener("mouseover", () => divs.style.background = "#000");
  mainContainer.appendChild(divs);
}

clearBtn.addEventListener("click", () => {
  clearGrid();
  
  function clearGrid() {
    mainContainer.innerHTML = ''
  }

  let size = prompt("Size:");


  if (size !== null) {
    mainContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    mainContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;  
  } else {
    size = 16;
  }

  for (let i = 0; i <= size * size; i++) {
    let divs = document.createElement("div");
    divs.addEventListener("mouseover", () => divs.style.background = "#000");
    mainContainer.appendChild(divs);
  }
});