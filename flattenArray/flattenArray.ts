function flattenArray(arr: any[]): any[] {
  const flattened = [];
  flatten(arr);
  function flatten(arr) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flatten(item);
      }
      else {
        flattened.push(item);
      }
    });
  }
  return flattened;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
