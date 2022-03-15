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
        squares.klikCounter = 0;
        squares.addEventListener('mouseenter', () => {

            if (squares.klikCounter > 0) {
                let color = squares.style.backgroundColor;
                let [red, green, blue] = color.substring(4, color.length - 1).split(', ');
                red = red * 0.5;
                green = green * 0.5;
                blue = blue * 0.5;
                squares.style.backgroundColor = `rgb(${red},${green}, ${blue})`;

            }
            else {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
                squares.style.backgroundColor = `rgb(${red},${green}, ${blue})`;
            };
            squares.klikCounter++;
        })
    };
}