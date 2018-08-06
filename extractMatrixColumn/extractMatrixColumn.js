function extractMatrixColumn(matrix, column) {
  let extraction = [];
  for (let num in matrix) {
      extraction.push(matrix[num][column]);
    }
  return extraction;
}
console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));
