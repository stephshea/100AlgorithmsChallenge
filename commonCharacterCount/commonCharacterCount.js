function commonCharacterCount(s1, s2) {
let likes = [];
for(let i = 0; i < s1.length; i++) {
    for(let j = 0; j < s2.length; j++) {
      if(s1.charAt(i) === s2.charAt(j)) {
        likes.push(s2.charAt(j));
      }
    } 
  }
 
  return likes.filter((i, j) => { 
    return likes.indexOf(i) === j;
    }).length;
  // .filter(function(a,b) {
  //   return b ==likes.lastIndexOf(a);
  // });


  // function countUnique(likes) {
  //   return new Set(likes).size;

  }

console.log(commonCharacterCount('aadcbec', 'aabedca'));
