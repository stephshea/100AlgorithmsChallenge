function adjacentElementsProduct(inputArray) {
    var largestProduct = inputArray[0] * inputArray[1];
    for (var i = 1; i < inputArray.length - 1; i++) {
        var product = inputArray[i] * inputArray[i + 1];
        largestProduct = largestProduct < product ? product : largestProduct;
    }
    return largestProduct;
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
