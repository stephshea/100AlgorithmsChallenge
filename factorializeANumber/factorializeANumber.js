function factorializeANumber(num) {
let total = 1;
for (let i = 1; i <= num; i++){
total *= i;
}
return total;

//recursion
if (num >= 1) {
return num * factorializeANumber(num-1);
}
else {
return 1;
}
}  
console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
