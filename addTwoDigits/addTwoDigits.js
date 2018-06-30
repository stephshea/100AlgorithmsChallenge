function addTwoDigits(n) {
  let abby;
  abby = n.toString().split("");
  return +abby[0] + +abby[1];
}
console.log(addTwoDigits(29));
