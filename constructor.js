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

// create copy of newLevel sorted by noise
// leaving this here to work on later: need to sort entire level into one array
// Use merge sort to sort arrays https://khan4019.github.io/front-end-Interview-Questions/sort.html#mergeSort
const noiseMap = [...newLevel];
noiseMap.sort((a,b) => {
    a.noise - b.noise
})


// create patches of land (grass)
const randomLandNumber = randomBetweenNumbers(5,15);
for (let i = 0; i < randomLandNumber; i++){
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
        if (ele.glyph  === 'water') { waterElements.push(ele); }
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

// apply ridges and generate some clouds
applyRidge(newLevel, tree);
const randomCloudNumber = randomBetweenNumbers(3,7);
for (let i = 0; i < randomCloudNumber; i++){
    generateCloud(map)
}

// function to make the inner text of each element in the level the perlin noise of that cell
const showNoise = level => {
  level.forEach(row => {
    row.forEach(cell => {
      cell.element.innerText = cell.noise;
    })
  })
}