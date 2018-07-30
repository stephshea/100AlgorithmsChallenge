function digitDegree(n: number): number {
  const numbers = n.toString().split("");
  let digitDegree = 0;
  numbers.forEach((number) => {
    return digitDegree += parseInt(number, 10);
  });
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));