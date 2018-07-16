function longestDigitsPrefix(inputString) {
  let newList = inputString.split("");
  let prefix = "";
  
  for (let item of newList ){  
  let num = parseInt(item);
  if (isNaN(num)) {
    break; 
    }
    prefix += num;
  }
    return prefix;   
}
console.log(longestDigitsPrefix('123aa1'));

// function longestDigitsPrefix(inputString) {
//   let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   let numArray = "";
//   for (let char of inputString) {
//     if (!numbers.includes(char)) {
//       break;
//     }
//       numArray += char;
//   }
//     return numArray;
// }

// function longestDigitsPrefix(inputString) {
//   let numArray = [];
//   let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   for (let char of inputString) {
//     if (!numbers.includes(char)) {
//       break;
//     }
//       numArray.push(char);
//   }
//     return numArray.join("");
// }
// console.log(longestDigitsPrefix('123aa1'));