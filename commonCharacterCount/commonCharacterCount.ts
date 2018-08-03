function commonCharacterCount(s1: string, s2: string): number {
  s1 = s1.split("");
  s2 = s2.split("");
  
  const s1Obj = {};
  const s2Obj = {};
  
  for (let i =0; i < s1.length; i++) {
      if (s1Obj.hasOwnProperty(s1[i]) === false) {
          s1Obj[s1[i]] = 1;
      }
      else {
          s1Obj[s1[i]]++;
      }
  }
  
  for (let i =0; i < s2.length; i++) {
      if(s2Obj.hasOwnProperty(s2[i]) === false) {
          s2Obj[s2[i]] = 1;
      }
      else {
          s2Obj[s2[i]]++;
      }
  }

  let total = 0;
  for (const prop in s1Obj){
    if (s2Obj.hasOwnProperty(prop) === true) {
      if (s2Obj[prop] < s1Obj[prop]){
        total += s2Obj[prop];
      }
      else {
        total += s1Obj[prop];
      }
    }
  }
  return total;
}
console.log(commonCharacterCount('aabcc', 'adcaa'));
console.log(commonCharacterCount('zzzz', 'zzzzzz'));