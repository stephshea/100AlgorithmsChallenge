function areSimilar(a, b) {
  for(let i = 0; i < a.length; i++)

 if(a.indexOf([i]) === b.indexOf([i])) {
   return true;
 }  
 return false;
// return a.toString() === b.toString();

}
console.log(areSimilar([1, 2, 3], [3, 2, 1]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 3, 8, 4], [1, 2, 4, 3, 7]));
