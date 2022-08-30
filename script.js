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
        square.style.backgroundColor = "blue";
        board.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(input) {
    // TODO: Validate input
    populateBoard(input);
}

populateBoard(16);