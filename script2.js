function createGrid(size){
    const table=document.querySelector(".table");
    table.style.gridTemplateRows=`repeat(${size},1fr)`;
    table.style.gridTemplateColumns=`repeat(${size},1fr)`;
    let tableRow=[];
    for(let i=0;i<size;i++){
        let tableColumn=[];
        for(let j=0;j<size;j++){
            const divElement=document.createElement("div");
            divElement.setAttribute("id",`${i}${j}`);
            tableColumn.push(divElement);
            divElement.classList.add("tableElement");
            divElement.addEventListener("mousedown",changeColor);
            table.appendChild(divElement);
        }
        tableRow.push(tableColumn);
    }
    return tableRow;
}

function changeColor(x){
    x.target.classList.add("tableElementHover");
}

function resetGridSameSize(){
    let size=document.querySelector(".table").childElementCount;
    size=Math.sqrt(size);
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            let temp=document.getElementById(`${i}${j}`);
            temp.parentNode.removeChild(temp);
        }
    }
    createGrid(size);
}

function resetGrid(){
    let size=document.querySelector(".table").childElementCount;
    size=Math.sqrt(size);
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            let temp=document.getElementById(`${i}${j}`);
            temp.parentNode.removeChild(temp);
        }
    }
    //size=prompt("Enter Grid Size");
    size=document.querySelector("#sizeDefine").value;
    createGrid(+size);
}

let teableRow=createGrid(10);

const resetBtn=document.querySelector("#reset");
resetBtn.addEventListener("click", resetGridSameSize);

const sizeBtn=document.querySelector("#sizeDefineBtn");
sizeBtn.addEventListener("click", resetGrid);
