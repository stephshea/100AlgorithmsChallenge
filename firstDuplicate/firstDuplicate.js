function firstDuplicate(a) {
  let dups = [];
  for (let i = 0; i < a.length; i++) {
    if (!dups.includes(a[i])) {
      dups.push(a[i]);
    }
    else if (dups.includes(a[i])) {
      return a[i];
    }
  }
  return -1;
}
console.log(firstDuplicate([2, 5, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
