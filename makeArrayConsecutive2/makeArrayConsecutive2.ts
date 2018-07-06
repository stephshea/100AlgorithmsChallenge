function makeArrayConsecutive2(statues: number[]): number {
  const sortedStatues = statues.sort((a, b) => a - b);
  const firstNum = sortedStatues[0];
  const lastNum = sortedStatues[sortedStatues.length - 1];
  let count = 0;

  for (let i = firstNum; i < lastNum; i++) {
    if (!statues.includes(i)) {
      count++;
    }
  }
  return count;
}
console.log(makeArrayConsecutive2([6, 2, 3, 8]));
