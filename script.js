console.log("hello world");

// Create 16x16 grid of square divs
let gridContainer = document.querySelector('#gridContainer');
for(let i = 0; i < 16*16; i++){
    let grid = document.createElement('div');
    gridContainer.appendChild(grid);
}

// change color on mouse hover, leaving a trail like affect.
let grids = gridContainer.querySelectorAll('*');
grids.forEach((grid)=>{
    grid.addEventListener('mouseover', (grid) => {
        grid.currentTarget.style.backgroundColor = 'blue';
    });
})