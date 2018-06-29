function incorrectPasscodeAttempts(passcode, attempts) {
    var failedAttempts = 0;
    for (var _i = 0, attempts_1 = attempts; _i < attempts_1.length; _i++) {
        var attempt = attempts_1[_i];
        failedAttempts = attempt === passcode ? 0 : failedAttempts++;
        if (failedAttempts === 10) {
            return true;
        }
    }
    return false;
}
console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));
