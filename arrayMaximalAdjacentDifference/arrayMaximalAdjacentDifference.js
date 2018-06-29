function arrayMaximalAdjacentDifference(inputArray) {
    var maxDiff = Math.abs(inputArray[0] - inputArray[1]);
    for (var i = 0; i < inputArray.length; i++) {
        var absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
        maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
    }
    return maxDiff;
}
console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
