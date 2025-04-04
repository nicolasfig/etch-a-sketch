const container = document.querySelector(".container");

function createSquare() {
  const square = document.createElement("div");
  square.className = "square";
  return square;
}

function createColumn(size) {
  let column = [];
  for (let i = 0; i < size; i++) {
    column.push(createSquare());
  }
  return column;
}

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let column = createColumn(size);
      console.log(column);
      container.appendChild(column[i]);
    }
  }
}

createGrid(2);
