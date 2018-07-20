function flattenArray(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      flattened = flattened.concat(flattenArray(arr[i]));
    }
    else {
      flattened.push(arr[i]);
    }
  }
  return flattened;  
}
console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
