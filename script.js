const container = document.querySelector(".container");

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

createGrid(32);
