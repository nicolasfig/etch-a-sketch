const container = document.querySelector(".container");
let isClicked = false;
document.onmousedown = () => {
  isClicked = true;
};
document.onmouseup = () => {
  isClicked = false;
};

function createSquare() {
  const square = document.createElement("div");
  square.className = "square";
  return square;
}

function createColumn(size) {
  let column = document.createElement("div");
  column.className = "column";
  for (let i = 0; i < size; i++) {
    column.appendChild(createSquare());
  }
  return column;
}

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    container.appendChild(createColumn(size));
  }
}

function onHover() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) =>
    square.addEventListener("mouseover", () => {
      square.style.cursor = "crosshair";
    })
  );
}

function onClick() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      if (isClicked) square.classList.add("color");
    });
  });
}

createGrid(16);
onHover();
onClick();
