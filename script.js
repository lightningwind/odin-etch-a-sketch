let squareColor = "black"; 
let boardSize = 16;
let isColouring = true; 

const board = document.querySelector(".board");
const container = document.querySelector("#container");
const mode = document.querySelector(".mode");
const selectedColor = document.querySelector(".color");
const errorMessage = document.querySelector(".error");

function populateBoard() {
    // Remove previous squares
    const squares = board.querySelectorAll("div");
    squares.forEach(square => square.remove());

    board.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;
    
    // Create size * size many squares 
    for (let i = 0; i < boardSize * boardSize; i++) {
        const square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare)
        square.style.backgroundColor = "white";
        square.classList.add("grid-line");
        board.insertAdjacentElement("beforeend", square);
    }
}

function resetBoard() {
    // Erase all squares
    const squares = board.querySelectorAll("div"); 
    squares.forEach(square => square.style.backgroundColor = 'white');
}

function handleToggle() {
    const squares = board.querySelectorAll('div');
    squares.forEach(square => square.classList.toggle("grid-line"));
}

function changeSize(input) {
    if (2 <= input && input <= 100) { // Validate input 
        boardSize = +input; 
        errorMessage.classList.add('hidden');
    } else {
        errorMessage.classList.remove('hidden');
    }
}

function colorSquare() {
    if (isColouring) {
        if (squareColor === 'random') { // Select random color on every pass
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else { // Fixed colour 
            this.style.backgroundColor = squareColor;
        }
    }
}

function changeColor(color) {
    squareColor = color;
    selectedColor.textContent = `Selected colour: ${capitalizeWord(color)}`; 
}

/* Assume string s is non-empty. */
function capitalizeWord(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

board.addEventListener("click", () => {
    isColouring = !isColouring;
    if (isColouring) {
        mode.textContent = "Colouring enabled";
    } else {
        mode.textContent = "Colouring disabled";
    }
})

populateBoard();