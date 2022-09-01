let squareColor = "black"; 

const board = document.querySelector(".board");

function populateBoard(size) {
    // Remove previous squares
    const squares = board.querySelectorAll("div");
    squares.forEach(square => square.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    // Create size * size many squares 
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare)
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(input) {
    if (2 <= input && input <= 100) {
        populateBoard(input);
    } else {
        console.error("Invalid board size");
    }
}

function colorSquare() {
    if (squareColor === 'random') { // Select random color on every pass
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else { // Fixed colour 
        this.style.backgroundColor = squareColor;
    }
}

function changeColor(color) {
    squareColor = color; 
}

populateBoard(16);