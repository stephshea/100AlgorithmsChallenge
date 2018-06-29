function missingLetters(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var chars = str.split('');
    for (var i = 0; i < chars.length; i++) {
        if (chars[i] !== alphabet[i]) {
            return alphabet[i];
        }
    }
    return undefined;
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
