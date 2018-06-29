function fancyRide(l, fares) {
    var rides = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
    for (var i = fares.length - 1; i >= 0; i--) {
        if (fares[i] * l <= 20) {
            return rides[i];
        }
    }
}
console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
