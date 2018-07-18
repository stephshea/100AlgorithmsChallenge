function uniqueDigitProducts(a) {
//  let b = a.toString().split("");
//  console.log(b);
 
const products = [];

 a.forEach(num) => {
  const product = getDigitProduct(num);

 });
  
  let wows = a[2].split("");

  // for (let i =0; i < a.length; i++) {
  //   if(a[i].length === 1 && typeof parseInt([i]) === "number") {
  //     products.push(parseInt(a[i]));
  //   }
  //   else {
      
  //     product *= parseInt(a[i]);
  //     if (!products.include(product)){
  //     products.push(product);
  //     }
  //   }
  return products.length;
}
console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
