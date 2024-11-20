const container = document.querySelector("#container");

const grid = document.createElement("div");
grid.setAttribute("id", "grid");
grid.setAttribute("style", "border: solid 0px; height: 600px; width: 600px");
container.appendChild(grid);


let input = 64;
const size = (600) / (input);

for (let i = 0; i < input; i++) {
        const squarerow = document.createElement('div');
        squarerow.classList.add('squarerow');
    for (let j = 0; j < input; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = size + 'px';
        square.style.height = size + 'px';
        squarerow.appendChild(square);
    }
    grid.appendChild(squarerow);
}
