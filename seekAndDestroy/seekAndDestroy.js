function seekAndDestroy(arr1, arr2) {
    return arr1.filter(function (element) { return !arr2.includes(element); });
}
console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
