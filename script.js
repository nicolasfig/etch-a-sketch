const container = document.querySelector(".grid-container");

// creates a square element with specified class
// every square size is based on the container size
function createSquare(dimensions) {
  const square = document.createElement("div");
  square.className = "square";
  square.style.width = `${dimensions}px`;
  square.style.height = `${dimensions}px`;
  return square;
}

// creates a column of n squares
function createColumn(size) {
  let column = document.createElement("div");
  let dimensions = container.offsetWidth / size;
  column.className = "column";
  for (let i = 0; i < size; i++) {
    column.appendChild(createSquare(dimensions));
  }
  return column;
}

// creates a grid of size n using n columns
function createGrid(size) {
  for (let i = 0; i < size; i++) {
    container.appendChild(createColumn(size));
  }
}

// changes the mouse cursor on hover
function onHover() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) =>
    square.addEventListener("mouseover", () => {
      square.style.cursor = "crosshair";
    })
  );
}

// draws over the grid if mouse is clicked
function draw() {
  // flag to check if mouse is clicked
  let isClicked = false;
  document.onmousedown = () => {
    isClicked = true;
  };
  document.onmouseup = () => {
    isClicked = false;
  };
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      if (isClicked) {
        square.classList.add("color");
      }
    });
  });
}

createGrid(8);
onHover();
draw();
