function convertString(s, t) {
    var word = '';
    var tIndex = 0;
    var sChars = s.split('');
    for (var i = 0; i < s.length; i++) {
        if (s[i] === t[tIndex]) {
            word = word.concat(s[i]);
            tIndex++;
            if (word === t) {
                return true;
            }
        }
    }
    return false;
}
console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
