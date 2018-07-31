function matrixElementsSum(matrix: any[][]): number {
    let priceTotal = 0;
    const banned = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                banned.push(j);
            }
            else if (!banned.includes(matrix[i][j])) {
                priceTotal += matrix[i][j];
            }
        }
    }
    return priceTotal;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
