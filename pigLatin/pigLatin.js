function pigLatin(str) {
    let chars = str.split("");
    const vowels = ["a", "e", "i", "o", "u"];

    if(vowels.includes(str[0])) {
      return str + "way";
    }
    else{
      for (let i = 0; i < str.length; i++) {

        if (!vowels.includes(str[i])){
          chars.push(chars.shift());
        }
        else {
          chars.push("ay");
        return chars.join("");
        }
      }
  }
    // let sliced;
    // const vowels = /[aeiou]/;
    //   if(vowels.test(chars[0])) {
    //     return str.concat("way"); 
    //   }
    //   else if (!vowels.test(chars[0]) && !vowels.test(chars[1])) {
    //     sliced = chars.slice(0,2).join("");
    //     str = chars.join("").substring(2).concat(sliced).concat("ay");
    //   }
    //   else {
    //     sliced = chars.slice(0, 1).join("");;
    //     chars = chars.join("");
    //     str = chars.substring(1).concat(sliced).concat("ay");
    //   }
  return str;
}
console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
console.log(pigLatin("vault"));