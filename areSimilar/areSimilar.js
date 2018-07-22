function areSimilar(a, b) {
  let count = 0;
  a = a.toString();
  b = b.toString();
  const c = [];
  let d = [];

  console.log(a[0]);
  console.log(b[0]);
    if(a === b) {
      return true;
    } 

    for(let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
      c.push(a[i]);
      d.push(b[i]);
      }
    }
      d = d.reverse();
      if (c.length === 2 && c.toString() === d.toString()) {
        return true;
      }
        return false;
  }

   

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [3, 2, 1]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 3, 7, 4], [1, 2, 4, 3, 7]));
