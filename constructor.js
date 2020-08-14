// this file runs functions to actually create the map 
const levelWidth = 40 //number of tiles wide 
const levelHeight = levelWidth;
let newLevel = createLevel(levelHeight);
// document.getElementsByClassName('row')[0].children[0].clientWidth
const map = document.getElementById('map');
appendLevelToDoc(newLevel, map)

// set width and height variables based on cell width 
const cellHeight = document.getElementsByClassName('cell')[0].clientHeight; 
const cellWidth = document.getElementsByClassName('cell')[0].clientWidth; 
// find map's width and height 
const mapHeight = levelHeight * cellHeight; 
const mapWidth = levelWidth * cellWidth; 
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
generateCloud(map)
generateCloud(map)
generateCloud(map)
generateCloud(map)
generateCloud(map)