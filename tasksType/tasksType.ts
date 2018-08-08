function tasksTypes(deadlines: number[], day: number): number[] {
  let [today, upcoming, later] = [0, 0, 0];
  deadlines.forEach((num) => {
    if (num <= day) {
      today++;
    } else if (num <= 8) {
      upcoming++;
    } else {
      later++;
    }
  });
  return [today, upcoming, later];
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
