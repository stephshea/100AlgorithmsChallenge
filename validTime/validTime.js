function validTime(time) {
  let time.split("");
for (let i = 0; i < time.length; i++){
    if (time[0] > 2 || time[1] > 3) {
      return false;
    }
    else if (time[3]>5) {
      return false;
    }
    else {
      return true;
    }
  }
}
console.log(validTime('13:38'));
console.log(validTime('23:51'));
console.log(validTime('02:76'));
