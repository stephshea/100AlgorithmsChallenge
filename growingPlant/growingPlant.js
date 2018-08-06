function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let days = 0;
  let growth = 0;
  while (growth < desiredHeight) {
    days++;
    growth += upSpeed;
    if (growth < desiredHeight) {
      growth -= downSpeed;
    } 
  }
  return days;
}
console.log(growingPlant(100, 10, 910));
