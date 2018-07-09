function convertString(s, t) {
  s = s.split("");
  t = t.split("");
 for(let i = 0; i <s.length; i++) {
   for (let j = 0; j < t.length; j++)
   {
    if(s[i].includes(t[j])) {
      return true; 
    }
  }
return false;
}
}
console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcex'));
