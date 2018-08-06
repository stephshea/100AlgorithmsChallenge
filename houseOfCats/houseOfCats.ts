function houseOfCats(legs: number): number[] {
  const critters = [];
  while (legs >= 0) {
    critters.unshift(legs / 2);
    legs -= 4;
  }
  return critters;
}
console.log(houseOfCats(6));
console.log(houseOfCats(2));
