function digitDegree(n) {
  let digitDegree = 0;
  let currentNumber = n;
  let nums;
      if (n<= 9) {
       return digitDegree;
      }
     
     else { 
       while(true) {
           digitDegree++;
           currentNumber = getDigit(currentNumber);
            if (currentNumber <= 9) {
              break;
          }
       }
    }  
  return digitDegree;
  }

  function getDigit(num) {
    nums = num.toString().split("").map((element) => 
      parseInt(element));
      return nums.reduce((a, b) => {
        return a + b;
  });
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
