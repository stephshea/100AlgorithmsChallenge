function tasksTypes(deadlines, day) {
  let tasksDue = [];
  let today = 0;
  let upcoming = 0;
  let later = 0;

  deadlines.forEach((num) => {
    if (num <= day) {
      today++;
    } else if (num <= 8) {
      upcoming++;
    } else {
      later++;
    }
  });

  tasksDue.push(today, upcoming, later);
  return tasksDue;
}
console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));