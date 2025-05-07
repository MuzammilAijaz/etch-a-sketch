console.log("hello world");

// Create 16x16 grid of square divs
let gridContainer = document.querySelector('#gridContainer');
for(let i = 0; i < 16*16; i++){
    let grid = document.createElement('div');
    grid.textContent = 'box';
    gridContainer.appendChild(grid);
}

