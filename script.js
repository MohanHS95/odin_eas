const container = document.querySelector("#container");

const resetButton = document.createElement("button");
resetButton.setAttribute("id","reset");
resetButton.setAttribute("style", "border: solid 1px; height: 40px; width: 80px");
resetButton.textContent = "Click to Reset";
container.appendChild(resetButton);

function createGame(input) {
const grid = document.createElement("div");
grid.setAttribute("id", "grid");
grid.setAttribute("style", "border: solid 0px; height: 600px; width: 600px");
container.appendChild(grid);


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

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "green";
    });
});
}
let input = 64;
createGame(input);

resetButton.addEventListener("click", () => {

    const aNumber = Number(window.prompt("Pick a new grid size: ", ""));

    if (1 <= aNumber && aNumber <= 100) {
    container.removeChild(grid);    
    let input = aNumber;
    createGame(input);
    }
    else {
        alert("Please pick a number between 1 and 100.");
    }

})