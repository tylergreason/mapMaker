// animate cell 

// create keyframes 
const waterKeyframes = [
    {
        backgroundColor: "rgb(0,0,200)"
    },
    {
        backgroundColor: "rgb(0,0,255)"
    }
]

const waterAnimationOptions = {
    duration: 500, 
    iterations: Infinity
} 

// function to animate targeted element 
const animateElement = (element, animation, timing) =>{
    element.animate(animation, timing); 
}

