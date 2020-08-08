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
    cell.innerText = glyph.text;
    cell.dataset.glyph = glyph.name; 
}