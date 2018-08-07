function arrayConversion(inputArray: number[]): number {
  let num;
  const pairs = [];
  const multpairs = [];
  for (let i = 0; i < inputArray.length; i++) {
    num = inputArray[i] + inputArray[i + 1];
    pairs.push(num);
    i++;
    }

  for (let j = 0; j < pairs.length; j++) {
    const num2 = pairs[j] * pairs[j + 1];
    multpairs.push(num2);
    j++;
  }
  return multpairs.reduce((a, b) => {
    return a + b;
  });
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
