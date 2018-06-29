function circleOfNumbers(n, firstNumber) {
    var numArray = [];
    var halfWay = n / 2;
    for (var i = 0; i < n; i++) {
        numArray.push(i);
    }
    if (firstNumber < halfWay) {
        return numArray[firstNumber + halfWay];
    }
    return numArray[firstNumber - halfWay];
}
console.log(circleOfNumbers(10, 2));
