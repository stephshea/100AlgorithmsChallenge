function missingLetters(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let letters = str.split("");
  for (let i = 0; i < letters.length; i++) { 
    if (letters[i] !== alphabet[i])  {
     return alphabet[i];
    }
  }   
  return undefined;
}
console.log(missingLetters("abce"));
console.log(missingLetters("ace"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
