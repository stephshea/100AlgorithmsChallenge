function arrayMaxConsecutiveSum(inputArray, k) {
  let max = 0;
  let pairTotal = 0;
  for (let i = 0; i < k; i++) {
    (pairTotal = inputArray[i] + inputArray[i + 1]);
    if( pairTotal > max) {
      max = pairTotal;
    }
  }
  return max;
}
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 4));
