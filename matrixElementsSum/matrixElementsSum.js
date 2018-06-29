function matrixElementsSum(matrix) {
    var priceTotal = 0;
    var bannedIndex = [];
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                bannedIndex.push(j);
            }
            else if (!bannedIndex.includes(j)) {
                priceTotal += matrix[i][j];
            }
        }
    }
    return priceTotal;
}
console.log(matrixElementsSum([[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]));
