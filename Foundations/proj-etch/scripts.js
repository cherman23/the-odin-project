function genDivs(dimension = 16){
    const container = document.createElement('div');
    const boxHeight = (500/dimension);
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
        const gridSize = prompt("Please type a number");
        if (gridSize <= 100 && gridSize >= 1){
            /* getElementsBy[X] returns a list */
            document.body.getElementsByClassName("etch-container")[0].remove()
            genDivs(gridSize);
        }
        else{
            alert("Please select a value between 1 and 100")
            changeGrid();
        }
    });
}

genDivs();
changeGrid();