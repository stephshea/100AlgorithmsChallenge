function confirmEnding(str, target) {
  if (str.slice(str.length - target.length) === target){
    return true;
  }
  return false;
}
console.log(confirmEnding("Absfraction", "fraction"));
console.log(confirmEnding("Open sesame", "pen"));
