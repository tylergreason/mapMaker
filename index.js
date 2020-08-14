// constants 
window.onload = () => {
    const mapHeight = document.getElementById('map').clientHeight; 
    const mapWidth = document.getElementById('map').clientWidth;
}

// create an instance of p5 to use its functions 
let P5 = new p5() 

// create function to create x by y room 
const createRoom = (glyph, height, width=height) => {
    // create array 
    let room = [];
    for (let i = 0; i < height; i++){
        room.push([])
        for (let j = 0; j < width; j++){
            room[i].push(glyph)
        }
    }
    return room; 
}

// create function to show a room on a level by changing the styles of the elements on that level 
const appendRoomToLevel = (room, level, y, x) => {
    // loop through room height and width
    for (let h = 0; h < room.length; h++){
        for (let w = 0; w < room[h].length; w++){
            let cell = level[h+y][x+w];
            // console.log(cell)
            // let cell = level.children[h+y].children[x+w];
            let glyph = room[h][w]; 
            applyStyles(glyph, cell); 
        }
    }
}

// make function to create a level, which is  a grid of divs 
const createLevel = (height, width=height) => {
    // let level = document.createElement('div'); 
    let level = []; 
    // level.classList.add('level');  
    for (let i = 0; i < height; i++){
        // create array to hold arrays of divs 
        let row = []; 
        // let row = document.createElement('div'); 
        // row.classList.add('row')
        for (let j = 0; j < width; j++){
            let cell = document.createElement('div'); 
            cell.classList.add('cell');
            row.push(cell); 
        }
        level.push(row); 
    }
    return level; 
}

// function to append level elements to document body 
const appendLevelToDoc = (level, target) => {
    // iterate through elements of the level and append them to the target element 
    level.forEach(levelRow => {
        // create row element to hold cells 
        let row = document.createElement('div');
        row.classList.add('row')
        levelRow.forEach(cell => {
            row.appendChild(cell); 
        })
        // append row to target 
        target.appendChild(row); 
    })
}