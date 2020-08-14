// functions for cloud features like speed, size, etc. 
const cloudSpeed = 10;  
const cloudSize = 5; 

const mapHeight = document.getElementById('map').clientHeight; 
const mapWidth = document.getElementById('map').clientWidth;
const generateCloud = () => {
    let ele = document.createElement('div'); 
    applyStyles(cloud, ele); 
    cloudStyles(ele); 
    map.appendChild(ele); 
    cloudAnimation(ele); 
}

const cloudStyles = cloud => {
    cloud.style.width = cloudSize + 'px'; 
    cloud.style.height = cloudSize + 'px'; 
    cloud.style.position = "absolute"; 
    // set height & starting width
    cloud.style.top = Math.floor(Math.random()*mapHeight);
    cloud.style.left = Math.floor(Math.random()*mapWidth);
}

const cloudKeyframes = [
    {
        left: '0px'
    },
    {
        left: `100px`
    }
]

const cloudAnimationOptions = {
    duration: 1000, 
    fill: 'forwards'
}

const cloudAnimation = cloud => {
    cloud.animate(cloudKeyframes, cloudAnimationOptions)
}