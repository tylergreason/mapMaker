let tree = {
    name: "tree", 
    text: "t",
    styles: {
        color: 'lightgreen', 
        // backgroundColor: 'green', 
        fontWeight: 'bold',
    },
    background: function(noise){
        return `rgb(10, ${noise * 255}, 10)`
    }
}

let ridge = {
    name: "ridge", 
    text: "r", 
    styles: {
        color: "black", 
        backgroundColor: "rgb(187 170 49)",
    }
}

let dirt = {
    name: "dirt", 
    text: "",
    styles: {
        backgroundColor: `rgb(100,50,0)`,
        // border: 'none'
    }
}

let water = {
    name: "water", 
    text: "",
    styles: {
        backgroundColor: 'lightblue', 
        color: 'blue',
        fontStyle: "italic"
    }, 
    background: function(noise){
        return `rgb(10, 10, ${255 * noise})`
    }
}

let cloud = {
    name: "cloud", 
    text: "",
    styles: {
        backgroundColor: 'white', 
        // set width with cloud generator function 
    }
}