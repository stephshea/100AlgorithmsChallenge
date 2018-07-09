function evenDigitsOnly(n: number): boolean {
    const nums = n.toString().split("");
    return nums.every((num) => parseInt(num, 10) % 2 === 0);

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));