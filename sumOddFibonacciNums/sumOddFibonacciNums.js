function sumOddFibonacciNums(num) {
  // const fibsArray = [0, 1];
  let total = 0;
  let previous = 0;
  let current = 1;

  while(current <= num) { 
    if(current % 2 !== 0) {
      total += current;
    }
    const newCurrent = current + previous;
    previous = current;
    current = newCurrent;
  }
    // return fibsArray;
    return total;
    // return fibsArray.reduce(function(a,b) {
    //   return a + b;
    //   });
  // if (num >= 3) {
  // return sumOddFibonacciNums(num-1) + sumOddFibonacciNums(num-2);
  // }
  // else {
  //   return 1;
  // }
    
    // console.log(fibsArray);
  }

console.log(sumOddFibonacciNums(10));
// console.log(sumOddFibonacciNums(1000));
// console.log(sumOddFibonacciNums(4000000));
