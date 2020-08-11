// this file runs functions to actually create the map 

let newLevel = createLevel(40);
appendLevelToDoc(newLevel, map)

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
        if (ele.dataset.glyph  === 'water') {waterElements.push(ele); }
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


// functions to append ridge tiles to the bottom of tree tiles
newLevel.forEach((row, h) => {
    row.forEach((ele, w) => {
        // make sure there's a next row below to check
        if (newLevel[h+1]){
            if (
                ele.dataset.glyph === 'tree' 
                &&  
                newLevel[h+1][w].dataset.glyph === 'water'
                // && 
                // newLevel[h-1][w].dataset.glyph !== 'water'
                ){
                    // make the element below this element a ridge element
                    // cancel that element's animations 
                    // newLevel[h+1][w].getAnimations()[0].cancel()
                    applyStyles(ridge, newLevel[h+1][w])
                    // applyStyles(ridge, ele)
            }
        }
    })
})


// create an instance of p5 to use its functions 
let myP5 = new p5() 
console.log(myP5.noise(400))

let inc = 0.07; 
// practicing implementing a type of noise 
let yOff = 0; 
newLevel.forEach(row => {
    let xOff = 0; 
    row.forEach(cell => {
        // reset style 
        cell.style = ""
        let newNoise = myP5.noise(xOff, yOff) * 255; 
        console.log(xOff, yOff, newNoise)
        cell.style.backgroundColor = `rgb(${20},${newNoise},${newNoise})`
        let cellText = newNoise.toString()
        cell.innerText = cellText.slice(0,2);
        xOff += inc; 
    })
    yOff += inc;
})