function compareIntegers(a: string, b: string): string {
  parseInt(a);
  parseInt(b);
  return a > b ? "greater" : a < b ? "less" : "equal";
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));