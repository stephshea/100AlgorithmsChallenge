function allLongestStrings(inputArray) {
    var longestLength = 0;
    var longestWords = [];
    inputArray.forEach(function (word) {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });
    inputArray.forEach(function (word) {
        if (word.length === longestLength) {
            longestWords.push(word);
        }
    });
    return longestWords;
}
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
