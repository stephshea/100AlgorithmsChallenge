function convertString(s: any, t: string): boolean {
  let letter: string = "";
  let letters: string = "";
  let tIndex = 0;
  for (letter of s) {
      if (letter === t[tIndex]) {
        letters = letters.concat(letter);
        tIndex++;

        if (letters === t) {
          return true;
        }
      }
    }
  return false;
}
console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
