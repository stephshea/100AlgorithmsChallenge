function commonCharacterCount(s1, s2) {
let wow =  s1.split("");
let news = s2.split("");
  let count = 0;
  for(let i = 0; i < wow.length; i ++) {
    if (wow[i] === news[i]) {
      count++;
    }
    
  }
  return count;
}
console.log(commonCharacterCount('aabcc', 'abcaa'));
