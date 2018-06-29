"use strict";
exports.__esModule = true;
var example_enum_1 = require("./example.enum");
var example = [1, 2, 3, 4, 5, true];
var ex2 = example.map(function (element) {
    return element + 1;
});
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(example_enum_1.NumsEnum.Num1, example_enum_1.NumsEnum.Num2));
console.log(2 + 3);
