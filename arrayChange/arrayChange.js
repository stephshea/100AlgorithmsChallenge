function arrayChange(inputArray) {
   for (let i = 0; i < inputArray.length; i++) {
     if (inputArray[i]+ 1 < inputArray[i]) {
       inputArray[i] + 1;
     }
     
   }
 
}
console.log(arrayChange([1, 1, 1]));
