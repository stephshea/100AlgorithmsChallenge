function checkPalindrome(inputString) {
  inputString.toLowerCase();
  let reverse = inputString.split("").reverse().join("");
    if(inputString === reverse){
        return true;
    }
    return false;
}
console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
