// functions for cloud features like speed, size, etc. 
const cloudSpeed = 10;  
const cloudSize = 100; 

const generateCloud = (appendTo) => {
    // get height and width from appendTo element 
    let ele = document.createElement('div'); 
    applyStyles(cloud, ele); 
    cloudStyles(ele, mapHeight, mapWidth); 
    appendTo.appendChild(ele); 
    animateCloud(ele, randomMapHeight(), mapWidth); 
}

const cloudStyles = (cloud, height, width) => {
    cloud.style.width = Math.random()*cloudSize + 'px'; 
    cloud.style.height = Math.random()*cloudSize + 'px'; 
    cloud.style.position = "absolute"; 
    cloud.style.opacity = (Math.random()*0.3)+0.5;
    cloud.style.borderRadius = '10px'
    // set height & starting width
    cloud.style.top = Math.floor(Math.random()*height) + 'px';
    // cloud.style.left = Math.floor(Math.random()*width) + 'px';
    cloud.style.left = '-200px';
}

const generateCloudKeyframes = (height,width) => {
    let randomAngle = Math.floor(Math.random()*360); 
        return [
            {
                left: '-200px',
                top: `${height}px`,
                transform: `rotate(${randomAngle}deg)`,
            },
            {
                left: `${width + 200}px`,
                top: `${height}px`,
                transform: `rotate(${randomInRange(randomAngle,0.1)}deg)`
            }
        ]
}

const cloudAnimationOptions = () => {
    return {
        duration: randomInRange(20000,0.2), 
        // random x second delay
        delay: Math.random()*5000,
        // fill: 'forwards'
    }
}

const animateCloud = (cloud, height, width) => {
    let cloudAnimation = cloud.animate(
        generateCloudKeyframes(height, width), 
        cloudAnimationOptions()
        ); 
    // loop animation when finished
    cloudAnimation.onfinish = e => {
        // console.log(e)
        // debugger
        // animateCloud(cloud, randomMapHeight(), width);
        cloudAnimation.play();
    }
}