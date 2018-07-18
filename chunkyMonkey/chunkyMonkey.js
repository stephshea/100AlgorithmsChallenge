function chunkyMonkey(arr, size) {
  let chunks;
  let newArray = [];
  while ( arr.length > 0) {
    chunks = arr.splice(0, size);
    newArray.push(chunks);
  }
  return newArray;
}
console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
