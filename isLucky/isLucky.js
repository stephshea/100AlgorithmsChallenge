function isLucky(n) {
  n = n.toString().split("");
  let divide = n.length / 2;
  let left = n.splice(0, divide);
  let right = n.slice(0, divide);
  left = left.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  });
  right = right.reduce((a, b) => {
    return parseInt(a, 10) + parseInt(b, 10);
  });
  if (left === right) {
    return true;
  }
  return false;
    
}
console.log(isLucky(1230));
console.log(isLucky(239017));
