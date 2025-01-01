const containerDiv = document.querySelector('.div-container');
let gridSize = 16;
let drawing = false;

drawGrid(gridSize);

const sizeBtn = document.querySelector('.user-size-popup');
sizeBtn.addEventListener('click', () => {
    let newSize = prompt("How many squares per side would you like your grid?");
    newSize = parseInt(newSize);
    if (newSize && newSize > 0 && newSize <=100) {
        containerDiv.textContent = '';
        drawGrid(newSize);
    } else {
        alert('Enter a valid number between 1 and 100.');
    }
});

function drawGrid(gridSize) {
    for (let row = 0; row < gridSize; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let cell = 0; cell < gridSize; cell++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            rowDiv.appendChild(cell);
        }
        containerDiv.appendChild(rowDiv);
    }

    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            drawing = true;
            cell.style.backgroundColor = 'gray';
    });

    cell.addEventListener('mouseover', () => {
        if (drawing) {
            cell.style.backgroundColor = 'gray';
        }
    });

    cell.addEventListener('mouseup', () => {
        drawing = false;
    });

    containerDiv.addEventListener('mouseleave', () => {
        drawing = false;
    });
}); 

}