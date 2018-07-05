function shapeArea(n: number): number {
  let powed = n-1;
  let poly = n*n + Math.pow(powed, 2);
return poly;
}

console.log(shapeArea(2));
console.log(shapeArea(3));