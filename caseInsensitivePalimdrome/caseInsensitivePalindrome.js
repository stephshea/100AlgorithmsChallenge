function isCaseInsensitivePalindrome(inputString) {
    inputString = inputString.toLowerCase();
    let reverse = inputString.split("").reverse().join("");
    if(inputString === reverse){
        return true;
    }
    return false;
}
console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
