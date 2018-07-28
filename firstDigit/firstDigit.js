function firstDigit(inputString) {
  // inputString.split("").map((num) => {
  //   if (typeof num === 'number') {
  //     return num;  
  //   }
  // });

  let splitted = inputString.split("");
  console.log(splitted[0]);
  for (let i = 0; i < splitted.length; i++) {
    if (typeof(parseInt(splitted[i])) === "number") {
      return parseInt(splitted[i]);  
    }
    else {
      return "yay";
    } 
  }
}
console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
