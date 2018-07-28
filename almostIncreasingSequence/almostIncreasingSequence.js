function almostIncreasingSequence(sequence) {
let count = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      count ++; 
    }
  }
  return count <= 1;
}
console.log(almostIncreasingSequence([1, 2, 1, 2])); 
console.log(almostIncreasingSequence([1, 3, 4, 2]));
