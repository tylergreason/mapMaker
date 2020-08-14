// functions for cloud features like speed, size, etc. 
const cloudSpeed = 10;  
const cloudSize = 5; 

const mapHeight = document.getElementById('map').clientHeight; 
const mapWidth = document.getElementById('map').clientWidth;
const generateCloud = (appendTo) => {
    // get height and width from appendTo element 
    const appendToHeight = appendTo.clientHeight; 
    const appendToWidth = appendTo.clientWidth; 
    let ele = document.createElement('div'); 
    applyStyles(cloud, ele); 
    cloudStyles(ele, appendToHeight, appendToWidth); 
    appendTo.appendChild(ele); 
    cloudAnimation(ele, appendToHeight, appendToWidth); 
}

const cloudStyles = (cloud, height, width) => {
    cloud.style.width = cloudSize + 'px'; 
    cloud.style.height = cloudSize + 'px'; 
    cloud.style.position = "absolute"; 
    // set height & starting width
    cloud.style.top = Math.floor(Math.random()*height) + 'px';
    // cloud.style.left = Math.floor(Math.random()*width) + 'px';
    cloud.style.left = '0px';
}

const generateCloudKeyframes = (width) => {
    // need the element being appended to to calculate the width
        return [
            {
                left: '0px'
            },
            {
                left: `${width}px`
            }
        ]
}

const cloudAnimationOptions = {
    duration: 5000, 
    fill: 'forwards'
}

const cloudAnimation = (cloud, height, width) => {
    cloud.animate(generateCloudKeyframes(width), cloudAnimationOptions)
}