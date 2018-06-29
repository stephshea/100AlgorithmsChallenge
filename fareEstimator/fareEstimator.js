function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    var fareCost = [];
    for (var i = 0; i < cost_per_mile.length; i++) {
        fareCost.push(ride_time * cost_per_minute[i] + ride_distance * cost_per_mile[i]);
    }
    return fareCost;
}
console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
