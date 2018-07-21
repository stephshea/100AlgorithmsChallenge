function arrayChange(inputArray) {
   for (let i = 0; i < inputArray.length; i++) {
     if (inputArray[i+ 1] < inputArray[i]) {
       inputArray[i]++;
     }
     else return inputArray;
   }
 return inputArray;
}
console.log(arrayChange([1, 1, 1]));
