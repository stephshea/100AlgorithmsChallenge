function chunkyMonkey(arr: any[], size: number): any[][] {
  const chunked = [];
  let count = 0;
  while ( count < arr.length) {
    chunked.push(arr.slice(count, count += size));
  }
  return chunked;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
