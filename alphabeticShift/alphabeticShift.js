function alphabeticShift(inputString) {
    var alphabet = {
        'a': 'b', 'b': 'c', 'c': 'd',
        'd': 'e', 'e': 'f', 'f': 'g',
        'g': 'h', 'h': 'i', 'i': 'j',
        'j': 'k', 'k': 'l', 'l': 'm',
        'm': 'n', 'n': 'o', 'o': 'p',
        'p': 'q', 'q': 'r', 'r': 's',
        's': 't', 't': 'u', 'u': 'v',
        'v': 'w', 'w': 'y', 'y': 'z',
        'z': 'a'
    };
    var inputShifted = inputString.split('');
    for (var i = 0; i < inputShifted.length; i++) {
        inputShifted[i] = alphabet[inputShifted[i]];
    }
    return inputShifted.join('');
}
console.log(alphabeticShift('crazy'));
