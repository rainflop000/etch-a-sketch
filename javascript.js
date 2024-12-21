
const containerDiv = document.querySelector('.div-container');

for (let row = 0; row < 16; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let cell = 0; cell < 16; cell++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        rowDiv.appendChild(cell);
    }
    containerDiv.appendChild(rowDiv);
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = 'gray';
});
}); 

