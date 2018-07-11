function seekAndDestroy(arr1, arr2) {
    return arr1.filter((num) => arr2.indexOf(num) === -1);

    //OR
    return arr1.filter((num) => !arr2.includes(num));

    //OR
    const obj = {};
    for(const key of arr1) {
        obj[key] = num;
    }

    console.log(obj);
}
    
console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));