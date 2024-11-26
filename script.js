const container = document.querySelector("#container");

const resetButton = document.createElement("button");
resetButton.setAttribute("id", "reset");
resetButton.setAttribute("style", "border: solid 1px; height: 40px; width: 80px");
resetButton.textContent = "Click to Reset";
container.appendChild(resetButton);

function getRGB() {
    let rgb = 'rgb(';
    for (let i = 0; i < 3; i++) {
        rgb += ((Math.floor(Math.random() * 256)) + ",");
    }
    rgb = rgb.slice(0, -1) + ')';
    return rgb;
}
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
            let rgbColor = getRGB();
            if (!square.style.backgroundColor) {
                square.style.backgroundColor = rgbColor;
            }
        });
    });

}
let input = 64;
createGame(input);

resetButton.addEventListener("click", resetGame);

function resetGame() {
    const aNumber = Number(window.prompt("Pick a new grid size: ", ""));

    if (1 <= aNumber && aNumber <= 100) {
        const grid = document.querySelector("#grid");
        if (grid) {
            container.removeChild(grid);
            let input = aNumber;
            createGame(input);
        }
    } else {
        alert("Please pick a number between 1 and 100.");
    }
}

