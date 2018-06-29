function depositProfit(deposit, rate, threshold) {
    var year = 0;
    var account = deposit;
    while (threshold > account) {
        account += account * (rate / 100);
        year++;
    }
    return year;
}
console.log(depositProfit(100, 20, 170));
