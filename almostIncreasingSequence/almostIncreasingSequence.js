function almostIncreasingSequence(sequence) {
// let increasing = [];
let count = 0;
let firstNum = sequence[0];
let currentNum = sequence[1];

 
  for (let i = 0; i < sequence.length; i++) {
    if (firstNum > currentNum) {
      count ++;
      firstNum = currentNum;
      currentNum = sequence[i + 1];
    }
    else {
      firstNum = currentNum;
      currentNum = sequence[i + 1];
    }
  }
 return count <= 1;
  // if (count <= 1) {
  //   return true;
  // }
  // return false;
}
console.log(almostIncreasingSequence([1, 3, 1, 1])); 
console.log(almostIncreasingSequence([1, 3, 2]));
