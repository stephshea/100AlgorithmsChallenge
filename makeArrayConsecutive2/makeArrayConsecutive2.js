function makeArrayConsecutive2(statues) {
  const sortedStatues = statues.sort((a, b) => a - b);
  let firstNum = sortedStatues[0];
  let lastNum = sortedStatues[sortedStatues.length-1];
  let count = 0;
  for(let i = firstNum; i < lastNum; i++) {
    if(!statues.includes(i)) {
      count++;
    }
  }
  return count;
}
console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([6, 3]));
console.log(makeArrayConsecutive2([3]));
console.log(makeArrayConsecutive2([6, 2, 3, 10, 8]));
console.log(makeArrayConsecutive2([2, 3, 4]));
