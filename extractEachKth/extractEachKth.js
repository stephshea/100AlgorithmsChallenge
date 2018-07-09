function extractEachKth(inputArray, k) {
inputArray.splice(k-1, 1);
return inputArray;
}
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
