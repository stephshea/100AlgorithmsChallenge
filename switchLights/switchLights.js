function switchLights(a) {
 
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 0) {
      return a;
    }
    else if (a[i] === 1) {
      a.forEach((light) => {
        a[i] = 0;
      a[i + 1] = 1; 
    });
  }
    return a;
  }
  
}
console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));
