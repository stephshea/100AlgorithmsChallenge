function shapeArea(n: number): number {
  const powed = n - 1;
  const poly = n * n + Math.pow(powed, 2);
  return poly;
}
console.log(shapeArea(2));
console.log(shapeArea(3));