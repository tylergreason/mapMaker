// this file runs functions to actually create the map 

let newLevel = createLevel(25);
appendLevelToDoc(newLevel, map)

// cover map in water 
fillWithGlyph(newLevel, water)


// create patches of land (grass)
for (let i = 0; i < 10; i++){
    let roomSize = Math.floor(Math.random()*10)+5; 
    let newRoom = createRoom(tree, roomSize);
    let locationX = Math.floor(Math.random()*(newLevel.length-roomSize)); 
    let locationY = Math.floor(Math.random()*(newLevel[0].length-roomSize)); 
    console.log(`${locationX} ${locationY}`)
    appendRoomToLevel(newRoom, newLevel, locationX, locationY); 
}


