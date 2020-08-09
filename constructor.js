// this file runs functions to actually create the map 

let newLevel = createLevel(25);
appendLevelToDoc(newLevel, map)

// cover map in water 
fillWithGlyph(newLevel, water)


// create patches of land (grass)
for (let i = 0; i < 10; i++){

    // removing to see all water tiles 
    let roomSize = Math.floor(Math.random()*10)+5; 
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
        if (newLevel[h+1]){
            console.log(newLevel[h+1][w])
            if (ele.dataset.glyph === 'tree' &&  newLevel[h+1][w].dataset.glyph === 'water'){
                console.log(ele)
                applyStyles(ridge, ele)
            }
        }
    })
})

// iterate through tree elements and find each element that has a water element below it