const sizeBtn = document.querySelector("#size");
const clearBtn = document.querySelector("#clear");

// Buttons

sizeBtn.addEventListener('click', getInput);
clearBtn.addEventListener('click', clear);

function getInput() {
    let input = prompt('Enter your desired grid size. (Max: 100)')
    if (input > 100) {
        alert("Error. Maximum size is 100.")
        return
    }
    else if (isNaN(input) === true) {
        alert("Error. Please enter a valid number.")
        return
    }
    else if (input <= 0 || Number.isInteger(+input) === false) {
        alert("Error. Please enter a valid positive whole number.")
        return
    }
    genNewGrid(input);
}

function clear() {
    const boxes = document.querySelectorAll('.cell');
    boxes.forEach(cell=> cell.style.setProperty("opacity", 1));
}

// New Grid

function genNewGrid(size) {
    const grid = document.querySelector('.container');
    while (grid.hasChildNodes() === true) {
        grid.removeChild(grid.lastChild);
    }
    for (let i = 0; i < size; i++) {
        const newRow = document.createElement('div');
        newRow.className = 'row';
        for (let x = 0; x < size; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            newRow.appendChild(cell);
        }
        grid.appendChild(newRow);
    }
    const boxes = document.querySelectorAll('.cell');
    boxes.forEach(cell=> cell.addEventListener('mouseenter', changeOpacity));
}

// Default Grid

function grid() {
    const grid = document.querySelector(".container");
    for (let i = 0; i < 16; i++) {
        const newRow = document.createElement('div');
        newRow.className = 'row';
        for (let x = 0; x < 16; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            newRow.appendChild(cell);
        }
        grid.appendChild(newRow);
    }
    const boxes = document.querySelectorAll('.cell');
    boxes.forEach(cell=> cell.addEventListener('mouseenter', changeOpacity));
}

grid()

// Color Function

function changeOpacity(event) {
    const box = event.target;
    let opacity = window.getComputedStyle(box).getPropertyValue("opacity");
    let newOpacity = opacity - .1
    box.style.setProperty("opacity", newOpacity)
}

