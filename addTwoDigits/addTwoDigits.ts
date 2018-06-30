function addTwoDigits(n: number) {
  let abby;
  abby = n.toString().split("");
  return +abby[0] + +abby[1];
  };

console.log(addTwoDigits(29));


// function addTwoDigits(n: number) {
//     const abby = n.toString().split("");
//     return abby.reduce((a : string, b: string) => {
//         return parseInt(a) + parseInt(b);
//     });
//   }
// console.log(addTwoDigits(29));