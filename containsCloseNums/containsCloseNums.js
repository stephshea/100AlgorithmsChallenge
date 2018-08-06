function containsCloseNums(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      if(indexOf(nums[i + 1]) - indexOf(nums[i]) === k) {
        return true;
      }
    }
    return false;
  }
}
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
