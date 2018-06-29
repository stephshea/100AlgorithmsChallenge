function arrayPreviousLess(items) {
    var lessThanList = [];
    for (var i = items.length - 1; i >= 0; i--) {
        for (var j = i; j >= 0; j--) {
            if (items[i] > items[j]) {
                lessThanList.unshift(items[j]);
                break;
            }
            else if (j === 0) {
                lessThanList.unshift(-1);
            }
        }
    }
    return lessThanList;
}
console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
