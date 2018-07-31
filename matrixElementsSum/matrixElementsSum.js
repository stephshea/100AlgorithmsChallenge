function matrixElementsSum(matrix) {
    let bannedIndex = [];
    let priceTotal = 0;
    for ( let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                bannedIndex.push(j);
            }
            else if (bannedIndex.indexOf(j) === -1) {
                priceTotal += matrix[i][j];
            }
        }
    }
    return priceTotal;
}
console.log(matrixElementsSum([[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]));
