// this file runs functions to actually create the map 

let newLevel = createLevel(40);
const map = document.getElementById('map');
appendLevelToDoc(newLevel, map)
// apply noise values to each cell for use in styling 
applyNoise(newLevel, 0.2);

// cover map in water 
fillWithGlyph(newLevel, water)


// create patches of land (grass)
for (let i = 0; i < 10; i++){
    // removing to see all water tiles 
    let roomSize = Math.floor(Math.random()*10)+3; 
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
        if (ele.dataset.glyph  === 'water') { waterElements.push(ele); }
    })
});

// apply animations to water elements 
waterElements.forEach((ele, index) => {
    // create a random range for the duration of individual cell's animation 
    waterAnimationOptions.duration = randomDuration(4000,6000); 
    // assign an id to the animation 

    //animate
    // let waterAnimation = animateElement(ele, waterKeyframes, waterAnimationOptions)
    // waterAnimation.id = index; 
})

applyRidge(newLevel, tree);