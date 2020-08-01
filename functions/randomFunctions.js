const randomWhole = (sides, quantity=1) => {
    let total = 0; 
    for (let i = 0; i <= quantity; i++){
        total += Math.floor(Math.random() * sides) +1; 
    }
    return total;
}