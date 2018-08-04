function integerToStringOfFixedWidth(number, width) {
  number = number.toString();
  if (number.length > width) {
    return number.slice(width);
  }
  else if (number.length < width) {
    return "0".repeat(width - number.length) + number;
  } else {
    return number;
  }
}


console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
