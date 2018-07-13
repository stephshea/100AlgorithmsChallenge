function uniqueDigitProducts(a) {
 let b = a.toString().split("");
 console.log(b);
  const products = [];
  const product = 1;
  for (let i =0; i < b.length; i++) {
    if(b[i].length === 1 && typeof "number") {
      products.push(parseInt(b[i]));
    }
    else {
      
      product *= parseInt(b[i]);
      if (!products.include(product)){
      products.push(product);
      }
    }
  }
  return products;
}
console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
