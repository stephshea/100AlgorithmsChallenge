function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    inputArray.forEach(function (element, index) {
        if (element === elemToReplace) {
            inputArray[index] = substitutionElem;
        }
    });
    return inputArray;
}
console.log(arrayReplace([1, 2, 1], 1, 3));
