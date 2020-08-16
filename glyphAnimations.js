// animate cell 

// create keyframes 
const waterKeyframes = [
    {
        backgroundColor: "rgb(0,0,150)",
        easing: 'ease'
    },
    {
        backgroundColor: "rgb(0,0,220)",
        easing: 'ease'
    }
]


const waterAnimationOptions = { 
    iterations: Infinity, 
    direction: 'alternate',
    duration: 400
} 


// function to animate targeted element 
const animateElement = (element, animation, timing) =>{
    return element.animate(animation, timing); 
}
