const containerSize = 750;
const initialGridSize = 16;

console.log("hello world");

// Create 16x16 grid of square divs
let gridContainer = document.querySelector('#gridContainer');
let gridSize = 100/initialGridSize;
for(let i = 0; i < initialGridSize*initialGridSize; i++){
    let grid = document.createElement('div');
    console.log(gridSize);
    grid.style.flex = `1 1 ${gridSize}%`;
    gridContainer.appendChild(grid);
}

// change color on mouse hover, leaving a trail like affect.
makeHoverable();

// button to handle reseting the square grid and changing its size
let resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', (grid) => {
    let size = -1;
    while( size > 100 || size < 0){ size = prompt("Enter the new grid size"); }
    console.log(size);
    changeGridSize(size);
    makeHoverable();
});



////////////////////////////////FUNCTIONS////////////////////////////////
// reset the square grid and changing its size
function changeGridSize(size){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild); // first remove all the current grids
    }

    gridSize = 100/size;
    for(let i = 0; i < size*size; i++){
        let grid = document.createElement('div');
        grid.style.flex = `1 1 ${gridSize}%`;
        gridContainer.appendChild(grid);
    }
}

// change color on mouse hover
function makeHoverable(){
    let grids = gridContainer.querySelectorAll('*');
    grids.forEach((grid)=>{
        grid.addEventListener('mouseover', (grid) => {
            grid.currentTarget.style.backgroundColor = 'blue';
        });
    })
}