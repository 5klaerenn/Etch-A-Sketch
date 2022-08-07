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
    gridPixels.forEach((el) => { 
        el.addEventListener('mouseover', paintGrid)});
}

function eraseGrid(){
    let gridPixels = gridCont.querySelectorAll('div');
    gridPixels.forEach((el) => {
        el.style.backgroundColor = '';
        });
}

function changeSize(){
    num = `${rangeValue.value}`;
    resetGrid();
    createGrid(num);
}

function resetGrid(){
    gridCont.innerHTML = '';
}

//Add Color selection here

function paintGrid(){
    switch(color) {
        case 'rainbow':
            this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            break;
        case 'userColor':
            this.style.backgroundColor = `${userColor.value}`;
            break;
        case 'eraser':
            this.style.backgroundColor = 'darkgray';
            break;    
        default:
            this.style.backgroundColor = 'black';
            break;
    }
}

function selectColor(event){
    switch(event.target.dataset.color){
        case 'rainbow':
            color = 'rainbow';
            break; 
        case 'userColor':
            color = 'userColor';
            break;
        case 'eraser': 
            color = 'eraser';
            break;
        default:
            color = 'black';
            break
    }
}

//Declarations

let color = 'black' 
let num = 16;
const gridCont = document.querySelector('#gridContainer');

const eraseReset = document.querySelector('#eraseBtn');
eraseReset.addEventListener('click', () => eraseGrid());

const gridChange = document.querySelector('#changeGrid');
gridChange.addEventListener('click', () => changeSize());

const userColor = document.querySelector('#userColor');
let colorSelector = document.querySelectorAll(".select")
colorSelector.forEach((btn) => { 
    btn.addEventListener('click', selectColor);
    })

const rangeValue = document.querySelector('#changeGrid');


createGrid(num)