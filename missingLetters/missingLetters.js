function missingLetters(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split("");
  str = str.split("");
  let missingLetter = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].indexOf(i) !== str[i + 1].indexOf(i + 1))  {
     str[i + 1]= alphabet[i];
     missingLetter = str[i + 1];
    }
    return missingLetter;
  }   
  return undefined;
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
