function characterParity(symbol) {
  const sym = parseInt(symbol, 10);
  return isNaN(sym) ? "not a digit" : sym % 2 === 0 ? "even" : "odd";
  // let sym = parseInt(symbol); 
  // if (isNaN(sym)) {
  // return "not a digit";
  //   }
  // else if (sym %2 === 0) {
  //   return "even";
  // }
  // else if( sym % 2 !== 0) {
  //   return "odd";
  // }
}
console.log(characterParity('b'));
console.log(characterParity('5'));
console.log(characterParity('8'));

