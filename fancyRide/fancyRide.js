function fancyRide(l, fares) {
    let totals = [];
    let total;
    let index = 0;
    const carTypes =  ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
    fares.forEach((fare) => {
        total = l * fare;
        totals.push(total);    
    });
    for (let fare of totals) {
        if(Math.abs(fare) <= 20) {
            index = totals.indexOf(fare);
        }
    }
 return carTypes[index];  
}
console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
