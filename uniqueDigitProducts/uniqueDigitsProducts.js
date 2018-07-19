function uniqueDigitProducts(a) {
  let numArray = [];
  a.forEach((num) => {
    let product = getDigitProduct(num);
    console.log(num);
    if ( !numArray.includes(product) ) {
      numArray.push(product);
    } 
  });
  return numArray.length;
}
function getDigitProduct(num) {
  let digits = num.toString().split("");
  let product = 1;

  digits.forEach((digit) => {
    product *= parseInt(digit, 10);
  });
  return product;
}
console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
