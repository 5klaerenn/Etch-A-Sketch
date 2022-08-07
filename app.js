//Grid basic functions 

function createGrid(num) {
    for (let i = 0; i < num * num; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridCont.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        gridCont.style.gridTemplateRow = `repeat(${num}, 1fr)`;
        gridCont.appendChild(gridSquare);       
    } 

    let gridPixels = gridCont.querySelectorAll('div');
    let mouseClicked = false;
    gridPixels.forEach((el) => { 
        el.addEventListener('mousedown', () => {

            el.classList.add('hoveredIn')});
        });
}

function eraseGrid(){
    let gridPixels = gridCont.querySelectorAll('div');
    gridPixels.forEach((el) => {
        el.classList.remove('hoveredIn');
        });
}

function resetGrid(){
    gridCont.innerHTML = '';
}

function changeSize(){
    num = prompt('How many squares per side for the new grid do you want for the new grid ? (between 16-100)')
    if(num >= 16 && num <= 100){
        resetGrid();
        createGrid(num);
    }
}

//Add Color selection here

function selectColor(){

}

//Declarations

let num = 16;
const gridCont = document.querySelector('#gridContainer');

const eraseReset = document.querySelector('#eraseBtn');
eraseReset.addEventListener('click', () => eraseGrid());

const gridChange = document.querySelector('#changeGrid');
gridChange.addEventListener('click', () => changeSize());

const grey = document.querySelector('#grey');
const rainbow = document.querySelector('#rainbow');
const userColor = document.querySelector('#userColor');

createGrid(num)