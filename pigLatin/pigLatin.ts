function pigLatin(str: string): string {
  let chars = str.split("");
  let sliced;
  const vowels = /[aeiou]/;
  if(vowels.test(chars[0])) {
  return str.concat("way");
  }
  else if (!vowels.test(chars[0]) && !vowels.test(chars[1])) {
    sliced = chars.slice(0,2).join("");
    str = chars.join("").substring(2).concat(sliced).concat("ay");
  }
  else {
    sliced = chars.slice(0, 1).join("");
    chars = chars.join("");
    str = chars.substring(1).concat(sliced).concat("ay");
  }
  return str;
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
