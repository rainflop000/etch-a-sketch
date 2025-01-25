const containerDiv = document.querySelector('.grid-container');
let gridSize = 16;
let drawing = false;

drawGrid(gridSize);

const sizeBtn = document.querySelector('.grid-size-btn');
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

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
    containerDiv.textContent = '';
    drawGrid(gridSize);
});

function drawGrid(gridSize) {
    for (let row = 0; row < gridSize; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let cell = 0; cell < gridSize; cell++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            // Touch event listeners
            cell.addEventListener('touchstart', () => {
                drawing = true;
                cell.style.backgroundColor = 'gray';
            });
            cell.addEventListener('touchmove', (e) => {
                if (drawing) {
                    const touchTarget = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                    if (touchTarget && touchTarget.classList.contains('cell')) {
                        touchTarget.style.backgroundColor = 'gray';
                    }
                }
            });
            cell.addEventListener('touchend', () => {
                drawing = false;
            });

            rowDiv.appendChild(cell);
        }
        containerDiv.appendChild(rowDiv);
    }

    document.querySelector('.grid-size-display').textContent = `Grid size: ${gridSize} x ${gridSize}`;

    const cells = document.querySelectorAll('.cell');

    // Start drawing on mouse down
    cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            drawing = true;
            cell.style.backgroundColor = 'gray';
        });

        // Continue drawing on mouse move
        cell.addEventListener('mouseover', () => {
            if (drawing) {
                cell.style.backgroundColor = 'gray';
            }
        });

        // Finish drawing on mouse up
        cell.addEventListener('mouseup', () => {
            drawing = false;
        });
    });

    containerDiv.addEventListener('mouseleave', () => {
        drawing = false;
    });
}