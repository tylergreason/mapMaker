console.log('hello, world')

// create function to create x by y room 
const createRoom = size => {
    // let width = dx(size)+10; 
    // let height = dx(size)+10; 

    let width = 10; 
    let height = 15; 
    // create array 
    let room = [];
    for (let i = 0; i < width; i++){
        room.push([])
        for (let j = 0; j < height; j++){
            room[i].push([])
        }
    }
    return room; 
}

let myRoom = createRoom(10); 
console.log(myRoom); 