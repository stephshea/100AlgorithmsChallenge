function flattenArray(arr) {
    var oneArray = [];
    flatten(arr);
    function flatten(arr) {
        arr.forEach(function (element) {
            if (Array.isArray(element)) {
                flatten(element);
            }
            else {
                oneArray.push(element);
            }
        });
    }
    return oneArray;
}
console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
