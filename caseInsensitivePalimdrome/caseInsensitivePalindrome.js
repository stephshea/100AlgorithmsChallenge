function isCaseInsensitivePalindrome(inputString) {
    var originalLowerCase = inputString.toLowerCase();
    var reversedWord = originalLowerCase.split('').reverse().join('');
    return originalLowerCase === reversedWord;
}
console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
