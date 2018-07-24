function reflectString(inputString) {
  let reflect = [];
  console.log(inputString.charCodeAt(1))
  let letters = inputString.split("");
  console.log(letters);
  console.log(letters[1]);
  let letter;
  // for (let i = 0; i < inputString; i++) {
  //  if (inputString.charCodeAt(i) < 100)

  // letter = inputString.charCodeAt(i) +10;
  // reflect.push(letter.fromnCharCode);
  return letters.map((letter) => {
    // if (letter.charCodeAt() > 110) {
    //   letter = letter.charCodeAt - 13;
    //   reflect.push(letter);
    //   console.log(reflect);
    // }
      return letter.charCodeAt();
  });
  
  return reflect.join("");
}
//zmnv
console.log(reflectString("name"));
