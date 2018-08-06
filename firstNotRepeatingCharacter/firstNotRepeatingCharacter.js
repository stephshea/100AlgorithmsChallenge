function firstNotRepeatingCharacter(s) {
  const chars = s.split("");
  console.log(chars)
  let dups = {};
  let answer = '_';
  let indexAnswer = Number.MAX_SAFE_INTEGER;

  chars.forEach((element, index) => {
    if (!dups.hasOwnProperty(element)) {
      dups[element] = {
        count: 1,
        index
      }; 
    } else {
        dups[element].count++;
        dups[element].index = index;
    }
  });
  for (const key in dups) {
    if (dups[key].count === 1 && dups[key].index < indexAnswer) {
      answer = key;
      indexAnswer = dups[key].index;
    } 
  }
  return answer;
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
