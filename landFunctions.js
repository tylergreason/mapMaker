// function to fill level with one type of glyph
const fillWithGlyph = (level, glyph) => {
    level.children.forEach(row => {
        row.children.forEach(cell => {
            console.log(cell);
        })
    })
}