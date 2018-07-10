function sortByHeight(a: number[]): number[] {
  const filteredArray = a.filter((num) => num !== -1).sort((num1, num2)  =>  num1 - num2);

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
