function largestOfFour(nums) {
  let max = 0;
  let largeNums = [];
  for (let i =0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++){
      if(nums[i][j] > max) {
        max = nums[i][j];
      }
    }
    largeNums.push(max);
    max = 0;
  }
  return largeNums;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
