// functions for cloud features like speed, size, etc. 
const cloudSpeed = 10;  
const cloudSize = 5; 

const generateCloud = () => {
    let ele = document.createElement('div'); 
    applyStyles(cloud, ele); 
    ele.style.width = cloudSize + 'px'; 
    ele.style.height = cloudSize + 'px'; 
    ele.style.position = "absolute"; 
    // set height & starting width
    ele.style.top = Math.floor(Math.random()*mapHeight);
    ele.style.left = Math.floor(Math.random()*mapWidth);
}