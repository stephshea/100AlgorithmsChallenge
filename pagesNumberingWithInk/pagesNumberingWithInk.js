function pagesNumberingWithInk(current, numberOfDigits) {
    let page = 0;
    const pages = [];
    let count = 0;
    for (let i = 0; i < numberOfDigits; i++ ) {
         page = current ++;
         count += page.toString().length;
         if(count <= numberOfDigits){
         pages.push(page);
         }
    }
    return pages.pop();
 
}
console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));
