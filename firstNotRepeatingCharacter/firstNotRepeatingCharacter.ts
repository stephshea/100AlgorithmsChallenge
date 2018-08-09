function firstNotRepeatingCharacter(s: string): string {
  const noLetter = "_";
  let indexArray = [-1];

  // for (let i = 0; i < s.length; i++) {
  //   if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
    for (let i = 0; indexArray = -1; i++) {
      if (s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
      return s.charAt(i);
    }
  }
  return noLetter;
}
console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
