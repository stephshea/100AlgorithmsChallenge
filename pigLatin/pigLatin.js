function pigLatin(str) {
    var letters = str.split('');
    var vowelRegex = /[aeiou]/;
    if (vowelRegex.test(str[0])) {
        return str + "way";
    }
    while (true) {
        if (!vowelRegex.test(letters[0])) {
            var firstConstanent = letters.splice(0, 1)[0];
            letters.push(firstConstanent);
        }
        else {
            break;
        }
    }
    str = letters.join('') + 'ay';
    return str;
}
console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
