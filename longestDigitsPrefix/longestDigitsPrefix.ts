function longestDigitsPrefix(inputString: string): string {
  const newList = inputString.split("");
  let prefix = "";
  for (let item of newList ) {
    let num = parseInt(item);
    if (isNaN(num)) {
      break;
    }
    prefix += num;
  }
    return prefix;
}

console.log(longestDigitsPrefix('123aa1'));