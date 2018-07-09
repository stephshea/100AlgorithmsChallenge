function evenDigitsOnly(n) {
    const nums = n.toString().split("");
    return nums.every((num) => parseInt(num) % 2 === 0);
} 

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
