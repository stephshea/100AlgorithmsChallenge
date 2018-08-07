function sumAllPrimes(num) {
  let sum = 0;
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0){
        return false;
      }
    }
    return true;
  }
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
