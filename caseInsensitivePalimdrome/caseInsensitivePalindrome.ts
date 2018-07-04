function isCaseInsensitivePalindrome(inputString: string): boolean {
  inputString = inputString.toLowerCase();
  const reverse = inputString.split("").reverse().join("");
  return inputString === reverse;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
