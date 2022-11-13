const gridContainer = document.getElementById('gridContainer');
const slider = document.querySelector('.slider');
let defaultSize = 16;

function createGrid(size) {

    for (let x = 0; x < size * size; x++) {
        let div = document.createElement('div');
        div.className = 'square';
        let height = 400 / parseInt(size);
        div.style.height = `${height}px`;
        div.style.width = `${height}px`;
        div.onmouseover = mouseOver;
        gridContainer.append(div);

        function mouseOver() {
            div.style.backgroundColor = 'black';
            console.log('in');
        }        
    }
}

function recreateGrid() {
    gridContainer.innerHTML = '';
    createGrid(slider.value);
}

window.onload = () => {
    createGrid(defaultSize);
}



