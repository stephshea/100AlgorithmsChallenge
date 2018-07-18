function chunkyMonkey(arr, size) {
  for (let i = 0; i < arr.length; i++) {
    const chunks = [];
    arr.slice(0, size);
    chunks.push(arr);
  }
  return chunks;
}
console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
