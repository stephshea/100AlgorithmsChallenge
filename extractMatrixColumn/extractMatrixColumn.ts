function extractMatrixColumn(matrix: number[][], column: number): number[] {
  const extraction: number [] = [];
  matrix.forEach((row) => extraction.push(row[column]));
  return extraction;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));