function digitDegree(n) {
  let numbers = n.toString().split("");
  let digitDegree = 0;
  for (let i = 0; i < numbers.length; i++) {
     += parseInt(numbers[i]);
  }
  return digitDegree
}
console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
