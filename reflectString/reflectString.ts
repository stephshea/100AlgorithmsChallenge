function reflectString(inputString: string): string {

    const letters = {
      a: 'z', b: 'y', c: 'x', d: 'w', e: 'v',
      f: 'u', g: 't', h: 's', i: 'r', j: 'q',
      k: 'p', l: 'o', m: 'n', n: 'm', o: 'l',
      p: 'k', r: 'i', s: 'h', t: 'g', u: 'f',
      v: 'e', w: 'd', x: 'c', y: 'b', z: 'a'
  };
    let reflected = "";
    inputString.split("").forEach((letter) => {
    reflected += letters[letter];
    });
    return reflected;
}
console.log(reflectString("name"));
