function evenDigitsOnly(n) {
    var digits = n.toString().split('');
    return digits.every(function (digit) { return parseInt(digit) % 2 === 0; });
}
console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
