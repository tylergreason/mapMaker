# Map Maker 

Map Maker is an application for generating small maps. 

## The Why 

I'm making Map Maker for a few reasons:
- To give people a cool map to look at to escape their socially distanced lives. 
- For the sake of making maps using procedural generation, because I think that's exciting. 

## The How 

Right now I'm generating a two dimensional array, called a "level". Each cell of the array holds and object. That object has properties for: 
- An HTML div element. 
- A glyph, which holds the style properties for this cell's element. 
- A noise number (see Perlin Noise below). 

The array's elements are appended to the #map element in the HTML document. 

(Finish this later) 

To Do: 
- Change glyphs to be stored in an object with property names that are the same as the glyph names. Then, in the level's cells, have their glyph property be the name of the glyph and point it to the object that holds all the glyphs. This will save space in the level array. 
