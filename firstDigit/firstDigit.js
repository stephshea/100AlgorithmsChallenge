function firstDigit(inputString) {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const splitted = inputString.split("");
  
  for (let i = 0; i < splitted.length; i++) {
    if(digits.includes(splitted[i])) {
      return splitted[i];
    }
  }
}
console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
