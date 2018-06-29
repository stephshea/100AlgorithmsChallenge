function factorializeANumber(num) {
    var total = 1;
    for (var i = 1; i <= num; i++) {
        total *= i;
    }
    return total;
}
console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
