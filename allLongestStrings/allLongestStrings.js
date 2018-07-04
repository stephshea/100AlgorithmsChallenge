function allLongestStrings(inputArray) {
  let sorted = inputArray.sort(function(a,b) {
    return b.length - a.length;
  });
  let sub = sorted[0].length;
  let longArray = [];
  inputArray.forEach((item) => {
    if(item.length === sub) {
      longArray.push(item);
    }
  });
return longArray;
}
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
