function validTime(time: string): boolean {
  const [hours, minutes] = time.split(":");
  if (parseInt(hours, 10) > 23 || parseInt(hours, 10) < 1) {
    return false;
  }
  if (parseInt(minutes, 10) > 59 || parseInt(minutes, 10) < 1 ) {
    return false;
  }
  return true;
}
console.log(validTime('13:99'));
console.log(validTime('23:51'));
console.log(validTime('02:76'));