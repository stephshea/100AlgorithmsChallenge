function adjacentElementsProduct(inputArray) {
  let product = 0;
  let highest = inputArray[0] * inputArray[1];
  
  for(let i = 1; i <  inputArray.length; i++){
    product = inputArray[i] * inputArray[i+1];
      if(product > highest) {
        highest = product;    
      }
    } 
  return highest;
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]));
