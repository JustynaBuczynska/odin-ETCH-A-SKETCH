let container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');

let button = document.createElement('button');
document.body.appendChild(button);
button.classList.add('button');
button.textContent = 'CLEAR';
button.addEventListener('click', (event) => {
    clear();
})
createGrid(16);
function clear() {
    document.querySelectorAll('.squares').forEach((squareToDelete) => {
        squareToDelete.remove();
    });
    let size = prompt('Podaj rozmiar:');
    let checkedSize = Number(size);
    if (checkedSize > 100) {
        clear()
    }
    else {
        createGrid(checkedSize);
        let maciek = document.querySelector('.container');
        maciek.style.gridTemplateColumns = 'repeat(' + checkedSize + ', 1fr)';
        maciek.style.gridTemplateRows = 'repeat(' + checkedSize + ', 1fr)';
    };
};

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        let squares = document.createElement('div');
        squares.classList.add('squares');
        container.appendChild(squares);
        squares.addEventListener('mouseenter', () => {
            if (squares.classList.contains('squares-klik')){
                squares.classList.remove('squares-klik');
                squares.classList.add('squares-double-klik');
            }
            else if (squares.classList.contains('squares-double-klik')){
                squares.classList.remove('squares-double-klik');
                squares.classList.add('squares-three-klik');
            }
            else {
                squares.classList.add('squares-klik');
            };
        })
    };
}