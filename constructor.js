// this file runs functions to actually create the map 

let newLevel = createLevel(25);
appendLevelToDoc(newLevel, map)

// cover map in water 
fillWithGlyph(newLevel, water)


// create patches of land (grass)
for (let i = 0; i < 5; i++){
    // removing to see all water tiles 
    let roomSize = Math.floor(Math.random()*7)+1; 
    let newRoom = createRoom(tree, roomSize);
    let locationX = Math.floor(Math.random()*(newLevel.length-roomSize)); 
    let locationY = Math.floor(Math.random()*(newLevel[0].length-roomSize)); 
    // console.log(`${locationX} ${locationY}`)
    appendRoomToLevel(newRoom, newLevel, locationX, locationY); 
}

// test animations 

// find water elements 
let waterElements = []; 
newLevel.forEach(row => {
    row.forEach(ele => {
        if (ele.dataset.glyph  === 'water') {waterElements.push(ele); }
    })
});

// apply animations to water elements 
waterElements.forEach(ele => {
    // create a random range for the duration of individual cell's animation 
    waterAnimationOptions.duration = randomDuration(4000,6000); 
    //animate
    animateElement(ele, waterKeyframes, waterAnimationOptions)
})


// functions to append ridge tiles to the bottom of tree tiles
// Iterate through level and find 
const treeElements = [];
newLevel.forEach((row, h) => {
    row.forEach((ele, w) => {
        // make sure there's a next row below to check
        if (newLevel[h+1]){
            if (ele.dataset.glyph === 'tree' 
                &&  
                newLevel[h+1][w].dataset.glyph === 'water'
                && 
                newLevel[h-1][w].dataset.glyph !== 'water'
                ){
                    // make this element a ridge element
                // applyStyles(ridge, newLevel[h+1][w])
                applyStyles(ridge, ele)
            }
        }
    })
})