function missingLetters(str: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const letters = str.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== alphabet[i]) {
      return alphabet[i];
    }
  }
  return undefined;
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));