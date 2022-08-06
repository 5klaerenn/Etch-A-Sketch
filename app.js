const gridCont = document.querySelector('#gridContainer');



function createDiv() {
    for(let i = 0; i < 16; i++) {  
        const gridCol = document.createElement('div');
        gridCol.classList.add('gridColumn');
        gridCont.appendChild(gridCol);

        for(let y = 0; y < 15; y++) {
            const gridRow = document.createElement('div');
            gridRow.classList.add('gridRow');
            gridCol.appendChild(gridRow);
        }
    }
} 

createDiv()