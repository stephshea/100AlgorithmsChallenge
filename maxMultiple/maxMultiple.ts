function maxMultiple(divisor: number, bound: number): number  {
  // return Math.floor(bound/divisor) * divisor;
  let remainder = bound % divisor;
  return bound - remainder;
}
console.log(maxMultiple(3,10));