function compareIntegers(a, b) {
    parseInt(a);
    parseInt(b);
    if(a === b) {
        return "equal";
    }
    else if (a > b) {
        return "greater";
    }
return "less";
}
console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
