function sortByHeight(a) {
const filteredArray = a.filter((a ) => a !== -1).sort((num1, num2) => num1 - num2);
console.log(filteredArray);

let indexValue = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = filteredArray[indexValue];
      indexValue++;
    }
  }
  return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
