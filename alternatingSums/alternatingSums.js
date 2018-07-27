function alternatingSums(a) {
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
console.log(alternatingSums([50, 60, 60, 45, 70]));

// let weights = [];
// let firstGroup = 0;
// let secondGroup = 0;
// let i = 0;
// let j = 1;
  // while (i < a.length) {
  //   firstGroup += a[i];
  //   i += 2;  
  // }
  //   weights.push(firstGroup);

  // while (j < a.length) {
  //   secondGroup += a[j];
  //   j += 2;
  // }
  //   weights.push(secondGroup);
// return weights;