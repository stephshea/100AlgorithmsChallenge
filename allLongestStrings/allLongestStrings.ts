function allLongestStrings(inputArray: string[]): string[] {
  const sorted = inputArray.sort(function (a, b) {
    return b.length - a.length;
  });
  const sub: number = sorted[0].length;
  const longArray = [];
  // inputArray.forEach(function(element) {
  inputArray.forEach((item: string) => {
    if (item.length === sub) {
      longArray.push(item);
    }
  });
  return longArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
