function areSimilar(a, b) {
  for(let i = 0; i < a.length; i++) {
    // for(let j = 0; j < b.length; j++) {
    //   if(a.indexOf([i]) === b.indexOf([j])) {
        return a.toString(i) === b.toString(i);
      }  
    return false;
  }

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [3, 2, 1]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 3, 8, 4], [1, 2, 4, 3, 7]));
