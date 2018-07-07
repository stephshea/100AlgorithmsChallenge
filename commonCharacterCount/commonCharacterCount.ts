function commonCharacterCount(s1: string, s2: string): number {
    const likes = [];
    for (let i = 0; i < s1.length; i++) {
      for (let j = 0; j < s2.length; j++) {
        if (s1.charAt(i) === s2.charAt(j)) {
          likes.push(s2.charAt(j));
        }
      }
    }
    return likes.filter(function(i, j) { 
      return likes.indexOf(i) === j;
      }).length;
    }
console.log(commonCharacterCount('aabcc', 'adcaa'));