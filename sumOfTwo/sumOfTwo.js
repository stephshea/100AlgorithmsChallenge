function sumOfTwo(a, b, v) {
  for (let i = 0; i < b.length; i++) {
    // for (let j = i; j < b.length; j++) {
      if (a[i] + b[i] === v){
        return true;
      } 
    }
  return false;
  
}
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
