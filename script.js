const gridContainer = document.getElementById('gridContainer');
const slider = document.querySelector('.slider');
const rainbow = document.getElementById('randomBtn');
const eraser = document.getElementById('eraserBtn');
const colorPicker = document.getElementById('favcolor');
const shading = document.getElementById('shadingBtn');
let defaultSize = 16;
let color = "black";


function createGrid(size) {

    for (let x = 0; x < size * size; x++) {
        let div = document.createElement('div');
        div.className = 'square';
        let height = 400 / parseInt(size);
        div.style.height = `${height}px`;
        div.style.width = `${height}px`;
        gridContainer.append(div);
        div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = color;
        });
        rainbow.addEventListener('click', () => {
            div.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            });
        });
        eraser.addEventListener('click', () => {
            div.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'white'; 
            })
        });
        colorPicker.addEventListener('click', () => {
            div.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = colorPicker.value;
            })
        });   
    }
}


function recreateGrid() {
    gridContainer.innerHTML = '';
    createGrid(slider.value);
}

window.onload = () => {
    createGrid(defaultSize);
}



