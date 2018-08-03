function sumOfTwo(a, b, v) {
  let diff = [];
  for (let num of b) {
    diff.push(v - num);
  }
  for (let num of a) {
    if(diff.includes(num)) {
      return true;
    }
  }
  return false;
}
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
