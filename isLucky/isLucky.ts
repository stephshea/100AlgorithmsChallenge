function isLucky(n: number): boolean {
  const newN = n.toString().split("");
  const divide = newN.length / 2;
  const left = newN.splice(0, divide).reduce((num1, num2) => {
    return parseInt(num1, 10) + parseInt(num2, 10);
  });
  const right = newN.slice(0, divide).reduce((num1:, num2) => {
    return parseInt(num1, 10) + parseInt(num2, 10);
  });

  if (left === right) {
    return true;
  }
  return false;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
