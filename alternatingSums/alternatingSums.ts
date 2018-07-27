function alternatingSums(a: number[]): number[] {
  let evenTotal = 0;
  let oddTotal = 0;
  a.forEach((element, index) => {
    if (index % 2 === 0) {
      evenTotal +=  element;
    }
    else {
      oddTotal += element;
    }
  });
  return [evenTotal, oddTotal];
}
console.log(alternatingSums([50, 60, 60, 45, 70]))