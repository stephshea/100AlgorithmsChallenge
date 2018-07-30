function almostIncreasingSequence(sequence) {
let count = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count ++; 
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])  {
      return false;
      }
    }
  }
  return count <= 1;
}
console.log(almostIncreasingSequence([1, 2, 1, 2])); 
console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));
