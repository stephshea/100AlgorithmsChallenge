function differentSymbolsNaive(s) {
  // s = s.split("");
  charArray = [];

  for(let i = 0; i < s.length; i++) {
    if(s.charCodeAt(i) >=65 && s.charCodeAt(i)<= 122 )
    {
      charArray.push(i);
    }
  }
  return charArray;
}
console.log(differentSymbolsNaive('cabca'));
console.log(differentSymbolsNaive('&quot;cabca&quot'));
