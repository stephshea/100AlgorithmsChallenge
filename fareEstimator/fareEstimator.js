function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    const fareEstimates = [];
    let fare = 0;
    let miles = 0;
    const fareMiles = [];
    const baseFares = [];
    let baseFare = 0
    cost_per_minute.forEach((min) => {
        baseFare = ride_time * min;
        baseFares.push(baseFare);
    });
    cost_per_mile.forEach((mile) => {
        miles = ride_distance * mile;
        fareMiles.push(miles);    
        });
    for (let i = 0; i < fareMiles.length; i++) {
        fare = baseFares[i] + fareMiles[i];
        fareEstimates.push(fare.toFixed(1));
    }  
    return fareEstimates;
}
console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));