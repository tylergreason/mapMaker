console.log('hello, world')

// create function to create x by y room 
const createRoom = (glyph = "0", height, width=height) => {
    // let width = dx(size)+10; 
    // let height = dx(size)+10; 

    // let width = 10; 
    // let height = 15; 
    // create array 
    let room = [];
    for (let i = 0; i < height; i++){
        room.push([])
        for (let j = 0; j < width; j++){
            room[i].push([glyph])
        }
    }
    return room; 
}

// use static sized level for now 
const level = createRoom("0", 25); 
console.log(level)

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
            let cell = document.createElement('span'); 
            cell.classList.add('cell'); 
            cell.innerText = x; 
            newRow.appendChild(cell);
        })
        room.appendChild(newRow); 
    })
    document.body.appendChild(room); 
}

level[3][0] = "d"
createRoomElement(level)
displayRoom(level)