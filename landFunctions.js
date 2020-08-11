// function to fill level with one type of glyph
const fillWithGlyph = (level, glyph) => {
    level.forEach(row => {
        row.forEach(cell => {
            applyStyles(glyph, cell);
            // console.log(cell);
        })
    })
}

// apply glyph style to cell div 
const applyStyles = (glyph, cell) => {
    let styles = glyph.styles; 
    //remove old inline styles 
    cell.style = "";
    // iterate through styles and apply them to cell style 
    Object.keys(styles).forEach(property => {
        cell.style[property] = styles[property]
    })
    // change cell inner text 
    // cell.innerText = glyph.text;

    // if cell has background function that uses noise, apply that 
    if (glyph.background){
        cell.style.backgroundColor = glyph.background(cell.dataset.noise);
    }
    cell.dataset.glyph = glyph.name; 
}

// function to apply noise values to level 
const applyNoise = (level,inc) => {
    // iterate over level and store noise value in that element's dataset 
    // inc is by how much the xOff and yOff will increment upwards and determins how radical changes are
    let yOff = 0; 
    level.forEach(row => {
        xOff = 0; 
        row.forEach(cell => {
            // create noise value using P5JS 
            const newNoise = P5.noise(xOff, yOff); 
            cell.dataset.noise = newNoise.toString(); 
            xOff += inc; 
        })
        yOff += inc; 
    })
}

// functions to append ridge tiles to the bottom of tree tiles
const applyRidge = (level, glyphToTarget) => {
    level.forEach((row, h) => {
        if (level[h+1]){
            row.forEach((cell, w) => {
                if (
                    cell.dataset.glyph === glyphToTarget.name
                    &&
                    level[h+1][w].dataset.glyph === 'water'
                ){
                    // stop water cell's animation 
                    level[h+1][w].getAnimations()[0].cancel()
                    // make the element below this element a ridge element
                    applyStyles(ridge, newLevel[h+1][w])
                }
            })
        }
    })
}