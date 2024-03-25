function genDivs(dimension){
    const container = document.createElement('div');
    const boxHeight = (960/dimension);
    container.classList.add('etch-container')
    for (var i = 0; i < dimension; i++){
        const row = document.createElement('div');  
        row.classList.add('etch-row')
        for (var j = 0; j < dimension; j++){
            const col = document.createElement('div');
            col.style.width = boxHeight + 'px';
            col.style.height = boxHeight + 'px';
            col.classList.add("etch-square");
            row.appendChild(col);   
        }
        container.appendChild(row);
    }
    document.body.appendChild(container);
}

function changeGrid(){
    const changeButton = document.querySelector("button");
    changeButton.addEventListener("click", () => {
        const gridSize = prompt("type size number of grid");
        if (gridSize > 100){
            changeGrid();
        }
        else{
            /* getElementsBy[X] returns a list */
            document.body.getElementsByClassName("etch-container")[0].remove()
            genDivs(gridSize);
        }
    });
}

genDivs(16);
changeGrid();