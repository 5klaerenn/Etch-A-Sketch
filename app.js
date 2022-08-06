let num = 16;

const gridCont = document.querySelector('#gridContainer');

const gridReset = document.querySelector('#resetBtn');
gridReset.addEventListener('click', () => { window.location.reload(); });

function createGrid(num) {
    for (let i = 0; i < num * num; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridCont.appendChild(gridSquare);
        gridSquare.addEventListener('mouseenter', () => gridSquare.classList.add('hoveredIn'));
        gridSquare.addEventListener('mouseenter', () => console.log(i + 1));
    }

}

const gridChange = document.querySelector('#changeGrid');
gridChange.addEventListener('click', () => 
    {num = prompt('How many squares per side for the new grid do you want for the new grid ?');
    createGrid(num)});
    

createGrid(num)


