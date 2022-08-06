const gridCont = document.querySelector('#gridContainer');

function createGrid(num){
    for (let i = 0; i < num*num ; i++){
        let gridSquare = document.createElement('div'); 
        gridSquare.classList.add('gridSquare');
        gridCont.appendChild(gridSquare);
        gridSquare.addEventListener('mouseenter', () => gridSquare.classList.add('hoveredIn'));
        gridSquare.addEventListener('mouseenter', () => console.log(i+1));
    }     
    
    
}



createGrid(16)


