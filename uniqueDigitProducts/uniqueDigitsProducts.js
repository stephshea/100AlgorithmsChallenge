function uniqueDigitProducts(a) {
 console.log(a.toString().split(""));
 console.log(a[0]);
 const products = 0;
 let total = 0;
for (let i =0; i < a.length; i++) {
  if(a[i].length === 1) {
    products.push(parseInt(a[i], 10));
  }
  else {
    total *= parseInt.split((a[i]((, 10));
  }
}console.log(products);;
}
console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
