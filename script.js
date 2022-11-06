const gridContainer = document.getElementById('gridContainer');
const input = document.getElementById('sliderRange');
let defaultSize = 16;

function sliderRange() {
    let range = document.getElementById('sliderRange').value;
    console.log(range);
    document.getElementById('gridSize').innerHTML = range; 
    const removeSquare = document.getElementsByClassName('square');
    removeSquare.remove();
    createGrid(range);
}

//input.addEventListener("input",);

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

window.onload = () => {
    createGrid(defaultSize);
}



