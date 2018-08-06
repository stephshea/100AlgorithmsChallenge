function houseOfCats(legs) {
  const critters = [];
  critters.push(Math.floor(legs/4));
  critters.push(Math.floor(legs/2));
  critters.forEach((legged) => {
    if (legged === 0) {
      critters.shift(legged);
    } 
  });
    return critters;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));