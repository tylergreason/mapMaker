// functions for cloud features like speed, size, etc. 
const cloudSpeed = 10;  
const cloudSize = 5; 

const generateCloud = (appendTo) => {
    // get height and width from appendTo element 
    let ele = document.createElement('div'); 
    applyStyles(cloud, ele); 
    cloudStyles(ele, mapHeight, mapWidth); 
    appendTo.appendChild(ele); 
    animateCloud(ele, mapHeight, mapWidth); 
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

const generateCloudKeyframes = (height,width) => {
    let randomHeight = Math.floor(Math.random()*height);
    let randomWidth = Math.floor(Math.random()*width);
        return [
            {
                left: '0px',
                top: `${randomHeight}px`
            },
            {
                left: `${width}px`,
                top: `${randomHeight}px`
            }
        ]
}

const cloudAnimationOptions = {
    duration: 1000, 
    // fill: 'forwards'
}

const animateCloud = (cloud, height, width) => {
    let cloudAnimation = cloud.animate(generateCloudKeyframes(height, width), cloudAnimationOptions); 
    // loop animation when finished
    cloudAnimation.onfinish = e => {
        console.log(e)
        animateCloud(cloud, randomMapHeight(), width);
    }
}