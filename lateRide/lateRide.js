function lateRide(n) {
    n = parseInt((n / 60).toFixed(2));
    // n = n.toString();
    console.log(n);
    return n.reduce((a, b) => {
        return pareseInt(a) + parseInt(b);
    });
}
console.log(lateRide(240));
console.log(lateRide(808));
