function integerToStringOfFixedWidth(number: number, width: number): string {
  number = number.toString();
  const length = number.length;
  if (length > width) {
    return number.slice(width);
  }
  else if (length < width) {
    return "0".repeat(width - length) + number;
  } else {
    return number;
  }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
