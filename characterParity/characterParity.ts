function characterParity(symbol: string): string {
  const sym = parseInt(symbol, 10);
  return isNaN(sym) ? "not a digit" : sym % 2 === 0 ? "even" : "odd";
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
