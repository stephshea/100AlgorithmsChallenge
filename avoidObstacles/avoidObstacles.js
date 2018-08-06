function avoidObstacles(inputArray) {
  const sorted = inputArray.sort((a, b) => {
    return a-b;
  });
  console.log(sorted);
}
console.log(avoidObstacles([5, 3, 6, 7, 9]));
