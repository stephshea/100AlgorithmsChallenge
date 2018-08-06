function convertString(s, t) {
  let letters = '';
  let tIndex = 0;

  for(let i = 0; i <s.length; i++) {
      if(s[i] === t[tIndex]) {
        letters = letters.concat(s[i]);
        tIndex++;

        if (letters === t) {
          return true;
        }
      }
    }
  return false;
}
console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcex'));
