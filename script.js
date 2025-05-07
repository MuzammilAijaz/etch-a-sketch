const containerSize = 750;
const initialGridSize = 16;


// Create 16x16 grid of square divs
GenerateGrid(initialGridSize);

// change color on mouse hover, leaving a trail like affect.
ChangeColorOnHover();

// button to handle reseting the square grid and changing its size
let resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', (grid) => {
    let size = -1;
    while( size > 100 || size < 0){ size = prompt("Enter the new grid size"); }
    GenerateGrid(size);
    ChangeColorOnHover();
});



////////////////////////////////FUNCTIONS////////////////////////////////
// reset or create the square grid and changing its size
function GenerateGrid(size){
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
function ChangeColorOnHover(){
    let grids = gridContainer.querySelectorAll('*');
    grids.forEach((grid)=>{
        grid.addEventListener('mouseover', (grid) => {
            console.log(getComputedStyle(grid.currentTarget).backgroundColor);
            console.log(getComputedStyle(grid.currentTarget).opacity);

            if(getComputedStyle(grid.currentTarget).backgroundColor != 'rgb(255, 255, 255)'){
                let opacity = Number(getComputedStyle(grid.currentTarget).opacity) + .10; // NOTE: in js, cant add string with int, but can substract
                grid.currentTarget.style.opacity = `${opacity}`;
            }
            else{
                let color = (Math.floor(Math.random() * 256  * 256 * 256 )).toString(16);
                console.log(color);
                grid.currentTarget.style.backgroundColor = `#${color}`;
                grid.currentTarget.style.opacity = `.1`;
            }
        });
    })
}
