function newNumeralSystem(number) {
  let nums = [];
  let startCharCount = 65;
  let endCharCount = number.charCodeAt(0);
  while (startCharCount <= endCharCount) {
    nums.push(String.fromCharCode(startCharCount) + "+"  + String.fromCharCode(endCharCount));
    startCharCount++;
    endCharCount--;
  }
  return nums;
}
console.log(newNumeralSystem('G'));
