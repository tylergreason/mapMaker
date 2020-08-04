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

// use static sized level for now 
const level = createRoom("0", 25); 
// console.log(level)

const displayRoom = array => {
    let returnString = ''; 
    // loop through length of array and print each line 
    array.forEach(line => {
        let string = ''; 
        line.forEach(ele => string += ele);
        returnString += string + "\n"
    })
    map.innerText = returnString; 
    console.log(returnString)
}

const createRoomElement = array => {
    let room = document.createElement('div'); 
    room.classList.add('room'); 

    array.forEach(y => {
        let newRow = document.createElement('div'); 
        y.forEach(x => {
            let cell = document.createElement('div'); 
            cell.classList.add('cell'); 
            cell.innerText = x; 
            newRow.appendChild(cell);
        })
        room.appendChild(newRow); 
    })
    document.body.appendChild(room); 
}

// make function to create a level, which is  a grid of divs 
const createLevel = array => {
    let level = document.createElement('div'); 
    level.classList.add('level'); 

    array.forEach(y => {
        let row = document.createElement('div'); 
        row.classList.add('row')
        y.forEach(x => {
            let cell = document.createElement('div'); 
            cell.classList.add('cell');
            row.appendChild(cell); 
        })
        level.appendChild(row); 
    })
    return level; 
}

// create function to show a room on a level by changing the styles of the elements on that level 
const appendRoomToLevel = (room, level, y, x) => {
    // loop through room height and width
    for (let h = 0; h < room.length; h++){
        for (let w = 0; w < room[h].length; w++){
            let cell = level.children[h+y].children[x+w];
            let glyph = room[h][w]; 
            cell.innerText = glyph.text
            applyStyles(glyph, cell); 

            // call function here for setting the cell's style with the style property of this room cell's object 
        }
    }
}

// apply glyph style to cell div 
const applyStyles = (glyph, cell) => {
    let styles = glyph.styles; 
    //remove old inline styles 
    cell.style = "";
    // iterate through styles and apply them to cell style 
    Object.keys(styles).forEach(property => {
        cell.style[property] = styles[property]
    })
}

level[3][0] = "d"
level[0][0] = tree.glyph;
// level[0][0].style = tree.style; 
// createRoomElement(level)

let newLevel = createLevel(level);
appendRoomToLevel(createRoom(dirt, 25), newLevel, 0,0)
for (let i = 0; i < 10; i++){
    let roomSize = Math.floor(Math.random()*10)+5; 
    let newRoom = createRoom(tree, roomSize);
    let locationX = Math.floor(Math.random()*(25-roomSize)); 
    let locationY = Math.floor(Math.random()*(25-roomSize)); 
    console.log(`${locationX} ${locationY}`)
    appendRoomToLevel(newRoom, newLevel, locationX, locationY); 
}
appendRoomToLevel(createRoom(water, 5), newLevel, 1,1); 
appendRoomToLevel(createRoom(tree, 10), newLevel, 5,5)

document.body.appendChild(newLevel)