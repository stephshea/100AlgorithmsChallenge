function firstDigit(inputString: string): string {
  const digits: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const splitted = inputString.split("");
  for (char of splitted) {
    if (digits.includes(char)) {
      return char;
    }
  }
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
