const minGridSize = 2;
const maxGridSize = 100;

const container = document.querySelector(".container");

const newGridButton = document.querySelector(".create-btn");
newGridButton.addEventListener("click", () => {
    let colSize = clamp(prompt("column size?"), minGridSize, maxGridSize);
    let rowSize = clamp(prompt("row size?"), minGridSize, maxGridSize);
    newGrid(colSize, rowSize);
});

function getRandomRGB(){
    const rVal = Math.floor(Math.random * 255)
    const gVal = Math.floor(Math.random * 255)
    const bVal = Math.floor(Math.random * 255)

    return 'rgb(${rVal},${rVal},${rVal})';
}

function createDivGrid(col, row) {
    for (let i = 0; i < col; i++) {
        const GridRow = document.createElement("div");
        GridRow.classList.add("gridRow");
        container.appendChild(GridRow);

        for (let j = 0; j < row; j++) {
            const gridBlock = document.createElement("div");
            gridBlock.classList.add("gridBlock");
            GridRow.appendChild(gridBlock);
        }
    }
    enableHoveringSketch();
}

function enableHoveringSketch() {
    const gridBlocks = document.querySelectorAll(".gridBlock");
    gridBlocks.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            element.style["background"] = "black";//getRandomRGB();

            // remove color with delay
            setTimeout(() => {
                element.style["background"] = "";
              }, 2000);
        });
    });
}

function newGrid(col, row) {
    deleteContent();
    createDivGrid(col, row);
}

function clearGrid() {
    //clear content of current grid;
    const gridBlocks = document.querySelectorAll(".gridBlock");
    gridBlocks.forEach((element) => {
        element.style["background"] = "";
    });
}

function deleteContent() {
    //clear content of current grid;
    container.innerHTML = "";
}

function clamp(val, min, max) {
    return Math.min(max, Math.max(min, val));
}

function changePixelSize(newSize) {
    const divBlockSize = document.querySelectorAll(".gridBlock");
    gridBlocks.forEach((element) => {
        element.style["padding"] = newSize;
    });
}

createDivGrid(16, 16);