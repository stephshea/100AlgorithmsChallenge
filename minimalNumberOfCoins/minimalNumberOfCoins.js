function minimalNumberOfCoins(coins, price) {
  let count = 0;
  for (let i = 0; i < price; i++) {
    if (price % 10 === 0) {
      count++;
      price = price - 10;
    }
    else if (price %2 === 0) {
      count++;
      price = price -2;
    }
    else if (price%1 === 0) {
      count++;
      prince = price - 1;
    }
  }
  return count;
}
console.log(minimalNumberOfCoins([1, 2, 10], 28));
