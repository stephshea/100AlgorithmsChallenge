function alphabetSubsequence(s: string): boolean {
  if (s.charCodeAt(1) > s.charCodeAt(0) && s.charCodeAt(2) > s.charCodeAt(1) ) {
    return true;
  }
  return false;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
