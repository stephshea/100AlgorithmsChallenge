function largestOfFour(nums: number[][]): number[] {
  const largeNums: number [] = [];
  for (let numberArray of nums) {
    let max = 0;
    for (let number of numberArray) {
      max = max < number ? number : max;
    }
    largeNums.push(max);
  }
  return largeNums;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));