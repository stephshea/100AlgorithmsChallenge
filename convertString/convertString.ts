function convertString(s: string, t: string): boolean {
s = s.split("");
t = t.split("");
const convertedStr = [];
for (let i = 0; i < s.length; i++) {
  for (let j = 0; j < s.length; j++) {
      if (s[i] === t.indexOf(t[j])) {
        convertedStr.push(t[j]);
      }
    }
  }
  return convertedStr;

  if (convertedStr.join("") === t.join(""))  {
    return true;
    }
  else {
    return false;
  }
}
console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
