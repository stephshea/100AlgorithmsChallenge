function alphabetSubsequence(s) {
    const splitArray = s.split("");
    const chars = [];
    splitArray.forEach(charCode => {
    chars.push(charCode.charCodeAt(0));
    });

    if(new Set(chars).size !== chars.length) {
      return false;
    }  

    for(let i = 0; i < chars.length; i++){
      if ( chars[i] > chars[i+1]) {
        return false;
     }
  }
  return true;
}
console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('acefhjkla'));
console.log(alphabetSubsequence('bxz'));
