console.log('hello, world')

// create function to create x by y room 
const createRoom = (width, height=width, glyph='0') => {
    // let width = dx(size)+10; 
    // let height = dx(size)+10; 

    // let width = 10; 
    // let height = 15; 
    // create array 
    let room = [];
    for (let i = 0; i < width; i++){
        room.push([])
        for (let j = 0; j < height; j++){
            room[i].push([glyph])
        }
    }
    return room; 
}

// use static sized level for now 
const level = createRoom(5); 
console.log(level)

const displayRoom = array => {
    let returnString = ''; 
    // loop through length of array and print each line 
    array.forEach(line => {
        let string = ''; 
        line.forEach(ele => string += ele);
        returnString += string + "\n"
    })
    console.log(returnString)
}

level[3][0] = "d"
displayRoom(level)