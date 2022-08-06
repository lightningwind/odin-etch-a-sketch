const containerDiv = document.querySelector('#container');

function makeGrid(rows, cols) {
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", cols);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('grid-item'); 
            containerDiv.appendChild(squareDiv);
        }
    }
}

makeGrid(16, 16);