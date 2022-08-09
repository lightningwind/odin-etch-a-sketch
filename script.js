const containerDiv = document.querySelector('#container');
const button = document.querySelector("button");

function makeGrid(rows, cols) {
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", cols);
    containerDiv.style.width = "960px";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('grid-item'); 
            containerDiv.appendChild(squareDiv);
            squareDiv.addEventListener('mouseover', () => {
                squareDiv.style.backgroundColor = 'black';
            })
        }
    }
}

function removeGrid() {
    const grid_items = document.querySelectorAll(".grid-item");
    grid_items.forEach(grid_item => grid_item.remove());
}

button.addEventListener("click", () => {
    removeGrid(); 
    const userInput = +prompt("Please enter the size of the square grid (max=100): ", "16");
    if (userInput > 100) {
        alert("Invalid input");
    } else {
        makeGrid(userInput, userInput); 
    }

})

makeGrid(16, 16);