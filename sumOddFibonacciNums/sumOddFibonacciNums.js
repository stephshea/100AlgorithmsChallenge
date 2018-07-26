function sumOddFibonacciNums(num) {
  let total = 0;
  let previous = 0;
  let current = 1;
  let next = 0;

  while (current <= num) { 
    if(current % 2 !== 0) {
      total += current;
    }
    next = current + previous;
    previous = current;
    current = next;
  }
    return total;
  }

console.log(sumOddFibonacciNums(10));
console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
