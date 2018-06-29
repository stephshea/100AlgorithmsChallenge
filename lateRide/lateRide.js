function lateRide(n) {
    var hours = Math.floor(n / 60);
    var minutes = n % 60;
    var time = hours.toString().concat(minutes.toString()).split('').map(function (char) {
        return parseInt(char);
    });
    return time.reduce(function (a, b) { return a + b; });
}
console.log(lateRide(240));
console.log(lateRide(808));
