function reflectString(inputString) {
  let letters = {
      a: 'z', b: 'y', c: 'x', d: 'w', e: 'v',
      f: 'u', g: 't', h: 's', i: 'r', j: 'q',
      k: 'p', l: 'o', m: 'n', n: 'm', o: 'l',
      p: 'k', r: 'i', s: 'h', t: 'g', u: 'f',
      v: 'e', w: 'd', x: 'c', y: 'b', z: 'a'
  };
  return inputString.split("").map((letter) => {
    return letters[letter] || letter;
  }).join("");
}
console.log(reflectString("name"));

// let reflect = [];
//   let letters = {
//     'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v', 'm': 'n', 'n':'m'
// };
//   let chars = inputString.split("");
//   reflect = chars.map((letter) => {
//     return letters[letter] ? letters[letter] : letter;
//   });
//   return reflect.join("");
// }